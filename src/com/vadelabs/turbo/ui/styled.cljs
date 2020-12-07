(ns com.vadelabs.turbo.ui.styled
  (:refer-clojure :exclude [Box List])
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp]
   [com.vadelabs.turbo.styled :refer [stylify]])
  (:require-macros [com.vadelabs.turbo.components :refer [defui $]]))

(defui Block
  [props]
  (let [{:keys [as children]
         :or   {as "div"}} props
        attrs              (enc/assoc-some
                             {}
                             :className (stylify props))
        ;; attrs              {:className (stylify props)}
        ]
    ;; (println "ATTRS" attrs)
    ($ as attrs children)))

(def block (comp/factory Block))
