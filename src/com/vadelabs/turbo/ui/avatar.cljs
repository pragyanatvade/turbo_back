(ns com.vadelabs.turbo.ui.avatar
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [com.vadelabs.turbo.ui.icons :as icons]
   [com.vadelabs.turbo.dom :as d]
   [clojure.string :as str]))

(defui AvatarBadge
  [props]
  (let [styles (tuh/use-styles)
        badge-styles (enc/assoc-some
                      (:badge styles)
                      :position "absolute"
                      :display "flex"
                      :align-items "center"
                      :justify-content "center"
                      :right "0"
                      :bottom "0")
        props (enc/assoc-some
               props
               :turbo$css badge-styles)]
    (println "PROPS" props)
    (block props)
    ))
(def badge (comp/factory AvatarBadge))

(defn- initials
  [name]
  (let [[first-name last-name] (str/split name " ")]
    (if (and first-name last-name)
      (str (get first-name 0) (get last-name 0))
      (get first-name 0))))

(defui AvatarLabel
  [props]
  (let [{:keys [name get-initials]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:label styles)
               :aria-label name)
        label (when name
                (get-initials name))]
    (block props label)))
(def label (comp/factory AvatarLabel))

(defui DefaultIcon
  [props]
  (let [props (enc/assoc-some
               props
               :view-box "0 0 128 128"
               :color "#fff"
               :width "100%"
               :height "100%"
               :as "svg")]
    (block
     props
     (d/path {:fill "currentColor"
              :d "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"})
     (d/path {:fill "currentColor"
              :d "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))))
(def default-icon (comp/factory DefaultIcon))

(defui AvatarImage
  [props]
  (let [{:keys [src on-error get-initials
                name border-radius loading
                icon]
         :or {icon default-icon}} props
        status  (tuh/use-image {:src src :on-error on-error})
        loaded? (= status "loaded")
        show-fallback? (or (not src) (not loaded?))
        image-props (enc/assoc-some
                     {:width "100%"
                      :height "100%"
                      :object-fit "cover"}
                     :border-radius border-radius)
        props (enc/assoc-some
               props
               :turbo$css image-props
               :loading loading
               :as "img")]
    (if show-fallback?
      (if name
        (label {:get-initials get-initials :name name})
        (icon {:role "img"}))
      (block props))))
(def image (comp/factory AvatarImage))

(defui Avatar
  [props]
  (let [{:keys [src name show-border? border-radius
                on-error get-initials icon loading
                children border-color]
         :or {border-radius "full"
              get-initials initials
              icon default-icon}} props
        styles (tuh/use-multi-style-config :Avatar props)
        border-width (when show-border? "2px")
        avatar-styles (enc/assoc-some
                       (:container styles)
                       :border-radius border-radius
                       :border-width border-width
                       :border-color border-color
                       :display "inline-flex"
                       :align-items "center"
                       :justify-content "center"
                       :text-align "center"
                       :text-transform "uppercase"
                       :font-weight "medium"
                       :position "relative"
                       :flex-shrink "0")
        image-props (enc/assoc-some
                     {}
                     :src src
                     :loading loading
                     :on-error on-error
                     :get-initials get-initials
                     :name name
                     :border-radius border-radius
                     :icon icon)
        props (enc/assoc-some
               {}
               :turbo$css avatar-styles
               :as "span")]
    (block props
           (tuh/styles-provider
            {:value styles}
            (image
             image-props
             children)))))
(def avatar (comp/factory Avatar))

(defui AvatarGroup
  [props]
  (let [{:keys [children border-color max spacing border-radius]
         :or {spacing "-0.75rem"
              border-radius "full"}} props
        styles (tuh/use-multi-style-config :Avatar props)
        children-within-max (if max
                              (take max children)
                              children)
        excess (if max
                 (- (count children) max)
                 0)
        reversed-children (reverse children-within-max)]))
(def group (comp/factory AvatarGroup))
