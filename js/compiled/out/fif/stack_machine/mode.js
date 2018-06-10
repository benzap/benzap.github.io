// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stack_machine.mode');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.stash');
fif.stack_machine.mode.default_mode_stash = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fif.stack-machine.mode","flag","fif.stack-machine.mode/flag",774506931),null,new cljs.core.Keyword("fif.stack-machine.mode","state","fif.stack-machine.mode/state",1562737223),cljs.core.PersistentArrayMap.EMPTY], null);
fif.stack_machine.mode.new_mode_stash = (function fif$stack_machine$mode$new_mode_stash(sm,flag,state){
var init_stash = cljs.core.assoc.call(null,fif.stack_machine.mode.default_mode_stash,new cljs.core.Keyword("fif.stack-machine.mode","flag","fif.stack-machine.mode/flag",774506931),flag,new cljs.core.Keyword("fif.stack-machine.mode","state","fif.stack-machine.mode/state",1562737223),state);
return fif.stack_machine.stash.new_stash.call(null,sm,init_stash);
});
fif.stack_machine.mode.enter_mode = (function fif$stack_machine$mode$enter_mode(var_args){
var G__39722 = arguments.length;
switch (G__39722) {
case 3:
return fif.stack_machine.mode.enter_mode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fif.stack_machine.mode.enter_mode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.stack_machine.mode.enter_mode.cljs$core$IFn$_invoke$arity$3 = (function (sm,flag,state){
return fif.stack_machine.mode.new_mode_stash.call(null,fif.stack_machine.push_flag.call(null,sm,flag),flag,state);
});

fif.stack_machine.mode.enter_mode.cljs$core$IFn$_invoke$arity$2 = (function (sm,flag){
return fif.stack_machine.mode.enter_mode.call(null,sm,flag,cljs.core.PersistentArrayMap.EMPTY);
});

fif.stack_machine.mode.enter_mode.cljs$lang$maxFixedArity = 3;

fif.stack_machine.mode.exit_mode = (function fif$stack_machine$mode$exit_mode(sm){
return fif.stack_machine.stash.remove_stash.call(null,fif.stack_machine.pop_flag.call(null,sm));
});
fif.stack_machine.mode.set_state = (function fif$stack_machine$mode$set_state(sm,state){
return fif.stack_machine.stash.update_stash.call(null,cljs.core.assoc,new cljs.core.Keyword("fif.stack-machine.mode","state","fif.stack-machine.mode/state",1562737223),state);
});
fif.stack_machine.mode.update_state = (function fif$stack_machine$mode$update_state(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39727 = arguments.length;
var i__4500__auto___39728 = (0);
while(true){
if((i__4500__auto___39728 < len__4499__auto___39727)){
args__4502__auto__.push((arguments[i__4500__auto___39728]));

var G__39729 = (i__4500__auto___39728 + (1));
i__4500__auto___39728 = G__39729;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.mode.update_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.stack_machine.mode.update_state.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
return cljs.core.apply.call(null,fif.stack_machine.stash.update_stash,sm,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fif.stack-machine.mode","state","fif.stack-machine.mode/state",1562737223)], null),f,args);
});

fif.stack_machine.mode.update_state.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.mode.update_state.cljs$lang$applyTo = (function (seq39724){
var G__39725 = cljs.core.first.call(null,seq39724);
var seq39724__$1 = cljs.core.next.call(null,seq39724);
var G__39726 = cljs.core.first.call(null,seq39724__$1);
var seq39724__$2 = cljs.core.next.call(null,seq39724__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39725,G__39726,seq39724__$2);
});

fif.stack_machine.mode.update_stash = fif.stack_machine.stash.update_stash;
fif.stack_machine.mode.get_mode_stash = (function fif$stack_machine$mode$get_mode_stash(sm){
return fif.stack_machine.stash.peek_stash.call(null,sm);
});
/**
 * Function used with defmulti for stack mode dispatch based on state
 *   stored in the stash. This is used in tandom with `enter-mode` and
 *   `exit-mode`.
 */
fif.stack_machine.mode.mode_dispatch_fn = (function fif$stack_machine$mode$mode_dispatch_fn(sm){
return new cljs.core.Keyword("fif.stack-machine.mode","state","fif.stack-machine.mode/state",1562737223).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
});
