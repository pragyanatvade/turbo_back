(ns com.vadelabs.turbo.ui.icons
  (:require
   [com.vadelabs.turbo.dom :as dom :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [Block]]))

(defui Icon
  [])

(defn create-icon
  [options]
  (let [{:keys []} options]
    [:& Icon ]))
