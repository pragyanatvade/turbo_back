(ns com.vadelabs.turbo.components
  (:refer-clojure :exclude [type vec map count])
  (:require
   [goog.object :as gobj]
   ["react" :as react]
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.helpers :as th]
   [cljs-bean.core :as bean])
  (:require-macros [com.vadelabs.turbo.components]))

(def Fragment react/Fragment)
(def Suspense react/Suspense)
(def create-element react/createElement)
(def clone-element react/cloneElement)
(def create-context react/createContext)

(defn ^js/React get-react [] react)

(defn $
  [type & args]
  (let [props    (first args)
        children (rest args)
        native?  (or (keyword? type)
                     (string? type)
                     (:native (meta type)))
        type'    (if (keyword? type)
                   (name type)
                   type)]
    (if (map? props)
      (apply create-element
             type'
             (if native?
               (th/-native-props props)
               (th/-props props))
             children)
      (apply create-element
             type'
             nil
             args))))

(defprotocol IExtractType
  (-type [factory] "Extracts the underlying type from the factory function."))


(defn type
  [f]
  (-type f))


(defn factory
  "Creates a factory function for a React component"
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
                   #js {"turbo$props" (dissoc props :key :ref)
                        "key"         (get props :key js/undefined)
                        "ref"         (get props :ref js/undefined)}
                   (rest args)))
          (apply react/createElement
                 type
                 #js {}
                 args)))
      (specify! IExtractType
        (-type [_] type))))

(defn extract-cljs-props
  [o]
  (when (and ^boolean goog/DEBUG (or (map? o) (nil? o)))
    (throw (ex-info "Props received were a map. This probably means you're calling your component as a function." {:props o})))
  (if-let [props (gobj/get o "turbo$props")]
    (enc/assoc-some props :children (gobj/get o "children"))
    (bean/bean o)))

(defn memo
  ([element]
   (react/memo element))
  ([element compare]
   (react/memo
    element
    (fn memo-compare
      [o o']
      (compare
       (extract-cljs-props o)
       (extract-cljs-props o'))))))


(defn children
  "Given a props object, returns children contained in it (if any).
  Handles cases where props could be either a JS object or a CLJS structure."
  [props]
  (if (or (bean/bean? props) (map? props))
    (:children props)
    ;; assume it's a raw props object
    (gobj/get props "children")))

(defn map
  "Map children that are typically specified as `props.children`.
  `f` is a function of up to 3 args:
  - `child`: the child element
  - `key`: the React key assigned to this element
  - `index`: the numeric index of the element in the child collection starting at 0
  If children is an array it will be traversed and the function will be called
  for each child in the array.
  If children is null or undefined, this function will return null or undefined
  rather than an array."
  [f children]
  (.map react/Children children f))

(defn count
  "Returns the total number of components in children, equal to the number of
  times that a callback passed to map would be invoked."
  [children]
  (.count react/Children children))

(defn only
  "Verifies that children has only one child (a React element) and returns it.
  Otherwise this method throws an error."
  [children]
  (.only react/Children children))

(defn vec
  "Returns the children opaque data structure as a flat vector with keys
  assigned to each child. Useful if you want to manipulate collections of
  children in render, especially if you want to reorder or slice
  (:children props) before passing it down."
  [children]
  (into [] (.toArray react/Children children)))
