(ns com.vadelabs.turbo.styled.background
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))


(def config
  {:background          true
   :background-image    true
   :background-size     true
   :background-position true
   :background-repeat   true})

(def parser (system (assoc
                      config
                      :bg-image (:background config)
                      :bg-size (:background-size config)
                      :bg-position (:backgorund-position config)
                      :bg-repeat (:background-repeat config))))

(comment

  (def style (parser {:background-image "url(kitten.gif)"}))

  style

  )
