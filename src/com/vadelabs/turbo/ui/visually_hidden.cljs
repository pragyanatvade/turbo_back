(ns com.vadelabs.turbo.ui.visually-hidden
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]))

(def ^:private visually-hidden-style
  {:border "0px"
   :clip "rect(0px,0px,0px,0px)"
   :height "1px"
   :width "1px"
   :margin "-1px"
   :padding "0px"
   :overflow "hidden"
   :white-space "nowrap"
   :position "absolute"})

(defui VisuallyHidden
  [props]
  (let [props (enc/assoc-some
               props
               :turbo$css visually-hidden-style
               :as "span")]
    (block props)))
(def visually-hidden (comp/factory VisuallyHidden))

(defui VisuallyHiddenInput
  [props]
  (let [props (enc/assoc-some
               props
               :turbo$css visually-hidden-style
               :as "input")]
    (block props)))
(def visually-hidden-input (comp/factory VisuallyHiddenInput))
