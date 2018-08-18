// Compiled by ClojureScript 1.10.339 {}
goog.provide('fif.stdlib.functional_ops');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.processor');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.mode');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stdlib.reserved');
goog.require('fif.stdlib.conditional');
goog.require('fif.utils.token');
fif.stdlib.functional_ops.arg_start_reduce_token = new cljs.core.Symbol(null,"reduce","reduce",1358839360,null);
fif.stdlib.functional_ops.arg_iter_reduce_token = new cljs.core.Symbol("reduce","next-iteration","reduce/next-iteration",682168987,null);
fif.stdlib.functional_ops.arg_start_map_token = new cljs.core.Symbol(null,"map","map",-1282745308,null);
fif.stdlib.functional_ops.arg_iter_map_token = new cljs.core.Symbol("map","next-iteration","map/next-iteration",527606413,null);
fif.stdlib.functional_ops.arg_start_filter_token = new cljs.core.Symbol(null,"filter","filter",691993593,null);
fif.stdlib.functional_ops.arg_iter_filter_token = new cljs.core.Symbol("filter","next-iteration","filter/next-iteration",-1016347479,null);
fif.stdlib.functional_ops.functional_mode_flag = new cljs.core.Keyword(null,"functional-mode","functional-mode",493136037);
/**
 * Determines whether the function provided to the map-reduce-filter
 *   operations is just a sequence. The `rfunction` is converted such
 *   that a sequence can be used in place of a function within
 *   map-reduce-filter.
 */
fif.stdlib.functional_ops.prepare_rfunction = (function fif$stdlib$functional_ops$prepare_rfunction(rfunction){
if(cljs.core.seq_QMARK_.call(null,rfunction)){
return rfunction;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rfunction], null);
}
});
fif.stdlib.functional_ops.enter_functional_mode = (function fif$stdlib$functional_ops$enter_functional_mode(sm,state){
return fif.stack_machine.mode.enter_mode.call(null,sm,fif.stdlib.functional_ops.functional_mode_flag,state);
});
fif.stdlib.functional_ops.exit_functional_mode = (function fif$stdlib$functional_ops$exit_functional_mode(sm){
return fif.stack_machine.mode.exit_mode.call(null,sm);
});
if((typeof fif !== 'undefined') && (typeof fif.stdlib !== 'undefined') && (typeof fif.stdlib.functional_ops !== 'undefined') && (typeof fif.stdlib.functional_ops.functional_mode !== 'undefined')){
} else {
fif.stdlib.functional_ops.functional_mode = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fif.stdlib.functional-ops","functional-mode"),fif.stack_machine.mode.mode_dispatch_fn,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
fif.stdlib.functional_ops.reduce_op = (function fif$stdlib$functional_ops$reduce_op(sm){
return fif.stdlib.functional_ops.enter_functional_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","reduce","fif.stdlib.functional-ops/reduce",-563035678),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","init","fif.stdlib.functional-ops/init",2146901619)], null));
});
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","reduce","fif.stdlib.functional-ops/reduce",-563035678),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","init","fif.stdlib.functional-ops/init",2146901619)], null),(function (sm){
var vec__41308 = fif.stack_machine.get_stack.call(null,sm);
var collection = cljs.core.nth.call(null,vec__41308,(0),null);
var rfunction = cljs.core.nth.call(null,vec__41308,(1),null);
return fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.update_code.call(null,fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","rfunction","fif.stdlib.functional-ops/rfunction",856350138),rfunction,new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731),cljs.core.rest.call(null,collection),new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590),cljs.core.first.call(null,collection)),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521))),((function (vec__41308,collection,rfunction){
return (function (p1__41307_SHARP_,p2__41306_SHARP_){
return cljs.core.concat.call(null,p2__41306_SHARP_,p1__41307_SHARP_);
});})(vec__41308,collection,rfunction))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.functional_ops.arg_iter_reduce_token], null))));
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","reduce","fif.stdlib.functional-ops/reduce",-563035678),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521)], null),(function (sm){
var stash = fif.stack_machine.stash.peek_stash.call(null,sm);
var rfunction = new cljs.core.Keyword("fif.stdlib.functional-ops","rfunction","fif.stdlib.functional-ops/rfunction",856350138).cljs$core$IFn$_invoke$arity$1(stash);
var collection = new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731).cljs$core$IFn$_invoke$arity$1(stash);
var result = new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590).cljs$core$IFn$_invoke$arity$1(stash);
if(cljs.core.empty_QMARK_.call(null,collection)){
return fif.stack_machine.mode.update_state.call(null,sm,cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","finish","fif.stdlib.functional-ops/finish",-858845223));
} else {
return fif.stack_machine.update_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.push_stack.call(null,sm,result),cljs.core.first.call(null,collection)),cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731),cljs.core.rest.call(null,collection)),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","iterate","fif.stdlib.functional-ops/iterate",2011271572)),((function (stash,rfunction,collection,result){
return (function (p1__41312_SHARP_,p2__41311_SHARP_){
return cljs.core.concat.call(null,p2__41311_SHARP_,p1__41312_SHARP_);
});})(stash,rfunction,collection,result))
,fif.stdlib.functional_ops.prepare_rfunction.call(null,rfunction));

}
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","reduce","fif.stdlib.functional-ops/reduce",-563035678),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","iterate","fif.stdlib.functional-ops/iterate",2011271572)], null),(function (sm){
var vec__41313 = fif.stack_machine.get_stack.call(null,sm);
var top = cljs.core.nth.call(null,vec__41313,(0),null);
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.functional_ops.arg_iter_reduce_token)){
return fif.stack_machine.pop_stack.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590),cljs.core.peek.call(null,fif.stack_machine.get_stack.call(null,sm))),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521)));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","reduce","fif.stdlib.functional-ops/reduce",-563035678),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","finish","fif.stdlib.functional-ops/finish",-858845223)], null),(function (sm){
var result = new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.functional_ops.exit_functional_mode.call(null,fif.stack_machine.push_stack.call(null,sm,result)));
}));
fif.stdlib.functional_ops.map_op = (function fif$stdlib$functional_ops$map_op(sm){
return fif.stdlib.functional_ops.enter_functional_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","map","fif.stdlib.functional-ops/map",1082236086),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","init","fif.stdlib.functional-ops/init",2146901619)], null));
});
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","map","fif.stdlib.functional-ops/map",1082236086),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","init","fif.stdlib.functional-ops/init",2146901619)], null),(function (sm){
var vec__41318 = fif.stack_machine.get_stack.call(null,sm);
var collection = cljs.core.nth.call(null,vec__41318,(0),null);
var rfunction = cljs.core.nth.call(null,vec__41318,(1),null);
return fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.update_code.call(null,fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","rfunction","fif.stdlib.functional-ops/rfunction",856350138),rfunction,new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731),collection,new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590),cljs.core.List.EMPTY),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521))),((function (vec__41318,collection,rfunction){
return (function (p1__41317_SHARP_,p2__41316_SHARP_){
return cljs.core.concat.call(null,p2__41316_SHARP_,p1__41317_SHARP_);
});})(vec__41318,collection,rfunction))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.functional_ops.arg_iter_map_token], null))));
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","map","fif.stdlib.functional-ops/map",1082236086),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521)], null),(function (sm){
var stash = fif.stack_machine.stash.peek_stash.call(null,sm);
var rfunction = new cljs.core.Keyword("fif.stdlib.functional-ops","rfunction","fif.stdlib.functional-ops/rfunction",856350138).cljs$core$IFn$_invoke$arity$1(stash);
var collection = new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731).cljs$core$IFn$_invoke$arity$1(stash);
if(cljs.core.empty_QMARK_.call(null,collection)){
return fif.stack_machine.mode.update_state.call(null,sm,cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","finish","fif.stdlib.functional-ops/finish",-858845223));
} else {
return fif.stack_machine.update_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,fif.stack_machine.push_stack.call(null,sm,cljs.core.first.call(null,collection)),cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731),cljs.core.rest.call(null,collection)),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","iterate","fif.stdlib.functional-ops/iterate",2011271572)),((function (stash,rfunction,collection){
return (function (p1__41322_SHARP_,p2__41321_SHARP_){
return cljs.core.concat.call(null,p2__41321_SHARP_,p1__41322_SHARP_);
});})(stash,rfunction,collection))
,fif.stdlib.functional_ops.prepare_rfunction.call(null,rfunction));

}
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","map","fif.stdlib.functional-ops/map",1082236086),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","iterate","fif.stdlib.functional-ops/iterate",2011271572)], null),(function (sm){
var vec__41323 = fif.stack_machine.get_stack.call(null,sm);
var top = cljs.core.nth.call(null,vec__41323,(0),null);
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var result = new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.functional_ops.arg_iter_map_token)){
return fif.stack_machine.pop_stack.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590),cljs.core.concat.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,fif.stack_machine.get_stack.call(null,sm))], null))),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521)));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","map","fif.stdlib.functional-ops/map",1082236086),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","finish","fif.stdlib.functional-ops/finish",-858845223)], null),(function (sm){
var result = new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.functional_ops.exit_functional_mode.call(null,fif.stack_machine.push_stack.call(null,sm,result)));
}));
fif.stdlib.functional_ops.filter_op = (function fif$stdlib$functional_ops$filter_op(sm){
return fif.stdlib.functional_ops.enter_functional_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","filter","fif.stdlib.functional-ops/filter",-675893361),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","init","fif.stdlib.functional-ops/init",2146901619)], null));
});
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","filter","fif.stdlib.functional-ops/filter",-675893361),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","init","fif.stdlib.functional-ops/init",2146901619)], null),(function (sm){
var vec__41328 = fif.stack_machine.get_stack.call(null,sm);
var collection = cljs.core.nth.call(null,vec__41328,(0),null);
var rfunction = cljs.core.nth.call(null,vec__41328,(1),null);
return fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.update_code.call(null,fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","rfunction","fif.stdlib.functional-ops/rfunction",856350138),rfunction,new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731),collection,new cljs.core.Keyword("fif.stdlib.functional-ops","current-value","fif.stdlib.functional-ops/current-value",-849201004),null,new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590),cljs.core.List.EMPTY),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521))),((function (vec__41328,collection,rfunction){
return (function (p1__41327_SHARP_,p2__41326_SHARP_){
return cljs.core.concat.call(null,p2__41326_SHARP_,p1__41327_SHARP_);
});})(vec__41328,collection,rfunction))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.functional_ops.arg_iter_filter_token], null))));
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","filter","fif.stdlib.functional-ops/filter",-675893361),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521)], null),(function (sm){
var stash = fif.stack_machine.stash.peek_stash.call(null,sm);
var rfunction = new cljs.core.Keyword("fif.stdlib.functional-ops","rfunction","fif.stdlib.functional-ops/rfunction",856350138).cljs$core$IFn$_invoke$arity$1(stash);
var collection = new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731).cljs$core$IFn$_invoke$arity$1(stash);
if(cljs.core.empty_QMARK_.call(null,collection)){
return fif.stack_machine.mode.update_state.call(null,sm,cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","finish","fif.stdlib.functional-ops/finish",-858845223));
} else {
return fif.stack_machine.update_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.stash.update_stash.call(null,fif.stack_machine.push_stack.call(null,sm,cljs.core.first.call(null,collection)),cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","collection","fif.stdlib.functional-ops/collection",1736699731),cljs.core.rest.call(null,collection),new cljs.core.Keyword("fif.stdlib.functional-ops","current-value","fif.stdlib.functional-ops/current-value",-849201004),cljs.core.first.call(null,collection)),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","iterate","fif.stdlib.functional-ops/iterate",2011271572)),((function (stash,rfunction,collection){
return (function (p1__41332_SHARP_,p2__41331_SHARP_){
return cljs.core.concat.call(null,p2__41331_SHARP_,p1__41332_SHARP_);
});})(stash,rfunction,collection))
,fif.stdlib.functional_ops.prepare_rfunction.call(null,rfunction));

}
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","filter","fif.stdlib.functional-ops/filter",-675893361),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","iterate","fif.stdlib.functional-ops/iterate",2011271572)], null),(function (sm){
var vec__41333 = fif.stack_machine.get_stack.call(null,sm);
var top = cljs.core.nth.call(null,vec__41333,(0),null);
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var result = new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
var value = new cljs.core.Keyword("fif.stdlib.functional-ops","current-value","fif.stdlib.functional-ops/current-value",-849201004).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.functional_ops.arg_iter_filter_token)){
return fif.stack_machine.pop_stack.call(null,fif.stack_machine.mode.update_state.call(null,(function (){var $ = sm;
if(cljs.core.truth_(top)){
return fif.stack_machine.stash.update_stash.call(null,$,cljs.core.assoc,new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590),cljs.core.concat.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
} else {
return $;
}
})(),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","next-iteration","fif.stdlib.functional-ops/next-iteration",-18300521)));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
}));
cljs.core._add_method.call(null,fif.stdlib.functional_ops.functional_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.functional-ops","filter","fif.stdlib.functional-ops/filter",-675893361),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.functional-ops","finish","fif.stdlib.functional-ops/finish",-858845223)], null),(function (sm){
var result = new cljs.core.Keyword("fif.stdlib.functional-ops","result","fif.stdlib.functional-ops/result",614320590).cljs$core$IFn$_invoke$arity$1(fif.stack_machine.stash.peek_stash.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.functional_ops.exit_functional_mode.call(null,fif.stack_machine.push_stack.call(null,sm,result)));
}));
fif.stdlib.functional_ops.import_stdlib_functional_ops = (function fif$stdlib$functional_ops$import_stdlib_functional_ops(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.set_mode.call(null,sm,fif.stdlib.functional_ops.functional_mode_flag,fif.stdlib.functional_ops.functional_mode),fif.stdlib.functional_ops.arg_start_reduce_token,fif.stdlib.functional_ops.reduce_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<fn ( xs x -- 'xs )> <coll> reduce",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.functional","stdlib.functional",-660386253)),fif.stdlib.functional_ops.arg_iter_reduce_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<fn ( xs x -- 'xs )> <coll> reduce",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.functional","stdlib.functional",-660386253)),fif.stdlib.functional_ops.arg_start_map_token,fif.stdlib.functional_ops.map_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<fn ( item -- 'item )> <coll> map",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.functional","stdlib.functional",-660386253)),fif.stdlib.functional_ops.arg_iter_map_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<fn ( item -- 'item )> <coll> map",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.functional","stdlib.functional",-660386253)),fif.stdlib.functional_ops.arg_start_filter_token,fif.stdlib.functional_ops.filter_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<fn ( item -- boolean )> <coll> filter",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.functional","stdlib.functional",-660386253)),fif.stdlib.functional_ops.arg_iter_filter_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<fn ( item -- boolean )> <coll> filter",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.functional","stdlib.functional",-660386253));
});
