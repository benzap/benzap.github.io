// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.utils.stash');
goog.require('cljs.core');
if((typeof fif !== 'undefined') && (typeof fif.utils !== 'undefined') && (typeof fif.utils.stash !== 'undefined') && (typeof fif.utils.stash._STAR_gen_increment !== 'undefined')){
} else {
fif.utils.stash._STAR_gen_increment = cljs.core.atom.call(null,(0));
}
fif.utils.stash.get_unique_id = (function fif$utils$stash$get_unique_id(){
return cljs.core.swap_BANG_.call(null,fif.utils.stash._STAR_gen_increment,cljs.core.inc);
});
fif.utils.stash.create_stash = (function fif$utils$stash$create_stash(){
return cljs.core.PersistentVector.EMPTY;
});
fif.utils.stash.new_stash = (function fif$utils$stash$new_stash(var_args){
var G__36613 = arguments.length;
switch (G__36613) {
case 2:
return fif.utils.stash.new_stash.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fif.utils.stash.new_stash.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.utils.stash.new_stash.cljs$core$IFn$_invoke$arity$2 = (function (stash,container){
return cljs.core.conj.call(null,stash,container);
});

fif.utils.stash.new_stash.cljs$core$IFn$_invoke$arity$1 = (function (stash){
return fif.utils.stash.new_stash.call(null,stash,cljs.core.PersistentArrayMap.EMPTY);
});

fif.utils.stash.new_stash.cljs$lang$maxFixedArity = 2;

fif.utils.stash.update_stash = (function fif$utils$stash$update_stash(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36618 = arguments.length;
var i__4642__auto___36619 = (0);
while(true){
if((i__4642__auto___36619 < len__4641__auto___36618)){
args__4647__auto__.push((arguments[i__4642__auto___36619]));

var G__36620 = (i__4642__auto___36619 + (1));
i__4642__auto___36619 = G__36620;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.utils.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.utils.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic = (function (stash,f,args){
var index = (cljs.core.count.call(null,stash) - (1));
return cljs.core.apply.call(null,cljs.core.update_in,stash,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),f,args);
});

fif.utils.stash.update_stash.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.utils.stash.update_stash.cljs$lang$applyTo = (function (seq36615){
var G__36616 = cljs.core.first.call(null,seq36615);
var seq36615__$1 = cljs.core.next.call(null,seq36615);
var G__36617 = cljs.core.first.call(null,seq36615__$1);
var seq36615__$2 = cljs.core.next.call(null,seq36615__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36616,G__36617,seq36615__$2);
});

fif.utils.stash.remove_stash = (function fif$utils$stash$remove_stash(stash){
return cljs.core.pop.call(null,stash);
});
fif.utils.stash.peek_stash = (function fif$utils$stash$peek_stash(stash){
return cljs.core.peek.call(null,stash);
});
