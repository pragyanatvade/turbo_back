(ns com.vadelabs.turbo.ui.styled
  (:refer-clojure :exclude [Box List])
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp]
   [com.vadelabs.turbo.styled :refer [stylify]])
  (:require-macros [com.vadelabs.turbo.components :refer [defui $]]))

(defui Block
  [props]
  (let [{:keys [as children href
                target rel key alt
                role aria-orientation
                focusable view-box
                height width src loading
                cross-origin html-height html-width]
         :or   {as "div"}} props
        attrs              (enc/assoc-some
                             {}
                             :className (stylify props)
                             :href href
                             :target target
                             :rel rel
                             :key key
                             :role role
                             :aria-orientation aria-orientation
                             :focusable focusable
                             :view-box view-box
                             :height height
                             :width width
                             :alt alt
                             :src src
                             :loading loading
                             :cross-origin cross-origin)
        tag (cond
              (keyword? as) (str (name as))
              :else (str as))]
    (if (fn? as)
      (as (enc/assoc-some
           attrs
           :html-width html-width
           :html-height html-height) children)
      ($ tag {:& attrs} children))))

(def block (comp/factory Block))
