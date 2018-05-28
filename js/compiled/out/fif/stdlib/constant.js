// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stdlib.constant');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
fif.stdlib.constant.arg_constant_token = new cljs.core.Symbol(null,"constant","constant",1260922224,null);
fif.stdlib.constant.constant_mode_flag = new cljs.core.Keyword(null,"constant-mode","constant-mode",-1705156507);
/**
 * Generates a word function that pops `cval` on the stack
 */
fif.stdlib.constant.wrap_word_constant = (function fif$stdlib$constant$wrap_word_constant(cval){
return (function (sm){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,sm,cval));
});
});
/**
 * Mode for creating a word definition which pops a constant value onto
 *   the stack.
 */
fif.stdlib.constant.constant_mode = (function fif$stdlib$constant$constant_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var vec__39913 = fif.stack_machine.get_stack.call(null,sm);
var cval = cljs.core.nth.call(null,vec__39913,(0),null);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,fif.stack_machine.set_word.call(null,fif.stack_machine.pop_stack.call(null,sm),arg,fif.stdlib.constant.wrap_word_constant.call(null,cval))));
});
/**
 * Word definition for going into constant-mode for defining a constant
 */
fif.stdlib.constant.start_constant = (function fif$stdlib$constant$start_constant(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.constant.constant_mode_flag));
});
/**
 * Stack Machine Import for constant-mode
 */
fif.stdlib.constant.import_stdlib_constant_mode = (function fif$stdlib$constant$import_stdlib_constant_mode(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.constant.arg_constant_token,fif.stdlib.constant.start_constant,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.constant","stdlib.constant",-1090721723),new cljs.core.Keyword(null,"doc","doc",1913296891),"constant <name> <value> -- Sets a constant value."),fif.stdlib.constant.constant_mode_flag,fif.stdlib.constant.constant_mode);
});
