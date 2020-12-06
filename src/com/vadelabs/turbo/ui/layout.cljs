(ns com.vadelabs.turbo.ui.layout
  (:refer-clojure :exclude [Box List list])
  (:require
   [com.vadelabs.turbo.components :as comp :refer [defui <> $]]
   [com.vadelabs.turbo.ui.styled :as ui]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.dom :as d]
   [com.vadelabs.turbo.styled :as styled]))

(defui Box
  [props]
  (let [{:keys [children]} props]
    (ui/block props children)))
(def box (comp/factory Box))

(defn- ratio-fn
  [ratio]
  (cond
    (vector? ratio) (into
                      []
                      (map
                        (fn [val]
                          (str (* 100 (/ 1 val)) "%"))
                        ratio))
    (map? ratio)    (reduce-kv
                      (fn [acc key val]
                        (assoc acc key (str (* 100 (/ 1 val)) "%")))
                      {}
                      ratio)
    :else           (str (* 100 (/ 1 ratio)) "%")))

(defui AspectRatio
  [props]
  (let [{:keys [children ratio]
         :or   {ratio "1.3333"}} props
        child                    children
        padding-bottom           (ratio-fn ratio)
        styles                   {:combinators {">*"
                                                {:overflow        "hidden"
                                                 :position        "absolute"
                                                 :top             "0"
                                                 :right           "0"
                                                 :bottom          "0"
                                                 :left            "0"
                                                 :display         "flex"
                                                 :justify-content "center"
                                                 :align-items     "center"
                                                 :width           "100%"
                                                 :height          "100%"}
                                                ">img,>video"
                                                {:object-fit "cover"}}}
        props                    (enc/assoc-some
                                   props
                                   :turbo$css styles
                                   :position "relative"
                                   :pseudo {:before {:height         "0"
                                                     :content        "''"
                                                     :display        "block"
                                                     :padding-bottom padding-bottom}})]
    (box props child)))
(def aspect-ratio (comp/factory AspectRatio))

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

(defui Square
  [props]
  (let [{:keys [children size center?]
         :or   {center? true}} props
        style-map              (if center?
                                 {:display         "flex"
                                  :align-items     "center"
                                  :justify-content "center"}
                                 {})
        props                  (assoc props
                                      :box-size size
                                      :turbo$css (assoc style-map
                                                        :flex-shrink 0
                                                        :flex-grow 0))]
    (box props children)))
(def square (comp/factory Square))

(defui Circle
  [props]
  (let [{:keys [size children]} props
        props                   (enc/assoc-some props
                                                :size size
                                                :border-radius "9999px")]
    (square props children)))
(def circle (comp/factory Circle))

(defui Center
  [props]
  (let [{:keys [children]} props
        props              (assoc props
                                  :turbo$css {:display         "flex"
                                              :align-items     "center"
                                              :justify-content "center"})]

    (box props children)))
(def center (comp/factory Center))

(defui Code
  [props]
  (let [{:keys [children]} props
        style              (tuh/use-style-config :Code props)
        props              (assoc props
                                  :turbo$css (assoc style
                                                    :display "inline-block")
                                  :as                "code")]
    (box props children)))
(def code (comp/factory Code))

(defn- transform
  [props]
  (reduce-kv
    (fn [acc prop prop-value]
      (if prop-value
        (assoc acc prop (str "container." prop-value))
        acc))
    {}
    props))

(defui Container
  [props]
  (let [{:keys [max-width width min-width
                w min-w max-w center? children]} props
        width-props                              (transform {:max-w     max-w
                                                             :max-width max-width
                                                             :width     width
                                                             :w         w
                                                             :min-width min-width
                                                             :min-w     min-w})
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
        props                                    (assoc props
                                                        :turbo$css (enc/merge turbo-css width-props))]
    (box props children)))
(def container (comp/factory Container))

(defui Divider
  [props]
  (let [{:keys [children orientation]
         :or   {orientation "horizontal"}} props
        style                              (tuh/use-style-config :Divider props)
        {:keys [border-left-width
                border-right-width
                border-width
                border-bottom-width
                border-top-width]}         style

        divider-styles {:vertical   {:border-left-width (or border-left-width border-right-width border-width "1px")
                                     :height            "100%"}
                        :horizontal {:border-bottom-width (or border-bottom-width border-top-width border-width "1px")
                                     :width               "100%"}}
        divider-style  ((keyword orientation) divider-styles)
        turbo-css      (enc/merge style divider-style)
        props          (assoc props
                              :turbo$css turbo-css
                              :role "separator"
                              :aria-orientation orientation
                              :as "hr")]
    (box props children)))
(def divider (comp/factory Divider))

(defui Flex
  [props]
  (let [{:keys [direction align
                justify wrap
                basis grow
                shrink children]} props
        props                     (assoc props
                                         :turbo$css (enc/assoc-some
                                                      {:display "flex"}
                                                      :flex-direction  direction
                                                      :align-items     align
                                                      :justify-content justify
                                                      :flex-wrap       wrap
                                                      :flex-basis      basis
                                                      :flex-grow       grow
                                                      :flex-shrink     shrink))]
    (box props children)))
(def flex (comp/factory Flex))

(defui Grid
  [props]
  (let [{:keys [area template-areas gap row-gap
                column-gap column row auto-flow
                auto-rows template-rows auto-columns
                template-columns children]} props
        props                               (assoc
                                              props
                                              :turbo$css
                                              (enc/assoc-some
                                                {:display "grid"}
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
                                                :grid-template-columns template-columns))]
    (box props children)))
(def grid (comp/factory Grid))

(defn- span-fn
  [span?]
  (cond
    (vector? span?) (into [] (map (fn [item]
                                    (if (= item "auto")
                                      "auto"
                                      (str "span " item "/span " item))) span?))
    (map? span?)    (reduce-kv
                      (fn [acc key val]
                        (if (= val "auto")
                          (assoc acc key "auto")
                          (assoc acc key (str " span " val "/span " val))))
                      {}
                      span?)
    (nil? span?)    span?
    :else           (str "span " span? "/span " span?)))

(defui GridItem
  [props]
  (let [{:keys [col-span col-start col-end
                row-end row-span row-start
                children]} props
        props              (assoc props
                                  :turbo$css
                                  (enc/assoc-some
                                    {}
                                    :grid-column       (span-fn col-span)
                                    :grid-row          (span-fn  row-span)
                                    :grid-column-start col-start
                                    :grid-column-end   col-end
                                    :grid-row-start    row-start
                                    :grid-row-end      row-end))]
    (box props children)))
(def grid-item (comp/factory GridItem))

(defui Heading
  [props]
  (let [{:keys [children]} props
        style              (tuh/use-style-config :Heading props)
        props              (assoc props
                                  :turbo$css style
                                  :as "h2")]
    (box props children)))
(def heading (comp/factory Heading))

(defui Kbd
  [props]
  (let [{:keys [children]} props
        style              (tuh/use-style-config :Kbd props)
        props              (assoc props
                                  :turbo$css (assoc style
                                                    :font-family "mono")
                                  :as                "kbd")]
    (box props children)))
(def kbd (comp/factory Kbd))

(defui LinkOverlay
  [props]
  (let [{:keys [children]} props
        props              (assoc props
                                  :turbo$css {:position "static"
                                              :pseudo   {:before {:content  "''"
                                                                  :cursor   "inherit"
                                                                  :display  "block"
                                                                  :position "absolute"
                                                                  :top      "0"
                                                                  :left     "0"
                                                                  :width    "100%"
                                                                  :height   "100%"}}}
                                  :as "a")]
    (box props children)))
(def link-overlay (comp/factory LinkOverlay))

(defui LinkBox
  [props]
  (let [{:keys [children href external?]} props
        props                             (assoc props
                                                 :turbo$css {:pos "relative"})
        target                            (when external? "_blank")
        rel                               (when external? "noopener noreferrer")
        link-overlay-props                (enc/assoc-some
                                            {}
                                            :href href
                                            :target target
                                            :rel rel)]

    (box
      props
      children
      ;; (link-overlay link-overlay-props)
      )))
(def link-box (comp/factory LinkBox))

(defui Link
  [props]
  (let [{:keys [children external?]} props
        style                        (tuh/use-style-config :Link props)
        props                        (enc/assoc-some props
                                                     :turbo$css style
                                                     :target (when external? "_blank")
                                                     :rel (when external? "noopener noreferrer")
                                                     :as "a")]
    (box props children)))
(def link (comp/factory Link))

(defui List
  [props]
  (let [{:keys [as children style-type style-position spacing]
         :or   {style-type "none"}} props
        props                       (enc/assoc-some props
                                                    :list-style-type style-type
                                                    :list-style-position style-position
                                                    :role "list"
                                                    :turbo$css (if spacing {} {}) ;; TODO
                                                    :as (or as "ul"))]
    (box props children)))
(def list (comp/factory List))

(defui OrderedList
  [props]
  (let [{:keys [children]} props
        props              (assoc props
                                  :style-type "decimal"
                                  :margin-left "1em"
                                  :as "ol")]
    (list props children)))
(def ordered-list (comp/factory OrderedList))

(defui UnorderedList
  [props]
  (let [{:keys [children]} props
        props              (assoc props
                                  :style-type "initial"
                                  :margin-left "1em"
                                  :as "ul")]
    (list props children)))
(def unordered-list (comp/factory UnorderedList))

(defui ListItem
  [props]
  (let [{:keys [children]} props
        props              (assoc props
                                  :as "li")]
    (box props children)))
(def list-item (comp/factory ListItem))

(defui ListIcon
  [props]
  (let [{:keys [children]} props]
    (box props children)))
(def list-icon (comp/factory ListIcon))

(defn- width-to-columns
  [count]
  (if (vector? count)
    (into [] (map (fn [item]
                    (if (nil? item)
                      nil
                      (str "repeat(auto-fit, minmax(" item ", 1fr)")))
                  count))
    (str "repeat(auto-fit, minmax(" count ", 1fr))")))

(defn- count-to-columns
  [count]
  (cond
    (vector? count) (into [] (map (fn [item]
                                    (if (nil? item)
                                      nil
                                      (str "repeat(" item ", 1fr)"))) count))
    (map? count)    (reduce-kv
                      (fn [acc key val]
                        (if (nil? val)
                          acc
                          (assoc acc key (str "repeat(" val ", 1fr)"))))
                      {}
                      count)
    :else           (str "repeat(" count ", 1fr)")))

(defui SimpleGrid
  [props]
  (let [{:keys [children columns spacing-x spacing-y
                spacing min-child-width]} props
        template-columns                  (if min-child-width
                                            (width-to-columns min-child-width)
                                            (count-to-columns columns))
        props                             (enc/assoc-some props
                                                          :gap spacing
                                                          :column-gap spacing-x
                                                          :row-gap spacing-y
                                                          :template-columns template-columns)]
    (grid props children)))
(def simple-grid (comp/factory SimpleGrid))

(defui Spacer
  [props]
  (let [{:keys [children]} props
        props              (assoc props
                                  :turbo$css {:flex         1
                                              :justify-self "stretch"
                                              :align-self   "stretch"})]
    (box props children)))
(def spacer (comp/factory Spacer))

(defui StackDivider
  [props]
  (let [{:keys [children]} props
        turbo$css          {:border-width "0"
                            :align-self   "stretch"
                            :border-color "inherit"
                            :width        "auto"
                            :height       "auto"}
        props              (enc/assoc-some
                             props
                             :turbo$css turbo$css)]
    (box props children)))
(def stack-divider (comp/factory StackDivider))

(defui StackItem
  [props]
  (let [{:keys [children turbo$css]} props
        props                        (enc/assoc-some props
                                                     :turbo$css turbo$css
                                                     :display "inline-block"
                                                     :flex "0 0 auto"
                                                     :min-width 0)]
    (box props children)))
(def stack-item (comp/factory StackItem))

(defn- get-stack-styles
  [direction spacing]
  (let [styles {:column         {:mt spacing :ml "0"}
                :row            {:ml spacing :mt "0"}
                :column-reverse {:mb spacing :mr "0"}
                :row-reverse    {:mr spacing :mb "0"}}
        value  (cond
                 (vector? direction) (into []
                                           (map (fn [item]
                                                  (get styles (keyword item)))
                                                direction))
                 :else               [(get styles (keyword direction))])]
    {:combinators {">*:not(style) ~*:not(style)" value}}))

(defn- get-divider-styles
  [direction spacing]
  (let [styles {:column         {:my spacing :mx "0" :border-left-width "0" :border-bottom-width "1px"}
                :row            {:mx spacing :my "0" :border-left-width "1px" :border-bottom-width "0"}
                :column-reverse {:my spacing :mx "0" :border-left-width "0" :border-bottom-width "1px"}
                :row-reverse    {:mx spacing :my "0" :border-left-width "1px" :border-bottom-width "0"}}
        value  (cond
                 (vector? direction) (into []
                                           (map (fn [item]
                                                  (get styles (keyword item)))
                                                direction))
                 (map? direction)    (reduce-kv
                                       (fn [acc key val]
                                         (assoc acc key (get styles (keyword val))))
                                       {}
                                       direction)
                 :else               [(get styles (keyword direction))])]
    {:combinators {"&" value}}))

(defui Stack
  [props]
  (let [{:keys [children inline? direction align justify
                spacing wrap divider]
         :or   {spacing "0.5rem"}} props
        direction                  (if inline?
                                     "row"
                                     (or direction "column"))
        styles                     (get-stack-styles direction spacing)
        divider-styles             (get-divider-styles direction spacing)
        divider                    (if (map? divider)
                                     (stack-divider (enc/merge divider-styles divider))
                                     divider)
        divider?                   (not (nil? divider))
        use-children?              (nil? divider)
        clones                     (if use-children?
                                     children
                                     (loop [children   children
                                            idx        0
                                            result     []
                                            last-child (last children)]
                                       (if (empty? children)
                                         result
                                         (let [child    (first children)
                                               fragment (<> {:key idx}
                                                            child
                                                            (when-not (= child last-child)
                                                              divider))]
                                           (recur (rest children) (inc idx) (conj result fragment) last-child)))))
        props                      (enc/assoc-some
                                     props
                                     :turbo$css (when-not divider? styles)
                                     :display "flex"
                                     :align-items align
                                     :justify-content justify
                                     :flex-direction direction
                                     :flex-wrap wrap)
        ]
    (box props clones)))
(def stack (comp/factory Stack))

(defui HStack
  [props]
  (let [{:keys [children]} props
        props              (assoc props
                                  :align "center"
                                  :direction "row")]
    (stack props children)))
(def h-stack (comp/factory HStack))

(defui VStack
  [props]
  (let [{:keys [children]} props
        props              (assoc props
                                  :align "center"
                                  :direction "column")]
    (stack props children)))
(def v-stack (comp/factory VStack))

(defui Text
  [props]
  (let [{:keys [children align decoration casing]} props
        style                                      (tuh/use-style-config :Text props)
        props                                      (enc/assoc-some
                                                     props
                                                     :turbo$css style
                                                     :text-align align
                                                     :text-decoration decoration
                                                     :text-transform casing
                                                     :as "p")]
    (box props children)))
(def text (comp/factory Text))

(defn- space-fn
  [spacing theme dir]
  (let [value (cond
                (vector? spacing) (into [] (map (fn [space]
                                                  (let [{:keys [margin]}
                                                        (styled/style
                                                          {:margin space
                                                           :theme  theme})]
                                                    (str "calc(" margin " / 2 * " dir " )")))
                                                spacing))
                (map? spacing)    (reduce-kv
                                    (fn [acc key val]
                                      (let [{:keys [margin]} (styled/style
                                                               {:margin val
                                                                :theme  theme})]
                                        (assoc acc key "calc(" margin " / 2 * " dir " )")))
                                    {}
                                    spacing)
                :else             (let [{:keys [margin]}
                                        (styled/style
                                          {:margin spacing
                                           :theme  theme})]
                                    (str "calc(" margin " / 2 * " dir " )")))]
    value))

(defn- group-spacing
  [spacing theme]
  (space-fn spacing theme "-1"))

(defn- item-spacing
  [spacing theme]
  (space-fn spacing theme "1"))

(defui Wrap
  [props]
  (let [{:keys [children spacing
                justify direction
                align]} props
        theme           (tuh/use-theme)
        group-spacing   (group-spacing spacing theme)
        item-spacing    (item-spacing spacing theme)
        group-styles    (enc/assoc-some
                          {}
                          :display "flex"
                          :flex-wrap "wrap"
                          :justify-content justify
                          :align-items align
                          :flex-direction direction
                          :list-style-type "none"
                          :padding "0"
                          :margin group-spacing)
        item-styles     (enc/assoc-some
                          {}
                          :display "flex"
                          :align-items "flex-start"
                          :margin item-spacing)]
    (tuh/styles-provider
      {:value {:item item-styles}}
      (box {:key "wrap"}
           (box
             (enc/assoc-some
               props
               :turbo$css group-styles
               :as "ul")
             children)))))
(def wrap (comp/factory Wrap))

(defui WrapItem
  [props]
  (let [{:keys [children]} props
        styles             (:item (tuh/use-styles))
        props              (enc/assoc-some
                             props
                             :turbo$css styles
                             :as "li")]
    (box props children)))
(def wrap-item (comp/factory WrapItem))
