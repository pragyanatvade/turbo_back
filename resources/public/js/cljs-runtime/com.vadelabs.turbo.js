goog.provide('com.vadelabs.turbo');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof Symbol !== 'undefined')){
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write(writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
} else {
}
com.vadelabs.turbo.Fragment = module$node_modules$react$index.Fragment;
com.vadelabs.turbo.Suspense = module$node_modules$react$index.Suspense;
com.vadelabs.turbo.create_element = module$node_modules$react$index.createElement;
com.vadelabs.turbo.create_context = module$node_modules$react$index.createContext;
com.vadelabs.turbo.get_react = (function com$vadelabs$turbo$get_react(){
return module$node_modules$react$index;
});
/**
 * Create a new react element from a valid react type.
 */
com.vadelabs.turbo.$ = (function com$vadelabs$turbo$$(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54517 = arguments.length;
var i__4737__auto___54518 = (0);
while(true){
if((i__4737__auto___54518 < len__4736__auto___54517)){
args__4742__auto__.push((arguments[i__4737__auto___54518]));

var G__54519 = (i__4737__auto___54518 + (1));
i__4737__auto___54518 = G__54519;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return com.vadelabs.turbo.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(com.vadelabs.turbo.$.cljs$core$IFn$_invoke$arity$variadic = (function (type,args){
var _QMARK_props = cljs.core.first(args);
var _QMARK_children = cljs.core.rest(args);
var native_QMARK_ = (function (){var or__4126__auto__ = (type instanceof cljs.core.Keyword);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = typeof type === 'string';
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type));
}
}
})();
var type_SINGLEQUOTE_ = (((type instanceof cljs.core.Keyword))?cljs.core.name(type):type);
if(cljs.core.map_QMARK_(_QMARK_props)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.vadelabs.turbo.create_element,type_SINGLEQUOTE_,(cljs.core.truth_(native_QMARK_)?com.vadelabs.turbo.props._native_props.cljs$core$IFn$_invoke$arity$1(_QMARK_props):com.vadelabs.turbo.props._props.cljs$core$IFn$_invoke$arity$1(_QMARK_props)),_QMARK_children);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(com.vadelabs.turbo.create_element,type_SINGLEQUOTE_,null,args);
}
}));

(com.vadelabs.turbo.$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(com.vadelabs.turbo.$.cljs$lang$applyTo = (function (seq54509){
var G__54510 = cljs.core.first(seq54509);
var seq54509__$1 = cljs.core.next(seq54509);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54510,seq54509__$1);
}));


/**
 * @interface
 */
com.vadelabs.turbo.IExtractType = function(){};

var com$vadelabs$turbo$IExtractType$_type$dyn_54520 = (function (factory){
var x__4428__auto__ = (((factory == null))?null:factory);
var m__4429__auto__ = (com.vadelabs.turbo._type[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__4429__auto__.call(null,factory));
} else {
var m__4426__auto__ = (com.vadelabs.turbo._type["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(factory) : m__4426__auto__.call(null,factory));
} else {
throw cljs.core.missing_protocol("IExtractType.-type",factory);
}
}
});
/**
 * Extracts the underlying type from the factory function.
 */
com.vadelabs.turbo._type = (function com$vadelabs$turbo$_type(factory){
if((((!((factory == null)))) && ((!((factory.com$vadelabs$turbo$IExtractType$_type$arity$1 == null)))))){
return factory.com$vadelabs$turbo$IExtractType$_type$arity$1(factory);
} else {
return com$vadelabs$turbo$IExtractType$_type$dyn_54520(factory);
}
});

com.vadelabs.turbo.type = (function com$vadelabs$turbo$type(factory){
return com.vadelabs.turbo._type(factory);
});
/**
 * Creates a factory function for a react component
 */
com.vadelabs.turbo.factory = (function com$vadelabs$turbo$factory(type){
var x54511 = (function() { 
var com$vadelabs$turbo$factory_$_factory__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.vadelabs.turbo.$,type,args);
};
var com$vadelabs$turbo$factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54521__i = 0, G__54521__a = new Array(arguments.length -  0);
while (G__54521__i < G__54521__a.length) {G__54521__a[G__54521__i] = arguments[G__54521__i + 0]; ++G__54521__i;}
  args = new cljs.core.IndexedSeq(G__54521__a,0,null);
} 
return com$vadelabs$turbo$factory_$_factory__delegate.call(this,args);};
com$vadelabs$turbo$factory_$_factory.cljs$lang$maxFixedArity = 0;
com$vadelabs$turbo$factory_$_factory.cljs$lang$applyTo = (function (arglist__54522){
var args = cljs.core.seq(arglist__54522);
return com$vadelabs$turbo$factory_$_factory__delegate(args);
});
com$vadelabs$turbo$factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = com$vadelabs$turbo$factory_$_factory__delegate;
return com$vadelabs$turbo$factory_$_factory;
})()
;
(x54511.com$vadelabs$turbo$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x54511.com$vadelabs$turbo$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x54511;
});
com.vadelabs.turbo.cljs_factory = (function com$vadelabs$turbo$cljs_factory(type){
var x54512 = (function() { 
var com$vadelabs$turbo$cljs_factory_$_factory__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var props = cljs.core.first(args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({"turbo/props": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref","ref",1289896967)], 0)), "key": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"key","key",-1516042587),undefined), "ref": cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),undefined)}),cljs.core.rest(args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,type,({}),args);
}
};
var com$vadelabs$turbo$cljs_factory_$_factory = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54523__i = 0, G__54523__a = new Array(arguments.length -  0);
while (G__54523__i < G__54523__a.length) {G__54523__a[G__54523__i] = arguments[G__54523__i + 0]; ++G__54523__i;}
  args = new cljs.core.IndexedSeq(G__54523__a,0,null);
} 
return com$vadelabs$turbo$cljs_factory_$_factory__delegate.call(this,args);};
com$vadelabs$turbo$cljs_factory_$_factory.cljs$lang$maxFixedArity = 0;
com$vadelabs$turbo$cljs_factory_$_factory.cljs$lang$applyTo = (function (arglist__54524){
var args = cljs.core.seq(arglist__54524);
return com$vadelabs$turbo$cljs_factory_$_factory__delegate(args);
});
com$vadelabs$turbo$cljs_factory_$_factory.cljs$core$IFn$_invoke$arity$variadic = com$vadelabs$turbo$cljs_factory_$_factory__delegate;
return com$vadelabs$turbo$cljs_factory_$_factory;
})()
;
(x54512.com$vadelabs$turbo$IExtractType$ = cljs.core.PROTOCOL_SENTINEL);

(x54512.com$vadelabs$turbo$IExtractType$_type$arity$1 = (function (_){
var ___$1 = this;
return type;
}));

return x54512;
});
com.vadelabs.turbo.assoc_some = (function com$vadelabs$turbo$assoc_some(m,k,x){
if((!((x == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,x);
} else {
return m;
}
});
com.vadelabs.turbo.extract_cljs_props = (function com$vadelabs$turbo$extract_cljs_props(o){
if(((goog.DEBUG) && (((cljs.core.map_QMARK_(o)) || ((o == null)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Props received were a map. This probably means you're calling your component as a function.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),o], null));
} else {
}

var temp__5733__auto__ = goog.object.get(o,"turbo/props");
if(cljs.core.truth_(temp__5733__auto__)){
var props = temp__5733__auto__;
return com.vadelabs.turbo.assoc_some(props,new cljs.core.Keyword(null,"children","children",-940561982),goog.object.get(o,"children"));
} else {
return cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(o);
}
});
/**
 * Like React.memo, but passes props as CLJS map-likes instead of JS objects.
 */
com.vadelabs.turbo.memo = (function com$vadelabs$turbo$memo(var_args){
var G__54514 = arguments.length;
switch (G__54514) {
case 1:
return com.vadelabs.turbo.memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.vadelabs.turbo.memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.memo.cljs$core$IFn$_invoke$arity$1 = (function (component){
return com.vadelabs.turbo.memo.cljs$core$IFn$_invoke$arity$1(component);
}));

(com.vadelabs.turbo.memo.cljs$core$IFn$_invoke$arity$2 = (function (component,compare){
return module$node_modules$react$index.memo(component,(function com$vadelabs$turbo$memo_compare(o,o_SINGLEQUOTE_){
var G__54515 = com.vadelabs.turbo.extract_cljs_props(o);
var G__54516 = com.vadelabs.turbo.extract_cljs_props(o_SINGLEQUOTE_);
return (compare.cljs$core$IFn$_invoke$arity$2 ? compare.cljs$core$IFn$_invoke$arity$2(G__54515,G__54516) : compare.call(null,G__54515,G__54516));
}));
}));

(com.vadelabs.turbo.memo.cljs$lang$maxFixedArity = 2);

/**
 * Registers a component with the React Fresh runtime.
 *   `type` the component function, and `id` is the unique ID assigned to it
 *   (e.g. component name) for cache invalidation.
 */
com.vadelabs.turbo.register_BANG_ = (function com$vadelabs$turbo$register_BANG_(type,id){
if((!((window.$$Register$$ == null)))){
return window.$$Register$$(type,id);
} else {
return null;
}
});
com.vadelabs.turbo.signature_BANG_ = (function com$vadelabs$turbo$signature_BANG_(){
if((!((window._$$Signature$$() == null)))){
return window.$$Signature$$();
} else {
return false;
}
});

//# sourceMappingURL=com.vadelabs.turbo.js.map
