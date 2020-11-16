(ns com.vadelabs.turbo.styled.layout
  (:require [com.vadelabs.turbo.styled.system :refer [system]]))

;; (defn- get-value
;;   [n scale]
;;   (let [k (if (vector? n) n [n])
;;         k (into [] (map (fn [item]
;;                           (if (string? item)
;;                             (keyword item)
;;                             item)) k))]
;;     (get-in scale k n)))

(defn- get-width
  [n scale]
  (let [default (if (or (not (number? n)) (> n 1))
                  n
                  (str (* n 100) "%"))
        k       (if (vector? n) n [n])]
    (println scale n k default)
    (get-in scale k default)))

(def ^:private config
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

(def parser (system config))

(comment

  (def style-1 (parser {:width      [1 0.5 0.25]
                        :min-height 32
                        :max-width  768}))

  style-1
  (meta style-1)


  (def style-2 (parser {:theme  {:sizes [24 48 96]}
                        :width  0
                        :height 0}))

  style-2
  (meta style-2)

  )

