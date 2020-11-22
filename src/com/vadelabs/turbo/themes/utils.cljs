(ns com.vadelabs.turbo.themes.utils
  (:require [clojure.string :as str]
            [cljs.reader :refer [read-string]]))

(defn create-breakpoints
  [config]
  (let [entries (sort (fn [a b]
                        (let [a (js/parseInt (get a 1))
                              b (js/parseInt (get b 1))]
                          (if (> a b) 1 -1)))
                      (seq config))]
    (into [] (map second entries))))

(defn valid-hex?
  [hex]
  (let [regex #"#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})"]
    (boolean (re-matches regex hex))))

(defn hex->rgb
  [hex]
  (let [colors (rest (str/split hex #""))
        red    (->> colors (drop 1) (take 2))
        green  (->> colors (drop 3) (take 2))
        blue   (->> colors (drop 5) (take 2))
        rgb    (into [] (map (fn [color]
                               (-> (conj color "0x")
                                   (str/join)
                                   (read-string)))
                             [red green blue]))]
    rgb))

(defn get-brightness
  [color]
  (let [rgb (hex->rgb color)]
    (/ (+ (* (rgb 0) 299)
          (* (rgb 1) 587)
          (* (rgb 2) 114))
       1000)))

(defn get-color
  ([theme color]
   (get-color theme color nil))
  ([theme color fallback]
   (let [hex (get-in theme [:colors (keyword color)] color)]
     (if (valid-hex? hex)
       hex
       fallback))))

(defn dark?
  ([color]
   (< (get-brightness color) 128))
  ([theme color]
   (let [color (get-color theme color)]
     (dark? color))))

(defn light?
  ([color]
   (not (dark? color)))
  ([theme color]
   (let [color (get-color theme color)]
     (light? color))))

(defn tone
  [color]
  (fn [theme]
    (let [hex (get-color theme color)]
      (if (dark? hex) :dark :light))))

(defn orient
  [options]
  (let [{orientation :orientation
         vertical    :vertical
         horizontal  :horizontal} options]
    (if (not orientation)
      {}
      (if (= (keyword orientation) :vertical)
        vertical
        horizontal))))


(comment

  (light? "#ffffff")

  )

;; (defn hex->rgba
;;   [hex alpha]
;;   (let [colors  (rest (str/split hex #""))
;;         red     (->> colors (drop 1) (take 2))
;;         green   (->> colors (drop 3) (take 2))
;;         blue    (->> colors (drop 5) (take 2))
;;         partial (reduce (fn [acc color]
;;                           (str acc
;;                                (-> (conj color "0x")
;;                                    (str/join)
;;                                    (read-string))
;;                                ","))
;;                         ""
;;                         [red green blue])]
;;     (str "rgba(" partial alpha ")")))



;; (defn get-color
;;   [theme color fallback]
;;   (let [hex (get-in theme [:colors (keyword color)] color)]
;;     ))
