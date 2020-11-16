(ns workspace
  (:require
   [com.vadelabs.turbo.dom :as dom :refer [defui]]
   [goog.dom :as gdom]
   [com.vadelabs.turbo.ui :as ui]))

;; (defui Root
;;   []
;;   [:& ui/Box {} "JELLO BOC"])

(defui Root
  []
  [:div {:style {:background-color "red"}} "DOM LIBR"])

(defn ^:export init
  []
  (dom/attach (dom/element Root) (gdom/getElement "app"))
  (js/console.log "Loaded"))

(defn ^:export refresh
  []
  (dom/detach (gdom/getElement "app"))
  (dom/attach (dom/element Root) (gdom/getElement "app"))
  (js/console.log "Hot reloaded"))
