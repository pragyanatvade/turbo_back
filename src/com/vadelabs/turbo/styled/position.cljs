(ns com.vadelabs.turbo.styled.position
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

(def ^:private DEFAULTS
  {:space [0 4 8 16 32 64 128 256 512]})

(def ^:private config
  {:position true
   :z-index  {:property :z-index
              :scale    :z-indices}
   :top      {:property      :top
              :scale         :space
              :default-scale (:space DEFAULTS)}
   :right    {:property      :right
              :scale         :space
              :default-scale (:space DEFAULTS)}
   :bottom   {:property      :bottom
              :scale         :space
              :default-scale (:space DEFAULTS)}
   :left     {:property      :left
              :scale         :space
              :default-scale (:space DEFAULTS)}})

(def parser (system config))

(comment

  (def style-1 (parser {:position "absolute"
                        :top      0
                        :right    0}))

  style-1

  (def style-2 (parser {:top    1
                        :right  2
                        :bottom 3
                        :left   4}))

  style-2

  (def style-3 (parser {:top    "1px"
                        :right  "2px"
                        :bottom "3px"
                        :left   "4px"}))

  style-3

  )
