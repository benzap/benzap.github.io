// Compiled by ClojureScript 1.10.217 {}
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
<<<<<<< HEAD
var args__4501__auto__ = [];
var len__4498__auto___37190 = arguments.length;
var i__4499__auto___37191 = (0);
while(true){
if((i__4499__auto___37191 < len__4498__auto___37190)){
args__4501__auto__.push((arguments[i__4499__auto___37191]));

var G__37192 = (i__4499__auto___37191 + (1));
i__4499__auto___37191 = G__37192;
=======
var args__36792__auto__ = [];
var len__36785__auto___42251 = arguments.length;
var i__36786__auto___42252 = (0);
while(true){
if((i__36786__auto___42252 < len__36785__auto___42251)){
args__36792__auto__.push((arguments[i__36786__auto___42252]));

var G__42253 = (i__36786__auto___42252 + (1));
i__36786__auto___42252 = G__42253;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__4502__auto__ = ((((2) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4502__auto__);
=======
var argseq__36793__auto__ = ((((2) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36793__auto__);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq37187){
var G__37188 = cljs.core.first.call(null,seq37187);
var seq37187__$1 = cljs.core.next.call(null,seq37187);
var G__37189 = cljs.core.first.call(null,seq37187__$1);
var seq37187__$2 = cljs.core.next.call(null,seq37187__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37188,G__37189,seq37187__$2);
=======
rum.util.call_all.cljs$lang$applyTo = (function (seq42248){
var G__42249 = cljs.core.first.call(null,seq42248);
var seq42248__$1 = cljs.core.next.call(null,seq42248);
var G__42250 = cljs.core.first.call(null,seq42248__$1);
var seq42248__$2 = cljs.core.next.call(null,seq42248__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__42249,G__42250,seq42248__$2);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});

