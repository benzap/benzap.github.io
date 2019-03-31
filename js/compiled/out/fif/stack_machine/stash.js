// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.stack_machine.stash');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.utils.stash');
/**
 * Gets the stash. Note that it is stash2, since this is going to
 *   replace the deprecated stash functionality which used 'sub-stacks'
 */
fif.stack_machine.stash.get_stash = (function fif$stack_machine$stash$get_stash(sm){
return fif.stack_machine.get_mode_stash.call(null,sm);
});
/**
 * Set the stack-machine stash to the given stash.
 */
fif.stack_machine.stash.set_stash = (function fif$stack_machine$stash$set_stash(sm,stack){
return fif.stack_machine.set_mode_stash.call(null,sm,stack);
});
/**
 * Initialize a new stack-machine stash, or replace it with 
 */
fif.stack_machine.stash.new_stash = (function fif$stack_machine$stash$new_stash(var_args){
var G__38337 = arguments.length;
switch (G__38337) {
case 2:
return fif.stack_machine.stash.new_stash.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fif.stack_machine.stash.new_stash.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.stack_machine.stash.new_stash.cljs$core$IFn$_invoke$arity$2 = (function (sm,coll){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.stack_machine.stash.set_stash.call(null,sm,fif.utils.stash.new_stash.call(null,stash,coll));
});

fif.stack_machine.stash.new_stash.cljs$core$IFn$_invoke$arity$1 = (function (sm){
return fif.stack_machine.stash.new_stash.call(null,sm,cljs.core.PersistentArrayMap.EMPTY);
});

fif.stack_machine.stash.new_stash.cljs$lang$maxFixedArity = 2;

fif.stack_machine.stash.clear_stash = (function fif$stack_machine$stash$clear_stash(sm){
return fif.stack_machine.stash.set_stash.call(null,sm,fif.utils.stash.create_stash.call(null));
});
fif.stack_machine.stash.update_stash = (function fif$stack_machine$stash$update_stash(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38342 = arguments.length;
var i__4731__auto___38343 = (0);
while(true){
if((i__4731__auto___38343 < len__4730__auto___38342)){
args__4736__auto__.push((arguments[i__4731__auto___38343]));

var G__38344 = (i__4731__auto___38343 + (1));
i__4731__auto___38343 = G__38344;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fif.stack_machine.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.stack_machine.stash.set_stash.call(null,sm,cljs.core.apply.call(null,fif.utils.stash.update_stash,stash,f,args));
});

fif.stack_machine.stash.update_stash.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.stash.update_stash.cljs$lang$applyTo = (function (seq38339){
var G__38340 = cljs.core.first.call(null,seq38339);
var seq38339__$1 = cljs.core.next.call(null,seq38339);
var G__38341 = cljs.core.first.call(null,seq38339__$1);
var seq38339__$2 = cljs.core.next.call(null,seq38339__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38340,G__38341,seq38339__$2);
});

fif.stack_machine.stash.remove_stash = (function fif$stack_machine$stash$remove_stash(sm){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.stack_machine.stash.set_stash.call(null,sm,fif.utils.stash.remove_stash.call(null,stash));
});
fif.stack_machine.stash.peek_stash = (function fif$stack_machine$stash$peek_stash(sm){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.utils.stash.peek_stash.call(null,stash);
});
