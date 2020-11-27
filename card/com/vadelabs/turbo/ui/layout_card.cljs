(ns com.vadelabs.turbo.ui.layout-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.dom :as dom :refer [defui]]
   [com.vadelabs.turbo.ui.layout :as ui])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui BasicBadgeUI
  []
  [:& ui/Badge {} "Success"])
(defcard BasicBadge BasicBadgeUI)

(defui SolidBadgeUI
  []
  [:*
   (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
     [:& ui/Badge {:key          color-scheme
                   :color-scheme color-scheme
                   :variant      "solid"
                   :mr           "2"} color-scheme])])

(defcard SolidBadge SolidBadgeUI)

(defui SubtleBadgeUI
  []
  [:*
   (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
     [:& ui/Badge {:key          color-scheme
                   :color-scheme color-scheme
                   :mr           "2"} color-scheme])])
(defcard SubtleBadge SubtleBadgeUI)

(defui OutlineBadgeUI
  []
  [:*
   (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
     [:& ui/Badge {:key          color-scheme
                   :color-scheme color-scheme
                   :variant      "outline"
                   :mr           "2"} color-scheme])])

(defcard OutlineBadge OutlineBadgeUI)

;; BOX LAYOUT COMPONENT ;;
(defui BasicUI
  []
  [:& ui/Box {}
   [:& ui/Box {:color ["tomato" "purple"]
               :hover {:bg    "red.500"
                       :color "white"}
               } "Welcome to Box"]
   [:& ui/Box {:position "relative"
               :bg       "red.200"
               :before   {:height         0
                          :content        "\"\""
                          :display        "block"
                          :padding-bottom ["40px" "100px"]}}]])
(defcard Basic BasicUI)

(defui SquareUI
  []
  [:& ui/Square {:bg   "red.300"
                 :size ["40px" "60px" "100px"]}
   [:& ui/Circle {:size  "60px"
                  :bg    "tomato"
                  :color "white"}
    "BOX"]])

(defcard Square SquareUI)

(defui CenterUI
  []
  [:& ui/Center {:bg "#da3d6929"
                 :w  "480px"
                 :h  "400px"}
   [:& ui/Box {:p  "40px"
               :bg "green.600"}
    "BOX"]])

(defcard Center CenterUI)

(defui SpacerUI
  []
  [:& ui/Flex {:color     ["green.400" "tomato"]
               :direction {:base "column" :md "row"}}
   [:& ui/Box {:bg       "pink.500"
               :box-size "100px"}
    "Box 1"]
   [:& ui/Spacer]
   [:& ui/Box {:bg       "green.500"
               :box-size "100px"}
    "Box 2"]])

(defcard Spacer SpacerUI)

(defui CodeUI
  []
  [:& ui/Code {:color-scheme "pink"} "import React from react"])
(defcard Code CodeUI)

(defui ContainerUI
  []
  [:& ui/Container {:max-width "md"}
   [:p "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum."]])
(defcard Container ContainerUI)

(defui DividerUI
  []
  [:& ui/Divider])

(defcard Divider DividerUI)


(defui HorizontalDividerUI
  []
  [:& ui/Divider {:orientation "horizontal"}])

(defcard HorizontalDivider HorizontalDividerUI)


(defui VerticalDividerUI
  []
  [:& ui/Divider {:orientation "vertical"}])

(defcard VerticalDivider VerticalDividerUI)


(defui DashedDividerUI
  []
  [:& ui/Divider {:variant "dashed"}])

(defcard DashedDivider DashedDividerUI)


(defui KbdUI
  []
  [:& ui/Kbd "Ctrl + L"])
(defcard Kbd KbdUI)

(defui HeadingUI
  []
  [:& ui/Heading "Heading 1"])
(defcard Heading HeadingUI)

(defui GridWithColumnsUI
  []
  [:& ui/SimpleGrid {:columns [2 nil 3]
                     :spacing "40px"}
   [:*
    [:& ui/Box {:bg "tomato" :height "200px"}]
    [:& ui/Box {:bg "tomato" :height "200px"}]
    [:& ui/Box {:bg "tomato" :height "200px"}]
    [:& ui/Box {:bg "tomato" :height "200px"}]
    [:& ui/Box {:bg "tomato" :height "200px"}]
    ]])
(defcard GridWithColumns GridWithColumnsUI)

(defui GridWithAutofitUI
  []
  [:& ui/SimpleGrid {:min-child-width "300px"
                     :spacing         "40px"}
   [:*
    [:& ui/Box {:bg "tomato" :height "200px"}]
    [:& ui/Box {:bg "tomato" :height "200px"}]
    [:& ui/Box {:bg "tomato" :height "200px"}]
    [:& ui/Box {:bg "tomato" :height "200px"}]
    [:& ui/Box {:bg "tomato" :height "200px"}]
    ]])
(defcard GridWithAutofit GridWithAutofitUI)

(defui GridWithColSpanUI
  []
  [:& ui/SimpleGrid {:columns {:base 2 :md 4}
                     :spacing {:base "24px" :md "40px"}}
   [:*
    [:& ui/GridItem {:bg       "green.500"
                     :col-span {:base 1 :md 3}} "Column 1"]
    [:& ui/GridItem {:bg       "pink.500"
                     :col-span {:base 1 :md 1}} "Column 2"]]])
(defcard GridWithColSpan GridWithColSpanUI)
