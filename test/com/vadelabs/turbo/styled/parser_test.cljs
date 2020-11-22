(ns com.vadelabs.turbo.styled.parser-test
  (:require
   [nubank.workspaces.core :as ws :refer [deftest]]
   [cljs.test :refer [is testing]]
   [com.vadelabs.turbo.styled.parser :as p]))


(deftest background
  (testing "returns background styles"
    (let [style (p/background {:background-image "url(kitten.gif)"} p/style-keys p/pseudo-keys)]
      (is (= style {:background-image "url(kitten.gif)"})))))

(deftest border
  (testing "returns border styles"
    (let [style (p/border {:border "1px solid gold"} p/style-keys p/pseudo-keys)]
      (is (= style {:border "1px solid gold"}))))
  (testing "returns individual border styles"
    (let [style (p/border {:theme                      {:border-widths {:thin 1}
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
                           :border-left-style          "thick"}
                          p/style-keys
                          p/pseudo-keys)]
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
      (let [style (p/border {:theme                      {:radii {:small 5}}
                             :border-top-left-radius     "small"
                             :border-top-right-radius    "small"
                             :border-bottom-left-radius  "small"
                             :border-bottom-right-radius "small"}
                            p/style-keys
                            p/pseudo-keys)]
        (is (= style {:border-top-left-radius     5
                      :border-top-right-radius    5
                      :border-bottom-left-radius  5
                      :border-bottom-right-radius 5}))))))

(deftest color
  (testing "returns colors styles"
    (let [style (p/color {:color "gold"
                          :fill  "tomato"}
                         p/style-keys
                         p/pseudo-keys)]
      (is (= style {:color "gold"
                    :fill  "tomato"})))))

(deftest position
  (testing "returns position styles"
    (let [style (p/position {:position "absolute" :top 0 :right 0}
                            p/style-keys
                            p/pseudo-keys)]
      (is (= style {:position "absolute" :top 0 :right 0}))))
  (testing "returns theme values"
    (let [style (p/position {:theme {:space [0 4 8 16 32 64 128 256 512]}
                             :top   1 :right 2 :bottom 3 :left 4}
                            p/style-keys
                            p/pseudo-keys)]
      (is (= style {:top 4 :right 8 :bottom 16 :left 32}))))
  (testing "returns pixel values"
    (let [style (p/position {:top "1px" :right "2px" :bottom "3px" :left "4px"}
                            p/style-keys
                            p/pseudo-keys)]
      (is (= style {:top "1px" :right "2px" :bottom "3px" :left "4px"})))))
