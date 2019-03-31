// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.repl');
goog.require('cljs.core');
goog.require('fif.impl.repl');
goog.require('fif.protocols.repl');
fif.repl.repl = (function fif$repl$repl(sm){
var r = fif.impl.repl.new_repl.call(null,sm);
return fif.protocols.repl.repl_run.call(null,r);
});
