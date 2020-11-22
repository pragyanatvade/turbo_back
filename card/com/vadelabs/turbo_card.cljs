(ns com.vadelabs.turbo-card
  (:require
   [com.vadelabs.turbo.ui-card]
   [devcards.core]))

(defn ^:export init
  []
  (devcards.core/start-devcard-ui!))
