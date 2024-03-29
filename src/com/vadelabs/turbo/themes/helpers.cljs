(ns com.vadelabs.turbo.themes.helpers
  (:require [clojure.string :as str]
            [cljs.reader :refer [read-string]]
            [garden.color :as color]))

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

(defn- gen-path
  [path]
  (let [p (if (string? path)
            (str/split path ".")
            [path])]
    (into [:colors] (map (fn [item]
                           (if (string? item)
                             (keyword item)
                             item))
                         p))))

(defn get-color
  ([theme color]
   (get-color theme color nil))
  ([theme color not-found]
   (let [hex (get-in theme (gen-path color) color)]
     (if (valid-hex? hex)
       hex
       not-found))))

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

(defn transparentize
  [color opacity]
  (fn [theme]
    (let [raw (get-color theme color)]
      (color/as-hex (color/transparentize raw opacity)))))

(defn mode
  [light dark]
  (fn [{:keys [color-mode]}]
    (if (= :dark (keyword color-mode))
      dark
      light)))

(defn- random-from-list
  [lst]
  (let [idx (rand-int (count lst))]
    (get lst idx)))

(defn- random-color-from-list
  [string lst]
  (let [str-hash (hash string)
        cnt (count lst)
        idx (mod (+ (mod str-hash cnt) cnt) cnt)]
    (get lst idx)))

;; FIXME
(defn- random-color-from-string
  [string]
  (str "#" (.toString (rand-int 16rFFFFFF) 16)))


(defn random-color
  [opts]
  (let [{:keys [string colors]} opts
        fallback (str "#" (.toString (rand-int 16rFFFFFF) 16))]
    (cond
      (and string colors) (random-color-from-list string colors)
      (and string (not colors)) (random-color-from-string string)
      (and (not string) colors) (random-from-list colors)
      :else fallback)))

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
