(ns com.vadelabs.turbo.cards
  (:require-macros [com.vadelabs.turbo.cards])
  (:require
   [nubank.workspaces.model :as wsm]
   [com.vadelabs.turbo.dom :as dom]
   [nubank.workspaces.card-types.util :as ct.util]))

(defn turbo-card-init
  [card component]
  (ct.util/positioned-card
    card
    {::wsm/dispose (fn [node]
                     (dom/detach node))
     ::wsm/refresh (fn [node]
                     (dom/detach node)
                     (dom/attach (dom/element component) node))
     ::wsm/render  (fn [node]
                     (dom/attach (dom/element component) node))}))

(defn turbo-card* [component]
  {::wsm/init #(turbo-card-init % component)})
