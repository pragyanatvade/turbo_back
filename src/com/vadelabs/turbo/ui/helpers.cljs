(ns com.vadelabs.turbo.ui.helpers
  (:require
   [com.vadelabs.turbo.components :as comp]
   [com.vadelabs.turbo.hooks :as hooks]
   [com.vadelabs.turbo.themes :as themes]
   [taoensso.encore :as enc]))

(def theme-context (comp/create-context themes/theme))
(defn use-theme
  []
  (hooks/use-context theme-context))

(def color-mode-context (comp/create-context {}))
(defn use-color-mode
  []
  (hooks/use-context color-mode-context))


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
         ;; styles-ref                            (hooks/use-ref {})
         styles-fn                             (fn []
                                                 (let [base        (if (fn? base) (base merged-props) base)
                                                       variant-key (keyword (:variant merged-props))
                                                       variant     (get variants variant-key)
                                                       variant     (if (fn? variant) (variant merged-props) variant)
                                                       size-key    (keyword (:size merged-props))
                                                       size        (get sizes size-key)
                                                       size        (if (fn? size) (size merged-props) size)
                                                       styles      (enc/merge base size variant)]
                                                   styles))
         ;; (if (= styles @styles-ref)
         ;;   @styles-ref
         ;;   (swap! styles-ref styles))))
         ]
     (styles-fn))))

(def styles-context (comp/create-context {}))
(defn styles-provider
  [value & children]
  (comp/provider {:context styles-context :value value} children))
(defn use-styles []
  (:value (hooks/use-context styles-context)))

;; (defn cc
;;   [opts]
;;   (let [{:keys [strict? error-message name]
;;          :or   {strict?       true
;;                 error-message "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider"}}
;;         opts
;;         context (hooks/create-context {})
;;         ;; _           (unchecked-set context "displayName" name)
;;         ;; use-context (fn []
;;         ;;               (let [ctx (hooks/use-context context)]
;;         ;;                 (if (and strict? (not ctx))
;;         ;;                   (throw (js/Error. error-message))
;;         ;;                   ctx)))
;;         ;; provider    (hooks/provider context)
;;         ]
;;     (println "HELL" context)
;;     ;; [provider use-context context]
;;     ))

;; (def styles-context (cc {:name          "styles-context"
;;                          :error-message "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `styles-provider`"}))

;; (def styles-provider (get styles-context 0))
;; (def use-styles (get styles-context 1))
