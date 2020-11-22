(ns com.vadelabs.turbo.helpers
  (:require
   [com.vadelabs.turbo.dom :as dom]
   [com.vadelabs.turbo.themes :as themes]))

(def theme-context (dom/create-context themes/theme))
(defn use-theme
  []
  (dom/use-context theme-context))

(def color-mode-context (dom/create-context {}))
(defn use-color-mode
  []
  (dom/use-context color-mode-context))

(defn use-turbo
  []
  )
