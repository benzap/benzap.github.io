// Compiled by ClojureScript 1.10.439 {}
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
var args__4647__auto__ = [];
var len__4641__auto___36446 = arguments.length;
var i__4642__auto___36447 = (0);
while(true){
if((i__4642__auto___36447 < len__4641__auto___36446)){
args__4647__auto__.push((arguments[i__4642__auto___36447]));

var G__36448 = (i__4642__auto___36447 + (1));
i__4642__auto___36447 = G__36448;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.stack_machine.scope.update_scope.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.stack_machine.set_scope.call(null,sm,cljs.core.apply.call(null,fif.utils.scope.update_scope,scope,f,args));
});

fif.stack_machine.scope.update_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.scope.update_scope.cljs$lang$applyTo = (function (seq36443){
var G__36444 = cljs.core.first.call(null,seq36443);
var seq36443__$1 = cljs.core.next.call(null,seq36443);
var G__36445 = cljs.core.first.call(null,seq36443__$1);
var seq36443__$2 = cljs.core.next.call(null,seq36443__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36444,G__36445,seq36443__$2);
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
var G__36450 = arguments.length;
switch (G__36450) {
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
var args__4647__auto__ = [];
var len__4641__auto___36455 = arguments.length;
var i__4642__auto___36456 = (0);
while(true){
if((i__4642__auto___36456 < len__4641__auto___36455)){
args__4647__auto__.push((arguments[i__4642__auto___36456]));

var G__36457 = (i__4642__auto___36456 + (1));
i__4642__auto___36456 = G__36457;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.stack_machine.scope.update_global_scope.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var scope = fif.stack_machine.get_scope.call(null,sm);
return fif.stack_machine.set_scope.call(null,sm,cljs.core.apply.call(null,fif.utils.scope.update_global_scope,scope,f,args));
});

fif.stack_machine.scope.update_global_scope.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.scope.update_global_scope.cljs$lang$applyTo = (function (seq36452){
var G__36453 = cljs.core.first.call(null,seq36452);
var seq36452__$1 = cljs.core.next.call(null,seq36452);
var G__36454 = cljs.core.first.call(null,seq36452__$1);
var seq36452__$2 = cljs.core.next.call(null,seq36452__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36453,G__36454,seq36452__$2);
});

/**
 * Retrieves from the earliest scope
 */
fif.stack_machine.scope.get_in_global_scope = (function fif$stack_machine$scope$get_in_global_scope(var_args){
var G__36459 = arguments.length;
switch (G__36459) {
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
