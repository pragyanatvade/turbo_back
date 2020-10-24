goog.provide('com.vadelabs.turbo.hooks');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
com.vadelabs.turbo.hooks.raw_use_effect = module$node_modules$react$index.useEffect;

com.vadelabs.turbo.hooks.raw_use_layout_effect = module$node_modules$react$index.useLayoutEffect;

com.vadelabs.turbo.hooks.raw_use_memo = module$node_modules$react$index.useMemo;

com.vadelabs.turbo.hooks.raw_use_callback = module$node_modules$react$index.useCallback;

com.vadelabs.turbo.hooks.raw_use_imperative_handl = module$node_modules$react$index.useImperativeHandle;
/**
 * Like `react/useState`, but the update function returned can be used similar to `swap!`.
 */
com.vadelabs.turbo.hooks.use_state = (function com$vadelabs$turbo$hooks$use_state(initial){
var vec__40856 = module$node_modules$react$index.useState(initial);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40856,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40856,(1),null);
var updater = module$node_modules$react$index.useCallback((function() {
var com$vadelabs$turbo$hooks$use_state_$_updater = null;
var com$vadelabs$turbo$hooks$use_state_$_updater__1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var com$vadelabs$turbo$hooks$use_state_$_updater__2 = (function() { 
var G__40879__delegate = function (f,xs){
return com$vadelabs$turbo$hooks$use_state_$_updater.cljs$core$IFn$_invoke$arity$1((function com$vadelabs$turbo$hooks$use_state_$_updater_$_spread_updater(x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,xs);
}));
};
var G__40879 = function (f,var_args){
var xs = null;
if (arguments.length > 1) {
var G__40880__i = 0, G__40880__a = new Array(arguments.length -  1);
while (G__40880__i < G__40880__a.length) {G__40880__a[G__40880__i] = arguments[G__40880__i + 1]; ++G__40880__i;}
  xs = new cljs.core.IndexedSeq(G__40880__a,0,null);
} 
return G__40879__delegate.call(this,f,xs);};
G__40879.cljs$lang$maxFixedArity = 1;
G__40879.cljs$lang$applyTo = (function (arglist__40881){
var f = cljs.core.first(arglist__40881);
var xs = cljs.core.rest(arglist__40881);
return G__40879__delegate(f,xs);
});
G__40879.cljs$core$IFn$_invoke$arity$variadic = G__40879__delegate;
return G__40879;
})()
;
com$vadelabs$turbo$hooks$use_state_$_updater = function(f,var_args){
var xs = var_args;
switch(arguments.length){
case 1:
return com$vadelabs$turbo$hooks$use_state_$_updater__1.call(this,f);
default:
var G__40882 = null;
if (arguments.length > 1) {
var G__40883__i = 0, G__40883__a = new Array(arguments.length -  1);
while (G__40883__i < G__40883__a.length) {G__40883__a[G__40883__i] = arguments[G__40883__i + 1]; ++G__40883__i;}
G__40882 = new cljs.core.IndexedSeq(G__40883__a,0,null);
}
return com$vadelabs$turbo$hooks$use_state_$_updater__2.cljs$core$IFn$_invoke$arity$variadic(f, G__40882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$vadelabs$turbo$hooks$use_state_$_updater.cljs$lang$maxFixedArity = 1;
com$vadelabs$turbo$hooks$use_state_$_updater.cljs$lang$applyTo = com$vadelabs$turbo$hooks$use_state_$_updater__2.cljs$lang$applyTo;
com$vadelabs$turbo$hooks$use_state_$_updater.cljs$core$IFn$_invoke$arity$1 = com$vadelabs$turbo$hooks$use_state_$_updater__1;
com$vadelabs$turbo$hooks$use_state_$_updater.cljs$core$IFn$_invoke$arity$variadic = com$vadelabs$turbo$hooks$use_state_$_updater__2.cljs$core$IFn$_invoke$arity$variadic;
return com$vadelabs$turbo$hooks$use_state_$_updater;
})()
,[]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,updater], null);
});
/**
 * List react/useRef. Supports accessing the "current" property via
 *   dereference (@) and updating the "current" property via `reset!` and
 *   `swap!`
 */
com.vadelabs.turbo.hooks.use_ref = (function com$vadelabs$turbo$hooks$use_ref(x){
var ref = module$node_modules$react$index.useRef(null);
if((ref.current == null)){
(ref.current = (function (){var x40859 = ({"current": x});
(x40859.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x40859.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x40859.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x40859.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,v){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",v);
}));

(x40859.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x40859.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__40860 = this$__$1.current;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40860) : f.call(null,G__40860));
})());
}));

(x40859.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__40861 = this$__$1.current;
var G__40862 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40861,G__40862) : f.call(null,G__40861,G__40862));
})());
}));

(x40859.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",(function (){var G__40863 = this$__$1.current;
var G__40864 = a;
var G__40865 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__40863,G__40864,G__40865) : f.call(null,G__40863,G__40864,G__40865));
})());
}));

(x40859.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.current,a,b,xs));
}));

return x40859;
})());
} else {
}

return ref.current;
});
/**
 * just react/useReducer.
 */
com.vadelabs.turbo.hooks.use_reducer = (function com$vadelabs$turbo$hooks$use_reducer(var_args){
var G__40867 = arguments.length;
switch (G__40867) {
case 2:
return com.vadelabs.turbo.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.vadelabs.turbo.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.hooks.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (reducer,init_state){
return com.vadelabs.turbo.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3(reducer,init_state,undefined);
}));

(com.vadelabs.turbo.hooks.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (reducer,init_state,init){
return module$node_modules$react$index.useReducer(module$node_modules$react$index.useMemo((function (){
if((((!(cljs.core.fn_QMARK_(reducer)))) && (cljs.core.ifn_QMARK_(reducer)))){
return (function com$vadelabs$turbo$hooks$wrap_ifn(state,action){
return (reducer.cljs$core$IFn$_invoke$arity$2 ? reducer.cljs$core$IFn$_invoke$arity$2(state,action) : reducer.call(null,state,action));
});
} else {
return reducer;
}
}),[reducer]),init_state,init);
}));

(com.vadelabs.turbo.hooks.use_reducer.cljs$lang$maxFixedArity = 3);

/**
 * Just react/useContext
 */
com.vadelabs.turbo.hooks.use_context = module$node_modules$react$index.useContext;
com.vadelabs.turbo.hooks.wrap_fx = (function com$vadelabs$turbo$hooks$wrap_fx(f){
return (function com$vadelabs$turbo$hooks$wrap_fx_$_wrap_fx_return(){
var x = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(x)){
return x;
} else {
return undefined;
}
});
});
com.vadelabs.turbo.hooks.simple_body_QMARK_ = (function com$vadelabs$turbo$hooks$simple_body_QMARK_(body){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(body),(1))) && ((cljs.core.first(body) instanceof cljs.core.Symbol)));
});
com.vadelabs.turbo.hooks.determine_deps = (function com$vadelabs$turbo$hooks$determine_deps(deps){
var G__40868 = deps;
var G__40868__$1 = (((G__40868 instanceof cljs.core.Keyword))?G__40868.fqn:null);
switch (G__40868__$1) {
case "once":
return [];

break;
case "always":
return undefined;

break;
case "auto-deps":
throw (new Error("Cannot use :auto-deps outside of macro."));

break;
default:
return cljs.core.to_array(deps);

}
});
/**
 * Like react/useEffect.  See `use-effect` for details on what `f`'s return values.  See namespace doc for `deps`.
 */
com.vadelabs.turbo.hooks.use_effect_STAR_ = (function com$vadelabs$turbo$hooks$use_effect_STAR_(var_args){
var G__40870 = arguments.length;
switch (G__40870) {
case 1:
return com.vadelabs.turbo.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.vadelabs.turbo.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(com.vadelabs.turbo.hooks.wrap_fx(f));
}));

(com.vadelabs.turbo.hooks.use_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-effect*`; use `use-effect` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useEffect(com.vadelabs.turbo.hooks.wrap_fx(f),cljs.core.to_array(deps));
}));

(com.vadelabs.turbo.hooks.use_effect_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Like `use-effect*` but instead calls react/useLayoutEffect.
 */
com.vadelabs.turbo.hooks.use_layout_effect_STAR_ = (function com$vadelabs$turbo$hooks$use_layout_effect_STAR_(var_args){
var G__40872 = arguments.length;
switch (G__40872) {
case 1:
return com.vadelabs.turbo.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.vadelabs.turbo.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useLayoutEffect(com.vadelabs.turbo.hooks.wrap_fx(f));
}));

(com.vadelabs.turbo.hooks.use_layout_effect_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-layout-effect*`; use `use-layout-effect` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useLayoutEffect(com.vadelabs.turbo.hooks.wrap_fx(f),cljs.core.to_array(deps));
}));

(com.vadelabs.turbo.hooks.use_layout_effect_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Like react/useMemo.  `f` is unchanged in meaning.  See namespace doc for
 *   `deps`.
 */
com.vadelabs.turbo.hooks.use_memo_STAR_ = (function com$vadelabs$turbo$hooks$use_memo_STAR_(var_args){
var G__40874 = arguments.length;
switch (G__40874) {
case 1:
return com.vadelabs.turbo.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.vadelabs.turbo.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useMemo(f);
}));

(com.vadelabs.turbo.hooks.use_memo_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-memo*`; use `use-memo` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useMemo(f,cljs.core.to_array(deps));
}));

(com.vadelabs.turbo.hooks.use_memo_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * `f` is a function which will be passed to react/useCallback.  See
 *   namespace doc for `deps`.
 */
com.vadelabs.turbo.hooks.use_callback_STAR_ = (function com$vadelabs$turbo$hooks$use_callback_STAR_(var_args){
var G__40876 = arguments.length;
switch (G__40876) {
case 1:
return com.vadelabs.turbo.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.vadelabs.turbo.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useCallback(f);
}));

(com.vadelabs.turbo.hooks.use_callback_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-callback*`; use `use-callback` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useCallback(f,cljs.core.to_array(deps));
}));

(com.vadelabs.turbo.hooks.use_callback_STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Like react/useImperativeHandle.  `ref` and `f` are unchanged in meaning.
 *   See namespace doc for `deps`
 */
com.vadelabs.turbo.hooks.use_imperative_handle_STAR_ = (function com$vadelabs$turbo$hooks$use_imperative_handle_STAR_(var_args){
var G__40878 = arguments.length;
switch (G__40878) {
case 2:
return com.vadelabs.turbo.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.vadelabs.turbo.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.vadelabs.turbo.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return module$node_modules$react$index.useImperativeHandle(ref,f);
}));

(com.vadelabs.turbo.hooks.use_imperative_handle_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (ref,f,deps){
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,new cljs.core.Keyword(null,"auto-deps","auto-deps",-2124919365))){
throw (new Error("Can't use `:auto-deps` with `use-imperative-handle*`; use `use-imperative-handle` macro for that"));
} else {
}
} else {
}

return module$node_modules$react$index.useImperativeHandle(ref,f,cljs.core.to_array(deps));
}));

(com.vadelabs.turbo.hooks.use_imperative_handle_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Just react/useDebugValue
 */
com.vadelabs.turbo.hooks.use_debug_value = module$node_modules$react$index.debugValue;

//# sourceMappingURL=com.vadelabs.turbo.hooks.js.map
