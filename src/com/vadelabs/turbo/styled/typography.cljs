(ns com.vadelabs.turbo.styled.typography
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

(def ^:private DEFAULTS
  {:font-size [12 14 16 20 24 32 48 64 72]})

(def ^:private config
  {:font-family    {:property :font-family
                    :scale    :fonts}
   :font-size      {:property      :font-size
                    :scale         :font-sizes
                    :default-scale (:font-size DEFAULTS)}
   :font-weight    {:property :font-weight
                    :scale    :font-weights}
   :line-height    {:property :line-height
                    :scale    :line-heights}
   :letter-spacing {:property :letter-spacing
                    :scale    :letter-spacings}
   :text-align     true
   :font-style     true})

(def parser (system config))

(comment

  (def style-1 (parser {:font-size   32
                        :font-weight "bold"}))
  style-1

  )

