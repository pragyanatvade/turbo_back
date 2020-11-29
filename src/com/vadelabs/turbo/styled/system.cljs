(ns com.vadelabs.turbo.styled.system
  (:require [taoensso.encore :as enc]
            [clojure.string :as str]))


(def ^:private DEFAULTS
  {:breakpoints ["40em" "52em" "64em"]})

(defn- get-value
  [n scale]
  (let [k     (if (vector? n)
                n
                (if (string? n)
                  (str/split n ".")
                  [n]))
        k     (into [] (map (fn [item]
                              (if (or (string? item) (number? item))
                                (keyword item)
                                item)) k))
        value (get-in scale k)]
    (if (or (map? value) (nil? value))
      n
      value)))

(defn- create-media-queries
  [breakpoints]
  (into [] (map (fn [breakpoint]
                  (let [val (if (string? breakpoint)
                              breakpoint
                              (second breakpoint))]
                    {:screen    true
                     :min-width val}))
                breakpoints)))

(comment

  (def b ["30em" "52em" "64em"])
  (create-media-queries b)
  (def c {:sm "30em"
          :md "52em"
          :lg "64em"})

  (create-media-queries c)

  )

(defn- filter-props
  [props coll]
  (into {} (filter
             (fn [[key val]]
               (and val (contains? coll key)))
             props)))

(defn- create-responsive-style
  [queries style-fn scale value props style-keys]
  (loop [acc {}
         idx 0
         val value]
    (if (empty? val)
      acc
      (let [query (get queries idx)
            v     (first val)
            style (style-fn v scale props)
            style (filter-props style style-keys)]
        (if (and query v)
          (recur (assoc acc query style) (inc idx) (rest val))
          (recur acc (inc idx) (rest val)))))))

(comment

  (def a {:base 1 :md 2})
  (seq? a)
  (seq a)

  )

(defn- parser
  ([config props style-keys pseudo-keys]
   (parser config props style-keys pseudo-keys (:theme props)))
  ([config props style-keys pseudo-keys theme]
   (let [props        (enc/merge (:turbo$css props)
                                 props)
         style-props  (filter-props props style-keys)
         pseudo-props (:pseudo props) ;;(filter-props props pseudo-keys)
         comb-props   (:combinators props)
         style        (reduce-kv
                        (fn [acc key val]
                          (let [style-fn                      (key config)
                                {:keys [scale default-scale]} (meta style-fn)
                                scale                         (if (vector? scale) scale [scale])
                                scale                         (get-in theme scale default-scale)
                                val                           (cond
                                                                (vector? val) (first val)
                                                                (map? val)    (:base val)
                                                                :else         val)
                                style                         (when style-fn
                                                                (style-fn val scale style-props))]
                            (if style
                              (enc/nested-merge acc style)
                              acc)))
                        {} style-props)
         media        (reduce-kv
                        (fn [acc key val]
                          (let [style-fn                          (key config)
                                {:keys [scale default-scale]}     (meta style-fn)
                                scale                             (if (vector? scale) scale [scale])
                                scale                             (get-in theme scale default-scale)
                                val                               (cond
                                                                    (vector? val) (rest val)
                                                                    (map? val)    (into
                                                                                    []
                                                                                    (map
                                                                                      (fn [key]
                                                                                        (if (key val)
                                                                                          (key val)
                                                                                          nil))
                                                                                      [:sm :md :lg :xl]))
                                                                    :else         nil)
                                {:keys [breakpoints]
                                 :or   {breakpoints
                                        (:breakpoints DEFAULTS)}} theme
                                media-queries                     (create-media-queries breakpoints)
                                style                             (create-responsive-style
                                                                    media-queries
                                                                    style-fn scale val style-props style-keys)]
                            (if style
                              (enc/nested-merge acc style)
                              acc)))
                        {} style-props)
         pseudo       (reduce-kv
                        (fn [acc key val]
                          (assoc acc key
                                 (parser config val style-keys pseudo-keys theme)))
                        {}
                        pseudo-props)
         combinators  (reduce-kv
                        (fn [acc key val]
                          (assoc acc key (parser config val style-keys pseudo-keys theme)))
                        {}
                        comb-props)]
     {:style       style
      :media       media
      :pseudo      pseudo
      :combinators combinators})))

(defn- create-parser
  [config]
  (fn [props style-keys pseudo-keys]
    (let [parsed                                   (parser config props style-keys pseudo-keys)
          {:keys [style media pseudo combinators]} parsed
          pseudo-media                             (reduce-kv
                                                     (fn [acc key val]
                                                       (let [media (:media val)]
                                                         (when (not-empty media)
                                                           (let [m (reduce-kv
                                                                     (fn [acc query style]
                                                                       (assoc acc query {:pseudo {key style}}))
                                                                     {}
                                                                     media)]
                                                             (enc/nested-merge acc m)))))
                                                     {}
                                                     pseudo)
          pseudo-vals                              (reduce-kv
                                                     (fn [acc key val]
                                                       (assoc acc key (:style val)))
                                                     {}
                                                     pseudo)
          comb-vals                                (reduce-kv
                                                     (fn [acc key val]
                                                       (assoc acc key (:style val)))
                                                     {}
                                                     combinators)]
      (with-meta style {:media (enc/nested-merge media pseudo-media) :pseudo pseudo-vals :combinators comb-vals}))))

(defn- create-style-function
  [{:keys [properties property scale transform default-scale]
    :or   {transform get-value}}]
  (let [properties (or properties [property])
        style-fn   (fn [value scale props]
                     (let [final-value (transform value scale props)]
                       (if final-value
                         (reduce #(assoc %1 %2 final-value) {} properties)
                         (reduce #(assoc %1 %2 value) {} properties))))]
    (with-meta style-fn {:scale         scale
                         :default-scale default-scale})))


(defn system
  [config]
  (let [config (reduce-kv
                 (fn [acc key val]
                   (cond
                     (= val true) (assoc acc key (create-style-function {:property key
                                                                         :scale    key}))
                     (fn? val)    (assoc acc key val)
                     :else        (assoc acc key (create-style-function val))))
                 {}
                 config)]
    (create-parser config)))

