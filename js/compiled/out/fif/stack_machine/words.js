// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stack_machine.words');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.scope');
fif.stack_machine.words.not_found = new cljs.core.Keyword("fif.stack-machine.words","not-found","fif.stack-machine.words/not-found",-1468444442);
/**
 * Sets a word definition within the current scope with the given
 *   `name`. `wfunc` is a function which takes the current stack-machine,
 *   and performs an operation within the given stack machine.
 */
fif.stack_machine.words.set_word = (function fif$stack_machine$words$set_word(sm,name,wfunc){
return fif.stack_machine.scope.update_scope.call(null,sm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),name], null),wfunc);
});
/**
 * Gets a word definition within the current scope of the
 *   stack-machine.
 */
fif.stack_machine.words.get_word = (function fif$stack_machine$words$get_word(sm,name){
return fif.stack_machine.scope.get_in_scope.call(null,sm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),name], null),fif.stack_machine.words.not_found);
});
/**
 * Merges the words from each scope into a single map consisting of
 *   all word key and word definition value pairs.
 */
fif.stack_machine.words.get_word_listing = (function fif$stack_machine$words$get_word_listing(sm){
return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,new cljs.core.Keyword(null,"words","words",1924933001),fif.stack_machine.scope.get_scope.call(null,sm)));
});
/**
 * Merges the metadata from each scope into a single map consistingof
 *   all word key with word metadata value pairs.
 */
fif.stack_machine.words.get_metadata_listing = (function fif$stack_machine$words$get_metadata_listing(sm){
return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,new cljs.core.Keyword(null,"word-metadata","word-metadata",275060961),fif.stack_machine.scope.get_scope.call(null,sm)));
});
/**
 * Sets the word metadata in the local scope.
 */
fif.stack_machine.words.set_metadata = (function fif$stack_machine$words$set_metadata(sm,wname,wmeta){
return fif.stack_machine.scope.update_scope.call(null,sm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-metadata","word-metadata",275060961),wname], null),wmeta);
});
/**
 * Gets the word metadata in the local scope.
 */
fif.stack_machine.words.get_metadata = (function fif$stack_machine$words$get_metadata(sm,wname){
return fif.stack_machine.scope.get_in_scope.call(null,sm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-metadata","word-metadata",275060961),wname], null));
});
fif.stack_machine.words.update_metadata = (function fif$stack_machine$words$update_metadata(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39641 = arguments.length;
var i__4500__auto___39642 = (0);
while(true){
if((i__4500__auto___39642 < len__4499__auto___39641)){
args__4502__auto__.push((arguments[i__4500__auto___39642]));

var G__39643 = (i__4500__auto___39642 + (1));
i__4500__auto___39642 = G__39643;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.update_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.stack_machine.words.update_metadata.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,f,args){
var temp__5455__auto__ = fif.stack_machine.words.get_metadata.call(null,sm,wname);
if(cljs.core.truth_(temp__5455__auto__)){
var meta = temp__5455__auto__;
return fif.stack_machine.words.set_metadata.call(null,sm,wname,cljs.core.apply.call(null,f,meta,args));
} else {
return fif.stack_machine.words.set_metadata.call(null,sm,wname,cljs.core.apply.call(null,f,cljs.core.PersistentArrayMap.EMPTY,args));
}
});

fif.stack_machine.words.update_metadata.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.update_metadata.cljs$lang$applyTo = (function (seq39637){
var G__39638 = cljs.core.first.call(null,seq39637);
var seq39637__$1 = cljs.core.next.call(null,seq39637);
var G__39639 = cljs.core.first.call(null,seq39637__$1);
var seq39637__$2 = cljs.core.next.call(null,seq39637__$1);
var G__39640 = cljs.core.first.call(null,seq39637__$2);
var seq39637__$3 = cljs.core.next.call(null,seq39637__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39638,G__39639,G__39640,seq39637__$3);
});

/**
 * Sets metadata for the given `wname` which is an independent
 *   data-store containing information on the word definition defined by
 *   `wname` in the form of `wmeta`. `wmeta` should be a map of key
 *   values describing the word definition.
 */
fif.stack_machine.words.set_global_metadata = (function fif$stack_machine$words$set_global_metadata(sm,wname,wmeta){
return fif.stack_machine.scope.update_global_scope.call(null,sm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-metadata","word-metadata",275060961),wname], null),wmeta);
});
/**
 * Gets the metadata for the given `wname` word definition.
 */
fif.stack_machine.words.get_global_metadata = (function fif$stack_machine$words$get_global_metadata(sm,wname){
return fif.stack_machine.scope.get_in_global_scope.call(null,sm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-metadata","word-metadata",275060961),wname], null));
});
fif.stack_machine.words.update_global_metadata = (function fif$stack_machine$words$update_global_metadata(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39648 = arguments.length;
var i__4500__auto___39649 = (0);
while(true){
if((i__4500__auto___39649 < len__4499__auto___39648)){
args__4502__auto__.push((arguments[i__4500__auto___39649]));

var G__39650 = (i__4500__auto___39649 + (1));
i__4500__auto___39649 = G__39650;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.update_global_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.stack_machine.words.update_global_metadata.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,f,args){
var temp__5455__auto__ = fif.stack_machine.words.get_global_metadata.call(null,sm,wname);
if(cljs.core.truth_(temp__5455__auto__)){
var meta = temp__5455__auto__;
return fif.stack_machine.words.set_global_metadata.call(null,sm,wname,cljs.core.apply.call(null,f,meta,args));
} else {
return fif.stack_machine.words.set_global_metadata.call(null,sm,wname,cljs.core.apply.call(null,f,cljs.core.PersistentArrayMap.EMPTY,args));
}
});

fif.stack_machine.words.update_global_metadata.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.update_global_metadata.cljs$lang$applyTo = (function (seq39644){
var G__39645 = cljs.core.first.call(null,seq39644);
var seq39644__$1 = cljs.core.next.call(null,seq39644);
var G__39646 = cljs.core.first.call(null,seq39644__$1);
var seq39644__$2 = cljs.core.next.call(null,seq39644__$1);
var G__39647 = cljs.core.first.call(null,seq39644__$2);
var seq39644__$3 = cljs.core.next.call(null,seq39644__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39645,G__39646,G__39647,seq39644__$3);
});

/**
 * Sets a word definition within the global scope.
 */
fif.stack_machine.words.set_global_word = (function fif$stack_machine$words$set_global_word(sm,name,wfunc){
return fif.stack_machine.scope.update_global_scope.call(null,sm,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),name], null),wfunc);
});
/**
 * Gets a word definition within the global scope.
 */
fif.stack_machine.words.get_global_word = (function fif$stack_machine$words$get_global_word(sm,name){
return fif.stack_machine.scope.get_in_global_scope.call(null,sm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),name], null),fif.stack_machine.words.not_found);
});
/**
 * Sets the metadata for a particular global word definition, which
 *   consists of the keys :doc, :source, :stdlib? and :variable?.
 * 
 *   Meta Data Keys:
 * 
 *   :doc - Is a string explaining the given word definition.
 * 
 *   :source - If it is a word definition defined within fif, this will
 *   contain the word definition source code in the form of an EDN vector
 *   collectionconsisting of the source.
 *   
 *   :group - Set the word definition to a particular key group
 *   ex. :stdlib.collection
 * 
 *   :stdlib? - If true, the word definition is part of the fif standard
 *   libraries.
 * 
 *   :variable? - If true, the word definition is a single value data
 *   value or data collection.
 */
fif.stack_machine.words.set_global_meta = (function fif$stack_machine$words$set_global_meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39658 = arguments.length;
var i__4500__auto___39659 = (0);
while(true){
if((i__4500__auto___39659 < len__4499__auto___39658)){
args__4502__auto__.push((arguments[i__4500__auto___39659]));

var G__39660 = (i__4500__auto___39659 + (1));
i__4500__auto___39659 = G__39660;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__39654){
var map__39655 = p__39654;
var map__39655__$1 = ((((!((map__39655 == null)))?(((((map__39655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39655):map__39655);
var doc = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39655__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__39657 = sm;
var G__39657__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_global_metadata.call(null,G__39657,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__39657);
var G__39657__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_global_metadata.call(null,G__39657__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__39657__$1);
var G__39657__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_global_metadata.call(null,G__39657__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__39657__$2);
var G__39657__$4 = fif.stack_machine.words.update_global_metadata.call(null,G__39657__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__39657__$5 = fif.stack_machine.words.update_global_metadata.call(null,G__39657__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_global_metadata.call(null,G__39657__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_global_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_global_meta.cljs$lang$applyTo = (function (seq39651){
var G__39652 = cljs.core.first.call(null,seq39651);
var seq39651__$1 = cljs.core.next.call(null,seq39651);
var G__39653 = cljs.core.first.call(null,seq39651__$1);
var seq39651__$2 = cljs.core.next.call(null,seq39651__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39652,G__39653,seq39651__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_global_word_defn = (function fif$stack_machine$words$set_global_word_defn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39668 = arguments.length;
var i__4500__auto___39669 = (0);
while(true){
if((i__4500__auto___39669 < len__4499__auto___39668)){
args__4502__auto__.push((arguments[i__4500__auto___39669]));

var G__39670 = (i__4500__auto___39669 + (1));
i__4500__auto___39669 = G__39670;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__39665){
var map__39666 = p__39665;
var map__39666__$1 = ((((!((map__39666 == null)))?(((((map__39666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39666):map__39666);
var doc = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39666__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_global_meta.call(null,fif.stack_machine.words.set_global_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_global_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_global_word_defn.cljs$lang$applyTo = (function (seq39661){
var G__39662 = cljs.core.first.call(null,seq39661);
var seq39661__$1 = cljs.core.next.call(null,seq39661);
var G__39663 = cljs.core.first.call(null,seq39661__$1);
var seq39661__$2 = cljs.core.next.call(null,seq39661__$1);
var G__39664 = cljs.core.first.call(null,seq39661__$2);
var seq39661__$3 = cljs.core.next.call(null,seq39661__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39662,G__39663,G__39664,seq39661__$3);
});

/**
 * Sets the metadata for a particular global word definition, which
 *   consists of the keys :doc, :source, :stdlib? and :variable?.
 * 
 *   Meta Data Keys:
 * 
 *   :doc - Is a string explaining the given word definition.
 * 
 *   :source - If it is a word definition defined within fif, this will
 *   contain the word definition source code in the form of an EDN vector
 *   collectionconsisting of the source.
 *   
 *   :group - Set the word definition to a particular key group
 *   ex. :stdlib.collection
 * 
 *   :stdlib? - If true, the word definition is part of the fif standard
 *   libraries.
 * 
 *   :variable? - If true, the word definition is a single value data
 *   value or data collection.
 */
fif.stack_machine.words.set_local_meta = (function fif$stack_machine$words$set_local_meta(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39678 = arguments.length;
var i__4500__auto___39679 = (0);
while(true){
if((i__4500__auto___39679 < len__4499__auto___39678)){
args__4502__auto__.push((arguments[i__4500__auto___39679]));

var G__39680 = (i__4500__auto___39679 + (1));
i__4500__auto___39679 = G__39680;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__39674){
var map__39675 = p__39674;
var map__39675__$1 = ((((!((map__39675 == null)))?(((((map__39675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39675):map__39675);
var doc = cljs.core.get.call(null,map__39675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39675__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39675__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39675__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39675__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__39677 = sm;
var G__39677__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_metadata.call(null,G__39677,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__39677);
var G__39677__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_metadata.call(null,G__39677__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__39677__$1);
var G__39677__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_metadata.call(null,G__39677__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__39677__$2);
var G__39677__$4 = fif.stack_machine.words.update_metadata.call(null,G__39677__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__39677__$5 = fif.stack_machine.words.update_metadata.call(null,G__39677__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_metadata.call(null,G__39677__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_local_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_local_meta.cljs$lang$applyTo = (function (seq39671){
var G__39672 = cljs.core.first.call(null,seq39671);
var seq39671__$1 = cljs.core.next.call(null,seq39671);
var G__39673 = cljs.core.first.call(null,seq39671__$1);
var seq39671__$2 = cljs.core.next.call(null,seq39671__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39672,G__39673,seq39671__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_local_word_defn = (function fif$stack_machine$words$set_local_word_defn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39688 = arguments.length;
var i__4500__auto___39689 = (0);
while(true){
if((i__4500__auto___39689 < len__4499__auto___39688)){
args__4502__auto__.push((arguments[i__4500__auto___39689]));

var G__39690 = (i__4500__auto___39689 + (1));
i__4500__auto___39689 = G__39690;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__39685){
var map__39686 = p__39685;
var map__39686__$1 = ((((!((map__39686 == null)))?(((((map__39686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39686):map__39686);
var doc = cljs.core.get.call(null,map__39686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39686__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39686__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39686__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39686__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_local_meta.call(null,fif.stack_machine.words.set_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_local_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_local_word_defn.cljs$lang$applyTo = (function (seq39681){
var G__39682 = cljs.core.first.call(null,seq39681);
var seq39681__$1 = cljs.core.next.call(null,seq39681);
var G__39683 = cljs.core.first.call(null,seq39681__$1);
var seq39681__$2 = cljs.core.next.call(null,seq39681__$1);
var G__39684 = cljs.core.first.call(null,seq39681__$2);
var seq39681__$3 = cljs.core.next.call(null,seq39681__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39682,G__39683,G__39684,seq39681__$3);
});

