(ns com.vadelabs.turbo.ui.styled
  (:refer-clojure :exclude [Box List])
  (:require
   [com.vadelabs.turbo.components :as comp :refer [defui $]]
   [com.vadelabs.turbo.styled :refer [stylify]]))

(defui Block
  [props]
  (let [{:keys [as children]
         :or   {as "div"}} props]
    ($ as {:className (stylify props)} children)))
(def block (comp/factory Block))
