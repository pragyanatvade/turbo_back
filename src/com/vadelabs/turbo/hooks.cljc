(ns com.vadelabs.turbo.hooks
  #?(:clj (:require [com.vadelabs.turbo.analyzer :as turbo.analyzer])
     :cljs (:require ["react" :as react]
                     [goog.object :as gobj]))
  #?(:cljs (:require-macros [com.vadelabs.turbo.hooks])))

#?(:cljs
   (do (def raw-use-effect react/useEffect)
       (def raw-use-layout-effect react/useLayoutEffect)
       (def raw-use-memo react/useMemo)
       (def raw-use-callback react/useCallback)
       (def raw-use-imperative-handl react/useImperativeHandle)))


#?(:cljs
   (defn use-state
     "Like `react/useState`, but the update function returned can be used similar to `swap!`."
     [initial]
     (let [[v u]   (react/useState initial)
           updater (react/useCallback (fn updater
                                        ([x] (u x))
                                        ([f & xs]
                                         (updater (fn spread-updater
                                                    [x]
                                                    (apply f x xs)))))
                                      #js [])]
       [v updater])))

#?(:cljs
   (defn use-ref
     "List react/useRef. Supports accessing the \"current\" property via
     dereference (@) and updating the \"current\" property via `reset!` and
     `swap!`"
     [x]
     (let [ref (react/useRef nil)]
       (when (nil? (.-current ^js ref))
         (set! (.-current ^js ref)
               (specify! #js {:current x}
                 IDeref
                 (-deref [this]
                   (.-current ^js this))
                 IReset
                 (-reset! [this v]
                   (gobj/set this "current" v))
                 ISwap
                 (-swap!
                   ([this f]
                    (gobj/set this "current" (f (.-current ^js this))))
                   ([this f a]
                    (gobj/set this "current" (f (.-current ^js this) a)))
                   ([this f a b]
                    (gobj/set this "current" (f (.-current ^js this) a b)))
                   ([this f a b xs]
                    (gobj/set this "current" (apply f (.-current ^js this) a b xs)))))))
       (.-current ^js ref))))

#?(:cljs
   (defn use-reducer
     "just react/useReducer."
     ([reducer init-state]
      (use-reducer reducer init-state js/undefined))
     ([reducer init-state init]
      (react/useReducer
        (react/useMemo
          #(if (and (not (fn? reducer)) (ifn? reducer))
             (fn wrap-ifn [state action]
               (reducer state action))
             reducer)
          #js [reducer])
        init-state
        init))))

#?(:cljs
   (def use-context
     "Just react/useContext"
     react/useContext))


;; React `useEffect` expects either a function or undefined to be returned
#?(:cljs
   (defn wrap-fx [f]
     (fn wrap-fx-return []
       (let [x (f)]
         (if (fn? x)
           x
           js/undefined)))))


(defn simple-body? [body]
  (and (= (count body) 1) (symbol? (first body))))


#?(:clj
   (defn deps-macro-body [env deps body deps->hook-body]
     (cond
       ;;
       ;; Warn on typical errors writing body
       ;;

       ;; a single symbol
       (and (= (count body) 1) (symbol? (first body)))
       (do (turbo.analyzer/warn turbo.analyzer/warning-simple-body env {:form body})
           nil)


       ;;
       ;; Different variations of deps
       ;;

       ;; deps are passed in as a vector
       (vector? deps) (deps->hook-body `(cljs.core/array ~@deps)
                                       body)

       ;; auto deps is passed in
       (= deps :auto-deps) (deps->hook-body
                             `(cljs.core/array ~@(turbo.analyzer/resolve-local-vars env body))
                             body)

       ;; always fire it (don't pass any deps in to hook)
       (= deps :always) (deps->hook-body body)

       ;; pass an empty array for things that should only run once
       (= deps :once) (deps->hook-body '(cljs.core/array) body)

       :else (deps->hook-body `(determine-deps ~deps) body)))

   :cljs (defn determine-deps [deps]
           (case deps
             :once      (array)
             :always    js/undefined
             :auto-deps (throw (js/Error. "Cannot use :auto-deps outside of macro."))
             (to-array deps))))


#?(:clj
   (defmacro use-effect
     "Like react/useEffect.  See namespace doc for `deps`.  `body` should be a
     code form which will be wrapped in a function and passed to
     react/useEffect.  If it returns a function, that will be used to clean up.
     
     Unlike react/useEffect, only if you return a function will it be used, you
     DO NOT need to return js/undefined."
     [deps & body]
     (deps-macro-body
       &env deps body
       (fn
         ([fn-body] `^clj-nil (raw-use-effect (wrap-fx (fn [] ~@fn-body))))
         ([deps fn-body]
          `^clj-nil (raw-use-effect (wrap-fx (fn [] ~@fn-body)) ~deps))))))


#?(:cljs
   ;; we provide a CLJS defn in the case when we need to pass around the hook
   ;; as a value. This will be slower, `:auto-deps` won't work and devtools will
   ;; be harder to read
   (defn use-effect*
     "Like react/useEffect.  See `use-effect` for details on what `f`'s return values.  See namespace doc for `deps`."
     ([f] (react/useEffect (wrap-fx f)))
     ([f deps]
      (when js/goog.DEBUG
        (when (= deps :auto-deps)
          (throw (js/Error. "Can't use `:auto-deps` with `use-effect*`; use `use-effect` macro for that"))))
      (react/useEffect (wrap-fx f) (to-array deps)))))


#?(:clj
   (defmacro use-layout-effect
     "Like `use-effect` but instead calls react/useLayoutEffect."
     [deps & body]
     (deps-macro-body
       &env deps body
       (fn
         ([fn-body] `^clj-nil (raw-use-layout-effect (wrap-fx (fn [] ~@fn-body))))
         ([deps fn-body]
          `^clj-nil (raw-use-layout-effect (wrap-fx (fn [] ~@fn-body)) ~deps))))))


#?(:cljs
   (defn use-layout-effect*
     "Like `use-effect*` but instead calls react/useLayoutEffect."
     ([f] (react/useLayoutEffect (wrap-fx f)))
     ([f deps]
      (when js/goog.DEBUG
        (when (= deps :auto-deps)
          (throw (js/Error. "Can't use `:auto-deps` with `use-layout-effect*`; use `use-layout-effect` macro for that"))))
      (react/useLayoutEffect (wrap-fx f) (to-array deps)))))


#?(:clj
   (defmacro use-memo
     "Like react/useMemo.  See namespace doc for `deps`.  `body` should be a
     code form which will be wrapped in a function."
     [deps & body]
     (deps-macro-body
       &env deps body
       (fn
         ([fn-body]
          (vary-meta
            `(raw-use-memo (fn [] ~@fn-body))
            merge
            {:tag (turbo.analyzer/inferred-type &env fn-body)}))
         ([deps fn-body]
          (vary-meta
            `(raw-use-memo (fn [] ~@fn-body)
                           ~deps)
            merge
            {:tag (turbo.analyzer/inferred-type &env (last fn-body))}))))))


#?(:cljs
   (defn use-memo*
     "Like react/useMemo.  `f` is unchanged in meaning.  See namespace doc for
     `deps`."
     ([f] (react/useMemo f))
     ([f deps]
      (when js/goog.DEBUG
        (when (= deps :auto-deps)
          (throw (js/Error. "Can't use `:auto-deps` with `use-memo*`; use `use-memo` macro for that"))))
      (react/useMemo f (to-array deps)))))


#?(:clj
   (defmacro use-callback
     "Like react/useCallback.  See namespace doc for `deps`.  `fn-body` should
     be a code form which returns a function."
     [deps & fn-body]
     (deps-macro-body
       &env deps fn-body
       (fn
         ([fn-body] `^function (raw-use-callback ~@fn-body))
         ([deps fn-body] `^function (raw-use-callback ~@fn-body
                                                      ~deps))))))

#?(:cljs
   (defn use-callback*
     "`f` is a function which will be passed to react/useCallback.  See
     namespace doc for `deps`."
     ([f] (react/useCallback f))
     ([f deps]
      (when js/goog.DEBUG
        (when (= deps :auto-deps)
          (throw (js/Error. "Can't use `:auto-deps` with `use-callback*`; use `use-callback` macro for that"))))
      (react/useCallback f (to-array deps)))))


#?(:clj
   (defmacro use-imperative-handle
     "Like react/useImperativeHandle.  `ref` is unchanged in meaning.  See
     namespace doc for `deps`.  `body` should be a code form which will be
     wrapped in a function."
     [ref deps & body]
     (deps-macro-body
       &env deps body
       (fn
         ([fn-body] `(raw-use-imperative-handle ref (fn [] ~@fn-body)))
         ([deps fn-body] `(raw-use-imperative-handle
                            (fn [] ~@fn-body)
                            ~deps))))))


#?(:cljs
   (defn use-imperative-handle*
     "Like react/useImperativeHandle.  `ref` and `f` are unchanged in meaning.
     See namespace doc for `deps`"
     ([ref f] (react/useImperativeHandle ref f))
     ([ref f deps]
      (when js/goog.DEBUG
        (when (= deps :auto-deps)
          (throw (js/Error. "Can't use `:auto-deps` with `use-imperative-handle*`; use `use-imperative-handle` macro for that"))))
      (react/useImperativeHandle ref f (to-array deps)))))


#?(:cljs
   (def use-debug-value
     "Just react/useDebugValue"
     react/debugValue))
