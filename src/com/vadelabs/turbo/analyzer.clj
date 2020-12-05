(ns com.vadelabs.turbo.analyzer
  (:require
   [clojure.walk]
   [cljs.analyzer.api :as ana-api]
   [cljs.analyzer :as ana]))

(def warning-simple-body ::simple-body)
(def warning-inferred-map-props ::inferred-map-props)

(defn warn [warning-type env extras]
  (ana/warning warning-type env extras))

(defmethod ana/error-message warning-simple-body
  [_ {:keys [form]}]
  (format "Got a single symbol %s as a body, expected an expression. Maybe you meant (%s)?"
          (first form) (first form)))

(defmethod ana/error-message warning-inferred-map-props
  [_ {:keys [form props-form]}]
  (format "The inferred type of %s is a map. Did you mean to pass it in as props?
Example: ($ $s $s ...)"
          props-form
          (first form)
          `{& props-form}))


(defn inferred-type
  [env x]
  (cljs.analyzer/infer-tag env (ana-api/no-warn (ana-api/analyze env x))))

(def resolve-var ana/resolve-var)

(defn resolve-local-vars
  "Returns a set of symbols found in `body` that also exist in `env`."
  [env body]
  (let [sym-list (atom #{})]
    (clojure.walk/postwalk
      (fn w [x]
        (if (symbol? x)
          (do (swap! sym-list conj x)
              x)
          x))
      body)

    (->> @sym-list
         (map (:locals env))
         (filter (comp not nil?))
         (map :name)
         vec)))
