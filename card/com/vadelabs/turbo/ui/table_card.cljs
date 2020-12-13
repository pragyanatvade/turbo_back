(ns com.vadelabs.turbo.ui.table-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.table :as ui])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui SimpleTable
  [props]
  (ui/table
   props
   (ui/table-caption "Imperial to metric conversion factors")
   (ui/thead
    (ui/tr
     (ui/th "To Convert")
     (ui/th "Into")
     (ui/th {:numeric? true} "Multiply By")))
   (ui/tbody
    (ui/tr
     (ui/td "inches")
     (ui/td "millimeters (mm)")
     (ui/td {:numeric? true} 25.4))
    (ui/tr
     (ui/td "feet")
     (ui/td "centimeters (cm)")
     (ui/td {:numeric? true} 30.48))
    (ui/tr
     (ui/td "miles")
     (ui/td "kilometers (km)")
     (ui/td {:numeric? true} 1.61))
    )))
(def simple-table (comp/factory SimpleTable))

(defcard SimpleSmall (simple-table {:size "sm"}))
(defcard SimpleMedium (simple-table {:size "md"}))
(defcard SimpleLarge (simple-table {:size "lg"}))

(defcard StripedSmall (simple-table {:size "sm" :variant "striped"}))
(defcard StripedMedium (simple-table {:size "md" :variant "striped"}))
(defcard StripedLarge (simple-table {:size "lg" :variant "striped"}))
(defcard Unstyled (simple-table {:size "none" :variant "unstyled"}))
