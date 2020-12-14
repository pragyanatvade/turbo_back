(ns com.vadelabs.turbo.ui.tag-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui <>]]
   [com.vadelabs.turbo.ui.tag :as ui]
   [com.vadelabs.turbo.ui.icons :as icons]
   [com.vadelabs.turbo.dom :as d])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defcard BasicTag (ui/tag "Gray"))

(defcard WithSizes (<>
                    (ui/tag {:size "sm"} "Gray")
                    (ui/tag {:size "md"} "Gray")
                    (ui/tag {:size "lg"} "Gray")))

(defcard ColorSchemes (<>
                       (ui/tag {:size "sm" :color-scheme "green"} "Green")
                       (ui/tag {:size "md" :color-scheme "pink"} "Pink")
                       (ui/tag {:size "lg" :color-scheme "blue"} "Blue")))

(defcard WithLeftIcon (ui/tag
                       {:color-scheme "cyan"}
                       (ui/left-icon {:w "12px" :h "12px" :as icons/add})
                       (ui/label "Green")))

(defcard WithRightIcon (<>
                        (ui/tag
                         {:color-scheme "cyan"}
                         (ui/label "Green")
                         (ui/right-icon {:w "12px" :h "12px" :as icons/add}))
                        (ui/tag
                         {:variant "solid" :color-scheme "teal"}
                         (ui/label "Teal")
                         (ui/right-icon {:as icons/add}))))

;; TODO Fix close-button styling - it should be a transparent cross
(defcard WithCloseButton (<>
                          (ui/tag
                           {:variant "solid" :size "sm" :color-scheme "cyan"}
                           (ui/label "Tag Label")
                           (ui/close-button)
                           )
                          (ui/tag
                           {:variant "solid" :size "md" :color-scheme "cyan"}
                           (ui/label "Tag Label")
                           (ui/close-button)
                           )
                          (ui/tag
                           {:variant "solid" :size "lg" :color-scheme "cyan"}
                           (ui/label "Tag Label")
                           (ui/close-button)
                           )
                          ))
;; (defcard WithCustomElement (ui/tag
;;                             {:size "lg" :color-scheme "red" :border-radius "full"}
;;                             (d/div "AVATAR")
;;                             (ui/label "Pragyan")
;;                             (ui/close-button)))
