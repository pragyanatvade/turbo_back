(ns com.vadelabs.turbo.styled.system
  (:require [taoensso.encore :as enc]))


(def ^:private DEFAULTS
  {:breakpoints ["40em" "52em" "64em"]})

(defn- get-value
  [n scale]
  (let [k (if (vector? n) n [n])
        k (into [] (map (fn [item]
                          (if (string? item)
                            (keyword item)
                            item)) k))]
    (get-in scale k n)))

(defn- media-query
  [breakpoints]
  (into [] (map (fn [breakpoint]
                  {:screen    true
                   :min-width breakpoint})
                breakpoints)))

(defn parse-responsive-style
  [media sx scale raw props]
  (loop [acc {}
         idx 0
         vec raw]
    (if (empty? vec)
      acc
      (let [med  (get media idx)
            styl (sx (first vec) scale props)]
        (if med
          (recur (assoc acc med styl) (inc idx) (rest vec))
          (recur (merge acc styl) (inc idx) (rest vec)))))))

(defn create-parser
  [config]
  (let [parser (fn [props]
                 (let [theme (get props :theme {})
                       style (reduce-kv
                               (fn [acc key raw]
                                 (let [sx                     (key config)
                                       {default-scale :default-scale
                                        scale         :scale} (meta sx)
                                       scale                  (if (vector? scale) scale [scale])
                                       val                    (if (vector? raw) (first raw) raw)]
                                   (if sx
                                     (let [scale (get-in theme scale default-scale)
                                           style (sx val scale props)]
                                       (enc/nested-merge acc style))
                                     acc))) {} props)
                       media (reduce-kv
                               (fn [acc key raw]
                                 (let [sx                     (key config)
                                       {default-scale :default-scale
                                        scale         :scale} (meta sx)
                                       scale                  (if (vector? scale) scale [scale])
                                       {breakpoints :breakpoints
                                        :or         {breakpoints
                                                     (:breakpoints DEFAULTS)}}
                                       theme
                                       val                    (if (vector? raw) (rest raw) [])]
                                   (if sx
                                     (let [scale (get-in theme scale default-scale)
                                           media (cond
                                                   (vector? raw) (parse-responsive-style
                                                                   (media-query breakpoints)
                                                                   sx scale val props)
                                                   :else         {})]
                                       (enc/nested-merge acc media))
                                     acc))) {} props)]
                   (with-meta style {:media media})))]
    parser))

(defn style-function
  [options]
  (let [{properties    :properties
         property      :property
         scale         :scale
         transform     :transform
         default-scale :default-scale
         :or           {transform get-value}}
        options
        properties (or properties [property])
        sx         (fn [value scale props]
                     (let [n (transform value scale props)]
                       (when n
                         (reduce #(assoc %1 %2 n) {} properties))))]
    (with-meta sx {:scale         scale
                   :default-scale default-scale})))


(defn system
  [options]
  (let [config (reduce-kv
                 (fn [acc key val]
                   (cond
                     (= val true) (assoc acc key (style-function {:property key
                                                                  :scale    key}))
                     (fn? val)    (assoc acc key val)
                     :else        (assoc acc key (style-function val))))
                 {}
                 options)]
    (create-parser config)))


(comment

  (def theme {:colors    {:primary   "rebeccapurple"
                          :secondary "papaywhip"}
              :font-size [0 4 8 16]
              })

  (def parser (system {:color     {:property :color
                                   :scale    :colors}
                       :font-size true
                       }))

  (def styles (parser {:theme     theme
                       :color     ["primary" nil "secondary"]
                       :font-size [1 2 3]
                       }))

  styles
  (meta styles)

  (def config {:color            true
               :background-color {:property :background-color
                                  :scale    :colors}
               :mx               {:scale      :space
                                  :properties [:margin-left :margin-right]}})
  (def parser-2 (system config))

  (def theme-2 {:space  [0 4 8 16 32]
                :colors {:primary "rebeccapurple"}})
  (def styles-2 (parser-2 {:theme            theme-2
                           :color            "tomato"
                           :background-color "primary"
                           :mx               [2 3 4]}))

  styles-2
  (meta styles-2)

  )
