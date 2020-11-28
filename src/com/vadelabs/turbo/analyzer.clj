(ns com.vadelabs.turbo.analyzer
  (:require
   [cljs.analyzer.api :as ana-api]
   [cljs.analyzer :as ana]))

(def warning-inferred-map-props ::inferred-map-props)

(defn warn [warning-type env extras]
  (ana/warning warning-type env extras))

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
