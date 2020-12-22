(ns com.vadelabs.turbo.ui.spinner-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.spinner :as ui]
   )
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui SpinnerBasicUI
  []
  (ui/spinner))

(defcard SpinnerBasic SpinnerBasicUI)

(defui SpinnerColorUI
  []
  (ui/spinner {:color "red.500"}))
(defcard SpinnerColor SpinnerColorUI)

(defui SpinnerSizeUI
  []
  (<>
   (map
    (fn [size]
      (ui/spinner {:key size
                   :margin "3"
                   :color "green.500"
                   :size size}))
    ["xl" "lg" "md" "sm" "xs"])))
(defcard SpinnerSize SpinnerSizeUI)

(defui SpinnerSpeedUI
  []
  (ui/spinner {:color "blue.500" :empty-color "gray.200"
               :speed "0.8s"}))
(defcard SpinnerSpeed SpinnerSpeedUI)

(defui SpinnerEmptyColorUI
  []
  (ui/spinner {:color "red.500"
               :empty-color "gray.200"}))
(defcard SpinnerEmptyColor SpinnerEmptyColorUI)
