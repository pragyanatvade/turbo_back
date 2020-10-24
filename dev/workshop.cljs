(ns workshop
  (:require
   [com.vadelabs.turbo :refer [$ defui]]
   [com.vadelabs.turbo.dom :as d]
   ["react-dom" :as rdom])
  (:require-macros [com.vadelabs.turbo]))


(defui app
  []
  (d/h1 "Hello World!"))

;; (comment

;; (macroexpand-1 '(defui app
;;                   []))

;; (macroexpand-1 '($ "h1" {:hello "hello"} "Hello World"))
;; (symbol? 'hello)
;; )

(rdom/render ($ app) (js/document.getElementById "app"))
