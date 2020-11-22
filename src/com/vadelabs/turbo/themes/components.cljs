(ns com.vadelabs.turbo.themes.components)

(defn- variant-solid
  [props]
  )

(defn- variant-subtle
  [props]
  )

(defn- variant-outline
  [props]
  )

(def ^:private variants
  {:solid   variant-solid
   :subtle  variant-subtle
   :outline variant-outline})

(def ^:private default-props
  {:variant      :subtle
   :color-scheme :gray})

(def Badge
  {:base     {:px             1
              :text-transform "uppercase"
              :font-size      "xs"
              :border-radius  "sm"
              :font-weight    "bold"}
   :variants variants
   :default  default-props})

(def components
  {:Badge Badge})
