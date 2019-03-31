// Compiled by ClojureScript 1.10.520 {}
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
var args__4736__auto__ = [];
var len__4730__auto___38267 = arguments.length;
var i__4731__auto___38268 = (0);
while(true){
if((i__4731__auto___38268 < len__4730__auto___38267)){
args__4736__auto__.push((arguments[i__4731__auto___38268]));

var G__38269 = (i__4731__auto___38268 + (1));
i__4731__auto___38268 = G__38269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.update_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
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
fif.stack_machine.words.update_metadata.cljs$lang$applyTo = (function (seq38263){
var G__38264 = cljs.core.first.call(null,seq38263);
var seq38263__$1 = cljs.core.next.call(null,seq38263);
var G__38265 = cljs.core.first.call(null,seq38263__$1);
var seq38263__$2 = cljs.core.next.call(null,seq38263__$1);
var G__38266 = cljs.core.first.call(null,seq38263__$2);
var seq38263__$3 = cljs.core.next.call(null,seq38263__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38264,G__38265,G__38266,seq38263__$3);
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
var args__4736__auto__ = [];
var len__4730__auto___38274 = arguments.length;
var i__4731__auto___38275 = (0);
while(true){
if((i__4731__auto___38275 < len__4730__auto___38274)){
args__4736__auto__.push((arguments[i__4731__auto___38275]));

var G__38276 = (i__4731__auto___38275 + (1));
i__4731__auto___38275 = G__38276;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.update_global_metadata.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
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
fif.stack_machine.words.update_global_metadata.cljs$lang$applyTo = (function (seq38270){
var G__38271 = cljs.core.first.call(null,seq38270);
var seq38270__$1 = cljs.core.next.call(null,seq38270);
var G__38272 = cljs.core.first.call(null,seq38270__$1);
var seq38270__$2 = cljs.core.next.call(null,seq38270__$1);
var G__38273 = cljs.core.first.call(null,seq38270__$2);
var seq38270__$3 = cljs.core.next.call(null,seq38270__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38271,G__38272,G__38273,seq38270__$3);
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
var args__4736__auto__ = [];
var len__4730__auto___38284 = arguments.length;
var i__4731__auto___38285 = (0);
while(true){
if((i__4731__auto___38285 < len__4730__auto___38284)){
args__4736__auto__.push((arguments[i__4731__auto___38285]));

var G__38286 = (i__4731__auto___38285 + (1));
i__4731__auto___38285 = G__38286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fif.stack_machine.words.set_global_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__38280){
var map__38281 = p__38280;
var map__38281__$1 = (((((!((map__38281 == null))))?(((((map__38281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38281):map__38281);
var doc = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__38283 = sm;
var G__38283__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_global_metadata.call(null,G__38283,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__38283);
var G__38283__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_global_metadata.call(null,G__38283__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__38283__$1);
var G__38283__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_global_metadata.call(null,G__38283__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__38283__$2);
var G__38283__$4 = fif.stack_machine.words.update_global_metadata.call(null,G__38283__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__38283__$5 = fif.stack_machine.words.update_global_metadata.call(null,G__38283__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_global_metadata.call(null,G__38283__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_global_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_global_meta.cljs$lang$applyTo = (function (seq38277){
var G__38278 = cljs.core.first.call(null,seq38277);
var seq38277__$1 = cljs.core.next.call(null,seq38277);
var G__38279 = cljs.core.first.call(null,seq38277__$1);
var seq38277__$2 = cljs.core.next.call(null,seq38277__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38278,G__38279,seq38277__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_global_word_defn = (function fif$stack_machine$words$set_global_word_defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38294 = arguments.length;
var i__4731__auto___38295 = (0);
while(true){
if((i__4731__auto___38295 < len__4730__auto___38294)){
args__4736__auto__.push((arguments[i__4731__auto___38295]));

var G__38296 = (i__4731__auto___38295 + (1));
i__4731__auto___38295 = G__38296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fif.stack_machine.words.set_global_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__38291){
var map__38292 = p__38291;
var map__38292__$1 = (((((!((map__38292 == null))))?(((((map__38292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38292):map__38292);
var doc = cljs.core.get.call(null,map__38292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__38292__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__38292__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__38292__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__38292__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_global_meta.call(null,fif.stack_machine.words.set_global_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_global_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_global_word_defn.cljs$lang$applyTo = (function (seq38287){
var G__38288 = cljs.core.first.call(null,seq38287);
var seq38287__$1 = cljs.core.next.call(null,seq38287);
var G__38289 = cljs.core.first.call(null,seq38287__$1);
var seq38287__$2 = cljs.core.next.call(null,seq38287__$1);
var G__38290 = cljs.core.first.call(null,seq38287__$2);
var seq38287__$3 = cljs.core.next.call(null,seq38287__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38288,G__38289,G__38290,seq38287__$3);
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
var args__4736__auto__ = [];
var len__4730__auto___38304 = arguments.length;
var i__4731__auto___38305 = (0);
while(true){
if((i__4731__auto___38305 < len__4730__auto___38304)){
args__4736__auto__.push((arguments[i__4731__auto___38305]));

var G__38306 = (i__4731__auto___38305 + (1));
i__4731__auto___38305 = G__38306;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fif.stack_machine.words.set_local_meta.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,p__38300){
var map__38301 = p__38300;
var map__38301__$1 = (((((!((map__38301 == null))))?(((((map__38301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38301):map__38301);
var doc = cljs.core.get.call(null,map__38301__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__38301__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__38301__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__38301__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__38301__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
var G__38303 = sm;
var G__38303__$1 = (cljs.core.truth_(doc)?fif.stack_machine.words.update_metadata.call(null,G__38303,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc):G__38303);
var G__38303__$2 = (cljs.core.truth_(source)?fif.stack_machine.words.update_metadata.call(null,G__38303__$1,wname,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source):G__38303__$1);
var G__38303__$3 = (cljs.core.truth_(group)?fif.stack_machine.words.update_metadata.call(null,G__38303__$2,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),group):G__38303__$2);
var G__38303__$4 = fif.stack_machine.words.update_metadata.call(null,G__38303__$3,wname,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),wname)
;
var G__38303__$5 = fif.stack_machine.words.update_metadata.call(null,G__38303__$4,wname,cljs.core.assoc,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_)
;
return fif.stack_machine.words.update_metadata.call(null,G__38303__$5,wname,cljs.core.assoc,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);

});

fif.stack_machine.words.set_local_meta.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.words.set_local_meta.cljs$lang$applyTo = (function (seq38297){
var G__38298 = cljs.core.first.call(null,seq38297);
var seq38297__$1 = cljs.core.next.call(null,seq38297);
var G__38299 = cljs.core.first.call(null,seq38297__$1);
var seq38297__$2 = cljs.core.next.call(null,seq38297__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38298,G__38299,seq38297__$2);
});

/**
 * Used to set a word definition function while conveniently allowing
 *   you to set the metadata as well.
 */
fif.stack_machine.words.set_local_word_defn = (function fif$stack_machine$words$set_local_word_defn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38314 = arguments.length;
var i__4731__auto___38315 = (0);
while(true){
if((i__4731__auto___38315 < len__4730__auto___38314)){
args__4736__auto__.push((arguments[i__4731__auto___38315]));

var G__38316 = (i__4731__auto___38315 + (1));
i__4731__auto___38315 = G__38316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fif.stack_machine.words.set_local_word_defn.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__38311){
var map__38312 = p__38311;
var map__38312__$1 = (((((!((map__38312 == null))))?(((((map__38312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38312):map__38312);
var doc = cljs.core.get.call(null,map__38312__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),null);
var source = cljs.core.get.call(null,map__38312__$1,new cljs.core.Keyword(null,"source","source",-433931539),null);
var group = cljs.core.get.call(null,map__38312__$1,new cljs.core.Keyword(null,"group","group",582596132),null);
var stdlib_QMARK_ = cljs.core.get.call(null,map__38312__$1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false);
var variable_QMARK_ = cljs.core.get.call(null,map__38312__$1,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
return fif.stack_machine.words.set_local_meta.call(null,fif.stack_machine.words.set_word.call(null,sm,wname,wfunc),wname,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),stdlib_QMARK_,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),variable_QMARK_);
});

fif.stack_machine.words.set_local_word_defn.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.words.set_local_word_defn.cljs$lang$applyTo = (function (seq38307){
var G__38308 = cljs.core.first.call(null,seq38307);
var seq38307__$1 = cljs.core.next.call(null,seq38307);
var G__38309 = cljs.core.first.call(null,seq38307__$1);
var seq38307__$2 = cljs.core.next.call(null,seq38307__$1);
var G__38310 = cljs.core.first.call(null,seq38307__$2);
var seq38307__$3 = cljs.core.next.call(null,seq38307__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38308,G__38309,G__38310,seq38307__$3);
});

