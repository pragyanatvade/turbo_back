(ns com.vadelabs.turbo.themes
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.themes.components :refer [components]]
   [com.vadelabs.turbo.themes.foundation :refer [foundation]]
   [com.vadelabs.turbo.dom :as dom]))


(def theme (enc/merge
             components
             foundation))

(defn build
  [_]
  theme)

(def theme-context (dom/create-context theme))
(defn use-theme []
  (dom/use-context theme-context))

(comment

  (use-theme)

  )
