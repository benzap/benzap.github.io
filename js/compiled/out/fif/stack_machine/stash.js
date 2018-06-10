// Compiled by ClojureScript 1.10.238 {}
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
var G__39711 = arguments.length;
switch (G__39711) {
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
var args__4502__auto__ = [];
var len__4499__auto___39716 = arguments.length;
var i__4500__auto___39717 = (0);
while(true){
if((i__4500__auto___39717 < len__4499__auto___39716)){
args__4502__auto__.push((arguments[i__4500__auto___39717]));

var G__39718 = (i__4500__auto___39717 + (1));
i__4500__auto___39717 = G__39718;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.stack_machine.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.stack_machine.stash.set_stash.call(null,sm,cljs.core.apply.call(null,fif.utils.stash.update_stash,stash,f,args));
});

fif.stack_machine.stash.update_stash.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.stash.update_stash.cljs$lang$applyTo = (function (seq39713){
var G__39714 = cljs.core.first.call(null,seq39713);
var seq39713__$1 = cljs.core.next.call(null,seq39713);
var G__39715 = cljs.core.first.call(null,seq39713__$1);
var seq39713__$2 = cljs.core.next.call(null,seq39713__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39714,G__39715,seq39713__$2);
});

fif.stack_machine.stash.remove_stash = (function fif$stack_machine$stash$remove_stash(sm){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.stack_machine.stash.set_stash.call(null,sm,fif.utils.stash.remove_stash.call(null,stash));
});
fif.stack_machine.stash.peek_stash = (function fif$stack_machine$stash$peek_stash(sm){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.utils.stash.peek_stash.call(null,stash);
});
