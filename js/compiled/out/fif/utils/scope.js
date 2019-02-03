// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.utils.scope');
goog.require('cljs.core');
fif.utils.scope.new_scope = (function fif$utils$scope$new_scope(var_args){
var G__31903 = arguments.length;
switch (G__31903) {
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
var args__4647__auto__ = [];
var len__4641__auto___31908 = arguments.length;
var i__4642__auto___31909 = (0);
while(true){
if((i__4642__auto___31909 < len__4641__auto___31908)){
args__4647__auto__.push((arguments[i__4642__auto___31909]));

var G__31910 = (i__4642__auto___31909 + (1));
i__4642__auto___31909 = G__31910;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.utils.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.utils.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic = (function (scope,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,scope,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,scope) - (1))], null),f,args);
});

fif.utils.scope.update_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.utils.scope.update_scope.cljs$lang$applyTo = (function (seq31905){
var G__31906 = cljs.core.first.call(null,seq31905);
var seq31905__$1 = cljs.core.next.call(null,seq31905);
var G__31907 = cljs.core.first.call(null,seq31905__$1);
var seq31905__$2 = cljs.core.next.call(null,seq31905__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31906,G__31907,seq31905__$2);
});

fif.utils.scope.remove_scope = (function fif$utils$scope$remove_scope(scope){
return cljs.core.pop.call(null,scope);
});
fif.utils.scope.not_found = new cljs.core.Keyword("fif.utils.scope","miss","fif.utils.scope/miss",1949290218);
fif.utils.scope.get_in_scope = (function fif$utils$scope$get_in_scope(var_args){
var G__31914 = arguments.length;
switch (G__31914) {
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
return (function (p1__31911_SHARP_){
return cljs.core.get_in.call(null,p1__31911_SHARP_,attrs,fif.utils.scope.not_found);
});})($))
,$);
var $__$2 = cljs.core.filter.call(null,((function ($,$__$1){
return (function (p1__31912_SHARP_){
return cljs.core.not_EQ_.call(null,p1__31912_SHARP_,fif.utils.scope.not_found);
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
var args__4647__auto__ = [];
var len__4641__auto___31919 = arguments.length;
var i__4642__auto___31920 = (0);
while(true){
if((i__4642__auto___31920 < len__4641__auto___31919)){
args__4647__auto__.push((arguments[i__4642__auto___31920]));

var G__31921 = (i__4642__auto___31920 + (1));
i__4642__auto___31920 = G__31921;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.utils.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.utils.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic = (function (scope,f,args){
return cljs.core.apply.call(null,cljs.core.update_in,scope,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),f,args);
});

fif.utils.scope.update_global_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.utils.scope.update_global_scope.cljs$lang$applyTo = (function (seq31916){
var G__31917 = cljs.core.first.call(null,seq31916);
var seq31916__$1 = cljs.core.next.call(null,seq31916);
var G__31918 = cljs.core.first.call(null,seq31916__$1);
var seq31916__$2 = cljs.core.next.call(null,seq31916__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31917,G__31918,seq31916__$2);
});

fif.utils.scope.get_merged_scope = (function fif$utils$scope$get_merged_scope(scope){
return cljs.core.reduce.call(null,cljs.core.merge,scope);
});
