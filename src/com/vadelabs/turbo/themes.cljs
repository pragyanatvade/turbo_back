(ns com.vadelabs.turbo.themes
  (:require
   [com.vadelabs.turbo.themes.foundation :refer [foundation]]
   [com.vadelabs.turbo.dom :as dom]))


(def theme foundation)

(defn build
  [_]
  theme)

(def theme-context (dom/create-context theme))
(defn use-theme []
  (dom/use-context theme-context))

(comment

  (use-theme)

  )
