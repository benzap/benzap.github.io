// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stack_machine.scope');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.utils.scope');
fif.stack_machine.scope.get_scope = (function fif$stack_machine$scope$get_scope(sm){
return fif.stack_machine.get_scope.call(null,sm);
});
fif.stack_machine.scope.set_scope = (function fif$stack_machine$scope$set_scope(sm,scope){
return fif.stack_machine.set_scope.call(null,sm,scope);
});
/**
 * Create a new scope environment within the stack machine.
 */
fif.stack_machine.scope.new_scope = (function fif$stack_machine$scope$new_scope(sm){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.stack_machine.set_scope.call(null,sm,fif.utils.scope.new_scope.call(null,scope));
});
fif.stack_machine.scope.clear_scope = (function fif$stack_machine$scope$clear_scope(sm){
return fif.stack_machine.set_scope.call(null,sm,fif.utils.scope.new_scope.call(null));
});
/**
 * Update the current scope environment within the stack machine.
 */
fif.stack_machine.scope.update_scope = (function fif$stack_machine$scope$update_scope(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39618 = arguments.length;
var i__4500__auto___39619 = (0);
while(true){
if((i__4500__auto___39619 < len__4499__auto___39618)){
args__4502__auto__.push((arguments[i__4500__auto___39619]));

var G__39620 = (i__4500__auto___39619 + (1));
i__4500__auto___39619 = G__39620;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.stack_machine.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.stack_machine.set_scope.call(null,sm,cljs.core.apply.call(null,fif.utils.scope.update_scope,scope,f,args));
});

fif.stack_machine.scope.update_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.scope.update_scope.cljs$lang$applyTo = (function (seq39615){
var G__39616 = cljs.core.first.call(null,seq39615);
var seq39615__$1 = cljs.core.next.call(null,seq39615);
var G__39617 = cljs.core.first.call(null,seq39615__$1);
var seq39615__$2 = cljs.core.next.call(null,seq39615__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39616,G__39617,seq39615__$2);
});

/**
 * Remove the current scope environment from within the stack machine.
 */
fif.stack_machine.scope.remove_scope = (function fif$stack_machine$scope$remove_scope(sm){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.stack_machine.set_scope.call(null,sm,fif.utils.scope.remove_scope.call(null,scope));
});
/**
 * Retrieve within the latest scope, the given nested attribute.
 */
fif.stack_machine.scope.get_in_scope = (function fif$stack_machine$scope$get_in_scope(var_args){
var G__39622 = arguments.length;
switch (G__39622) {
case 3:
return fif.stack_machine.scope.get_in_scope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fif.stack_machine.scope.get_in_scope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.stack_machine.scope.get_in_scope.cljs$core$IFn$_invoke$arity$3 = (function (sm,attrs,default$){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.utils.scope.get_in_scope.call(null,scope,attrs,default$);
});

fif.stack_machine.scope.get_in_scope.cljs$core$IFn$_invoke$arity$2 = (function (scope,attrs){
return fif.stack_machine.scope.get_in_scope.call(null,scope,attrs,null);
});

fif.stack_machine.scope.get_in_scope.cljs$lang$maxFixedArity = 3;

/**
 * Update the current scope environment within the stack machine.
 */
fif.stack_machine.scope.update_global_scope = (function fif$stack_machine$scope$update_global_scope(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39627 = arguments.length;
var i__4500__auto___39628 = (0);
while(true){
if((i__4500__auto___39628 < len__4499__auto___39627)){
args__4502__auto__.push((arguments[i__4500__auto___39628]));

var G__39629 = (i__4500__auto___39628 + (1));
i__4500__auto___39628 = G__39629;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.stack_machine.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.stack_machine.set_scope.call(null,sm,cljs.core.apply.call(null,fif.utils.scope.update_global_scope,scope,f,args));
});

fif.stack_machine.scope.update_global_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.scope.update_global_scope.cljs$lang$applyTo = (function (seq39624){
var G__39625 = cljs.core.first.call(null,seq39624);
var seq39624__$1 = cljs.core.next.call(null,seq39624);
var G__39626 = cljs.core.first.call(null,seq39624__$1);
var seq39624__$2 = cljs.core.next.call(null,seq39624__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39625,G__39626,seq39624__$2);
});

/**
 * Retrieves from the earliest scope
 */
fif.stack_machine.scope.get_in_global_scope = (function fif$stack_machine$scope$get_in_global_scope(var_args){
var G__39631 = arguments.length;
switch (G__39631) {
case 3:
return fif.stack_machine.scope.get_in_global_scope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fif.stack_machine.scope.get_in_global_scope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.stack_machine.scope.get_in_global_scope.cljs$core$IFn$_invoke$arity$3 = (function (sm,attrs,default$){
var fscope = cljs.core.first.call(null,fif.stack_machine.get_scope.call(null,sm));
return cljs.core.get_in.call(null,fscope,attrs,default$);
});

fif.stack_machine.scope.get_in_global_scope.cljs$core$IFn$_invoke$arity$2 = (function (sm,attrs){
return fif.stack_machine.scope.get_in_global_scope.call(null,sm,attrs,null);
});

fif.stack_machine.scope.get_in_global_scope.cljs$lang$maxFixedArity = 3;

fif.stack_machine.scope.get_merged_scope = (function fif$stack_machine$scope$get_merged_scope(sm){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.utils.scope.get_merged_scope.call(null,scope);
});
