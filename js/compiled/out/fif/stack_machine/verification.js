// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.stack_machine.verification');
goog.require('cljs.core');
goog.require('fif.stack_machine');
/**
 * Verifies that there are enough arguments on the main stack in order
 *   to satisfy the provided `num-args` required.
 */
fif.stack_machine.verification.stack_satisfies_arity_QMARK_ = (function fif$stack_machine$verification$stack_satisfies_arity_QMARK_(sm,num_args){
return (cljs.core.count.call(null,fif.stack_machine.get_stack.call(null,sm)) >= num_args);
});
