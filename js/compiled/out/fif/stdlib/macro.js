// Compiled by ClojureScript 1.10.339 {}
goog.provide('fif.stdlib.macro');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.sub_stack');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
fif.stdlib.macro.macro_define_mode_flag = new cljs.core.Keyword(null,"macro-define-mode","macro-define-mode",469510409);
fif.stdlib.macro.arg_start_macro = new cljs.core.Symbol(null,"macro","macro",772668123,null);
fif.stdlib.macro.arg_end_macro = new cljs.core.Symbol(null,"endmacro","endmacro",1607438928,null);
fif.stdlib.macro.macro_store_mode_flag = new cljs.core.Keyword(null,"macro-store-mode","macro-store-mode",147566246);
fif.stdlib.macro.arg_start_macro_store = new cljs.core.Symbol(null,"_!","_!",415396139,null);
fif.stdlib.macro.arg_end_macro_store = new cljs.core.Symbol(null,"!_","!_",2040185597,null);
fif.stdlib.macro.arg_create_macro_stack = new cljs.core.Symbol("macro","stack-create","macro/stack-create",-869361310,null);
fif.stdlib.macro.arg_transfer_macro_stack = new cljs.core.Symbol("macro","stack->code-stack","macro/stack->code-stack",-112571917,null);
fif.stdlib.macro.wrap_compiled_macro = (function fif$stdlib$macro$wrap_compiled_macro(wbody){
return (function (sm){
return fif.stack_machine.set_code.call(null,sm,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.macro.arg_create_macro_stack], null),wbody,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.macro.arg_transfer_macro_stack], null),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm))));
});
});
fif.stdlib.macro.macro_define_mode = (function fif$stdlib$macro$macro_define_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.macro.arg_end_macro)){
var macro_content = cljs.core.reverse.call(null,fif.stack_machine.sub_stack.get_sub_stack.call(null,stash));
var vec__41247 = macro_content;
var seq__41248 = cljs.core.seq.call(null,vec__41247);
var first__41249 = cljs.core.first.call(null,seq__41248);
var seq__41248__$1 = cljs.core.next.call(null,seq__41248);
var wname = first__41249;
var wbody = seq__41248__$1;
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.set_word.call(null,sm,wname,fif.stdlib.macro.wrap_compiled_macro.call(null,wbody)),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash))));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));

}
});
fif.stdlib.macro.start_macro = (function fif$stdlib$macro$start_macro(sm){
var stash = fif.stack_machine.get_stash.call(null,sm);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.macro.macro_define_mode_flag),fif.stack_machine.sub_stack.create_sub_stack.call(null,stash)));
});
fif.stdlib.macro.macro_store_mode = (function fif$stdlib$macro$macro_store_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var temp = fif.stack_machine.get_temp_macro.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.macro.arg_end_macro_store)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,sm));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_temp_macro.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,temp,arg)));

}
});
fif.stdlib.macro.op_create_temp_macro_stack = (function fif$stdlib$macro$op_create_temp_macro_stack(sm){
var temp = fif.stack_machine.get_temp_macro.call(null,sm);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_temp_macro.call(null,sm,fif.stack_machine.sub_stack.create_sub_stack.call(null,temp)));
});
fif.stdlib.macro.op_transfer_macro_stack = (function fif$stdlib$macro$op_transfer_macro_stack(sm){
var temp = fif.stack_machine.get_temp_macro.call(null,sm);
var macro_content = cljs.core.reverse.call(null,cljs.core.peek.call(null,fif.stack_machine.get_temp_macro.call(null,sm)));
return fif.stack_machine.set_temp_macro.call(null,fif.stack_machine.set_code.call(null,sm,cljs.core.concat.call(null,macro_content,fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)))),fif.stack_machine.sub_stack.remove_sub_stack.call(null,temp));
});
fif.stdlib.macro.start_macro_store = (function fif$stdlib$macro$start_macro_store(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.macro.macro_store_mode_flag));
});
fif.stdlib.macro.import_stdlib_macro_mode = (function fif$stdlib$macro$import_stdlib_macro_mode(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.macro.arg_start_macro,fif.stdlib.macro.start_macro,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true),fif.stdlib.macro.arg_start_macro_store,fif.stdlib.macro.start_macro_store,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true),fif.stdlib.macro.arg_create_macro_stack,fif.stdlib.macro.op_create_temp_macro_stack,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true),fif.stdlib.macro.arg_transfer_macro_stack,fif.stdlib.macro.op_transfer_macro_stack,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true),fif.stdlib.macro.macro_define_mode_flag,fif.stdlib.macro.macro_define_mode),fif.stdlib.macro.macro_store_mode_flag,fif.stdlib.macro.macro_store_mode);
});
