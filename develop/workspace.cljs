(ns workspace
  (:require
   [com.vadelabs.turbo.dom :as dom :refer [defui]]
   [goog.dom :as gdom]
   [com.vadelabs.turbo.ui.block :as block]))

(defui Root
  []
  [:& block/Block {:bg    "tomato"
                   :w     "100%"
                   :p     4
                   :color "white"}
   "This is Block"])

(defn ^:export init
  []
  (dom/attach (dom/element Root) (gdom/getElement "app"))
  (js/console.log "Loaded"))

(defn ^:export refresh
  []
  (dom/detach (gdom/getElement "app"))
  (dom/attach (dom/element Root) (gdom/getElement "app"))
  (js/console.log "Hot reloaded"))
