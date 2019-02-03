// Compiled by ClojureScript 1.10.439 {}
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
var args__4647__auto__ = [];
var len__4641__auto___32024 = arguments.length;
var i__4642__auto___32025 = (0);
while(true){
if((i__4642__auto___32025 < len__4641__auto___32024)){
args__4647__auto__.push((arguments[i__4642__auto___32025]));

var G__32026 = (i__4642__auto___32025 + (1));
i__4642__auto___32025 = G__32026;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.update_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.stack_machine.words.update_metadata.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,f,args){
var temp__5718__auto__ = fif.stack_machine.words.get_metadata.call(null,sm,wname);
if(cljs.core.truth_(temp__5718__auto__)){
var meta = temp__5718__auto__;
return fif.stack_machine.words.set_metadata.call(null,sm,wname,cljs.core.apply.call(null,f,meta,args));
} else {
return fif.stack_machine.words.set_metadata.call(null,sm,wname,cljs.core.apply.call(null,f,cljs.core.PersistentArrayMap.EMPTY,args));
}
});

fif.stack_machine.words.update_metadata.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.update_metadata.cljs$lang$applyTo = (function (seq32020){
var G__32021 = cljs.core.first.call(null,seq32020);
var seq32020__$1 = cljs.core.next.call(null,seq32020);
var G__32022 = cljs.core.first.call(null,seq32020__$1);
var seq32020__$2 = cljs.core.next.call(null,seq32020__$1);
var G__32023 = cljs.core.first.call(null,seq32020__$2);
var seq32020__$3 = cljs.core.next.call(null,seq32020__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32021,G__32022,G__32023,seq32020__$3);
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
var args__4647__auto__ = [];
var len__4641__auto___32031 = arguments.length;
var i__4642__auto___32032 = (0);
while(true){
if((i__4642__auto___32032 < len__4641__auto___32031)){
args__4647__auto__.push((arguments[i__4642__auto___32032]));

var G__32033 = (i__4642__auto___32032 + (1));
i__4642__auto___32032 = G__32033;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.update_global_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.stack_machine.words.update_global_metadata.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,f,args){
var temp__5718__auto__ = fif.stack_machine.words.get_global_metadata.call(null,sm,wname);
if(cljs.core.truth_(temp__5718__auto__)){
var meta = temp__5718__auto__;
return fif.stack_machine.words.set_global_metadata.call(null,sm,wname,cljs.core.apply.call(null,f,meta,args));
} else {
return fif.stack_machine.words.set_global_metadata.call(null,sm,wname,cljs.core.apply.call(null,f,cljs.core.PersistentArrayMap.EMPTY,args));
}
});

fif.stack_machine.words.update_global_metadata.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.update_global_metadata.cljs$lang$applyTo = (function (seq32027){
var G__32028 = cljs.core.first.call(null,seq32027);
var seq32027__$1 = cljs.core.next.call(null,seq32027);
var G__32029 = cljs.core.first.call(null,seq32027__$1);
var seq32027__$2 = cljs.core.next.call(null,seq32027__$1);
var G__32030 = cljs.core.first.call(null,seq32027__$2);
var seq32027__$3 = cljs.core.next.call(null,seq32027__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32028,G__32029,G__32030,seq32027__$3);
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
var args__4647__auto__ = [];
var len__4641__auto___32041 = arguments.length;
var i__4642__auto___32042 = (0);
while(true){
if((i__4642__auto___32042 < len__4641__auto___32041)){
args__4647__auto__.push((arguments[i__4642__auto___32042]));

var G__32043 = (i__4642__auto___32042 + (1));
i__4642__auto___32042 = G__32043;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__32037){
var map__32038 = p__32037;
var map__32038__$1 = (((((!((map__32038 == null))))?(((((map__32038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32038):map__32038);
var doc = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__32038__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__32040 = sm;
var G__32040__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_global_metadata.call(null,G__32040,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__32040);
var G__32040__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_global_metadata.call(null,G__32040__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__32040__$1);
var G__32040__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_global_metadata.call(null,G__32040__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__32040__$2);
var G__32040__$4 = fif.stack_machine.words.update_global_metadata.call(null,G__32040__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__32040__$5 = fif.stack_machine.words.update_global_metadata.call(null,G__32040__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_global_metadata.call(null,G__32040__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_global_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_global_meta.cljs$lang$applyTo = (function (seq32034){
var G__32035 = cljs.core.first.call(null,seq32034);
var seq32034__$1 = cljs.core.next.call(null,seq32034);
var G__32036 = cljs.core.first.call(null,seq32034__$1);
var seq32034__$2 = cljs.core.next.call(null,seq32034__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32035,G__32036,seq32034__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_global_word_defn = (function fif$stack_machine$words$set_global_word_defn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32051 = arguments.length;
var i__4642__auto___32052 = (0);
while(true){
if((i__4642__auto___32052 < len__4641__auto___32051)){
args__4647__auto__.push((arguments[i__4642__auto___32052]));

var G__32053 = (i__4642__auto___32052 + (1));
i__4642__auto___32052 = G__32053;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__32048){
var map__32049 = p__32048;
var map__32049__$1 = (((((!((map__32049 == null))))?(((((map__32049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32049):map__32049);
var doc = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__32049__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_global_meta.call(null,fif.stack_machine.words.set_global_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_global_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_global_word_defn.cljs$lang$applyTo = (function (seq32044){
var G__32045 = cljs.core.first.call(null,seq32044);
var seq32044__$1 = cljs.core.next.call(null,seq32044);
var G__32046 = cljs.core.first.call(null,seq32044__$1);
var seq32044__$2 = cljs.core.next.call(null,seq32044__$1);
var G__32047 = cljs.core.first.call(null,seq32044__$2);
var seq32044__$3 = cljs.core.next.call(null,seq32044__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32045,G__32046,G__32047,seq32044__$3);
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
var args__4647__auto__ = [];
var len__4641__auto___32061 = arguments.length;
var i__4642__auto___32062 = (0);
while(true){
if((i__4642__auto___32062 < len__4641__auto___32061)){
args__4647__auto__.push((arguments[i__4642__auto___32062]));

var G__32063 = (i__4642__auto___32062 + (1));
i__4642__auto___32062 = G__32063;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__32057){
var map__32058 = p__32057;
var map__32058__$1 = (((((!((map__32058 == null))))?(((((map__32058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32058):map__32058);
var doc = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__32060 = sm;
var G__32060__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_metadata.call(null,G__32060,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__32060);
var G__32060__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_metadata.call(null,G__32060__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__32060__$1);
var G__32060__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_metadata.call(null,G__32060__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__32060__$2);
var G__32060__$4 = fif.stack_machine.words.update_metadata.call(null,G__32060__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__32060__$5 = fif.stack_machine.words.update_metadata.call(null,G__32060__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_metadata.call(null,G__32060__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_local_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_local_meta.cljs$lang$applyTo = (function (seq32054){
var G__32055 = cljs.core.first.call(null,seq32054);
var seq32054__$1 = cljs.core.next.call(null,seq32054);
var G__32056 = cljs.core.first.call(null,seq32054__$1);
var seq32054__$2 = cljs.core.next.call(null,seq32054__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32055,G__32056,seq32054__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_local_word_defn = (function fif$stack_machine$words$set_local_word_defn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___32071 = arguments.length;
var i__4642__auto___32072 = (0);
while(true){
if((i__4642__auto___32072 < len__4641__auto___32071)){
args__4647__auto__.push((arguments[i__4642__auto___32072]));

var G__32073 = (i__4642__auto___32072 + (1));
i__4642__auto___32072 = G__32073;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__32068){
var map__32069 = p__32068;
var map__32069__$1 = (((((!((map__32069 == null))))?(((((map__32069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32069):map__32069);
var doc = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_local_meta.call(null,fif.stack_machine.words.set_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_local_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_local_word_defn.cljs$lang$applyTo = (function (seq32064){
var G__32065 = cljs.core.first.call(null,seq32064);
var seq32064__$1 = cljs.core.next.call(null,seq32064);
var G__32066 = cljs.core.first.call(null,seq32064__$1);
var seq32064__$2 = cljs.core.next.call(null,seq32064__$1);
var G__32067 = cljs.core.first.call(null,seq32064__$2);
var seq32064__$3 = cljs.core.next.call(null,seq32064__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32065,G__32066,G__32067,seq32064__$3);
});

