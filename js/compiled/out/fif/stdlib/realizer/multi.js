// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stdlib.realizer.multi');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.processor');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stack_machine.mode');
goog.require('fif.utils.token');
fif.stdlib.realizer.multi.arg_realize_token = new cljs.core.Symbol(null,"??","??",-1097896773,null);
fif.stdlib.realizer.multi.arg_realize_start_token = new cljs.core.Symbol("??","start","??/start",1285328658,null);
fif.stdlib.realizer.multi.arg_realize_finish_token = new cljs.core.Symbol("??","finish","??/finish",1053841529,null);
fif.stdlib.realizer.multi.realize_multi_mode_flag = new cljs.core.Keyword(null,"realize-multi-mode","realize-multi-mode",-1719675196);
fif.stdlib.realizer.multi.enter_realize_multi_mode = (function fif$stdlib$realizer$multi$enter_realize_multi_mode(sm,state){
return fif.stack_machine.mode.enter_mode.call(null,sm,fif.stdlib.realizer.multi.realize_multi_mode_flag,state);
});
fif.stdlib.realizer.multi.exit_realize_multi_mode = (function fif$stdlib$realizer$multi$exit_realize_multi_mode(sm){
return fif.stack_machine.mode.exit_mode.call(null,sm);
});
if((typeof fif !== 'undefined') && (typeof fif.stdlib !== 'undefined') && (typeof fif.stdlib.realizer !== 'undefined') && (typeof fif.stdlib.realizer.multi !== 'undefined') && (typeof fif.stdlib.realizer.multi.realize_multi_mode !== 'undefined')){
} else {
fif.stdlib.realizer.multi.realize_multi_mode = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fif.stdlib.realizer.multi","realize-multi-mode"),fif.stack_machine.mode.mode_dispatch_fn,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,fif.stdlib.realizer.multi.realize_multi_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer.multi","??","fif.stdlib.realizer.multi/??",-91714004),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","init","fif.stdlib.realizer.multi/init",-245111458)], null),(function (sm){
return null;
}));
cljs.core._add_method.call(null,fif.stdlib.realizer.multi.realize_multi_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer.multi","??","fif.stdlib.realizer.multi/??",-91714004),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","collect","fif.stdlib.realizer.multi/collect",-1926229445)], null),(function (sm){
return null;
}));
cljs.core._add_method.call(null,fif.stdlib.realizer.multi.realize_multi_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer.multi","??","fif.stdlib.realizer.multi/??",-91714004),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","finish","fif.stdlib.realizer.multi/finish",976835450)], null),(function (sm){
return null;
}));
fif.stdlib.realizer.multi.doc_string = "<coll> ?? -- Realizes the collection, and any deeply nested collections";
fif.stdlib.realizer.multi.realize_multi_op = (function fif$stdlib$realizer$multi$realize_multi_op(sm){
return fif.stdlib.realizer.multi.enter_realize_multi_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer.multi","??","fif.stdlib.realizer.multi/??",-91714004),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","init","fif.stdlib.realizer.multi/init",-245111458)], null));
});
fif.stdlib.realizer.multi.import_stdlib_realize_multi_mode = (function fif$stdlib$realizer$multi$import_stdlib_realize_multi_mode(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.realizer.multi.arg_realize_token,fif.stdlib.realizer.multi.realize_multi_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.realizer.multi.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.multi.arg_realize_start_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.realizer.multi.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.multi.arg_realize_finish_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.realizer.multi.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.multi.realize_multi_mode_flag,fif.stdlib.realizer.multi.realize_multi_mode);
});
