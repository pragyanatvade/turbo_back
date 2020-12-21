(ns com.vadelabs.turbo.ui.close-button
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [com.vadelabs.turbo.ui.icons :as icons]))

(defui CloseButton
  [props]
  (let [styles (tuh/use-style-config :CloseButton props)
        {:keys [children disabled? turbo$css]} props
        base-style (enc/assoc-some
                    {}
                    :outline "0"
                    :display "flex"
                    :align-items "center"
                    :justify-content "center"
                    :flex-shrink "0")
        props (enc/assoc-some
               props
               :type "button"
               :aria-label "Close"
               :disabled disabled?
               :turbo$css (enc/merge
                           base-style
                           styles
                           turbo$css))
        children (or children (icons/close {:width "1em" :height "1em"}))]
    (block props children)))
        
(def close-button (comp/factory CloseButton))
