(ns com.vadelabs.turbo.styled.flexbox
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

(def config
  {:align-items     true
   :align-content   true
   :justify-items   true
   :justify-content true
   :flex-wrap       true
   :flex-direction  true
   :flex            true
   :flex-grow       true
   :flex-shrink     true
   :flex-basis      true
   :justify-self    true
   :align-self      true
   :order           true})

(def parser (system config))


(comment

  (def style-1 (parser {:align-items "center"
                        :flex        "1 1 auto"}))

  style-1
  )
