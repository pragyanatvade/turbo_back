(ns com.vadelabs.turbo
  (:require
   [com.vadelabs.turbo.props :as turbo.props]
   [com.vadelabs.turbo.analyzer :as turbo.analyzer]))

(defmacro $
  [type & args]
  (let [inferred (turbo.analyzer/inferred-type &env type)
        native?  (or (keyword? type)
                     (string? type)
                     (= inferred 'string)
                     (= inferred 'cljs.core/Keyword)
                     (:native (meta type)))
        type     (if (keyword? type)
                   (name type)
                   type)]
    (cond
      (map? (first args)) `^js/React.Element (.createElement
                                               (get-react)
                                               ~type
                                               ~(if native?
                                                  `(turbo.props/native-props ~(first args))
                                                  `(turbo.props/props ~(first args)))
                                               ~@(rest args))
      :else               `^js/React.Element (.createElement
                                               (get-react)
                                               ~type
                                               nil
                                               ~@args))))


(defmacro <>
  "Creates a new react fragment element"
  [& children]
  `^js/React.Element ($ Fragment ~@children))

(defmacro provider
  [{:keys [context value] :as props} & children]
  `^js/React.Element ($ (.-Provider ~context)
                        ~@(when (contains? props :value)
                            `({:value ~value}))
                        ~@children))

(defmacro suspense
  "creates a react suspense boundary."
  [{:keys [fallback]} & children]
  `^js/React.Element ($ Suspense
                        ~@(when fallback
                            `({:fallback ~fallback}))
                        ~@children))

(defn -defui
  [display-name props-bindings body]
  ;; maybe-ref for react/forwardRef support
  `(fn ^js/React.Element ~display-name
     [props# maybe-ref#]
     (let [~props-bindings [(extract-cljs-props props#) maybe-ref#]]
       ~@body)))

(defmacro defui
  [display-name & form-body]
  (let [docstring         (when (string? (first form-body))
                      (first form-body))
        props-bindings    (if (nil? docstring)
                            (first form-body)
                            (second form-body))
        body              (if (nil? docstring)
                            (rest form-body)
                            (rest (rest form-body)))
        component-fn-name display-name]

    `(do
       (def ~(vary-meta
               component-fn-name
               merge
               {:turbo/component? true})
         ~@(when-not (nil? docstring)
             (list docstring))
         (-> ~(-defui component-fn-name props-bindings body)))
       ~display-name)))
