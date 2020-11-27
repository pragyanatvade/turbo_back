(ns com.vadelabs.turbo.ui.helpers
  (:require
   [com.vadelabs.turbo.dom :as dom]
   [com.vadelabs.turbo.themes :as themes]
   [taoensso.encore :as enc]))

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
    {:theme      theme
     :color-mode :light}))

(defn use-style-config
  ([theme-key props]
   (use-style-config theme-key props nil))
  ([theme-key props options]
   (let [{:keys [style-config]}                props
         rest                                  (dissoc props :style-config :children)
         {:keys [theme color-mode]}            (use-turbo)
         theme-style-config                    (get-in theme [theme-key])
         {:keys [base variants default sizes]} (or style-config theme-style-config)
         merged-props                          (enc/nested-merge
                                                 {:theme      theme
                                                  :color-mode color-mode}
                                                 default
                                                 rest)
         styles-ref                            (dom/use-ref {})
         styles-fn                             (fn []
                                                 (let [base        (if (fn? base) (base merged-props) base)
                                                       variant-key (keyword (:variant merged-props))
                                                       variant     (get variants variant-key)
                                                       variant     (if (fn? variant) (variant merged-props) variant)
                                                       size-key    (keyword (:size merged-props))
                                                       size        (get sizes size-key)
                                                       size        (if (fn? size) (size merged-props) size)
                                                       styles      (enc/merge base size variant)]
                                                   (if (= styles (dom/ref-val styles-ref))
                                                     (dom/ref-val styles-ref)
                                                     (dom/set-ref-val! styles-ref styles))))]
     (dom/use-memo styles-fn))))

(comment

  (use-theme)

  )
