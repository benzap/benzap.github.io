// Compiled by ClojureScript 1.10.520 {}
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
fif.stdlib.realizer.multi.realize_multi_mode = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fif.stdlib.realizer.multi","realize-multi-mode"),fif.stack_machine.mode.mode_dispatch_fn,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
fif.stdlib.realizer.multi.prepare_map_collection = (function fif$stdlib$realizer$multi$prepare_map_collection(m){
return cljs.core.reduce.call(null,(function (xs,p__39865){
var vec__39866 = p__39865;
var k = cljs.core.nth.call(null,vec__39866,(0),null);
var v = cljs.core.nth.call(null,vec__39866,(1),null);
var bform = (function (){var G__39869 = cljs.core.List.EMPTY;
var G__39869__$1 = cljs.core.concat.call(null,G__39869,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))
;
var G__39869__$2 = ((cljs.core.seq_QMARK_.call(null,k))?cljs.core.concat.call(null,G__39869__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apply","apply",-1334050276,null)], null)):G__39869__$1);
var G__39869__$3 = ((((cljs.core.coll_QMARK_.call(null,k)) || ((k instanceof cljs.core.Symbol))))?cljs.core.concat.call(null,G__39869__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"??","??",-1097896773,null)], null)):G__39869__$2);
var G__39869__$4 = cljs.core.concat.call(null,G__39869__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))
;
var G__39869__$5 = ((cljs.core.seq_QMARK_.call(null,v))?cljs.core.concat.call(null,G__39869__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apply","apply",-1334050276,null)], null)):G__39869__$4);
var G__39869__$6 = ((((cljs.core.coll_QMARK_.call(null,v)) || ((v instanceof cljs.core.Symbol))))?cljs.core.concat.call(null,G__39869__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"??","??",-1097896773,null)], null)):G__39869__$5);
return cljs.core.vec.call(null,G__39869__$6);

})();
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bform,fif.stdlib.realizer.multi.arg_realize_token], null));
}),cljs.core.PersistentVector.EMPTY,m);
});
fif.stdlib.realizer.multi.prepare_other_collection = (function fif$stdlib$realizer$multi$prepare_other_collection(m){
return cljs.core.reduce.call(null,(function (xs,x){
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.Symbol(null,"??","??",-1097896773,null)], null));
} else {
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
}
}),cljs.core.PersistentVector.EMPTY,m);
});
cljs.core._add_method.call(null,fif.stdlib.realizer.multi.realize_multi_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer.multi","??","fif.stdlib.realizer.multi/??",-91714004),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","init","fif.stdlib.realizer.multi/init",-245111458)], null),(function (sm){
var vec__39873 = fif.stack_machine.get_stack.call(null,sm);
var collection = cljs.core.nth.call(null,vec__39873,(0),null);
var coll_type = cljs.core.empty.call(null,collection);
var collection__$1 = ((cljs.core.map_QMARK_.call(null,collection))?fif.stdlib.realizer.multi.prepare_map_collection.call(null,collection):((cljs.core.coll_QMARK_.call(null,collection))?fif.stdlib.realizer.multi.prepare_other_collection.call(null,collection):collection
));
if(cljs.core.coll_QMARK_.call(null,collection__$1)){
return fif.stack_machine.update_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.realizer.multi","collection-type","fif.stdlib.realizer.multi/collection-type",957063754),coll_type),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","collect","fif.stdlib.realizer.multi/collect",-1926229445)))),fif.stdlib.realizer.multi.arg_realize_start_token),((function (vec__39873,collection,coll_type,collection__$1){
return (function (p1__39872_SHARP_,p2__39870_SHARP_,p3__39871_SHARP_){
return cljs.core.concat.call(null,p2__39870_SHARP_,p3__39871_SHARP_,p1__39872_SHARP_);
});})(vec__39873,collection,coll_type,collection__$1))
,collection__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.realizer.multi.arg_realize_finish_token], null));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.realizer.multi.exit_realize_multi_mode.call(null,sm));
}
}));
cljs.core._add_method.call(null,fif.stdlib.realizer.multi.realize_multi_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer.multi","??","fif.stdlib.realizer.multi/??",-91714004),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","collect","fif.stdlib.realizer.multi/collect",-1926229445)], null),(function (sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.realizer.multi.arg_realize_finish_token)){
return fif.stack_machine.mode.update_state.call(null,sm,cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","finish","fif.stdlib.realizer.multi/finish",976835450));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
}));
fif.stdlib.realizer.multi.fix_map_key_pairs = (function fif$stdlib$realizer$multi$fix_map_key_pairs(kp){
var G__39876 = cljs.core.count.call(null,kp);
switch (G__39876) {
case (0):
return null;

break;
case (1):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,kp),null], null);

break;
case (2):
return kp;

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,kp),cljs.core.rest.call(null,kp)], null);

}
});
cljs.core._add_method.call(null,fif.stdlib.realizer.multi.realize_multi_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer.multi","??","fif.stdlib.realizer.multi/??",-91714004),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","finish","fif.stdlib.realizer.multi/finish",976835450)], null),(function (sm){
var coll_type = new cljs.core.Keyword("fif.stdlib.realizer.multi","collection-type","fif.stdlib.realizer.multi/collection-type",957063754).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
var vec__39878 = fif.utils.token.split_at_token.call(null,fif.stack_machine.get_stack.call(null,sm),fif.stdlib.realizer.multi.arg_realize_start_token);
var realized_collection = cljs.core.nth.call(null,vec__39878,(0),null);
var new_stack = cljs.core.nth.call(null,vec__39878,(1),null);
var realized_collection__$1 = ((cljs.core.map_QMARK_.call(null,coll_type))?cljs.core.keep.call(null,fif.stdlib.realizer.multi.fix_map_key_pairs,realized_collection):realized_collection);
var realized_collection__$2 = cljs.core.into.call(null,coll_type,cljs.core.reverse.call(null,realized_collection__$1));
var realized_collection__$3 = ((cljs.core.seq_QMARK_.call(null,realized_collection__$2))?cljs.core.reverse.call(null,realized_collection__$2):realized_collection__$2);
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.realizer.multi.exit_realize_multi_mode.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.set_stack.call(null,sm,new_stack),realized_collection__$3)));
}));
fif.stdlib.realizer.multi.doc_string = "<coll> ?? -- Realizes the collection, and any nested collections";
fif.stdlib.realizer.multi.realize_multi_op = (function fif$stdlib$realizer$multi$realize_multi_op(sm){
return fif.stdlib.realizer.multi.enter_realize_multi_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer.multi","??","fif.stdlib.realizer.multi/??",-91714004),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer.multi","init","fif.stdlib.realizer.multi/init",-245111458)], null));
});
fif.stdlib.realizer.multi.import_stdlib_realize_multi_mode = (function fif$stdlib$realizer$multi$import_stdlib_realize_multi_mode(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.realizer.multi.arg_realize_token,fif.stdlib.realizer.multi.realize_multi_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.realizer.multi.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.multi.arg_realize_start_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.realizer.multi.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.multi.arg_realize_finish_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.realizer.multi.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.multi.realize_multi_mode_flag,fif.stdlib.realizer.multi.realize_multi_mode);
});
