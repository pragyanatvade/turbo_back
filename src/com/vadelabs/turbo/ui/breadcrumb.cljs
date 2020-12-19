(ns com.vadelabs.turbo.ui.breadcrumb
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [com.vadelabs.turbo.dom :as d]
   [clojure.string :as str]))

(defui BreadcrumbSeparator
  [props]
  (let [{:keys [spacing]} props
        styles (tuh/use-styles)
        separator-styles (enc/assoc-some
                          (:separator styles)
                          :mx spacing)
        props (enc/assoc-some
               props
               :role "presentation"
               :turbo$css separator-styles
               :as "span")]
    (block props)))
(def breadcrumb-separator (comp/factory BreadcrumbSeparator))

(defui BreadcrumbLink
  [props]
  (let [{:keys [current-page?]} props
        styles (tuh/use-styles)
        link-as (if current-page? "span" "a")
        link-styles (when-not current-page? (:link styles))
        aria-current (when current-page? "page")
        props (enc/assoc-some
               props
               :as link-as
               :aria-current aria-current
               :turbo$css link-styles)]
    (block props)))
(def breadcrumb-link (comp/factory BreadcrumbLink))

(defui BreadcrumbItem
  [props]
  (let [{:keys [current-page? separator last-child?
                spacing children]} props
        clones (into [] (map-indexed
                         (fn [idx item]
                           (let [{:keys [href label]} item
                                 link-props (enc/assoc-some
                                             {}
                                             :key idx
                                             :href href
                                             :current-page? current-page?)]
                             (breadcrumb-link link-props label)))
                         children))
        clones (if last-child?
                 clones
                 (conj clones
                       (breadcrumb-separator
                        {:spacing spacing
                         :key "separator"}
                        separator)))
        props (enc/assoc-some
               props
               :as "li"
               :turbo$css {:display "inline-flex"
                           :align-items "center"})]
    (block props clones)))
(def breadcrumb-item (comp/factory BreadcrumbItem))

(defui Breadcrumb
  [props]
  (let [{:keys [children spacing separator]
         :or {spacing "0.5rem"
              separator "/"}} props
        styles (tuh/use-multi-style-config :Breadcrumb props)
        props (enc/assoc-some
               props
               :aria-labal "breadcrumb"
               :as "nav")
        child-props (enc/assoc-some
                     {}
                     :as "ol")
        child-count (count children)
        clones (map-indexed
                  (fn [idx item]
                    (let [{:keys [current-page?]} item
                          item-props (enc/assoc-some
                                      {}
                                      :key idx
                                      :separator separator
                                      :spacing spacing
                                      :current-page? current-page?
                                      :last-child? (= child-count (+ idx 1))
                                      :children [item])]
                      (breadcrumb-item item-props)))
                  children)]
    (block props (tuh/styles-provider
                  {:value styles}
                  (block
                   child-props
                   clones)))))
(def breadcrumb (comp/factory Breadcrumb))
