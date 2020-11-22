(ns com.vadelabs.turbo.ui.layout
  (:refer-clojure :exclude [Box List])
  (:require
   [com.vadelabs.turbo.dom :as dom :refer [defui]]
   [com.vadelabs.turbo.styled :refer [stylify]]))

(declare Box)

(defui AspectRatio
  [props]
  )

(defui Badge
  "Turbo layout component to display notification, messages, or
   statuses in different shapes and sizes."
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :turbo$css {:display        "inline-block"
                                              :white-space    "nowrap"
                                              :vertical-align "middle"}
                                  :as :span)]
    [:& Box rest children]))

(defui Box
  "Box is the most abstract component on top of which other turbo
   components are built. It renders a `div` element by default."
  [props]
  (let [{:keys [as children]
         :or   {as :div}} props]
    [(name as) {:class (stylify props)} children]))

(defui Square
  [props]
  (let [{:keys [children size center?]
         :or   {center? true}} props
        rest                   (dissoc props
                                       :children
                                       :size
                                       :center?)
        style-map              (if center?
                                 {:display         "flex"
                                  :align-items     "center"
                                  :justify-content "center"}
                                 {})
        style-map              (assoc style-map
                                      :flex-shrink 0
                                      :flex-grow 0)
        rest                   (assoc rest
                                      :box-size size
                                      :turbo$css style-map)]
    [:& Box rest children]))

(defui Circle
  [props]
  (let [{:keys [size children]} props
        rest                    (dissoc props :size children)
        rest                    (assoc rest
                                       :size size
                                       :border-radius "9999px")]
    [:& Square rest children]))

(defui Center
  "Turbo component to horizontally and vertically center it's children"
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :turbo$css {:display         "flex"
                                              :align-items     "center"
                                              :justify-content "center"})]
    [:& Box rest children]))

(defui Code
  "Turbo component to render inline code snippets"
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :as :code
                                  :turbo$css {:display "inline-block"})]
    [:& Box rest children]))

(defui Container
  "Turbo component to wrap app or website content
   It sets `margin-left` and `margin-right` to `auto`
   to keep it's content centered"
  [props]
  (let [{:keys [max-width width min-width
                w min-w max-w center? children]} props
        rest                                     (dissoc props :max-width
                                                         :width :min-width
                                                         :w :min-w :max-w :center?
                                                         :children)
        turbo-css                                {:w     "100%"
                                                  :mx    "auto"
                                                  :max-w "60ch"
                                                  :px    "1rem"}
        turbo-css                                (if center?
                                                   (assoc turbo-css
                                                          :display "flex"
                                                          :flex-direction "column"
                                                          :align-items "center")
                                                   turbo-css)
        rest                                     (assoc rest
                                                        :turbo$css turbo-css)]
    [:& Box rest children]))

(defui Divider
  "Turbo layout component to visually separate content in a list or group.
   It display a thin horizontal or vertical line, and renders a `hr` tag"
  [props]
  (let [{:keys [children orientation]
         :or   {orientation :horizontal}} props
        style                             {:vertical   {:border-left-width "1px"
                                                        :height            "100%"}
                                           :horizontal {:border-bottom-width "1px"
                                                        :width               "100px"}}
        turbo-css                         (assoc ((keyword orientation) style)
                                                 :border "0"
                                                 :opacity 0.6
                                                 :border-color "inherit"
                                                 :border-style "solid")
        rest                              (dissoc props :children :orientation)
        rest                              (assoc rest
                                                 :turbo$css turbo-css
                                                 :as :hr)]
    [:& Box rest children]))

(defui Flex
  "Turbo component used to create flexbox layouts. It renders a `div`
   with `display: flex` and comes with helpful style shorthand."
  [props]
  (let [{:keys [direction align
                justify wrap
                basis grow
                shrink children]} props
        rest                      (dissoc props :direction
                                          :align :justify
                                          :wrap :basis
                                          :grow :shrink
                                          :children)
        rest                      (assoc rest
                                         :turbo$css {:display         "flex"
                                                     :flex-direction  direction
                                                     :align-items     align
                                                     :justify-content justify
                                                     :flex-wrap       wrap
                                                     :flex-basis      basis
                                                     :flex-grow       grow
                                                     :flex-shrink     shrink})]
    [:& Box rest children]))

(defui Grid
  "Turbo layout component to create grid layouts.
   It renders `div` with `display: grid` and comes
   with helpful style shorthand."
  [props]
  (let [{:keys [area template-areas gap row-gap
                column-gap column row auto-flow
                auto-rows template-rows auto-columns
                template-columns children]} props
        rest                                (dissoc props :children :area
                                                    :template-areas :gap
                                                    :row-gap :column-gap
                                                    :column :row :auto-flow
                                                    :auto-rows :template-rows
                                                    :auto-columns :template-columns)
        rest                                (assoc rest
                                                   :turbo$css {:display               "grid"
                                                               :grid-area             area
                                                               :grid-template-areas   template-areas
                                                               :grid-gap              gap
                                                               :grid-row-gap          row-gap
                                                               :grid-column-gap       column-gap
                                                               :grid-auto-columns     auto-columns
                                                               :grid-column           column
                                                               :grid-row              row
                                                               :grid-auto-flow        auto-flow
                                                               :grid-auto-rows        auto-rows
                                                               :grid-template-rows    template-rows
                                                               :grid-template-columns template-columns})]
    [:& Box rest children]))

(defui GridItem
  [props]
  (let [{:keys [col-span col-start col-end
                row-end row-span row-start
                children]} props
        rest               (dissoc props :children
                                   :col-span :col-start :col-end
                                   :row-end :row-span :row-start)
        rest               (assoc rest
                                  :turbo$css {:grid-column       col-span
                                              :grid-row          row-span
                                              :grid-column-start col-start
                                              :grid-column-end   col-end
                                              :grid-row-start    row-start
                                              :grid-row-end      row-end})]
    [:& Box rest children]))

(defui Heading
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :as :h2)]
    [:& Box rest children]))

(defui Kbd
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :turbo$css {:font-family "mono"}
                                  :as :kbd)]
    [:& Box rest children]))

(defui LinkOverlay
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :turbo$css {:position "static"}
                                  :as :a)]
    [:& Box rest children]))

(defui LinkBox
  [props]
  (let [{:keys [children href target rel external?]} props
        rest                                         (dissoc props :children
                                                             :href :target :rel
                                                             :external?)
        rest                                         (assoc rest
                                                            :turbo$css {:pos "relative"})]
    [:& Box rest children
     [:& LinkOverlay {:href   href
                      :target (when external? "_blank")
                      :rel    (when external? "noopener noreferrer")}]]))

(defui Link
  [props]
  (let [{:keys [children external?]} props
        rest                         (dissoc props :children
                                             :external?)
        rest                         (assoc rest
                                            :target (when external? "_blank")
                                            :rel (when external? "noopener noreferrer")
                                            :as :a)]
    [:& Box rest children]))

(defui List
  [props]
  (let [{:keys [as children style-type style-position spacing]
         :or   {style-type "none"}} props
        rest                        (dissoc props :children
                                            :style-type :style-position
                                            :spacing
                                            :as)
        rest                        (assoc rest
                                           :list-style-type style-type
                                           :list-style-position style-position
                                           :role "list"
                                           :turbo$css (if spacing {} {}) ;; TODO
                                           :as (or as :ul))]
    [:& Box rest children]))

(defui OrderedList
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :style-type "decimal"
                                  :margin-left "1em"
                                  :as :ol)]
    [:& List rest children]))

(defui UnorderedList
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :style-type "initial"
                                  :margin-left "1em"
                                  :as :ul)]
    [:& List rest children]))

(defui ListItem
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :as :li)]
    [:& Box rest children]))

(defui ListIcon
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)]
    [:& Box rest children]))


(defui SimpleGrid
  [props]
  (let [{:keys [children columns spacing-x spacing-y
                spacing min-child-width]} props
        rest                              (dissoc props :children
                                                  :columns :spacing-x
                                                  :spacing-y :spacing :min-child-width)
        template-columns                  (if min-child-width
                                            []
                                            [])
        rest                              (assoc rest
                                                 :gap spacing
                                                 :column-gap spacing-x
                                                 :row-gap spacing-y
                                                 :template-columns template-columns)]
    [:& Grid rest children]))

(defui Spacer
  "A flexible flex spacer that expands along the major axis of its containing
   flex layout. It renders `dev` by default, and takes up any available space."
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :turbo$css {:flex         1
                                              :justify-self "stretch"
                                              :align-self   "stretch"})]
    [:& Box rest children]))

(defui StackDivider
  [props]
  (let [{:keys [children turbo$css]} props
        rest                         (dissoc props :children :turbo$css)
        rest                         (assoc rest
                                            :turbo$css turbo$css
                                            :border-width 0
                                            :align-self "stretch"
                                            :border-color "inherit"
                                            :width "auto"
                                            :height "auto")]
    [:& Box rest children]))

(defui StackItem
  [props]
  (let [{:keys [children turbo$css]} props
        rest                         (dissoc props :children :turbo$css)
        rest                         (assoc rest
                                            :turbo$css turbo$css
                                            :display "inline-block"
                                            :flex "0 0 auto"
                                            :min-width 0)]
    [:& Box rest children]))


(defui Stack
  [props]
  (let [{:keys [children inline? direction align justify
                spacing wrap divider]
         :or   {spacing "0.5rem"}} props
        rest                       (dissoc props :children
                                           :inline? :direction :align
                                           :justify :spacing :wrap :divider)
        rest                       (assoc rest
                                          :w :w)]
    [:& Box rest children]))

(defui Text
  [props]
  (let [{:keys [children align decoration casing]} props
        rest                                       (dissoc props :children
                                                           :align :decoration
                                                           :casing)
        rest                                       (assoc rest
                                                          :text-align align
                                                          :text-decoration decoration
                                                          :text-transform casing
                                                          :as :p)]
    [:& Box rest children]))

(defui Wrap
  [props]
  (let [{:keys [children spacing justify direction align]} props
        rest                                               (dissoc props :children
                                                                   :spacing :justify :direction
                                                                   :align)
        rest                                               (assoc rest
                                                                  :as :ul)]
    [:& Box rest children]))

(defui WrapItem
  [props]
  (let [{:keys [children]} props
        rest               (dissoc props :children)
        rest               (assoc rest
                                  :as :li)]
    [:& Box rest children]))
