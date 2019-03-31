// Compiled by ClojureScript 1.10.520 {}
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
var args__4736__auto__ = [];
var len__4730__auto___38246 = arguments.length;
var i__4731__auto___38247 = (0);
while(true){
if((i__4731__auto___38247 < len__4730__auto___38246)){
args__4736__auto__.push((arguments[i__4731__auto___38247]));

var G__38248 = (i__4731__auto___38247 + (1));
i__4731__auto___38247 = G__38248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fif.stack_machine.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.stack_machine.set_scope.call(null,sm,cljs.core.apply.call(null,fif.utils.scope.update_scope,scope,f,args));
});

fif.stack_machine.scope.update_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.scope.update_scope.cljs$lang$applyTo = (function (seq38243){
var G__38244 = cljs.core.first.call(null,seq38243);
var seq38243__$1 = cljs.core.next.call(null,seq38243);
var G__38245 = cljs.core.first.call(null,seq38243__$1);
var seq38243__$2 = cljs.core.next.call(null,seq38243__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38244,G__38245,seq38243__$2);
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
var G__38250 = arguments.length;
switch (G__38250) {
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
var args__4736__auto__ = [];
var len__4730__auto___38255 = arguments.length;
var i__4731__auto___38256 = (0);
while(true){
if((i__4731__auto___38256 < len__4730__auto___38255)){
args__4736__auto__.push((arguments[i__4731__auto___38256]));

var G__38257 = (i__4731__auto___38256 + (1));
i__4731__auto___38256 = G__38257;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fif.stack_machine.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.stack_machine.set_scope.call(null,sm,cljs.core.apply.call(null,fif.utils.scope.update_global_scope,scope,f,args));
});

fif.stack_machine.scope.update_global_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.scope.update_global_scope.cljs$lang$applyTo = (function (seq38252){
var G__38253 = cljs.core.first.call(null,seq38252);
var seq38252__$1 = cljs.core.next.call(null,seq38252);
var G__38254 = cljs.core.first.call(null,seq38252__$1);
var seq38252__$2 = cljs.core.next.call(null,seq38252__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38253,G__38254,seq38252__$2);
});

/**
 * Retrieves from the earliest scope
 */
fif.stack_machine.scope.get_in_global_scope = (function fif$stack_machine$scope$get_in_global_scope(var_args){
var G__38259 = arguments.length;
switch (G__38259) {
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
