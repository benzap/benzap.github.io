// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stdlib.compile');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.scope');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.mode');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.processor');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stack_machine.validation');
goog.require('fif.stdlib.reserved');
fif.stdlib.compile.arg_start_token = fif.stdlib.reserved.function_begin_definition_word;
fif.stdlib.compile.arg_end_token = fif.stdlib.reserved.function_end_definition_word;
fif.stdlib.compile.arg_end_function_token = new cljs.core.Symbol("compile","end-function","compile/end-function",1056403898,null);
fif.stdlib.compile.compile_mode_flag = new cljs.core.Keyword(null,"compile-mode","compile-mode",711601220);
fif.stdlib.compile.inner_compile_mode_flag = new cljs.core.Keyword(null,"inner-compile-mode","inner-compile-mode",989851229);
fif.stdlib.compile.function_mode_flag = new cljs.core.Keyword(null,"function-mode","function-mode",-646333702);
fif.stdlib.compile.enter_compile_mode = (function fif$stdlib$compile$enter_compile_mode(sm,stash){
return null;
});
fif.stdlib.compile.exit_compile_mode = (function fif$stdlib$compile$exit_compile_mode(sm){
return null;
});
/**
 * Used to wrap a word definition for use within the stack
 *   machine. `wbody` is a collection of words which make up the word
 *   definition. This function is then placed within the stack machine
 *   using fif.stack-machine/set-word.
 * 
 *   Notes:
 * 
 *   - Note that invoking this wrapper, places the stack machine in the
 *   function-mode, which creates a new scope. This scope serves the
 *   purpose of storing local variables for that function, until it
 *   leaves function-mode.
 */
fif.stdlib.compile.wrap_compiled_fn = (function fif$stdlib$compile$wrap_compiled_fn(wbody){
return (function (sm){
return fif.stack_machine.set_code.call(null,fif.stack_machine.scope.new_scope.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.compile.function_mode_flag)),cljs.core.concat.call(null,wbody,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.compile.arg_end_function_token], null),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm))));
});
});
/**
 * inner-compile mode is used to circumvent issues with inner function
 *   definitions. It is used to ignore these inner function definitions
 *   by placing them into a new mode of operation where it places the
 *   word values onto the stack.
 */
fif.stdlib.compile.inner_compile_mode = (function fif$stdlib$compile$inner_compile_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.compile.arg_start_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.stash.update_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.compile.inner_compile_mode_flag),cljs.core.conj,arg));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.compile.arg_end_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.stash.update_stash.call(null,fif.stack_machine.pop_flag.call(null,sm),cljs.core.conj,arg));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.conj,arg));

}
}
});
/**
 * Represents the compilation mode
 */
fif.stdlib.compile.compile_mode = (function fif$stdlib$compile$compile_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.compile.arg_start_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.conj,arg),fif.stdlib.compile.inner_compile_mode_flag));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.compile.arg_end_token)){
var fn_content = fif.stack_machine.stash.peek_stash.call(null,sm);
var vec__39908 = fn_content;
var seq__39909 = cljs.core.seq.call(null,vec__39908);
var first__39910 = cljs.core.first.call(null,seq__39909);
var seq__39909__$1 = cljs.core.next.call(null,seq__39909);
var wname = first__39910;
var wbody = seq__39909__$1;
if(!((wname instanceof cljs.core.Symbol))){
return fif.stack_machine.exceptions.raise_validation_error.call(null,sm,(1),wname,"Function name must be a symbol");
} else {
if(cljs.core.contains_QMARK_.call(null,fif.stdlib.reserved._STAR_reserved_tokens_STAR_,wname)){
return fif.stack_machine.exceptions.raise_reserved_word_redefinition_error.call(null,sm,wname);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,fif.stack_machine.stash.remove_stash.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,wname,fif.stdlib.compile.wrap_compiled_fn.call(null,wbody),new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.vec.call(null,wbody)))));

}
}
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.stash.update_stash.call(null,sm,cljs.core.conj,arg));

}
}
});
/**
 * 
 */
fif.stdlib.compile.function_mode = (function fif$stdlib$compile$function_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.compile.arg_end_function_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.scope.remove_scope.call(null,fif.stack_machine.pop_flag.call(null,sm)));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
});
/**
 * We retrieved the start-token word, and we push it onto the stack and
 * set our compile flag
 */
fif.stdlib.compile.start_defn = (function fif$stdlib$compile$start_defn(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.stash.new_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.compile.compile_mode_flag),cljs.core.PersistentVector.EMPTY));
});
fif.stdlib.compile.import_stdlib_compile_mode = (function fif$stdlib$compile$import_stdlib_compile_mode(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.compile.arg_start_token,fif.stdlib.compile.start_defn,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"fn <wname> <wbody> endfn -- Create a word definition with name <wname> consisting of words <wbody>.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.compile","stdlib.mode.compile",458875522)),fif.stdlib.compile.arg_end_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"fn <wname> <wbody> endfn -- Create a word definition with name <wname> consisting of words <wbody>.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.compile","stdlib.mode.compile",458875522)),fif.stdlib.compile.compile_mode_flag,fif.stdlib.compile.compile_mode),fif.stdlib.compile.inner_compile_mode_flag,fif.stdlib.compile.inner_compile_mode),fif.stdlib.compile.function_mode_flag,fif.stdlib.compile.function_mode);
});
