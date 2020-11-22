(ns com.vadelabs.turbo.ui.layout-card
  (:require
   [nubank.workspaces.core :as ws :refer [defcard]]
   [com.vadelabs.turbo.cards :refer [turbo-card]]
   [com.vadelabs.turbo.ui.layout :as ui]
   [com.vadelabs.turbo.dom :as dom :refer [defui]]))


(defui Basic
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
(defcard BasicCard
  (turbo-card Basic))

(defui Square
  []
  [:& ui/Square {:bg   "red.300"
                 :size ["40px" "60px" "100px"]}
   [:& ui/Circle {:size  "60px"
                  :bg    "tomato"
                  :color "white"}
    "BOX"]])

(defcard SquareCard
  (turbo-card Square))

(defui Center
  []
  [:& ui/Center {:bg "#da3d6929"
                 :w  "480px"
                 :h  "400px"}
   [:& ui/Box {:p  "40px"
               :bg "green.600"}
    "BOX"]])

(defcard CenterCard
  (turbo-card Center))

(defui Spacer
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

(defcard SpacerCard
  (turbo-card Spacer))

(defui Code
  []
  [:& ui/Code {:color-scheme "pink"} "import React from react"])
(defcard CodeCard
  []
  (turbo-card Code))

(defui Container
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
(defcard ContainerCard
  []
  (turbo-card Container))

(defui Divider
  []
  [:& ui/Divider])
(defcard DividerCard
  []
  (turbo-card Divider))
