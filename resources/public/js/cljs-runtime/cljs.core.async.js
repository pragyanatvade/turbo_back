goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__59013 = arguments.length;
switch (G__59013) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59018 = (function (f,blockable,meta59020){
this.f = f;
this.blockable = blockable;
this.meta59020 = meta59020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59021,meta59020__$1){
var self__ = this;
var _59021__$1 = this;
return (new cljs.core.async.t_cljs$core$async59018(self__.f,self__.blockable,meta59020__$1));
}));

(cljs.core.async.t_cljs$core$async59018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59021){
var self__ = this;
var _59021__$1 = this;
return self__.meta59020;
}));

(cljs.core.async.t_cljs$core$async59018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async59018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async59018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta59020","meta59020",-289390769,null)], null);
}));

(cljs.core.async.t_cljs$core$async59018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59018");

(cljs.core.async.t_cljs$core$async59018.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59018.
 */
cljs.core.async.__GT_t_cljs$core$async59018 = (function cljs$core$async$__GT_t_cljs$core$async59018(f__$1,blockable__$1,meta59020){
return (new cljs.core.async.t_cljs$core$async59018(f__$1,blockable__$1,meta59020));
});

}

return (new cljs.core.async.t_cljs$core$async59018(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__59024 = arguments.length;
switch (G__59024) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__59028 = arguments.length;
switch (G__59028) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__59043 = arguments.length;
switch (G__59043) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_61016 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_61016) : fn1.call(null,val_61016));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_61016) : fn1.call(null,val_61016));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__59071 = arguments.length;
switch (G__59071) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___61018 = n;
var x_61019 = (0);
while(true){
if((x_61019 < n__4613__auto___61018)){
(a[x_61019] = x_61019);

var G__61020 = (x_61019 + (1));
x_61019 = G__61020;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59093 = (function (flag,meta59094){
this.flag = flag;
this.meta59094 = meta59094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59095,meta59094__$1){
var self__ = this;
var _59095__$1 = this;
return (new cljs.core.async.t_cljs$core$async59093(self__.flag,meta59094__$1));
}));

(cljs.core.async.t_cljs$core$async59093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59095){
var self__ = this;
var _59095__$1 = this;
return self__.meta59094;
}));

(cljs.core.async.t_cljs$core$async59093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async59093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async59093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta59094","meta59094",487835547,null)], null);
}));

(cljs.core.async.t_cljs$core$async59093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59093");

(cljs.core.async.t_cljs$core$async59093.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59093.
 */
cljs.core.async.__GT_t_cljs$core$async59093 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async59093(flag__$1,meta59094){
return (new cljs.core.async.t_cljs$core$async59093(flag__$1,meta59094));
});

}

return (new cljs.core.async.t_cljs$core$async59093(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59127 = (function (flag,cb,meta59128){
this.flag = flag;
this.cb = cb;
this.meta59128 = meta59128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59129,meta59128__$1){
var self__ = this;
var _59129__$1 = this;
return (new cljs.core.async.t_cljs$core$async59127(self__.flag,self__.cb,meta59128__$1));
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59129){
var self__ = this;
var _59129__$1 = this;
return self__.meta59128;
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async59127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta59128","meta59128",-1023034903,null)], null);
}));

(cljs.core.async.t_cljs$core$async59127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59127");

(cljs.core.async.t_cljs$core$async59127.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59127.
 */
cljs.core.async.__GT_t_cljs$core$async59127 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async59127(flag__$1,cb__$1,meta59128){
return (new cljs.core.async.t_cljs$core$async59127(flag__$1,cb__$1,meta59128));
});

}

return (new cljs.core.async.t_cljs$core$async59127(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59150_SHARP_){
var G__59157 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59150_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__59157) : fret.call(null,G__59157));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59151_SHARP_){
var G__59159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59151_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__59159) : fret.call(null,G__59159));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__61023 = (i + (1));
i = G__61023;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61026 = arguments.length;
var i__4737__auto___61027 = (0);
while(true){
if((i__4737__auto___61027 < len__4736__auto___61026)){
args__4742__auto__.push((arguments[i__4737__auto___61027]));

var G__61028 = (i__4737__auto___61027 + (1));
i__4737__auto___61027 = G__61028;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59174){
var map__59175 = p__59174;
var map__59175__$1 = (((((!((map__59175 == null))))?(((((map__59175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59175):map__59175);
var opts = map__59175__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59169){
var G__59170 = cljs.core.first(seq59169);
var seq59169__$1 = cljs.core.next(seq59169);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59170,seq59169__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__59187 = arguments.length;
switch (G__59187) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__58893__auto___61034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59239){
var state_val_59243 = (state_59239[(1)]);
if((state_val_59243 === (7))){
var inst_59228 = (state_59239[(2)]);
var state_59239__$1 = state_59239;
var statearr_59244_61035 = state_59239__$1;
(statearr_59244_61035[(2)] = inst_59228);

(statearr_59244_61035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (1))){
var state_59239__$1 = state_59239;
var statearr_59245_61036 = state_59239__$1;
(statearr_59245_61036[(2)] = null);

(statearr_59245_61036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (4))){
var inst_59200 = (state_59239[(7)]);
var inst_59200__$1 = (state_59239[(2)]);
var inst_59202 = (inst_59200__$1 == null);
var state_59239__$1 = (function (){var statearr_59249 = state_59239;
(statearr_59249[(7)] = inst_59200__$1);

return statearr_59249;
})();
if(cljs.core.truth_(inst_59202)){
var statearr_59250_61037 = state_59239__$1;
(statearr_59250_61037[(1)] = (5));

} else {
var statearr_59251_61038 = state_59239__$1;
(statearr_59251_61038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (13))){
var state_59239__$1 = state_59239;
var statearr_59252_61039 = state_59239__$1;
(statearr_59252_61039[(2)] = null);

(statearr_59252_61039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (6))){
var inst_59200 = (state_59239[(7)]);
var state_59239__$1 = state_59239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59239__$1,(11),to,inst_59200);
} else {
if((state_val_59243 === (3))){
var inst_59233 = (state_59239[(2)]);
var state_59239__$1 = state_59239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59239__$1,inst_59233);
} else {
if((state_val_59243 === (12))){
var state_59239__$1 = state_59239;
var statearr_59256_61042 = state_59239__$1;
(statearr_59256_61042[(2)] = null);

(statearr_59256_61042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (2))){
var state_59239__$1 = state_59239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59239__$1,(4),from);
} else {
if((state_val_59243 === (11))){
var inst_59221 = (state_59239[(2)]);
var state_59239__$1 = state_59239;
if(cljs.core.truth_(inst_59221)){
var statearr_59257_61043 = state_59239__$1;
(statearr_59257_61043[(1)] = (12));

} else {
var statearr_59258_61044 = state_59239__$1;
(statearr_59258_61044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (9))){
var state_59239__$1 = state_59239;
var statearr_59259_61045 = state_59239__$1;
(statearr_59259_61045[(2)] = null);

(statearr_59259_61045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (5))){
var state_59239__$1 = state_59239;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59260_61046 = state_59239__$1;
(statearr_59260_61046[(1)] = (8));

} else {
var statearr_59261_61047 = state_59239__$1;
(statearr_59261_61047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (14))){
var inst_59226 = (state_59239[(2)]);
var state_59239__$1 = state_59239;
var statearr_59263_61049 = state_59239__$1;
(statearr_59263_61049[(2)] = inst_59226);

(statearr_59263_61049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (10))){
var inst_59218 = (state_59239[(2)]);
var state_59239__$1 = state_59239;
var statearr_59265_61051 = state_59239__$1;
(statearr_59265_61051[(2)] = inst_59218);

(statearr_59265_61051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59243 === (8))){
var inst_59208 = cljs.core.async.close_BANG_(to);
var state_59239__$1 = state_59239;
var statearr_59266_61052 = state_59239__$1;
(statearr_59266_61052[(2)] = inst_59208);

(statearr_59266_61052[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_59267 = [null,null,null,null,null,null,null,null];
(statearr_59267[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_59267[(1)] = (1));

return statearr_59267;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_59239){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59239);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59268){var ex__58761__auto__ = e59268;
var statearr_59269_61053 = state_59239;
(statearr_59269_61053[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59239[(4)]))){
var statearr_59270_61054 = state_59239;
(statearr_59270_61054[(1)] = cljs.core.first((state_59239[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61055 = state_59239;
state_59239 = G__61055;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_59239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_59239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59271 = f__58894__auto__();
(statearr_59271[(6)] = c__58893__auto___61034);

return statearr_59271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__59272){
var vec__59273 = p__59272;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59273,(1),null);
var job = vec__59273;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__58893__auto___61058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59280){
var state_val_59281 = (state_59280[(1)]);
if((state_val_59281 === (1))){
var state_59280__$1 = state_59280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59280__$1,(2),res,v);
} else {
if((state_val_59281 === (2))){
var inst_59277 = (state_59280[(2)]);
var inst_59278 = cljs.core.async.close_BANG_(res);
var state_59280__$1 = (function (){var statearr_59283 = state_59280;
(statearr_59283[(7)] = inst_59277);

return statearr_59283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59280__$1,inst_59278);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0 = (function (){
var statearr_59284 = [null,null,null,null,null,null,null,null];
(statearr_59284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__);

(statearr_59284[(1)] = (1));

return statearr_59284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1 = (function (state_59280){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59280);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59285){var ex__58761__auto__ = e59285;
var statearr_59286_61059 = state_59280;
(statearr_59286_61059[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59280[(4)]))){
var statearr_59287_61060 = state_59280;
(statearr_59287_61060[(1)] = cljs.core.first((state_59280[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61061 = state_59280;
state_59280 = G__61061;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = function(state_59280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1.call(this,state_59280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59288 = f__58894__auto__();
(statearr_59288[(6)] = c__58893__auto___61058);

return statearr_59288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__59289){
var vec__59290 = p__59289;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59290,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59290,(1),null);
var job = vec__59290;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___61064 = n;
var __61065 = (0);
while(true){
if((__61065 < n__4613__auto___61064)){
var G__59293_61066 = type;
var G__59293_61067__$1 = (((G__59293_61066 instanceof cljs.core.Keyword))?G__59293_61066.fqn:null);
switch (G__59293_61067__$1) {
case "compute":
var c__58893__auto___61069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61065,c__58893__auto___61069,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async){
return (function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = ((function (__61065,c__58893__auto___61069,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async){
return (function (state_59306){
var state_val_59307 = (state_59306[(1)]);
if((state_val_59307 === (1))){
var state_59306__$1 = state_59306;
var statearr_59308_61070 = state_59306__$1;
(statearr_59308_61070[(2)] = null);

(statearr_59308_61070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (2))){
var state_59306__$1 = state_59306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59306__$1,(4),jobs);
} else {
if((state_val_59307 === (3))){
var inst_59304 = (state_59306[(2)]);
var state_59306__$1 = state_59306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59306__$1,inst_59304);
} else {
if((state_val_59307 === (4))){
var inst_59296 = (state_59306[(2)]);
var inst_59297 = process(inst_59296);
var state_59306__$1 = state_59306;
if(cljs.core.truth_(inst_59297)){
var statearr_59309_61071 = state_59306__$1;
(statearr_59309_61071[(1)] = (5));

} else {
var statearr_59310_61072 = state_59306__$1;
(statearr_59310_61072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (5))){
var state_59306__$1 = state_59306;
var statearr_59311_61073 = state_59306__$1;
(statearr_59311_61073[(2)] = null);

(statearr_59311_61073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (6))){
var state_59306__$1 = state_59306;
var statearr_59312_61074 = state_59306__$1;
(statearr_59312_61074[(2)] = null);

(statearr_59312_61074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59307 === (7))){
var inst_59302 = (state_59306[(2)]);
var state_59306__$1 = state_59306;
var statearr_59313_61076 = state_59306__$1;
(statearr_59313_61076[(2)] = inst_59302);

(statearr_59313_61076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__61065,c__58893__auto___61069,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async))
;
return ((function (__61065,switch__58757__auto__,c__58893__auto___61069,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0 = (function (){
var statearr_59319 = [null,null,null,null,null,null,null];
(statearr_59319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__);

(statearr_59319[(1)] = (1));

return statearr_59319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1 = (function (state_59306){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59306);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59327){var ex__58761__auto__ = e59327;
var statearr_59332_61081 = state_59306;
(statearr_59332_61081[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59306[(4)]))){
var statearr_59338_61082 = state_59306;
(statearr_59338_61082[(1)] = cljs.core.first((state_59306[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61083 = state_59306;
state_59306 = G__61083;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = function(state_59306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1.call(this,state_59306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__;
})()
;})(__61065,switch__58757__auto__,c__58893__auto___61069,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async))
})();
var state__58895__auto__ = (function (){var statearr_59350 = f__58894__auto__();
(statearr_59350[(6)] = c__58893__auto___61069);

return statearr_59350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
});})(__61065,c__58893__auto___61069,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async))
);


break;
case "async":
var c__58893__auto___61085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61065,c__58893__auto___61085,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async){
return (function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = ((function (__61065,c__58893__auto___61085,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async){
return (function (state_59377){
var state_val_59378 = (state_59377[(1)]);
if((state_val_59378 === (1))){
var state_59377__$1 = state_59377;
var statearr_59380_61090 = state_59377__$1;
(statearr_59380_61090[(2)] = null);

(statearr_59380_61090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59378 === (2))){
var state_59377__$1 = state_59377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59377__$1,(4),jobs);
} else {
if((state_val_59378 === (3))){
var inst_59375 = (state_59377[(2)]);
var state_59377__$1 = state_59377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59377__$1,inst_59375);
} else {
if((state_val_59378 === (4))){
var inst_59367 = (state_59377[(2)]);
var inst_59368 = async(inst_59367);
var state_59377__$1 = state_59377;
if(cljs.core.truth_(inst_59368)){
var statearr_59381_61092 = state_59377__$1;
(statearr_59381_61092[(1)] = (5));

} else {
var statearr_59382_61093 = state_59377__$1;
(statearr_59382_61093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59378 === (5))){
var state_59377__$1 = state_59377;
var statearr_59383_61094 = state_59377__$1;
(statearr_59383_61094[(2)] = null);

(statearr_59383_61094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59378 === (6))){
var state_59377__$1 = state_59377;
var statearr_59384_61095 = state_59377__$1;
(statearr_59384_61095[(2)] = null);

(statearr_59384_61095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59378 === (7))){
var inst_59373 = (state_59377[(2)]);
var state_59377__$1 = state_59377;
var statearr_59385_61097 = state_59377__$1;
(statearr_59385_61097[(2)] = inst_59373);

(statearr_59385_61097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__61065,c__58893__auto___61085,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async))
;
return ((function (__61065,switch__58757__auto__,c__58893__auto___61085,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0 = (function (){
var statearr_59387 = [null,null,null,null,null,null,null];
(statearr_59387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__);

(statearr_59387[(1)] = (1));

return statearr_59387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1 = (function (state_59377){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59377);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59388){var ex__58761__auto__ = e59388;
var statearr_59389_61101 = state_59377;
(statearr_59389_61101[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59377[(4)]))){
var statearr_59390_61102 = state_59377;
(statearr_59390_61102[(1)] = cljs.core.first((state_59377[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61103 = state_59377;
state_59377 = G__61103;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = function(state_59377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1.call(this,state_59377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__;
})()
;})(__61065,switch__58757__auto__,c__58893__auto___61085,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async))
})();
var state__58895__auto__ = (function (){var statearr_59391 = f__58894__auto__();
(statearr_59391[(6)] = c__58893__auto___61085);

return statearr_59391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
});})(__61065,c__58893__auto___61085,G__59293_61066,G__59293_61067__$1,n__4613__auto___61064,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59293_61067__$1)].join('')));

}

var G__61104 = (__61065 + (1));
__61065 = G__61104;
continue;
} else {
}
break;
}

var c__58893__auto___61105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59413){
var state_val_59414 = (state_59413[(1)]);
if((state_val_59414 === (7))){
var inst_59409 = (state_59413[(2)]);
var state_59413__$1 = state_59413;
var statearr_59415_61108 = state_59413__$1;
(statearr_59415_61108[(2)] = inst_59409);

(statearr_59415_61108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59414 === (1))){
var state_59413__$1 = state_59413;
var statearr_59416_61109 = state_59413__$1;
(statearr_59416_61109[(2)] = null);

(statearr_59416_61109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59414 === (4))){
var inst_59394 = (state_59413[(7)]);
var inst_59394__$1 = (state_59413[(2)]);
var inst_59395 = (inst_59394__$1 == null);
var state_59413__$1 = (function (){var statearr_59417 = state_59413;
(statearr_59417[(7)] = inst_59394__$1);

return statearr_59417;
})();
if(cljs.core.truth_(inst_59395)){
var statearr_59418_61110 = state_59413__$1;
(statearr_59418_61110[(1)] = (5));

} else {
var statearr_59419_61111 = state_59413__$1;
(statearr_59419_61111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59414 === (6))){
var inst_59399 = (state_59413[(8)]);
var inst_59394 = (state_59413[(7)]);
var inst_59399__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_59400 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59401 = [inst_59394,inst_59399__$1];
var inst_59402 = (new cljs.core.PersistentVector(null,2,(5),inst_59400,inst_59401,null));
var state_59413__$1 = (function (){var statearr_59420 = state_59413;
(statearr_59420[(8)] = inst_59399__$1);

return statearr_59420;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59413__$1,(8),jobs,inst_59402);
} else {
if((state_val_59414 === (3))){
var inst_59411 = (state_59413[(2)]);
var state_59413__$1 = state_59413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59413__$1,inst_59411);
} else {
if((state_val_59414 === (2))){
var state_59413__$1 = state_59413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59413__$1,(4),from);
} else {
if((state_val_59414 === (9))){
var inst_59406 = (state_59413[(2)]);
var state_59413__$1 = (function (){var statearr_59421 = state_59413;
(statearr_59421[(9)] = inst_59406);

return statearr_59421;
})();
var statearr_59422_61112 = state_59413__$1;
(statearr_59422_61112[(2)] = null);

(statearr_59422_61112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59414 === (5))){
var inst_59397 = cljs.core.async.close_BANG_(jobs);
var state_59413__$1 = state_59413;
var statearr_59423_61117 = state_59413__$1;
(statearr_59423_61117[(2)] = inst_59397);

(statearr_59423_61117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59414 === (8))){
var inst_59399 = (state_59413[(8)]);
var inst_59404 = (state_59413[(2)]);
var state_59413__$1 = (function (){var statearr_59424 = state_59413;
(statearr_59424[(10)] = inst_59404);

return statearr_59424;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59413__$1,(9),results,inst_59399);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0 = (function (){
var statearr_59425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__);

(statearr_59425[(1)] = (1));

return statearr_59425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1 = (function (state_59413){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59413);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59426){var ex__58761__auto__ = e59426;
var statearr_59427_61130 = state_59413;
(statearr_59427_61130[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59413[(4)]))){
var statearr_59428_61131 = state_59413;
(statearr_59428_61131[(1)] = cljs.core.first((state_59413[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61135 = state_59413;
state_59413 = G__61135;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = function(state_59413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1.call(this,state_59413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59429 = f__58894__auto__();
(statearr_59429[(6)] = c__58893__auto___61105);

return statearr_59429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


var c__58893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59467){
var state_val_59468 = (state_59467[(1)]);
if((state_val_59468 === (7))){
var inst_59463 = (state_59467[(2)]);
var state_59467__$1 = state_59467;
var statearr_59469_61136 = state_59467__$1;
(statearr_59469_61136[(2)] = inst_59463);

(statearr_59469_61136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (20))){
var state_59467__$1 = state_59467;
var statearr_59470_61137 = state_59467__$1;
(statearr_59470_61137[(2)] = null);

(statearr_59470_61137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (1))){
var state_59467__$1 = state_59467;
var statearr_59471_61142 = state_59467__$1;
(statearr_59471_61142[(2)] = null);

(statearr_59471_61142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (4))){
var inst_59432 = (state_59467[(7)]);
var inst_59432__$1 = (state_59467[(2)]);
var inst_59433 = (inst_59432__$1 == null);
var state_59467__$1 = (function (){var statearr_59472 = state_59467;
(statearr_59472[(7)] = inst_59432__$1);

return statearr_59472;
})();
if(cljs.core.truth_(inst_59433)){
var statearr_59473_61146 = state_59467__$1;
(statearr_59473_61146[(1)] = (5));

} else {
var statearr_59474_61147 = state_59467__$1;
(statearr_59474_61147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (15))){
var inst_59445 = (state_59467[(8)]);
var state_59467__$1 = state_59467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59467__$1,(18),to,inst_59445);
} else {
if((state_val_59468 === (21))){
var inst_59458 = (state_59467[(2)]);
var state_59467__$1 = state_59467;
var statearr_59475_61149 = state_59467__$1;
(statearr_59475_61149[(2)] = inst_59458);

(statearr_59475_61149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (13))){
var inst_59460 = (state_59467[(2)]);
var state_59467__$1 = (function (){var statearr_59476 = state_59467;
(statearr_59476[(9)] = inst_59460);

return statearr_59476;
})();
var statearr_59477_61150 = state_59467__$1;
(statearr_59477_61150[(2)] = null);

(statearr_59477_61150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (6))){
var inst_59432 = (state_59467[(7)]);
var state_59467__$1 = state_59467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59467__$1,(11),inst_59432);
} else {
if((state_val_59468 === (17))){
var inst_59453 = (state_59467[(2)]);
var state_59467__$1 = state_59467;
if(cljs.core.truth_(inst_59453)){
var statearr_59478_61154 = state_59467__$1;
(statearr_59478_61154[(1)] = (19));

} else {
var statearr_59479_61155 = state_59467__$1;
(statearr_59479_61155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (3))){
var inst_59465 = (state_59467[(2)]);
var state_59467__$1 = state_59467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59467__$1,inst_59465);
} else {
if((state_val_59468 === (12))){
var inst_59442 = (state_59467[(10)]);
var state_59467__$1 = state_59467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59467__$1,(14),inst_59442);
} else {
if((state_val_59468 === (2))){
var state_59467__$1 = state_59467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59467__$1,(4),results);
} else {
if((state_val_59468 === (19))){
var state_59467__$1 = state_59467;
var statearr_59480_61159 = state_59467__$1;
(statearr_59480_61159[(2)] = null);

(statearr_59480_61159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (11))){
var inst_59442 = (state_59467[(2)]);
var state_59467__$1 = (function (){var statearr_59481 = state_59467;
(statearr_59481[(10)] = inst_59442);

return statearr_59481;
})();
var statearr_59482_61160 = state_59467__$1;
(statearr_59482_61160[(2)] = null);

(statearr_59482_61160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (9))){
var state_59467__$1 = state_59467;
var statearr_59483_61164 = state_59467__$1;
(statearr_59483_61164[(2)] = null);

(statearr_59483_61164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (5))){
var state_59467__$1 = state_59467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59484_61165 = state_59467__$1;
(statearr_59484_61165[(1)] = (8));

} else {
var statearr_59485_61166 = state_59467__$1;
(statearr_59485_61166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (14))){
var inst_59445 = (state_59467[(8)]);
var inst_59445__$1 = (state_59467[(2)]);
var inst_59446 = (inst_59445__$1 == null);
var inst_59447 = cljs.core.not(inst_59446);
var state_59467__$1 = (function (){var statearr_59486 = state_59467;
(statearr_59486[(8)] = inst_59445__$1);

return statearr_59486;
})();
if(inst_59447){
var statearr_59487_61167 = state_59467__$1;
(statearr_59487_61167[(1)] = (15));

} else {
var statearr_59488_61168 = state_59467__$1;
(statearr_59488_61168[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (16))){
var state_59467__$1 = state_59467;
var statearr_59489_61170 = state_59467__$1;
(statearr_59489_61170[(2)] = false);

(statearr_59489_61170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (10))){
var inst_59439 = (state_59467[(2)]);
var state_59467__$1 = state_59467;
var statearr_59490_61171 = state_59467__$1;
(statearr_59490_61171[(2)] = inst_59439);

(statearr_59490_61171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (18))){
var inst_59450 = (state_59467[(2)]);
var state_59467__$1 = state_59467;
var statearr_59491_61172 = state_59467__$1;
(statearr_59491_61172[(2)] = inst_59450);

(statearr_59491_61172[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59468 === (8))){
var inst_59436 = cljs.core.async.close_BANG_(to);
var state_59467__$1 = state_59467;
var statearr_59492_61173 = state_59467__$1;
(statearr_59492_61173[(2)] = inst_59436);

(statearr_59492_61173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0 = (function (){
var statearr_59493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__);

(statearr_59493[(1)] = (1));

return statearr_59493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1 = (function (state_59467){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59467);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59494){var ex__58761__auto__ = e59494;
var statearr_59495_61175 = state_59467;
(statearr_59495_61175[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59467[(4)]))){
var statearr_59496_61176 = state_59467;
(statearr_59496_61176[(1)] = cljs.core.first((state_59467[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61178 = state_59467;
state_59467 = G__61178;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__ = function(state_59467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1.call(this,state_59467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__58758__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59497 = f__58894__auto__();
(statearr_59497[(6)] = c__58893__auto__);

return statearr_59497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));

return c__58893__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__59499 = arguments.length;
switch (G__59499) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__59501 = arguments.length;
switch (G__59501) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__59503 = arguments.length;
switch (G__59503) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__58893__auto___61190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59533){
var state_val_59534 = (state_59533[(1)]);
if((state_val_59534 === (7))){
var inst_59529 = (state_59533[(2)]);
var state_59533__$1 = state_59533;
var statearr_59535_61191 = state_59533__$1;
(statearr_59535_61191[(2)] = inst_59529);

(statearr_59535_61191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (1))){
var state_59533__$1 = state_59533;
var statearr_59536_61196 = state_59533__$1;
(statearr_59536_61196[(2)] = null);

(statearr_59536_61196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (4))){
var inst_59510 = (state_59533[(7)]);
var inst_59510__$1 = (state_59533[(2)]);
var inst_59511 = (inst_59510__$1 == null);
var state_59533__$1 = (function (){var statearr_59537 = state_59533;
(statearr_59537[(7)] = inst_59510__$1);

return statearr_59537;
})();
if(cljs.core.truth_(inst_59511)){
var statearr_59538_61199 = state_59533__$1;
(statearr_59538_61199[(1)] = (5));

} else {
var statearr_59539_61200 = state_59533__$1;
(statearr_59539_61200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (13))){
var state_59533__$1 = state_59533;
var statearr_59540_61201 = state_59533__$1;
(statearr_59540_61201[(2)] = null);

(statearr_59540_61201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (6))){
var inst_59510 = (state_59533[(7)]);
var inst_59516 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59510) : p.call(null,inst_59510));
var state_59533__$1 = state_59533;
if(cljs.core.truth_(inst_59516)){
var statearr_59541_61205 = state_59533__$1;
(statearr_59541_61205[(1)] = (9));

} else {
var statearr_59542_61206 = state_59533__$1;
(statearr_59542_61206[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (3))){
var inst_59531 = (state_59533[(2)]);
var state_59533__$1 = state_59533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59533__$1,inst_59531);
} else {
if((state_val_59534 === (12))){
var state_59533__$1 = state_59533;
var statearr_59543_61208 = state_59533__$1;
(statearr_59543_61208[(2)] = null);

(statearr_59543_61208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (2))){
var state_59533__$1 = state_59533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59533__$1,(4),ch);
} else {
if((state_val_59534 === (11))){
var inst_59510 = (state_59533[(7)]);
var inst_59520 = (state_59533[(2)]);
var state_59533__$1 = state_59533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59533__$1,(8),inst_59520,inst_59510);
} else {
if((state_val_59534 === (9))){
var state_59533__$1 = state_59533;
var statearr_59544_61209 = state_59533__$1;
(statearr_59544_61209[(2)] = tc);

(statearr_59544_61209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (5))){
var inst_59513 = cljs.core.async.close_BANG_(tc);
var inst_59514 = cljs.core.async.close_BANG_(fc);
var state_59533__$1 = (function (){var statearr_59545 = state_59533;
(statearr_59545[(8)] = inst_59513);

return statearr_59545;
})();
var statearr_59546_61212 = state_59533__$1;
(statearr_59546_61212[(2)] = inst_59514);

(statearr_59546_61212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (14))){
var inst_59527 = (state_59533[(2)]);
var state_59533__$1 = state_59533;
var statearr_59547_61214 = state_59533__$1;
(statearr_59547_61214[(2)] = inst_59527);

(statearr_59547_61214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (10))){
var state_59533__$1 = state_59533;
var statearr_59548_61215 = state_59533__$1;
(statearr_59548_61215[(2)] = fc);

(statearr_59548_61215[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59534 === (8))){
var inst_59522 = (state_59533[(2)]);
var state_59533__$1 = state_59533;
if(cljs.core.truth_(inst_59522)){
var statearr_59549_61216 = state_59533__$1;
(statearr_59549_61216[(1)] = (12));

} else {
var statearr_59550_61217 = state_59533__$1;
(statearr_59550_61217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_59551 = [null,null,null,null,null,null,null,null,null];
(statearr_59551[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_59551[(1)] = (1));

return statearr_59551;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_59533){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59533);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59552){var ex__58761__auto__ = e59552;
var statearr_59553_61221 = state_59533;
(statearr_59553_61221[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59533[(4)]))){
var statearr_59554_61222 = state_59533;
(statearr_59554_61222[(1)] = cljs.core.first((state_59533[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61223 = state_59533;
state_59533 = G__61223;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_59533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_59533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59555 = f__58894__auto__();
(statearr_59555[(6)] = c__58893__auto___61190);

return statearr_59555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__58893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59579){
var state_val_59580 = (state_59579[(1)]);
if((state_val_59580 === (7))){
var inst_59575 = (state_59579[(2)]);
var state_59579__$1 = state_59579;
var statearr_59581_61235 = state_59579__$1;
(statearr_59581_61235[(2)] = inst_59575);

(statearr_59581_61235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59580 === (1))){
var inst_59558 = init;
var inst_59559 = inst_59558;
var state_59579__$1 = (function (){var statearr_59582 = state_59579;
(statearr_59582[(7)] = inst_59559);

return statearr_59582;
})();
var statearr_59583_61238 = state_59579__$1;
(statearr_59583_61238[(2)] = null);

(statearr_59583_61238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59580 === (4))){
var inst_59562 = (state_59579[(8)]);
var inst_59562__$1 = (state_59579[(2)]);
var inst_59563 = (inst_59562__$1 == null);
var state_59579__$1 = (function (){var statearr_59584 = state_59579;
(statearr_59584[(8)] = inst_59562__$1);

return statearr_59584;
})();
if(cljs.core.truth_(inst_59563)){
var statearr_59585_61243 = state_59579__$1;
(statearr_59585_61243[(1)] = (5));

} else {
var statearr_59586_61248 = state_59579__$1;
(statearr_59586_61248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59580 === (6))){
var inst_59562 = (state_59579[(8)]);
var inst_59566 = (state_59579[(9)]);
var inst_59559 = (state_59579[(7)]);
var inst_59566__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_59559,inst_59562) : f.call(null,inst_59559,inst_59562));
var inst_59567 = cljs.core.reduced_QMARK_(inst_59566__$1);
var state_59579__$1 = (function (){var statearr_59587 = state_59579;
(statearr_59587[(9)] = inst_59566__$1);

return statearr_59587;
})();
if(inst_59567){
var statearr_59588_61257 = state_59579__$1;
(statearr_59588_61257[(1)] = (8));

} else {
var statearr_59589_61258 = state_59579__$1;
(statearr_59589_61258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59580 === (3))){
var inst_59577 = (state_59579[(2)]);
var state_59579__$1 = state_59579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59579__$1,inst_59577);
} else {
if((state_val_59580 === (2))){
var state_59579__$1 = state_59579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59579__$1,(4),ch);
} else {
if((state_val_59580 === (9))){
var inst_59566 = (state_59579[(9)]);
var inst_59559 = inst_59566;
var state_59579__$1 = (function (){var statearr_59590 = state_59579;
(statearr_59590[(7)] = inst_59559);

return statearr_59590;
})();
var statearr_59591_61262 = state_59579__$1;
(statearr_59591_61262[(2)] = null);

(statearr_59591_61262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59580 === (5))){
var inst_59559 = (state_59579[(7)]);
var state_59579__$1 = state_59579;
var statearr_59592_61266 = state_59579__$1;
(statearr_59592_61266[(2)] = inst_59559);

(statearr_59592_61266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59580 === (10))){
var inst_59573 = (state_59579[(2)]);
var state_59579__$1 = state_59579;
var statearr_59593_61267 = state_59579__$1;
(statearr_59593_61267[(2)] = inst_59573);

(statearr_59593_61267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59580 === (8))){
var inst_59566 = (state_59579[(9)]);
var inst_59569 = cljs.core.deref(inst_59566);
var state_59579__$1 = state_59579;
var statearr_59594_61268 = state_59579__$1;
(statearr_59594_61268[(2)] = inst_59569);

(statearr_59594_61268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__58758__auto__ = null;
var cljs$core$async$reduce_$_state_machine__58758__auto____0 = (function (){
var statearr_59595 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59595[(0)] = cljs$core$async$reduce_$_state_machine__58758__auto__);

(statearr_59595[(1)] = (1));

return statearr_59595;
});
var cljs$core$async$reduce_$_state_machine__58758__auto____1 = (function (state_59579){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59579);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59596){var ex__58761__auto__ = e59596;
var statearr_59597_61272 = state_59579;
(statearr_59597_61272[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59579[(4)]))){
var statearr_59598_61273 = state_59579;
(statearr_59598_61273[(1)] = cljs.core.first((state_59579[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61274 = state_59579;
state_59579 = G__61274;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__58758__auto__ = function(state_59579){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__58758__auto____1.call(this,state_59579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__58758__auto____0;
cljs$core$async$reduce_$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__58758__auto____1;
return cljs$core$async$reduce_$_state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59599 = f__58894__auto__();
(statearr_59599[(6)] = c__58893__auto__);

return statearr_59599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));

return c__58893__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__58893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59605){
var state_val_59606 = (state_59605[(1)]);
if((state_val_59606 === (1))){
var inst_59600 = cljs.core.async.reduce(f__$1,init,ch);
var state_59605__$1 = state_59605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59605__$1,(2),inst_59600);
} else {
if((state_val_59606 === (2))){
var inst_59602 = (state_59605[(2)]);
var inst_59603 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59602) : f__$1.call(null,inst_59602));
var state_59605__$1 = state_59605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59605__$1,inst_59603);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__58758__auto__ = null;
var cljs$core$async$transduce_$_state_machine__58758__auto____0 = (function (){
var statearr_59607 = [null,null,null,null,null,null,null];
(statearr_59607[(0)] = cljs$core$async$transduce_$_state_machine__58758__auto__);

(statearr_59607[(1)] = (1));

return statearr_59607;
});
var cljs$core$async$transduce_$_state_machine__58758__auto____1 = (function (state_59605){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59605);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59612){var ex__58761__auto__ = e59612;
var statearr_59613_61290 = state_59605;
(statearr_59613_61290[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59605[(4)]))){
var statearr_59614_61291 = state_59605;
(statearr_59614_61291[(1)] = cljs.core.first((state_59605[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61292 = state_59605;
state_59605 = G__61292;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__58758__auto__ = function(state_59605){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__58758__auto____1.call(this,state_59605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__58758__auto____0;
cljs$core$async$transduce_$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__58758__auto____1;
return cljs$core$async$transduce_$_state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59615 = f__58894__auto__();
(statearr_59615[(6)] = c__58893__auto__);

return statearr_59615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));

return c__58893__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__59617 = arguments.length;
switch (G__59617) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__58893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59642){
var state_val_59643 = (state_59642[(1)]);
if((state_val_59643 === (7))){
var inst_59624 = (state_59642[(2)]);
var state_59642__$1 = state_59642;
var statearr_59644_61303 = state_59642__$1;
(statearr_59644_61303[(2)] = inst_59624);

(statearr_59644_61303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (1))){
var inst_59618 = cljs.core.seq(coll);
var inst_59619 = inst_59618;
var state_59642__$1 = (function (){var statearr_59645 = state_59642;
(statearr_59645[(7)] = inst_59619);

return statearr_59645;
})();
var statearr_59646_61304 = state_59642__$1;
(statearr_59646_61304[(2)] = null);

(statearr_59646_61304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (4))){
var inst_59619 = (state_59642[(7)]);
var inst_59622 = cljs.core.first(inst_59619);
var state_59642__$1 = state_59642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59642__$1,(7),ch,inst_59622);
} else {
if((state_val_59643 === (13))){
var inst_59636 = (state_59642[(2)]);
var state_59642__$1 = state_59642;
var statearr_59647_61308 = state_59642__$1;
(statearr_59647_61308[(2)] = inst_59636);

(statearr_59647_61308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (6))){
var inst_59627 = (state_59642[(2)]);
var state_59642__$1 = state_59642;
if(cljs.core.truth_(inst_59627)){
var statearr_59648_61309 = state_59642__$1;
(statearr_59648_61309[(1)] = (8));

} else {
var statearr_59653_61310 = state_59642__$1;
(statearr_59653_61310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (3))){
var inst_59640 = (state_59642[(2)]);
var state_59642__$1 = state_59642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59642__$1,inst_59640);
} else {
if((state_val_59643 === (12))){
var state_59642__$1 = state_59642;
var statearr_59654_61320 = state_59642__$1;
(statearr_59654_61320[(2)] = null);

(statearr_59654_61320[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (2))){
var inst_59619 = (state_59642[(7)]);
var state_59642__$1 = state_59642;
if(cljs.core.truth_(inst_59619)){
var statearr_59655_61321 = state_59642__$1;
(statearr_59655_61321[(1)] = (4));

} else {
var statearr_59656_61322 = state_59642__$1;
(statearr_59656_61322[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (11))){
var inst_59633 = cljs.core.async.close_BANG_(ch);
var state_59642__$1 = state_59642;
var statearr_59657_61328 = state_59642__$1;
(statearr_59657_61328[(2)] = inst_59633);

(statearr_59657_61328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (9))){
var state_59642__$1 = state_59642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59658_61329 = state_59642__$1;
(statearr_59658_61329[(1)] = (11));

} else {
var statearr_59659_61330 = state_59642__$1;
(statearr_59659_61330[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (5))){
var inst_59619 = (state_59642[(7)]);
var state_59642__$1 = state_59642;
var statearr_59660_61331 = state_59642__$1;
(statearr_59660_61331[(2)] = inst_59619);

(statearr_59660_61331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (10))){
var inst_59638 = (state_59642[(2)]);
var state_59642__$1 = state_59642;
var statearr_59661_61332 = state_59642__$1;
(statearr_59661_61332[(2)] = inst_59638);

(statearr_59661_61332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59643 === (8))){
var inst_59619 = (state_59642[(7)]);
var inst_59629 = cljs.core.next(inst_59619);
var inst_59619__$1 = inst_59629;
var state_59642__$1 = (function (){var statearr_59662 = state_59642;
(statearr_59662[(7)] = inst_59619__$1);

return statearr_59662;
})();
var statearr_59663_61333 = state_59642__$1;
(statearr_59663_61333[(2)] = null);

(statearr_59663_61333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_59664 = [null,null,null,null,null,null,null,null];
(statearr_59664[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_59664[(1)] = (1));

return statearr_59664;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_59642){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59642);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59665){var ex__58761__auto__ = e59665;
var statearr_59670_61334 = state_59642;
(statearr_59670_61334[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59642[(4)]))){
var statearr_59671_61335 = state_59642;
(statearr_59671_61335[(1)] = cljs.core.first((state_59642[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61336 = state_59642;
state_59642 = G__61336;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_59642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_59642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59672 = f__58894__auto__();
(statearr_59672[(6)] = c__58893__auto__);

return statearr_59672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));

return c__58893__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__59674 = arguments.length;
switch (G__59674) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_61342 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_61342(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_61347 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_61347(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_61348 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_61348(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_61351 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_61351(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59679 = (function (ch,cs,meta59680){
this.ch = ch;
this.cs = cs;
this.meta59680 = meta59680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59681,meta59680__$1){
var self__ = this;
var _59681__$1 = this;
return (new cljs.core.async.t_cljs$core$async59679(self__.ch,self__.cs,meta59680__$1));
}));

(cljs.core.async.t_cljs$core$async59679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59681){
var self__ = this;
var _59681__$1 = this;
return self__.meta59680;
}));

(cljs.core.async.t_cljs$core$async59679.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59679.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59679.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59679.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59679.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59679.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59680","meta59680",1916516250,null)], null);
}));

(cljs.core.async.t_cljs$core$async59679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59679");

(cljs.core.async.t_cljs$core$async59679.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59679.
 */
cljs.core.async.__GT_t_cljs$core$async59679 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59679(ch__$1,cs__$1,meta59680){
return (new cljs.core.async.t_cljs$core$async59679(ch__$1,cs__$1,meta59680));
});

}

return (new cljs.core.async.t_cljs$core$async59679(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__58893__auto___61363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_59835){
var state_val_59836 = (state_59835[(1)]);
if((state_val_59836 === (7))){
var inst_59831 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59837_61365 = state_59835__$1;
(statearr_59837_61365[(2)] = inst_59831);

(statearr_59837_61365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (20))){
var inst_59731 = (state_59835[(7)]);
var inst_59745 = cljs.core.first(inst_59731);
var inst_59746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59745,(0),null);
var inst_59747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59745,(1),null);
var state_59835__$1 = (function (){var statearr_59838 = state_59835;
(statearr_59838[(8)] = inst_59746);

return statearr_59838;
})();
if(cljs.core.truth_(inst_59747)){
var statearr_59839_61366 = state_59835__$1;
(statearr_59839_61366[(1)] = (22));

} else {
var statearr_59840_61367 = state_59835__$1;
(statearr_59840_61367[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (27))){
var inst_59700 = (state_59835[(9)]);
var inst_59785 = (state_59835[(10)]);
var inst_59777 = (state_59835[(11)]);
var inst_59775 = (state_59835[(12)]);
var inst_59785__$1 = cljs.core._nth(inst_59775,inst_59777);
var inst_59786 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59785__$1,inst_59700,done);
var state_59835__$1 = (function (){var statearr_59841 = state_59835;
(statearr_59841[(10)] = inst_59785__$1);

return statearr_59841;
})();
if(cljs.core.truth_(inst_59786)){
var statearr_59842_61370 = state_59835__$1;
(statearr_59842_61370[(1)] = (30));

} else {
var statearr_59843_61372 = state_59835__$1;
(statearr_59843_61372[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (1))){
var state_59835__$1 = state_59835;
var statearr_59844_61373 = state_59835__$1;
(statearr_59844_61373[(2)] = null);

(statearr_59844_61373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (24))){
var inst_59731 = (state_59835[(7)]);
var inst_59752 = (state_59835[(2)]);
var inst_59753 = cljs.core.next(inst_59731);
var inst_59709 = inst_59753;
var inst_59710 = null;
var inst_59711 = (0);
var inst_59712 = (0);
var state_59835__$1 = (function (){var statearr_59845 = state_59835;
(statearr_59845[(13)] = inst_59709);

(statearr_59845[(14)] = inst_59752);

(statearr_59845[(15)] = inst_59710);

(statearr_59845[(16)] = inst_59712);

(statearr_59845[(17)] = inst_59711);

return statearr_59845;
})();
var statearr_59846_61375 = state_59835__$1;
(statearr_59846_61375[(2)] = null);

(statearr_59846_61375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (39))){
var state_59835__$1 = state_59835;
var statearr_59850_61378 = state_59835__$1;
(statearr_59850_61378[(2)] = null);

(statearr_59850_61378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (4))){
var inst_59700 = (state_59835[(9)]);
var inst_59700__$1 = (state_59835[(2)]);
var inst_59701 = (inst_59700__$1 == null);
var state_59835__$1 = (function (){var statearr_59851 = state_59835;
(statearr_59851[(9)] = inst_59700__$1);

return statearr_59851;
})();
if(cljs.core.truth_(inst_59701)){
var statearr_59852_61379 = state_59835__$1;
(statearr_59852_61379[(1)] = (5));

} else {
var statearr_59853_61380 = state_59835__$1;
(statearr_59853_61380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (15))){
var inst_59709 = (state_59835[(13)]);
var inst_59710 = (state_59835[(15)]);
var inst_59712 = (state_59835[(16)]);
var inst_59711 = (state_59835[(17)]);
var inst_59727 = (state_59835[(2)]);
var inst_59728 = (inst_59712 + (1));
var tmp59847 = inst_59709;
var tmp59848 = inst_59710;
var tmp59849 = inst_59711;
var inst_59709__$1 = tmp59847;
var inst_59710__$1 = tmp59848;
var inst_59711__$1 = tmp59849;
var inst_59712__$1 = inst_59728;
var state_59835__$1 = (function (){var statearr_59854 = state_59835;
(statearr_59854[(13)] = inst_59709__$1);

(statearr_59854[(18)] = inst_59727);

(statearr_59854[(15)] = inst_59710__$1);

(statearr_59854[(16)] = inst_59712__$1);

(statearr_59854[(17)] = inst_59711__$1);

return statearr_59854;
})();
var statearr_59855_61387 = state_59835__$1;
(statearr_59855_61387[(2)] = null);

(statearr_59855_61387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (21))){
var inst_59756 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59859_61388 = state_59835__$1;
(statearr_59859_61388[(2)] = inst_59756);

(statearr_59859_61388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (31))){
var inst_59785 = (state_59835[(10)]);
var inst_59789 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59785);
var state_59835__$1 = state_59835;
var statearr_59860_61393 = state_59835__$1;
(statearr_59860_61393[(2)] = inst_59789);

(statearr_59860_61393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (32))){
var inst_59776 = (state_59835[(19)]);
var inst_59777 = (state_59835[(11)]);
var inst_59774 = (state_59835[(20)]);
var inst_59775 = (state_59835[(12)]);
var inst_59791 = (state_59835[(2)]);
var inst_59792 = (inst_59777 + (1));
var tmp59856 = inst_59776;
var tmp59857 = inst_59774;
var tmp59858 = inst_59775;
var inst_59774__$1 = tmp59857;
var inst_59775__$1 = tmp59858;
var inst_59776__$1 = tmp59856;
var inst_59777__$1 = inst_59792;
var state_59835__$1 = (function (){var statearr_59861 = state_59835;
(statearr_59861[(19)] = inst_59776__$1);

(statearr_59861[(11)] = inst_59777__$1);

(statearr_59861[(20)] = inst_59774__$1);

(statearr_59861[(12)] = inst_59775__$1);

(statearr_59861[(21)] = inst_59791);

return statearr_59861;
})();
var statearr_59862_61397 = state_59835__$1;
(statearr_59862_61397[(2)] = null);

(statearr_59862_61397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (40))){
var inst_59804 = (state_59835[(22)]);
var inst_59808 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_59804);
var state_59835__$1 = state_59835;
var statearr_59864_61398 = state_59835__$1;
(statearr_59864_61398[(2)] = inst_59808);

(statearr_59864_61398[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (33))){
var inst_59795 = (state_59835[(23)]);
var inst_59797 = cljs.core.chunked_seq_QMARK_(inst_59795);
var state_59835__$1 = state_59835;
if(inst_59797){
var statearr_59865_61399 = state_59835__$1;
(statearr_59865_61399[(1)] = (36));

} else {
var statearr_59866_61400 = state_59835__$1;
(statearr_59866_61400[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (13))){
var inst_59721 = (state_59835[(24)]);
var inst_59724 = cljs.core.async.close_BANG_(inst_59721);
var state_59835__$1 = state_59835;
var statearr_59867_61401 = state_59835__$1;
(statearr_59867_61401[(2)] = inst_59724);

(statearr_59867_61401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (22))){
var inst_59746 = (state_59835[(8)]);
var inst_59749 = cljs.core.async.close_BANG_(inst_59746);
var state_59835__$1 = state_59835;
var statearr_59868_61402 = state_59835__$1;
(statearr_59868_61402[(2)] = inst_59749);

(statearr_59868_61402[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (36))){
var inst_59795 = (state_59835[(23)]);
var inst_59799 = cljs.core.chunk_first(inst_59795);
var inst_59800 = cljs.core.chunk_rest(inst_59795);
var inst_59801 = cljs.core.count(inst_59799);
var inst_59774 = inst_59800;
var inst_59775 = inst_59799;
var inst_59776 = inst_59801;
var inst_59777 = (0);
var state_59835__$1 = (function (){var statearr_59869 = state_59835;
(statearr_59869[(19)] = inst_59776);

(statearr_59869[(11)] = inst_59777);

(statearr_59869[(20)] = inst_59774);

(statearr_59869[(12)] = inst_59775);

return statearr_59869;
})();
var statearr_59870_61408 = state_59835__$1;
(statearr_59870_61408[(2)] = null);

(statearr_59870_61408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (41))){
var inst_59795 = (state_59835[(23)]);
var inst_59810 = (state_59835[(2)]);
var inst_59811 = cljs.core.next(inst_59795);
var inst_59774 = inst_59811;
var inst_59775 = null;
var inst_59776 = (0);
var inst_59777 = (0);
var state_59835__$1 = (function (){var statearr_59871 = state_59835;
(statearr_59871[(19)] = inst_59776);

(statearr_59871[(11)] = inst_59777);

(statearr_59871[(20)] = inst_59774);

(statearr_59871[(12)] = inst_59775);

(statearr_59871[(25)] = inst_59810);

return statearr_59871;
})();
var statearr_59872_61417 = state_59835__$1;
(statearr_59872_61417[(2)] = null);

(statearr_59872_61417[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (43))){
var state_59835__$1 = state_59835;
var statearr_59873_61418 = state_59835__$1;
(statearr_59873_61418[(2)] = null);

(statearr_59873_61418[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (29))){
var inst_59819 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59874_61422 = state_59835__$1;
(statearr_59874_61422[(2)] = inst_59819);

(statearr_59874_61422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (44))){
var inst_59828 = (state_59835[(2)]);
var state_59835__$1 = (function (){var statearr_59875 = state_59835;
(statearr_59875[(26)] = inst_59828);

return statearr_59875;
})();
var statearr_59876_61426 = state_59835__$1;
(statearr_59876_61426[(2)] = null);

(statearr_59876_61426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (6))){
var inst_59766 = (state_59835[(27)]);
var inst_59765 = cljs.core.deref(cs);
var inst_59766__$1 = cljs.core.keys(inst_59765);
var inst_59767 = cljs.core.count(inst_59766__$1);
var inst_59768 = cljs.core.reset_BANG_(dctr,inst_59767);
var inst_59773 = cljs.core.seq(inst_59766__$1);
var inst_59774 = inst_59773;
var inst_59775 = null;
var inst_59776 = (0);
var inst_59777 = (0);
var state_59835__$1 = (function (){var statearr_59877 = state_59835;
(statearr_59877[(27)] = inst_59766__$1);

(statearr_59877[(28)] = inst_59768);

(statearr_59877[(19)] = inst_59776);

(statearr_59877[(11)] = inst_59777);

(statearr_59877[(20)] = inst_59774);

(statearr_59877[(12)] = inst_59775);

return statearr_59877;
})();
var statearr_59878_61436 = state_59835__$1;
(statearr_59878_61436[(2)] = null);

(statearr_59878_61436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (28))){
var inst_59774 = (state_59835[(20)]);
var inst_59795 = (state_59835[(23)]);
var inst_59795__$1 = cljs.core.seq(inst_59774);
var state_59835__$1 = (function (){var statearr_59883 = state_59835;
(statearr_59883[(23)] = inst_59795__$1);

return statearr_59883;
})();
if(inst_59795__$1){
var statearr_59885_61441 = state_59835__$1;
(statearr_59885_61441[(1)] = (33));

} else {
var statearr_59891_61442 = state_59835__$1;
(statearr_59891_61442[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (25))){
var inst_59776 = (state_59835[(19)]);
var inst_59777 = (state_59835[(11)]);
var inst_59779 = (inst_59777 < inst_59776);
var inst_59780 = inst_59779;
var state_59835__$1 = state_59835;
if(cljs.core.truth_(inst_59780)){
var statearr_59899_61445 = state_59835__$1;
(statearr_59899_61445[(1)] = (27));

} else {
var statearr_59900_61448 = state_59835__$1;
(statearr_59900_61448[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (34))){
var state_59835__$1 = state_59835;
var statearr_59907_61449 = state_59835__$1;
(statearr_59907_61449[(2)] = null);

(statearr_59907_61449[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (17))){
var state_59835__$1 = state_59835;
var statearr_59908_61450 = state_59835__$1;
(statearr_59908_61450[(2)] = null);

(statearr_59908_61450[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (3))){
var inst_59833 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59835__$1,inst_59833);
} else {
if((state_val_59836 === (12))){
var inst_59761 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59909_61452 = state_59835__$1;
(statearr_59909_61452[(2)] = inst_59761);

(statearr_59909_61452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (2))){
var state_59835__$1 = state_59835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59835__$1,(4),ch);
} else {
if((state_val_59836 === (23))){
var state_59835__$1 = state_59835;
var statearr_59910_61457 = state_59835__$1;
(statearr_59910_61457[(2)] = null);

(statearr_59910_61457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (35))){
var inst_59817 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59912_61461 = state_59835__$1;
(statearr_59912_61461[(2)] = inst_59817);

(statearr_59912_61461[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (19))){
var inst_59731 = (state_59835[(7)]);
var inst_59736 = cljs.core.chunk_first(inst_59731);
var inst_59737 = cljs.core.chunk_rest(inst_59731);
var inst_59739 = cljs.core.count(inst_59736);
var inst_59709 = inst_59737;
var inst_59710 = inst_59736;
var inst_59711 = inst_59739;
var inst_59712 = (0);
var state_59835__$1 = (function (){var statearr_59913 = state_59835;
(statearr_59913[(13)] = inst_59709);

(statearr_59913[(15)] = inst_59710);

(statearr_59913[(16)] = inst_59712);

(statearr_59913[(17)] = inst_59711);

return statearr_59913;
})();
var statearr_59914_61463 = state_59835__$1;
(statearr_59914_61463[(2)] = null);

(statearr_59914_61463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (11))){
var inst_59709 = (state_59835[(13)]);
var inst_59731 = (state_59835[(7)]);
var inst_59731__$1 = cljs.core.seq(inst_59709);
var state_59835__$1 = (function (){var statearr_59917 = state_59835;
(statearr_59917[(7)] = inst_59731__$1);

return statearr_59917;
})();
if(inst_59731__$1){
var statearr_59918_61467 = state_59835__$1;
(statearr_59918_61467[(1)] = (16));

} else {
var statearr_59919_61468 = state_59835__$1;
(statearr_59919_61468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (9))){
var inst_59763 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59920_61469 = state_59835__$1;
(statearr_59920_61469[(2)] = inst_59763);

(statearr_59920_61469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (5))){
var inst_59707 = cljs.core.deref(cs);
var inst_59708 = cljs.core.seq(inst_59707);
var inst_59709 = inst_59708;
var inst_59710 = null;
var inst_59711 = (0);
var inst_59712 = (0);
var state_59835__$1 = (function (){var statearr_59921 = state_59835;
(statearr_59921[(13)] = inst_59709);

(statearr_59921[(15)] = inst_59710);

(statearr_59921[(16)] = inst_59712);

(statearr_59921[(17)] = inst_59711);

return statearr_59921;
})();
var statearr_59922_61474 = state_59835__$1;
(statearr_59922_61474[(2)] = null);

(statearr_59922_61474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (14))){
var state_59835__$1 = state_59835;
var statearr_59923_61475 = state_59835__$1;
(statearr_59923_61475[(2)] = null);

(statearr_59923_61475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (45))){
var inst_59825 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59924_61476 = state_59835__$1;
(statearr_59924_61476[(2)] = inst_59825);

(statearr_59924_61476[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (26))){
var inst_59766 = (state_59835[(27)]);
var inst_59821 = (state_59835[(2)]);
var inst_59822 = cljs.core.seq(inst_59766);
var state_59835__$1 = (function (){var statearr_59929 = state_59835;
(statearr_59929[(29)] = inst_59821);

return statearr_59929;
})();
if(inst_59822){
var statearr_59931_61477 = state_59835__$1;
(statearr_59931_61477[(1)] = (42));

} else {
var statearr_59932_61479 = state_59835__$1;
(statearr_59932_61479[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (16))){
var inst_59731 = (state_59835[(7)]);
var inst_59734 = cljs.core.chunked_seq_QMARK_(inst_59731);
var state_59835__$1 = state_59835;
if(inst_59734){
var statearr_59938_61486 = state_59835__$1;
(statearr_59938_61486[(1)] = (19));

} else {
var statearr_59940_61487 = state_59835__$1;
(statearr_59940_61487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (38))){
var inst_59814 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59946_61488 = state_59835__$1;
(statearr_59946_61488[(2)] = inst_59814);

(statearr_59946_61488[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (30))){
var state_59835__$1 = state_59835;
var statearr_59948_61489 = state_59835__$1;
(statearr_59948_61489[(2)] = null);

(statearr_59948_61489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (10))){
var inst_59710 = (state_59835[(15)]);
var inst_59712 = (state_59835[(16)]);
var inst_59720 = cljs.core._nth(inst_59710,inst_59712);
var inst_59721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59720,(0),null);
var inst_59722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59720,(1),null);
var state_59835__$1 = (function (){var statearr_59953 = state_59835;
(statearr_59953[(24)] = inst_59721);

return statearr_59953;
})();
if(cljs.core.truth_(inst_59722)){
var statearr_59954_61490 = state_59835__$1;
(statearr_59954_61490[(1)] = (13));

} else {
var statearr_59955_61491 = state_59835__$1;
(statearr_59955_61491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (18))){
var inst_59759 = (state_59835[(2)]);
var state_59835__$1 = state_59835;
var statearr_59956_61496 = state_59835__$1;
(statearr_59956_61496[(2)] = inst_59759);

(statearr_59956_61496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (42))){
var state_59835__$1 = state_59835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59835__$1,(45),dchan);
} else {
if((state_val_59836 === (37))){
var inst_59700 = (state_59835[(9)]);
var inst_59804 = (state_59835[(22)]);
var inst_59795 = (state_59835[(23)]);
var inst_59804__$1 = cljs.core.first(inst_59795);
var inst_59805 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_59804__$1,inst_59700,done);
var state_59835__$1 = (function (){var statearr_59957 = state_59835;
(statearr_59957[(22)] = inst_59804__$1);

return statearr_59957;
})();
if(cljs.core.truth_(inst_59805)){
var statearr_59958_61501 = state_59835__$1;
(statearr_59958_61501[(1)] = (39));

} else {
var statearr_59963_61502 = state_59835__$1;
(statearr_59963_61502[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59836 === (8))){
var inst_59712 = (state_59835[(16)]);
var inst_59711 = (state_59835[(17)]);
var inst_59714 = (inst_59712 < inst_59711);
var inst_59715 = inst_59714;
var state_59835__$1 = state_59835;
if(cljs.core.truth_(inst_59715)){
var statearr_59965_61505 = state_59835__$1;
(statearr_59965_61505[(1)] = (10));

} else {
var statearr_59970_61507 = state_59835__$1;
(statearr_59970_61507[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__58758__auto__ = null;
var cljs$core$async$mult_$_state_machine__58758__auto____0 = (function (){
var statearr_59983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59983[(0)] = cljs$core$async$mult_$_state_machine__58758__auto__);

(statearr_59983[(1)] = (1));

return statearr_59983;
});
var cljs$core$async$mult_$_state_machine__58758__auto____1 = (function (state_59835){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_59835);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e59984){var ex__58761__auto__ = e59984;
var statearr_59985_61509 = state_59835;
(statearr_59985_61509[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_59835[(4)]))){
var statearr_59986_61510 = state_59835;
(statearr_59986_61510[(1)] = cljs.core.first((state_59835[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61511 = state_59835;
state_59835 = G__61511;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__58758__auto__ = function(state_59835){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__58758__auto____1.call(this,state_59835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__58758__auto____0;
cljs$core$async$mult_$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__58758__auto____1;
return cljs$core$async$mult_$_state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_59991 = f__58894__auto__();
(statearr_59991[(6)] = c__58893__auto___61363);

return statearr_59991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__60000 = arguments.length;
switch (G__60000) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_61518 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_61518(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_61519 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_61519(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_61520 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_61520(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_61521 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_61521(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_61525 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_61525(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61526 = arguments.length;
var i__4737__auto___61527 = (0);
while(true){
if((i__4737__auto___61527 < len__4736__auto___61526)){
args__4742__auto__.push((arguments[i__4737__auto___61527]));

var G__61528 = (i__4737__auto___61527 + (1));
i__4737__auto___61527 = G__61528;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60029){
var map__60030 = p__60029;
var map__60030__$1 = (((((!((map__60030 == null))))?(((((map__60030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60030):map__60030);
var opts = map__60030__$1;
var statearr_60032_61529 = state;
(statearr_60032_61529[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_60033_61531 = state;
(statearr_60033_61531[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_60034_61532 = state;
(statearr_60034_61532[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60025){
var G__60026 = cljs.core.first(seq60025);
var seq60025__$1 = cljs.core.next(seq60025);
var G__60027 = cljs.core.first(seq60025__$1);
var seq60025__$2 = cljs.core.next(seq60025__$1);
var G__60028 = cljs.core.first(seq60025__$2);
var seq60025__$3 = cljs.core.next(seq60025__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60026,G__60027,G__60028,seq60025__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60035 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta60036){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta60036 = meta60036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60037,meta60036__$1){
var self__ = this;
var _60037__$1 = this;
return (new cljs.core.async.t_cljs$core$async60035(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta60036__$1));
}));

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60037){
var self__ = this;
var _60037__$1 = this;
return self__.meta60036;
}));

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60035.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta60036","meta60036",990260340,null)], null);
}));

(cljs.core.async.t_cljs$core$async60035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60035");

(cljs.core.async.t_cljs$core$async60035.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60035.
 */
cljs.core.async.__GT_t_cljs$core$async60035 = (function cljs$core$async$mix_$___GT_t_cljs$core$async60035(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60036){
return (new cljs.core.async.t_cljs$core$async60035(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60036));
});

}

return (new cljs.core.async.t_cljs$core$async60035(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58893__auto___61543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60139){
var state_val_60140 = (state_60139[(1)]);
if((state_val_60140 === (7))){
var inst_60054 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
var statearr_60141_61544 = state_60139__$1;
(statearr_60141_61544[(2)] = inst_60054);

(statearr_60141_61544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (20))){
var inst_60066 = (state_60139[(7)]);
var state_60139__$1 = state_60139;
var statearr_60142_61545 = state_60139__$1;
(statearr_60142_61545[(2)] = inst_60066);

(statearr_60142_61545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (27))){
var state_60139__$1 = state_60139;
var statearr_60143_61546 = state_60139__$1;
(statearr_60143_61546[(2)] = null);

(statearr_60143_61546[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (1))){
var inst_60041 = (state_60139[(8)]);
var inst_60041__$1 = calc_state();
var inst_60043 = (inst_60041__$1 == null);
var inst_60044 = cljs.core.not(inst_60043);
var state_60139__$1 = (function (){var statearr_60144 = state_60139;
(statearr_60144[(8)] = inst_60041__$1);

return statearr_60144;
})();
if(inst_60044){
var statearr_60145_61547 = state_60139__$1;
(statearr_60145_61547[(1)] = (2));

} else {
var statearr_60146_61548 = state_60139__$1;
(statearr_60146_61548[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (24))){
var inst_60113 = (state_60139[(9)]);
var inst_60099 = (state_60139[(10)]);
var inst_60090 = (state_60139[(11)]);
var inst_60113__$1 = (inst_60090.cljs$core$IFn$_invoke$arity$1 ? inst_60090.cljs$core$IFn$_invoke$arity$1(inst_60099) : inst_60090.call(null,inst_60099));
var state_60139__$1 = (function (){var statearr_60147 = state_60139;
(statearr_60147[(9)] = inst_60113__$1);

return statearr_60147;
})();
if(cljs.core.truth_(inst_60113__$1)){
var statearr_60148_61549 = state_60139__$1;
(statearr_60148_61549[(1)] = (29));

} else {
var statearr_60149_61550 = state_60139__$1;
(statearr_60149_61550[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (4))){
var inst_60057 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
if(cljs.core.truth_(inst_60057)){
var statearr_60150_61551 = state_60139__$1;
(statearr_60150_61551[(1)] = (8));

} else {
var statearr_60151_61552 = state_60139__$1;
(statearr_60151_61552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (15))){
var inst_60084 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
if(cljs.core.truth_(inst_60084)){
var statearr_60152_61553 = state_60139__$1;
(statearr_60152_61553[(1)] = (19));

} else {
var statearr_60153_61554 = state_60139__$1;
(statearr_60153_61554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (21))){
var inst_60089 = (state_60139[(12)]);
var inst_60089__$1 = (state_60139[(2)]);
var inst_60090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60089__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60089__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60089__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60139__$1 = (function (){var statearr_60154 = state_60139;
(statearr_60154[(13)] = inst_60091);

(statearr_60154[(11)] = inst_60090);

(statearr_60154[(12)] = inst_60089__$1);

return statearr_60154;
})();
return cljs.core.async.ioc_alts_BANG_(state_60139__$1,(22),inst_60092);
} else {
if((state_val_60140 === (31))){
var inst_60121 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
if(cljs.core.truth_(inst_60121)){
var statearr_60155_61558 = state_60139__$1;
(statearr_60155_61558[(1)] = (32));

} else {
var statearr_60156_61559 = state_60139__$1;
(statearr_60156_61559[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (32))){
var inst_60098 = (state_60139[(14)]);
var state_60139__$1 = state_60139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60139__$1,(35),out,inst_60098);
} else {
if((state_val_60140 === (33))){
var inst_60089 = (state_60139[(12)]);
var inst_60066 = inst_60089;
var state_60139__$1 = (function (){var statearr_60157 = state_60139;
(statearr_60157[(7)] = inst_60066);

return statearr_60157;
})();
var statearr_60158_61560 = state_60139__$1;
(statearr_60158_61560[(2)] = null);

(statearr_60158_61560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (13))){
var inst_60066 = (state_60139[(7)]);
var inst_60073 = inst_60066.cljs$lang$protocol_mask$partition0$;
var inst_60074 = (inst_60073 & (64));
var inst_60075 = inst_60066.cljs$core$ISeq$;
var inst_60076 = (cljs.core.PROTOCOL_SENTINEL === inst_60075);
var inst_60077 = ((inst_60074) || (inst_60076));
var state_60139__$1 = state_60139;
if(cljs.core.truth_(inst_60077)){
var statearr_60159_61561 = state_60139__$1;
(statearr_60159_61561[(1)] = (16));

} else {
var statearr_60160_61562 = state_60139__$1;
(statearr_60160_61562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (22))){
var inst_60099 = (state_60139[(10)]);
var inst_60098 = (state_60139[(14)]);
var inst_60097 = (state_60139[(2)]);
var inst_60098__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60097,(0),null);
var inst_60099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60097,(1),null);
var inst_60100 = (inst_60098__$1 == null);
var inst_60101 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60099__$1,change);
var inst_60102 = ((inst_60100) || (inst_60101));
var state_60139__$1 = (function (){var statearr_60161 = state_60139;
(statearr_60161[(10)] = inst_60099__$1);

(statearr_60161[(14)] = inst_60098__$1);

return statearr_60161;
})();
if(cljs.core.truth_(inst_60102)){
var statearr_60162_61563 = state_60139__$1;
(statearr_60162_61563[(1)] = (23));

} else {
var statearr_60163_61564 = state_60139__$1;
(statearr_60163_61564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (36))){
var inst_60089 = (state_60139[(12)]);
var inst_60066 = inst_60089;
var state_60139__$1 = (function (){var statearr_60164 = state_60139;
(statearr_60164[(7)] = inst_60066);

return statearr_60164;
})();
var statearr_60165_61565 = state_60139__$1;
(statearr_60165_61565[(2)] = null);

(statearr_60165_61565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (29))){
var inst_60113 = (state_60139[(9)]);
var state_60139__$1 = state_60139;
var statearr_60166_61566 = state_60139__$1;
(statearr_60166_61566[(2)] = inst_60113);

(statearr_60166_61566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (6))){
var state_60139__$1 = state_60139;
var statearr_60167_61567 = state_60139__$1;
(statearr_60167_61567[(2)] = false);

(statearr_60167_61567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (28))){
var inst_60109 = (state_60139[(2)]);
var inst_60110 = calc_state();
var inst_60066 = inst_60110;
var state_60139__$1 = (function (){var statearr_60168 = state_60139;
(statearr_60168[(7)] = inst_60066);

(statearr_60168[(15)] = inst_60109);

return statearr_60168;
})();
var statearr_60169_61568 = state_60139__$1;
(statearr_60169_61568[(2)] = null);

(statearr_60169_61568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (25))){
var inst_60135 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
var statearr_60170_61570 = state_60139__$1;
(statearr_60170_61570[(2)] = inst_60135);

(statearr_60170_61570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (34))){
var inst_60133 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
var statearr_60171_61571 = state_60139__$1;
(statearr_60171_61571[(2)] = inst_60133);

(statearr_60171_61571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (17))){
var state_60139__$1 = state_60139;
var statearr_60172_61572 = state_60139__$1;
(statearr_60172_61572[(2)] = false);

(statearr_60172_61572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (3))){
var state_60139__$1 = state_60139;
var statearr_60173_61583 = state_60139__$1;
(statearr_60173_61583[(2)] = false);

(statearr_60173_61583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (12))){
var inst_60137 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60139__$1,inst_60137);
} else {
if((state_val_60140 === (2))){
var inst_60041 = (state_60139[(8)]);
var inst_60046 = inst_60041.cljs$lang$protocol_mask$partition0$;
var inst_60047 = (inst_60046 & (64));
var inst_60048 = inst_60041.cljs$core$ISeq$;
var inst_60049 = (cljs.core.PROTOCOL_SENTINEL === inst_60048);
var inst_60050 = ((inst_60047) || (inst_60049));
var state_60139__$1 = state_60139;
if(cljs.core.truth_(inst_60050)){
var statearr_60174_61584 = state_60139__$1;
(statearr_60174_61584[(1)] = (5));

} else {
var statearr_60175_61585 = state_60139__$1;
(statearr_60175_61585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (23))){
var inst_60098 = (state_60139[(14)]);
var inst_60104 = (inst_60098 == null);
var state_60139__$1 = state_60139;
if(cljs.core.truth_(inst_60104)){
var statearr_60176_61589 = state_60139__$1;
(statearr_60176_61589[(1)] = (26));

} else {
var statearr_60177_61590 = state_60139__$1;
(statearr_60177_61590[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (35))){
var inst_60124 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
if(cljs.core.truth_(inst_60124)){
var statearr_60178_61591 = state_60139__$1;
(statearr_60178_61591[(1)] = (36));

} else {
var statearr_60179_61592 = state_60139__$1;
(statearr_60179_61592[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (19))){
var inst_60066 = (state_60139[(7)]);
var inst_60086 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60066);
var state_60139__$1 = state_60139;
var statearr_60180_61593 = state_60139__$1;
(statearr_60180_61593[(2)] = inst_60086);

(statearr_60180_61593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (11))){
var inst_60066 = (state_60139[(7)]);
var inst_60070 = (inst_60066 == null);
var inst_60071 = cljs.core.not(inst_60070);
var state_60139__$1 = state_60139;
if(inst_60071){
var statearr_60181_61594 = state_60139__$1;
(statearr_60181_61594[(1)] = (13));

} else {
var statearr_60182_61595 = state_60139__$1;
(statearr_60182_61595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (9))){
var inst_60041 = (state_60139[(8)]);
var state_60139__$1 = state_60139;
var statearr_60183_61596 = state_60139__$1;
(statearr_60183_61596[(2)] = inst_60041);

(statearr_60183_61596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (5))){
var state_60139__$1 = state_60139;
var statearr_60184_61597 = state_60139__$1;
(statearr_60184_61597[(2)] = true);

(statearr_60184_61597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (14))){
var state_60139__$1 = state_60139;
var statearr_60185_61598 = state_60139__$1;
(statearr_60185_61598[(2)] = false);

(statearr_60185_61598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (26))){
var inst_60099 = (state_60139[(10)]);
var inst_60106 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_60099);
var state_60139__$1 = state_60139;
var statearr_60186_61599 = state_60139__$1;
(statearr_60186_61599[(2)] = inst_60106);

(statearr_60186_61599[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (16))){
var state_60139__$1 = state_60139;
var statearr_60187_61600 = state_60139__$1;
(statearr_60187_61600[(2)] = true);

(statearr_60187_61600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (38))){
var inst_60129 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
var statearr_60188_61601 = state_60139__$1;
(statearr_60188_61601[(2)] = inst_60129);

(statearr_60188_61601[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (30))){
var inst_60099 = (state_60139[(10)]);
var inst_60091 = (state_60139[(13)]);
var inst_60090 = (state_60139[(11)]);
var inst_60116 = cljs.core.empty_QMARK_(inst_60090);
var inst_60117 = (inst_60091.cljs$core$IFn$_invoke$arity$1 ? inst_60091.cljs$core$IFn$_invoke$arity$1(inst_60099) : inst_60091.call(null,inst_60099));
var inst_60118 = cljs.core.not(inst_60117);
var inst_60119 = ((inst_60116) && (inst_60118));
var state_60139__$1 = state_60139;
var statearr_60189_61602 = state_60139__$1;
(statearr_60189_61602[(2)] = inst_60119);

(statearr_60189_61602[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (10))){
var inst_60041 = (state_60139[(8)]);
var inst_60062 = (state_60139[(2)]);
var inst_60063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60062,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60062,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60062,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60066 = inst_60041;
var state_60139__$1 = (function (){var statearr_60190 = state_60139;
(statearr_60190[(7)] = inst_60066);

(statearr_60190[(16)] = inst_60064);

(statearr_60190[(17)] = inst_60063);

(statearr_60190[(18)] = inst_60065);

return statearr_60190;
})();
var statearr_60191_61603 = state_60139__$1;
(statearr_60191_61603[(2)] = null);

(statearr_60191_61603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (18))){
var inst_60081 = (state_60139[(2)]);
var state_60139__$1 = state_60139;
var statearr_60192_61607 = state_60139__$1;
(statearr_60192_61607[(2)] = inst_60081);

(statearr_60192_61607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (37))){
var state_60139__$1 = state_60139;
var statearr_60193_61612 = state_60139__$1;
(statearr_60193_61612[(2)] = null);

(statearr_60193_61612[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60140 === (8))){
var inst_60041 = (state_60139[(8)]);
var inst_60059 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60041);
var state_60139__$1 = state_60139;
var statearr_60194_61616 = state_60139__$1;
(statearr_60194_61616[(2)] = inst_60059);

(statearr_60194_61616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__58758__auto__ = null;
var cljs$core$async$mix_$_state_machine__58758__auto____0 = (function (){
var statearr_60195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60195[(0)] = cljs$core$async$mix_$_state_machine__58758__auto__);

(statearr_60195[(1)] = (1));

return statearr_60195;
});
var cljs$core$async$mix_$_state_machine__58758__auto____1 = (function (state_60139){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60139);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60196){var ex__58761__auto__ = e60196;
var statearr_60197_61620 = state_60139;
(statearr_60197_61620[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60139[(4)]))){
var statearr_60198_61621 = state_60139;
(statearr_60198_61621[(1)] = cljs.core.first((state_60139[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61622 = state_60139;
state_60139 = G__61622;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__58758__auto__ = function(state_60139){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__58758__auto____1.call(this,state_60139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__58758__auto____0;
cljs$core$async$mix_$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__58758__auto____1;
return cljs$core$async$mix_$_state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60199 = f__58894__auto__();
(statearr_60199[(6)] = c__58893__auto___61543);

return statearr_60199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_61626 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_61626(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_61630 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_61630(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_61632 = (function() {
var G__61633 = null;
var G__61633__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__61633__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__61633 = function(p,v){
switch(arguments.length){
case 1:
return G__61633__1.call(this,p);
case 2:
return G__61633__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__61633.cljs$core$IFn$_invoke$arity$1 = G__61633__1;
G__61633.cljs$core$IFn$_invoke$arity$2 = G__61633__2;
return G__61633;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__60201 = arguments.length;
switch (G__60201) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61632(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_61632(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__60204 = arguments.length;
switch (G__60204) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__60202_SHARP_){
if(cljs.core.truth_((p1__60202_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__60202_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__60202_SHARP_.call(null,topic)))){
return p1__60202_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60202_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60205 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta60206){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta60206 = meta60206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60207,meta60206__$1){
var self__ = this;
var _60207__$1 = this;
return (new cljs.core.async.t_cljs$core$async60205(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta60206__$1));
}));

(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60207){
var self__ = this;
var _60207__$1 = this;
return self__.meta60206;
}));

(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async60205.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async60205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta60206","meta60206",-123414180,null)], null);
}));

(cljs.core.async.t_cljs$core$async60205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60205");

(cljs.core.async.t_cljs$core$async60205.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60205.
 */
cljs.core.async.__GT_t_cljs$core$async60205 = (function cljs$core$async$__GT_t_cljs$core$async60205(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60206){
return (new cljs.core.async.t_cljs$core$async60205(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60206));
});

}

return (new cljs.core.async.t_cljs$core$async60205(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58893__auto___61657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60288){
var state_val_60289 = (state_60288[(1)]);
if((state_val_60289 === (7))){
var inst_60283 = (state_60288[(2)]);
var state_60288__$1 = state_60288;
var statearr_60290_61664 = state_60288__$1;
(statearr_60290_61664[(2)] = inst_60283);

(statearr_60290_61664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (20))){
var state_60288__$1 = state_60288;
var statearr_60291_61665 = state_60288__$1;
(statearr_60291_61665[(2)] = null);

(statearr_60291_61665[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (1))){
var state_60288__$1 = state_60288;
var statearr_60292_61666 = state_60288__$1;
(statearr_60292_61666[(2)] = null);

(statearr_60292_61666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (24))){
var inst_60266 = (state_60288[(7)]);
var inst_60275 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_60266);
var state_60288__$1 = state_60288;
var statearr_60293_61667 = state_60288__$1;
(statearr_60293_61667[(2)] = inst_60275);

(statearr_60293_61667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (4))){
var inst_60216 = (state_60288[(8)]);
var inst_60216__$1 = (state_60288[(2)]);
var inst_60217 = (inst_60216__$1 == null);
var state_60288__$1 = (function (){var statearr_60294 = state_60288;
(statearr_60294[(8)] = inst_60216__$1);

return statearr_60294;
})();
if(cljs.core.truth_(inst_60217)){
var statearr_60295_61668 = state_60288__$1;
(statearr_60295_61668[(1)] = (5));

} else {
var statearr_60296_61669 = state_60288__$1;
(statearr_60296_61669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (15))){
var inst_60260 = (state_60288[(2)]);
var state_60288__$1 = state_60288;
var statearr_60297_61670 = state_60288__$1;
(statearr_60297_61670[(2)] = inst_60260);

(statearr_60297_61670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (21))){
var inst_60280 = (state_60288[(2)]);
var state_60288__$1 = (function (){var statearr_60298 = state_60288;
(statearr_60298[(9)] = inst_60280);

return statearr_60298;
})();
var statearr_60299_61671 = state_60288__$1;
(statearr_60299_61671[(2)] = null);

(statearr_60299_61671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (13))){
var inst_60241 = (state_60288[(10)]);
var inst_60243 = cljs.core.chunked_seq_QMARK_(inst_60241);
var state_60288__$1 = state_60288;
if(inst_60243){
var statearr_60300_61672 = state_60288__$1;
(statearr_60300_61672[(1)] = (16));

} else {
var statearr_60301_61673 = state_60288__$1;
(statearr_60301_61673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (22))){
var inst_60272 = (state_60288[(2)]);
var state_60288__$1 = state_60288;
if(cljs.core.truth_(inst_60272)){
var statearr_60302_61680 = state_60288__$1;
(statearr_60302_61680[(1)] = (23));

} else {
var statearr_60303_61681 = state_60288__$1;
(statearr_60303_61681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (6))){
var inst_60266 = (state_60288[(7)]);
var inst_60216 = (state_60288[(8)]);
var inst_60268 = (state_60288[(11)]);
var inst_60266__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_60216) : topic_fn.call(null,inst_60216));
var inst_60267 = cljs.core.deref(mults);
var inst_60268__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60267,inst_60266__$1);
var state_60288__$1 = (function (){var statearr_60304 = state_60288;
(statearr_60304[(7)] = inst_60266__$1);

(statearr_60304[(11)] = inst_60268__$1);

return statearr_60304;
})();
if(cljs.core.truth_(inst_60268__$1)){
var statearr_60305_61682 = state_60288__$1;
(statearr_60305_61682[(1)] = (19));

} else {
var statearr_60306_61683 = state_60288__$1;
(statearr_60306_61683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (25))){
var inst_60277 = (state_60288[(2)]);
var state_60288__$1 = state_60288;
var statearr_60307_61684 = state_60288__$1;
(statearr_60307_61684[(2)] = inst_60277);

(statearr_60307_61684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (17))){
var inst_60241 = (state_60288[(10)]);
var inst_60251 = cljs.core.first(inst_60241);
var inst_60252 = cljs.core.async.muxch_STAR_(inst_60251);
var inst_60253 = cljs.core.async.close_BANG_(inst_60252);
var inst_60254 = cljs.core.next(inst_60241);
var inst_60227 = inst_60254;
var inst_60228 = null;
var inst_60229 = (0);
var inst_60230 = (0);
var state_60288__$1 = (function (){var statearr_60308 = state_60288;
(statearr_60308[(12)] = inst_60229);

(statearr_60308[(13)] = inst_60227);

(statearr_60308[(14)] = inst_60228);

(statearr_60308[(15)] = inst_60253);

(statearr_60308[(16)] = inst_60230);

return statearr_60308;
})();
var statearr_60309_61685 = state_60288__$1;
(statearr_60309_61685[(2)] = null);

(statearr_60309_61685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (3))){
var inst_60285 = (state_60288[(2)]);
var state_60288__$1 = state_60288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60288__$1,inst_60285);
} else {
if((state_val_60289 === (12))){
var inst_60262 = (state_60288[(2)]);
var state_60288__$1 = state_60288;
var statearr_60310_61686 = state_60288__$1;
(statearr_60310_61686[(2)] = inst_60262);

(statearr_60310_61686[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (2))){
var state_60288__$1 = state_60288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60288__$1,(4),ch);
} else {
if((state_val_60289 === (23))){
var state_60288__$1 = state_60288;
var statearr_60311_61687 = state_60288__$1;
(statearr_60311_61687[(2)] = null);

(statearr_60311_61687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (19))){
var inst_60216 = (state_60288[(8)]);
var inst_60268 = (state_60288[(11)]);
var inst_60270 = cljs.core.async.muxch_STAR_(inst_60268);
var state_60288__$1 = state_60288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60288__$1,(22),inst_60270,inst_60216);
} else {
if((state_val_60289 === (11))){
var inst_60227 = (state_60288[(13)]);
var inst_60241 = (state_60288[(10)]);
var inst_60241__$1 = cljs.core.seq(inst_60227);
var state_60288__$1 = (function (){var statearr_60312 = state_60288;
(statearr_60312[(10)] = inst_60241__$1);

return statearr_60312;
})();
if(inst_60241__$1){
var statearr_60313_61688 = state_60288__$1;
(statearr_60313_61688[(1)] = (13));

} else {
var statearr_60314_61689 = state_60288__$1;
(statearr_60314_61689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (9))){
var inst_60264 = (state_60288[(2)]);
var state_60288__$1 = state_60288;
var statearr_60315_61692 = state_60288__$1;
(statearr_60315_61692[(2)] = inst_60264);

(statearr_60315_61692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (5))){
var inst_60224 = cljs.core.deref(mults);
var inst_60225 = cljs.core.vals(inst_60224);
var inst_60226 = cljs.core.seq(inst_60225);
var inst_60227 = inst_60226;
var inst_60228 = null;
var inst_60229 = (0);
var inst_60230 = (0);
var state_60288__$1 = (function (){var statearr_60316 = state_60288;
(statearr_60316[(12)] = inst_60229);

(statearr_60316[(13)] = inst_60227);

(statearr_60316[(14)] = inst_60228);

(statearr_60316[(16)] = inst_60230);

return statearr_60316;
})();
var statearr_60317_61693 = state_60288__$1;
(statearr_60317_61693[(2)] = null);

(statearr_60317_61693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (14))){
var state_60288__$1 = state_60288;
var statearr_60321_61694 = state_60288__$1;
(statearr_60321_61694[(2)] = null);

(statearr_60321_61694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (16))){
var inst_60241 = (state_60288[(10)]);
var inst_60245 = cljs.core.chunk_first(inst_60241);
var inst_60247 = cljs.core.chunk_rest(inst_60241);
var inst_60248 = cljs.core.count(inst_60245);
var inst_60227 = inst_60247;
var inst_60228 = inst_60245;
var inst_60229 = inst_60248;
var inst_60230 = (0);
var state_60288__$1 = (function (){var statearr_60322 = state_60288;
(statearr_60322[(12)] = inst_60229);

(statearr_60322[(13)] = inst_60227);

(statearr_60322[(14)] = inst_60228);

(statearr_60322[(16)] = inst_60230);

return statearr_60322;
})();
var statearr_60323_61697 = state_60288__$1;
(statearr_60323_61697[(2)] = null);

(statearr_60323_61697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (10))){
var inst_60229 = (state_60288[(12)]);
var inst_60227 = (state_60288[(13)]);
var inst_60228 = (state_60288[(14)]);
var inst_60230 = (state_60288[(16)]);
var inst_60235 = cljs.core._nth(inst_60228,inst_60230);
var inst_60236 = cljs.core.async.muxch_STAR_(inst_60235);
var inst_60237 = cljs.core.async.close_BANG_(inst_60236);
var inst_60238 = (inst_60230 + (1));
var tmp60318 = inst_60229;
var tmp60319 = inst_60227;
var tmp60320 = inst_60228;
var inst_60227__$1 = tmp60319;
var inst_60228__$1 = tmp60320;
var inst_60229__$1 = tmp60318;
var inst_60230__$1 = inst_60238;
var state_60288__$1 = (function (){var statearr_60324 = state_60288;
(statearr_60324[(17)] = inst_60237);

(statearr_60324[(12)] = inst_60229__$1);

(statearr_60324[(13)] = inst_60227__$1);

(statearr_60324[(14)] = inst_60228__$1);

(statearr_60324[(16)] = inst_60230__$1);

return statearr_60324;
})();
var statearr_60325_61698 = state_60288__$1;
(statearr_60325_61698[(2)] = null);

(statearr_60325_61698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (18))){
var inst_60257 = (state_60288[(2)]);
var state_60288__$1 = state_60288;
var statearr_60326_61699 = state_60288__$1;
(statearr_60326_61699[(2)] = inst_60257);

(statearr_60326_61699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60289 === (8))){
var inst_60229 = (state_60288[(12)]);
var inst_60230 = (state_60288[(16)]);
var inst_60232 = (inst_60230 < inst_60229);
var inst_60233 = inst_60232;
var state_60288__$1 = state_60288;
if(cljs.core.truth_(inst_60233)){
var statearr_60327_61700 = state_60288__$1;
(statearr_60327_61700[(1)] = (10));

} else {
var statearr_60328_61701 = state_60288__$1;
(statearr_60328_61701[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_60329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60329[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_60329[(1)] = (1));

return statearr_60329;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_60288){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60288);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60330){var ex__58761__auto__ = e60330;
var statearr_60331_61708 = state_60288;
(statearr_60331_61708[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60288[(4)]))){
var statearr_60332_61709 = state_60288;
(statearr_60332_61709[(1)] = cljs.core.first((state_60288[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61710 = state_60288;
state_60288 = G__61710;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_60288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_60288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60333 = f__58894__auto__();
(statearr_60333[(6)] = c__58893__auto___61657);

return statearr_60333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__60335 = arguments.length;
switch (G__60335) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__60337 = arguments.length;
switch (G__60337) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__60339 = arguments.length;
switch (G__60339) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__58893__auto___61720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60383){
var state_val_60384 = (state_60383[(1)]);
if((state_val_60384 === (7))){
var state_60383__$1 = state_60383;
var statearr_60385_61721 = state_60383__$1;
(statearr_60385_61721[(2)] = null);

(statearr_60385_61721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (1))){
var state_60383__$1 = state_60383;
var statearr_60386_61722 = state_60383__$1;
(statearr_60386_61722[(2)] = null);

(statearr_60386_61722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (4))){
var inst_60343 = (state_60383[(7)]);
var inst_60342 = (state_60383[(8)]);
var inst_60345 = (inst_60343 < inst_60342);
var state_60383__$1 = state_60383;
if(cljs.core.truth_(inst_60345)){
var statearr_60388_61723 = state_60383__$1;
(statearr_60388_61723[(1)] = (6));

} else {
var statearr_60389_61724 = state_60383__$1;
(statearr_60389_61724[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (15))){
var inst_60368 = (state_60383[(9)]);
var inst_60373 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_60368);
var state_60383__$1 = state_60383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60383__$1,(17),out,inst_60373);
} else {
if((state_val_60384 === (13))){
var inst_60368 = (state_60383[(9)]);
var inst_60368__$1 = (state_60383[(2)]);
var inst_60369 = cljs.core.some(cljs.core.nil_QMARK_,inst_60368__$1);
var state_60383__$1 = (function (){var statearr_60390 = state_60383;
(statearr_60390[(9)] = inst_60368__$1);

return statearr_60390;
})();
if(cljs.core.truth_(inst_60369)){
var statearr_60391_61725 = state_60383__$1;
(statearr_60391_61725[(1)] = (14));

} else {
var statearr_60392_61726 = state_60383__$1;
(statearr_60392_61726[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (6))){
var state_60383__$1 = state_60383;
var statearr_60393_61727 = state_60383__$1;
(statearr_60393_61727[(2)] = null);

(statearr_60393_61727[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (17))){
var inst_60375 = (state_60383[(2)]);
var state_60383__$1 = (function (){var statearr_60395 = state_60383;
(statearr_60395[(10)] = inst_60375);

return statearr_60395;
})();
var statearr_60396_61728 = state_60383__$1;
(statearr_60396_61728[(2)] = null);

(statearr_60396_61728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (3))){
var inst_60380 = (state_60383[(2)]);
var state_60383__$1 = state_60383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60383__$1,inst_60380);
} else {
if((state_val_60384 === (12))){
var _ = (function (){var statearr_60397 = state_60383;
(statearr_60397[(4)] = cljs.core.rest((state_60383[(4)])));

return statearr_60397;
})();
var state_60383__$1 = state_60383;
var ex60394 = (state_60383__$1[(2)]);
var statearr_60398_61730 = state_60383__$1;
(statearr_60398_61730[(5)] = ex60394);


if((ex60394 instanceof Object)){
var statearr_60399_61731 = state_60383__$1;
(statearr_60399_61731[(1)] = (11));

(statearr_60399_61731[(5)] = null);

} else {
throw ex60394;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (2))){
var inst_60341 = cljs.core.reset_BANG_(dctr,cnt);
var inst_60342 = cnt;
var inst_60343 = (0);
var state_60383__$1 = (function (){var statearr_60400 = state_60383;
(statearr_60400[(7)] = inst_60343);

(statearr_60400[(8)] = inst_60342);

(statearr_60400[(11)] = inst_60341);

return statearr_60400;
})();
var statearr_60401_61733 = state_60383__$1;
(statearr_60401_61733[(2)] = null);

(statearr_60401_61733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (11))){
var inst_60347 = (state_60383[(2)]);
var inst_60348 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_60383__$1 = (function (){var statearr_60402 = state_60383;
(statearr_60402[(12)] = inst_60347);

return statearr_60402;
})();
var statearr_60403_61734 = state_60383__$1;
(statearr_60403_61734[(2)] = inst_60348);

(statearr_60403_61734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (9))){
var inst_60343 = (state_60383[(7)]);
var _ = (function (){var statearr_60404 = state_60383;
(statearr_60404[(4)] = cljs.core.cons((12),(state_60383[(4)])));

return statearr_60404;
})();
var inst_60354 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_60343) : chs__$1.call(null,inst_60343));
var inst_60355 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_60343) : done.call(null,inst_60343));
var inst_60356 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_60354,inst_60355);
var ___$1 = (function (){var statearr_60405 = state_60383;
(statearr_60405[(4)] = cljs.core.rest((state_60383[(4)])));

return statearr_60405;
})();
var state_60383__$1 = state_60383;
var statearr_60406_61735 = state_60383__$1;
(statearr_60406_61735[(2)] = inst_60356);

(statearr_60406_61735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (5))){
var inst_60366 = (state_60383[(2)]);
var state_60383__$1 = (function (){var statearr_60407 = state_60383;
(statearr_60407[(13)] = inst_60366);

return statearr_60407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60383__$1,(13),dchan);
} else {
if((state_val_60384 === (14))){
var inst_60371 = cljs.core.async.close_BANG_(out);
var state_60383__$1 = state_60383;
var statearr_60408_61736 = state_60383__$1;
(statearr_60408_61736[(2)] = inst_60371);

(statearr_60408_61736[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (16))){
var inst_60378 = (state_60383[(2)]);
var state_60383__$1 = state_60383;
var statearr_60409_61737 = state_60383__$1;
(statearr_60409_61737[(2)] = inst_60378);

(statearr_60409_61737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (10))){
var inst_60343 = (state_60383[(7)]);
var inst_60359 = (state_60383[(2)]);
var inst_60360 = (inst_60343 + (1));
var inst_60343__$1 = inst_60360;
var state_60383__$1 = (function (){var statearr_60410 = state_60383;
(statearr_60410[(14)] = inst_60359);

(statearr_60410[(7)] = inst_60343__$1);

return statearr_60410;
})();
var statearr_60411_61738 = state_60383__$1;
(statearr_60411_61738[(2)] = null);

(statearr_60411_61738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60384 === (8))){
var inst_60364 = (state_60383[(2)]);
var state_60383__$1 = state_60383;
var statearr_60412_61739 = state_60383__$1;
(statearr_60412_61739[(2)] = inst_60364);

(statearr_60412_61739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_60413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60413[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_60413[(1)] = (1));

return statearr_60413;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_60383){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60383);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60414){var ex__58761__auto__ = e60414;
var statearr_60415_61741 = state_60383;
(statearr_60415_61741[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60383[(4)]))){
var statearr_60416_61743 = state_60383;
(statearr_60416_61743[(1)] = cljs.core.first((state_60383[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61744 = state_60383;
state_60383 = G__61744;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_60383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_60383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60417 = f__58894__auto__();
(statearr_60417[(6)] = c__58893__auto___61720);

return statearr_60417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__60421 = arguments.length;
switch (G__60421) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58893__auto___61748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60453){
var state_val_60454 = (state_60453[(1)]);
if((state_val_60454 === (7))){
var inst_60432 = (state_60453[(7)]);
var inst_60433 = (state_60453[(8)]);
var inst_60432__$1 = (state_60453[(2)]);
var inst_60433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60432__$1,(0),null);
var inst_60434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60432__$1,(1),null);
var inst_60435 = (inst_60433__$1 == null);
var state_60453__$1 = (function (){var statearr_60455 = state_60453;
(statearr_60455[(7)] = inst_60432__$1);

(statearr_60455[(9)] = inst_60434);

(statearr_60455[(8)] = inst_60433__$1);

return statearr_60455;
})();
if(cljs.core.truth_(inst_60435)){
var statearr_60456_61750 = state_60453__$1;
(statearr_60456_61750[(1)] = (8));

} else {
var statearr_60457_61751 = state_60453__$1;
(statearr_60457_61751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60454 === (1))){
var inst_60422 = cljs.core.vec(chs);
var inst_60423 = inst_60422;
var state_60453__$1 = (function (){var statearr_60458 = state_60453;
(statearr_60458[(10)] = inst_60423);

return statearr_60458;
})();
var statearr_60459_61752 = state_60453__$1;
(statearr_60459_61752[(2)] = null);

(statearr_60459_61752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60454 === (4))){
var inst_60423 = (state_60453[(10)]);
var state_60453__$1 = state_60453;
return cljs.core.async.ioc_alts_BANG_(state_60453__$1,(7),inst_60423);
} else {
if((state_val_60454 === (6))){
var inst_60449 = (state_60453[(2)]);
var state_60453__$1 = state_60453;
var statearr_60460_61754 = state_60453__$1;
(statearr_60460_61754[(2)] = inst_60449);

(statearr_60460_61754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60454 === (3))){
var inst_60451 = (state_60453[(2)]);
var state_60453__$1 = state_60453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60453__$1,inst_60451);
} else {
if((state_val_60454 === (2))){
var inst_60423 = (state_60453[(10)]);
var inst_60425 = cljs.core.count(inst_60423);
var inst_60426 = (inst_60425 > (0));
var state_60453__$1 = state_60453;
if(cljs.core.truth_(inst_60426)){
var statearr_60462_61755 = state_60453__$1;
(statearr_60462_61755[(1)] = (4));

} else {
var statearr_60463_61756 = state_60453__$1;
(statearr_60463_61756[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60454 === (11))){
var inst_60423 = (state_60453[(10)]);
var inst_60442 = (state_60453[(2)]);
var tmp60461 = inst_60423;
var inst_60423__$1 = tmp60461;
var state_60453__$1 = (function (){var statearr_60464 = state_60453;
(statearr_60464[(10)] = inst_60423__$1);

(statearr_60464[(11)] = inst_60442);

return statearr_60464;
})();
var statearr_60465_61757 = state_60453__$1;
(statearr_60465_61757[(2)] = null);

(statearr_60465_61757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60454 === (9))){
var inst_60433 = (state_60453[(8)]);
var state_60453__$1 = state_60453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60453__$1,(11),out,inst_60433);
} else {
if((state_val_60454 === (5))){
var inst_60447 = cljs.core.async.close_BANG_(out);
var state_60453__$1 = state_60453;
var statearr_60466_61759 = state_60453__$1;
(statearr_60466_61759[(2)] = inst_60447);

(statearr_60466_61759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60454 === (10))){
var inst_60445 = (state_60453[(2)]);
var state_60453__$1 = state_60453;
var statearr_60467_61762 = state_60453__$1;
(statearr_60467_61762[(2)] = inst_60445);

(statearr_60467_61762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60454 === (8))){
var inst_60432 = (state_60453[(7)]);
var inst_60434 = (state_60453[(9)]);
var inst_60423 = (state_60453[(10)]);
var inst_60433 = (state_60453[(8)]);
var inst_60437 = (function (){var cs = inst_60423;
var vec__60428 = inst_60432;
var v = inst_60433;
var c = inst_60434;
return (function (p1__60419_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__60419_SHARP_);
});
})();
var inst_60438 = cljs.core.filterv(inst_60437,inst_60423);
var inst_60423__$1 = inst_60438;
var state_60453__$1 = (function (){var statearr_60468 = state_60453;
(statearr_60468[(10)] = inst_60423__$1);

return statearr_60468;
})();
var statearr_60469_61772 = state_60453__$1;
(statearr_60469_61772[(2)] = null);

(statearr_60469_61772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_60470 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60470[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_60470[(1)] = (1));

return statearr_60470;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_60453){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60453);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60471){var ex__58761__auto__ = e60471;
var statearr_60472_61778 = state_60453;
(statearr_60472_61778[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60453[(4)]))){
var statearr_60473_61779 = state_60453;
(statearr_60473_61779[(1)] = cljs.core.first((state_60453[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61780 = state_60453;
state_60453 = G__61780;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_60453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_60453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60474 = f__58894__auto__();
(statearr_60474[(6)] = c__58893__auto___61748);

return statearr_60474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__60476 = arguments.length;
switch (G__60476) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58893__auto___61787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60500){
var state_val_60501 = (state_60500[(1)]);
if((state_val_60501 === (7))){
var inst_60482 = (state_60500[(7)]);
var inst_60482__$1 = (state_60500[(2)]);
var inst_60483 = (inst_60482__$1 == null);
var inst_60484 = cljs.core.not(inst_60483);
var state_60500__$1 = (function (){var statearr_60502 = state_60500;
(statearr_60502[(7)] = inst_60482__$1);

return statearr_60502;
})();
if(inst_60484){
var statearr_60503_61797 = state_60500__$1;
(statearr_60503_61797[(1)] = (8));

} else {
var statearr_60504_61798 = state_60500__$1;
(statearr_60504_61798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (1))){
var inst_60477 = (0);
var state_60500__$1 = (function (){var statearr_60505 = state_60500;
(statearr_60505[(8)] = inst_60477);

return statearr_60505;
})();
var statearr_60506_61800 = state_60500__$1;
(statearr_60506_61800[(2)] = null);

(statearr_60506_61800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (4))){
var state_60500__$1 = state_60500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60500__$1,(7),ch);
} else {
if((state_val_60501 === (6))){
var inst_60495 = (state_60500[(2)]);
var state_60500__$1 = state_60500;
var statearr_60507_61806 = state_60500__$1;
(statearr_60507_61806[(2)] = inst_60495);

(statearr_60507_61806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (3))){
var inst_60497 = (state_60500[(2)]);
var inst_60498 = cljs.core.async.close_BANG_(out);
var state_60500__$1 = (function (){var statearr_60508 = state_60500;
(statearr_60508[(9)] = inst_60497);

return statearr_60508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60500__$1,inst_60498);
} else {
if((state_val_60501 === (2))){
var inst_60477 = (state_60500[(8)]);
var inst_60479 = (inst_60477 < n);
var state_60500__$1 = state_60500;
if(cljs.core.truth_(inst_60479)){
var statearr_60509_61815 = state_60500__$1;
(statearr_60509_61815[(1)] = (4));

} else {
var statearr_60510_61818 = state_60500__$1;
(statearr_60510_61818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (11))){
var inst_60477 = (state_60500[(8)]);
var inst_60487 = (state_60500[(2)]);
var inst_60488 = (inst_60477 + (1));
var inst_60477__$1 = inst_60488;
var state_60500__$1 = (function (){var statearr_60511 = state_60500;
(statearr_60511[(8)] = inst_60477__$1);

(statearr_60511[(10)] = inst_60487);

return statearr_60511;
})();
var statearr_60512_61820 = state_60500__$1;
(statearr_60512_61820[(2)] = null);

(statearr_60512_61820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (9))){
var state_60500__$1 = state_60500;
var statearr_60513_61821 = state_60500__$1;
(statearr_60513_61821[(2)] = null);

(statearr_60513_61821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (5))){
var state_60500__$1 = state_60500;
var statearr_60514_61822 = state_60500__$1;
(statearr_60514_61822[(2)] = null);

(statearr_60514_61822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (10))){
var inst_60492 = (state_60500[(2)]);
var state_60500__$1 = state_60500;
var statearr_60515_61824 = state_60500__$1;
(statearr_60515_61824[(2)] = inst_60492);

(statearr_60515_61824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (8))){
var inst_60482 = (state_60500[(7)]);
var state_60500__$1 = state_60500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60500__$1,(11),out,inst_60482);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_60517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60517[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_60517[(1)] = (1));

return statearr_60517;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_60500){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60500);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60518){var ex__58761__auto__ = e60518;
var statearr_60519_61826 = state_60500;
(statearr_60519_61826[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60500[(4)]))){
var statearr_60520_61828 = state_60500;
(statearr_60520_61828[(1)] = cljs.core.first((state_60500[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61830 = state_60500;
state_60500 = G__61830;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_60500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_60500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60521 = f__58894__auto__();
(statearr_60521[(6)] = c__58893__auto___61787);

return statearr_60521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60523 = (function (f,ch,meta60524){
this.f = f;
this.ch = ch;
this.meta60524 = meta60524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60525,meta60524__$1){
var self__ = this;
var _60525__$1 = this;
return (new cljs.core.async.t_cljs$core$async60523(self__.f,self__.ch,meta60524__$1));
}));

(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60525){
var self__ = this;
var _60525__$1 = this;
return self__.meta60524;
}));

(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60526 = (function (f,ch,meta60524,_,fn1,meta60527){
this.f = f;
this.ch = ch;
this.meta60524 = meta60524;
this._ = _;
this.fn1 = fn1;
this.meta60527 = meta60527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60528,meta60527__$1){
var self__ = this;
var _60528__$1 = this;
return (new cljs.core.async.t_cljs$core$async60526(self__.f,self__.ch,self__.meta60524,self__._,self__.fn1,meta60527__$1));
}));

(cljs.core.async.t_cljs$core$async60526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60528){
var self__ = this;
var _60528__$1 = this;
return self__.meta60527;
}));

(cljs.core.async.t_cljs$core$async60526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async60526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__60522_SHARP_){
var G__60529 = (((p1__60522_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__60522_SHARP_) : self__.f.call(null,p1__60522_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__60529) : f1.call(null,G__60529));
});
}));

(cljs.core.async.t_cljs$core$async60526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60524","meta60524",-1423392375,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60523","cljs.core.async/t_cljs$core$async60523",1829647905,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60527","meta60527",213369313,null)], null);
}));

(cljs.core.async.t_cljs$core$async60526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60526");

(cljs.core.async.t_cljs$core$async60526.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60526.
 */
cljs.core.async.__GT_t_cljs$core$async60526 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60526(f__$1,ch__$1,meta60524__$1,___$2,fn1__$1,meta60527){
return (new cljs.core.async.t_cljs$core$async60526(f__$1,ch__$1,meta60524__$1,___$2,fn1__$1,meta60527));
});

}

return (new cljs.core.async.t_cljs$core$async60526(self__.f,self__.ch,self__.meta60524,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__60530 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__60530) : self__.f.call(null,G__60530));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async60523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60524","meta60524",-1423392375,null)], null);
}));

(cljs.core.async.t_cljs$core$async60523.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60523");

(cljs.core.async.t_cljs$core$async60523.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60523");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60523.
 */
cljs.core.async.__GT_t_cljs$core$async60523 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60523(f__$1,ch__$1,meta60524){
return (new cljs.core.async.t_cljs$core$async60523(f__$1,ch__$1,meta60524));
});

}

return (new cljs.core.async.t_cljs$core$async60523(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60531 = (function (f,ch,meta60532){
this.f = f;
this.ch = ch;
this.meta60532 = meta60532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60533,meta60532__$1){
var self__ = this;
var _60533__$1 = this;
return (new cljs.core.async.t_cljs$core$async60531(self__.f,self__.ch,meta60532__$1));
}));

(cljs.core.async.t_cljs$core$async60531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60533){
var self__ = this;
var _60533__$1 = this;
return self__.meta60532;
}));

(cljs.core.async.t_cljs$core$async60531.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60531.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60531.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async60531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60532","meta60532",-988267902,null)], null);
}));

(cljs.core.async.t_cljs$core$async60531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60531");

(cljs.core.async.t_cljs$core$async60531.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60531.
 */
cljs.core.async.__GT_t_cljs$core$async60531 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60531(f__$1,ch__$1,meta60532){
return (new cljs.core.async.t_cljs$core$async60531(f__$1,ch__$1,meta60532));
});

}

return (new cljs.core.async.t_cljs$core$async60531(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60534 = (function (p,ch,meta60535){
this.p = p;
this.ch = ch;
this.meta60535 = meta60535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60536,meta60535__$1){
var self__ = this;
var _60536__$1 = this;
return (new cljs.core.async.t_cljs$core$async60534(self__.p,self__.ch,meta60535__$1));
}));

(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60536){
var self__ = this;
var _60536__$1 = this;
return self__.meta60535;
}));

(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async60534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60535","meta60535",-1500295208,null)], null);
}));

(cljs.core.async.t_cljs$core$async60534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60534");

(cljs.core.async.t_cljs$core$async60534.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60534.
 */
cljs.core.async.__GT_t_cljs$core$async60534 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60534(p__$1,ch__$1,meta60535){
return (new cljs.core.async.t_cljs$core$async60534(p__$1,ch__$1,meta60535));
});

}

return (new cljs.core.async.t_cljs$core$async60534(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__60543 = arguments.length;
switch (G__60543) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58893__auto___61974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60568){
var state_val_60569 = (state_60568[(1)]);
if((state_val_60569 === (7))){
var inst_60564 = (state_60568[(2)]);
var state_60568__$1 = state_60568;
var statearr_60570_61976 = state_60568__$1;
(statearr_60570_61976[(2)] = inst_60564);

(statearr_60570_61976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60569 === (1))){
var state_60568__$1 = state_60568;
var statearr_60574_61977 = state_60568__$1;
(statearr_60574_61977[(2)] = null);

(statearr_60574_61977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60569 === (4))){
var inst_60550 = (state_60568[(7)]);
var inst_60550__$1 = (state_60568[(2)]);
var inst_60551 = (inst_60550__$1 == null);
var state_60568__$1 = (function (){var statearr_60575 = state_60568;
(statearr_60575[(7)] = inst_60550__$1);

return statearr_60575;
})();
if(cljs.core.truth_(inst_60551)){
var statearr_60576_61984 = state_60568__$1;
(statearr_60576_61984[(1)] = (5));

} else {
var statearr_60577_61985 = state_60568__$1;
(statearr_60577_61985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60569 === (6))){
var inst_60550 = (state_60568[(7)]);
var inst_60555 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_60550) : p.call(null,inst_60550));
var state_60568__$1 = state_60568;
if(cljs.core.truth_(inst_60555)){
var statearr_60581_61990 = state_60568__$1;
(statearr_60581_61990[(1)] = (8));

} else {
var statearr_60582_61992 = state_60568__$1;
(statearr_60582_61992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60569 === (3))){
var inst_60566 = (state_60568[(2)]);
var state_60568__$1 = state_60568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60568__$1,inst_60566);
} else {
if((state_val_60569 === (2))){
var state_60568__$1 = state_60568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60568__$1,(4),ch);
} else {
if((state_val_60569 === (11))){
var inst_60558 = (state_60568[(2)]);
var state_60568__$1 = state_60568;
var statearr_60591_62014 = state_60568__$1;
(statearr_60591_62014[(2)] = inst_60558);

(statearr_60591_62014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60569 === (9))){
var state_60568__$1 = state_60568;
var statearr_60592_62016 = state_60568__$1;
(statearr_60592_62016[(2)] = null);

(statearr_60592_62016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60569 === (5))){
var inst_60553 = cljs.core.async.close_BANG_(out);
var state_60568__$1 = state_60568;
var statearr_60593_62024 = state_60568__$1;
(statearr_60593_62024[(2)] = inst_60553);

(statearr_60593_62024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60569 === (10))){
var inst_60561 = (state_60568[(2)]);
var state_60568__$1 = (function (){var statearr_60594 = state_60568;
(statearr_60594[(8)] = inst_60561);

return statearr_60594;
})();
var statearr_60595_62032 = state_60568__$1;
(statearr_60595_62032[(2)] = null);

(statearr_60595_62032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60569 === (8))){
var inst_60550 = (state_60568[(7)]);
var state_60568__$1 = state_60568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60568__$1,(11),out,inst_60550);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_60596 = [null,null,null,null,null,null,null,null,null];
(statearr_60596[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_60596[(1)] = (1));

return statearr_60596;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_60568){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60568);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60597){var ex__58761__auto__ = e60597;
var statearr_60598_62057 = state_60568;
(statearr_60598_62057[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60568[(4)]))){
var statearr_60599_62058 = state_60568;
(statearr_60599_62058[(1)] = cljs.core.first((state_60568[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62059 = state_60568;
state_60568 = G__62059;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_60568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_60568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60600 = f__58894__auto__();
(statearr_60600[(6)] = c__58893__auto___61974);

return statearr_60600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60602 = arguments.length;
switch (G__60602) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__58893__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60675){
var state_val_60676 = (state_60675[(1)]);
if((state_val_60676 === (7))){
var inst_60671 = (state_60675[(2)]);
var state_60675__$1 = state_60675;
var statearr_60680_62065 = state_60675__$1;
(statearr_60680_62065[(2)] = inst_60671);

(statearr_60680_62065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (20))){
var inst_60638 = (state_60675[(7)]);
var inst_60652 = (state_60675[(2)]);
var inst_60653 = cljs.core.next(inst_60638);
var inst_60624 = inst_60653;
var inst_60625 = null;
var inst_60626 = (0);
var inst_60627 = (0);
var state_60675__$1 = (function (){var statearr_60681 = state_60675;
(statearr_60681[(8)] = inst_60624);

(statearr_60681[(9)] = inst_60625);

(statearr_60681[(10)] = inst_60652);

(statearr_60681[(11)] = inst_60627);

(statearr_60681[(12)] = inst_60626);

return statearr_60681;
})();
var statearr_60682_62069 = state_60675__$1;
(statearr_60682_62069[(2)] = null);

(statearr_60682_62069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (1))){
var state_60675__$1 = state_60675;
var statearr_60683_62071 = state_60675__$1;
(statearr_60683_62071[(2)] = null);

(statearr_60683_62071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (4))){
var inst_60613 = (state_60675[(13)]);
var inst_60613__$1 = (state_60675[(2)]);
var inst_60614 = (inst_60613__$1 == null);
var state_60675__$1 = (function (){var statearr_60684 = state_60675;
(statearr_60684[(13)] = inst_60613__$1);

return statearr_60684;
})();
if(cljs.core.truth_(inst_60614)){
var statearr_60685_62080 = state_60675__$1;
(statearr_60685_62080[(1)] = (5));

} else {
var statearr_60686_62081 = state_60675__$1;
(statearr_60686_62081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (15))){
var state_60675__$1 = state_60675;
var statearr_60690_62086 = state_60675__$1;
(statearr_60690_62086[(2)] = null);

(statearr_60690_62086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (21))){
var state_60675__$1 = state_60675;
var statearr_60694_62087 = state_60675__$1;
(statearr_60694_62087[(2)] = null);

(statearr_60694_62087[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (13))){
var inst_60624 = (state_60675[(8)]);
var inst_60625 = (state_60675[(9)]);
var inst_60627 = (state_60675[(11)]);
var inst_60626 = (state_60675[(12)]);
var inst_60634 = (state_60675[(2)]);
var inst_60635 = (inst_60627 + (1));
var tmp60687 = inst_60624;
var tmp60688 = inst_60625;
var tmp60689 = inst_60626;
var inst_60624__$1 = tmp60687;
var inst_60625__$1 = tmp60688;
var inst_60626__$1 = tmp60689;
var inst_60627__$1 = inst_60635;
var state_60675__$1 = (function (){var statearr_60698 = state_60675;
(statearr_60698[(8)] = inst_60624__$1);

(statearr_60698[(9)] = inst_60625__$1);

(statearr_60698[(14)] = inst_60634);

(statearr_60698[(11)] = inst_60627__$1);

(statearr_60698[(12)] = inst_60626__$1);

return statearr_60698;
})();
var statearr_60699_62096 = state_60675__$1;
(statearr_60699_62096[(2)] = null);

(statearr_60699_62096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (22))){
var state_60675__$1 = state_60675;
var statearr_60700_62097 = state_60675__$1;
(statearr_60700_62097[(2)] = null);

(statearr_60700_62097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (6))){
var inst_60613 = (state_60675[(13)]);
var inst_60622 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60613) : f.call(null,inst_60613));
var inst_60623 = cljs.core.seq(inst_60622);
var inst_60624 = inst_60623;
var inst_60625 = null;
var inst_60626 = (0);
var inst_60627 = (0);
var state_60675__$1 = (function (){var statearr_60701 = state_60675;
(statearr_60701[(8)] = inst_60624);

(statearr_60701[(9)] = inst_60625);

(statearr_60701[(11)] = inst_60627);

(statearr_60701[(12)] = inst_60626);

return statearr_60701;
})();
var statearr_60704_62098 = state_60675__$1;
(statearr_60704_62098[(2)] = null);

(statearr_60704_62098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (17))){
var inst_60638 = (state_60675[(7)]);
var inst_60642 = cljs.core.chunk_first(inst_60638);
var inst_60643 = cljs.core.chunk_rest(inst_60638);
var inst_60644 = cljs.core.count(inst_60642);
var inst_60624 = inst_60643;
var inst_60625 = inst_60642;
var inst_60626 = inst_60644;
var inst_60627 = (0);
var state_60675__$1 = (function (){var statearr_60711 = state_60675;
(statearr_60711[(8)] = inst_60624);

(statearr_60711[(9)] = inst_60625);

(statearr_60711[(11)] = inst_60627);

(statearr_60711[(12)] = inst_60626);

return statearr_60711;
})();
var statearr_60712_62106 = state_60675__$1;
(statearr_60712_62106[(2)] = null);

(statearr_60712_62106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (3))){
var inst_60673 = (state_60675[(2)]);
var state_60675__$1 = state_60675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60675__$1,inst_60673);
} else {
if((state_val_60676 === (12))){
var inst_60661 = (state_60675[(2)]);
var state_60675__$1 = state_60675;
var statearr_60713_62111 = state_60675__$1;
(statearr_60713_62111[(2)] = inst_60661);

(statearr_60713_62111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (2))){
var state_60675__$1 = state_60675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60675__$1,(4),in$);
} else {
if((state_val_60676 === (23))){
var inst_60669 = (state_60675[(2)]);
var state_60675__$1 = state_60675;
var statearr_60714_62116 = state_60675__$1;
(statearr_60714_62116[(2)] = inst_60669);

(statearr_60714_62116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (19))){
var inst_60656 = (state_60675[(2)]);
var state_60675__$1 = state_60675;
var statearr_60715_62120 = state_60675__$1;
(statearr_60715_62120[(2)] = inst_60656);

(statearr_60715_62120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (11))){
var inst_60624 = (state_60675[(8)]);
var inst_60638 = (state_60675[(7)]);
var inst_60638__$1 = cljs.core.seq(inst_60624);
var state_60675__$1 = (function (){var statearr_60716 = state_60675;
(statearr_60716[(7)] = inst_60638__$1);

return statearr_60716;
})();
if(inst_60638__$1){
var statearr_60717_62121 = state_60675__$1;
(statearr_60717_62121[(1)] = (14));

} else {
var statearr_60720_62122 = state_60675__$1;
(statearr_60720_62122[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (9))){
var inst_60663 = (state_60675[(2)]);
var inst_60664 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_60675__$1 = (function (){var statearr_60722 = state_60675;
(statearr_60722[(15)] = inst_60663);

return statearr_60722;
})();
if(cljs.core.truth_(inst_60664)){
var statearr_60723_62123 = state_60675__$1;
(statearr_60723_62123[(1)] = (21));

} else {
var statearr_60724_62124 = state_60675__$1;
(statearr_60724_62124[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (5))){
var inst_60616 = cljs.core.async.close_BANG_(out);
var state_60675__$1 = state_60675;
var statearr_60725_62125 = state_60675__$1;
(statearr_60725_62125[(2)] = inst_60616);

(statearr_60725_62125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (14))){
var inst_60638 = (state_60675[(7)]);
var inst_60640 = cljs.core.chunked_seq_QMARK_(inst_60638);
var state_60675__$1 = state_60675;
if(inst_60640){
var statearr_60726_62129 = state_60675__$1;
(statearr_60726_62129[(1)] = (17));

} else {
var statearr_60727_62130 = state_60675__$1;
(statearr_60727_62130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (16))){
var inst_60659 = (state_60675[(2)]);
var state_60675__$1 = state_60675;
var statearr_60731_62131 = state_60675__$1;
(statearr_60731_62131[(2)] = inst_60659);

(statearr_60731_62131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60676 === (10))){
var inst_60625 = (state_60675[(9)]);
var inst_60627 = (state_60675[(11)]);
var inst_60632 = cljs.core._nth(inst_60625,inst_60627);
var state_60675__$1 = state_60675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60675__$1,(13),out,inst_60632);
} else {
if((state_val_60676 === (18))){
var inst_60638 = (state_60675[(7)]);
var inst_60650 = cljs.core.first(inst_60638);
var state_60675__$1 = state_60675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60675__$1,(20),out,inst_60650);
} else {
if((state_val_60676 === (8))){
var inst_60627 = (state_60675[(11)]);
var inst_60626 = (state_60675[(12)]);
var inst_60629 = (inst_60627 < inst_60626);
var inst_60630 = inst_60629;
var state_60675__$1 = state_60675;
if(cljs.core.truth_(inst_60630)){
var statearr_60732_62132 = state_60675__$1;
(statearr_60732_62132[(1)] = (10));

} else {
var statearr_60733_62134 = state_60675__$1;
(statearr_60733_62134[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__58758__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__58758__auto____0 = (function (){
var statearr_60734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60734[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__58758__auto__);

(statearr_60734[(1)] = (1));

return statearr_60734;
});
var cljs$core$async$mapcat_STAR__$_state_machine__58758__auto____1 = (function (state_60675){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60675);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60735){var ex__58761__auto__ = e60735;
var statearr_60738_62139 = state_60675;
(statearr_60738_62139[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60675[(4)]))){
var statearr_60741_62140 = state_60675;
(statearr_60741_62140[(1)] = cljs.core.first((state_60675[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62141 = state_60675;
state_60675 = G__62141;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__58758__auto__ = function(state_60675){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__58758__auto____1.call(this,state_60675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__58758__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__58758__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60743 = f__58894__auto__();
(statearr_60743[(6)] = c__58893__auto__);

return statearr_60743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));

return c__58893__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__60746 = arguments.length;
switch (G__60746) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__60748 = arguments.length;
switch (G__60748) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__60758 = arguments.length;
switch (G__60758) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58893__auto___62147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60786){
var state_val_60787 = (state_60786[(1)]);
if((state_val_60787 === (7))){
var inst_60781 = (state_60786[(2)]);
var state_60786__$1 = state_60786;
var statearr_60788_62149 = state_60786__$1;
(statearr_60788_62149[(2)] = inst_60781);

(statearr_60788_62149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (1))){
var inst_60761 = null;
var state_60786__$1 = (function (){var statearr_60791 = state_60786;
(statearr_60791[(7)] = inst_60761);

return statearr_60791;
})();
var statearr_60792_62150 = state_60786__$1;
(statearr_60792_62150[(2)] = null);

(statearr_60792_62150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (4))){
var inst_60764 = (state_60786[(8)]);
var inst_60764__$1 = (state_60786[(2)]);
var inst_60765 = (inst_60764__$1 == null);
var inst_60766 = cljs.core.not(inst_60765);
var state_60786__$1 = (function (){var statearr_60793 = state_60786;
(statearr_60793[(8)] = inst_60764__$1);

return statearr_60793;
})();
if(inst_60766){
var statearr_60794_62151 = state_60786__$1;
(statearr_60794_62151[(1)] = (5));

} else {
var statearr_60795_62152 = state_60786__$1;
(statearr_60795_62152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (6))){
var state_60786__$1 = state_60786;
var statearr_60796_62153 = state_60786__$1;
(statearr_60796_62153[(2)] = null);

(statearr_60796_62153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (3))){
var inst_60783 = (state_60786[(2)]);
var inst_60784 = cljs.core.async.close_BANG_(out);
var state_60786__$1 = (function (){var statearr_60797 = state_60786;
(statearr_60797[(9)] = inst_60783);

return statearr_60797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60786__$1,inst_60784);
} else {
if((state_val_60787 === (2))){
var state_60786__$1 = state_60786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60786__$1,(4),ch);
} else {
if((state_val_60787 === (11))){
var inst_60764 = (state_60786[(8)]);
var inst_60774 = (state_60786[(2)]);
var inst_60761 = inst_60764;
var state_60786__$1 = (function (){var statearr_60798 = state_60786;
(statearr_60798[(10)] = inst_60774);

(statearr_60798[(7)] = inst_60761);

return statearr_60798;
})();
var statearr_60799_62154 = state_60786__$1;
(statearr_60799_62154[(2)] = null);

(statearr_60799_62154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (9))){
var inst_60764 = (state_60786[(8)]);
var state_60786__$1 = state_60786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60786__$1,(11),out,inst_60764);
} else {
if((state_val_60787 === (5))){
var inst_60761 = (state_60786[(7)]);
var inst_60764 = (state_60786[(8)]);
var inst_60768 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60764,inst_60761);
var state_60786__$1 = state_60786;
if(inst_60768){
var statearr_60802_62159 = state_60786__$1;
(statearr_60802_62159[(1)] = (8));

} else {
var statearr_60803_62160 = state_60786__$1;
(statearr_60803_62160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (10))){
var inst_60777 = (state_60786[(2)]);
var state_60786__$1 = state_60786;
var statearr_60804_62161 = state_60786__$1;
(statearr_60804_62161[(2)] = inst_60777);

(statearr_60804_62161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (8))){
var inst_60761 = (state_60786[(7)]);
var tmp60801 = inst_60761;
var inst_60761__$1 = tmp60801;
var state_60786__$1 = (function (){var statearr_60805 = state_60786;
(statearr_60805[(7)] = inst_60761__$1);

return statearr_60805;
})();
var statearr_60808_62163 = state_60786__$1;
(statearr_60808_62163[(2)] = null);

(statearr_60808_62163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_60810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60810[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_60810[(1)] = (1));

return statearr_60810;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_60786){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60786);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60811){var ex__58761__auto__ = e60811;
var statearr_60812_62165 = state_60786;
(statearr_60812_62165[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60786[(4)]))){
var statearr_60813_62166 = state_60786;
(statearr_60813_62166[(1)] = cljs.core.first((state_60786[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62167 = state_60786;
state_60786 = G__62167;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_60786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_60786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60818 = f__58894__auto__();
(statearr_60818[(6)] = c__58893__auto___62147);

return statearr_60818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60836 = arguments.length;
switch (G__60836) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58893__auto___62176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60874){
var state_val_60875 = (state_60874[(1)]);
if((state_val_60875 === (7))){
var inst_60870 = (state_60874[(2)]);
var state_60874__$1 = state_60874;
var statearr_60876_62178 = state_60874__$1;
(statearr_60876_62178[(2)] = inst_60870);

(statearr_60876_62178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (1))){
var inst_60837 = (new Array(n));
var inst_60838 = inst_60837;
var inst_60839 = (0);
var state_60874__$1 = (function (){var statearr_60877 = state_60874;
(statearr_60877[(7)] = inst_60838);

(statearr_60877[(8)] = inst_60839);

return statearr_60877;
})();
var statearr_60878_62179 = state_60874__$1;
(statearr_60878_62179[(2)] = null);

(statearr_60878_62179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (4))){
var inst_60842 = (state_60874[(9)]);
var inst_60842__$1 = (state_60874[(2)]);
var inst_60843 = (inst_60842__$1 == null);
var inst_60844 = cljs.core.not(inst_60843);
var state_60874__$1 = (function (){var statearr_60879 = state_60874;
(statearr_60879[(9)] = inst_60842__$1);

return statearr_60879;
})();
if(inst_60844){
var statearr_60880_62191 = state_60874__$1;
(statearr_60880_62191[(1)] = (5));

} else {
var statearr_60881_62192 = state_60874__$1;
(statearr_60881_62192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (15))){
var inst_60864 = (state_60874[(2)]);
var state_60874__$1 = state_60874;
var statearr_60882_62197 = state_60874__$1;
(statearr_60882_62197[(2)] = inst_60864);

(statearr_60882_62197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (13))){
var state_60874__$1 = state_60874;
var statearr_60883_62201 = state_60874__$1;
(statearr_60883_62201[(2)] = null);

(statearr_60883_62201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (6))){
var inst_60839 = (state_60874[(8)]);
var inst_60860 = (inst_60839 > (0));
var state_60874__$1 = state_60874;
if(cljs.core.truth_(inst_60860)){
var statearr_60884_62209 = state_60874__$1;
(statearr_60884_62209[(1)] = (12));

} else {
var statearr_60885_62214 = state_60874__$1;
(statearr_60885_62214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (3))){
var inst_60872 = (state_60874[(2)]);
var state_60874__$1 = state_60874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60874__$1,inst_60872);
} else {
if((state_val_60875 === (12))){
var inst_60838 = (state_60874[(7)]);
var inst_60862 = cljs.core.vec(inst_60838);
var state_60874__$1 = state_60874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60874__$1,(15),out,inst_60862);
} else {
if((state_val_60875 === (2))){
var state_60874__$1 = state_60874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60874__$1,(4),ch);
} else {
if((state_val_60875 === (11))){
var inst_60854 = (state_60874[(2)]);
var inst_60855 = (new Array(n));
var inst_60838 = inst_60855;
var inst_60839 = (0);
var state_60874__$1 = (function (){var statearr_60886 = state_60874;
(statearr_60886[(7)] = inst_60838);

(statearr_60886[(10)] = inst_60854);

(statearr_60886[(8)] = inst_60839);

return statearr_60886;
})();
var statearr_60887_62224 = state_60874__$1;
(statearr_60887_62224[(2)] = null);

(statearr_60887_62224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (9))){
var inst_60838 = (state_60874[(7)]);
var inst_60852 = cljs.core.vec(inst_60838);
var state_60874__$1 = state_60874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60874__$1,(11),out,inst_60852);
} else {
if((state_val_60875 === (5))){
var inst_60838 = (state_60874[(7)]);
var inst_60847 = (state_60874[(11)]);
var inst_60842 = (state_60874[(9)]);
var inst_60839 = (state_60874[(8)]);
var inst_60846 = (inst_60838[inst_60839] = inst_60842);
var inst_60847__$1 = (inst_60839 + (1));
var inst_60848 = (inst_60847__$1 < n);
var state_60874__$1 = (function (){var statearr_60888 = state_60874;
(statearr_60888[(12)] = inst_60846);

(statearr_60888[(11)] = inst_60847__$1);

return statearr_60888;
})();
if(cljs.core.truth_(inst_60848)){
var statearr_60889_62256 = state_60874__$1;
(statearr_60889_62256[(1)] = (8));

} else {
var statearr_60890_62262 = state_60874__$1;
(statearr_60890_62262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (14))){
var inst_60867 = (state_60874[(2)]);
var inst_60868 = cljs.core.async.close_BANG_(out);
var state_60874__$1 = (function (){var statearr_60892 = state_60874;
(statearr_60892[(13)] = inst_60867);

return statearr_60892;
})();
var statearr_60893_62275 = state_60874__$1;
(statearr_60893_62275[(2)] = inst_60868);

(statearr_60893_62275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (10))){
var inst_60858 = (state_60874[(2)]);
var state_60874__$1 = state_60874;
var statearr_60894_62285 = state_60874__$1;
(statearr_60894_62285[(2)] = inst_60858);

(statearr_60894_62285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60875 === (8))){
var inst_60838 = (state_60874[(7)]);
var inst_60847 = (state_60874[(11)]);
var tmp60891 = inst_60838;
var inst_60838__$1 = tmp60891;
var inst_60839 = inst_60847;
var state_60874__$1 = (function (){var statearr_60895 = state_60874;
(statearr_60895[(7)] = inst_60838__$1);

(statearr_60895[(8)] = inst_60839);

return statearr_60895;
})();
var statearr_60896_62296 = state_60874__$1;
(statearr_60896_62296[(2)] = null);

(statearr_60896_62296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_60897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60897[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_60897[(1)] = (1));

return statearr_60897;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_60874){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60874);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60898){var ex__58761__auto__ = e60898;
var statearr_60899_62319 = state_60874;
(statearr_60899_62319[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60874[(4)]))){
var statearr_60900_62324 = state_60874;
(statearr_60900_62324[(1)] = cljs.core.first((state_60874[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62335 = state_60874;
state_60874 = G__62335;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_60874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_60874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60909 = f__58894__auto__();
(statearr_60909[(6)] = c__58893__auto___62176);

return statearr_60909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60919 = arguments.length;
switch (G__60919) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__58893__auto___62339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__58894__auto__ = (function (){var switch__58757__auto__ = (function (state_60965){
var state_val_60966 = (state_60965[(1)]);
if((state_val_60966 === (7))){
var inst_60961 = (state_60965[(2)]);
var state_60965__$1 = state_60965;
var statearr_60967_62348 = state_60965__$1;
(statearr_60967_62348[(2)] = inst_60961);

(statearr_60967_62348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (1))){
var inst_60924 = [];
var inst_60925 = inst_60924;
var inst_60926 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60965__$1 = (function (){var statearr_60968 = state_60965;
(statearr_60968[(7)] = inst_60925);

(statearr_60968[(8)] = inst_60926);

return statearr_60968;
})();
var statearr_60969_62350 = state_60965__$1;
(statearr_60969_62350[(2)] = null);

(statearr_60969_62350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (4))){
var inst_60929 = (state_60965[(9)]);
var inst_60929__$1 = (state_60965[(2)]);
var inst_60930 = (inst_60929__$1 == null);
var inst_60931 = cljs.core.not(inst_60930);
var state_60965__$1 = (function (){var statearr_60970 = state_60965;
(statearr_60970[(9)] = inst_60929__$1);

return statearr_60970;
})();
if(inst_60931){
var statearr_60971_62353 = state_60965__$1;
(statearr_60971_62353[(1)] = (5));

} else {
var statearr_60972_62354 = state_60965__$1;
(statearr_60972_62354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (15))){
var inst_60955 = (state_60965[(2)]);
var state_60965__$1 = state_60965;
var statearr_60973_62357 = state_60965__$1;
(statearr_60973_62357[(2)] = inst_60955);

(statearr_60973_62357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (13))){
var state_60965__$1 = state_60965;
var statearr_60974_62358 = state_60965__$1;
(statearr_60974_62358[(2)] = null);

(statearr_60974_62358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (6))){
var inst_60925 = (state_60965[(7)]);
var inst_60950 = inst_60925.length;
var inst_60951 = (inst_60950 > (0));
var state_60965__$1 = state_60965;
if(cljs.core.truth_(inst_60951)){
var statearr_60975_62360 = state_60965__$1;
(statearr_60975_62360[(1)] = (12));

} else {
var statearr_60976_62362 = state_60965__$1;
(statearr_60976_62362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (3))){
var inst_60963 = (state_60965[(2)]);
var state_60965__$1 = state_60965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60965__$1,inst_60963);
} else {
if((state_val_60966 === (12))){
var inst_60925 = (state_60965[(7)]);
var inst_60953 = cljs.core.vec(inst_60925);
var state_60965__$1 = state_60965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60965__$1,(15),out,inst_60953);
} else {
if((state_val_60966 === (2))){
var state_60965__$1 = state_60965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60965__$1,(4),ch);
} else {
if((state_val_60966 === (11))){
var inst_60929 = (state_60965[(9)]);
var inst_60933 = (state_60965[(10)]);
var inst_60943 = (state_60965[(2)]);
var inst_60944 = [];
var inst_60945 = inst_60944.push(inst_60929);
var inst_60925 = inst_60944;
var inst_60926 = inst_60933;
var state_60965__$1 = (function (){var statearr_60977 = state_60965;
(statearr_60977[(7)] = inst_60925);

(statearr_60977[(8)] = inst_60926);

(statearr_60977[(11)] = inst_60943);

(statearr_60977[(12)] = inst_60945);

return statearr_60977;
})();
var statearr_60978_62365 = state_60965__$1;
(statearr_60978_62365[(2)] = null);

(statearr_60978_62365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (9))){
var inst_60925 = (state_60965[(7)]);
var inst_60941 = cljs.core.vec(inst_60925);
var state_60965__$1 = state_60965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60965__$1,(11),out,inst_60941);
} else {
if((state_val_60966 === (5))){
var inst_60926 = (state_60965[(8)]);
var inst_60929 = (state_60965[(9)]);
var inst_60933 = (state_60965[(10)]);
var inst_60933__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60929) : f.call(null,inst_60929));
var inst_60934 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60933__$1,inst_60926);
var inst_60935 = cljs.core.keyword_identical_QMARK_(inst_60926,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60936 = ((inst_60934) || (inst_60935));
var state_60965__$1 = (function (){var statearr_60979 = state_60965;
(statearr_60979[(10)] = inst_60933__$1);

return statearr_60979;
})();
if(cljs.core.truth_(inst_60936)){
var statearr_60980_62366 = state_60965__$1;
(statearr_60980_62366[(1)] = (8));

} else {
var statearr_60981_62368 = state_60965__$1;
(statearr_60981_62368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (14))){
var inst_60958 = (state_60965[(2)]);
var inst_60959 = cljs.core.async.close_BANG_(out);
var state_60965__$1 = (function (){var statearr_60983 = state_60965;
(statearr_60983[(13)] = inst_60958);

return statearr_60983;
})();
var statearr_60984_62371 = state_60965__$1;
(statearr_60984_62371[(2)] = inst_60959);

(statearr_60984_62371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (10))){
var inst_60948 = (state_60965[(2)]);
var state_60965__$1 = state_60965;
var statearr_60985_62377 = state_60965__$1;
(statearr_60985_62377[(2)] = inst_60948);

(statearr_60985_62377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60966 === (8))){
var inst_60925 = (state_60965[(7)]);
var inst_60929 = (state_60965[(9)]);
var inst_60933 = (state_60965[(10)]);
var inst_60938 = inst_60925.push(inst_60929);
var tmp60982 = inst_60925;
var inst_60925__$1 = tmp60982;
var inst_60926 = inst_60933;
var state_60965__$1 = (function (){var statearr_60986 = state_60965;
(statearr_60986[(14)] = inst_60938);

(statearr_60986[(7)] = inst_60925__$1);

(statearr_60986[(8)] = inst_60926);

return statearr_60986;
})();
var statearr_60987_62380 = state_60965__$1;
(statearr_60987_62380[(2)] = null);

(statearr_60987_62380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__58758__auto__ = null;
var cljs$core$async$state_machine__58758__auto____0 = (function (){
var statearr_60988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60988[(0)] = cljs$core$async$state_machine__58758__auto__);

(statearr_60988[(1)] = (1));

return statearr_60988;
});
var cljs$core$async$state_machine__58758__auto____1 = (function (state_60965){
while(true){
var ret_value__58759__auto__ = (function (){try{while(true){
var result__58760__auto__ = switch__58757__auto__(state_60965);
if(cljs.core.keyword_identical_QMARK_(result__58760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__58760__auto__;
}
break;
}
}catch (e60989){var ex__58761__auto__ = e60989;
var statearr_60990_62383 = state_60965;
(statearr_60990_62383[(2)] = ex__58761__auto__);


if(cljs.core.seq((state_60965[(4)]))){
var statearr_60991_62384 = state_60965;
(statearr_60991_62384[(1)] = cljs.core.first((state_60965[(4)])));

} else {
throw ex__58761__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__58759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62385 = state_60965;
state_60965 = G__62385;
continue;
} else {
return ret_value__58759__auto__;
}
break;
}
});
cljs$core$async$state_machine__58758__auto__ = function(state_60965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__58758__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__58758__auto____1.call(this,state_60965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__58758__auto____0;
cljs$core$async$state_machine__58758__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__58758__auto____1;
return cljs$core$async$state_machine__58758__auto__;
})()
})();
var state__58895__auto__ = (function (){var statearr_60992 = f__58894__auto__();
(statearr_60992[(6)] = c__58893__auto___62339);

return statearr_60992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__58895__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
