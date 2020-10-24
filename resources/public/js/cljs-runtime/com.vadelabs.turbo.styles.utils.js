goog.provide('com.vadelabs.turbo.styles.utils');
/**
 * Returns camel case version of the string, e.g. "font-size"
 *   becomes "fontSize".
 */
com.vadelabs.turbo.styles.utils.string__GT_camel_case = (function com$vadelabs$turbo$styles$utils$string__GT_camel_case(value){
var vec__42453 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/-/);
var seq__42454 = cljs.core.seq(vec__42453);
var first__42455 = cljs.core.first(seq__42454);
var seq__42454__$1 = cljs.core.next(seq__42454);
var first_word = first__42455;
var words = seq__42454__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(first_word,"data",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_word,"area"], 0))){
return value;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word));
}
});
/**
 * Returns camel case version of the keyword, e.g., :font-size
 * becomes "fontSize".
 */
com.vadelabs.turbo.styles.utils.keyword__GT_camel_case = (function com$vadelabs$turbo$styles$utils$keyword__GT_camel_case(value){
if((value instanceof cljs.core.Keyword)){
return com.vadelabs.turbo.styles.utils.string__GT_camel_case(cljs.core.name(value));
} else {
return value;
}
});
/**
 * Convert keys of map to camel case version.
 */
com.vadelabs.turbo.styles.utils.map__GT_camel_map = (function com$vadelabs$turbo$styles$utils$map__GT_camel_map(props){
return cljs.core.reduce_kv((function (acc,key,value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,com.vadelabs.turbo.styles.utils.keyword__GT_camel_case(key),((cljs.core.map_QMARK_(value))?(com.vadelabs.turbo.styles.utils.map__GT_camel_map.cljs$core$IFn$_invoke$arity$1 ? com.vadelabs.turbo.styles.utils.map__GT_camel_map.cljs$core$IFn$_invoke$arity$1(value) : com.vadelabs.turbo.styles.utils.map__GT_camel_map.call(null,value)):value));
}),cljs.core.PersistentArrayMap.EMPTY,props);
});

//# sourceMappingURL=com.vadelabs.turbo.styles.utils.js.map
