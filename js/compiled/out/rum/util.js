// Compiled by ClojureScript 1.10.439 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4647__auto__ = [];
var len__4641__auto___39059 = arguments.length;
var i__4642__auto___39060 = (0);
while(true){
if((i__4642__auto___39060 < len__4641__auto___39059)){
args__4647__auto__.push((arguments[i__4642__auto___39060]));

var G__39061 = (i__4642__auto___39060 + (1));
i__4642__auto___39060 = G__39061;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq39056){
var G__39057 = cljs.core.first.call(null,seq39056);
var seq39056__$1 = cljs.core.next.call(null,seq39056);
var G__39058 = cljs.core.first.call(null,seq39056__$1);
var seq39056__$2 = cljs.core.next.call(null,seq39056__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39057,G__39058,seq39056__$2);
});

