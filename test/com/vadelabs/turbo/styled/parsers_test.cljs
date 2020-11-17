(ns com.vadelabs.turbo.styled.parsers-test
  (:require
   [nubank.workspaces.core :as ws :refer [deftest]]
   [cljs.test :refer [is testing]]
   [com.vadelabs.turbo.styled.parsers :as parsers]))


(deftest background
  (testing "returns background styles"
    (let [style (parsers/background {:background-image "url(kitten.gif)"})]
      (is (= style {:background-image "url(kitten.gif)"})))))

(deftest border
  (testing "returns border styles"
    (let [style (parsers/border {:border "1px solid gold"})]
      (is (= style {:border "1px solid gold"}))))
  (testing "returns individual border styles"
    (let [style (parsers/border {:theme                      {:border-widths {:thin 1}
                                                              :colors        {:primary "red"}
                                                              :border-styles {:thick "solid"}
                                                              :radii         {:small 5}}
                                 :border-top-width           "thin"
                                 :border-top-color           "primary"
                                 :border-top-style           "thick"
                                 :border-top-left-radius     "small"
                                 :border-top-right-radius    "small"
                                 :border-bottom-width        "thin"
                                 :border-bottom-color        "primary"
                                 :border-bottom-style        "thick"
                                 :border-bottom-left-radius  "small"
                                 :border-bottom-right-radius "small"
                                 :border-right-width         "thin"
                                 :border-right-color         "primary"
                                 :border-right-style         "thick"
                                 :border-left-width          "thin"
                                 :border-left-color          "primary"
                                 :border-left-style          "thick"})]
      (is (= style {:border-top-color           "red"
                    :border-top-width           1
                    :border-top-style           "solid"
                    :border-top-left-radius     5
                    :border-top-right-radius    5
                    :border-bottom-color        "red"
                    :border-bottom-width        1
                    :border-bottom-style        "solid"
                    :border-bottom-left-radius  5
                    :border-bottom-right-radius 5
                    :border-right-color         "red"
                    :border-right-width         1
                    :border-right-style         "solid"
                    :border-left-color          "red"
                    :border-left-width          1
                    :border-left-style          "solid"})))
    (testing "returns border top and bottom radii"
      (let [style (parsers/border {:theme                      {:radii {:small 5}}
                                   :border-top-left-radius     "small"
                                   :border-top-right-radius    "small"
                                   :border-bottom-left-radius  "small"
                                   :border-bottom-right-radius "small"})]
        (is (= style {:border-top-left-radius     5
                      :border-top-right-radius    5
                      :border-bottom-left-radius  5
                      :border-bottom-right-radius 5}))))))
