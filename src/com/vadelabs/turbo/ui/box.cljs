(ns com.vadelabs.turbo.ui.box
  (:refer-clojure :exclude [Box])
  (:require
   [com.vadelabs.turbo.dom :as dom :refer [defui]]
   [com.vadelabs.turbo.styled :refer [<class]]))

(defui Box
  [props]
  (let [{children :children
         style    :__css
         :or      {style {}}} props]
    [:div {:class (<class style)} children]))

(defn- square-class
  [props]
  (let [{center-content? :center-content?} props
        style                              (if center-content?
                                             {:display         "flex"
                                              :align-items     "center"
                                              :justify-content "center"}
                                             {})]
    (<class style)))

(defui Square
  [props]
  (let [{children        :children
         size            :size
         center-content? :center-content?
         :or             {center-content? true}} props

        style {:flex-shrink 0
               :flex-grow   0}
        style (if center-content?
                (assoc style
                       :display "flex"
                       :align-items "center"
                       :justify-content "center")
                style)]
    [:& Box {:box-size size
             :__css    style} children]))

(defui Circle
  [props]
  (let [children (:children props)]
    [:div {} children]))

