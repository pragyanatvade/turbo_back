goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63412 = arguments.length;
var i__4737__auto___63413 = (0);
while(true){
if((i__4737__auto___63413 < len__4736__auto___63412)){
args__4742__auto__.push((arguments[i__4737__auto___63413]));

var G__63414 = (i__4737__auto___63413 + (1));
i__4737__auto___63413 = G__63414;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63249){
var G__63250 = cljs.core.first(seq63249);
var seq63249__$1 = cljs.core.next(seq63249);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63250,seq63249__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63262 = cljs.core.seq(sources);
var chunk__63263 = null;
var count__63264 = (0);
var i__63265 = (0);
while(true){
if((i__63265 < count__63264)){
var map__63282 = chunk__63263.cljs$core$IIndexed$_nth$arity$2(null,i__63265);
var map__63282__$1 = (((((!((map__63282 == null))))?(((((map__63282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63282):map__63282);
var src = map__63282__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63282__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63282__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63282__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63284){var e_63415 = e63284;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63415);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63415.message)].join('')));
}

var G__63416 = seq__63262;
var G__63417 = chunk__63263;
var G__63418 = count__63264;
var G__63419 = (i__63265 + (1));
seq__63262 = G__63416;
chunk__63263 = G__63417;
count__63264 = G__63418;
i__63265 = G__63419;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63262);
if(temp__5735__auto__){
var seq__63262__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63262__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63262__$1);
var G__63420 = cljs.core.chunk_rest(seq__63262__$1);
var G__63421 = c__4556__auto__;
var G__63422 = cljs.core.count(c__4556__auto__);
var G__63423 = (0);
seq__63262 = G__63420;
chunk__63263 = G__63421;
count__63264 = G__63422;
i__63265 = G__63423;
continue;
} else {
var map__63285 = cljs.core.first(seq__63262__$1);
var map__63285__$1 = (((((!((map__63285 == null))))?(((((map__63285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63285):map__63285);
var src = map__63285__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63285__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63285__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63285__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63285__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63287){var e_63424 = e63287;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63424);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63424.message)].join('')));
}

var G__63425 = cljs.core.next(seq__63262__$1);
var G__63426 = null;
var G__63427 = (0);
var G__63428 = (0);
seq__63262 = G__63425;
chunk__63263 = G__63426;
count__63264 = G__63427;
i__63265 = G__63428;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63290 = cljs.core.seq(js_requires);
var chunk__63291 = null;
var count__63292 = (0);
var i__63293 = (0);
while(true){
if((i__63293 < count__63292)){
var js_ns = chunk__63291.cljs$core$IIndexed$_nth$arity$2(null,i__63293);
var require_str_63429 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63429);


var G__63430 = seq__63290;
var G__63431 = chunk__63291;
var G__63432 = count__63292;
var G__63433 = (i__63293 + (1));
seq__63290 = G__63430;
chunk__63291 = G__63431;
count__63292 = G__63432;
i__63293 = G__63433;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63290);
if(temp__5735__auto__){
var seq__63290__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63290__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63290__$1);
var G__63434 = cljs.core.chunk_rest(seq__63290__$1);
var G__63435 = c__4556__auto__;
var G__63436 = cljs.core.count(c__4556__auto__);
var G__63437 = (0);
seq__63290 = G__63434;
chunk__63291 = G__63435;
count__63292 = G__63436;
i__63293 = G__63437;
continue;
} else {
var js_ns = cljs.core.first(seq__63290__$1);
var require_str_63438 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63438);


var G__63439 = cljs.core.next(seq__63290__$1);
var G__63440 = null;
var G__63441 = (0);
var G__63442 = (0);
seq__63290 = G__63439;
chunk__63291 = G__63440;
count__63292 = G__63441;
i__63293 = G__63442;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63297){
var map__63298 = p__63297;
var map__63298__$1 = (((((!((map__63298 == null))))?(((((map__63298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63298):map__63298);
var msg = map__63298__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63298__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63298__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63301(s__63302){
return (new cljs.core.LazySeq(null,(function (){
var s__63302__$1 = s__63302;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__63302__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__63307 = cljs.core.first(xs__6292__auto__);
var map__63307__$1 = (((((!((map__63307 == null))))?(((((map__63307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63307):map__63307);
var src = map__63307__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63307__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63307__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__63302__$1,map__63307,map__63307__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63298,map__63298__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63301_$_iter__63303(s__63304){
return (new cljs.core.LazySeq(null,((function (s__63302__$1,map__63307,map__63307__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63298,map__63298__$1,msg,info,reload_info){
return (function (){
var s__63304__$1 = s__63304;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__63304__$1);
if(temp__5735__auto____$1){
var s__63304__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63304__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__63304__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__63306 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__63305 = (0);
while(true){
if((i__63305 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__63305);
cljs.core.chunk_append(b__63306,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__63443 = (i__63305 + (1));
i__63305 = G__63443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63306),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63301_$_iter__63303(cljs.core.chunk_rest(s__63304__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63306),null);
}
} else {
var warning = cljs.core.first(s__63304__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63301_$_iter__63303(cljs.core.rest(s__63304__$2)));
}
} else {
return null;
}
break;
}
});})(s__63302__$1,map__63307,map__63307__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63298,map__63298__$1,msg,info,reload_info))
,null,null));
});})(s__63302__$1,map__63307,map__63307__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__63298,map__63298__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63301(cljs.core.rest(s__63302__$1)));
} else {
var G__63444 = cljs.core.rest(s__63302__$1);
s__63302__$1 = G__63444;
continue;
}
} else {
var G__63445 = cljs.core.rest(s__63302__$1);
s__63302__$1 = G__63445;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__63309_63446 = cljs.core.seq(warnings);
var chunk__63310_63447 = null;
var count__63311_63448 = (0);
var i__63312_63449 = (0);
while(true){
if((i__63312_63449 < count__63311_63448)){
var map__63317_63450 = chunk__63310_63447.cljs$core$IIndexed$_nth$arity$2(null,i__63312_63449);
var map__63317_63451__$1 = (((((!((map__63317_63450 == null))))?(((((map__63317_63450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63317_63450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63317_63450):map__63317_63450);
var w_63452 = map__63317_63451__$1;
var msg_63453__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317_63451__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317_63451__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317_63451__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63317_63451__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63456)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63454),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63455),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63453__$1)].join(''));


var G__63457 = seq__63309_63446;
var G__63458 = chunk__63310_63447;
var G__63459 = count__63311_63448;
var G__63460 = (i__63312_63449 + (1));
seq__63309_63446 = G__63457;
chunk__63310_63447 = G__63458;
count__63311_63448 = G__63459;
i__63312_63449 = G__63460;
continue;
} else {
var temp__5735__auto___63461 = cljs.core.seq(seq__63309_63446);
if(temp__5735__auto___63461){
var seq__63309_63462__$1 = temp__5735__auto___63461;
if(cljs.core.chunked_seq_QMARK_(seq__63309_63462__$1)){
var c__4556__auto___63463 = cljs.core.chunk_first(seq__63309_63462__$1);
var G__63464 = cljs.core.chunk_rest(seq__63309_63462__$1);
var G__63465 = c__4556__auto___63463;
var G__63466 = cljs.core.count(c__4556__auto___63463);
var G__63467 = (0);
seq__63309_63446 = G__63464;
chunk__63310_63447 = G__63465;
count__63311_63448 = G__63466;
i__63312_63449 = G__63467;
continue;
} else {
var map__63319_63468 = cljs.core.first(seq__63309_63462__$1);
var map__63319_63469__$1 = (((((!((map__63319_63468 == null))))?(((((map__63319_63468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63319_63468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63319_63468):map__63319_63468);
var w_63470 = map__63319_63469__$1;
var msg_63471__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63319_63469__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63319_63469__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63319_63469__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63319_63469__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63474)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63472),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63473),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63471__$1)].join(''));


var G__63475 = cljs.core.next(seq__63309_63462__$1);
var G__63476 = null;
var G__63477 = (0);
var G__63478 = (0);
seq__63309_63446 = G__63475;
chunk__63310_63447 = G__63476;
count__63311_63448 = G__63477;
i__63312_63449 = G__63478;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63296_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63296_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63323){
var map__63324 = p__63323;
var map__63324__$1 = (((((!((map__63324 == null))))?(((((map__63324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63324):map__63324);
var msg = map__63324__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63324__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__63326 = cljs.core.seq(updates);
var chunk__63328 = null;
var count__63329 = (0);
var i__63330 = (0);
while(true){
if((i__63330 < count__63329)){
var path = chunk__63328.cljs$core$IIndexed$_nth$arity$2(null,i__63330);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63356_63479 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63359_63480 = null;
var count__63360_63481 = (0);
var i__63361_63482 = (0);
while(true){
if((i__63361_63482 < count__63360_63481)){
var node_63483 = chunk__63359_63480.cljs$core$IIndexed$_nth$arity$2(null,i__63361_63482);
var path_match_63484 = shadow.cljs.devtools.client.browser.match_paths(node_63483.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63484)){
var new_link_63485 = (function (){var G__63366 = node_63483.cloneNode(true);
G__63366.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63484),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63366;
})();
(new_link_63485.onload = ((function (seq__63356_63479,chunk__63359_63480,count__63360_63481,i__63361_63482,seq__63326,chunk__63328,count__63329,i__63330,new_link_63485,path_match_63484,node_63483,path,map__63324,map__63324__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_63483);
});})(seq__63356_63479,chunk__63359_63480,count__63360_63481,i__63361_63482,seq__63326,chunk__63328,count__63329,i__63330,new_link_63485,path_match_63484,node_63483,path,map__63324,map__63324__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63484], 0));

goog.dom.insertSiblingAfter(new_link_63485,node_63483);


var G__63486 = seq__63356_63479;
var G__63487 = chunk__63359_63480;
var G__63488 = count__63360_63481;
var G__63489 = (i__63361_63482 + (1));
seq__63356_63479 = G__63486;
chunk__63359_63480 = G__63487;
count__63360_63481 = G__63488;
i__63361_63482 = G__63489;
continue;
} else {
var G__63490 = seq__63356_63479;
var G__63491 = chunk__63359_63480;
var G__63492 = count__63360_63481;
var G__63493 = (i__63361_63482 + (1));
seq__63356_63479 = G__63490;
chunk__63359_63480 = G__63491;
count__63360_63481 = G__63492;
i__63361_63482 = G__63493;
continue;
}
} else {
var temp__5735__auto___63494 = cljs.core.seq(seq__63356_63479);
if(temp__5735__auto___63494){
var seq__63356_63495__$1 = temp__5735__auto___63494;
if(cljs.core.chunked_seq_QMARK_(seq__63356_63495__$1)){
var c__4556__auto___63496 = cljs.core.chunk_first(seq__63356_63495__$1);
var G__63497 = cljs.core.chunk_rest(seq__63356_63495__$1);
var G__63498 = c__4556__auto___63496;
var G__63499 = cljs.core.count(c__4556__auto___63496);
var G__63500 = (0);
seq__63356_63479 = G__63497;
chunk__63359_63480 = G__63498;
count__63360_63481 = G__63499;
i__63361_63482 = G__63500;
continue;
} else {
var node_63501 = cljs.core.first(seq__63356_63495__$1);
var path_match_63502 = shadow.cljs.devtools.client.browser.match_paths(node_63501.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63502)){
var new_link_63503 = (function (){var G__63367 = node_63501.cloneNode(true);
G__63367.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63502),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63367;
})();
(new_link_63503.onload = ((function (seq__63356_63479,chunk__63359_63480,count__63360_63481,i__63361_63482,seq__63326,chunk__63328,count__63329,i__63330,new_link_63503,path_match_63502,node_63501,seq__63356_63495__$1,temp__5735__auto___63494,path,map__63324,map__63324__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_63501);
});})(seq__63356_63479,chunk__63359_63480,count__63360_63481,i__63361_63482,seq__63326,chunk__63328,count__63329,i__63330,new_link_63503,path_match_63502,node_63501,seq__63356_63495__$1,temp__5735__auto___63494,path,map__63324,map__63324__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63502], 0));

goog.dom.insertSiblingAfter(new_link_63503,node_63501);


var G__63504 = cljs.core.next(seq__63356_63495__$1);
var G__63505 = null;
var G__63506 = (0);
var G__63507 = (0);
seq__63356_63479 = G__63504;
chunk__63359_63480 = G__63505;
count__63360_63481 = G__63506;
i__63361_63482 = G__63507;
continue;
} else {
var G__63508 = cljs.core.next(seq__63356_63495__$1);
var G__63509 = null;
var G__63510 = (0);
var G__63511 = (0);
seq__63356_63479 = G__63508;
chunk__63359_63480 = G__63509;
count__63360_63481 = G__63510;
i__63361_63482 = G__63511;
continue;
}
}
} else {
}
}
break;
}


var G__63512 = seq__63326;
var G__63513 = chunk__63328;
var G__63514 = count__63329;
var G__63515 = (i__63330 + (1));
seq__63326 = G__63512;
chunk__63328 = G__63513;
count__63329 = G__63514;
i__63330 = G__63515;
continue;
} else {
var G__63516 = seq__63326;
var G__63517 = chunk__63328;
var G__63518 = count__63329;
var G__63519 = (i__63330 + (1));
seq__63326 = G__63516;
chunk__63328 = G__63517;
count__63329 = G__63518;
i__63330 = G__63519;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63326);
if(temp__5735__auto__){
var seq__63326__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63326__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__63326__$1);
var G__63520 = cljs.core.chunk_rest(seq__63326__$1);
var G__63521 = c__4556__auto__;
var G__63522 = cljs.core.count(c__4556__auto__);
var G__63523 = (0);
seq__63326 = G__63520;
chunk__63328 = G__63521;
count__63329 = G__63522;
i__63330 = G__63523;
continue;
} else {
var path = cljs.core.first(seq__63326__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63368_63524 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63371_63525 = null;
var count__63372_63526 = (0);
var i__63373_63527 = (0);
while(true){
if((i__63373_63527 < count__63372_63526)){
var node_63528 = chunk__63371_63525.cljs$core$IIndexed$_nth$arity$2(null,i__63373_63527);
var path_match_63529 = shadow.cljs.devtools.client.browser.match_paths(node_63528.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63529)){
var new_link_63530 = (function (){var G__63378 = node_63528.cloneNode(true);
G__63378.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63529),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63378;
})();
(new_link_63530.onload = ((function (seq__63368_63524,chunk__63371_63525,count__63372_63526,i__63373_63527,seq__63326,chunk__63328,count__63329,i__63330,new_link_63530,path_match_63529,node_63528,path,seq__63326__$1,temp__5735__auto__,map__63324,map__63324__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_63528);
});})(seq__63368_63524,chunk__63371_63525,count__63372_63526,i__63373_63527,seq__63326,chunk__63328,count__63329,i__63330,new_link_63530,path_match_63529,node_63528,path,seq__63326__$1,temp__5735__auto__,map__63324,map__63324__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63529], 0));

goog.dom.insertSiblingAfter(new_link_63530,node_63528);


var G__63531 = seq__63368_63524;
var G__63532 = chunk__63371_63525;
var G__63533 = count__63372_63526;
var G__63534 = (i__63373_63527 + (1));
seq__63368_63524 = G__63531;
chunk__63371_63525 = G__63532;
count__63372_63526 = G__63533;
i__63373_63527 = G__63534;
continue;
} else {
var G__63535 = seq__63368_63524;
var G__63536 = chunk__63371_63525;
var G__63537 = count__63372_63526;
var G__63538 = (i__63373_63527 + (1));
seq__63368_63524 = G__63535;
chunk__63371_63525 = G__63536;
count__63372_63526 = G__63537;
i__63373_63527 = G__63538;
continue;
}
} else {
var temp__5735__auto___63539__$1 = cljs.core.seq(seq__63368_63524);
if(temp__5735__auto___63539__$1){
var seq__63368_63540__$1 = temp__5735__auto___63539__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63368_63540__$1)){
var c__4556__auto___63541 = cljs.core.chunk_first(seq__63368_63540__$1);
var G__63542 = cljs.core.chunk_rest(seq__63368_63540__$1);
var G__63543 = c__4556__auto___63541;
var G__63544 = cljs.core.count(c__4556__auto___63541);
var G__63545 = (0);
seq__63368_63524 = G__63542;
chunk__63371_63525 = G__63543;
count__63372_63526 = G__63544;
i__63373_63527 = G__63545;
continue;
} else {
var node_63546 = cljs.core.first(seq__63368_63540__$1);
var path_match_63547 = shadow.cljs.devtools.client.browser.match_paths(node_63546.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63547)){
var new_link_63548 = (function (){var G__63379 = node_63546.cloneNode(true);
G__63379.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63547),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63379;
})();
(new_link_63548.onload = ((function (seq__63368_63524,chunk__63371_63525,count__63372_63526,i__63373_63527,seq__63326,chunk__63328,count__63329,i__63330,new_link_63548,path_match_63547,node_63546,seq__63368_63540__$1,temp__5735__auto___63539__$1,path,seq__63326__$1,temp__5735__auto__,map__63324,map__63324__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_63546);
});})(seq__63368_63524,chunk__63371_63525,count__63372_63526,i__63373_63527,seq__63326,chunk__63328,count__63329,i__63330,new_link_63548,path_match_63547,node_63546,seq__63368_63540__$1,temp__5735__auto___63539__$1,path,seq__63326__$1,temp__5735__auto__,map__63324,map__63324__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63547], 0));

goog.dom.insertSiblingAfter(new_link_63548,node_63546);


var G__63549 = cljs.core.next(seq__63368_63540__$1);
var G__63550 = null;
var G__63551 = (0);
var G__63552 = (0);
seq__63368_63524 = G__63549;
chunk__63371_63525 = G__63550;
count__63372_63526 = G__63551;
i__63373_63527 = G__63552;
continue;
} else {
var G__63553 = cljs.core.next(seq__63368_63540__$1);
var G__63554 = null;
var G__63555 = (0);
var G__63556 = (0);
seq__63368_63524 = G__63553;
chunk__63371_63525 = G__63554;
count__63372_63526 = G__63555;
i__63373_63527 = G__63556;
continue;
}
}
} else {
}
}
break;
}


var G__63557 = cljs.core.next(seq__63326__$1);
var G__63558 = null;
var G__63559 = (0);
var G__63560 = (0);
seq__63326 = G__63557;
chunk__63328 = G__63558;
count__63329 = G__63559;
i__63330 = G__63560;
continue;
} else {
var G__63561 = cljs.core.next(seq__63326__$1);
var G__63562 = null;
var G__63563 = (0);
var G__63564 = (0);
seq__63326 = G__63561;
chunk__63328 = G__63562;
count__63329 = G__63563;
i__63330 = G__63564;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__63380){
var map__63381 = p__63380;
var map__63381__$1 = (((((!((map__63381 == null))))?(((((map__63381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63381):map__63381);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63381__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__63383){
var map__63384 = p__63383;
var map__63384__$1 = (((((!((map__63384 == null))))?(((((map__63384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63384):map__63384);
var _ = map__63384__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63384__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__63386,done,error){
var map__63387 = p__63386;
var map__63387__$1 = (((((!((map__63387 == null))))?(((((map__63387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63387):map__63387);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63387__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__63389,done,error){
var map__63390 = p__63389;
var map__63390__$1 = (((((!((map__63390 == null))))?(((((map__63390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63390):map__63390);
var msg = map__63390__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63390__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63390__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63390__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__63392){
var map__63393 = p__63392;
var map__63393__$1 = (((((!((map__63393 == null))))?(((((map__63393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63393):map__63393);
var src = map__63393__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63393__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__63395 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__63395) : done.call(null,G__63395));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__63396){
var map__63397 = p__63396;
var map__63397__$1 = (((((!((map__63397 == null))))?(((((map__63397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63397):map__63397);
var msg__$1 = map__63397__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63397__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e63399){var ex = e63399;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__63400){
var map__63401 = p__63400;
var map__63401__$1 = (((((!((map__63401 == null))))?(((((map__63401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63401):map__63401);
var env = map__63401__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63401__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__63403){
var map__63404 = p__63403;
var map__63404__$1 = (((((!((map__63404 == null))))?(((((map__63404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63404):map__63404);
var msg = map__63404__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63404__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__63406){
var map__63407 = p__63406;
var map__63407__$1 = (((((!((map__63407 == null))))?(((((map__63407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63407):map__63407);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63407__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63407__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__63409){
var map__63410 = p__63409;
var map__63410__$1 = (((((!((map__63410 == null))))?(((((map__63410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63410):map__63410);
var svc = map__63410__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63410__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
