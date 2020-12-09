(ns com.vadelabs.turbo.ui.icons-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.icons :as ui]
   [com.vadelabs.turbo.dom :as d])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui BasicIconUI
  []
  (ui/icon {:font-size "24px"}))

(defcard BasicIcon BasicIconUI)

(defui ArrowIconUI
  [props]
  (ui/icon
    (assoc props :view-box "0 0 32 32")
    (d/g
      {:fill "currentColor"}
      (d/path {:d "M16,11.5a3,3,0,1,0-3-3A3,3,0,0,0,16,11.5Z"})
      (d/path {:d "M16.868.044A8.579,8.579,0,0,0,16,0a15.99,15.99,0,0,0-.868,31.956A8.579,8.579,0,0,0,16,32,15.99,15.99,0,0,0,16.868.044ZM16,26.5a3,3,0,1,1,3-3A3,3,0,0,1,16,26.5ZM16,15A8.483,8.483,0,0,0,8.788,27.977,13.986,13.986,0,0,1,16,2a6.5,6.5,0,0,1,0,13Z"}))))

(def arrow-icon (comp/factory ArrowIconUI))

(defui CustomIconUI
  []
  (arrow-icon
    {:box-size "40px"
     :color    "red.100"}))

(defcard CustomIcon CustomIconUI)

(defcard AddIcon (ui/add {:box-size "40px"
                          :color    "tomato"}))
(defcard AddI (ui/sun))
