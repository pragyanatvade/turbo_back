(ns com.vadelabs.turbo-test
  (:require
   [com.vadelabs.turbo.styled-test]
   [devcards.core]))

(defn ^:export init
  []
  (devcards.core/start-devcard-ui!))
