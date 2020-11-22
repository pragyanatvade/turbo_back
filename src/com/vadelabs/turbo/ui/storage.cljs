(ns com.vadelabs.turbo.ui.storage
  (:refer-clojure :exclude [get])
  (:require
   [cljs.reader :as reader]))


(def storage (.-localStorage js/window))
(def safe-prefix "turbo-ui-")
(defn- safe-key
  [key]
  (str safe-prefix key))

(defn get
  ([key]
   (get key nil))
  ([key not-found]
   (let [value (.get storage (safe-key key))]
     (if (undefined? value)
       not-found
       (reader/read-string value)))))

(defn set!
  ([key value]
   (.set storage (safe-key key) (pr-str value))))
