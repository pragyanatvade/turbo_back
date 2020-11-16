(ns com.vadelabs.turbo.styled.shadow
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

(def ^:private config
  {:box-shadow  {:property :box-shadow
                 :scale    :shadows}
   :text-shadow {:property :text-shadow
                 :scale    :shadows}})

(def parser (system config))

(comment

  (def style-1 (parser {:theme       {:shadows
                                      {
                                       :small "0 1px 4px rgba(0,0,0,0.125)"}}
                        :text-shadow "0 -1px rgba(255,255,255,0.25)"
                        :box-shadow  "small"}))

  style-1

  )

