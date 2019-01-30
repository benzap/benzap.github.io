// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stack_machine.exceptions');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.error_handling');
/**
 * Used to raise a stack error in situations where a word definition is
 *   used improperly. Usually for words used to end a mode that don't
 *   have a matching start mode definition.
 */
fif.stack_machine.exceptions.raise_unbounded_mode_argument = (function fif$stack_machine$exceptions$raise_unbounded_mode_argument(sm){
var word_name = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var errmsg = "Unbounded mode argument";
var errextra = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode-word","mode-word",1435454825),word_name], null);
var errobj = fif.stack_machine.error_handling.stack_error.call(null,sm,errmsg,errextra);
return fif.stack_machine.error_handling.handle_stack_error.call(null,sm,errobj);
});
/**
 * Raises an error for errors involving the max step execution being
 *   exceeded.
 */
fif.stack_machine.exceptions.raise_max_steps_exceeded = (function fif$stack_machine$exceptions$raise_max_steps_exceeded(sm){
var step_num = fif.stack_machine.get_step_num.call(null,sm);
var step_max = fif.stack_machine.get_step_max.call(null,sm);
var errmsg = "Max Execution Step Exceeded";
var errextra = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step-num","step-num",-1199653885),step_num,new cljs.core.Keyword(null,"step-max","step-max",-2042341837),step_max], null);
var errobj = fif.stack_machine.error_handling.stack_error.call(null,sm,errmsg,errextra);
return fif.stack_machine.error_handling.handle_stack_error.call(null,sm,errobj);
});
fif.stack_machine.exceptions.raise_incorrect_arity_error = (function fif$stack_machine$exceptions$raise_incorrect_arity_error(sm,num_args){
var word_name = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var errmsg = "Not enough values on the main stack to satisfy word function";
var errextra = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"word-function-name","word-function-name",-1403479472),word_name,new cljs.core.Keyword(null,"word-function-arity","word-function-arity",-745211813),num_args], null);
var errobj = fif.stack_machine.error_handling.stack_error.call(null,sm,errmsg,errextra);
return fif.stack_machine.error_handling.handle_stack_error.call(null,sm,errobj);
});
fif.stack_machine.exceptions.raise_validation_error = (function fif$stack_machine$exceptions$raise_validation_error(sm,arg_index,arg_value,msg){
var errmsg = "Stack Operation Validation Error";
var errextra = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stack-argument-index","stack-argument-index",372206326),arg_index,new cljs.core.Keyword(null,"stack-argument-value","stack-argument-value",-1431675185),arg_value,new cljs.core.Keyword(null,"validation-error-message","validation-error-message",249331948),msg], null);
var errobj = fif.stack_machine.error_handling.stack_error.call(null,sm,errmsg,errextra);
return fif.stack_machine.error_handling.handle_stack_error.call(null,sm,errobj);
});
fif.stack_machine.exceptions.raise_reserved_word_redefinition_error = (function fif$stack_machine$exceptions$raise_reserved_word_redefinition_error(sm,wname){
var errmsg = "Reserved Word Redefinition Error";
var errextra = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"word-name","word-name",-1603452791),wname], null);
var errobj = fif.stack_machine.error_handling.stack_error.call(null,sm,errmsg,errextra);
return fif.stack_machine.error_handling.handle_stack_error.call(null,sm,errobj);
});
