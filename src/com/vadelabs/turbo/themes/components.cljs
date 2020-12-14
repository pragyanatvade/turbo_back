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

(def ^:private numeric-styles {"&[data-is-numeric=true]" {:text-align "right"}})

(defn- simple-variant
  [props]
  (let [{:keys [color-scheme]} props]
    {:th {:color ((h/mode "gray.600" "gray.400") props)
          :border-bottom "1px"
          :border-color ((h/mode (str color-scheme ".100") (str color-scheme ".700")) props)
          :combinators numeric-styles}
     :td {:border-bottom "1px"
          :border-color ((h/mode (str color-scheme ".100") (str color-scheme ".700")) props)
          :combinators numeric-styles}
     :caption {:color ((h/mode "gray.600" "gray.100") props)}
     :tfoot {:combinators {"tr:last-of-type th" {:border-bottom-width "0"}}}}))

(defn- striped-variant
  [props]
  (let [{:keys [color-scheme]} props
        border-bottom "1px"
        border-color ((h/mode (str color-scheme ".100") (str color-scheme ".700")) props)]
    {:th {:color ((h/mode "gray.600" "gray.400") props)
          :border-bottom border-bottom
          :border-color border-color
          :combinators numeric-styles}
     :td {:border-bottom border-bottom
          :border-color border-color
          :combinators numeric-styles}
     :caption {:color ((h/mode "gray.600" "gray.100") props)}
     :tbody {:combinators {"tr:nth-of-type(odd) th" {:border-bottom-width "1px"
                                                     :border-color ((h/mode (str color-scheme ".100") (str color-scheme ".700")) props)}
                           "tr:nth-of-type(odd) td" {:border-bottom-width "1px"
                                                     :border-color ((h/mode (str color-scheme ".100") (str color-scheme ".700")) props)
                                                     :background ((h/mode (str color-scheme ".100") (str color-scheme ".700")) props)}}}
     :tfoot {:combinators {"tr:last-of-type th" {:border-bottom-width "0"}}}}))

(def Table
  {:parts [:table :thead :tbody :tr :th :td :caption]
   :base {:table {:font-variant-numeric "lining-nums tabular-nums"
                  :border-collapse "collapse"
                  :width "full"}
          :th {:font-family "heading"
               :font-weight "bold"
               :text-transform "uppercase"
               :letter-spacing "wider"
               :text-align "left"}
          :td {:text-align "left"}
          :caption {:mt "4"
                    :font-family "heading"
                    :text-align "center"
                    :font-weight "medium"}}
   :variants {:simple simple-variant
              :striped striped-variant
              :unstyled {}}
   :sizes {:sm {:th {:px "4"
                     :py "1"
                     :line-height "4"
                     :font-size "xs"}
                :td {:px "4"
                     :py "2"
                     :font-size "sm"
                     :line-height "4"}
                :caption {:px "4"
                          :py "2"
                          :font-size "xs"}}
           :md {:th {:px "6"
                     :py "3"
                     :line-height "4"
                     :font-size "xs"}
                :td {:px "6"
                     :py "4"
                     :line-height "5"}
                :caption {:px "6"
                          :py "2"
                          :font-size "sm"}}
           :lg {:th {:px "8"
                     :py "4"
                     :line-height "5"
                     :font-size "sm"}
                :td {:px "8"
                     :py "5"
                     :line-height "6"}
                :caption {:px "6"
                          :py "2"
                          :font-size "md"}}}
   :default {:variant "simple"
             :size "md"
             :color-scheme "gray"}})


(defn- tag-variant-subtle
  [props]
  {:container (variant-subtle props)})
(defn- tag-variant-solid
  [props]
  {:container (variant-solid props)})
(defn- tag-variant-outline
  [props]
  {:container (variant-outline props)})

(def Tag
  {:parts [:container :label :close-button]
   :base {:container {:font-weight "medium"
                      :line-height "1.2"
                      :outline "0"
                      ;; :pseudo {:focus {:box-shadow "outline"}}
                      }
          :label {:line-height "1.2"}
          :close-button {:font-size "18px"
                         :w "1.25rem"
                         :h "1.25rem"
                         :border-radius "full"
                         :ml "0.375rem"
                         :mr "-1"
                         :opacity "0.5"
                         ;; :pseudo {:disabled {:opacity 0.4}
                         ;;          :focus {:box-shadow "outline"
                         ;;                  :bg "rgba(0,0,0,0.14)"}
                         ;;          :hover {:opacity "0.8"}
                         ;;          :active {:opacity "1"}}
                         }}
   :sizes {:sm {:container {:min-h "1.25rem"
                            :min-w "1.25rem"
                            :font-size "xs"
                            :px "2"
                            :border-radius "md"}
                :close-button {:mr "-2px"
                               :ml "0.35rem"}}
           :md {:container {:min-h "1.5rem"
                            :min-w "1.5rem"
                            :font-size "sm"
                            :border-radius "md"
                            :px "2"}}
           :lg {:container {:min-h "8"
                            :min-w "8"
                            :font-size "md"
                            :border-radius "md"
                            :px "3"}}}
   :variants {:subtle tag-variant-subtle
              :solid tag-variant-solid
              :outline tag-variant-outline}
   :default {:size "md"
             :variant "subtle"
             :color-scheme "gray"}})

(def components
  {:Badge   Badge
   :Kbd     Kbd
   :Heading Heading
   :Code    Code
   :Divider Divider
   :Link    Link
   :List    List
   :Table   Table
   :Tag Tag
   })
