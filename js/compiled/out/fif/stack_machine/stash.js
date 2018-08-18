// Compiled by ClojureScript 1.10.339 {}
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
var G__39822 = arguments.length;
switch (G__39822) {
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
var args__4534__auto__ = [];
var len__4531__auto___39827 = arguments.length;
var i__4532__auto___39828 = (0);
while(true){
if((i__4532__auto___39828 < len__4531__auto___39827)){
args__4534__auto__.push((arguments[i__4532__auto___39828]));

var G__39829 = (i__4532__auto___39828 + (1));
i__4532__auto___39828 = G__39829;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fif.stack_machine.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.stack_machine.stash.set_stash.call(null,sm,cljs.core.apply.call(null,fif.utils.stash.update_stash,stash,f,args));
});

fif.stack_machine.stash.update_stash.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.stash.update_stash.cljs$lang$applyTo = (function (seq39824){
var G__39825 = cljs.core.first.call(null,seq39824);
var seq39824__$1 = cljs.core.next.call(null,seq39824);
var G__39826 = cljs.core.first.call(null,seq39824__$1);
var seq39824__$2 = cljs.core.next.call(null,seq39824__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39825,G__39826,seq39824__$2);
});

fif.stack_machine.stash.remove_stash = (function fif$stack_machine$stash$remove_stash(sm){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.stack_machine.stash.set_stash.call(null,sm,fif.utils.stash.remove_stash.call(null,stash));
});
fif.stack_machine.stash.peek_stash = (function fif$stack_machine$stash$peek_stash(sm){
var stash = fif.stack_machine.stash.get_stash.call(null,sm);
return fif.utils.stash.peek_stash.call(null,stash);
});
