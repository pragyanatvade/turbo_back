(ns com.vadelabs.turbo.styled.border
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

(def config
  {:border                     {:property :border
                                :scale    :borders}
   :border-width               {:property :border-width
                                :scale    :border-widths}
   :border-style               {:property :border-style
                                :scale    :border-styles}
   :border-color               {:property :border-color
                                :scale    :border-colors}
   :border-radius              {:property :border-radius
                                :scale    :radii}
   :border-top                 {:property :border-top
                                :scale    :borders}
   :border-top-left-radius     {:property :border-top-left-radius
                                :scale    :radii}
   :border-top-right-radius    {:property :border-top-right-radius
                                :scale    :radii}
   :border-right               {:property :border-right
                                :scale    :borders}
   :border-bottom              {:property :border-bottom
                                :scale    :borders}
   :border-bottom-left-radius  {:property :border-bottom-left-radius
                                :scale    :radii}
   :border-bottom-right-radius {:property :border-bottom-right-radius
                                :scale    :radii}
   :border-left                {:property :border-left
                                :scale    :borders}
   :border-x                   {:properties [:border-left :border-right]
                                :scale      :borders}
   :border-y                   {:properties [:border-top :border-bottom]
                                :scale      :borders}
   :border-top-width           {:property :border-top-width
                                :scale    :border-widths}
   :border-top-color           {:property :border-top-color
                                :scale    :colors}
   :border-top-style           {:property :border-top-style
                                :scale    :border-styles}
   :border-bottom-width        {:property :border-bottom-width
                                :scale    :border-widths}
   :border-bottom-color        {:property :border-bottom-color
                                :scale    :colors}
   :border-bottom-style        {:property :border-bottom-style
                                :scale    :border-styles}
   :border-left-width          {:property :border-left-width
                                :scale    :border-widths}
   :border-left-color          {:property :border-left-color
                                :scale    :colors}
   :border-left-style          {:property :border-left-style
                                :scale    :border-styles}
   :border-right-width         {:property :border-right-width
                                :scale    :border-widths}
   :border-right-color         {:property :border-right-color
                                :scale    :colors}
   :border-right-style         {:property :border-right-style
                                :scale    :border-styles}
   })

(def parser (system config))

(comment

  (def style-1 (parser {:border "1px solid gold"}))

  style-1

  (def style-2 (parser {:theme {:border-widths {:thin 1}
                                :colors        {:primary "red"}
                                :border-styles {:thick "solid"}
                                :radii         {:small 5}}
                        
                        :border-top-width           "thin"
                        :border-top-color           "primary"
                        :border-top-style           "thick"
                        :border-top-left-radius     "small"
                        :border-top-right-radius    "small"
                        :border-bottom-width        "thin"
                        :border-bottom-color        "primary"
                        :border-bottom-style        "thick"
                        :border-bottom-left-radius  "small"
                        :border-bottom-right-radius "small"
                        :border-right-width         "thin"
                        :border-right-style         "thick"
                        :border-right-color         "primary"
                        :border-left-width          "thin"
                        :border-left-color          "primary"
                        :border-left-style          "thick"
                        }))
  style-2

  (def style-3 (parser {:theme {:radii {:small 5}}

                        :border-top-left-radius     "small"
                        :border-top-right-radius    "small"
                        :border-bottom-right-radius "small"
                        :border-bottom-left-radius  "small"}))

  style-3



  )
