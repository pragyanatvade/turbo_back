(ns com.vadelabs.turbo.ui.image
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.hooks :as hooks]))

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

(defui NativeImage
  [props]
  (let [{:keys [html-width html-height
                children alt]} props
        props (enc/assoc-some
               props
               :alt alt
               :width html-width
               :height html-height
               :as "img")]
    (block props children)))
(def native-image (comp/factory NativeImage))

(defui Image
  [props]
  (let [{:keys [children fallback-src fallback
                src align fit loading
                ignore-fallback? cross-origin]}
        props
        ignore? (or (not (nil? loading))
                     ignore-fallback?)
        status (use-image (assoc props :ignore-fallback? ignore?))
        props (if ignore?
                props
                (dissoc props :on-error :on-load))
        props (enc/assoc-some
               props
               :object-fit fit
               :object-position align
               :as native-image)
        props (if (not= status "loaded")
                (enc/assoc-some
                 props
                 :src fallback-src)
                (enc/assoc-some
                 props
                 :src src
                 :cross-origin cross-origin
                 :loading loading))]
    (if fallback
      fallback
      (block props children))))
(def image (comp/factory Image))

(defui Img
  [props]
  (let [{:keys [children]} props
        props (enc/assoc-some
               props
               :as native-image)]
    (block props children)))
(def img (comp/factory Img))
