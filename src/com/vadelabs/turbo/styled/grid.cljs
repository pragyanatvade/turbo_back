(ns com.vadelabs.turbo.styled.grid
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

(def ^:private DEFAULTS
  {:space [0 4 8 16 32 64 128 256 512]})


(def ^:private config
  {:grid-gap              {:property      :grid-gap
                           :scale         :space
                           :default-scale (:space DEFAULTS)}
   :grid-column-gap       {:property      :grid-column-gap
                           :scale         :space
                           :default-scale (:space DEFAULTS)}
   :grid-row-gap          {:property      :grid-row-gap
                           :scale         :space
                           :default-scale (:space DEFAULTS)}
   :grid-column           true
   :grid-row              true
   :grid-auto-flow        true
   :grid-auto-columns     true
   :grid-auto-rows        true
   :grid-template-columns true
   :grid-template-rows    true
   :grid-template-areas   true
   :grid-area             true})

(def parser (system config))

(comment

  (def style-1 (parser {:grid-gap 32}))

  style-1

  )
