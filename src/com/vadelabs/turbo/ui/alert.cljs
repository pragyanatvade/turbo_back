(ns com.vadelabs.turbo.ui.alert
  (:require
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.components :as comp :refer [defui]]
   [com.vadelabs.turbo.ui.styled :refer [block]]
   [com.vadelabs.turbo.ui.helpers :as tuh]
   [com.vadelabs.turbo.ui.icons :as icons]
   [com.vadelabs.turbo.dom :as d]))

(defui Check
  [props]
  (let [props (enc/assoc-some
               props
               :view-box "0 0 24 24")]
    (icons/icon
     props
     (d/path
      {:fill "currentColor"
       :d "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"}))))
(def check (comp/factory Check))

;; (defui Warning
;;   [props]
;;   (let [props (enc/assoc-some
;;                props
;;                :view-box "0 0 24 24")]
;;     (icons/icon
;;      props
;;      (d/path
;;       {:fill "currentColor"
;;        :d "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}
;;       ))))
;; (def warning (comp/factory Warning))

(def ^:private statuses
  {:info {:icon icons/info :color-scheme "blue"}
   :warning {:icon icons/warning :color-scheme "orange"}
   :success {:icon check :color-scheme "green"}
   :error {:icon icons/warning :color-scheme "red"}})

(defui Alert
  [props]
  (let [{:keys [status color-scheme children]
         :or {status "info"
              color-scheme (get-in statuses [(keyword status) :color-scheme])}} props
        styles (tuh/use-multi-style-config :Alert (assoc props :color-scheme color-scheme))
        alert-styles (enc/assoc-some
                      (:container styles)
                      :width "100%"
                      :display "flex"
                      :align-items "center"
                      :position "relative"
                      :overflow "hidden")
        props (enc/assoc-some
               props
               :turbo$css alert-styles
               :role "alert")]
    (tuh/alert-provider
     {:value {:status status}}
     (tuh/styles-provider
      {:value styles}
      (block props children)))))
(def alert (comp/factory Alert))

(defui AlertTitle
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:title styles))]
    (block props children)))
(def title (comp/factory AlertTitle))

(defui AlertDescription
  [props]
  (let [{:keys [children]} props
        styles (tuh/use-styles)
        description-styles (enc/assoc-some
                            (:description styles)
                            :display "inline")
        props (enc/assoc-some
               props
               :turbo$css description-styles)]
    (block props children)))
(def description (comp/factory AlertDescription))

(defui AlertIcon
  [props]
  (let [{:keys [status]} (tuh/use-alert-context)
        styles (tuh/use-styles)
        props (enc/assoc-some
               props
               :turbo$css (:icon styles)
               :display "inherit"
               :as "span")
        {:keys [icon]} (get statuses (keyword status))]
    (block props (icon {:w "100%" :h "100%"}))))
(def icon (comp/factory AlertIcon))
