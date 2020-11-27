(ns com.vadelabs.turbo.styled.parser
  (:refer-clojure :exclude [list])
  (:require
   [com.vadelabs.turbo.styled.system :refer [system]]
   [taoensso.encore :as enc]))


;; DEFAULTS ;;
(def ^:private DEFAULTS
  {:space       [0 4 8 16 32 64 128 256 512]
   :font-size   [12 14 16 20 24 32 48 64 72]
   :breakpoints ["40em" "52em" "64em"]})

;; BACKGROUND ;;
(def ^:private background-config
  {:background            {:property :background
                           :scale    :colors}
   :background-color      {:property :background-color
                           :scale    :colors}
   :background-image      true
   :background-size       true
   :background-position   true
   :background-repeat     true
   :background-attachment true
   :background-blend-mode true})
(def ^:private background-aliases
  (assoc background-config
         :bg                    (:background background-config)
         :bg-color              (:background-color background-config)
         :bg-image              (:background-image background-config)
         :bg-img                (:background-image background-config)
         :bg-blend-mode         (:background-blend-mode background-config)
         :bg-size               (:background-size background-config)
         :bg-position           (:background-position background-config)
         :bg-pos                (:background-position background-config)
         :bg-repeat             (:background-repeat background-config)
         :bg-attachment         (:background-attachment background-config)))
(def background (system background-aliases))

;; BORDER ;;
(def ^:private border-config
  {:border                     {:property :border
                                :scale    :borders}
   :border-width               {:property :border-width
                                :scale    :border-widths}
   :border-style               {:property :border-style
                                :scale    :border-styles}
   :border-color               {:property :border-color
                                :scale    :border-colors}
   :border-radius              {:property :border-radius
                                :scale    :radius}
   :border-top                 {:property :border-top
                                :scale    :borders}
   :border-top-left-radius     {:property :border-top-left-radius
                                :scale    :radius}
   :border-top-right-radius    {:property :border-top-right-radius
                                :scale    :radius}
   :border-right               {:property :border-right
                                :scale    :borders}
   :border-bottom              {:property :border-bottom
                                :scale    :borders}
   :border-bottom-left-radius  {:property :border-bottom-left-radius
                                :scale    :radius}
   :border-bottom-right-radius {:property :border-bottom-right-radius
                                :scale    :radius}
   :border-left                {:property :border-left
                                :scale    :borders}
   :border-x                   {:properties [:border-left :border-right]
                                :scale      :borders}
   :border-y                   {:properties [:border-top :border-bottom]
                                :scale      :borders}
   :border-top-width           {:property :border-top-width
                                :scale    :border-widths}
   :border-top-color           {:property :border-top-color
                                :scale    :colors}
   :border-top-style           {:property :border-top-style
                                :scale    :border-styles}
   :border-bottom-width        {:property :border-bottom-width
                                :scale    :border-widths}
   :border-bottom-color        {:property :border-bottom-color
                                :scale    :colors}
   :border-bottom-style        {:property :border-bottom-style
                                :scale    :border-styles}
   :border-left-width          {:property :border-left-width
                                :scale    :border-widths}
   :border-left-color          {:property :border-left-color
                                :scale    :colors}
   :border-left-style          {:property :border-left-style
                                :scale    :border-styles}
   :border-right-width         {:property :border-right-width
                                :scale    :border-widths}
   :border-right-color         {:property :border-right-color
                                :scale    :colors}
   :border-right-style         {:property :border-right-style
                                :scale    :border-styles}
   :border-top-radius          {:properties [:border-top-left-radius :border-top-right-radius]
                                :scale      :radius}
   :border-bottom-radius       {:properties [:border-bottom-left-radius :border-bottom-right-radius]
                                :scale      :radius}
   :border-left-radius         {:properties [:border-top-left-radius :border-bottom-left-radius]
                                :scale      :radius}
   :border-right-radius        {:properties [:border-top-right-radius :border-bottom-right-radius]
                                :scale      :radius}})
(def ^:private border-aliases
  (assoc border-config
         :rounded (:border-radius border-config)
         :rounded-top (:border-top-radius border-config)
         :rounded-left (:border-left-radius border-config)
         :rounded-right (:border-right-radius border-config)
         :rouded-top-right (:border-top-right-radius border-config)
         :rounded-top-left (:border-top-left-radius border-config)
         :rounded-bottom-left (:border-bottom-left-radius border-config)
         :rounded-bottom-right (:border-bottom-right-radius border-config)))
(def border (system border-aliases))

;; COLOR ;;
(def ^:private color-config
  {:color      {:property :color
                :scale    :colors}
   :text-color {:property :color
                :scale    :colors}
   :opacity    true
   :fill       {:property :fill
                :scale    :colors}
   :stroke     {:property :stroke
                :scale    :colors}})
(def ^:private color-aliases
  color-config)
(def color (system color-aliases))

;; FLEXBOX ;;
(def ^:private flexbox-config
  {:align-items     true
   :align-content   true
   :justify-items   true
   :justify-content true
   :flex-wrap       true
   :flex-direction  true
   :flex            true
   :flex-grow       true
   :flex-shrink     true
   :flex-basis      {:property :flex-basis
                     :scale    :sizes}
   :justify-self    true
   :align-self      true
   :order           true
   :flex-dir        {:property :flex-direction}})
(def ^:private flexbox-aliases
  flexbox-config)
(def flexbox (system flexbox-aliases))

;; GRID ;;
(def ^:private grid-config
  {:grid-gap              {:property      :grid-gap
                           :scale         :space
                           :default-scale (:space DEFAULTS)}
   :grid-column-gap       {:property      :grid-column-gap
                           :scale         :space
                           :default-scale (:space DEFAULTS)}
   :grid-row-gap          {:property      :grid-row-gap
                           :scale         :space
                           :default-scale (:space DEFAULTS)}
   :grid-column           true
   :grid-row              true
   :grid-auto-flow        true
   :grid-auto-columns     true
   :grid-auto-rows        true
   :grid-template-columns true
   :grid-template-rows    true
   :grid-template-areas   true
   :grid-area             true
   :place-items           true})
(def ^:private grid-aliases
  grid-config)
(def grid (system grid-aliases))

;; LAYOUT ;;
(defn- get-width
  [n scale]
  (let [default (if (or (not (number? n)) (> n 1))
                  n
                  (str (* n 100) "%"))
        k       (if (vector? n) n [n])]
    (get-in scale k default)))
(def ^:private layout-config
  {:width          {:property  :width
                    :scale     :sizes
                    :transform get-width}
   :height         {:property :height
                    :scale    :sizes}
   :box-size       {:properties [:width :height]
                    :scale      :sizes}
   :min-width      {:property :min-width
                    :scale    :sizes}
   :min-height     {:property :min-height
                    :scale    :sizes}
   :max-width      {:property :max-width
                    :scale    :sizes}
   :max-height     {:property :max-height
                    :scale    :sizes}
   :d              {:property :display}
   :overflow       true
   :overflow-x     true
   :overflow-y     true
   :display        true
   :vertical-align true
   :box-sizing     true})
(def ^:private layout-aliases
  (assoc layout-config
         :w (:width layout-config)
         :h (:height layout-config)
         :min-w          (:min-width layout-config)
         :min-h          (:min-height layout-config)
         :max-w          (:max-width layout-config)
         :max-h          (:max-height layout-config)
         ))
(def layout (system layout-aliases))

;; LIST ;;
(def ^:private list-config
  {:list-style-type     true
   :list-style-position true
   :list-style-pos      {:property :list-style-position}
   :list-style-image    true
   :list-style-img      {:property :list-style-image}})
(def ^:private list-aliases
  list-config)
(def list (system list-aliases))

;; OTHERS ;;
(def ^:private others-config
  {:animation       true
   :appearance      true
   :visibility      true
   :user-select     true
   :pointer-events  true
   :cursor          true
   :resize          true
   :object-fit      true
   :object-position true
   :float           true
   :will-change     true
   :content         true})
(def ^:private others-aliases
  others-config)
(def others (system others-aliases))

;; OUTLINE ;;
(def ^:private outline-config
  {:outline        true
   :outline-offset true
   :outline-color  {:property :outline-color
                    :scale    :colors}})
(def ^:private outline-aliases
  outline-config)
(def outline (system outline-aliases))

;; POSITION ;;
(def ^:private position-config
  {:position true
   :pos      {:property :position}
   :z-index  {:property :z-index
              :scale    :z-indices}
   :inset    {:properties [:left :top :bottom :right]
              :scale      :space}
   :inset-x  {:properties [:left :right]
              :scale      :space}
   :inset-y  {:properties [:top :bottom]
              :scale      :space}
   :top      {:property      :top
              :scale         :space
              :default-scale (:space DEFAULTS)}
   :right    {:property      :right
              :scale         :space
              :default-scale (:space DEFAULTS)}
   :bottom   {:property      :bottom
              :scale         :space
              :default-scale (:space DEFAULTS)}
   :left     {:property      :left
              :scale         :space
              :default-scale (:space DEFAULTS)}})
(def ^:private position-aliases
  position-config)
(def position (system position-aliases))

;; SHADOW ;;
(def ^:private shadow-config
  {:box-shadow  {:property :box-shadow
                 :scale    :shadows}
   :text-shadow {:property :text-shadow
                 :scale    :shadows}})
(def ^:private shadow-aliases
  (assoc shadow-config
         :shadow (:box-shadow shadow-config)))
(def shadow (system shadow-aliases))

;; SPACE ;;
(defn- abs [n] (max n (- n)))
(defn- get-margin
  [n scale]
  (if (not (number? n))
    (get scale (keyword n) n)
    (let [negative? (< n 0)
          ab        (abs n)
          val       (get scale ab ab)]
      (if (not (number? val))
        (if negative? (str "-" val) val)
        (* (if negative? -1 1) val)))))
(def ^:private space-config
  {:margin         {:property      :margin
                    :scale         :space
                    :transform     get-margin
                    :default-scale (:space DEFAULTS)}
   :margin-top     {:property      :margin-top
                    :scale         :space
                    :transform     get-margin
                    :default-scale (:space DEFAULTS)}
   :margin-right   {:property      :margin-right
                    :scale         :space
                    :transform     get-margin
                    :default-scale (:space DEFAULTS)}
   :margin-bottom  {:property      :margin-bottom
                    :scale         :space
                    :transform     get-margin
                    :default-scale (:space DEFAULTS)}
   :margin-left    {:property      :margin-left
                    :scale         :space
                    :transform     get-margin
                    :default-scale (:space DEFAULTS)}
   :margin-x       {:properties    [:margin-left :margin-right]
                    :scale         :space
                    :transform     get-margin
                    :default-scale (:space DEFAULTS)}
   :margin-y       {:properties    [:margin-top :margin-bottom]
                    :scale         :space
                    :transform     get-margin
                    :default-scale (:space DEFAULTS)}
   :padding        {:property :padding
                    :scale    :space}
   :padding-top    {:property :padding-top
                    :scale    :space}
   :padding-right  {:property :padding-right
                    :scale    :space}
   :padding-bottom {:property :padding-bottom
                    :scale    :space}
   :padding-left   {:property :padding-left
                    :scale    :space}
   :padding-x      {:properties [:padding-left :padding-right]
                    :scale      :space}
   :padding-y      {:properties [:padding-top :padding-bottom]
                    :scale      :space}})
(def ^:private space-aliases
  (assoc space-config
         :m             (:margin space-config)
         :mt            (:margin-top space-config)
         :mr            (:margin-right space-config)
         :mb            (:margin-bottom space-config)
         :ml            (:margin-left space-config)
         :mx            (:margin-x space-config)
         :my            (:margin-y space-config)
         :p              (:padding space-config)
         :pt             (:padding-top space-config)
         :pr             (:padding-right space-config)
         :pb             (:padding-bottom space-config)
         :pl             (:padding-left space-config)
         :px             (:padding-x space-config)
         :py             (:padding-y space-config)))
(def space (system space-aliases))

;; TRANSFORM ;;
(def ^:private transform-config
  {:transform        true
   :transform-origin true})
(def ^:private transform-aliases
  transform-config)
(def transform (system transform-aliases))

;; TRANSITION ;;
(def ^:private transition-config
  {:transition                 true
   :transition-duration        {:property :transition-duration
                                :scale    [:transition :duration]}
   :transition-property        {:property :transition-property
                                :scale    [:transition :property]}
   :transition-timing-function {:property :transition-timing-function
                                :scale    [:transition :easing]}})
(def ^:private transition-aliases
  transition-config)
(def transition (system transition-aliases))

;; TYPOGRAPHY ;;
(def ^:private typography-config
  {:font-family     {:property :font-family
                     :scale    :fonts}
   :font-size       {:property :font-size
                     :scale    :font-sizes}
   :font-weight     {:property :font-weight
                     :scale    :font-weights}
   :line-height     {:property :line-height
                     :scale    :line-heights}
   :letter-spacing  {:property :letter-spacing
                     :scale    :letter-spacings}
   :text-align      true
   :font-style      true
   :word-break      true
   :overflow-wrap   true
   :text-overflow   true
   :text-transition true
   :text-transform  true
   :white-space     true
   :text-decoration true
   :text-decor      {:property :text-decoration}})
(def ^:private typography-aliases
  typography-config)
(def typography (system typography-aliases))

(def config (enc/merge
              background-aliases
              border-aliases
              color-aliases
              flexbox-aliases
              layout-aliases
              outline-aliases
              grid-aliases
              others-aliases
              position-aliases
              shadow-aliases
              space-aliases
              typography-aliases
              transform-aliases
              list-aliases
              transition-aliases))

(def parse (system config))

(def pseudo-keys #{:hover :before})
(def style-keys (set (keys config)))
