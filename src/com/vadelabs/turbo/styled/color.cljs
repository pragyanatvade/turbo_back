(ns com.vadelabs.turbo.styled.color
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

(def config
  {:color            {:property :color
                      :scale    :colors}
   :background-color {:property :background-color
                      :scale    :colors}
   :opacity          true})

(def parser (system (assoc config
                           :bg (:background-color config))))

(comment

  (def style-1 (parser {:color "gold"
                        :bg    "tomato"}))

  style-1
  )
