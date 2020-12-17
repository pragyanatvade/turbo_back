(ns com.vadelabs.turbo.ui.image
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]))

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
        status (tuh/use-image (assoc props :ignore-fallback? ignore?))
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
