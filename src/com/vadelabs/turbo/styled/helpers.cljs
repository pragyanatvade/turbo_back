(ns com.vadelabs.turbo.styled.helpers
  (:require [garden.color :as gc]))

(defn get-color
  "Get the color raw value from theme"
  [theme color fallback]
  (let [hex (get-in theme [:colors color] color)]
    (if (gc/hex? hex)
      hex
      )))
