goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__64349){
var map__64350 = p__64349;
var map__64350__$1 = (((((!((map__64350 == null))))?(((((map__64350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64350):map__64350);
var m = map__64350__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__64352_64565 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64353_64566 = null;
var count__64354_64567 = (0);
var i__64355_64568 = (0);
while(true){
if((i__64355_64568 < count__64354_64567)){
var f_64569 = chunk__64353_64566.cljs$core$IIndexed$_nth$arity$2(null,i__64355_64568);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_64569], 0));


var G__64570 = seq__64352_64565;
var G__64571 = chunk__64353_64566;
var G__64572 = count__64354_64567;
var G__64573 = (i__64355_64568 + (1));
seq__64352_64565 = G__64570;
chunk__64353_64566 = G__64571;
count__64354_64567 = G__64572;
i__64355_64568 = G__64573;
continue;
} else {
var temp__5735__auto___64574 = cljs.core.seq(seq__64352_64565);
if(temp__5735__auto___64574){
var seq__64352_64575__$1 = temp__5735__auto___64574;
if(cljs.core.chunked_seq_QMARK_(seq__64352_64575__$1)){
var c__4556__auto___64576 = cljs.core.chunk_first(seq__64352_64575__$1);
var G__64577 = cljs.core.chunk_rest(seq__64352_64575__$1);
var G__64578 = c__4556__auto___64576;
var G__64579 = cljs.core.count(c__4556__auto___64576);
var G__64580 = (0);
seq__64352_64565 = G__64577;
chunk__64353_64566 = G__64578;
count__64354_64567 = G__64579;
i__64355_64568 = G__64580;
continue;
} else {
var f_64581 = cljs.core.first(seq__64352_64575__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_64581], 0));


var G__64582 = cljs.core.next(seq__64352_64575__$1);
var G__64583 = null;
var G__64584 = (0);
var G__64585 = (0);
seq__64352_64565 = G__64582;
chunk__64353_64566 = G__64583;
count__64354_64567 = G__64584;
i__64355_64568 = G__64585;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_64586 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_64586], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_64586)))?cljs.core.second(arglists_64586):arglists_64586)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__64360_64588 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64361_64589 = null;
var count__64362_64590 = (0);
var i__64363_64591 = (0);
while(true){
if((i__64363_64591 < count__64362_64590)){
var vec__64377_64592 = chunk__64361_64589.cljs$core$IIndexed$_nth$arity$2(null,i__64363_64591);
var name_64593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64377_64592,(0),null);
var map__64380_64594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64377_64592,(1),null);
var map__64380_64595__$1 = (((((!((map__64380_64594 == null))))?(((((map__64380_64594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64380_64594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64380_64594):map__64380_64594);
var doc_64596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64380_64595__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64380_64595__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_64593], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_64597], 0));

if(cljs.core.truth_(doc_64596)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_64596], 0));
} else {
}


var G__64598 = seq__64360_64588;
var G__64599 = chunk__64361_64589;
var G__64600 = count__64362_64590;
var G__64601 = (i__64363_64591 + (1));
seq__64360_64588 = G__64598;
chunk__64361_64589 = G__64599;
count__64362_64590 = G__64600;
i__64363_64591 = G__64601;
continue;
} else {
var temp__5735__auto___64602 = cljs.core.seq(seq__64360_64588);
if(temp__5735__auto___64602){
var seq__64360_64603__$1 = temp__5735__auto___64602;
if(cljs.core.chunked_seq_QMARK_(seq__64360_64603__$1)){
var c__4556__auto___64604 = cljs.core.chunk_first(seq__64360_64603__$1);
var G__64605 = cljs.core.chunk_rest(seq__64360_64603__$1);
var G__64606 = c__4556__auto___64604;
var G__64607 = cljs.core.count(c__4556__auto___64604);
var G__64608 = (0);
seq__64360_64588 = G__64605;
chunk__64361_64589 = G__64606;
count__64362_64590 = G__64607;
i__64363_64591 = G__64608;
continue;
} else {
var vec__64382_64609 = cljs.core.first(seq__64360_64603__$1);
var name_64610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64382_64609,(0),null);
var map__64385_64611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64382_64609,(1),null);
var map__64385_64612__$1 = (((((!((map__64385_64611 == null))))?(((((map__64385_64611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64385_64611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64385_64611):map__64385_64611);
var doc_64613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64385_64612__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64385_64612__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_64610], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_64614], 0));

if(cljs.core.truth_(doc_64613)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_64613], 0));
} else {
}


var G__64615 = cljs.core.next(seq__64360_64603__$1);
var G__64616 = null;
var G__64617 = (0);
var G__64618 = (0);
seq__64360_64588 = G__64615;
chunk__64361_64589 = G__64616;
count__64362_64590 = G__64617;
i__64363_64591 = G__64618;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__64389 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__64390 = null;
var count__64391 = (0);
var i__64392 = (0);
while(true){
if((i__64392 < count__64391)){
var role = chunk__64390.cljs$core$IIndexed$_nth$arity$2(null,i__64392);
var temp__5735__auto___64619__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___64619__$1)){
var spec_64620 = temp__5735__auto___64619__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_64620)], 0));
} else {
}


var G__64621 = seq__64389;
var G__64622 = chunk__64390;
var G__64623 = count__64391;
var G__64624 = (i__64392 + (1));
seq__64389 = G__64621;
chunk__64390 = G__64622;
count__64391 = G__64623;
i__64392 = G__64624;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__64389);
if(temp__5735__auto____$1){
var seq__64389__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__64389__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64389__$1);
var G__64625 = cljs.core.chunk_rest(seq__64389__$1);
var G__64626 = c__4556__auto__;
var G__64627 = cljs.core.count(c__4556__auto__);
var G__64628 = (0);
seq__64389 = G__64625;
chunk__64390 = G__64626;
count__64391 = G__64627;
i__64392 = G__64628;
continue;
} else {
var role = cljs.core.first(seq__64389__$1);
var temp__5735__auto___64629__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___64629__$2)){
var spec_64630 = temp__5735__auto___64629__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_64630)], 0));
} else {
}


var G__64631 = cljs.core.next(seq__64389__$1);
var G__64632 = null;
var G__64633 = (0);
var G__64634 = (0);
seq__64389 = G__64631;
chunk__64390 = G__64632;
count__64391 = G__64633;
i__64392 = G__64634;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__64635 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__64636 = cljs.core.ex_cause(t);
via = G__64635;
t = G__64636;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__64398 = datafied_throwable;
var map__64398__$1 = (((((!((map__64398 == null))))?(((((map__64398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64398):map__64398);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64398__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64398__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__64399 = cljs.core.last(via);
var map__64399__$1 = (((((!((map__64399 == null))))?(((((map__64399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64399):map__64399);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64399__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64399__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64399__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__64400 = data;
var map__64400__$1 = (((((!((map__64400 == null))))?(((((map__64400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64400):map__64400);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64400__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64400__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64400__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__64401 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__64401__$1 = (((((!((map__64401 == null))))?(((((map__64401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64401):map__64401);
var top_data = map__64401__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64401__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__64430 = phase;
var G__64430__$1 = (((G__64430 instanceof cljs.core.Keyword))?G__64430.fqn:null);
switch (G__64430__$1) {
case "read-source":
var map__64431 = data;
var map__64431__$1 = (((((!((map__64431 == null))))?(((((map__64431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64431):map__64431);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64431__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__64447 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__64447__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64447,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__64447);
var G__64447__$2 = (cljs.core.truth_((function (){var fexpr__64448 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__64448.cljs$core$IFn$_invoke$arity$1 ? fexpr__64448.cljs$core$IFn$_invoke$arity$1(source) : fexpr__64448.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64447__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__64447__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64447__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__64447__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__64458 = top_data;
var G__64458__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64458,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__64458);
var G__64458__$2 = (cljs.core.truth_((function (){var fexpr__64471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__64471.cljs$core$IFn$_invoke$arity$1 ? fexpr__64471.cljs$core$IFn$_invoke$arity$1(source) : fexpr__64471.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64458__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__64458__$1);
var G__64458__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64458__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__64458__$2);
var G__64458__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64458__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__64458__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64458__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__64458__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__64475 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64475,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64475,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64475,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64475,(3),null);
var G__64482 = top_data;
var G__64482__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64482,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__64482);
var G__64482__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__64482__$1);
var G__64482__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64482__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__64482__$2);
var G__64482__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64482__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__64482__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64482__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__64482__$4;
}

break;
case "execution":
var vec__64486 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64486,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64486,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64486,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64486,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__64397_SHARP_){
var or__4126__auto__ = (p1__64397_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__64504 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__64504.cljs$core$IFn$_invoke$arity$1 ? fexpr__64504.cljs$core$IFn$_invoke$arity$1(p1__64397_SHARP_) : fexpr__64504.call(null,p1__64397_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__64505 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__64505__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64505,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__64505);
var G__64505__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64505__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__64505__$1);
var G__64505__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64505__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__64505__$2);
var G__64505__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64505__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__64505__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64505__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__64505__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64430__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__64516){
var map__64521 = p__64516;
var map__64521__$1 = (((((!((map__64521 == null))))?(((((map__64521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64521):map__64521);
var triage_data = map__64521__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__64523 = phase;
var G__64523__$1 = (((G__64523 instanceof cljs.core.Keyword))?G__64523.fqn:null);
switch (G__64523__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__64524 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__64525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64526 = loc;
var G__64527 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64529_64648 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64530_64649 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64531_64650 = true;
var _STAR_print_fn_STAR__temp_val__64532_64651 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64531_64650);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64532_64651);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64514_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__64514_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64530_64649);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64529_64648);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__64524,G__64525,G__64526,G__64527) : format.call(null,G__64524,G__64525,G__64526,G__64527));

break;
case "macroexpansion":
var G__64534 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__64535 = cause_type;
var G__64536 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64537 = loc;
var G__64538 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__64534,G__64535,G__64536,G__64537,G__64538) : format.call(null,G__64534,G__64535,G__64536,G__64537,G__64538));

break;
case "compile-syntax-check":
var G__64539 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__64540 = cause_type;
var G__64541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64542 = loc;
var G__64543 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__64539,G__64540,G__64541,G__64542,G__64543) : format.call(null,G__64539,G__64540,G__64541,G__64542,G__64543));

break;
case "compilation":
var G__64544 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__64545 = cause_type;
var G__64546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64547 = loc;
var G__64548 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__64544,G__64545,G__64546,G__64547,G__64548) : format.call(null,G__64544,G__64545,G__64546,G__64547,G__64548));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__64549 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__64550 = symbol;
var G__64551 = loc;
var G__64552 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__64553_64652 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__64554_64653 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__64555_64654 = true;
var _STAR_print_fn_STAR__temp_val__64556_64655 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__64555_64654);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__64556_64655);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64515_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__64515_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__64554_64653);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__64553_64652);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__64549,G__64550,G__64551,G__64552) : format.call(null,G__64549,G__64550,G__64551,G__64552));
} else {
var G__64558 = "Execution error%s at %s(%s).\n%s\n";
var G__64559 = cause_type;
var G__64560 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__64561 = loc;
var G__64562 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__64558,G__64559,G__64560,G__64561,G__64562) : format.call(null,G__64558,G__64559,G__64560,G__64561,G__64562));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64523__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
