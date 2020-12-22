(ns com.vadelabs.turbo.ui.visually-hidden-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.visually-hidden :as ui]
   )
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui HiddenSpanUI
  []
  (ui/visually-hidden "This is visually hidden"))
(defcard HiddenSpan HiddenSpanUI)

(defui HiddenInputUI
  []
  (ui/visually-hidden-input))
(defcard HiddenInput HiddenInputUI)
