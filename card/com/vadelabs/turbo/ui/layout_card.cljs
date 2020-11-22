(ns com.vadelabs.turbo.ui.layout-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.dom :as dom :refer [defui]])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui Hello
  []
  [:h1 "HELLO COMPONEN"])

(defcard Hello Hello)

