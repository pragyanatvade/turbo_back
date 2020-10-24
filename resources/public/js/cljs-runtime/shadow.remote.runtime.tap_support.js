goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61890,p__61891){
var map__61900 = p__61890;
var map__61900__$1 = (((((!((map__61900 == null))))?(((((map__61900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61900):map__61900);
var svc = map__61900__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61900__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61900__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61900__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61901 = p__61891;
var map__61901__$1 = (((((!((map__61901 == null))))?(((((map__61901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61901):map__61901);
var msg = map__61901__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61901__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61933,p__61934){
var map__61935 = p__61933;
var map__61935__$1 = (((((!((map__61935 == null))))?(((((map__61935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61935):map__61935);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61935__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61936 = p__61934;
var map__61936__$1 = (((((!((map__61936 == null))))?(((((map__61936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61936):map__61936);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61936__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61951,p__61952){
var map__61953 = p__61951;
var map__61953__$1 = (((((!((map__61953 == null))))?(((((map__61953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61953):map__61953);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61953__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61953__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61954 = p__61952;
var map__61954__$1 = (((((!((map__61954 == null))))?(((((map__61954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61954):map__61954);
var msg = map__61954__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61954__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61967,tid){
var map__61969 = p__61967;
var map__61969__$1 = (((((!((map__61969 == null))))?(((((map__61969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61969):map__61969);
var svc = map__61969__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61969__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61993 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61994 = null;
var count__61995 = (0);
var i__61996 = (0);
while(true){
if((i__61996 < count__61995)){
var vec__62025 = chunk__61994.cljs$core$IIndexed$_nth$arity$2(null,i__61996);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62025,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62025,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62102 = seq__61993;
var G__62103 = chunk__61994;
var G__62104 = count__61995;
var G__62105 = (i__61996 + (1));
seq__61993 = G__62102;
chunk__61994 = G__62103;
count__61995 = G__62104;
i__61996 = G__62105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61993);
if(temp__5735__auto__){
var seq__61993__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61993__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61993__$1);
var G__62107 = cljs.core.chunk_rest(seq__61993__$1);
var G__62108 = c__4556__auto__;
var G__62109 = cljs.core.count(c__4556__auto__);
var G__62110 = (0);
seq__61993 = G__62107;
chunk__61994 = G__62108;
count__61995 = G__62109;
i__61996 = G__62110;
continue;
} else {
var vec__62040 = cljs.core.first(seq__61993__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62040,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62040,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__62112 = cljs.core.next(seq__61993__$1);
var G__62113 = null;
var G__62114 = (0);
var G__62115 = (0);
seq__61993 = G__62112;
chunk__61994 = G__62113;
count__61995 = G__62114;
i__61996 = G__62115;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61975_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61975_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61980_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61980_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61981_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61981_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61982_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61982_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__62060){
var map__62061 = p__62060;
var map__62061__$1 = (((((!((map__62061 == null))))?(((((map__62061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62061):map__62061);
var svc = map__62061__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62061__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62061__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
