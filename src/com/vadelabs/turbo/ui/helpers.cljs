(ns com.vadelabs.turbo.ui.helpers
  (:refer-clojure :exclude [get])
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
  (let [theme (use-theme)]
    {:theme theme}))

(defn use-style-config
  ([theme-key props]
   (use-style-config theme-key props nil))
  ([theme-key props options]
   (let [{:keys [theme]} (use-turbo)
         {:keys [base]}  (get-in theme [theme-key])]
     base)))

(comment

  (use-theme)

  )
