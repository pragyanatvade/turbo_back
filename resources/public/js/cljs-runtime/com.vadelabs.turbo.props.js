goog.provide('com.vadelabs.turbo.props');
com.vadelabs.turbo.props.aria_data_css_custom_prop_special_case_re = /^(aria-|data-|--).*/;
com.vadelabs.turbo.props.camel_regexp = RegExp("-(\\w)","g");
/**
 * Returns camel case version of the string, e.g. "http-equiv" becomes "httpEquiv".
 */
com.vadelabs.turbo.props.camel_case = (function com$vadelabs$turbo$props$camel_case(s){
if((((s instanceof cljs.core.Keyword)) || (typeof s === 'string') || ((s instanceof cljs.core.Symbol)))){
var name_str = cljs.core.name(s);
if((!((name_str.match(com.vadelabs.turbo.props.aria_data_css_custom_prop_special_case_re) == null)))){
return name_str;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name_str.substring((0),(1)),"'")){
return name_str.substring((1));
} else {
return name_str.replace(com.vadelabs.turbo.props.camel_regexp,(function (p1__53304_SHARP_,p2__53303_SHARP_){
return p2__53303_SHARP_.toUpperCase();
}));

}
}
} else {
return s;
}
});
com.vadelabs.turbo.props.kw__GT_str = (function com$vadelabs$turbo$props$kw__GT_str(kw){
var kw_ns = cljs.core.namespace(kw);
var kw_name = cljs.core.name(kw);
if((kw_ns == null)){
return kw_name;
} else {
return [kw_ns,"/",kw_name].join('');
}
});
com.vadelabs.turbo.props.set_obj = (function com$vadelabs$turbo$props$set_obj(o,k,v){
var G__53362 = o;
goog.object.set(G__53362,k,v);

return G__53362;
});
com.vadelabs.turbo.props.__GT_js = (function com$vadelabs$turbo$props$__GT_js(x){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.vadelabs.turbo.props.camel_case,cljs.core.name)], 0));
});
com.vadelabs.turbo.props.primitive_obj = (function com$vadelabs$turbo$props$primitive_obj(var_args){
var G__53385 = arguments.length;
switch (G__53385) {
case 0:
return com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$0 = (function (){
return ({});
}));

(com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$1 = (function (m){
return com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$2(m,com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
}));

(com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__53557 = cljs.core.rest(m);
var G__53558 = (function (){var entry = cljs.core.first(m);
return com.vadelabs.turbo.props.set_obj(o,com.vadelabs.turbo.props.camel_case(com.vadelabs.turbo.props.kw__GT_str(cljs.core.key(entry))),com.vadelabs.turbo.props.__GT_js(cljs.core.val(entry)));
})();
m = G__53557;
o = G__53558;
continue;
} else {
return o;
}
break;
}
}));

(com.vadelabs.turbo.props.primitive_obj.cljs$lang$maxFixedArity = 2);

com.vadelabs.turbo.props.into_js_array = (function com$vadelabs$turbo$props$into_js_array(aseq){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(aseq);
});
com.vadelabs.turbo.props.merge_obj = (function com$vadelabs$turbo$props$merge_obj(o1,o2){
if((o2 == null)){
return o1;
} else {
var G__53410 = o1;
goog.object.extend(G__53410,o2);

return G__53410;
}
});
com.vadelabs.turbo.props.seq_to_class = (function com$vadelabs$turbo$props$seq_to_class(class$){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,class$)));
});
com.vadelabs.turbo.props.normalize_class = (function com$vadelabs$turbo$props$normalize_class(class$){
if(typeof class$ === 'string'){
return class$;
} else {
if(cljs.core.sequential_QMARK_(class$)){
return com.vadelabs.turbo.props.seq_to_class(class$);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$);

}
}
});
com.vadelabs.turbo.props.or_undefined = (function com$vadelabs$turbo$props$or_undefined(v){
if((v == null)){
return undefined;
} else {
return v;
}
});
com.vadelabs.turbo.props.native_style = (function com$vadelabs$turbo$props$native_style(style){
if(cljs.core.map_QMARK_(style)){
return com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$1(style);
} else {
if(cljs.core.vector_QMARK_(style)){
return com.vadelabs.turbo.props.into_js_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53430_SHARP_){
if(cljs.core.map_QMARK_(p1__53430_SHARP_)){
return com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$1(p1__53430_SHARP_);
} else {
return p1__53430_SHARP_;
}
}),style));
} else {
return style;

}
}
});
com.vadelabs.turbo.props._native_props = (function com$vadelabs$turbo$props$_native_props(var_args){
var G__53447 = arguments.length;
switch (G__53447) {
case 1:
return com.vadelabs.turbo.props._native_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.vadelabs.turbo.props._native_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.props._native_props.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_(m)){
return com.vadelabs.turbo.props._native_props.cljs$core$IFn$_invoke$arity$2(m,com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
} else {
return m;
}
}));

(com.vadelabs.turbo.props._native_props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__53597 = cljs.core.rest(m);
var G__53598 = (function (){var entry = cljs.core.first(m);
var k = cljs.core.key(entry);
var v = cljs.core.val(entry);
var G__53461 = k;
var G__53461__$1 = (((G__53461 instanceof cljs.core.Keyword))?G__53461.fqn:null);
switch (G__53461__$1) {
case "class":
return com.vadelabs.turbo.props.set_obj(o,"className",com.vadelabs.turbo.props.normalize_class(v));

break;
case "for":
return com.vadelabs.turbo.props.set_obj(o,"htmlFor",v);

break;
case "style":
return com.vadelabs.turbo.props.set_obj(o,"style",com.vadelabs.turbo.props.native_style(v));

break;
case "value":
return com.vadelabs.turbo.props.set_obj(o,"value",com.vadelabs.turbo.props.or_undefined(v));

break;
default:
return com.vadelabs.turbo.props.set_obj(o,com.vadelabs.turbo.props.camel_case(com.vadelabs.turbo.props.kw__GT_str(k)),v);

}
})();
m = G__53597;
o = G__53598;
continue;
} else {
return o;
}
break;
}
}));

(com.vadelabs.turbo.props._native_props.cljs$lang$maxFixedArity = 2);

com.vadelabs.turbo.props._props = (function com$vadelabs$turbo$props$_props(var_args){
var G__53477 = arguments.length;
switch (G__53477) {
case 1:
return com.vadelabs.turbo.props._props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.vadelabs.turbo.props._props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.props._props.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_(m)){
return com.vadelabs.turbo.props._props.cljs$core$IFn$_invoke$arity$2(m,com.vadelabs.turbo.props.primitive_obj.cljs$core$IFn$_invoke$arity$0());
} else {
return m;
}
}));

(com.vadelabs.turbo.props._props.cljs$core$IFn$_invoke$arity$2 = (function (m,o){
while(true){
if(cljs.core.seq(m)){
var G__53623 = cljs.core.rest(m);
var G__53624 = (function (){var entry = cljs.core.first(m);
return com.vadelabs.turbo.props.set_obj(o,com.vadelabs.turbo.props.kw__GT_str(cljs.core.key(entry)),cljs.core.val(entry));
})();
m = G__53623;
o = G__53624;
continue;
} else {
return o;
}
break;
}
}));

(com.vadelabs.turbo.props._props.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=com.vadelabs.turbo.props.js.map
