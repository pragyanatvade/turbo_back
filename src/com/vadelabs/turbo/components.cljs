(ns com.vadelabs.turbo.components
  (:refer-clojure :exclude [type])
  (:require
   [goog.object :as gobj]
   ["react" :as react]
   [taoensso.encore :as enc]
   [com.vadelabs.turbo.helpers :as th]
   [cljs-bean.core :as bean])
  (:require-macros [com.vadelabs.turbo.components]))

(def Fragment react/Frament)
(def Suspense react/Suspense)
(def create-element react/createElement)
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
