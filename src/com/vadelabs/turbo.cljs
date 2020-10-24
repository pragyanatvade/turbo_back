(ns com.vadelabs.turbo
  (:refer-clojure :exclude [type])
  (:require
   [goog.object :as gobj]
   ["react" :as react]
   [cljs-bean.core :as bean]
   [com.vadelabs.turbo.props :as turbo.props])
  (:require-macros [com.vadelabs.turbo]))

(when (exists? js/Symbol)
  (extend-protocol IPrintWithWriter
    js/Symbol
    (-pr-writer [sym writer _]
      (-write writer (str "\"" (.toString sym) "\"")))))

(def Fragment react/Fragment)

(def Suspense react/Suspense)

(def create-element react/createElement)

(def create-context react/createContext)

(defn ^js/React get-react [] react)

(defn $
  "Create a new react element from a valid react type."
  [type & args]
  (let [?props    (first args)
        ?children (rest args)
        native?   (or (keyword? type)
                      (string? type)
                      (:native (meta type)))
        type'     (if (keyword? type)
                    (name type)
                    type)]
    (if (map? ?props)
      (apply create-element
             type'
             (if native?
               (turbo.props/-native-props ?props)
               (turbo.props/-props ?props))
             ?children)
      (apply create-element
             type'
             nil
             args))))


(comment

  ($ "div" "asdfgh")

  )

(defprotocol IExtractType
  (-type [factory] "Extracts the underlying type from the factory function."))

(defn type
  [factory]
  (-type factory))

(defn factory
  "Creates a factory function for a react component"
  [type]
  (-> (fn factory [& args]
        (apply $ type args))
      (specify! IExtractType
        (-type [_] type))))


(defn cljs-factory
  [type]
  (-> (fn factory [& args]
        (if (map? (first args))
          (let [props (first args)]
            (apply react/createElement
                   type
                   #js {"turbo/props"
                        (dissoc props
                                :key
                                :ref)
                        "key" (get props :key js/undefined)
                        "ref" (get props :ref js/undefined)}
                   (rest args)))
          (apply react/createElement
                 type
                 #js {}
                 args)))
      (specify! IExtractType
        (-type [_] type))))

(defn- assoc-some
  [m k x]
  (if (some? x)
    (assoc m k x)
    m))

(defn- extract-cljs-props
  [o]
  (when (and ^boolean goog/DEBUG (or (map? o) (nil? o)))
    (throw (ex-info "Props received were a map. This probably means you're calling your component as a function." {:props o})))
  (if-let [props (gobj/get o "turbo/props")]
    (assoc-some props :children (gobj/get o "children"))
    (bean/bean o)))

(defn memo
  "Like React.memo, but passes props as CLJS map-likes instead of JS objects."
  ([component] (memo component))
  ([component compare]
   (react/memo
     component
     (fn memo-compare
       [o o']
       (compare
         (extract-cljs-props o)
         (extract-cljs-props o'))))))

(defn register!
  "Registers a component with the React Fresh runtime.
  `type` the component function, and `id` is the unique ID assigned to it
  (e.g. component name) for cache invalidation."
  [type id]
  (when (exists? (.-$$Register$$ js/window))
    (.$$Register$$ js/window type id)))

(defn signature!
  []
  (and (exists? (._$$Signature$$ js/window))
       (.$$Signature$$ js/window)))
