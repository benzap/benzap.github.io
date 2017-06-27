// Compiled by ClojureScript 1.9.542 {}
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
var args__36792__auto__ = [];
var len__36785__auto___42251 = arguments.length;
var i__36786__auto___42252 = (0);
while(true){
if((i__36786__auto___42252 < len__36785__auto___42251)){
args__36792__auto__.push((arguments[i__36786__auto___42252]));

var G__42253 = (i__36786__auto___42252 + (1));
i__36786__auto___42252 = G__42253;
continue;
} else {
}
break;
}

var argseq__36793__auto__ = ((((2) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36793__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq42248){
var G__42249 = cljs.core.first.call(null,seq42248);
var seq42248__$1 = cljs.core.next.call(null,seq42248);
var G__42250 = cljs.core.first.call(null,seq42248__$1);
var seq42248__$2 = cljs.core.next.call(null,seq42248__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__42249,G__42250,seq42248__$2);
});

rum.util.filter_vals = (function rum$util$filter_vals(pred,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.assoc.call(null,m__$1,k,v);
} else {
return m__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
