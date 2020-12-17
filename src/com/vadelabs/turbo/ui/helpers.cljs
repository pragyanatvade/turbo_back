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
  ([theme-key props {:keys [multi-part?]}]
   (let [{:keys [style-config]}                      props
         rest                                        (dissoc props :style-config :children)
         {:keys [theme color-mode]}                  (use-turbo)
         theme-style-config                          (get-in theme [theme-key])
         {:keys [base variants default sizes parts]} (or style-config theme-style-config)
         merged-props                                (enc/nested-merge
                                                       {:theme      theme
                                                        :color-mode color-mode}
                                                       default
                                                       rest)
         ;; styles-ref                            (hooks/use-ref {})
         styles-fn                                   (fn []
                                                       (let [base        (if (fn? base) (base merged-props) base)
                                                             variant-key (keyword (:variant merged-props))
                                                             variant     (get variants variant-key)
                                                             variant     (if (fn? variant) (variant merged-props) variant)
                                                             size-key    (keyword (:size merged-props))
                                                             size        (get sizes size-key)
                                                             size        (if (fn? size) (size merged-props) size)
                                                             styles      (enc/nested-merge base size variant)
                                                             ;; styles      (if (and multi-part? parts)
                                                             ;;               (reduce
                                                             ;;                 (fn [acc part]
                                                             ;;                   (assoc acc ))
                                                             ;;                 styles
                                                             ;;                 parts)
                                                             ;;               styles)
                                                             ]
                                                         styles))
         ;; (if (= styles @styles-ref)
         ;;   @styles-ref
         ;;   (swap! styles-ref styles))))
         ]
     (styles-fn))))

(defn use-multi-style-config
  [theme-key props]
  (use-style-config theme-key props {:multi-part? true}))

(def styles-context (comp/create-context {}))
(defn styles-provider
  [value children]
  (comp/provider {:context styles-context :value value} children))
(defn use-styles []
  (:value (hooks/use-context styles-context)))

(def alert-context (comp/create-context {}))
(defn alert-provider
  [value children]
  (comp/provider {:context alert-context :value value} children))
(defn use-alert-context []
  (:value (hooks/use-context alert-context)))

(defn use-image
  [props]
  (let [{:keys [src src-set on-load on-error
                cross-origin sizes ignore-fallback?]}
        props
        [status set-status] (hooks/use-state "pending")
        _ (hooks/use-effect
           [src]
           (set-status (if src "loading" "pending")))
        image-ref (hooks/use-ref nil)
        flush (fn []
                (when @image-ref
                  (reset! image-ref nil)))
        load (hooks/use-callback
              [src cross-origin src-set sizes on-load on-error]
              (fn []
                (let [img (js/Image.)]
                  (set! (.-src img) src)
                  (when cross-origin
                    (set! (.-crossOrigin img) cross-origin))
                  (when src-set
                    (set! (.-srcSet img) src-set))
                  (when sizes
                    (set! (.-sizes img) sizes))
                  (set! (.-onload img) (fn [event]
                                         (flush)
                                         (set-status "loaded")
                                         (when on-load
                                           (on-load event))))
                  (set! (.-onerror img) (fn [error]
                                          (flush)
                                          (set-status "failed")
                                          (when on-error
                                            (on-error error))))
                  (reset! image-ref img))))]
    (hooks/use-layout-effect
     [status load ignore-fallback?]
     (if (= status "loading")
       (load)
       (fn []
         (flush))))
    (if ignore-fallback?
      "loaded"
      status)))
