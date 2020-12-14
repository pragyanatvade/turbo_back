(ns com.vadelabs.turbo-card
  (:require
   [com.vadelabs.turbo.ui-card]
   [devcards.core]
   [stylefy.core :as stylefy]))


(defn ^:export init
  []
  (stylefy/init {:use-caching? false})
  (devcards.core/start-devcard-ui!))
