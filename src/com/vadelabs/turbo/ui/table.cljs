(ns com.vadelabs.turbo.ui.table
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]))


(defui Table
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-multi-style-config :Table props)
        props (enc/assoc-some
               props
               :turbo$css (:table styles)
               :role "table"
               :as "table")]
    (tuh/styles-provider
     {:value styles}
     (block props children))))
(def table (comp/factory Table))

(defui TableCaption
  [props]
  (let [{:keys [children placement]
         :or {placement "bottom"}} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:caption styles)
               :caption-side placement
               :as "caption")]
    (block props children)))
(def table-caption (comp/factory TableCaption))

(defui THead
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:thead styles)
               :as "thead")]
    (block props children)))
(def thead (comp/factory THead))

(defui TBody
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:tbody styles)
               :as "tbody")]
    (block props children)))
(def tbody (comp/factory TBody))

(defui TFoot
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:tfoot styles)
               :as "tfoot")]
    (block props children)))
(def tfoot (comp/factory TFoot))

(defui Th
  [props]
  (let [{:keys [children numeric?]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:th styles)
               :data-is-numeric numeric?
               :as "th")]
    (block props children)))
(def th (comp/factory Th))

(defui Tr
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:tr styles)
               :role "row"
               :as "tr")]
    (block props children)))
(def tr (comp/factory Tr))

(defui Td
  [props]
  (let [{:keys [children numeric?]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:td styles)
               :data-is-numeric numeric?
               :role "gridcell"
               :as "td")]
    (block props children)))
(def td (comp/factory Td))
