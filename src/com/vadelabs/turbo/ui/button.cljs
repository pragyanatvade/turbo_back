(ns com.vadelabs.turbo.ui.button
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [com.vadelabs.turbo.ui.spinner :as s]
   [com.vadelabs.turbo.dom :as d]
   [clojure.string :as str]))

(defui ButtonIcon
  [props]
  (let [{:keys [children]} props
        props (enc/assoc-some
               props
               :as "span")]
    (block props children)))
(def button-icon (comp/factory ButtonIcon))

(defui ButtonSpinner
  [props]
  (let [{:keys [label spacing children turbo$css]} props
        spinner-styles (enc/assoc-some
                        turbo$css
                        :display "flex"
                        :align-items "center"
                        :position (if label "relative" "absolute")
                        :mr (if label spacing "0"))
        props (enc/assoc-some
               props
               :turbo$css spinner-styles)
        children (or children (s/spinner {:color "currentColor"
                                          :width "1em"
                                          :height "1em"}))]
    (block props children)))
(def button-spinner (comp/factory ButtonSpinner))

(defui Button
  [props]
  (let [group (tuh/use-button-group)
        styles (tuh/use-style-config :Button (enc/merge group props))
        {:keys [disabled? loading? active?
                full-width? children left-icon
                right-icon loading-text icon-spacing
                type spinner]
         :or {disabled? (:disabled? group)
              icon-spacing "0.5rem"
              type "button"}} props
        button-styles (enc/assoc-some
                       styles
                       :display "inline-flex"
                       :appearance "none"
                       :align-items "center"
                       :justify-content "center"
                       :transition "all 250ms"
                       :user-select "none"
                       :position "relative"
                       :white-space "nowrap"
                       :vertical-align "middle"
                       :outline "none"
                       :width (if full-width? "100%" "auto"))
        props (enc/assoc-some
               props
               :turbo$css button-styles
               :disabled (or disabled? loading?)
               :type type
               :as "button")
        children (comp/vec children)
        left-icon (when (and left-icon (not loading?))
                    (button-icon {:key "left-icon"
                                  :mr icon-spacing} left-icon))
        right-icon (when (and right-icon (not loading?))
                     (button-icon {:key "right-icon"
                                   :ml icon-spacing} right-icon))
        spinner (when loading?
                  (button-spinner
                   {:key "spinner"
                    :spacing icon-spacing
                    :label loading-text
                    :turbo$css {:font-size "1em"
                                :line-height "normal"}}
                   spinner))

        children (if loading?
                   (or loading-text (block
                                     {:key "loading"
                                      :as "span"
                                      :opacity "0"}
                                     children))
                   children)
        children (cond
                   left-icon (into [left-icon] children)
                   right-icon (conj children right-icon)
                   spinner [spinner children]
                   :else children)
        _ (println "CHILDREN" children)]
    (block props children)))
(def button (comp/factory Button))

(defui IconButton
  [props]
  (let [{:keys [icon children round? aria-label]} props
        element (or icon children)
        props (enc/assoc-some
               props
               :padding "0"
               :border-radius (if round? "full" "md")
               :aria-label aria-label)]
    (button props element)))
(def icon-button (comp/factory IconButton))

(defui ButtonGroup
  [props]
  (let [{:keys [size color-scheme variant
                spacing attached? disabled?]
         :or {spacing "0.5rem"}} props
        context (enc/assoc-some
                 {}
                 :size size
                 :color-scheme color-scheme
                 :variant variant
                 :diabled? disabled?)
        group-styles {:display "inline-flex"}
        group-styles (if attached?
                       (enc/assoc-some
                        group-styles
                        :combinators {"> *:first-of-type:not(:last-of-type)" {:border-right-radius "0"}
                                      "> *:not(:first-of-type):not(:last-of-type)" {:border-radius "0"}
                                      "> *:not(:first-of-type):last-of-type" {:border-left-radius "0"}})
                       (enc/assoc-some
                        group-styles
                        :combinators {"&>*:not(style)~*:not(style)" {:margin-left spacing}}))
        props (enc/assoc-some
               props
               :turbo$css group-styles
               :role "group")]
    (tuh/button-group-provider
         {:value context}
         (block props))))
(def button-group (comp/factory ButtonGroup))
