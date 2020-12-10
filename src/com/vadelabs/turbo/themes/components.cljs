(ns com.vadelabs.turbo.themes.components
  (:refer-clojure :exclude [List])
  (:require [com.vadelabs.turbo.themes.helpers :as h]))

(defn- variant-solid
  [{:keys [color-scheme theme] :as props}]
  (let [cs   (name color-scheme)
        dark ((h/transparentize (str cs ".500") 0.6) theme)]
    {:bg    ((h/mode (str cs ".500") dark) props)
     :color ((h/mode "white" "white-alpha.800") props)}))


(defn- variant-subtle
  [{:keys [color-scheme theme] :as props}]
  (let [cs   (name color-scheme)
        dark ((h/transparentize (str cs ".200") 0.16) theme)]
    {:bg    ((h/mode (str cs ".100") dark) props)
     :color ((h/mode (str cs ".800") (str cs ".200")) props)}))

(defn- variant-outline
  [{:keys [color-scheme theme] :as props}]
  (let [cs    (name color-scheme)
        dark  ((h/transparentize (str cs ".200") 0.8) theme)
        light (h/get-color theme (str cs ".500"))
        color ((h/mode light dark) props)]
    {:color      color
     :box-shadow (str "inset 0 0 0px 1px " color)}))

(def ^:private variants
  {:solid   variant-solid
   :subtle  variant-subtle
   :outline variant-outline})

(def ^:private default-props
  {:variant      :subtle
   :color-scheme :gray})

(def Badge
  {:base     {:px             "1"
              :text-transform "uppercase"
              :font-size      "xs"
              :border-radius  "sm"
              :font-weight    "bold"}
   :variants variants
   :default  default-props})

(def Code
  {:base     {:font-family   "mono"
              :font-size     "sm"
              :px            "0.2em"
              :border-radius "sm"}
   :variants variants
   :default  default-props})
;; HEADING ;;

(def Heading
  {:base    {:font-family "heading"
             :font-weight "bold"}
   :sizes   {:4xl {:font-size   ["6xl" nil "7xl"]
                   :line-height "1"}
             :3xl {:font-size   ["5xl" nil "6xl"]
                   :line-height "1"}
             :2xl {:font-size   ["4xl" nil "5xl"]
                   :line-height ["1.2" nil "1"]}
             :xl  {:font-size   ["3xl" nil "4xl"]
                   :line-height ["1.33" nil "1.2"]}
             :lg  {:font-size   ["2xl" nil "3xl"]
                   :line-height ["1.33" nil "1.2"]}
             :md  {:font-size   "xl"
                   :line-height "1.2"}
             :sm  {:font-size   "md"
                   :line-height "1.2"}
             :xs  {:font-size   "sm"
                   :line-height "1.2"}}
   :default {:size "xl"}})

(def Divider
  {:base     {:border              "0"
              :opacity             "0.6"
              ;; :border-color "inherit"
              :border-top-color    "inherit"
              :border-bottom-color "inherit"
              :border-right-color  "inherit"
              :border-left-color   "inherit"}
   :variants {:solid  {;; border-style "solid"
                       :border-top-style    "solid"
                       :border-bottom-style "solid"
                       :border-right-style  "solid"
                       :border-left-style   "solid"}
              :dashed {;; border-style "dashed"
                       :border-top-style    "dashed"
                       :border-bottom-style "dashed"
                       :border-right-style  "dashed"
                       :border-left-style   "dashed"}}
   :default  {:variant "solid"}})

(def Kbd
  {:base (fn [props]
           {:bg                  ((h/mode "gray.100" "white-alpha") props)
            :border-radius       "md"
            :border-width        "1px"
            :border-bottom-width "3px"
            :font-size           "0.8em"
            :font-weight         "bold"
            :line-height         "normal"
            :px                  "0.4em"
            :white-space         "nowrap"})})
(def Link
  {:base {:transition      "all 0.15s ease-out"
          :cursor          "pointer"
          :text-decoration "none"
          :outline         "none"
          :color           "inherit"
          :pseudo          {:hover {:text-decoration "underline"}
                            :focus {:box-shadow "outline"}}}})

(def ^:private parts [:container :item :icon])
(def ^:private base-style-container {})
(def ^:private base-style-item {})
(def ^:private base-style-icon {:margin-right   "0.5rem"
                                :display        "inline"
                                :vertical-align "text-bottom"})
(def List
  {:parts parts
   :base  {:container base-style-container
           :item      base-style-item
           :icon      base-style-icon}})
(def components
  {:Badge   Badge
   :Kbd     Kbd
   :Heading Heading
   :Code    Code
   :Divider Divider
   :Link    Link
   :List    List})
