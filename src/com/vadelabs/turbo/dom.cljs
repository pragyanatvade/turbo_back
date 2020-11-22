(ns com.vadelabs.turbo.dom
  (:refer-clojure :exclude [ref deref])
  (:require-macros [com.vadelabs.turbo.dom :refer [fnui]])
  (:require
   ["react" :as react]
   ["react-dom" :as rdom]
   ["react/cjs/react-jsx-runtime.production.min" :as jsx-runtime]
   [goog.functions :as gf]
   [com.vadelabs.turbo.dom.helpers :as du]))

(def Component react/Component)
(def Fragment react/Fragment)
(def Profiler react/Profiler)

(defn create-element
  ([type props] (create-element type props nil))
  ([type props children]
   (let [props (js/Object.assign #js {} props (when ^boolean children #js {:children children}))]
     (jsx-runtime/jsx type props (unchecked-get props "key")))))


(extend-type cljs.core.UUID
  INamed
  (-name [this] (str this))
  (-namespace [_] ""))

(defn attach
  "Attach element to the DOM tree. It is idempotent. Subsequent attach calls
  will just update the element."
  [element node]
  (rdom/render element node)
  nil)

(defn detach
  "Removes component from the DOM tree"
  [node]
  (rdom/unmountComponentAtNode node))

(defn portal
  "Render `element` in a DOM `node` that is outside of current DOM hierarchy."
  [element node]
  (rdom/createPortal element node))

(defn create-ref
  []
  (react/createRef))

(defn ref-val
  "given the state and ref handle, returns React component."
  [ref]
  (unchecked-get ref "current"))

(defn set-ref-val!
  [ref val]
  (unchecked-set ref "current" val)
  val)

(defn create-context
  ([]
   (react/createContext nil))
  ([value]
   (react/createContext value)))

(defn provider
  [ctx]
  (unchecked-get ctx "Provider"))

(defn useRef
  [initial]
  (react/useRef initial))

(defn useState
  [initial]
  (react/useState initial))

(defn useEffect
  [f deps]
  (react/useEffect f deps))

(defn useMemo
  [f deps]
  (react/useMemo f deps))

(defn useCallback
  [f deps]
  (react/useCallback f deps))

(defn useLayoutEffect
  [f deps]
  (react/useLayoutEffec f deps))

(defn useContext
  [ctx]
  (react/useContext ctx))


(defn- to-str
  [o]
  (if (uuid? o)
    (str o)
    (if (instance? cljs.core/INamed o)
      (name o)
      o)))

(defn deps
  ([] #js [])
  ([a] #js [(to-str a)])
  ([a b] #js [(to-str a) (to-str b)])
  ([a b c] #js [(to-str a) (to-str b) (to-str c)])
  ([a b c d] #js [(to-str a) (to-str b) (to-str c) (to-str d)])
  ([a b c d e] #js [(to-str a) (to-str b) (to-str c) (to-str d) (to-str e)])
  ([a b c d e f] #js [(to-str a) (to-str b) (to-str c) (to-str d) (to-str e) (to-str f)])
  ([a b c d e f g] #js [(to-str a) (to-str b) (to-str c) (to-str d) (to-str e) (to-str f) (to-str g)])
  ([a b c d e f g h] #js [(to-str a) (to-str b) (to-str c) (to-str d) (to-str e) (to-str f) (to-str g) (to-str h)])
  ([a b c d e f g h & rest] (into-array (map to-str (into [a b c d e f g h] rest)))))

(def use-ref useRef)
(def use-context useContext)

(defn use-state
  [initial]
  (let [tmp       (useState initial)
        state     (aget tmp 0)
        set-state (aget tmp 1)]
    (reify
      cljs.core/IReset
      (-reset! [_ new-value]
        (set-state new-value))

      cljs.core/ISwap
      (-swap! [self f]
        (set-state f))
      (-swap! [self f x]
        (set-state #(f % x)))
      (-swap! [self f x y]
        (set-state #(f % x y)))
      (-swap! [self f x y more]
        (set-state #(apply f % x y more)))

      cljs.core/IDeref
      (-deref [self] state))))

(defn use-var
  "A custom hook to define mutable variables that persist on renders
  (based on useRef hook)"
  [initial]
  (let [ref (useRef initial)]
    (useMemo
      #(reify
         cljs.core/IReset
         (-reset! [_ new-value]
           (set-ref-val! ref new-value))

         cljs.core/ISwap
         (-swap! [self f]
           (set-ref-val! ref (f (ref-val ref))))
         (-swap! [self f x]
           (set-ref-val! ref (f (ref-val ref) x)))
         (-swap! [self f x y]
           (set-ref-val! ref (f (ref-val ref) x y)))
         (-swap! [self f x y more]
           (set-ref-val! ref (apply f (ref-val ref) x y more)))

         cljs.core/IDeref
         (-deref [self] (ref-val ref)))
      #js {})))

(defn use-effect
  ([f] (use-effect #js [] f))
  ([deps f]
   (useEffect #(let [r (^js f)]
                 (if (fn? r)
                   r
                   identity))
              deps)))

(defn use-layout-effect
  ([f] (use-layout-effect #js [] f))
  ([deps f]
   (useLayoutEffect #(let [r (^js f)]
                       (if (fn? r)
                         r
                         identity))
                    deps)))

(defn use-memo
  ([f] (useMemo f #js []))
  ([deps f] (useMemo f deps)))

(defn use-callback
  ([f] (useCallback f #js []))
  ([deps f] (useCallback f deps)))

(defn deref
  [iref]
  (let [tmp       (useState 0)
        state     (aget tmp 0)
        set-state (aget tmp 1)
        key       (useMemo
                    #(let [key (js/Symbol "com.vadelabs.turbo.dom/deref")]
                       (add-watch iref key (fn [_ _ _ _] (^js set-state inc)))
                       key)
                    #js [iref])]
    (useEffect #(fn [] (remove-watch iref key))
               #js [iref key])
    (cljs.core/deref iref)))


(defn element
  ([klass]
   (create-element klass #js {}))
  ([klass props]
   (let [props (cond
                 (object? props) props
                 (map? props)    (du/map->obj props)
                 :else           (throw (ex-info "Unexpected props " {:props props})))]
     (create-element klass props))))



(defn memo'
  "A raw variant of React.memo."
  [component equals?]
  (react/memo component equals?))

(defn memo
  ([component] (react/memo component))
  ([component equals?]
   (react/memo component #(du/props-equals? equals? %1 %2))))

(defn catch
  [component {:keys [fallback on-error]}]
  (let [constructor  (fn [props]
                       (this-as this
                         (unchecked-set this "state" #js {})
                         (.call Component this props)))
        did-catch    (fn [error info]
                       (when (fn? on-error)
                         (on-error error info)))
        derive-state (fn [error]
                       #js {:error error})
        render       (fn []
                       (this-as this
                         (let [state (unchecked-get this "state")
                               props (unchecked-get this "props")
                               error (unchecked-get state "error")]
                           (if error
                             (react/createElement fallback #js {:error error})
                             (react/createElement component props)))))
        _            (goog/inherits constructor Component)
        prototype    (unchecked-get constructor "prototype")]
    (unchecked-set constructor "displayName" "ErrorBoundary")
    (unchecked-set constructor "getDerivedStateFromError" derive-state)
    (unchecked-set prototype "componentDidCatch" did-catch)
    (unchecked-set prototype "render" render)
    constructor))

(def ^:private schedule
  (or (and (exists? js/window) js/window.requestAnimationFame)
      #(js/setTimeout % 16)))

(defn deferred
  ([component] (deferred component schedule))
  ([component sfn]
   (fnui deferred
         {::wrap-props false}
         [props]
         (let [tmp              (useState false)
               ^boolean render? (aget tmp 0)
               ^js set-render   (aget tmp 1)]
           (use-effect (fn [] (^js sfn #(set-render true))))
           (when render? (create-element component props))))))

(defn throttle
  [component ms]
  (fnui throttle
        {::wrap-props false}
        [props]
        (let [tmp       (useState props)
              state     (aget tmp 0)
              set-state (aget tmp 1)
              ref       (use-ref false)
              render    (use-memo #(gf/throttle
                                     (fn [v]
                                       (when-not (ref-val ref)
                                         (^js set-state v)))
                                     ms))]
          (use-effect nil #(render props))
          (use-effect (fn [] #(set-ref-val! ref "true")))
          (create-element component state))))
