(ns com.vadelabs.turbo.themes
  (:require [com.vadelabs.turbo.themes.foundation :as f]))

(def theme (merge f/typography {:breakpoints f/breakpoints
                                :z-indices   f/z-indices
                                :radius      f/radius
                                :borders     f/borders
                                :colors      f/colors
                                :sizes       f/sizes
                                :shadows     f/shadows
                                :transition  f/transition}))

(comment

  f/breakpoints

  )
