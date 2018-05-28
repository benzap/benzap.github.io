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
var len__4499__auto___39639 = arguments.length;
var i__4500__auto___39640 = (0);
while(true){
if((i__4500__auto___39640 < len__4499__auto___39639)){
args__4502__auto__.push((arguments[i__4500__auto___39640]));

var G__39641 = (i__4500__auto___39640 + (1));
i__4500__auto___39640 = G__39641;
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
fif.stack_machine.words.update_metadata.cljs$lang$applyTo = (function (seq39635){
var G__39636 = cljs.core.first.call(null,seq39635);
var seq39635__$1 = cljs.core.next.call(null,seq39635);
var G__39637 = cljs.core.first.call(null,seq39635__$1);
var seq39635__$2 = cljs.core.next.call(null,seq39635__$1);
var G__39638 = cljs.core.first.call(null,seq39635__$2);
var seq39635__$3 = cljs.core.next.call(null,seq39635__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39636,G__39637,G__39638,seq39635__$3);
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
var len__4499__auto___39646 = arguments.length;
var i__4500__auto___39647 = (0);
while(true){
if((i__4500__auto___39647 < len__4499__auto___39646)){
args__4502__auto__.push((arguments[i__4500__auto___39647]));

var G__39648 = (i__4500__auto___39647 + (1));
i__4500__auto___39647 = G__39648;
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
fif.stack_machine.words.update_global_metadata.cljs$lang$applyTo = (function (seq39642){
var G__39643 = cljs.core.first.call(null,seq39642);
var seq39642__$1 = cljs.core.next.call(null,seq39642);
var G__39644 = cljs.core.first.call(null,seq39642__$1);
var seq39642__$2 = cljs.core.next.call(null,seq39642__$1);
var G__39645 = cljs.core.first.call(null,seq39642__$2);
var seq39642__$3 = cljs.core.next.call(null,seq39642__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39643,G__39644,G__39645,seq39642__$3);
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
var len__4499__auto___39656 = arguments.length;
var i__4500__auto___39657 = (0);
while(true){
if((i__4500__auto___39657 < len__4499__auto___39656)){
args__4502__auto__.push((arguments[i__4500__auto___39657]));

var G__39658 = (i__4500__auto___39657 + (1));
i__4500__auto___39657 = G__39658;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__39652){
var map__39653 = p__39652;
var map__39653__$1 = ((((!((map__39653 == null)))?(((((map__39653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39653):map__39653);
var doc = cljs.core.get.call(null,map__39653__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39653__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39653__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39653__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39653__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__39655 = sm;
var G__39655__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_global_metadata.call(null,G__39655,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__39655);
var G__39655__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_global_metadata.call(null,G__39655__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__39655__$1);
var G__39655__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_global_metadata.call(null,G__39655__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__39655__$2);
var G__39655__$4 = fif.stack_machine.words.update_global_metadata.call(null,G__39655__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__39655__$5 = fif.stack_machine.words.update_global_metadata.call(null,G__39655__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_global_metadata.call(null,G__39655__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_global_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_global_meta.cljs$lang$applyTo = (function (seq39649){
var G__39650 = cljs.core.first.call(null,seq39649);
var seq39649__$1 = cljs.core.next.call(null,seq39649);
var G__39651 = cljs.core.first.call(null,seq39649__$1);
var seq39649__$2 = cljs.core.next.call(null,seq39649__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39650,G__39651,seq39649__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_global_word_defn = (function fif$stack_machine$words$set_global_word_defn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39666 = arguments.length;
var i__4500__auto___39667 = (0);
while(true){
if((i__4500__auto___39667 < len__4499__auto___39666)){
args__4502__auto__.push((arguments[i__4500__auto___39667]));

var G__39668 = (i__4500__auto___39667 + (1));
i__4500__auto___39667 = G__39668;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__39663){
var map__39664 = p__39663;
var map__39664__$1 = ((((!((map__39664 == null)))?(((((map__39664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39664):map__39664);
var doc = cljs.core.get.call(null,map__39664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39664__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39664__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39664__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39664__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_global_meta.call(null,fif.stack_machine.words.set_global_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_global_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_global_word_defn.cljs$lang$applyTo = (function (seq39659){
var G__39660 = cljs.core.first.call(null,seq39659);
var seq39659__$1 = cljs.core.next.call(null,seq39659);
var G__39661 = cljs.core.first.call(null,seq39659__$1);
var seq39659__$2 = cljs.core.next.call(null,seq39659__$1);
var G__39662 = cljs.core.first.call(null,seq39659__$2);
var seq39659__$3 = cljs.core.next.call(null,seq39659__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39660,G__39661,G__39662,seq39659__$3);
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
var len__4499__auto___39676 = arguments.length;
var i__4500__auto___39677 = (0);
while(true){
if((i__4500__auto___39677 < len__4499__auto___39676)){
args__4502__auto__.push((arguments[i__4500__auto___39677]));

var G__39678 = (i__4500__auto___39677 + (1));
i__4500__auto___39677 = G__39678;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__39672){
var map__39673 = p__39672;
var map__39673__$1 = ((((!((map__39673 == null)))?(((((map__39673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39673):map__39673);
var doc = cljs.core.get.call(null,map__39673__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39673__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39673__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39673__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39673__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__39675 = sm;
var G__39675__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_metadata.call(null,G__39675,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__39675);
var G__39675__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_metadata.call(null,G__39675__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__39675__$1);
var G__39675__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_metadata.call(null,G__39675__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__39675__$2);
var G__39675__$4 = fif.stack_machine.words.update_metadata.call(null,G__39675__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__39675__$5 = fif.stack_machine.words.update_metadata.call(null,G__39675__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_metadata.call(null,G__39675__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_local_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_local_meta.cljs$lang$applyTo = (function (seq39669){
var G__39670 = cljs.core.first.call(null,seq39669);
var seq39669__$1 = cljs.core.next.call(null,seq39669);
var G__39671 = cljs.core.first.call(null,seq39669__$1);
var seq39669__$2 = cljs.core.next.call(null,seq39669__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39670,G__39671,seq39669__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_local_word_defn = (function fif$stack_machine$words$set_local_word_defn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39686 = arguments.length;
var i__4500__auto___39687 = (0);
while(true){
if((i__4500__auto___39687 < len__4499__auto___39686)){
args__4502__auto__.push((arguments[i__4500__auto___39687]));

var G__39688 = (i__4500__auto___39687 + (1));
i__4500__auto___39687 = G__39688;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__39683){
var map__39684 = p__39683;
var map__39684__$1 = ((((!((map__39684 == null)))?(((((map__39684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39684):map__39684);
var doc = cljs.core.get.call(null,map__39684__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39684__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39684__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39684__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39684__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_local_meta.call(null,fif.stack_machine.words.set_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_local_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_local_word_defn.cljs$lang$applyTo = (function (seq39679){
var G__39680 = cljs.core.first.call(null,seq39679);
var seq39679__$1 = cljs.core.next.call(null,seq39679);
var G__39681 = cljs.core.first.call(null,seq39679__$1);
var seq39679__$2 = cljs.core.next.call(null,seq39679__$1);
var G__39682 = cljs.core.first.call(null,seq39679__$2);
var seq39679__$3 = cljs.core.next.call(null,seq39679__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39680,G__39681,G__39682,seq39679__$3);
});

