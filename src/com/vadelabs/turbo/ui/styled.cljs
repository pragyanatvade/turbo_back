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
                target rel key
                role aria-orientation]
         :or   {as "div"}} props
        attrs              (enc/assoc-some
                             {}
                             :className (stylify props)
                             :href href
                             :target target
                             :rel rel
                             :key key
                             :role role
                             :aria-orientation aria-orientation)
        tag                (if (keyword? as)
                             (name as)
                             as)]
    ($ (str tag) {:& attrs} children)))

(def block (comp/factory Block))
