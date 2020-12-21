(ns com.vadelabs.turbo.ui.close-button-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.close-button :as ui]
   [com.vadelabs.turbo.ui.styled :as styled]
   [com.vadelabs.turbo.dom :as d])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui DefaultCloseButtonUI
  []
  (ui/close-button))
(defcard DefaultCloseButton DefaultCloseButtonUI)

;; FIXME
(defui StateCloseButtonUI
  []
  (ui/close-button {:disabled? true}))
(defcard StateCloseButton StateCloseButtonUI)

(defui SizesUI
  []
  (<>
   (ui/close-button {:size "sm"})
   (ui/close-button {:size "md"})
   (ui/close-button {:size "lg"})))
(defcard Sizes SizesUI)
