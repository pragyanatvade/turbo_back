(ns com.vadelabs.turbo.ui.breadcrumb-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.breadcrumb :as ui]
   [com.vadelabs.turbo.dom :as d]
   [com.vadelabs.turbo.ui.icons :as icons])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui DefaultBreadcrumbUI
  []
  (ui/breadcrumb
   {:spacing "4"
    :children [{:href "#" :label "Breadcrumb 1"}
               {:href "#" :label "Breadcrumb 2"}
               {:href "#" :label "Breadcrumb 3" :current-page? true}]}))
(defcard DefaultBreadcrumb DefaultBreadcrumbUI)

(defui SeparatorBreadcrumbUI
  []
  (<>
   (ui/breadcrumb
    {:separator ">"
     :children [{:href "#" :label "Home"}
                {:href "#" :label "About"}
                {:href "#" :label "Current" :current-page? true}]})
   (ui/breadcrumb
    {:spacing "8px"
     :separator (icons/chevron-right {:color "gray.300"})
     :children [{:href "/" :label "Home"}
                {:href "/about" :label "About"}
                {:href "/contact" :label "Current" :current-page? true}]})))
(defcard SeparatorBreadcrumb SeparatorBreadcrumbUI)
