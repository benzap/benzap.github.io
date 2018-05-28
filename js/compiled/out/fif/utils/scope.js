// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.utils.scope');
goog.require('cljs.core');
fif.utils.scope.new_scope = (function fif$utils$scope$new_scope(var_args){
var G__39594 = arguments.length;
switch (G__39594) {
case 1:
return fif.utils.scope.new_scope.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return fif.utils.scope.new_scope.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.utils.scope.new_scope.cljs$core$IFn$_invoke$arity$1 = (function (scope){
return cljs.core.conj.call(null,scope,cljs.core.PersistentArrayMap.EMPTY);
});

fif.utils.scope.new_scope.cljs$core$IFn$_invoke$arity$0 = (function (){
return fif.utils.scope.new_scope.call(null,cljs.core.PersistentVector.EMPTY);
});

fif.utils.scope.new_scope.cljs$lang$maxFixedArity = 1;

fif.utils.scope.update_scope = (function fif$utils$scope$update_scope(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39599 = arguments.length;
var i__4500__auto___39600 = (0);
while(true){
if((i__4500__auto___39600 < len__4499__auto___39599)){
args__4502__auto__.push((arguments[i__4500__auto___39600]));

var G__39601 = (i__4500__auto___39600 + (1));
i__4500__auto___39600 = G__39601;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.utils.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.utils.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic = (function (scope,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,scope,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,scope) - (1))], null),f,args);
});

fif.utils.scope.update_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.utils.scope.update_scope.cljs$lang$applyTo = (function (seq39596){
var G__39597 = cljs.core.first.call(null,seq39596);
var seq39596__$1 = cljs.core.next.call(null,seq39596);
var G__39598 = cljs.core.first.call(null,seq39596__$1);
var seq39596__$2 = cljs.core.next.call(null,seq39596__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39597,G__39598,seq39596__$2);
});

fif.utils.scope.remove_scope = (function fif$utils$scope$remove_scope(scope){
return cljs.core.pop.call(null,scope);
});
fif.utils.scope.not_found = new cljs.core.Keyword("fif.utils.scope","miss","fif.utils.scope/miss",1949290218);
fif.utils.scope.get_in_scope = (function fif$utils$scope$get_in_scope(var_args){
var G__39605 = arguments.length;
switch (G__39605) {
case 3:
return fif.utils.scope.get_in_scope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fif.utils.scope.get_in_scope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.utils.scope.get_in_scope.cljs$core$IFn$_invoke$arity$3 = (function (scope,attrs,default$){
var $ = scope;
var $__$1 = cljs.core.map.call(null,((function ($){
return (function (p1__39602_SHARP_){
return cljs.core.get_in.call(null,p1__39602_SHARP_,attrs,fif.utils.scope.not_found);
});})($))
,$);
var $__$2 = cljs.core.filter.call(null,((function ($,$__$1){
return (function (p1__39603_SHARP_){
return cljs.core.not_EQ_.call(null,p1__39603_SHARP_,fif.utils.scope.not_found);
});})($,$__$1))
,$__$1);
var $__$3 = cljs.core.reverse.call(null,$__$2);
if(cljs.core.empty_QMARK_.call(null,$__$3)){
return default$;
} else {
return cljs.core.first.call(null,$__$3);
}
});

fif.utils.scope.get_in_scope.cljs$core$IFn$_invoke$arity$2 = (function (scope,attrs){
return fif.utils.scope.get_in_scope.call(null,scope,attrs,null);
});

fif.utils.scope.get_in_scope.cljs$lang$maxFixedArity = 3;

fif.utils.scope.update_global_scope = (function fif$utils$scope$update_global_scope(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39610 = arguments.length;
var i__4500__auto___39611 = (0);
while(true){
if((i__4500__auto___39611 < len__4499__auto___39610)){
args__4502__auto__.push((arguments[i__4500__auto___39611]));

var G__39612 = (i__4500__auto___39611 + (1));
i__4500__auto___39611 = G__39612;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.utils.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.utils.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic = (function (scope,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,scope,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),f,args);
});

fif.utils.scope.update_global_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.utils.scope.update_global_scope.cljs$lang$applyTo = (function (seq39607){
var G__39608 = cljs.core.first.call(null,seq39607);
var seq39607__$1 = cljs.core.next.call(null,seq39607);
var G__39609 = cljs.core.first.call(null,seq39607__$1);
var seq39607__$2 = cljs.core.next.call(null,seq39607__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39608,G__39609,seq39607__$2);
});

fif.utils.scope.get_merged_scope = (function fif$utils$scope$get_merged_scope(scope){
return cljs.core.reduce.call(null,cljs.core.merge,scope);
});
