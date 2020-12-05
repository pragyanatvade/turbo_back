(ns com.vadelabs.turbo.styled
  (:require
   [stylefy.core :as stylefy :refer [use-style]]
   [com.vadelabs.turbo.styled.parser :as p]
   [com.vadelabs.turbo.themes :as themes]))

(defn stylify
  [props]
  (let [theme (get props :theme (themes/build props))
        style (p/parse (assoc props :theme theme)
                       p/style-keys p/pseudo-keys)]
    (:class (use-style style))))
