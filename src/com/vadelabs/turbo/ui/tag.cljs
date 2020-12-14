(ns com.vadelabs.turbo.ui.tag
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [com.vadelabs.turbo.ui.icons :as icons]
   [com.vadelabs.turbo.dom :as d]))

(defui Tag
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-multi-style-config :Tag props)
        container-styles (enc/assoc-some
                          (:container styles)
                          :display "inline-flex"
                          :vertical-align "top"
                          :align-items "center"
                          :max-width "100%")
        props (enc/assoc-some
               props
               :turbo$css container-styles
               :as "span")]
    (tuh/styles-provider
     {:value styles}
     (block props children))))
(def tag (comp/factory Tag))

(defui TagLabel
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:label styles)
               :truncated? true
               :as "span")]
    (block props children)))
(def label (comp/factory TagLabel))

(defui TagLeftIcon
  [props]
  (let [{:keys [children]} props
        props (enc/assoc-some
               props
               :vertical-align "top"
               :mr "0.5rem")]
    (icons/icon props children)))
(def left-icon (comp/factory TagLeftIcon))

(defui TagRightIcon
  [props]
  (let [{:keys [children]} props
        props (enc/assoc-some
               props
               :vertical-align "top"
               :ml "0.5rem")]
    (icons/icon props children)))
(def right-icon (comp/factory TagRightIcon))

(defui TagCloseIcon
  [props]
  (let [props (enc/assoc-some
               props
               :vertical-align "inherit"
               :view-box "0 0 512 512")]
    (icons/icon
     props
     (d/path
      {:fill "currentColor"
       :d "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))))
(def close-icon (comp/factory TagCloseIcon))

(defui TagCloseButton
  [props]
  (let [{:keys [children disabled?]
         :or {children (close-icon)}} props
        styles (tuh/use-styles)
        button-styles (enc/assoc-some
                       (:close-button styles)
                       :display "flex"
                       :align-items "center"
                       :justify-content "center"
                       :outline "0"
                       :transition "all 0.2s")
        _ (println "STYLES" button-styles)
        props (enc/assoc-some
               props
               :turbo$css button-styles
               :as "button"
               :disabled disabled?
               :type "button")]
    (block
     props
     children)))
(def close-button (comp/factory TagCloseButton))
