goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_61729 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_61729(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_61732 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_61732(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__61021 = coll;
var G__61022 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__61021,G__61022) : shadow.dom.lazy_native_coll_seq.call(null,G__61021,G__61022));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__61030 = arguments.length;
switch (G__61030) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__61032 = arguments.length;
switch (G__61032) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__61041 = arguments.length;
switch (G__61041) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__61050 = arguments.length;
switch (G__61050) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__61057 = arguments.length;
switch (G__61057) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__61063 = arguments.length;
switch (G__61063) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e61075){if((e61075 instanceof Object)){
var e = e61075;
return console.log("didnt support attachEvent",el,e);
} else {
throw e61075;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__61086 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__61087 = null;
var count__61088 = (0);
var i__61089 = (0);
while(true){
if((i__61089 < count__61088)){
var el = chunk__61087.cljs$core$IIndexed$_nth$arity$2(null,i__61089);
var handler_61761__$1 = ((function (seq__61086,chunk__61087,count__61088,i__61089,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61086,chunk__61087,count__61088,i__61089,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61761__$1);


var G__61763 = seq__61086;
var G__61764 = chunk__61087;
var G__61765 = count__61088;
var G__61766 = (i__61089 + (1));
seq__61086 = G__61763;
chunk__61087 = G__61764;
count__61088 = G__61765;
i__61089 = G__61766;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61086);
if(temp__5735__auto__){
var seq__61086__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61086__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61086__$1);
var G__61767 = cljs.core.chunk_rest(seq__61086__$1);
var G__61768 = c__4556__auto__;
var G__61769 = cljs.core.count(c__4556__auto__);
var G__61770 = (0);
seq__61086 = G__61767;
chunk__61087 = G__61768;
count__61088 = G__61769;
i__61089 = G__61770;
continue;
} else {
var el = cljs.core.first(seq__61086__$1);
var handler_61771__$1 = ((function (seq__61086,chunk__61087,count__61088,i__61089,el,seq__61086__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__61086,chunk__61087,count__61088,i__61089,el,seq__61086__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_61771__$1);


var G__61773 = cljs.core.next(seq__61086__$1);
var G__61774 = null;
var G__61775 = (0);
var G__61776 = (0);
seq__61086 = G__61773;
chunk__61087 = G__61774;
count__61088 = G__61775;
i__61089 = G__61776;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__61107 = arguments.length;
switch (G__61107) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__61113 = cljs.core.seq(events);
var chunk__61114 = null;
var count__61115 = (0);
var i__61116 = (0);
while(true){
if((i__61116 < count__61115)){
var vec__61127 = chunk__61114.cljs$core$IIndexed$_nth$arity$2(null,i__61116);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61127,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61783 = seq__61113;
var G__61784 = chunk__61114;
var G__61785 = count__61115;
var G__61786 = (i__61116 + (1));
seq__61113 = G__61783;
chunk__61114 = G__61784;
count__61115 = G__61785;
i__61116 = G__61786;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61113);
if(temp__5735__auto__){
var seq__61113__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61113__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61113__$1);
var G__61789 = cljs.core.chunk_rest(seq__61113__$1);
var G__61790 = c__4556__auto__;
var G__61791 = cljs.core.count(c__4556__auto__);
var G__61792 = (0);
seq__61113 = G__61789;
chunk__61114 = G__61790;
count__61115 = G__61791;
i__61116 = G__61792;
continue;
} else {
var vec__61132 = cljs.core.first(seq__61113__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61132,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__61793 = cljs.core.next(seq__61113__$1);
var G__61794 = null;
var G__61795 = (0);
var G__61796 = (0);
seq__61113 = G__61793;
chunk__61114 = G__61794;
count__61115 = G__61795;
i__61116 = G__61796;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__61138 = cljs.core.seq(styles);
var chunk__61139 = null;
var count__61140 = (0);
var i__61141 = (0);
while(true){
if((i__61141 < count__61140)){
var vec__61156 = chunk__61139.cljs$core$IIndexed$_nth$arity$2(null,i__61141);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61156,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61801 = seq__61138;
var G__61802 = chunk__61139;
var G__61803 = count__61140;
var G__61804 = (i__61141 + (1));
seq__61138 = G__61801;
chunk__61139 = G__61802;
count__61140 = G__61803;
i__61141 = G__61804;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61138);
if(temp__5735__auto__){
var seq__61138__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61138__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61138__$1);
var G__61807 = cljs.core.chunk_rest(seq__61138__$1);
var G__61808 = c__4556__auto__;
var G__61809 = cljs.core.count(c__4556__auto__);
var G__61810 = (0);
seq__61138 = G__61807;
chunk__61139 = G__61808;
count__61140 = G__61809;
i__61141 = G__61810;
continue;
} else {
var vec__61161 = cljs.core.first(seq__61138__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61161,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__61811 = cljs.core.next(seq__61138__$1);
var G__61812 = null;
var G__61813 = (0);
var G__61814 = (0);
seq__61138 = G__61811;
chunk__61139 = G__61812;
count__61140 = G__61813;
i__61141 = G__61814;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__61169_61816 = key;
var G__61169_61817__$1 = (((G__61169_61816 instanceof cljs.core.Keyword))?G__61169_61816.fqn:null);
switch (G__61169_61817__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_61823 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_61823,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_61823,"aria-");
}
})())){
el.setAttribute(ks_61823,value);
} else {
(el[ks_61823] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__61192){
var map__61193 = p__61192;
var map__61193__$1 = (((((!((map__61193 == null))))?(((((map__61193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61193):map__61193);
var props = map__61193__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61193__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__61202 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61202,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61202,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61202,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__61207 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__61207,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__61207;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__61213 = arguments.length;
switch (G__61213) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__61225){
var vec__61227 = p__61225;
var seq__61228 = cljs.core.seq(vec__61227);
var first__61229 = cljs.core.first(seq__61228);
var seq__61228__$1 = cljs.core.next(seq__61228);
var nn = first__61229;
var first__61229__$1 = cljs.core.first(seq__61228__$1);
var seq__61228__$2 = cljs.core.next(seq__61228__$1);
var np = first__61229__$1;
var nc = seq__61228__$2;
var node = vec__61227;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61231 = nn;
var G__61232 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61231,G__61232) : create_fn.call(null,G__61231,G__61232));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61233 = nn;
var G__61234 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__61233,G__61234) : create_fn.call(null,G__61233,G__61234));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__61240 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61240,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61240,(1),null);
var seq__61244_61839 = cljs.core.seq(node_children);
var chunk__61245_61840 = null;
var count__61246_61841 = (0);
var i__61247_61842 = (0);
while(true){
if((i__61247_61842 < count__61246_61841)){
var child_struct_61843 = chunk__61245_61840.cljs$core$IIndexed$_nth$arity$2(null,i__61247_61842);
var children_61844 = shadow.dom.dom_node(child_struct_61843);
if(cljs.core.seq_QMARK_(children_61844)){
var seq__61293_61845 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61844));
var chunk__61295_61846 = null;
var count__61296_61847 = (0);
var i__61297_61848 = (0);
while(true){
if((i__61297_61848 < count__61296_61847)){
var child_61849 = chunk__61295_61846.cljs$core$IIndexed$_nth$arity$2(null,i__61297_61848);
if(cljs.core.truth_(child_61849)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61849);


var G__61850 = seq__61293_61845;
var G__61851 = chunk__61295_61846;
var G__61852 = count__61296_61847;
var G__61853 = (i__61297_61848 + (1));
seq__61293_61845 = G__61850;
chunk__61295_61846 = G__61851;
count__61296_61847 = G__61852;
i__61297_61848 = G__61853;
continue;
} else {
var G__61854 = seq__61293_61845;
var G__61855 = chunk__61295_61846;
var G__61856 = count__61296_61847;
var G__61857 = (i__61297_61848 + (1));
seq__61293_61845 = G__61854;
chunk__61295_61846 = G__61855;
count__61296_61847 = G__61856;
i__61297_61848 = G__61857;
continue;
}
} else {
var temp__5735__auto___61858 = cljs.core.seq(seq__61293_61845);
if(temp__5735__auto___61858){
var seq__61293_61859__$1 = temp__5735__auto___61858;
if(cljs.core.chunked_seq_QMARK_(seq__61293_61859__$1)){
var c__4556__auto___61860 = cljs.core.chunk_first(seq__61293_61859__$1);
var G__61861 = cljs.core.chunk_rest(seq__61293_61859__$1);
var G__61862 = c__4556__auto___61860;
var G__61863 = cljs.core.count(c__4556__auto___61860);
var G__61864 = (0);
seq__61293_61845 = G__61861;
chunk__61295_61846 = G__61862;
count__61296_61847 = G__61863;
i__61297_61848 = G__61864;
continue;
} else {
var child_61868 = cljs.core.first(seq__61293_61859__$1);
if(cljs.core.truth_(child_61868)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61868);


var G__61869 = cljs.core.next(seq__61293_61859__$1);
var G__61870 = null;
var G__61871 = (0);
var G__61872 = (0);
seq__61293_61845 = G__61869;
chunk__61295_61846 = G__61870;
count__61296_61847 = G__61871;
i__61297_61848 = G__61872;
continue;
} else {
var G__61873 = cljs.core.next(seq__61293_61859__$1);
var G__61874 = null;
var G__61875 = (0);
var G__61876 = (0);
seq__61293_61845 = G__61873;
chunk__61295_61846 = G__61874;
count__61296_61847 = G__61875;
i__61297_61848 = G__61876;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61844);
}


var G__61877 = seq__61244_61839;
var G__61878 = chunk__61245_61840;
var G__61879 = count__61246_61841;
var G__61880 = (i__61247_61842 + (1));
seq__61244_61839 = G__61877;
chunk__61245_61840 = G__61878;
count__61246_61841 = G__61879;
i__61247_61842 = G__61880;
continue;
} else {
var temp__5735__auto___61881 = cljs.core.seq(seq__61244_61839);
if(temp__5735__auto___61881){
var seq__61244_61882__$1 = temp__5735__auto___61881;
if(cljs.core.chunked_seq_QMARK_(seq__61244_61882__$1)){
var c__4556__auto___61883 = cljs.core.chunk_first(seq__61244_61882__$1);
var G__61884 = cljs.core.chunk_rest(seq__61244_61882__$1);
var G__61885 = c__4556__auto___61883;
var G__61886 = cljs.core.count(c__4556__auto___61883);
var G__61887 = (0);
seq__61244_61839 = G__61884;
chunk__61245_61840 = G__61885;
count__61246_61841 = G__61886;
i__61247_61842 = G__61887;
continue;
} else {
var child_struct_61888 = cljs.core.first(seq__61244_61882__$1);
var children_61889 = shadow.dom.dom_node(child_struct_61888);
if(cljs.core.seq_QMARK_(children_61889)){
var seq__61314_61892 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61889));
var chunk__61316_61893 = null;
var count__61317_61894 = (0);
var i__61318_61895 = (0);
while(true){
if((i__61318_61895 < count__61317_61894)){
var child_61903 = chunk__61316_61893.cljs$core$IIndexed$_nth$arity$2(null,i__61318_61895);
if(cljs.core.truth_(child_61903)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61903);


var G__61904 = seq__61314_61892;
var G__61905 = chunk__61316_61893;
var G__61906 = count__61317_61894;
var G__61907 = (i__61318_61895 + (1));
seq__61314_61892 = G__61904;
chunk__61316_61893 = G__61905;
count__61317_61894 = G__61906;
i__61318_61895 = G__61907;
continue;
} else {
var G__61908 = seq__61314_61892;
var G__61909 = chunk__61316_61893;
var G__61910 = count__61317_61894;
var G__61911 = (i__61318_61895 + (1));
seq__61314_61892 = G__61908;
chunk__61316_61893 = G__61909;
count__61317_61894 = G__61910;
i__61318_61895 = G__61911;
continue;
}
} else {
var temp__5735__auto___61912__$1 = cljs.core.seq(seq__61314_61892);
if(temp__5735__auto___61912__$1){
var seq__61314_61914__$1 = temp__5735__auto___61912__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61314_61914__$1)){
var c__4556__auto___61915 = cljs.core.chunk_first(seq__61314_61914__$1);
var G__61916 = cljs.core.chunk_rest(seq__61314_61914__$1);
var G__61917 = c__4556__auto___61915;
var G__61918 = cljs.core.count(c__4556__auto___61915);
var G__61919 = (0);
seq__61314_61892 = G__61916;
chunk__61316_61893 = G__61917;
count__61317_61894 = G__61918;
i__61318_61895 = G__61919;
continue;
} else {
var child_61920 = cljs.core.first(seq__61314_61914__$1);
if(cljs.core.truth_(child_61920)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61920);


var G__61921 = cljs.core.next(seq__61314_61914__$1);
var G__61922 = null;
var G__61923 = (0);
var G__61924 = (0);
seq__61314_61892 = G__61921;
chunk__61316_61893 = G__61922;
count__61317_61894 = G__61923;
i__61318_61895 = G__61924;
continue;
} else {
var G__61925 = cljs.core.next(seq__61314_61914__$1);
var G__61926 = null;
var G__61927 = (0);
var G__61928 = (0);
seq__61314_61892 = G__61925;
chunk__61316_61893 = G__61926;
count__61317_61894 = G__61927;
i__61318_61895 = G__61928;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61889);
}


var G__61929 = cljs.core.next(seq__61244_61882__$1);
var G__61930 = null;
var G__61931 = (0);
var G__61932 = (0);
seq__61244_61839 = G__61929;
chunk__61245_61840 = G__61930;
count__61246_61841 = G__61931;
i__61247_61842 = G__61932;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__61343 = cljs.core.seq(node);
var chunk__61344 = null;
var count__61345 = (0);
var i__61346 = (0);
while(true){
if((i__61346 < count__61345)){
var n = chunk__61344.cljs$core$IIndexed$_nth$arity$2(null,i__61346);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61943 = seq__61343;
var G__61944 = chunk__61344;
var G__61945 = count__61345;
var G__61946 = (i__61346 + (1));
seq__61343 = G__61943;
chunk__61344 = G__61944;
count__61345 = G__61945;
i__61346 = G__61946;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61343);
if(temp__5735__auto__){
var seq__61343__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61343__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61343__$1);
var G__61947 = cljs.core.chunk_rest(seq__61343__$1);
var G__61948 = c__4556__auto__;
var G__61949 = cljs.core.count(c__4556__auto__);
var G__61950 = (0);
seq__61343 = G__61947;
chunk__61344 = G__61948;
count__61345 = G__61949;
i__61346 = G__61950;
continue;
} else {
var n = cljs.core.first(seq__61343__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61955 = cljs.core.next(seq__61343__$1);
var G__61956 = null;
var G__61957 = (0);
var G__61958 = (0);
seq__61343 = G__61955;
chunk__61344 = G__61956;
count__61345 = G__61957;
i__61346 = G__61958;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__61350 = arguments.length;
switch (G__61350) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__61353 = arguments.length;
switch (G__61353) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__61364 = arguments.length;
switch (G__61364) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61978 = arguments.length;
var i__4737__auto___61979 = (0);
while(true){
if((i__4737__auto___61979 < len__4736__auto___61978)){
args__4742__auto__.push((arguments[i__4737__auto___61979]));

var G__61983 = (i__4737__auto___61979 + (1));
i__4737__auto___61979 = G__61983;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__61389_61986 = cljs.core.seq(nodes);
var chunk__61390_61987 = null;
var count__61391_61988 = (0);
var i__61392_61989 = (0);
while(true){
if((i__61392_61989 < count__61391_61988)){
var node_61991 = chunk__61390_61987.cljs$core$IIndexed$_nth$arity$2(null,i__61392_61989);
fragment.appendChild(shadow.dom._to_dom(node_61991));


var G__61997 = seq__61389_61986;
var G__61998 = chunk__61390_61987;
var G__61999 = count__61391_61988;
var G__62000 = (i__61392_61989 + (1));
seq__61389_61986 = G__61997;
chunk__61390_61987 = G__61998;
count__61391_61988 = G__61999;
i__61392_61989 = G__62000;
continue;
} else {
var temp__5735__auto___62001 = cljs.core.seq(seq__61389_61986);
if(temp__5735__auto___62001){
var seq__61389_62008__$1 = temp__5735__auto___62001;
if(cljs.core.chunked_seq_QMARK_(seq__61389_62008__$1)){
var c__4556__auto___62009 = cljs.core.chunk_first(seq__61389_62008__$1);
var G__62010 = cljs.core.chunk_rest(seq__61389_62008__$1);
var G__62011 = c__4556__auto___62009;
var G__62012 = cljs.core.count(c__4556__auto___62009);
var G__62013 = (0);
seq__61389_61986 = G__62010;
chunk__61390_61987 = G__62011;
count__61391_61988 = G__62012;
i__61392_61989 = G__62013;
continue;
} else {
var node_62015 = cljs.core.first(seq__61389_62008__$1);
fragment.appendChild(shadow.dom._to_dom(node_62015));


var G__62017 = cljs.core.next(seq__61389_62008__$1);
var G__62018 = null;
var G__62019 = (0);
var G__62020 = (0);
seq__61389_61986 = G__62017;
chunk__61390_61987 = G__62018;
count__61391_61988 = G__62019;
i__61392_61989 = G__62020;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq61383){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61383));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__61410_62028 = cljs.core.seq(scripts);
var chunk__61411_62029 = null;
var count__61412_62030 = (0);
var i__61413_62031 = (0);
while(true){
if((i__61413_62031 < count__61412_62030)){
var vec__61423_62033 = chunk__61411_62029.cljs$core$IIndexed$_nth$arity$2(null,i__61413_62031);
var script_tag_62034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61423_62033,(0),null);
var script_body_62035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61423_62033,(1),null);
eval(script_body_62035);


var G__62036 = seq__61410_62028;
var G__62037 = chunk__61411_62029;
var G__62038 = count__61412_62030;
var G__62039 = (i__61413_62031 + (1));
seq__61410_62028 = G__62036;
chunk__61411_62029 = G__62037;
count__61412_62030 = G__62038;
i__61413_62031 = G__62039;
continue;
} else {
var temp__5735__auto___62043 = cljs.core.seq(seq__61410_62028);
if(temp__5735__auto___62043){
var seq__61410_62044__$1 = temp__5735__auto___62043;
if(cljs.core.chunked_seq_QMARK_(seq__61410_62044__$1)){
var c__4556__auto___62045 = cljs.core.chunk_first(seq__61410_62044__$1);
var G__62046 = cljs.core.chunk_rest(seq__61410_62044__$1);
var G__62047 = c__4556__auto___62045;
var G__62048 = cljs.core.count(c__4556__auto___62045);
var G__62049 = (0);
seq__61410_62028 = G__62046;
chunk__61411_62029 = G__62047;
count__61412_62030 = G__62048;
i__61413_62031 = G__62049;
continue;
} else {
var vec__61432_62050 = cljs.core.first(seq__61410_62044__$1);
var script_tag_62051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61432_62050,(0),null);
var script_body_62052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61432_62050,(1),null);
eval(script_body_62052);


var G__62053 = cljs.core.next(seq__61410_62044__$1);
var G__62054 = null;
var G__62055 = (0);
var G__62056 = (0);
seq__61410_62028 = G__62053;
chunk__61411_62029 = G__62054;
count__61412_62030 = G__62055;
i__61413_62031 = G__62056;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__61437){
var vec__61438 = p__61437;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61438,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61438,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__61454 = arguments.length;
switch (G__61454) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__61482 = cljs.core.seq(style_keys);
var chunk__61483 = null;
var count__61484 = (0);
var i__61485 = (0);
while(true){
if((i__61485 < count__61484)){
var it = chunk__61483.cljs$core$IIndexed$_nth$arity$2(null,i__61485);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62072 = seq__61482;
var G__62073 = chunk__61483;
var G__62074 = count__61484;
var G__62075 = (i__61485 + (1));
seq__61482 = G__62072;
chunk__61483 = G__62073;
count__61484 = G__62074;
i__61485 = G__62075;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61482);
if(temp__5735__auto__){
var seq__61482__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61482__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__61482__$1);
var G__62076 = cljs.core.chunk_rest(seq__61482__$1);
var G__62077 = c__4556__auto__;
var G__62078 = cljs.core.count(c__4556__auto__);
var G__62079 = (0);
seq__61482 = G__62076;
chunk__61483 = G__62077;
count__61484 = G__62078;
i__61485 = G__62079;
continue;
} else {
var it = cljs.core.first(seq__61482__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__62082 = cljs.core.next(seq__61482__$1);
var G__62083 = null;
var G__62084 = (0);
var G__62085 = (0);
seq__61482 = G__62082;
chunk__61483 = G__62083;
count__61484 = G__62084;
i__61485 = G__62085;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61493,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61508 = k61493;
var G__61508__$1 = (((G__61508 instanceof cljs.core.Keyword))?G__61508.fqn:null);
switch (G__61508__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61493,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61512){
var vec__61513 = p__61512;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61513,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61513,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61492){
var self__ = this;
var G__61492__$1 = this;
return (new cljs.core.RecordIter((0),G__61492__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61494,other61495){
var self__ = this;
var this61494__$1 = this;
return (((!((other61495 == null)))) && ((this61494__$1.constructor === other61495.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61494__$1.x,other61495.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61494__$1.y,other61495.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61494__$1.__extmap,other61495.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61492){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61522 = cljs.core.keyword_identical_QMARK_;
var expr__61523 = k__4388__auto__;
if(cljs.core.truth_((pred__61522.cljs$core$IFn$_invoke$arity$2 ? pred__61522.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__61523) : pred__61522.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__61523)))){
return (new shadow.dom.Coordinate(G__61492,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61522.cljs$core$IFn$_invoke$arity$2 ? pred__61522.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__61523) : pred__61522.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__61523)))){
return (new shadow.dom.Coordinate(self__.x,G__61492,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61492),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61492){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__61492,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__61500){
var extmap__4419__auto__ = (function (){var G__61530 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61500,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__61500)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61530);
} else {
return G__61530;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__61500),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__61500),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k61534,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__61538 = k61534;
var G__61538__$1 = (((G__61538 instanceof cljs.core.Keyword))?G__61538.fqn:null);
switch (G__61538__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61534,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__61539){
var vec__61540 = p__61539;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61540,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61540,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61533){
var self__ = this;
var G__61533__$1 = this;
return (new cljs.core.RecordIter((0),G__61533__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61535,other61536){
var self__ = this;
var this61535__$1 = this;
return (((!((other61536 == null)))) && ((this61535__$1.constructor === other61536.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61535__$1.w,other61536.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61535__$1.h,other61536.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61535__$1.__extmap,other61536.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__61533){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__61555 = cljs.core.keyword_identical_QMARK_;
var expr__61556 = k__4388__auto__;
if(cljs.core.truth_((pred__61555.cljs$core$IFn$_invoke$arity$2 ? pred__61555.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__61556) : pred__61555.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__61556)))){
return (new shadow.dom.Size(G__61533,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61555.cljs$core$IFn$_invoke$arity$2 ? pred__61555.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__61556) : pred__61555.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__61556)))){
return (new shadow.dom.Size(self__.w,G__61533,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__61533),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__61533){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__61533,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__61537){
var extmap__4419__auto__ = (function (){var G__61569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61537,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__61537)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61569);
} else {
return G__61569;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__61537),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__61537),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__62155 = (i + (1));
var G__62156 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__62155;
ret = G__62156;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61577){
var vec__61578 = p__61577;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61578,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__61582 = arguments.length;
switch (G__61582) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__62174 = ps;
var G__62175 = (i + (1));
el__$1 = G__62174;
i = G__62175;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__61604 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61604,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61604,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61604,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__61608_62181 = cljs.core.seq(props);
var chunk__61609_62182 = null;
var count__61610_62183 = (0);
var i__61611_62184 = (0);
while(true){
if((i__61611_62184 < count__61610_62183)){
var vec__61623_62188 = chunk__61609_62182.cljs$core$IIndexed$_nth$arity$2(null,i__61611_62184);
var k_62189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61623_62188,(0),null);
var v_62190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61623_62188,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_62189);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62189),v_62190);


var G__62193 = seq__61608_62181;
var G__62194 = chunk__61609_62182;
var G__62195 = count__61610_62183;
var G__62196 = (i__61611_62184 + (1));
seq__61608_62181 = G__62193;
chunk__61609_62182 = G__62194;
count__61610_62183 = G__62195;
i__61611_62184 = G__62196;
continue;
} else {
var temp__5735__auto___62198 = cljs.core.seq(seq__61608_62181);
if(temp__5735__auto___62198){
var seq__61608_62199__$1 = temp__5735__auto___62198;
if(cljs.core.chunked_seq_QMARK_(seq__61608_62199__$1)){
var c__4556__auto___62200 = cljs.core.chunk_first(seq__61608_62199__$1);
var G__62202 = cljs.core.chunk_rest(seq__61608_62199__$1);
var G__62203 = c__4556__auto___62200;
var G__62204 = cljs.core.count(c__4556__auto___62200);
var G__62205 = (0);
seq__61608_62181 = G__62202;
chunk__61609_62182 = G__62203;
count__61610_62183 = G__62204;
i__61611_62184 = G__62205;
continue;
} else {
var vec__61627_62206 = cljs.core.first(seq__61608_62199__$1);
var k_62207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61627_62206,(0),null);
var v_62208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61627_62206,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_62207);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_62207),v_62208);


var G__62210 = cljs.core.next(seq__61608_62199__$1);
var G__62211 = null;
var G__62212 = (0);
var G__62213 = (0);
seq__61608_62181 = G__62210;
chunk__61609_62182 = G__62211;
count__61610_62183 = G__62212;
i__61611_62184 = G__62213;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__61634 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61634,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61634,(1),null);
var seq__61637_62215 = cljs.core.seq(node_children);
var chunk__61639_62216 = null;
var count__61640_62217 = (0);
var i__61641_62218 = (0);
while(true){
if((i__61641_62218 < count__61640_62217)){
var child_struct_62219 = chunk__61639_62216.cljs$core$IIndexed$_nth$arity$2(null,i__61641_62218);
if((!((child_struct_62219 == null)))){
if(typeof child_struct_62219 === 'string'){
var text_62220 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62220),child_struct_62219].join(''));
} else {
var children_62221 = shadow.dom.svg_node(child_struct_62219);
if(cljs.core.seq_QMARK_(children_62221)){
var seq__61658_62225 = cljs.core.seq(children_62221);
var chunk__61660_62226 = null;
var count__61661_62227 = (0);
var i__61662_62228 = (0);
while(true){
if((i__61662_62228 < count__61661_62227)){
var child_62232 = chunk__61660_62226.cljs$core$IIndexed$_nth$arity$2(null,i__61662_62228);
if(cljs.core.truth_(child_62232)){
node.appendChild(child_62232);


var G__62233 = seq__61658_62225;
var G__62234 = chunk__61660_62226;
var G__62235 = count__61661_62227;
var G__62236 = (i__61662_62228 + (1));
seq__61658_62225 = G__62233;
chunk__61660_62226 = G__62234;
count__61661_62227 = G__62235;
i__61662_62228 = G__62236;
continue;
} else {
var G__62237 = seq__61658_62225;
var G__62238 = chunk__61660_62226;
var G__62239 = count__61661_62227;
var G__62240 = (i__61662_62228 + (1));
seq__61658_62225 = G__62237;
chunk__61660_62226 = G__62238;
count__61661_62227 = G__62239;
i__61662_62228 = G__62240;
continue;
}
} else {
var temp__5735__auto___62242 = cljs.core.seq(seq__61658_62225);
if(temp__5735__auto___62242){
var seq__61658_62243__$1 = temp__5735__auto___62242;
if(cljs.core.chunked_seq_QMARK_(seq__61658_62243__$1)){
var c__4556__auto___62244 = cljs.core.chunk_first(seq__61658_62243__$1);
var G__62245 = cljs.core.chunk_rest(seq__61658_62243__$1);
var G__62246 = c__4556__auto___62244;
var G__62247 = cljs.core.count(c__4556__auto___62244);
var G__62248 = (0);
seq__61658_62225 = G__62245;
chunk__61660_62226 = G__62246;
count__61661_62227 = G__62247;
i__61662_62228 = G__62248;
continue;
} else {
var child_62249 = cljs.core.first(seq__61658_62243__$1);
if(cljs.core.truth_(child_62249)){
node.appendChild(child_62249);


var G__62250 = cljs.core.next(seq__61658_62243__$1);
var G__62252 = null;
var G__62253 = (0);
var G__62254 = (0);
seq__61658_62225 = G__62250;
chunk__61660_62226 = G__62252;
count__61661_62227 = G__62253;
i__61662_62228 = G__62254;
continue;
} else {
var G__62258 = cljs.core.next(seq__61658_62243__$1);
var G__62259 = null;
var G__62260 = (0);
var G__62261 = (0);
seq__61658_62225 = G__62258;
chunk__61660_62226 = G__62259;
count__61661_62227 = G__62260;
i__61662_62228 = G__62261;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62221);
}
}


var G__62263 = seq__61637_62215;
var G__62264 = chunk__61639_62216;
var G__62265 = count__61640_62217;
var G__62266 = (i__61641_62218 + (1));
seq__61637_62215 = G__62263;
chunk__61639_62216 = G__62264;
count__61640_62217 = G__62265;
i__61641_62218 = G__62266;
continue;
} else {
var G__62270 = seq__61637_62215;
var G__62271 = chunk__61639_62216;
var G__62272 = count__61640_62217;
var G__62273 = (i__61641_62218 + (1));
seq__61637_62215 = G__62270;
chunk__61639_62216 = G__62271;
count__61640_62217 = G__62272;
i__61641_62218 = G__62273;
continue;
}
} else {
var temp__5735__auto___62276 = cljs.core.seq(seq__61637_62215);
if(temp__5735__auto___62276){
var seq__61637_62277__$1 = temp__5735__auto___62276;
if(cljs.core.chunked_seq_QMARK_(seq__61637_62277__$1)){
var c__4556__auto___62279 = cljs.core.chunk_first(seq__61637_62277__$1);
var G__62281 = cljs.core.chunk_rest(seq__61637_62277__$1);
var G__62282 = c__4556__auto___62279;
var G__62283 = cljs.core.count(c__4556__auto___62279);
var G__62284 = (0);
seq__61637_62215 = G__62281;
chunk__61639_62216 = G__62282;
count__61640_62217 = G__62283;
i__61641_62218 = G__62284;
continue;
} else {
var child_struct_62286 = cljs.core.first(seq__61637_62277__$1);
if((!((child_struct_62286 == null)))){
if(typeof child_struct_62286 === 'string'){
var text_62287 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_62287),child_struct_62286].join(''));
} else {
var children_62288 = shadow.dom.svg_node(child_struct_62286);
if(cljs.core.seq_QMARK_(children_62288)){
var seq__61674_62289 = cljs.core.seq(children_62288);
var chunk__61676_62290 = null;
var count__61677_62291 = (0);
var i__61678_62292 = (0);
while(true){
if((i__61678_62292 < count__61677_62291)){
var child_62295 = chunk__61676_62290.cljs$core$IIndexed$_nth$arity$2(null,i__61678_62292);
if(cljs.core.truth_(child_62295)){
node.appendChild(child_62295);


var G__62297 = seq__61674_62289;
var G__62298 = chunk__61676_62290;
var G__62299 = count__61677_62291;
var G__62300 = (i__61678_62292 + (1));
seq__61674_62289 = G__62297;
chunk__61676_62290 = G__62298;
count__61677_62291 = G__62299;
i__61678_62292 = G__62300;
continue;
} else {
var G__62301 = seq__61674_62289;
var G__62302 = chunk__61676_62290;
var G__62303 = count__61677_62291;
var G__62304 = (i__61678_62292 + (1));
seq__61674_62289 = G__62301;
chunk__61676_62290 = G__62302;
count__61677_62291 = G__62303;
i__61678_62292 = G__62304;
continue;
}
} else {
var temp__5735__auto___62305__$1 = cljs.core.seq(seq__61674_62289);
if(temp__5735__auto___62305__$1){
var seq__61674_62306__$1 = temp__5735__auto___62305__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61674_62306__$1)){
var c__4556__auto___62307 = cljs.core.chunk_first(seq__61674_62306__$1);
var G__62309 = cljs.core.chunk_rest(seq__61674_62306__$1);
var G__62310 = c__4556__auto___62307;
var G__62311 = cljs.core.count(c__4556__auto___62307);
var G__62312 = (0);
seq__61674_62289 = G__62309;
chunk__61676_62290 = G__62310;
count__61677_62291 = G__62311;
i__61678_62292 = G__62312;
continue;
} else {
var child_62314 = cljs.core.first(seq__61674_62306__$1);
if(cljs.core.truth_(child_62314)){
node.appendChild(child_62314);


var G__62315 = cljs.core.next(seq__61674_62306__$1);
var G__62316 = null;
var G__62317 = (0);
var G__62318 = (0);
seq__61674_62289 = G__62315;
chunk__61676_62290 = G__62316;
count__61677_62291 = G__62317;
i__61678_62292 = G__62318;
continue;
} else {
var G__62320 = cljs.core.next(seq__61674_62306__$1);
var G__62321 = null;
var G__62322 = (0);
var G__62323 = (0);
seq__61674_62289 = G__62320;
chunk__61676_62290 = G__62321;
count__61677_62291 = G__62322;
i__61678_62292 = G__62323;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_62288);
}
}


var G__62327 = cljs.core.next(seq__61637_62277__$1);
var G__62328 = null;
var G__62329 = (0);
var G__62330 = (0);
seq__61637_62215 = G__62327;
chunk__61639_62216 = G__62328;
count__61640_62217 = G__62329;
i__61641_62218 = G__62330;
continue;
} else {
var G__62331 = cljs.core.next(seq__61637_62277__$1);
var G__62332 = null;
var G__62333 = (0);
var G__62334 = (0);
seq__61637_62215 = G__62331;
chunk__61639_62216 = G__62332;
count__61640_62217 = G__62333;
i__61641_62218 = G__62334;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62342 = arguments.length;
var i__4737__auto___62343 = (0);
while(true){
if((i__4737__auto___62343 < len__4736__auto___62342)){
args__4742__auto__.push((arguments[i__4737__auto___62343]));

var G__62347 = (i__4737__auto___62343 + (1));
i__4737__auto___62343 = G__62347;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq61690){
var G__61691 = cljs.core.first(seq61690);
var seq61690__$1 = cljs.core.next(seq61690);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61691,seq61690__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__61696 = arguments.length;
switch (G__61696) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__58893__auto___62364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_61706){
var state_val_61707 = (state_61706[(1)]);
if((state_val_61707 === (1))){
var state_61706__$1 = state_61706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61706__$1,(2),once_or_cleanup);
} else {
if((state_val_61707 === (2))){
var inst_61703 = (state_61706[(2)]);
var inst_61704 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_61706__$1 = (function (){var statearr_61712 = state_61706;
(statearr_61712[(7)] = inst_61703);

return statearr_61712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61706__$1,inst_61704);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__58758__auto__ = null;
var shadow$dom$state_machine__58758__auto____0 = (function (){
var statearr_61713 = [null,null,null,null,null,null,null,null];
(statearr_61713[(0)] = shadow$dom$state_machine__58758__auto__);

(statearr_61713[(1)] = (1));

return statearr_61713;
});
var shadow$dom$state_machine__58758__auto____1 = (function (state_61706){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_61706);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e61715){var ex__58761__auto__ = e61715;
var statearr_61716_62369 = state_61706;
(statearr_61716_62369[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_61706[(4)]))){
var statearr_61717_62370 = state_61706;
(statearr_61717_62370[(1)] = cljs.core.first((state_61706[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62376 = state_61706;
state_61706 = G__62376;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
shadow$dom$state_machine__58758__auto__ = function(state_61706){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__58758__auto____0.call(this);
case 1:
return shadow$dom$state_machine__58758__auto____1.call(this,state_61706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__58758__auto____0;
shadow$dom$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__58758__auto____1;
return shadow$dom$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_61719 = f__58894__auto__();
(statearr_61719[(6)] = c__58893__auto___62364);

return statearr_61719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
