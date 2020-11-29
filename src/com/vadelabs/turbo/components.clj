(ns com.vadelabs.turbo.components
  (:refer-clojure :exclude [instance?])
  (:require
   [com.vadelabs.turbo.analyzer :as tana]))

(defmacro $
  "Create a new React element from a valid React type.
  Will try to statically convert props to a JS object.
  To pass in dynamic props, use the special `&` or `:&` key in the props map
  to have the map merged in.
  Simple example:
  ($ my-component
     \"child1\"
     ($ \"span\"
        {:style {:color \"green\"}}
        \"child2\" ))
  Dynamic exmaple:
  (let [dynamic-props {:foo \"bar\"}]
    ($ my-component
       {:static \"prop\"
        & dynamic-props}))
  "
  [type & args]
  (when (and (symbol? (first args))
             (= (tana/inferred-type &env (first args))
                'cljs.core/IMap))
    (tana/warn tana/warning-inferred-map-props
               &env
               {:form       (cons type args)
                :props-form (first args)}))
  (let [inferred (tana/inferred-type &env type)
        native?  (or (keyword? type)
                     (string? type)
                     (= inferred 'string)
                     (= inferred 'cljs.core/Keyword)
                     (:native (meta type)))
        type     (if (keyword? type)
                   (name type)
                   type)]
    (cond
      (map? (first args))
      `^js/React.Element (.createElement
                           (get-react)
                           ~type
                           ~(if native?
                              `(impl.props/native-props ~(first args))
                              `(impl.props/props ~(first args)))
                           ~@(rest args))

      :else `^js/React.Element (.createElement (get-react) ~type nil ~@args))))

(defmacro <>
  "Creates a new React Fragment Element"
  [& children]
  `^js/React.Element ($ Fragment ~@children))

(defn defui*
  [display-name props-bindings body]
  (let [ret (gensym "return_value")]
    `(fn ^js/React.Element ~display-name
       [props#]
       (let [~props-bindings
             [(extract-cljs-props props#)]]
         ~@body))))

(defmacro defui
  [display-name & form-body]
  (let [docstring       (when (string? (first form-body))
                          (first form-body))
        props-bindings  (if (nil? docstring)
                          (first form-body)
                          (second (form-body)))
        body            (if (nil? docstring)
                          (rest form-body)
                          (rest (rest form-body)))
        wrapped-name    (symbol (str display-name "-turbo-render"))
        opts-map?       (map? (first body))
        opts            (if opts-map?
                          (first body)
                          {})
        sig-sym         (gensym "sig")
        fqname          (str *ns* "/" display-name)
        body            (cond-> body
                          opts-map? (rest))
        element-fn-name display-name]
    `(do
       (def ~(vary-meta
               element-fn-name
               assoc
               :turbo$element? true)
         ~@(when-not (nil? docstring)
             (list docstring))
         (-> ~(defui* element-fn-name props-bindings body)
             (cond->
                 (true? ^boolean goog/DEBUG) (doto (goog.object/set "displayName" ~fqname))))))))

