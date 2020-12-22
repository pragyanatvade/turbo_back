(ns com.vadelabs.turbo.ui.button-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.button :as ui]
   [com.vadelabs.turbo.ui.layout :as l]
   [com.vadelabs.turbo.ui.icons :as icons])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui BasicButtonUI
  []
  (<>
   (ui/button {:color-scheme "gray"} "Button")
   (ui/button {:color-scheme "red"} "Button")
   (ui/button {:color-scheme "green"} "Button")
   (ui/button {:color-scheme "blue"} "Button")
   (ui/button {:color-scheme "teal"} "Button")
   (ui/button {:color-scheme "pink"} "Button")
   (ui/button {:color-scheme "purple"} "Button")
   (ui/button {:color-scheme "cyan"} "Button")
   (ui/button {:color-scheme "orange"} "Button")
   (ui/button {:color-scheme "yellow"} "Button")))
(defcard BasicButton BasicButtonUI)

(defui OutlineButtonUI
  []
  (<>
   (ui/button {:color-scheme "gray" :variant "outline"} "Button")
   (ui/button {:color-scheme "red" :variant "outline"} "Button")
   (ui/button {:color-scheme "green" :variant "outline"} "Button")
   (ui/button {:color-scheme "blue" :variant "outline"} "Button")
   (ui/button {:color-scheme "teal" :variant "outline"} "Button")
   (ui/button {:color-scheme "pink" :variant "outline"} "Button")
   (ui/button {:color-scheme "purple" :variant "outline"} "Button")
   (ui/button {:color-scheme "cyan" :variant "outline"} "Button")
   (ui/button {:color-scheme "orange" :variant "outline"} "Button")
   (ui/button {:color-scheme "yellow" :variant "outline"} "Button")))
(defcard OutlineButton OutlineButtonUI)

(defui WithVariantsUI
  []
  (l/h-stack
   {:spacing "24px"}
   (ui/button {:color-scheme "teal" :variant "solid"} "Button")
   (ui/button {:color-scheme "teal" :variant "outline"} "Button")
   (ui/button {:color-scheme "teal" :variant "ghost"} "Button")
   (ui/button {:color-scheme "teal" :variant "link"} "Button")))
(defcard WithVariants WithVariantsUI)

(defui WithSizesUI
  []
  (l/h-stack
   (ui/button {:color-scheme "blue" :size "xs"} "Button")
   (ui/button {:color-scheme "blue" :size "sm"} "Button")
   (ui/button {:color-scheme "blue" :size "md"} "Button")
   (ui/button {:color-scheme "blue" :size "lg"} "Button")))
(defcard WithSizes WithSizesUI)

(defui WithIconUI
  []
  (l/stack
   {:direction "row" :spacing "4"}
   (ui/button {:left-icon (icons/email)
               :color-scheme "teal"
               :variant "solid"} "Email")
   (ui/button {:right-icon (icons/arrow-forward)
               :color-scheme "teal"
               :variant "outline"} "Call Us")))
(defcard WithIcon WithIconUI)

(defui WithLoadingUI
  []
  (l/stack
   {:direction "row" :spacing "4" :align "center"}
   (ui/button {:loading? true
               :color-scheme "teal"
               :size "lg"} "Email")
   (ui/button {:loading? true
               :color-scheme "blue"}
              "Click Me")
   (ui/button {:loading? true
               :loading-text "Submitting..."
               :color-scheme "teal"
               :variant "outline"}
              "Submit")))
(defcard WithLoading WithLoadingUI)

(defui WithDisabledUI
  []
  (l/h-stack
   {:spacing "24px"}
   (ui/button {:disabled? true
               :color-scheme "teal"
               :variant "solid"}
              "Button")
   (ui/button {:disabled? true
               :color-scheme "teal"
               :variant "outline"}
              "Button")
   (ui/button {:disabled? true
               :color-scheme "teal"
               :variant "ghost"}
              "Button")
   (ui/button {:disabled? true
               :color-scheme "teal"
               :variant "link"}
              "Button")
   ))
(defcard WithDisabled WithDisabledUI)

(defui CustomCompositionUI
  []
  (ui/button
   {:size "md"
    :height "48px"
    :width "200px"
    :border "2px solid"
    :border-color "green.500"}
   "Button"))
(defcard CustomComposition CustomCompositionUI)

(defui IconButtonUI
  []
  (l/stack
   {:direction "row"}
   (ui/icon-button
    {:aria-label "Search Database"
     :icon (icons/search)})
   (ui/icon-button
    {:color-scheme "blue"
     :aria-label "Search Database"
     :icon (icons/search)})
   (ui/icon-button
    {:color-scheme "teal"
     :aria-label "Call Me"
     :size "lg"}
    (icons/phone))))
(defcard IconButton IconButtonUI)

(defui WithButtonGroupUI
  []
  (ui/button-group
   {:variant "outline"}
   (ui/button {:color-scheme "blue"} "Save")
   (ui/button  "Cancel")
   ))
(defcard WithButtonGroup WithButtonGroupUI)

(defui AttachedButtonsUI
  []
  (ui/button-group
   {:size "sm" :attached? true :variant "outline"}
   (ui/button {:mx "-px"} "Save")
   (ui/icon-button
    {:font-size "2xl"
     :aria-label "Add To Friends"
     :icon (icons/chevron-down)})))
(defcard AttachedButtons AttachedButtonsUI)
