(ns com.vadelabs.turbo.ui.icons-card
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.icons :as ui]
   [com.vadelabs.turbo.dom :as d])
  (:require-macros
   [devcards.core :refer [defcard]]))

(defui BasicIconUI
  []
  (ui/icon {:font-size "24px"}))

(defcard BasicIcon BasicIconUI)

(defui ArrowIconUI
  [props]
  (ui/icon
    (assoc props :view-box "0 0 32 32")
    (d/g
      {:fill "currentColor"}
      (d/path {:d "M16,11.5a3,3,0,1,0-3-3A3,3,0,0,0,16,11.5Z"})
      (d/path {:d "M16.868.044A8.579,8.579,0,0,0,16,0a15.99,15.99,0,0,0-.868,31.956A8.579,8.579,0,0,0,16,32,15.99,15.99,0,0,0,16.868.044ZM16,26.5a3,3,0,1,1,3-3A3,3,0,0,1,16,26.5ZM16,15A8.483,8.483,0,0,0,8.788,27.977,13.986,13.986,0,0,1,16,2a6.5,6.5,0,0,1,0,13Z"}))))

(def arrow-icon (comp/factory ArrowIconUI))

(defui CustomIconUI
  []
  (arrow-icon
    {:box-size "40px"
     :color    "red.100"}))

(defcard CustomIcon CustomIconUI)

(defcard AddIcon (ui/add {:box-size "40px"
                          :color    ["red" "purple"]}))
(defcard AddI (ui/sun))
(defcard ArrowBack (ui/arrow-back   {:box-size "50px"
                                     :color "green"
                                     }) )
(defcard ArrowDown (ui/arrow-down
                    {:box-size "40px"
                     :color "green"}))


(defcard ArrowForward (ui/arrow-forward
                       {:box-size "40px"
                        :color "green"}))
(defcard ArrowRight (ui/arrow-right
                     {:box-size "40px"
                      :color "green"}))
(defcard ArrowLeft (ui/arrow-left
                    {:box-size "40px"
                     :color "green"}))
(defcard ArrowUp (ui/arrow-up
                  {:box-size "40px"
                   :color "green"}))
(defcard ArrowUpDown (ui/arrow-up-down
                  {:box-size "40px"
                   :color "green"}))

(defcard AtSign (ui/at-sign
                  {:box-size "40px"
                   :color "green"}))

(defcard Attachment (ui/attachment
                  {:box-size "40px"
                   :color "green"}))

(defcard Bell (ui/bell
                  {:box-size "40px"
                   :color "green"}))

(defcard Calendar (ui/calendar
                  {:box-size "40px"
                   :color "green"}))

(defcard Chat (ui/chat
                  {:box-size "40px"
                   :color "green"}))

(defcard Check (ui/check
                  {:box-size "40px"
                   :color "green"}))

(defcard CheckCircle (ui/check-circle
                  {:box-size "40px"
                   :color "green"}))

(defcard ChevronDown (ui/chevron-down
                  {:box-size "40px"
                   :color "green"}))

(defcard ChevronUp (ui/chevron-up
                  {:box-size "40px"
                   :color "green"}))

(defcard ChevronLeft (ui/chevron-left
                  {:box-size "40px"
                   :color "green"}))

(defcard ChevronRight (ui/chevron-right
                  {:box-size "40px"
                   :color "green"}))

(defcard Close (ui/close
                  {:box-size "40px"
                   :color "green"}))

(defcard Copy (ui/copy
                  {:box-size "40px"
                   :color "green"}))

(defcard Delete (ui/delete
                  {:box-size "40px"
                   :color "green"}))

(defcard Download (ui/download
                  {:box-size "40px"
                   :color "green"}))

(defcard DragHandle (ui/drag-handle
                  {:box-size "40px"
                   :color "green"}))

(defcard Edit (ui/edit
                  {:box-size "40px"
                   :color "green"}))

(defcard Email (ui/email
                  {:box-size "40px"
                   :color "green"}))

(defcard ExternalLink (ui/external-link
                  {:box-size "40px"
                   :color "green"}))

(defcard Hamburger (ui/hamburger
                  {:box-size "40px"
                   :color "green"}))

(defcard Info (ui/info
                  {:box-size "40px"
                   :color "green"}))

(defcard Link (ui/link
                  {:box-size "40px"
                   :color "green"}))

(defcard Lock (ui/lock
                  {:box-size "40px"
                   :color "green"}))
(defcard Minus (ui/minus
                  {:box-size "40px"
                   :color "green"}))

(defcard Phone (ui/phone
                  {:box-size "40px"
                   :color "green"}))

(defcard PlusSquare (ui/plus-square
                  {:box-size "40px"
                   :color "green"}))

(defcard Question (ui/question
                  {:box-size "40px"
                   :color "green"}))

(defcard QuestionOutline (ui/question-outline
                  {:box-size "40px"
                   :color "green"}))

(defcard Repeat (ui/repeat
                  {:box-size "40px"
                   :color "green"}))

(defcard RepeatClock (ui/repeat-clock
                  {:box-size "40px"
                   :color "green"}))

(defcard Search (ui/search
                  {:box-size "40px"
                   :color "green"}))

(defcard Search2 (ui/search-2
                  {:box-size "40px"
                   :color "green"}))

(defcard Settings (ui/settings
                  {:box-size "40px"
                   :color "green"}))

(defcard SmallAdd (ui/small-add
                  {:box-size "40px"
                   :color "green"}))

(defcard SmallClose (ui/small-close
                  {:box-size "40px"
                   :color "green"}))

(defcard Spinner (ui/spinner
                  {:box-size "40px"
                   :color "green"}))

(defcard Star (ui/star
                  {:box-size "40px"
                   :color "green"}))

(defcard Time (ui/time
                  {:box-size "40px"
                   :color "green"}))

(defcard TriangleDown (ui/triangle-down
                  {:box-size "40px"
                   :color "green"}))

(defcard TriangleUp (ui/triangle-up
                  {:box-size "40px"
                   :color "green"}))

(defcard Unlock (ui/unlock
                  {:box-size "40px"
                   :color "green"}))

(defcard Updown (ui/updown
                  {:box-size "40px"
                   :color "green"}))

(defcard View (ui/view
                  {:box-size "40px"
                   :color "green"}))

(defcard ViewOff (ui/view-off
                  {:box-size "40px"
                   :color "green"}))

(defcard Warning (ui/warning
                  {:box-size "40px"
                   :color "green"}))

(defcard Warning2 (ui/warning-2
                  {:box-size "40px"
                   :color "green"}))