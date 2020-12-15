(ns com.vadelabs.turbo.ui.alert-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.alert :as ui]
   [com.vadelabs.turbo.ui.styled :as styled])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui AlertBasicUI
  []
  (ui/alert
   {:status "error" :variant "solid" :border-radius "md"}
   (ui/icon)
   (ui/title {:mr "2"} "Outdated!")
   (ui/description "Your turbo experience may be degraded.")))
(defcard AlertBasic AlertBasicUI)

(defui AlertSubtleUI
  []
  (ui/alert
   {:status "success" :mx "auto" :align-items "start"}
   (ui/icon)
   (styled/block
    {:flex "1"}
    (ui/title "Holy Smokes")
    (ui/description "Something just happened"))))
(defcard AlertSubtle AlertSubtleUI)

(defui AlertLeftAccentUI
  []
  (ui/alert
   {:variant "left-accent" :mx "auto" :align-items "start"}
   (ui/icon)
   (styled/block
    {:flex "1"}
    (ui/title "Holy Smokes")
    (ui/description "Something just happened"))))
(defcard AlertLeftAccent AlertLeftAccentUI)

(defui AlertTopAccentUI
  []
  (ui/alert
   {:variant "top-accent" :mx "auto" :align-items "flex-start" :pt "3" :rounded "md"}
   (ui/icon)
   (styled/block
    {:flex "1"}
    (ui/title {:display "block" :mr "2"} "Holy Smokes")
    (ui/description "Something just happened"))))
(defcard AlertTopAccent AlertTopAccentUI)

(defui AlertDocsExampleUI
  []
  (ui/alert
   {:status "error"}
   (ui/icon)
   "There was an error processing your request"))
(defcard AlertDocsExample AlertDocsExampleUI)
