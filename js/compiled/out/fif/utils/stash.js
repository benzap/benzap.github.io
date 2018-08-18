// Compiled by ClojureScript 1.10.339 {}
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
var G__39811 = arguments.length;
switch (G__39811) {
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
var args__4534__auto__ = [];
var len__4531__auto___39816 = arguments.length;
var i__4532__auto___39817 = (0);
while(true){
if((i__4532__auto___39817 < len__4531__auto___39816)){
args__4534__auto__.push((arguments[i__4532__auto___39817]));

var G__39818 = (i__4532__auto___39817 + (1));
i__4532__auto___39817 = G__39818;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fif.utils.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fif.utils.stash.update_stash.cljs$core$IFn$_invoke$arity$variadic = (function (stash,f,args){
var index = (cljs.core.count.call(null,stash) - (1));
return cljs.core.apply.call(null,cljs.core.update_in,stash,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),f,args);
});

fif.utils.stash.update_stash.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.utils.stash.update_stash.cljs$lang$applyTo = (function (seq39813){
var G__39814 = cljs.core.first.call(null,seq39813);
var seq39813__$1 = cljs.core.next.call(null,seq39813);
var G__39815 = cljs.core.first.call(null,seq39813__$1);
var seq39813__$2 = cljs.core.next.call(null,seq39813__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39814,G__39815,seq39813__$2);
});

fif.utils.stash.remove_stash = (function fif$utils$stash$remove_stash(stash){
return cljs.core.pop.call(null,stash);
});
fif.utils.stash.peek_stash = (function fif$utils$stash$peek_stash(stash){
return cljs.core.peek.call(null,stash);
});
