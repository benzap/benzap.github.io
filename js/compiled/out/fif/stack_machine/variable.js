// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.stack_machine.variable');
goog.require('cljs.core');
goog.require('fif.stack_machine');
/**
 * Converts a given value into a stack-machine word definition suitable
 *   for use as a word variable.
 *   
 *   Notes:
 * 
 *   - It dequeue's the code stack, so it's only suitable for defining a
 *   word definition as a variable.
 */
fif.stack_machine.variable.wrap_global_variable = (function fif$stack_machine$variable$wrap_global_variable(value){
return (function (sm){
return fif.stack_machine.update_code.call(null,fif.stack_machine.dequeue_code.call(null,sm),(function (p1__38377_SHARP_,p2__38376_SHARP_){
return cljs.core.concat.call(null,p2__38376_SHARP_,p1__38377_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
});
});
fif.stack_machine.variable.wrap_local_variable = (function fif$stack_machine$variable$wrap_local_variable(value){
return (function (sm){
return fif.stack_machine.update_code.call(null,fif.stack_machine.dequeue_code.call(null,sm),(function (p1__38379_SHARP_,p2__38378_SHARP_){
return cljs.core.concat.call(null,p2__38378_SHARP_,p1__38379_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));
});
});
