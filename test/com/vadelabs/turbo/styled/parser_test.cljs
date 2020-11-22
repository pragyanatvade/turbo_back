(ns com.vadelabs.turbo.styled.parser-test
  (:require
   [devcards.core :as dc]
   [com.vadelabs.turbo.styled.parser :as p])
  (:require-macros
   [devcards.core :as dc :refer [deftest]]
   [cljs.test :refer [is testing]]))

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

(deftest flexbox
  (testing "returns flexbox styles"
    (let [style (p/flexbox {:align-items "center"
                            :flex        "1 1 auto"}
                           p/style-keys p/pseudo-keys)]
      (is (= style {:align-items "center"
                    :flex        "1 1 auto"})))))

(deftest grid
  (testing "returns grid styles"
    (let [style (p/grid {:grid-gap 32} p/style-keys p/pseudo-keys)]
      (is (= style {:grid-gap 32})))))

(deftest layout
  (testing "returns layout styles"
    (let [style (p/layout {:width      [1 0.5 0.25]
                           :min-height 32
                           :max-width  768}
                          p/style-keys p/pseudo-keys)]
      (is (= style {:width      "100%"
                    :min-height 32
                    :max-width  768}))
      (is (= (:media (meta style)) {{:screen true :min-width "40em"} {:width "50%"}
                                    {:screen true :min-width "52em"} {:width "25%"}}))
      (is (= (:pseudo (meta style)) {}))))
  (testing "returns 0 from theme.sizes"
    (let [style (p/layout {:theme  {:sizes [ 24 48 96]}
                           :width  0
                           :height 0} p/style-keys p/pseudo-keys)]
      (is (= style {:width 24 :height 24})))))

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

(deftest shadow
  (testing "returns shadow styles"
    (let [style (p/shadow {:theme       {:shadows {:small "0 1px 4px rgba(0,0,0,.125)"}}
                           :text-shadow "0 -1px rgba(255,255,255,.25)"
                           :box-shadow  "small"}
                          p/style-keys p/pseudo-keys)]
      (is (= style {:text-shadow "0 -1px rgba(255,255,255,.25)"
                    :box-shadow  "0 1px 4px rgba(0,0,0,.125)"})))))
(deftest space
  (testing "returns style objects"
    (let [style (p/space {:m "4px"}
                         p/style-keys p/pseudo-keys)]
      (is (= style {:margin "4px"}))))
  (testing "returns 0 values"
    (let [style (p/space {:m 0}
                         p/style-keys p/pseudo-keys)]
      (is (= style {:margin 0}))))
  (testing "returns negative pixel values"
    (let [style (p/space {:m -2}
                         p/style-keys p/pseudo-keys)]
      (is (= style {:margin -8}))))
  (testing "returns negative em values"
    (let [style (p/space {:m "-16em"}
                         p/style-keys p/pseudo-keys)]
      (is (= style {:margin "-16em"}))))
  )
