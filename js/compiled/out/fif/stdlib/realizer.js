// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stdlib.realizer');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.processor');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stack_machine.mode');
goog.require('fif.utils.token');
fif.stdlib.realizer.arg_realize_token = new cljs.core.Symbol(null,"?","?",-62633706,null);
fif.stdlib.realizer.arg_realize_start_token = new cljs.core.Symbol("?","start","?/start",1285322611,null);
fif.stdlib.realizer.arg_realize_finish_token = new cljs.core.Symbol("?","finish","?/finish",1053843674,null);
fif.stdlib.realizer.realize_mode_flag = new cljs.core.Keyword(null,"realize-mode","realize-mode",-1502100958);
fif.stdlib.realizer.enter_realize_mode = (function fif$stdlib$realizer$enter_realize_mode(sm,state){
return fif.stack_machine.mode.enter_mode.call(null,sm,fif.stdlib.realizer.realize_mode_flag,state);
});
fif.stdlib.realizer.exit_realize_mode = (function fif$stdlib$realizer$exit_realize_mode(sm){
return fif.stack_machine.mode.exit_mode.call(null,sm);
});
if((typeof fif !== 'undefined') && (typeof fif.stdlib !== 'undefined') && (typeof fif.stdlib.realizer !== 'undefined') && (typeof fif.stdlib.realizer.realize_mode !== 'undefined')){
} else {
fif.stdlib.realizer.realize_mode = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fif.stdlib.realizer","realize-mode"),fif.stack_machine.mode.mode_dispatch_fn,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,fif.stdlib.realizer.realize_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer","?","fif.stdlib.realizer/?",-246752758),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer","init","fif.stdlib.realizer/init",-395491993)], null),(function (sm){
var vec__40510 = fif.stack_machine.get_stack.call(null,sm);
var collection = cljs.core.nth.call(null,vec__40510,(0),null);
var coll_type = cljs.core.empty.call(null,collection);
var collection__$1 = ((cljs.core.map_QMARK_.call(null,collection))?cljs.core.reduce.call(null,((function (vec__40510,collection,coll_type){
return (function (xs,p__40513){
var vec__40514 = p__40513;
var k = cljs.core.nth.call(null,vec__40514,(0),null);
var v = cljs.core.nth.call(null,vec__40514,(1),null);
var bform = (function (){var G__40517 = cljs.core.List.EMPTY;
var G__40517__$1 = cljs.core.concat.call(null,G__40517,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))
;
var G__40517__$2 = ((((cljs.core.seq_QMARK_.call(null,k)) || ((k instanceof cljs.core.Symbol))))?cljs.core.concat.call(null,G__40517__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apply","apply",-1334050276,null)], null)):G__40517__$1);
var G__40517__$3 = cljs.core.concat.call(null,G__40517__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))
;
var G__40517__$4 = ((((cljs.core.seq_QMARK_.call(null,v)) || ((v instanceof cljs.core.Symbol))))?cljs.core.concat.call(null,G__40517__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apply","apply",-1334050276,null)], null)):G__40517__$3);
return cljs.core.vec.call(null,G__40517__$4);

})();
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bform,fif.stdlib.realizer.arg_realize_token], null));
});})(vec__40510,collection,coll_type))
,cljs.core.PersistentVector.EMPTY,collection):collection);
return fif.stack_machine.update_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.realizer","collection-type","fif.stdlib.realizer/collection-type",1108804159),coll_type),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer","collect","fif.stdlib.realizer/collect",-1810320850)))),fif.stdlib.realizer.arg_realize_start_token),((function (vec__40510,collection,coll_type,collection__$1){
return (function (p1__40509_SHARP_,p2__40507_SHARP_,p3__40508_SHARP_){
return cljs.core.concat.call(null,p2__40507_SHARP_,p3__40508_SHARP_,p1__40509_SHARP_);
});})(vec__40510,collection,coll_type,collection__$1))
,collection__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.realizer.arg_realize_finish_token], null));
}));
cljs.core._add_method.call(null,fif.stdlib.realizer.realize_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer","?","fif.stdlib.realizer/?",-246752758),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer","collect","fif.stdlib.realizer/collect",-1810320850)], null),(function (sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.realizer.arg_realize_finish_token)){
return fif.stack_machine.mode.update_state.call(null,sm,cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer","finish","fif.stdlib.realizer/finish",592507797));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
}));
fif.stdlib.realizer.fix_map_key_pairs = (function fif$stdlib$realizer$fix_map_key_pairs(kp){
var G__40518 = cljs.core.count.call(null,kp);
switch (G__40518) {
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
cljs.core._add_method.call(null,fif.stdlib.realizer.realize_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer","?","fif.stdlib.realizer/?",-246752758),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer","finish","fif.stdlib.realizer/finish",592507797)], null),(function (sm){
var coll_type = new cljs.core.Keyword("fif.stdlib.realizer","collection-type","fif.stdlib.realizer/collection-type",1108804159).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
var vec__40520 = fif.utils.token.split_at_token.call(null,fif.stack_machine.get_stack.call(null,sm),fif.stdlib.realizer.arg_realize_start_token);
var realized_collection = cljs.core.nth.call(null,vec__40520,(0),null);
var new_stack = cljs.core.nth.call(null,vec__40520,(1),null);
var realized_collection__$1 = ((cljs.core.map_QMARK_.call(null,coll_type))?cljs.core.keep.call(null,fif.stdlib.realizer.fix_map_key_pairs,realized_collection):realized_collection);
var realized_collection__$2 = cljs.core.into.call(null,coll_type,cljs.core.reverse.call(null,realized_collection__$1));
var realized_collection__$3 = ((cljs.core.seq_QMARK_.call(null,realized_collection__$2))?cljs.core.reverse.call(null,realized_collection__$2):realized_collection__$2);
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.realizer.exit_realize_mode.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.set_stack.call(null,sm,new_stack),realized_collection__$3)));
}));
fif.stdlib.realizer.realize_op = (function fif$stdlib$realizer$realize_op(sm){
return fif.stdlib.realizer.enter_realize_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.realizer","?","fif.stdlib.realizer/?",-246752758),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.realizer","init","fif.stdlib.realizer/init",-395491993)], null));
});
fif.stdlib.realizer.import_stdlib_realize_mode = (function fif$stdlib$realizer$import_stdlib_realize_mode(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.realizer.arg_realize_token,fif.stdlib.realizer.realize_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<coll> ? -- Realizes the sequential collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.arg_realize_start_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<coll> ? -- Realizes the sequential collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.arg_realize_finish_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<coll> ? -- Realizes the sequential collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.realizer","stdlib.realizer",416974469)),fif.stdlib.realizer.realize_mode_flag,fif.stdlib.realizer.realize_mode);
});
