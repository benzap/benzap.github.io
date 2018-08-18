// Compiled by ClojureScript 1.10.339 {}
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
var args__4534__auto__ = [];
var len__4531__auto___39752 = arguments.length;
var i__4532__auto___39753 = (0);
while(true){
if((i__4532__auto___39753 < len__4531__auto___39752)){
args__4534__auto__.push((arguments[i__4532__auto___39753]));

var G__39754 = (i__4532__auto___39753 + (1));
i__4532__auto___39753 = G__39754;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.update_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
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
fif.stack_machine.words.update_metadata.cljs$lang$applyTo = (function (seq39748){
var G__39749 = cljs.core.first.call(null,seq39748);
var seq39748__$1 = cljs.core.next.call(null,seq39748);
var G__39750 = cljs.core.first.call(null,seq39748__$1);
var seq39748__$2 = cljs.core.next.call(null,seq39748__$1);
var G__39751 = cljs.core.first.call(null,seq39748__$2);
var seq39748__$3 = cljs.core.next.call(null,seq39748__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39749,G__39750,G__39751,seq39748__$3);
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
var args__4534__auto__ = [];
var len__4531__auto___39759 = arguments.length;
var i__4532__auto___39760 = (0);
while(true){
if((i__4532__auto___39760 < len__4531__auto___39759)){
args__4534__auto__.push((arguments[i__4532__auto___39760]));

var G__39761 = (i__4532__auto___39760 + (1));
i__4532__auto___39760 = G__39761;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.update_global_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
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
fif.stack_machine.words.update_global_metadata.cljs$lang$applyTo = (function (seq39755){
var G__39756 = cljs.core.first.call(null,seq39755);
var seq39755__$1 = cljs.core.next.call(null,seq39755);
var G__39757 = cljs.core.first.call(null,seq39755__$1);
var seq39755__$2 = cljs.core.next.call(null,seq39755__$1);
var G__39758 = cljs.core.first.call(null,seq39755__$2);
var seq39755__$3 = cljs.core.next.call(null,seq39755__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39756,G__39757,G__39758,seq39755__$3);
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
var args__4534__auto__ = [];
var len__4531__auto___39769 = arguments.length;
var i__4532__auto___39770 = (0);
while(true){
if((i__4532__auto___39770 < len__4531__auto___39769)){
args__4534__auto__.push((arguments[i__4532__auto___39770]));

var G__39771 = (i__4532__auto___39770 + (1));
i__4532__auto___39770 = G__39771;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__39765){
var map__39766 = p__39765;
var map__39766__$1 = ((((!((map__39766 == null)))?(((((map__39766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39766):map__39766);
var doc = cljs.core.get.call(null,map__39766__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39766__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39766__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39766__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39766__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__39768 = sm;
var G__39768__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_global_metadata.call(null,G__39768,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__39768);
var G__39768__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_global_metadata.call(null,G__39768__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__39768__$1);
var G__39768__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_global_metadata.call(null,G__39768__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__39768__$2);
var G__39768__$4 = fif.stack_machine.words.update_global_metadata.call(null,G__39768__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__39768__$5 = fif.stack_machine.words.update_global_metadata.call(null,G__39768__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_global_metadata.call(null,G__39768__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_global_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_global_meta.cljs$lang$applyTo = (function (seq39762){
var G__39763 = cljs.core.first.call(null,seq39762);
var seq39762__$1 = cljs.core.next.call(null,seq39762);
var G__39764 = cljs.core.first.call(null,seq39762__$1);
var seq39762__$2 = cljs.core.next.call(null,seq39762__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39763,G__39764,seq39762__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_global_word_defn = (function fif$stack_machine$words$set_global_word_defn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39779 = arguments.length;
var i__4532__auto___39780 = (0);
while(true){
if((i__4532__auto___39780 < len__4531__auto___39779)){
args__4534__auto__.push((arguments[i__4532__auto___39780]));

var G__39781 = (i__4532__auto___39780 + (1));
i__4532__auto___39780 = G__39781;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__39776){
var map__39777 = p__39776;
var map__39777__$1 = ((((!((map__39777 == null)))?(((((map__39777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39777):map__39777);
var doc = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39777__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_global_meta.call(null,fif.stack_machine.words.set_global_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_global_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_global_word_defn.cljs$lang$applyTo = (function (seq39772){
var G__39773 = cljs.core.first.call(null,seq39772);
var seq39772__$1 = cljs.core.next.call(null,seq39772);
var G__39774 = cljs.core.first.call(null,seq39772__$1);
var seq39772__$2 = cljs.core.next.call(null,seq39772__$1);
var G__39775 = cljs.core.first.call(null,seq39772__$2);
var seq39772__$3 = cljs.core.next.call(null,seq39772__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39773,G__39774,G__39775,seq39772__$3);
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
var args__4534__auto__ = [];
var len__4531__auto___39789 = arguments.length;
var i__4532__auto___39790 = (0);
while(true){
if((i__4532__auto___39790 < len__4531__auto___39789)){
args__4534__auto__.push((arguments[i__4532__auto___39790]));

var G__39791 = (i__4532__auto___39790 + (1));
i__4532__auto___39790 = G__39791;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__39785){
var map__39786 = p__39785;
var map__39786__$1 = ((((!((map__39786 == null)))?(((((map__39786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39786):map__39786);
var doc = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39786__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__39788 = sm;
var G__39788__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_metadata.call(null,G__39788,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__39788);
var G__39788__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_metadata.call(null,G__39788__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__39788__$1);
var G__39788__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_metadata.call(null,G__39788__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__39788__$2);
var G__39788__$4 = fif.stack_machine.words.update_metadata.call(null,G__39788__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__39788__$5 = fif.stack_machine.words.update_metadata.call(null,G__39788__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_metadata.call(null,G__39788__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_local_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_local_meta.cljs$lang$applyTo = (function (seq39782){
var G__39783 = cljs.core.first.call(null,seq39782);
var seq39782__$1 = cljs.core.next.call(null,seq39782);
var G__39784 = cljs.core.first.call(null,seq39782__$1);
var seq39782__$2 = cljs.core.next.call(null,seq39782__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39783,G__39784,seq39782__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_local_word_defn = (function fif$stack_machine$words$set_local_word_defn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39799 = arguments.length;
var i__4532__auto___39800 = (0);
while(true){
if((i__4532__auto___39800 < len__4531__auto___39799)){
args__4534__auto__.push((arguments[i__4532__auto___39800]));

var G__39801 = (i__4532__auto___39800 + (1));
i__4532__auto___39800 = G__39801;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__39796){
var map__39797 = p__39796;
var map__39797__$1 = ((((!((map__39797 == null)))?(((((map__39797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39797):map__39797);
var doc = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__39797__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_local_meta.call(null,fif.stack_machine.words.set_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_local_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_local_word_defn.cljs$lang$applyTo = (function (seq39792){
var G__39793 = cljs.core.first.call(null,seq39792);
var seq39792__$1 = cljs.core.next.call(null,seq39792);
var G__39794 = cljs.core.first.call(null,seq39792__$1);
var seq39792__$2 = cljs.core.next.call(null,seq39792__$1);
var G__39795 = cljs.core.first.call(null,seq39792__$2);
var seq39792__$3 = cljs.core.next.call(null,seq39792__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39793,G__39794,G__39795,seq39792__$3);
});

