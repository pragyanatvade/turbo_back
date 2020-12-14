(ns com.vadelabs.turbo.styled.system
  (:require
   [taoensso.encore :as enc]
   [clojure.string :as str]
   [stylefy.core :as stylefy]
   [garden.stylesheet :refer [at-media]]))


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

(defn- parser
  ([config props style-keys]
   (parser config props style-keys (:theme props)))
  ([config props style-keys theme]
   (let [props        (enc/merge
                       (:turbo$css props)
                       props
                       (:turbo$override props))
         truncate-style (cond
                          (:truncated? props) {:overflow "hidden"
                                               :text-overflow "ellipsis"
                                               :white-space "nowrap"}
                          :else {})
         style-props  (filter-props props style-keys)
         pseudo-props (:pseudo props)
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
         style (enc/merge style truncate-style)
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
                             acc))
                         )
                       {} style-props)
         pseudo       (reduce-kv
                       (fn [acc key val]
                         (let [{:keys [style media]} (parser config val style-keys theme)
                               style                 (when-not (empty? style) {key style})
                               media                 (when-not (empty? media) {key media})
                               media                 (reduce-kv
                                                      (fn [a k v]
                                                        (let [[[k1 v1]] (into [] v)]
                                                          (assoc a k1 {::stylefy/mode {k v1}})))
                                                      {}
                                                      media)]
                           (enc/assoc-some
                            acc
                            :style style
                            :media media)))
                       {}
                       pseudo-props)
         comb         (reduce-kv
                       (fn [acc key val]
                         (let [val (cond
                                     (vector? val) (first val)
                                     (map? val)    (get val :base val)
                                     :else         val)]
                           (conj acc [key (:style (parser config val style-keys theme))])))
                       []
                       comb-props)
         media-comb   (reduce-kv
                       (fn [acc key val]
                         (let [val                               (cond
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
                               result                            (loop [acc []
                                                                        idx 0
                                                                        val val]
                                                                   (if (or (empty? val) (nil? val))
                                                                     acc
                                                                     (let [query (get media-queries idx)
                                                                           style (:style (parser config (first val) style-keys theme))]
                                                                       (if (and query style)
                                                                         (recur (conj acc (at-media query [[key style]])) (inc idx) (rest val))
                                                                         (recur acc (inc idx) (rest val))))))]
                           result)
                         )
                       []
                       comb-props)
         comb         (when (not-empty comb) comb)
         comb         (if (not-empty media-comb)
                        (into comb media-comb)
                        comb)
         media        (enc/nested-merge media (:media pseudo))]
     {:style       (when-not (empty? style) style)
      :media       (when-not (empty? media) media)
      :pseudo      (when-not (empty? pseudo) (:style pseudo))
      :combinators (when-not (empty? comb) comb)})))

(defn- create-parser
  [config]
  (fn [props style-keys]
    (let [{:keys [style media pseudo combinators]} (parser config props style-keys)]
      (enc/assoc-some
        style
        ::stylefy/media media
        ::stylefy/mode pseudo
        ::stylefy/manual combinators))))

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
