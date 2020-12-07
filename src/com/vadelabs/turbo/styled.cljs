(ns com.vadelabs.turbo.styled
  (:require
   [stylefy.core :as stylefy :refer [use-style]]
   [com.vadelabs.turbo.styled.parser :as p]
   [com.vadelabs.turbo.themes :as themes]))

(defn style
  [props]
  (let [theme (get props :theme (themes/build props))]
    (p/parse (assoc props :theme theme) p/style-keys)))

(defn stylify
  [props]
  (let [style (style props)]
    (:class (use-style style))))
