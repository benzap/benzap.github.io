// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stack_machine.processor');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.pointer');
fif.stack_machine.processor.has_flags_QMARK_ = (function fif$stack_machine$processor$has_flags_QMARK_(sm){
return (!(cljs.core.empty_QMARK_.call(null,fif.stack_machine.get_flags.call(null,sm))));
});
fif.stack_machine.processor.process_mode = (function fif$stack_machine$processor$process_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var current_mode = cljs.core.peek.call(null,fif.stack_machine.get_flags.call(null,sm));
var temp__5718__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"modes","modes",-1377787092).cljs$core$IFn$_invoke$arity$1(sm),current_mode);
if(cljs.core.truth_(temp__5718__auto__)){
var modefn = temp__5718__auto__;
return modefn.call(null,sm);
} else {
throw cljs.core.ex_info.call(null,"Unable to find mode function for flagged mode: ",current_mode);
}
});
fif.stack_machine.processor.process_arg = (function fif$stack_machine$processor$process_arg(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if((arg instanceof cljs.core.Symbol)){
var wfn = fif.stack_machine.get_word.call(null,sm,arg);
if((!(cljs.core._EQ_.call(null,wfn,fif.stack_machine.words.not_found)))){
return wfn.call(null,sm);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,sm,fif.stack_machine.pointer.trim_pointer_once.call(null,arg)));
}
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,sm,arg));

}
});
