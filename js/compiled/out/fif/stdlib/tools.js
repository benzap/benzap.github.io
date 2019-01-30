// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stdlib.tools');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.scope');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stack_machine');
goog.require('fif.def');
/**
 * Resets the entire stack machine, similar to a soft-reset
 * 
 *   - clears main stack
 *   - clears the loop return stack
 *   - resets the scope
 *   - clears sub stash
 *   - clears mode stash
 *   - clears flags
 *   - clears code queue
 *   
 */
fif.stdlib.tools.reset_stack_op = (function fif$stdlib$tools$reset_stack_op(sm){
return fif.stack_machine.clear_code.call(null,fif.stack_machine.clear_flags.call(null,fif.stack_machine.clear_mode_stash.call(null,fif.stack_machine.clear_stash.call(null,fif.stack_machine.clear_scope.call(null,fif.stack_machine.clear_temp_macro.call(null,fif.stack_machine.clear_ret.call(null,fif.stack_machine.clear_stack.call(null,sm))))))));
});
fif.stdlib.tools.clear_stack_op = (function fif$stdlib$tools$clear_stack_op(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.clear_stack.call(null,sm));
});
fif.stdlib.tools.stack_empty_QMARK__op = (function fif$stdlib$tools$stack_empty_QMARK__op(sm){
var bool = cljs.core.empty_QMARK_.call(null,fif.stack_machine.get_stack.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,sm,bool));
});
fif.stdlib.tools.reverse_stack_op = (function fif$stdlib$tools$reverse_stack_op(sm){
var st = cljs.core.reverse.call(null,fif.stack_machine.get_stack.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stack.call(null,sm,cljs.core.apply.call(null,cljs.core.list,st)));
});
fif.stdlib.tools.get_stack_op = (function fif$stdlib$tools$get_stack_op(sm){
var st = fif.stack_machine.get_stack.call(null,sm);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,sm,st));
});
fif.stdlib.tools.import_stdlib_stack_tools = (function fif$stdlib$tools$import_stdlib_stack_tools(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,new cljs.core.Symbol(null,"$reset-stack-machine","$reset-stack-machine",-1357410543,null),fif.stdlib.tools.reset_stack_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.tools","stdlib.tools",1304970442),new cljs.core.Keyword(null,"doc","doc",1913296891),"soft-resets the stack machine."),new cljs.core.Symbol(null,"$clear-stack","$clear-stack",1235283801,null),fif.stdlib.tools.clear_stack_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.tools","stdlib.tools",1304970442),new cljs.core.Keyword(null,"doc","doc",1913296891),"Clear the main stack."),new cljs.core.Symbol(null,"$empty-stack?","$empty-stack?",2083049808,null),fif.stdlib.tools.stack_empty_QMARK__op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.tools","stdlib.tools",1304970442),new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- b ) Returns true, if the main stack is empty."),new cljs.core.Symbol(null,"$reverse-stack","$reverse-stack",453293768,null),fif.stdlib.tools.reverse_stack_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.tools","stdlib.tools",1304970442),new cljs.core.Keyword(null,"doc","doc",1913296891),"Reverse the main stack."),new cljs.core.Symbol(null,"$get-stack","$get-stack",-1058995563,null),fif.stdlib.tools.get_stack_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.tools","stdlib.tools",1304970442),new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- stack ) Push a copy of the main stack onto the main stack.");
});
