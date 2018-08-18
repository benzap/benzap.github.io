// Compiled by ClojureScript 1.10.339 {}
goog.provide('fif.stack_machine.flags');
goog.require('cljs.core');
goog.require('fif.stack_machine');
/**
 * Returns true if the stack machine has active flags.
 */
fif.stack_machine.flags.has_flags_QMARK_ = (function fif$stack_machine$flags$has_flags_QMARK_(sm){
return !(cljs.core.empty_QMARK_.call(null,fif.stack_machine.get_flags.call(null,sm)));
});
