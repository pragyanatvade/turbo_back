(ns com.vadelabs.turbo.styled.parsers
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

;; DEFAULTS ;;
(def ^:private DEFAULTS
  {:space     [0 4 8 16 32 64 128 256 512]
   :font-size [12 14 16 20 24 32 48 64 72]})

;; BACKGROUND ;;
(def ^:private background-config
  {:background          true
   :background-image    true
   :background-size     true
   :background-position true
   :background-repeat   true})
(def ^:private background-aliases
  (assoc
    background-config
    :bg-image (:background background-config)
    :bg-size (:background-size background-config)
    :bg-position (:backgorund-position background-config)
    :bg-repeat (:background-repeat background-config)))
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
                                :scale    :radii}
   :border-top                 {:property :border-top
                                :scale    :borders}
   :border-top-left-radius     {:property :border-top-left-radius
                                :scale    :radii}
   :border-top-right-radius    {:property :border-top-right-radius
                                :scale    :radii}
   :border-right               {:property :border-right
                                :scale    :borders}
   :border-bottom              {:property :border-bottom
                                :scale    :borders}
   :border-bottom-left-radius  {:property :border-bottom-left-radius
                                :scale    :radii}
   :border-bottom-right-radius {:property :border-bottom-right-radius
                                :scale    :radii}
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
                                :scale    :border-styles}})
(def ^:private border-aliases
  border-config)
(def border (system border-aliases))

;; COLOR ;;
(def ^:private color-config
  {:color            {:property :color
                      :scale    :colors}
   :background-color {:property :background-color
                      :scale    :colors}
   :opacity          true})
(def ^:private color-aliases
  (assoc color-config
         :bg (:background-color color-config)))
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
   :flex-basis      true
   :justify-self    true
   :align-self      true
   :order           true})
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
   :grid-area             true})
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
   :min-width      {:property :min-width
                    :scale    :sizes}
   :min-height     {:property :min-height
                    :scale    :sizes}
   :max-width      {:property :max-width
                    :scale    :sizes}
   :max-height     {:property :max-height
                    :scale    :sizes}
   :size           {:properties [:width :height]
                    :scale      :sizes}
   :overflow       true
   :overflow-x     true
   :overflow-y     true
   :display        true
   :vertical-align true})
(def ^:private layout-aliases
  layout-config)
(def layout (system layout-aliases))

;; POSITION ;;
(def ^:private position-config
  {:position true
   :z-index  {:property :z-index
              :scale    :z-indices}
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
  shadow-config)
(def shadow (system shadow-aliases))

;; MARGIN ;;
(defn- abs
  [n]
  (max n (- n)))
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
(def ^:private margin-config
  {:margin        {:property      :margin
                   :scale         :space
                   :transform     get-margin
                   :default-scale (:space DEFAULTS)}
   :margin-top    {:property      :margin-top
                   :scale         :space
                   :transform     get-margin
                   :default-scale (:space DEFAULTS)}
   :margin-right  {:property      :margin-right
                   :scale         :space
                   :transform     get-margin
                   :default-scale (:space DEFAULTS)}
   :margin-bottom {:property      :margin-bottom
                   :scale         :space
                   :transform     get-margin
                   :default-scale (:space DEFAULTS)}
   :margin-left   {:property      :margin-left
                   :scale         :space
                   :transform     get-margin
                   :default-scale (:space DEFAULTS)}
   :margin-x      {:properties    [:margin-left :margin-right]
                   :scale         :space
                   :transform     get-margin
                   :default-scale (:space DEFAULTS)}
   :margin-y      {:properties    [:margin-top :margin-bottom]
                   :scale         :space
                   :transform     get-margin
                   :default-scale (:space DEFAULTS)}})
(def ^:private margin-aliases
  (assoc margin-config
         :m (:margin margin-config)
         :mt (:margin-top margin-config)
         :mr (:margin-right margin-config)
         :mb (:margin-bottom margin-config)
         :ml (:margin-left margin-config)
         :mx (:margin-x margin-config)
         :my (:margin-y margin-config)))
(def margin (system margin-aliases))

;; PADDING ;;
(def ^:private padding-config
  {:padding        {:property      :padding
                    :scale         :space
                    :default-scale (:space DEFAULTS)}
   :padding-top    {:property      :padding-top
                    :scale         :space
                    :default-scale (:space DEFAULTS)}
   :padding-right  {:property      :padding-right
                    :scale         :space
                    :default-scale (:space DEFAULTS)}
   :padding-bottom {:property      :padding-right
                    :scale         :space
                    :default-scale (:space DEFAULTS)}
   :padding-left   {:property      :padding-left
                    :scale         :space
                    :default-scale (:space DEFAULTS)}
   :padding-x      {:properties    [:padding-left :padding-right]
                    :scale         :space
                    :default-scale (:space DEFAULTS)}
   :padding-y      {:properties    [:padding-top :padding-bottom]
                    :scale         :space
                    :default-scale (:space DEFAULTS)}})
(def ^:private padding-aliases
  (assoc padding-config
         :p (:padding padding-config)
         :pt (:padding-top padding-config)
         :pr (:padding-right padding-config)
         :pb (:padding-bottom padding-config)
         :pl (:padding-left padding-config)
         :px (:padding-x padding-config)
         :py (:padding-y padding-config)))
(def padding (system padding-aliases))

;; SPACE ;;
(def space (system (merge margin-aliases padding-aliases)))

;; TYPOGRAPHY ;;
(def ^:private typography-config
  {:font-family    {:property :font-family
                    :scale    :fonts}
   :font-size      {:property      :font-size
                    :scale         :font-sizes
                    :default-scale (:font-size DEFAULTS)}
   :font-weight    {:property :font-weight
                    :scale    :font-weights}
   :line-height    {:property :line-height
                    :scale    :line-heights}
   :letter-spacing {:property :letter-spacing
                    :scale    :letter-spacings}
   :text-align     true
   :font-style     true})
(def ^:private typography-aliases
  typography-config)
(def typography (system typography-aliases))
