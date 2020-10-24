(ns com.vadelabs.turbo.analyzer
  (:require [cljs.analyzer :as analyzer]
            [clojure.walk :as walk]
            [cljs.analyzer.api :as analyzer.api]
            [clojure.zip :as zip]))

(def warning-simple-body ::simple-body)

(def warning-inferred-map-props ::inferred-map-props)

(def warning-invalid-hooks-usage ::invalid-hooks-usage)

(def warning-invalid-hook-name ::invalid-hook-name)

(defn warn [warning-type env extras]
  (analyzer/warning warning-type env extras))

(defmethod analyzer/error-message warning-simple-body
  [_ {:keys [form]}]
  (format "Got a single symbol %s as a body, expected an expression. Maybe you meant (%s)?"
          (first form) (first form)))

(defmethod analyzer/error-message warning-inferred-map-props
  [_ {:keys [form props-form]}]
  (format "The inferred type of %s is a map. Did you mean to pass it in as props?
Example: ($ %s %s ...)"
          props-form
          (first form)
          '{& props-form}))

(defmethod analyzer/error-message warning-invalid-hooks-usage
  [_ {:keys [form state]}]
  (format "Invalid hooks usage: %s used in %s" form (name state)))

(defmethod analyzer/error-message warning-invalid-hook-name
  [_ {:keys [form]}]
  (format "Invalid hoot name defined in %s" form))

(def resolve-var analyzer/resolve-var)

(defn resolve-local-vars
  "Returns a set of symbols found in `body` that also exist in `env`."
  [env body]
  (let [sym-list (atom #{})]
    (walk/postwalk
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

(defn find-all
  "Recursively walks a tree structure and finds all elements that match `pred`.
  Returns a vector of results."
  [pred tree]
  (let [results (atom [])]
    (walk/postwalk
      (fn walker [x]
        (when (pred x)
          (swap! results conj x))
        x)
      tree)
    @results))

(defn hook?
  [x]
  (boolean
    (and (symbol? x)
         (some #(re-find % (name x))
               [#"^use\-"
                #"^use[A-Z]"]))))

(defn hook-expr?
  [x]
  (when (list? x)
    (hook? (first x))))

(defn find-hooks
  [body]
  (find-all hook-expr? body))

(defn inferred-type
  [env x]
  (cljs.analyzer/infer-tag env (analyzer.api/no-warn (analyzer.api/analyze env x))))

(defn ensure-seq
  [x]
  (if (seqable? x)
    x
    (list x)))

(defn invalid-hooks-usage
  ([form] (invalid-hooks-usage
            {:state nil}
            form))
  ([ctx form]
   (cond
     ;; hook symbol passed in as a value
     (and (not (nil? (:state ctx))) (hook? form)) (assoc ctx :form form)
     ;; otherwise not a hook or not in a bad state, bail early
     (not (and (seqable? form) (seq form)))       nil
     :else
     (let [hd (first form)]
       (->> (cond
              ('#{for loop doseq dotimes} hd)
              (let [[bindings-expr & body] (rest form)]
                (->> body
                     (map #(invalid-hooks-usage
                             (assoc ctx :state :loop)
                             %))
                     (concat (map #(invalid-hooks-usage ctx %) bindings-expr))))

              ('#{reduce reduce-kv map mapv filter filterv trampoline
                  reductions partition-by group-by map-indexed keep mapcat
                  run! keep-indexed remove some iterate} hd)
              (let [[f-form seq-form] (rest form)
                    f-form            (ensure-seq f-form)
                    seq-form          (ensure-seq seq-form)]
                (->> f-form
                     (map #(invalid-hooks-usage (assoc ctx :state :loop) %))
                     (concat (map #(invalid-hooks-usage ctx %) seq-form))))

              ('#{lazy-seq} hd)
              (->> (rest form)
                   (map #(invalid-hooks-usage (assoc ctx :state :loop) %)))

              ('#{tree-seq} hd)
              (let [[branch?-form children-form root-form] (rest form)
                    branch?-form                           (ensure-seq branch?-form)
                    children-form                          (ensure-seq children-form)
                    root-form                              (ensure-seq root-form)]
                (concat
                  (map #(invalid-hooks-usage (assoc ctx :state :loop) %) branch?-form)
                  (map #(invalid-hooks-usage (assoc ctx :state :loop) %) children-form)
                  (map #(invalid-hooks-usage ctx %) root-form)))

              ('#{if if-not when when-not case and or
                  if-let when-let if-some when-some cond} hd)
              (let [[pred-expr & body] (rest form)]
                (->> body
                     ;; handle branches
                     (map #(invalid-hooks-usage
                             (assoc ctx :state :conditional)
                             %))
                     ;; handle pred/expr
                     (cons (invalid-hooks-usage ctx pred-expr))))

              ('#{cond->} hd)
              (let [[expr first-pred & body] (rest form)]
                (->> body
                     ;; handle branches
                     (map #(invalid-hooks-usage
                             (assoc ctx :state :conditional)
                             %))
                     ;; handleexpr
                     (cons (invalid-hooks-usage ctx expr))
                     ;; the first pred is always run, so we can use hooks in it
                     (cons (invalid-hooks-usage ctx first-pred))))

              ('#{condp} hd)
              (let [[pred expr first-pred & body] (rest form)]
                (->> body
                     ;; handle branches
                     (map #(invalid-hooks-usage
                             (assoc ctx :state :conditional)
                             %))
                     ;; hook should NOT be in `pred` as it could be called multiple times
                     (cons (invalid-hooks-usage (assoc ctx :state :conditional) pred))
                     (cons (invalid-hooks-usage ctx expr))
                     (cons (invalid-hooks-usage ctx first-pred))))

              (and (not (nil? (:state ctx)))
                   (hook-expr? form))
              ;; wrap in a seq since it's expected
              [(assoc ctx :form form)]

              :else (->> (rest form)
                         (map #(invalid-hooks-usage ctx %))))
            (flatten)
            (filter (comp not nil?))
            (seq))))))

(defn make-seqable
  [node children]
  (with-meta
    (cond
      (vector? node) (vec children)
      :else          children)
    (meta node)))

(defn seqable-zip
  [root]
  (zip/zipper
    #(and (seqable? %)
          (not (string? %)))
    identity
    make-seqable
    root))

(defn map-forms-with-meta
  [body meta-table]
  (let [meta-keys (set (keys meta-table))
        body-zip  (seqable-zip body)]
    (loop [cur-loc  body-zip
           max-loop 10000]
      (let [node              (zip/node cur-loc)
            node-meta         (meta node)
            mapped-meta-value (some
                                #(when-some [meta-v (get node-meta %)]
                                   ((get meta-table %)
                                    ;; strip the metadata that triggered this to
                                    ;; avoid the infinite loop!
                                    (vary-meta node dissoc %)
                                    meta-v))
                                meta-keys)
            cur-loc'          (if mapped-meta-value
                                (zip/replace cur-loc mapped-meta-value)
                                cur-loc)]
        (cond
          (zip/end? cur-loc') (zip/root cur-loc')
          (= 0 max-loop)      (throw (ex-info
                                       "infinite loop detected!"
                                       {:zipper cur-loc'
                                        :body   (zip/root cur-loc')}))
          :else               (recur (zip/next cur-loc')
                                     (dec max-loop)))))))
