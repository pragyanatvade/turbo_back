(ns com.vadelabs.turbo.components
  (:refer-clojure :exclude [instance?])
  (:require
   [com.vadelabs.turbo.analyzer :as tana]))

(defmacro $
  [type & args]
  (println "TYPE" type args (symbol? (first args)) (tana/inferred-type &env (first args))
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
                              `(com.vadelabs.turbo.helpers/native-props ~(first args))
                              `(com.vadelabs.turbo.helpers/props ~(first args)))
                           ~@(rest args))

      :else `^js/React.Element (.createElement (get-react) ~type nil ~@args))))

(defmacro <>
  "Creates a new React Fragment Element"
  [& children]
  `^js/React.Element ($ Fragment ~@children))

(defmacro provider
  "Creates a Provider for a React Context value.
  Example:
    (def my-context (react/createContext))
    (provider {:context my-context :value my-value} child1 child2 ...childN)"
  [{:keys [context value] :as props} & children]
  `^js/React.Element ($ (.-Provider ~context)
                        ;; use contains to guard against `nil`
                        ~@(when (contains? props :value)
                            `({:value ~value}))
                        ~@children))

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
  (let [docstring         (when (string? (first form-body))
                            (first form-body))
        props-bindings    (if (nil? docstring)
                            (first form-body)
                            (second (form-body)))
        body              (if (nil? docstring)
                            (rest form-body)
                            (rest (rest form-body)))
        wrapped-name      (symbol (str display-name "-turbo-render"))
        opts-map?         (map? (first body))
        opts              (if opts-map?
                            (first body)
                            {})
        sig-sym           (gensym "sig")
        fqname            (str *ns* "/" display-name)
        body              (cond-> body
                            opts-map? (rest))
        ;; component-fn-name (with-meta (symbol (str display-name "-render-type"))
        ;;                     {:private true})
        component-fn-name display-name
        ]
    `(do
       (def ~(vary-meta
               component-fn-name
               assoc
               :turbo$component? true)
         ~@(when-not (nil? docstring)
             (list docstring))
         (-> ~(defui* component-fn-name props-bindings body)
             (cond->
                 (true? ^boolean goog/DEBUG) (doto (goog.object/set "displayName" ~fqname)))))
       ;; (def ~display-name
       ;;   (cljs-factory ~(symbol (str display-name "-render-type"))))
       )))

