(ns com.vadelabs.turbo.ui.layout-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.layout :as ui]
   [com.vadelabs.turbo.dom :as d])
  (:require-macros
   [devcards.core :refer [defcard]]))

;; BOX ;;
(defui BasicUI
  []
  (ui/box
    (ui/box {:color  ["tomato" "purple"]
             :pseudo {:hover {:bg    "red.500"
                              :color "white"}}}
            "Welcome to box")
    (ui/box {:position "relative"
             :bg       "red.200"
             :pseudo   {:before {:height         0
                                 :content        "\"\""
                                 :display        "block"
                                 :padding-bottom ["40px" "100px"]}}})))
(defcard Basic BasicUI)

(defui SquareUI
  []
  (ui/square {:bg   "red.300"
              :size ["40px" "60px" "100px"]}
             (ui/circle {:size  "60px"
                         :bg    "tomato"
                         :color "white"}
                        "BOX")))
(defcard Square SquareUI)

(defui CenterUI
  []
  (ui/center {:bg "#da3d6929"
              :w  "480px"
              :h  "400px"}
             (ui/box {:p  "40px"
                      :bg "green.600"}
                     "BOX")))
(defcard Center CenterUI)

;; BADGE ;;
(defui BasicBadgeUI
  []
  (ui/badge "Success"))
(defcard BasicBadge BasicBadgeUI)

(defui SolidBadgeUI
  []
  (<>
    (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
      (ui/badge {:key          color-scheme
                 :color-scheme color-scheme
                 :variant      "solid"
                 :mr           "2"} color-scheme))))
(defcard SolidBadge SolidBadgeUI)

(defui SubtleBadgeUI
  []
  (<>
    (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
      (ui/badge {:key          color-scheme
                 :color-scheme color-scheme
                 :mr           "2"} color-scheme))))
(defcard SubtleBadge SubtleBadgeUI)

(defui OutlineBadgeUI
  []
  (<>
    (for [color-scheme ["gray" "green" "red" "orange" "purple" "teal"]]
      (ui/badge {:key          color-scheme
                 :color-scheme color-scheme
                 :variant      "outline"
                 :mr           "2"} color-scheme))))
(defcard OutlineBadge OutlineBadgeUI)


(defui CodeUI
  []
  (ui/code {:color-scheme "pink"} "import React from react"))
(defcard Code CodeUI)

;; (defui SpacerUI
;;   []
;;   [:& ui/Flex {:color     ["green.400" "tomato"]
;;                :direction {:base "column" :md "row"}}
;;    [:& ui/Box {:bg       "pink.500"
;;                :box-size "100px"}
;;     "Box 1"]
;;    [:& ui/Spacer]
;;    [:& ui/Box {:bg       "green.500"
;;                :box-size "100px"}
;;     "Box 2"]])

;; (defcard Spacer SpacerUI)

;; CONTAINER ;;
(defui ContainerUI
  []
  (ui/container
    {:max-width "md"}
    (d/p "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the
         1500s, when an unknown printer took a galley of type and scrambled it to
         make a type specimen book. It has survived not only five centuries, but
         also the leap into electronic typesetting, remaining essentially
         unchanged. It was popularised in the 1960s with the release of Letraset
         sheets containing Lorem Ipsum passages, and more recently with desktop
         publishing software like Aldus PageMaker including versions of Lorem
         Ipsum.")))
(defcard Container ContainerUI)

;; DIVIDER ;;
(defui DividerUI
  []
  (ui/divider))
(defcard Divider DividerUI)

(defui HorizontalDividerUI
  []
  (ui/divider {:orientation "horizontal"}))
(defcard HorizontalDivider HorizontalDividerUI)

(defui VerticalDividerUI
  []
  (ui/divider {:orientation "vertical"}))
(defcard VerticalDivider VerticalDividerUI)

(defui DashedDividerUI
  []
  (ui/divider {:variant "dashed"}))
(defcard DashedDivider DashedDividerUI)

(defui KbdUI
  []
  (ui/kbd "Ctrl + L"))
(defcard Kbd KbdUI)

(defui HeadingUI
  []
  ;; [:& ui/Heading "Heading 1"]
  (ui/heading "Heading 1"))
(defcard Heading HeadingUI)


(defui LinkUI
  []
  ;; [:& ui/Link {:external? true :href "google.com"}
  ;;  "This is a link"]
  (ui/link
    {:external? true :href "google.com"}
    "This is a link"))
(defcard Link LinkUI)

(defui DefaultListUI
  []
  (ui/box
    {:mt "6"}
    (ui/text {:font-size "sm"
              :color     "gray.600"}
             ".list-desc")
    (ui/unordered-list
      {:spacing "2px"}
      (ui/list-item "Lorem ipsum dolor sit amet, consectetur adipisicing elit")
      (ui/list-item "Assumenda, quia temporibus eveniet a libero incidunt suscipit")
      (ui/list-item "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum"))))
(defcard DefaultList DefaultListUI)


(defui OrderedListUI
  []
  (ui/ordered-list
    (ui/list-item "Lorem ipsum dolor sit amet, consectetur adipisicing elit")
    (ui/list-item "Assumenda, quia temporibus eveniet a libero incidunt suscipit")
    (ui/list-item "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum")))
(defcard OrderedList OrderedListUI)

;; (defui UnstyledWithIconUI
;;   []
;;   [:& ui/Box {:mb "6"}
;;    [:& ui/Text {:font-size "sm"
;;                 :color     "gray.600"}
;;     ".list-none"]
;;    [:& ui/List {:spacing "3"}
;;     [:& ui/ListItem
;;      [:& ui/ListIcon {:as    "fa-check"
;;                       :color "green.500"}]
;;      "Lorem ipsum dolor sit amet, consectetur adipisicing elit"]
;;     [:& ui/ListItem
;;      [:& ui/ListIcon {:as    "fa-phone"
;;                       :color "green.500"}]
;;      "Assumenda, quia temporibus eveniet a libero incidunt suscipit"]
;;     [:& ui/ListItem
;;      [:& ui/ListIcon {:as    "fa-accessible-icon"
;;                       :color "green.500"}]
;;      "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum"]]])

(defui UnstyledWithIconUI
  []
  (ui/box
    {:mb "6"}
    (ui/text
      {:font-size "sm"
       :color     "gray.600"}
      ".list-none")
    (ui/list
      {:spacing "3"}
      (ui/list-item
        (ui/list-icon
          {:as    "fa-check"
           :color "green.500"})
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit")
      (ui/list-item
        (ui/list-icon
          {:as    "fa-phone"
           :color "green.500" })
        "Assumenda, quia temporibus eveniet a libero incidunt suscipit")
      (ui/list-item
        (ui/list-icon
          {:as    "fa-accessible-icon"
           :color "green.500"})
        "Quidem, ipsam illum quis sed voluptatum quae eum fugit earum"))
    ))
(defcard UnstyledWithIcon UnstyledWithIconUI)

(defui GridWithColumnsUI
  []
  (ui/simple-grid
    {:columns [2 nil 3]
     :spacing "40px"}
    (<>
      (ui/box {:bg "tomato" :height "200px"})
      (ui/box {:bg "tomato" :height "200px"})
      (ui/box {:bg "tomato" :height "200px"})
      (ui/box {:bg "tomato" :height "200px"})
      (ui/box {:bg "tomato" :height "200px"}))))
(defcard GridWithColumns GridWithColumnsUI)

(defui GridWithAutofitUI
  []
  (ui/simple-grid
    {:min-child-width "300px"
     :spacing         "40px"}
    (<>
      (ui/box {:bg "tomato" :height "200px"})
      (ui/box {:bg "tomato" :height "200px"})
      (ui/box {:bg "tomato" :height "200px"})
      (ui/box {:bg "tomato" :height "200px"})
      (ui/box {:bg "tomato" :height "200px"}))))
(defcard GridWithAutofit GridWithAutofitUI)

(defui GridWithColSpanUI
  []
  (ui/simple-grid
    {:columns {:base "2" :md 4}
     :spacing {:base "24px" :md "40px"}}
    (<>
      (ui/grid-item {:bg       "green.500"
                     :col-span {:base "1" :md "3"}}
                    "Column 1")
      (ui/grid-item {:bg       "pink.500"
                     :col-span {:base "1" :md "1"}}
                    "Column 2"))))

(defcard GridWithColSpan GridWithColSpanUI)


;; (defui VerticalStackUI
;;   []
;;   [:& ui/Stack {:spacing "4"}
;;    [:span "oooooo"]
;;    [:span "ahhhh"]
;;    [:span "Woah!"]])
;; (defcard VerticalStack VerticalStackUI)


;; (defui StackCustomDividerUI
;;   []
;;   [:div 
;;    [:& ui/Stack {:spacing "12px"}
;;     [:& ui/Box "1"]
;;     [:& ui/Box "2"]
;;     [:& ui/Box "3"]]
;;    [:& ui/Stack {:spacing "40px"
;;                  :divider (dom/html  [:& ui/Divider {:border-color "red.200" }])}
;;     [:& ui/Box "1"]
;;     [:& ui/Box "2"]
;;     [:& ui/Box "3"]]]
;;   )
;; (defcard StackCustomDivider StackCustomDividerUI)

;; ;; (defcard COMPONENT component)
