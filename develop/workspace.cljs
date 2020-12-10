(ns workspace
  (:require
   ;; [com.vadelabs.turbo.dom :as dom :refer [defui]]
   ;; [goog.dom :as gdom]
   ["react-dom" :as rdom]
   ;; [com.vadelabs.turbo.ui :as ui]
   ;; [com.vadelabs.turbo.themes :as themes]
   ;; [com.vadelabs.turbo.styled :refer [<class]]
   [stylefy.core :as stylefy]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.layout :as ui]))

(defui Root
  []
  (ui/stack
    {:mt        "10"
     :direction ["column" "row"]
     :divider   {:border-color {:base "green.500" :md "red.200"}}
     ;; :divider   (ui/stack-divider {:border-color {:base "green.500" :md "red.200"}})
     :spacing   "4"}
    (ui/box {:flex "1"
             :w    ["100%" "40px"]
             :h    "40px"
             :bg   "yellow.200"} "1")
    (ui/box {:flex "1"
             :w    ["100%" "40px"]
             :h    "40px"
             :bg   "tomato"} "2")
    (ui/box {:flex "1"
             :w    ["100%" "40px"]
             :h    "40px"
             :bg   "pink.100"} "3")
    ))


(def root-ui (comp/factory Root))

(defn ^:export init
  []
  (stylefy/init {:use-caching? false})
  (rdom/render (root-ui) (js/document.getElementById "app"))
  ;; (dom/attach (dom/element Root) (gdom/getElement "app"))
  (js/console.log "Loaded"))

(defn ^:export refresh
  []
  ;; (dom/detach (gdom/getElement "app"))
  ;; (dom/attach (dom/element Root) (gdom/getElement "app"))
  (js/console.log "Hot reloaded"))
