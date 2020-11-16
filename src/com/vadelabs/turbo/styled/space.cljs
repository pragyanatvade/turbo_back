(ns com.vadelabs.turbo.styled.space
  (:require [com.vadelabs.turbo.styled.system :refer [system]]
            [taoensso.encore :as enc]))

(def ^:private DEFAULTS
  {:space [0 4 8 16 32 64 128 256 512]})

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

(def parser (system (merge margin-aliases padding-aliases)))

(comment


  (def style-1 (parser {:m "4px"}))

  style-1

  (def style-2 (parser {:m 0}))

  style-2

  (def style-3 (parser {:m -2}))

  style-3

  (def style-4 (parser {:m "-16em"}))

  style-4

  (def style-5 (parser {:theme {:space [0 4 8]}
                        :m     -2}))
  style-5

  (def style-6 (parser {:theme {:space [0 "1em" "2em"]}
                        :m     2}))
  style-6

  (def style-7 (parser {:m [0 2 3]}))

  style-7
  (meta style-7)

  (def style-8 (parser {:px 2}))

  style-8

  (def style-9 (parser {:theme   {:space [0 "1em"]}
                        :padding 1}))
  style-9

  (def style-10 (parser {:theme  {:space {:sm 1}}
                         :margin "sm"}))

  style-10

  (def style-11 (parser {:pl 0}))
  style-11

  (def style-12 (parser {:pl 1
                         :px 2}))
  style-12


  ;; FIXME
  (def style-13 (parser {:pb 1
                         :py 2}))
  style-13

  (def style-14 (parser {:mr 1
                         :mx 2}))
  style-14

  (def style-15 (parser {:mt 1
                         :my 2}))

  style-15

  (def style-16 (parser {:m      1
                         :margin 2}))

  style-16

  (def style-17 (parser {:mt 12}))
  style-17

  (def style-18 (parser {:m  4
                         :mx 3
                         :mr 2
                         :p  4
                         :py 3
                         :pt 2}))
  style-18

  (def style-19 (parser {:mx 3
                         :ml 1
                         :mr 2
                         :px 3
                         :pl 1
                         :pr 2}))
  style-19

  (def style-20 (parser {:m [0 1 2]}))

  style-20
  (meta style-20)

  ;; FIXME - add support for non-array breakpoints
  )
