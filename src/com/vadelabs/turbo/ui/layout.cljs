(ns com.vadelabs.turbo.ui.layout
  (:refer-clojure :exclude [Box List])
  (:require
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :as ui]
   [com.vadelabs.turbo.ui.helpers :as tuh]))


(defui Box
  [props]
  (let [{:keys [children]} props]
    (ui/block props children)))
(def box (comp/factory Box))

;; (defui AspectRatio
;;   [props]
;;   )

(defui Badge
  [props]
  (let [{:keys [children]} props
        style              (tuh/use-style-config :Badge props)
        props              (assoc props
                                  :turbo$css (assoc
                                               style
                                               :display        "inline-block"
                                               :white-space    "nowrap"
                                               :vertical-align "middle")
                                  :as "span")]
    (box props children)))
(def badge (comp/factory Badge))

;; (defui Square
;;   [props]
;;   (let [{:keys [children size center?]
;;          :or   {center? true}} props
;;         rest                   (dissoc props
;;                                        :children
;;                                        :size
;;                                        :center?)
;;         style-map              (if center?
;;                                  {:display         "flex"
;;                                   :align-items     "center"
;;                                   :justify-content "center"}
;;                                  {})
;;         style-map              (assoc style-map
;;                                       :flex-shrink 0
;;                                       :flex-grow 0)
;;         rest                   (assoc rest
;;                                       :box-size size
;;                                       :turbo$css style-map)]
;;     [:& Box rest children]))

;; (defui Circle
;;   [props]
;;   (let [{:keys [size children]} props
;;         rest                    (dissoc props :size children)
;;         rest                    (assoc rest
;;                                        :size size
;;                                        :border-radius "9999px")]
;;     [:& Square rest children]))

;; (defui Center
;;   "Turbo component to horizontally and vertically center it's children"
;;   [props]
;;   (let [{:keys [children]} props
;;         style              {}
;;         rest               (dissoc props :children)
;;         rest               (assoc rest
;;                                   :turbo$css (assoc style
;;                                                     :display         "flex"
;;                                                     :align-items     "center"
;;                                                     :justify-content "center"))]
;;     [:& Box rest children]))

;; (defui Code
;;   "Turbo component to render inline code snippets"
;;   [props]
;;   (let [{:keys [children]} props
;;         style              (tuh/use-style-config :Code props)
;;         rest               (dissoc props :children)
;;         rest               (assoc rest
;;                                   :turbo$css (assoc
;;                                                style
;;                                                :display "inline-block")
;;                                   :as                "code")]
;;     [:& Box rest children]))

;; (defn- transform
;;   [props]
;;   (reduce-kv
;;     (fn [acc prop prop-value]
;;       (if prop-value
;;         (assoc acc prop (str "container." prop-value))
;;         acc))
;;     {}
;;     props))

;; (defui Container
;;   "Turbo component to wrap app or website content
;;    It sets `margin-left` and `margin-right` to `auto`
;;    to keep it's content centered"
;;   [props]
;;   (let [{:keys [max-width width min-width
;;                 w min-w max-w center? children]} props
;;         rest                                     (dissoc props :max-width
;;                                                          :width :min-width
;;                                                          :w :min-w :max-w :center?
;;                                                          :children)
;;         width-props                              (transform {:max-w     max-w
;;                                                              :max-width max-width
;;                                                              :width     width
;;                                                              :w         w
;;                                                              :min-width min-width
;;                                                              :min-w     min-w})
;;         turbo-css                                {:w     "100%"
;;                                                   :mx    "auto"
;;                                                   :max-w "60ch"
;;                                                   :px    "1rem"}
;;         turbo-css                                (if center?
;;                                                    (assoc turbo-css
;;                                                           :display "flex"
;;                                                           :flex-direction "column"
;;                                                           :align-items "center")
;;                                                    turbo-css)
;;         rest                                     (assoc rest
;;                                                         :turbo$css (enc/merge turbo-css width-props))]
;;     [:& Box rest children]))

;; (defui Divider
;;   "Turbo layout component to visually separate content in a list or group.
;;    It display a thin horizontal or vertical line, and renders a `hr` tag"
;;   [props]
;;   (let [{:keys [children orientation]
;;          :or   {orientation "horizontal"}} props
;;         style                              (tuh/use-style-config :Divider props)
;;         {:keys [border-left-width
;;                 border-right-width
;;                 border-width
;;                 border-bottom-width
;;                 border-top-width]}         style

;;         divider-styles {:vertical   {:border-left-width (or border-left-width border-right-width border-width "1px")
;;                                      :height            "100%"}
;;                         :horizontal {:border-bottom-width (or border-bottom-width border-top-width border-width "1px")
;;                                      :width               "100px"}}
;;         divider-style  ((keyword orientation) divider-styles)
;;         turbo-css      (enc/merge style divider-style)
;;         rest           (dissoc props :children :orientation)
;;         rest           (assoc rest
;;                               :turbo$css turbo-css
;;                               :role "separator"
;;                               :aria-orientation orientation
;;                               :as :hr)]
;;     [:& Box rest children]))

;; (defui Flex
;;   "Turbo component used to create flexbox layouts. It renders a `div`
;;    with `display: flex` and comes with helpful style shorthand."
;;   [props]
;;   (let [{:keys [direction align
;;                 justify wrap
;;                 basis grow
;;                 shrink children]} props
;;         props                     (assoc props
;;                                          :turbo$css {:display         "flex"
;;                                                      :flex-direction  direction
;;                                                      :align-items     align
;;                                                      :justify-content justify
;;                                                      :flex-wrap       wrap
;;                                                      :flex-basis      basis
;;                                                      :flex-grow       grow
;;                                                      :flex-shrink     shrink})]
;;     [:& Box props children]))

;; (defui Grid
;;   "Turbo layout component to create grid layouts.
;;    It renders `div` with `display: grid` and comes
;;    with helpful style shorthand."
;;   [props]
;;   (let [{:keys [area template-areas gap row-gap
;;                 column-gap column row auto-flow
;;                 auto-rows template-rows auto-columns
;;                 template-columns children]} props
;;         props                               (assoc props
;;                                                    :turbo$css {:display               "grid"
;;                                                                :grid-area             area
;;                                                                :grid-template-areas   template-areas
;;                                                                :grid-gap              gap
;;                                                                :grid-row-gap          row-gap
;;                                                                :grid-column-gap       column-gap
;;                                                                :grid-auto-columns     auto-columns
;;                                                                :grid-column           column
;;                                                                :grid-row              row
;;                                                                :grid-auto-flow        auto-flow
;;                                                                :grid-auto-rows        auto-rows
;;                                                                :grid-template-rows    template-rows
;;                                                                :grid-template-columns template-columns})]
;;     [:& Box props children]))

;; (defn- span-fn
;;   [span?]
;;   (cond
;;     (vector? span?) (into [] (map (fn [item]
;;                                     (if (= item "auto")
;;                                       "auto"
;;                                       (str "span " item "/span " item))) span?))
;;     (map? span?)    (reduce-kv
;;                       (fn [acc key val]
;;                         (if (= val "auto")
;;                           (assoc acc key "auto")
;;                           (assoc acc key (str " span " val "/span " val))))
;;                       {}
;;                       span?)
;;     (nil? span?)    span?
;;     :else           (str "span " span? "/span " span?)))

;; (defui GridItem
;;   [props]
;;   (let [{:keys [col-span col-start col-end
;;                 row-end row-span row-start
;;                 children]} props
;;         props              (assoc props
;;                                   :turbo$css {:grid-column       (span-fn col-span)
;;                                               :grid-row          (span-fn  row-span)
;;                                               :grid-column-start col-start
;;                                               :grid-column-end   col-end
;;                                               :grid-row-start    row-start
;;                                               :grid-row-end      row-end})]
;;     [:& Box props children]))

;; (defui Heading
;;   [props]
;;   (let [{:keys [children]} props
;;         style              (tuh/use-style-config :Heading props)
;;         rest               (dissoc props :children)
;;         rest               (assoc rest
;;                                   :turbo$css style
;;                                   :as :h2)]
;;     [:& Box rest children]))

;; (defui Kbd
;;   [props]
;;   (let [{:keys [children]} props
;;         style              (tuh/use-style-config :Kbd props)
;;         rest               (dissoc props :children)
;;         rest               (assoc rest
;;                                   :turbo$css (assoc style
;;                                                     :font-family "mono")
;;                                   :as                :kbd)]
;;     [:& Box rest children]))

;; (defui LinkOverlay
;;   [props]
;;   (let [{:keys [children]} props
;;         rest               (dissoc props :children)
;;         rest               (assoc rest
;;                                   :turbo$css {:position "static"
;;                                               :_before  {:content  "''"
;;                                                          :cursor   "inherit"
;;                                                          :display  "block"
;;                                                          :position "absolute"
;;                                                          :top      "0"
;;                                                          :left     "0"
;;                                                          :width    "100%"
;;                                                          :height   "100%"}}
;;                                   :as :a)]
;;     [:& Box rest children]))

;; (defui LinkBox
;;   [props]
;;   (let [{:keys [children href external?]} props
;;         props                             (assoc props
;;                                                  :turbo$css {:pos "relative"})]
;;     [:& Box props children
;;      [:& LinkOverlay {:href   href
;;                       :target (when external? "_blank")
;;                       :rel    (when external? "noopener noreferrer")}]]))

;; (defui Link
;;   [props]
;;   (let [{:keys [children external?]} props
;;         style                        (tuh/use-style-config :Link props)
;;         props                        (assoc props
;;                                             :turbo$css style
;;                                             :target (when external? "_blank")
;;                                             :rel (when external? "noopener noreferrer")
;;                                             :as :a)]
;;     [:& Box props children]))

;; (defui List
;;   [props]
;;   (let [{:keys [as children style-type style-position spacing]
;;          :or   {style-type "none"}} props
;;         props                       (assoc props
;;                                            :list-style-type style-type
;;                                            :list-style-position style-position
;;                                            :role "list"
;;                                            :turbo$css (if spacing {} {}) ;; TODO
;;                                            :as (or as :ul))]
;;     [:& Box props children]))

;; (defui OrderedList
;;   [props]
;;   (let [{:keys [children]} props
;;         props              (assoc props
;;                                   :style-type "decimal"
;;                                   :margin-left "1em"
;;                                   :as :ol)]
;;     [:& List props children]))

;; (defui UnorderedList
;;   [props]
;;   (let [{:keys [children]} props
;;         props              (assoc props
;;                                   :style-type "initial"
;;                                   :margin-left "1em"
;;                                   :as :ul)]
;;     [:& List props children]))

;; (defui ListItem
;;   [props]
;;   (let [{:keys [children]} props
;;         props              (assoc props
;;                                   :as :li)]
;;     [:& Box props children]))

;; (defui ListIcon
;;   [props]
;;   (let [{:keys [children]} props]
;;     [:& Box props children]))


;; (defn- width-to-columns
;;   [count]
;;   (if (vector? count)
;;     (into [] (map (fn [item]
;;                     (if (nil? item)
;;                       nil
;;                       (str "repeat(auto-fit, minmax(" item ", 1fr)")))
;;                   count))
;;     (str "repeat(auto-fit, minmax(" count ", 1fr))")))

;; (defn- count-to-columns
;;   [count]
;;   (cond
;;     (vector? count) (into [] (map (fn [item]
;;                                     (if (nil? item)
;;                                       nil
;;                                       (str "repeat(" item ", 1fr)"))) count))
;;     (map? count)    (reduce-kv
;;                       (fn [acc key val]
;;                         (if (nil? val)
;;                           acc
;;                           (assoc acc key (str "repeat(" val ", 1fr)"))))
;;                       {}
;;                       count)
;;     :else           (str "repeat(" count ", 1fr)")))

;; (defui SimpleGrid
;;   [props]
;;   (let [{:keys [children columns spacing-x spacing-y
;;                 spacing min-child-width]} props
;;         template-columns                  (if min-child-width
;;                                             (width-to-columns min-child-width)
;;                                             (count-to-columns columns))
;;         props                             (assoc props
;;                                                  :gap spacing
;;                                                  :column-gap spacing-x
;;                                                  :row-gap spacing-y
;;                                                  :template-columns template-columns)]
;;     [:& Grid props children]))

;; (defui Spacer
;; "A flexible flex spacer that expands along the major axis of its containing
;;    flex layout. It renders `dev` by default, and takes up any available space."
;; [props]
;;   (let [{:keys [children]} props
;;         rest               (dissoc props :children)
;;         rest               (assoc rest
;;                                   :turbo$css {:flex         1
;;                                               :justify-self "stretch"
;;                                               :align-self   "stretch"})]
;;   [:& Box rest children]))

;; (defui StackDivider
;;   [props]
;;   (let [{:keys [children turbo$css]} props
;;         props                        (assoc props
;;                                             :turbo$css turbo$css
;;                                             :border-width 0
;;                                             :align-self "stretch"
;;                                             :border-color "inherit"
;;                                             :width "auto"
;;                                             :height "auto")]
;;     [:& Box props children]))

;; (defui StackItem
;;   [props]
;;   (let [{:keys [children turbo$css]} props
;;         rest                         (dissoc props :children :turbo$css)
;;         rest                         (assoc rest
;;                                             :turbo$css turbo$css
;;                                             :display "inline-block"
;;                                             :flex "0 0 auto"
;;                                             :min-width 0)]
;;     [:& Box rest children]))


;; (defn- get-stack-styles
;;   [direction spacing]
;;   (let [styles {:column         {:mt spacing :ml "0"}
;;                 :row            {:ml spacing :mt "0"}
;;                 :column-reverse {:mb spacing :mr "0"}
;;                 :row-reverse    {:mr spacing :mb "0"}}]
;;     {:combinators {[:> "*:not(style)"] (get styles (keyword direction))
;;                    [:- "*:not(style)"] (get styles (keyword direction))}}))

;; (defn- get-divider-styles
;;   [direction spacing]
;;   (let [styles {:column         {:my spacing :mx "0" :border-left-width "0" :border-bottom-width "1px"}
;;                 :row            {:mx spacing :my "0" :border-left-width "1px" :border-bottom-width "0"}
;;                 :column-reverse {:my spacing :mx "0" :border-left-width "0" :border-bottom-width "1px"}
;;                 :row-reverse    {:mx spacing :my "0" :border-left-width "1px" :border-bottom-width "0"}}]
;;     {:& (direction styles)}))



;; (defui Stack
;;   [props]
;;   (let [{:keys [children inline? direction align justify
;;                 spacing wrap divider]
;;          :or   {spacing "0.5rem"}} props
;;         direction                  (if inline?
;;                                      "row"
;;                                      (or direction "column"))
;;         styles                     (get-stack-styles direction spacing)
;;         divider?                   (not (nil? divider))
;;         use-children?              (nil? divider)
;;         clones                     (if use-children?
;;                                      children
;;                                      divider)
;;         props                      (assoc props
;;                                           :turbo$css (if divider?
;;                                                        {}
;;                                                        styles)
;;                                           :display "flex"
;;                                           :align-items align
;;                                           :justify-content justify
;;                                           :flex-direction direction
;;                                           :flex-wrap wrap)]
;;     [:& Box props clones]))

;; (defui HStack
;; [props]
;;   (let [{:keys [children]} props
;;         props              (assoc props
;;                                   :align "center"
;;                                   :direction "row")]
;;   [:& Stack props children]))

;; (defui VStack
;; [props]
;; (let [{:keys [children]} props
;;       props              (assoc props
;;                                 :align "center"
;;                                 :direction "column")]
;;   [:& Stack props children]))

;; (defui Text
;; [props]
;; (let [{:keys [children align decoration casing]} props
;;       rest                                       (dissoc props :children
;;                                                          :align :decoration
;;                                                          :casing)
;;       rest                                       (assoc rest
;;                                                         :text-align align
;;                                                         :text-decoration decoration
;;                                                         :text-transform casing
;;                                                         :as :p)]
;;   [:& Box rest children]))

;; (defui Wrap
;; [props]
;;   (let [{:keys [children spacing justify direction align]} props
;;       rest                                               (dissoc props :children
;;                                                                  :spacing :justify :direction
;;                                                                  :align)
;;       rest                                               (assoc rest
;;                                                                 :as :ul)]
;;   [:& Box rest children]))

;; (defui WrapItem
;;   [props]
;;   (let [{:keys [children]} props
;;         rest               (dissoc props :children)
;;         rest               (assoc rest
;;                                   :as :li)]
;;     [:& Box rest children]))
