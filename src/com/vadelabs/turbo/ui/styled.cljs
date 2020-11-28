(ns com.vadelabs.turbo.ui.styled
  (:refer-clojure :exclude [Box List])
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.dom :as dom :refer [defui]]
   [com.vadelabs.turbo.styled :refer [stylify]]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [com.vadelabs.turbo.themes.helpers :as thh]))


(defui Block
  "Box is the most abstract component on top of which other turbo
   components are built. It renders a `div` element by default."
  [props]
  (let [{:keys [as children]
         :or   {as :div}} props]
    [(name as) {:class (stylify props)} children]))
