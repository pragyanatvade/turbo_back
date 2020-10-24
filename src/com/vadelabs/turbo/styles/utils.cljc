(ns com.vadelabs.turbo.styles.utils
  (:require
   [clojure.string :as string]))

(defn string->camel-case
  "Returns camel case version of the string, e.g. \"font-size\"
  becomes \"fontSize\"."
  [value]
  (let [[first-word & words] (string/split value #"-")]
    (if (or (= first-word "data"
               first-word "area"))
      value
      (-> (map string/capitalize words)
          (conj first-word)
          string/join))))

(defn keyword->camel-case
  "Returns camel case version of the keyword, e.g., :font-size
   becomes \"fontSize\"."
  [value]
  (if (keyword? value)
    (string->camel-case (name value))
    value))

(defn map->camel-map
  "Convert keys of map to camel case version."
  [props]
  (reduce-kv
    (fn [acc key value]
      (assoc
        acc
        (keyword->camel-case key)
        (if (map? value)
          (map->camel-map value)
          value)))
    {}
    props))
