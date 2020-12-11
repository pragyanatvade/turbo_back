(ns com.vadelabs.turbo.ui.image-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.image :as ui]
   [com.vadelabs.turbo.dom :as d])
  (:require-macros
   [devcards.core :refer [defcard]]))


(defui BasicImageUI
  []
  (ui/image
   {:width ["100px" "200px"]
    :src "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg"
    :alt "Testing Basic Image"}))
(defcard BasicImage BasicImageUI)

(defui FallbackSrcUI
  []
  (ui/image
   {:ignore-fallback? false
    :src "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg"
    :width "300px"
    :fallback-src "https://via.placeholder.com/240"}))
(defcard FallbackSrc FallbackSrcUI)

(defui FallbackComponentUI
  []
  (ui/image
   {:src "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg"
    :fallback (d/div {:style {:width "240px" :height "240px" :background "red"}})}))
(defcard FallbackComponent FallbackComponentUI)

(defui WithFitUI
  []
  (ui/image
   {:src "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg"
    :fallback-src "https://via.placeholder.com/240"
    :fit "cover"
    :width "400px"
    :height "300px"}))
(defcard WithFit WithFitUI)

(defui WithNativeWidthUI
  []
  (ui/image
   {:src "https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_1280.jpg"
    :fallback-src "https://via.placeholder.com/240"
    :html-width "300px"
    :html-height "300px"
    :on-load (fn [] (js/console.log "loaded"))}))
(defcard WithNativeWidth WithNativeWidthUI)
