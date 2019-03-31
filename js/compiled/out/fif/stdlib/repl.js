// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.stdlib.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.mode');
goog.require('fif.stack_machine');
fif.stdlib.repl.arg_meta_op = new cljs.core.Symbol(null,"meta","meta",-1154898805,null);
fif.stdlib.repl.arg_setmeta_op = new cljs.core.Symbol(null,"setmeta","setmeta",1818427310,null);
fif.stdlib.repl.arg_see_op = new cljs.core.Symbol(null,"see","see",1788667073,null);
fif.stdlib.repl.arg_see_words_op = new cljs.core.Symbol(null,"see-words","see-words",1608741589,null);
fif.stdlib.repl.arg_see_user_words_op = new cljs.core.Symbol(null,"see-user-words","see-user-words",1781688488,null);
fif.stdlib.repl.arg_see_groups_op = new cljs.core.Symbol(null,"see-groups","see-groups",-27678753,null);
fif.stdlib.repl.arg_doc_op = new cljs.core.Symbol(null,"doc","doc",-741138878,null);
fif.stdlib.repl.arg_group_op = new cljs.core.Symbol(null,"group","group",-2071839637,null);
fif.stdlib.repl.see_mode_flag = new cljs.core.Keyword(null,"see-mode","see-mode",-885524123);
fif.stdlib.repl.doc_mode_flag = new cljs.core.Keyword(null,"doc-mode","doc-mode",-1818644895);
fif.stdlib.repl.group_mode_flag = new cljs.core.Keyword(null,"group-mode","group-mode",70153873);
fif.stdlib.repl.enter_doc_mode = (function fif$stdlib$repl$enter_doc_mode(sm,state){
return fif.stack_machine.mode.enter_mode.call(null,sm,fif.stdlib.repl.doc_mode_flag,state);
});
fif.stdlib.repl.exit_doc_mode = (function fif$stdlib$repl$exit_doc_mode(sm){
return fif.stack_machine.mode.exit_mode.call(null,sm);
});
if((typeof fif !== 'undefined') && (typeof fif.stdlib !== 'undefined') && (typeof fif.stdlib.repl !== 'undefined') && (typeof fif.stdlib.repl.doc_mode !== 'undefined')){
} else {
fif.stdlib.repl.doc_mode = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fif.stdlib.repl","doc-mode"),fif.stack_machine.mode.mode_dispatch_fn,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
fif.stdlib.repl.doc_op = (function fif$stdlib$repl$doc_op(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.repl.enter_doc_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"retrieve-word","retrieve-word",-1560183108)], null)));
});
cljs.core._add_method.call(null,fif.stdlib.repl.doc_mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"retrieve-word","retrieve-word",-1560183108)], null),(function (sm){
var wname = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.mode.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.repl","wname","fif.stdlib.repl/wname",1110915063),wname),cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"retrieve-docstring","retrieve-docstring",2070137016)));
}));
cljs.core._add_method.call(null,fif.stdlib.repl.doc_mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"retrieve-docstring","retrieve-docstring",2070137016)], null),(function (sm){
var docstring = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var wname = new cljs.core.Keyword("fif.stdlib.repl","wname","fif.stdlib.repl/wname",1110915063).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.mode.get_mode_stash.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.repl.exit_doc_mode.call(null,fif.stack_machine.words.update_global_metadata.call(null,sm,wname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring)));
}));
fif.stdlib.repl.enter_group_mode = (function fif$stdlib$repl$enter_group_mode(sm,state){
return fif.stack_machine.mode.enter_mode.call(null,sm,fif.stdlib.repl.group_mode_flag,state);
});
fif.stdlib.repl.exit_group_mode = (function fif$stdlib$repl$exit_group_mode(sm){
return fif.stack_machine.mode.exit_mode.call(null,sm);
});
if((typeof fif !== 'undefined') && (typeof fif.stdlib !== 'undefined') && (typeof fif.stdlib.repl !== 'undefined') && (typeof fif.stdlib.repl.group_mode !== 'undefined')){
} else {
fif.stdlib.repl.group_mode = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fif.stdlib.repl","group-mode"),fif.stack_machine.mode.mode_dispatch_fn,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
fif.stdlib.repl.group_op = (function fif$stdlib$repl$group_op(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.repl.enter_group_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"retrieve-word","retrieve-word",-1560183108)], null)));
});
cljs.core._add_method.call(null,fif.stdlib.repl.group_mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"retrieve-word","retrieve-word",-1560183108)], null),(function (sm){
var wname = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.mode.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.repl","wname","fif.stdlib.repl/wname",1110915063),wname),cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"retrieve-groupkey","retrieve-groupkey",655095702)));
}));
cljs.core._add_method.call(null,fif.stdlib.repl.group_mode,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"retrieve-groupkey","retrieve-groupkey",655095702)], null),(function (sm){
var groupkey = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var wname = new cljs.core.Keyword("fif.stdlib.repl","wname","fif.stdlib.repl/wname",1110915063).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.mode.get_mode_stash.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.repl.exit_group_mode.call(null,fif.stack_machine.words.update_metadata.call(null,sm,wname,cljs.core.assoc,new cljs.core.Keyword(null,"group","group",582596132),groupkey)));
}));
fif.stdlib.repl.meta_op = (function fif$stdlib$repl$meta_op(sm){
var vec__38392 = fif.stack_machine.get_stack.call(null,sm);
var val = cljs.core.nth.call(null,vec__38392,(0),null);
var meta = fif.stack_machine.words.get_metadata.call(null,sm,val);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),meta));
});
fif.stdlib.repl.setmeta_op = (function fif$stdlib$repl$setmeta_op(sm){
var vec__38395 = fif.stack_machine.get_stack.call(null,sm);
var new_meta = cljs.core.nth.call(null,vec__38395,(0),null);
var wname = cljs.core.nth.call(null,vec__38395,(1),null);
var old_meta = fif.stack_machine.words.get_global_metadata.call(null,sm,wname);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.words.set_metadata.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,sm)),wname,cljs.core.merge.call(null,old_meta,new_meta)));
});
fif.stdlib.repl.see_op = (function fif$stdlib$repl$see_op(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.repl.see_mode_flag));
});
fif.stdlib.repl.see_mode = (function fif$stdlib$repl$see_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var word = fif.stack_machine.get_word.call(null,sm,arg);
var meta = fif.stack_machine.words.get_global_metadata.call(null,sm,arg);
cljs.core.println.call(null,"name:\t",arg);

cljs.core.println.call(null,"group:\t",new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(meta));

cljs.core.println.call(null,"type:\t",((cljs.core._EQ_.call(null,word,fif.stack_machine.words.not_found))?(function (){try{return cljs.core.type.call(null,arg);
}catch (e38398){if((e38398 instanceof Error)){
var e = e38398;
return null;
} else {
throw e38398;

}
}})():(cljs.core.truth_(new cljs.core.Keyword(null,"variable?","variable?",-1902009648).cljs$core$IFn$_invoke$arity$1(meta))?(function (){var G__38399 = new cljs.core.Keyword(null,"variable?","variable?",-1902009648).cljs$core$IFn$_invoke$arity$1(meta);
var G__38399__$1 = (((G__38399 instanceof cljs.core.Keyword))?G__38399.fqn:null);
switch (G__38399__$1) {
case "local":
return "local variable";

break;
case "global":
return "global variable";

break;
default:
return "variable";

}
})():"function"
)));

cljs.core.println.call(null,"doc:\t",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(meta));

cljs.core.println.call(null,"source:\t",(function (){var temp__5722__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(meta);
if((temp__5722__auto__ == null)){
return "<clojure>";
} else {
var source = temp__5722__auto__;
return cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(meta));
}
})());

return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,sm));
});
fif.stdlib.repl.see_words_op = (function fif$stdlib$repl$see_words_op(sm){
var words = cljs.core.keys.call(null,fif.stack_machine.words.get_word_listing.call(null,sm));
cljs.core.apply.call(null,cljs.core.println,cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.str,words)));

return fif.stack_machine.dequeue_code.call(null,sm);
});
fif.stdlib.repl.see_user_words_op = (function fif$stdlib$repl$see_user_words_op(sm){
var words = cljs.core.keys.call(null,fif.stack_machine.words.get_word_listing.call(null,sm));
var metadata = fif.stack_machine.words.get_metadata_listing.call(null,sm);
var user_words = cljs.core.reduce.call(null,((function (words,metadata){
return (function (wlist,wname){
var temp__5718__auto__ = fif.stack_machine.words.get_metadata.call(null,sm,wname);
if(cljs.core.truth_(temp__5718__auto__)){
var wmeta = temp__5718__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220).cljs$core$IFn$_invoke$arity$1(wmeta))){
return wlist;
} else {
return cljs.core.conj.call(null,wlist,wname);
}
} else {
return cljs.core.conj.call(null,wlist,wname);
}
});})(words,metadata))
,cljs.core.PersistentVector.EMPTY,words);
cljs.core.apply.call(null,cljs.core.println,cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.str,user_words)));

return fif.stack_machine.dequeue_code.call(null,sm);
});
fif.stdlib.repl.see_groups_op = (function fif$stdlib$repl$see_groups_op(sm){
var groups = cljs.core.sort.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.vals.call(null,fif.stack_machine.words.get_metadata_listing.call(null,sm)))));
var seq__38401_38405 = cljs.core.seq.call(null,groups);
var chunk__38402_38406 = null;
var count__38403_38407 = (0);
var i__38404_38408 = (0);
while(true){
if((i__38404_38408 < count__38403_38407)){
var group_38409 = cljs.core._nth.call(null,chunk__38402_38406,i__38404_38408);
cljs.core.println.call(null,group_38409);


var G__38410 = seq__38401_38405;
var G__38411 = chunk__38402_38406;
var G__38412 = count__38403_38407;
var G__38413 = (i__38404_38408 + (1));
seq__38401_38405 = G__38410;
chunk__38402_38406 = G__38411;
count__38403_38407 = G__38412;
i__38404_38408 = G__38413;
continue;
} else {
var temp__5720__auto___38414 = cljs.core.seq.call(null,seq__38401_38405);
if(temp__5720__auto___38414){
var seq__38401_38415__$1 = temp__5720__auto___38414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38401_38415__$1)){
var c__4550__auto___38416 = cljs.core.chunk_first.call(null,seq__38401_38415__$1);
var G__38417 = cljs.core.chunk_rest.call(null,seq__38401_38415__$1);
var G__38418 = c__4550__auto___38416;
var G__38419 = cljs.core.count.call(null,c__4550__auto___38416);
var G__38420 = (0);
seq__38401_38405 = G__38417;
chunk__38402_38406 = G__38418;
count__38403_38407 = G__38419;
i__38404_38408 = G__38420;
continue;
} else {
var group_38421 = cljs.core.first.call(null,seq__38401_38415__$1);
cljs.core.println.call(null,group_38421);


var G__38422 = cljs.core.next.call(null,seq__38401_38415__$1);
var G__38423 = null;
var G__38424 = (0);
var G__38425 = (0);
seq__38401_38405 = G__38422;
chunk__38402_38406 = G__38423;
count__38403_38407 = G__38424;
i__38404_38408 = G__38425;
continue;
}
} else {
}
}
break;
}

return fif.stack_machine.dequeue_code.call(null,sm);
});
fif.stdlib.repl.see_user_groups_op = (function fif$stdlib$repl$see_user_groups_op(sm){
var groups = cljs.core.sort.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"group","group",582596132),cljs.core.filter.call(null,(function (p1__38426_SHARP_){
return cljs.core.not.call(null,cljs.core.get.call(null,p1__38426_SHARP_,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false));
}),cljs.core.vals.call(null,fif.stack_machine.words.get_metadata_listing.call(null,sm))))));
var seq__38427_38431 = cljs.core.seq.call(null,groups);
var chunk__38428_38432 = null;
var count__38429_38433 = (0);
var i__38430_38434 = (0);
while(true){
if((i__38430_38434 < count__38429_38433)){
var group_38435 = cljs.core._nth.call(null,chunk__38428_38432,i__38430_38434);
cljs.core.println.call(null,group_38435);


var G__38436 = seq__38427_38431;
var G__38437 = chunk__38428_38432;
var G__38438 = count__38429_38433;
var G__38439 = (i__38430_38434 + (1));
seq__38427_38431 = G__38436;
chunk__38428_38432 = G__38437;
count__38429_38433 = G__38438;
i__38430_38434 = G__38439;
continue;
} else {
var temp__5720__auto___38440 = cljs.core.seq.call(null,seq__38427_38431);
if(temp__5720__auto___38440){
var seq__38427_38441__$1 = temp__5720__auto___38440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38427_38441__$1)){
var c__4550__auto___38442 = cljs.core.chunk_first.call(null,seq__38427_38441__$1);
var G__38443 = cljs.core.chunk_rest.call(null,seq__38427_38441__$1);
var G__38444 = c__4550__auto___38442;
var G__38445 = cljs.core.count.call(null,c__4550__auto___38442);
var G__38446 = (0);
seq__38427_38431 = G__38443;
chunk__38428_38432 = G__38444;
count__38429_38433 = G__38445;
i__38430_38434 = G__38446;
continue;
} else {
var group_38447 = cljs.core.first.call(null,seq__38427_38441__$1);
cljs.core.println.call(null,group_38447);


var G__38448 = cljs.core.next.call(null,seq__38427_38441__$1);
var G__38449 = null;
var G__38450 = (0);
var G__38451 = (0);
seq__38427_38431 = G__38448;
chunk__38428_38432 = G__38449;
count__38429_38433 = G__38450;
i__38430_38434 = G__38451;
continue;
}
} else {
}
}
break;
}

return fif.stack_machine.dequeue_code.call(null,sm);
});
fif.stdlib.repl.dir_op = (function fif$stdlib$repl$dir_op(sm){
var vec__38452 = fif.stack_machine.get_code.call(null,sm);
var dir = cljs.core.nth.call(null,vec__38452,(0),null);
var group = cljs.core.nth.call(null,vec__38452,(1),null);
var words = (function (){var $ = sm;
var $__$1 = fif.stack_machine.words.get_metadata_listing.call(null,$);
var $__$2 = cljs.core.map.call(null,((function ($,$__$1,vec__38452,dir,group){
return (function (p__38455){
var vec__38456 = p__38455;
var k = cljs.core.nth.call(null,vec__38456,(0),null);
var v = cljs.core.nth.call(null,vec__38456,(1),null);
return cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"word","word",-420123725),k);
});})($,$__$1,vec__38452,dir,group))
,$__$1);
var $__$3 = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"group","group",582596132),$__$2);
var $__$4 = cljs.core.get.call(null,$__$3,group);
var $__$5 = cljs.core.map.call(null,new cljs.core.Keyword(null,"word","word",-420123725),$__$4);
return cljs.core.sort.call(null,$__$5);
})();
cljs.core.apply.call(null,cljs.core.println,words);

return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.dequeue_code.call(null,sm));
});
fif.stdlib.repl.import_stdlib_repl = (function fif$stdlib$repl$import_stdlib_repl(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.repl.arg_doc_op,fif.stdlib.repl.doc_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"doc <wname> <string> -- set docstring for given word definition.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.repl","stdlib.repl",-683688882)),fif.stdlib.repl.arg_group_op,fif.stdlib.repl.group_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"group <wname> <group-key> -- set group for given word definition.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.repl","stdlib.repl",-683688882)),fif.stdlib.repl.arg_see_op,fif.stdlib.repl.see_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"see <word> -- Display info about a given word definition.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.repl","stdlib.repl",-683688882)),fif.stdlib.repl.arg_see_words_op,fif.stdlib.repl.see_words_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"see-words -- Display a list of all word definitions.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.repl","stdlib.repl",-683688882)),fif.stdlib.repl.arg_see_user_words_op,fif.stdlib.repl.see_user_words_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"see-user-words -- Display all words that are not part of the standard library.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.repl","stdlib.repl",-683688882)),fif.stdlib.repl.arg_see_groups_op,fif.stdlib.repl.see_groups_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"see-groups -- Display all word definition groups.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.repl","stdlib.repl",-683688882)),new cljs.core.Symbol(null,"see-user-groups","see-user-groups",-1865257053,null),fif.stdlib.repl.see_user_groups_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"see-user-groups -- Display all user word definition groups.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.repl","stdlib.repl",-683688882)),new cljs.core.Symbol(null,"dir","dir",-919681108,null),fif.stdlib.repl.dir_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"dir <group> -- Display all words that belong to the given group",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.repl","stdlib.repl",-683688882)),fif.stdlib.repl.arg_meta_op,fif.stdlib.repl.meta_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"( word -- metadata ) Returns the metadata for the given word definition.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.metadata","stdlib.metadata",-1261708339)),fif.stdlib.repl.arg_setmeta_op,fif.stdlib.repl.setmeta_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"( wname metadata -- ) Sets and merges the key values of `metadata` into the metadata of `wname`.",new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.metadata","stdlib.metadata",-1261708339)),fif.stdlib.repl.see_mode_flag,fif.stdlib.repl.see_mode),fif.stdlib.repl.doc_mode_flag,fif.stdlib.repl.doc_mode),fif.stdlib.repl.group_mode_flag,fif.stdlib.repl.group_mode);
});
