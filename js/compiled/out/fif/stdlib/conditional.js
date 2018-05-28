// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stdlib.conditional');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.sub_stack');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stack_machine.processor');
fif.stdlib.conditional.arg_if_token = new cljs.core.Symbol(null,"if","if",1181717262,null);
fif.stdlib.conditional.arg_else_token = new cljs.core.Symbol(null,"else","else",132154381,null);
fif.stdlib.conditional.arg_then_token = new cljs.core.Symbol(null,"then","then",2101129597,null);
fif.stdlib.conditional.conditional_mode_flag = new cljs.core.Keyword(null,"conditional-mode","conditional-mode",-1124629396);
fif.stdlib.conditional.inner_conditional_flag = new cljs.core.Keyword(null,"inner-conditional-mode","inner-conditional-mode",-887719685);
fif.stdlib.conditional.truth_condition_mode_flag = new cljs.core.Keyword(null,"truth-condition-mode","truth-condition-mode",821857642);
fif.stdlib.conditional.dump_truth_condition_mode_flag = new cljs.core.Keyword(null,"dump-truth-condition-mode","dump-truth-condition-mode",-39540753);
fif.stdlib.conditional.dump_false_condition_mode_flag = new cljs.core.Keyword(null,"dump-false-condition-mode","dump-false-condition-mode",-2133317681);
fif.stdlib.conditional.dump_condition_mode_flag = new cljs.core.Keyword(null,"dump-condition-mode","dump-condition-mode",1790727190);
fif.stdlib.conditional.false_condition_mode_flag = new cljs.core.Keyword(null,"false-condition-mode","false-condition-mode",703429665);
/**
 * Determines whether the given value is true or false
 *   
 *   Notes:
 * 
 *   - is true if it is a non-zero number
 *   - is false if it is the number zero
 *   - is true if (boolean x) is true
 */
fif.stdlib.conditional.condition_true_QMARK_ = (function fif$stdlib$conditional$condition_true_QMARK_(x){
if(((typeof x === 'number') && (cljs.core._EQ_.call(null,x,(0))))){
return false;
} else {
if(((typeof x === 'number') && (cljs.core.not_EQ_.call(null,x,(0))))){
return true;
} else {
return cljs.core.boolean$.call(null,x);

}
}
});
/**
 * Dumps the code stack, but stops upon reaching the end of the
 *   condition body (then).
 */
fif.stdlib.conditional.dump_condition_mode = (function fif$stdlib$conditional$dump_condition_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_if_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.conditional.dump_condition_mode_flag));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_then_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,sm));
} else {
return fif.stack_machine.dequeue_code.call(null,sm);

}
}
});
/**
 * Dumps the code stack, but stops upon reaching an else condition or
 *   upon reaching the end of the condition body (then). Nested
 *   conditionals are passed to dump-condition-mode.
 * 
 *   Notes:
 * 
 *   - This mode is assumed to be a truth content dump, in order to process the
 *   false conditional body
 */
fif.stdlib.conditional.dump_truth_condition_mode = (function fif$stdlib$conditional$dump_truth_condition_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_if_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.conditional.dump_condition_mode_flag));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_else_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stdlib.conditional.false_condition_mode_flag));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_then_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,sm));
} else {
return fif.stack_machine.dequeue_code.call(null,sm);

}
}
}
});
fif.stdlib.conditional.dump_false_condition_mode = fif.stdlib.conditional.dump_condition_mode;
/**
 * Called when the code queue contains truthy content within the code
 *   queue. This is normally at the beginning of the conditional after
 *   the 'if clause.
 */
fif.stdlib.conditional.truth_condition_mode = (function fif$stdlib$conditional$truth_condition_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_else_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stdlib.conditional.dump_false_condition_mode_flag));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_then_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,sm));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
}
});
/**
 * Called when the code queue includes falsy content. This is normally
 *   called after the 'else clause.
 */
fif.stdlib.conditional.false_condition_mode = (function fif$stdlib$conditional$false_condition_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_then_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,sm));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
});
/**
 * For handling any inner if-else-then tokens, this tracks and converts
 *   them into a representation which won't impede parsing.
 * 
 *   Notes:
 * 
 *   - additional nested conditionals are tracked by pushing and popping
 *   additional :inner-conditional-mode flags
 */
fif.stdlib.conditional.inner_conditional_mode = (function fif$stdlib$conditional$inner_conditional_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_if_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.conditional.inner_conditional_flag),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_else_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_then_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));

}
}
}
});
/**
 * Primitive if-else-then statements
 *   
 *   Implementation Details:
 * 
 *   - entire control structure is placed in a sub-stack stored on the
 *   stash. Any inner control structures are processed by
 *   inner-conditional-mode
 * 
 *   - after being stored, the flag is processed, the stack machine is
 *   placed in either truth-condition-mode (flag was true) or
 *   dump-truth-condition-mode (flag was false), and the stashed
 *   condition body is placed back in the code queue, and the stash is
 *   cleared.
 * 
 *   - while in truth-condition-mode, args are processed naturally until
 *   a then statement pops it out of truth-condition-mode
 * 
 *   - while in dump-truth-condition-mode, args are dumped until the
 *   else (false condition) is reached, which places the stack machine
 *   in false-condition-mode.  
 * 
 *   
 */
fif.stdlib.conditional.conditional_mode = (function fif$stdlib$conditional$conditional_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_if_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.conditional.inner_conditional_flag),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.conditional.arg_then_token)){
var vec__39828 = fif.stack_machine.get_stack.call(null,sm);
var flag = cljs.core.nth.call(null,vec__39828,(0),null);
var condition_body = fif.stack_machine.sub_stack.get_sub_stack.call(null,stash);
var new_code = cljs.core.concat.call(null,cljs.core.reverse.call(null,condition_body),(new cljs.core.List(null,fif.stdlib.conditional.arg_then_token,null,(1),null)),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)));
if(cljs.core.truth_(fif.stdlib.conditional.condition_true_QMARK_.call(null,flag))){
return fif.stack_machine.set_stash.call(null,fif.stack_machine.set_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.pop_flag.call(null,fif.stack_machine.pop_stack.call(null,sm)),fif.stdlib.conditional.truth_condition_mode_flag),new_code),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash));
} else {
return fif.stack_machine.set_stash.call(null,fif.stack_machine.set_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.pop_flag.call(null,fif.stack_machine.pop_stack.call(null,sm)),fif.stdlib.conditional.dump_truth_condition_mode_flag),new_code),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash));
}
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));

}
}
});
/**
 * Word Definition:
 * ? if <truth body> else <false body> then
 * ? if <truth body> then
 */
fif.stdlib.conditional.start_if = (function fif$stdlib$conditional$start_if(sm){
var stash = fif.stack_machine.get_stash.call(null,sm);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.create_sub_stack.call(null,stash)),fif.stdlib.conditional.conditional_mode_flag));
});
fif.stdlib.conditional.doc_string = "<flag> if <true-body> [else <false-body>] then -- <flag> determines if <true-body> or <false-body> is executed.";
/**
 * Stack Machine imports for if-else-then functionality
 */
fif.stdlib.conditional.import_stdlib_conditional_mode = (function fif$stdlib$conditional$import_stdlib_conditional_mode(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.conditional.arg_if_token,fif.stdlib.conditional.start_if,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.conditional.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional","stdlib.mode.conditional",-753817998)),fif.stdlib.conditional.arg_else_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.conditional.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional","stdlib.mode.conditional",-753817998)),fif.stdlib.conditional.arg_then_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.conditional.doc_string,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional","stdlib.mode.conditional",-753817998)),fif.stdlib.conditional.conditional_mode_flag,fif.stdlib.conditional.conditional_mode),fif.stdlib.conditional.inner_conditional_flag,fif.stdlib.conditional.inner_conditional_mode),fif.stdlib.conditional.truth_condition_mode_flag,fif.stdlib.conditional.truth_condition_mode),fif.stdlib.conditional.dump_condition_mode_flag,fif.stdlib.conditional.dump_condition_mode),fif.stdlib.conditional.dump_truth_condition_mode_flag,fif.stdlib.conditional.dump_truth_condition_mode),fif.stdlib.conditional.dump_false_condition_mode_flag,fif.stdlib.conditional.dump_false_condition_mode),fif.stdlib.conditional.false_condition_mode_flag,fif.stdlib.conditional.false_condition_mode);
});
