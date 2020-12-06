(ns com.vadelabs.turbo.ui.layout-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <> $]]
   [com.vadelabs.turbo.ui.layout :as ui]
   [com.vadelabs.turbo.dom :as d])
  (:require-macros
   [devcards.core :refer [defcard]]))

;; ;; BOX ;;
;; (defui BasicUI
;;   []
;;   (ui/box
;;     (ui/box {:color  ["tomato" "purple"]
;;              :pseudo {:hover {:bg    "red.500"
;;                               :color "white"}}}
;;             "Welcome to box")
;;     (ui/box {:position "relative"
;;              :bg       "red.200"
;;              :pseudo   {:before {:height         0
;;                                  :content        "\"\""
;;                                  :display        "block"
;;                                  :padding-bottom ["40px" "100px"]}}})))
;; (defcard Basic BasicUI)

;; (defui SquareUI
;;   []
;;   (ui/square {:bg   "red.300"
;;               :size ["40px" "60px" "100px"]}
;;              (ui/circle {:size  "60px"
;;                          :bg    "tomato"
;;                          :color "white"}
;;                         "BOX")))
;; (defcard Square SquareUI)

;; (defui CenterUI
;;   []
;;   (ui/center {:bg "#da3d6929"
;;               :w  "480px"
;;               :h  "400px"}
;;              (ui/box {:p  "40px"
;;                       :bg "green.600"}
;;                      "BOX")))
;; (defcard Center CenterUI)

;; ;; BADGE ;;
;; (defui BasicBadgeUI
;;   []
;;   (ui/badge "Success"))
;; (defcard BasicBadge BasicBadgeUI)

;; (defui SolidBadgeUI
;;   []
;;   (<>
;;     (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
;;       (ui/badge {:key          color-scheme
;;                  :color-scheme color-scheme
;;                  :variant      "solid"
;;                  :mr           "2"} color-scheme))))
;; (defcard SolidBadge SolidBadgeUI)

;; (defui SubtleBadgeUI
;;   []
;;   (<>
;;     (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
;;       (ui/badge {:key          color-scheme
;;                  :color-scheme color-scheme
;;                  :mr           "2"} color-scheme))))
;; (defcard SubtleBadge SubtleBadgeUI)

;; (defui OutlineBadgeUI
;;   []
;;   (<>
;;     (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
;;       (ui/badge {:key          color-scheme
;;                  :color-scheme color-scheme
;;                  :variant      "outline"
;;                  :mr           "2"} color-scheme))))
;; (defcard OutlineBadge OutlineBadgeUI)


;; (defui CodeUI
;;   []
;;   (ui/code {:color-scheme "pink"} "import React from react"))
;; (defcard Code CodeUI)

;; ;; CONTAINER ;;
;; (defui ContainerUI
;;   []
;;   (ui/container
;;     {:max-width "md"}
;;     (d/p "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
;;          Lorem Ipsum has been the industry's standard dummy text ever since the
;;          1500s, when an unknown printer took a galley of type and scrambled it to
;;          make a type specimen book. It has survived not only five centuries, but
;;          also the leap into electronic typesetting, remaining essentially
;;          unchanged. It was popularised in the 1960s with the release of Letraset
;;          sheets containing Lorem Ipsum passages, and more recently with desktop
;;          publishing software like Aldus PageMaker including versions of Lorem
;;          Ipsum.")))
;; (defcard Container ContainerUI)

;; ;; DIVIDER ;;
;; (defui DividerUI
;;   []
;;   (ui/divider))
;; (defcard Divider DividerUI)

;; (defui HorizontalDividerUI
;;   []
;;   (ui/divider {:orientation "horizontal"}))
;; (defcard HorizontalDivider HorizontalDividerUI)

;; (defui VerticalDividerUI
;;   []
;;   (ui/divider {:orientation "vertical"}))
;; (defcard VerticalDivider VerticalDividerUI)

;; (defui DashedDividerUI
;;   []
;;   (ui/divider {:variant "dashed"}))
;; (defcard DashedDivider DashedDividerUI)

;; (defui KbdUI
;;   []
;;   (ui/kbd "Ctrl + L"))
;; (defcard Kbd KbdUI)

;; (defui HeadingUI
;;   []
;;   (ui/heading "Heading 1"))
;; (defcard Heading HeadingUI)

;; (defui LinkUI
;;   []
;;   (ui/link
;;     {:external? true :href "google.com"}
;;     "This is a link"))
;; (defcard Link LinkUI)

;; (defui DefaultListUI
;;   []
;;   (ui/box
;;     {:mt "6"}
;;     (ui/text {:font-size "sm"
;;               :color     "gray.600"}
;;              ".list-desc")
;;     (ui/unordered-list
;;       {:spacing "2px"}
;;       (ui/list-item "Lorem ipsum dolor sit amet, consectetur adipisicing elit")
;;       (ui/list-item "Assumenda, quia temporibus eveniet a libero incidunt suscipit")
;;       (ui/list-item "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum")
;;       )))
;; (defcard DefaultList DefaultListUI)


;; (defui OrderedListUI
;;   []
;;   (ui/ordered-list
;;     (ui/list-item "Lorem ipsum dolor sit amet, consectetur adipisicing elit")
;;     (ui/list-item "Assumenda, quia temporibus eveniet a libero incidunt suscipit")
;;     (ui/list-item "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum")))
;; (defcard OrderedList OrderedListUI)

;; (defui UnstyledWithIconUI
;;   []
;;   (ui/box
;;     {:mb "6"}
;;     (ui/text
;;       {:font-size "sm"
;;        :color     "gray.600"}
;;       ".list-none")
;;     (ui/list
;;       {:spacing "3"}
;;       (ui/list-item
;;         (ui/list-icon
;;           {:as    "fa-check"
;;            :color "green.500"})
;;         "Lorem ipsum dolor sit amet, consectetur adipisicing elit")
;;       (ui/list-item
;;         (ui/list-icon
;;           {:as    "fa-phone"
;;            :color "green.500" })
;;         "Assumenda, quia temporibus eveniet a libero incidunt suscipit")
;;       (ui/list-item
;;         (ui/list-icon
;;           {:as    "fa-accessible-icon"
;;            :color "green.500"})
;;         "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum"))))
;; (defcard UnstyledWithIcon UnstyledWithIconUI)

;; (defui GridWithColumnsUI
;;   []
;;   (ui/simple-grid
;;     {:columns [2 nil 3]
;;      :spacing "40px"}
;;     (<>
;;       (ui/box {:bg "tomato" :height "200px"})
;;       (ui/box {:bg "tomato" :height "200px"})
;;       (ui/box {:bg "tomato" :height "200px"})
;;       (ui/box {:bg "tomato" :height "200px"})
;;       (ui/box {:bg "tomato" :height "200px"}))))
;; (defcard GridWithColumns GridWithColumnsUI)

;; (defui GridWithAutofitUI
;;   []
;;   (ui/simple-grid
;;     {:min-child-width "300px"
;;      :spacing         "40px"}
;;     (<>
;;       (ui/box {:bg "tomato" :height "200px"})
;;       (ui/box {:bg "tomato" :height "200px"})
;;       (ui/box {:bg "tomato" :height "200px"})
;;       (ui/box {:bg "tomato" :height "200px"})
;;       (ui/box {:bg "tomato" :height "200px"}))))
;; (defcard GridWithAutofit GridWithAutofitUI)

;; (defui GridWithColSpanUI
;;   []
;;   (ui/simple-grid
;;     {:columns {:base "2" :md "4"}
;;      :spacing {:base "24px" :md "40px"}}
;;     (<>
;;       (ui/grid-item {:bg       "green.500"
;;                      :col-span {:base "1" :md "3"}}
;;                     "Column 1")
;;       (ui/grid-item {:bg       "pink.500"
;;                      :col-span {:base "1" :md "1"}}
;;                     "Column 2"))))

;; (defcard GridWithColSpan GridWithColSpanUI)

;; (defui SpacerUI
;;   []
;;   (ui/flex
;;     {:color     ["green.400" "tomato"]
;;      :direction {:base "column" :md "row"}}
;;     (ui/box {:bg       "pink.500"
;;              :box-size "100px"}
;;             "Box 1")
;;     (ui/spacer)
;;     (ui/box {:bg       "green.500"
;;              :box-size "100px"}
;;             "Box 2")))

;; (defcard Spacer SpacerUI)

;; (defui VerticalStackUI
;;   []
;;   (ui/stack
;;     {:spacing "4"}
;;     (d/span "ooooo")
;;     (d/span "aahhhh")
;;     (d/span "Woah!")))
;; (defcard VerticalStack VerticalStackUI)

;; (defui StackCustomDividerUI
;;   []
;;   (d/div
;;     (ui/stack
;;       {:spacing "12px"}
;;       (ui/box "1")
;;       (ui/box "2")
;;       (ui/box "3"))
;;     (ui/stack
;;       {:spacing "40px"
;;        :divider (ui/divider {:border-color "red.500"})}
;;       (ui/box "1")
;;       (ui/box "2")
;;       (ui/box "3"))))
;; (defcard StackCustomDivider StackCustomDividerUI)

;; (defui InlineStackUI
;;   []
;;   (ui/stack
;;     {:w "100%" :bg "blue.500" :direction "row"}
;;     (ui/box {:box-size      "40px"
;;              :bg            "white"
;;              :border-radius "full"})
;;     (ui/box {:box-size      "40px"
;;              :bg            "white"
;;              :border-radius "full"})
;;     (ui/box {:box-size      "40px"
;;              :bg            "white"
;;              :border-radius "full"})))
;; (defcard InlineStack InlineStackUI)

;; (defui ResponsiveStackUI
;;   []
;;   (ui/stack
;;     {:direction ["column" "row"]
;;      :spacing   "40px"
;;      :w         "100%"}
;;     (ui/box {:box-size "40px"
;;              :bg       "yellow.200"} "1")
;;     (ui/box {:box-size "40px"
;;              :bg       "tomato"} "2")
;;     (ui/box {:box-size "40px"
;;              :bg       "pink.100"} "3")))
;; (defcard ResponsiveStack ResponsiveStackUI)

;; (defui ResponsiveDividerStackUI
;;   []
;;   (ui/stack
;;     {:mt        "10"
;;      :direction ["column" "row"]
;;      :divider   {:border-color {:base "green.500" :md "red.200"}}
;;      ;; :divider   (ui/stack-divider {:border-color {:base "green.500" :md "red.200"}})
;;      :spacing   "4"}
;;     (ui/box {:flex "1"
;;              :w    ["100%" "40px"]
;;              :h    "40px"
;;              :bg   "yellow.200"} "1")
;;     (ui/box {:flex "1"
;;              :w    ["100%" "40px"]
;;              :h    "40px"
;;              :bg   "tomato"} "2")
;;     (ui/box {:flex "1"
;;              :w    ["100%" "40px"]
;;              :h    "40px"
;;              :bg   "pink.100"} "3")
;;     ))

;; (defcard ResponsiveDividerStack ResponsiveDividerStackUI)

;; (defui WithDividerUI
;;   []
;;   (<>
;;     (ui/stack
;;       {:divider {}
;;        :spacing "4"}
;;       (ui/box {:box-size "40px" :bg "yellow.200"} "1")
;;       (ui/box {:box-size "40px" :bg "tomato"} "2")
;;       (ui/box {:box-size "40px" :bg "pink.100"} "3"))
;;     (ui/stack
;;       {:mt        "10"
;;        :direction "row"
;;        :divider   {}
;;        :spacing   "4"}
;;       (ui/box {:box-size "40px" :bg "yellow.200"} "1")
;;       (ui/box {:box-size "40px" :bg "tomato"} "2")
;;       (ui/box {:box-size "40px" :bg "pink.100"} "3"))))
;; (defcard WithDivider WithDividerUI)

(defui Feature
  [{:keys [title children]}]
  (ui/box
    {:padding       "5"
     :box-shadow    "md"
     :border-width  "1px"
     :flex          "1"
     :border-radius "md"}
    (ui/heading {:size "md"} title)
    (ui/text {:mt "2"} children)))
(def feature (comp/factory Feature))

;; (defui WithContentUI
;;   []
;;   (ui/stack
;;     {:direction "row"
;;      :spacing   "8"}
;;     (feature {:title    "Plan Money"
;;               :children "The future can be even brighter but a goal without a plan is just a wish"})
;;     (feature {:title    "Save Money"
;;               :children "You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings."})))
;; (defcard WithContent WithContentUI)

;; (defui WrappingChildrenUI
;;   []
;;   (ui/stack
;;     {:wrap-children? true}
;;     (ui/box "foo")
;;     (ui/box "bar")
;;     (ui/box "baz")))
;; (defcard WrappingChildren WrappingChildrenUI)

;; (defui ResponsiveSpacingAndDirectionUI
;;   []
;;   (ui/stack
;;     {:spacing   ["10px" "60px"]
;;      :divider   {:border-color "gray.200"}
;;      :direction ["column" "row"]}
;;     (ui/box {:bg-color "red.500"} "First")
;;     (ui/box {:bg-color "blue.500"} "Second")
;;     (ui/box {:bg-color "yellow.500"} "Third")))
;; (defcard ResponsiveSpacingAndDirection ResponsiveSpacingAndDirectionUI)

;; (defui WithCustomBorderColorUI
;;   []
;;   (ui/stack
;;     {:direction {:base "column"
;;                  :md   "row"}
;;      :divider   {:border-color {:base "gray.200"
;;                                 :md   "red.300"}}
;;      :spacing   "4"}
;;     (ui/box {:w           "40px"
;;              :flex-shrink "0"
;;              :h           "40px"
;;              :bg          "yellow.200"} "1")
;;     (ui/box {:w           "40px"
;;              :flex-shrink "0"
;;              :h           "40px"
;;              :bg          "tomato"} "2")
;;     (ui/box {:w           "40px"
;;              :flex-shrink "0"
;;              :h           "40px"
;;              :bg          "pink.100"} "3")))
;; (defcard WithCustomBorderColor WithCustomBorderColorUI)

;; (defui BasicWrapUI
;;   []
;;   (ui/wrap
;;     {:spacing "40px"}
;;     (ui/wrap-item
;;       {:key "1"}
;;       (ui/badge "Badge 1"))
;;     (ui/wrap-item
;;       (ui/badge "Badge 2"))
;;     (ui/wrap-item
;;       (ui/badge "Badge 3"))
;;     (ui/wrap-item
;;       (ui/badge "Badge 4"))))
;; (defcard BasicWrap BasicWrapUI)

;; (defui Placeholder
;;   []
;;   (ui/wrap-item
;;     (d/div {:style {:height     "48px"
;;                     :width      "48px"
;;                     :background "tomato"}})))
;; (def placeholder (comp/factory Placeholder))

;; (defui WrapPlaceholderUI
;;   []
;;   (ui/wrap
;;     {:spacing "5"}
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)))
;; (defcard WrapPlaceholder WrapPlaceholderUI)

;; (defui WrapResponsiveUI
;;   []
;;   (ui/wrap
;;     {:spacing ["12px" "24px"]
;;      :justify ["center" "flex-start"]}
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)
;;     (placeholder)))
;; (defcard WrapResponsive WrapResponsiveUI)

;; (defui WithVideoUI
;;   []
;;   (ui/aspect-ratio
;;     {:max-width "300px"
;;      :ratio     "1"}
;;     (d/iframe {:title             "test"
;;                :src               "https://www.youtube.com/embed/QhBnZ6NPOY0"
;;                :allow-full-screen true})))
;; (defcard WithVideo WithVideoUI)

;; (defui WithImageUI
;;   []
;;   (ui/aspect-ratio
;;     {:max-width "400px"}
;;     (d/img {:src "https://upload.wikimedia.org/wikipedia/en/7/7d/Minions_characters.png"
;;             :alt "minions"})))
;; (defcard WithImage WithImageUI)

;; (defui WithMapUI
;;   []
;;   (ui/aspect-ratio
;;     {:max-width "600px"
;;      :ratio     "1.777"}
;;     (d/iframe {:src   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
;;                :title "demo"})))
;; (defcard WithMap WithMapUI)

;; (defui WithResponsiveUI
;;   []
;;   (ui/aspect-ratio
;;     {:max-width "300px"
;;      :ratio     {:base "1"
;;                  :sm   "1.3333"
;;                  :md   "1.7777"
;;                  :lg   "2.3333"}}
;;     (ui/box {:background-color
;;              {:base "red.500"
;;               :sm   "red.400"
;;               :md   "red.300"
;;               :lg   "red.200"}}
;;             "BOX")))
;; (defcard WithResponsive WithResponsiveUI)
