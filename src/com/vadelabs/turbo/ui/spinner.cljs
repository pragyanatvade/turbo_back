(ns com.vadelabs.turbo.ui.spinner
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [com.vadelabs.turbo.dom :as d]
   [com.vadelabs.turbo.ui.visually-hidden :as vh]
   [clojure.string :as str]
   [stylefy.core :as stylefy]))

(stylefy/keyframes "spin"
                   [:from {:transform "rotate(0deg)"}]
                   [:to {:transform "rotate(360deg)"}])

(defui Spinner
  [props]
  (let [styles (tuh/use-style-config :Spinner props)
        {:keys [label thickness speed
                color empty-color]
         :or {label "Loading..."
              thickness "2px"
              speed "0.45s"
              empty-color "transparent"}} props
        spinner-styles (enc/assoc-some
                        styles
                        :display "inline-block"
                        :border-color "currentColor"
                        :border-style "solid"
                        :border-radius "99999px"
                        :border-width thickness
                        :border-bottom-color empty-color
                        :border-left-color empty-color
                        :color color
                        :animation (str "spin " speed " linear infinite"))
        props (enc/assoc-some
               props
               :turbo$css spinner-styles)
        children (when label
                   (vh/visually-hidden label))]
    (block props children)))

(def spinner (comp/factory Spinner))
