(ns com.vadelabs.turbo.ui.styled-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui $]]
   [com.vadelabs.turbo.ui.styled :as ui])
  (:require-macros
   [devcards.core :refer [defcard]]))


(defui BlockUI
  []
  (ui/block {} "HELLO WORLD"))

(defcard BlockCard BlockUI)


