(ns workspace
  (:require
   ;; [com.vadelabs.turbo.dom :as dom :refer [defui]]
   ;; [goog.dom :as gdom]
   ["react-dom" :as rdom]
   ;; [com.vadelabs.turbo.ui :as ui]
   ;; [com.vadelabs.turbo.themes :as themes]
   ;; [com.vadelabs.turbo.styled :refer [<class]]
   [com.vadelabs.turbo.dom :as d]
   [com.vadelabs.turbo.components :as comp :refer [defui]]))

;; (defui Root
;;   []
;;   (let [theme (themes/use-theme)]
;;     [:& ui/Box {:theme    theme
;;                 :bg-color "purple"
;;                 :w        "300px"} "JELLO BOC"]))

;; (defui Root
;;   []
;;   (let [theme (themes/use-theme)]
;;     [:& ui/Square {:theme theme
;;                    :size  "400px"
;;                    :bg-color "purple.400"}
;;      "Square Box"]))

;; (defui Root
;;   []
;;   (let [theme (themes/use-theme)]
;;     [:& ui/Circle {:theme    theme
;;                    :size     "400px"
;;                    :bg-color "purple.300"}]))


;; (defui Root
;;   []
;;   [:& ui/Box {}
;;    [:& ui/Box {:color ["tomato" "purple"]
;;                :hover {:bg    "red.500"
;;                        :color "white"}
;;                } "Welcome to Box"]
;;    [:& ui/Box {:position "relative"
;;                :bg       "red.200"
;;                :before   {:height         0
;;                           :content        "\"\""
;;                           :display        "block"
;;                           :padding-bottom ["40px" "100px"]}}]])


;; (defui Root
;;   []
;;   [:& ui/Square {:bg   "red.300"
;;                  :size ["40px" "60px" "100px"]}
;;    [:& ui/Circle {:size  "60px"
;;                   :bg    "tomato"
;;                   :color "white"}
;;     "BOX"]])


;; (defui Root 
;;   []
;;   [:& ui/Center {:bg "#da3d6929"
;;                  :w  "480px"
;;                  :h  "400px"}
;;    [:& ui/Box {:p  "40px"
;;                :bg "green.600"}
;;     "BOX"]
;;    ])


;; (defui Root
;;   []
;;   [:& ui/Flex {:color     ["green.400" "tomato"]
;;                ;; :direction {:base "column" :md "row"}
;;                :direction ["column" nil "row"]
;;                }
;;    [:& ui/Box {:bg       "pink.500"
;;                :box-size "100px"}
;;     "Box 1"]
;;    [:& ui/Spacer]
;;    [:& ui/Box {:bg       "green.500"
;;                :box-size "100px"}
;;     "Box 2"]
;;    ])


;; (defui Root
;;   []
;;   [:& ui/Code {:color-scheme "pink"} "import React from react"])

;; (defui Root
;;   []
;;   [:& ui/Container {:max-width "md"}
;;    [:p "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
;;         Lorem Ipsum has been the industry's standard dummy text ever since the
;;         1500s, when an unknown printer took a galley of type and scrambled it to
;;         make a type specimen book. It has survived not only five centuries, but
;;         also the leap into electronic typesetting, remaining essentially
;;         unchanged. It was popularised in the 1960s with the release of Letraset
;;         sheets containing Lorem Ipsum passages, and more recently with desktop
;;         publishing software like Aldus PageMaker including versions of Lorem
;;         Ipsum."]])


;; (defui Root
;;   []
;;   [:& ui/Divider {:border-color "red"
;;                   :orientation  :vertical}])

;; (defui Root
;;   []
;;   [:& ui/Badge {} "Success"])

;; (def theme-context (dom/create-context "light"))


;; (defui TEST
;;   [props]
;;   (println "TEST" props (dom/use-context theme-context))
;;   [:div {} "HELLO WORLD"])

;; (defui Root
;;   []
;;   (let [provider (dom/provider theme-context)]
;;     [:& provider {:value "hello"}
;;      [:& TEST {} "Hello World"]]))


;; (def selectors
;;   ^{:combinators {
;;                   [:> "*:not(style)"] {:margin-top "1rem" :margin-left "0"}
;;                   [:- "*:not(style)"] {:margin-top "1rem" :margin-left "0"}
;;                   }}
;;   {:display        "flex"
;;    :flex-direction "column"})

;; (defui Root
;;   []
;;   [:div
;;    [:div {:class (<class selectors)}
;;     [:span "asdasdasd"]
;;     [:span "ooooh"]
;;     [:span "12312weqweq"]]
;;    [:div {:class (<class selectors)}
;;     [:span "1231231"]
;;     [:span "bhsdids"]]])

;; (defui Root
;;   []
;;   [:div {:class (<class (with-meta
;;                           {:background-color "red"}
;;                           {:media  {{:screen true :min-width "30em"}
;;                                     {:background-color "purple"}}
;;                            :pseudo {:hover {:background-color "tomato"}}}))} "DOM LIBR"])


;; (defui Root
;;   []
;;   [:div {:class (<class (with-meta
;;                           {:background-color "red"}
;;                           {:media {{:screen true :min-width "30em"}
;;                                    (with-meta
;;                                      {:background-color "purple"}
;;                                      {:pseudo {:hover {:background-color "tomato"}}}
;;                                      )}}
;;                           ))} "DOM LIBR"])

;; (defui Root
;;   []
;;   [:div {:class (<class (with-meta
;;                           {:background-color "red"}
;;                           {:pseudo {:hover (with-meta {:text-decoration "underline"}
;;                                              {:media {{:screen true :min-width "30em"}
;;                                                       {:background-color "tomato"}}})}}))}
;;    "HELLO WORLD"])

(defui app
  [props]
  (println "PROPS" props)
  (d/h1 "HELLO "))

(def app-ui (comp/factory app))

(defn ^:export init
  []
  (rdom/render (app-ui {:a 1}) (js/document.getElementById "app"))
  ;; (dom/attach (dom/element Root) (gdom/getElement "app"))
  (js/console.log "Loaded"))

(defn ^:export refresh
  []
  ;; (dom/detach (gdom/getElement "app"))
  ;; (dom/attach (dom/element Root) (gdom/getElement "app"))
  (js/console.log "Hot reloaded"))
