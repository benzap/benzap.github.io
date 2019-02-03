// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stdlib.collecter');
goog.require('cljs.core');
goog.require('fif.def');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.processor');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.utils.token');
goog.require('fif.stdlib.macro');
fif.stdlib.collecter.collecter_mode_flag = new cljs.core.Keyword(null,"collecter-mode","collecter-mode",1072880131);
fif.stdlib.collecter.arg_start_collecter = new cljs.core.Symbol(null,"<-into!","<-into!",468214092,null);
fif.stdlib.collecter.arg_end_collecter = new cljs.core.Symbol(null,"!","!",1329281890,null);
fif.stdlib.collecter.collecter_mode = (function fif$stdlib$collecter$collecter_mode(sm){
var stack = fif.stack_machine.get_stack.call(null,sm);
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.collecter.arg_end_collecter)){
var vec__34092 = fif.utils.token.split_at_token.call(null,stack,fif.stdlib.collecter.arg_start_collecter);
var new_collection_values = cljs.core.nth.call(null,vec__34092,(0),null);
var new_stack = cljs.core.nth.call(null,vec__34092,(1),null);
var collection = cljs.core.into.call(null,cljs.core.peek.call(null,new_stack),cljs.core.reverse.call(null,new_collection_values));
var new_stack__$1 = cljs.core.rest.call(null,new_stack);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stack.call(null,fif.stack_machine.pop_flag.call(null,sm),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection], null),new_stack__$1)));
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
});
fif.stdlib.collecter.start_collecter = (function fif$stdlib$collecter$start_collecter(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.collecter.collecter_mode_flag),fif.stdlib.collecter.arg_start_collecter));
});
fif.stdlib.collecter.import_collection_collecter_defaults = fif.def.wrap_code_eval.call(null,cljs.core.list(new cljs.core.Symbol(null,"macro","macro",772668123,null),new cljs.core.Symbol(null,"list!","list!",1380445557,null),new cljs.core.Symbol(null,"_!","_!",415396139,null),cljs.core.List.EMPTY,new cljs.core.Symbol(null,"<-into!","<-into!",468214092,null),new cljs.core.Symbol(null,"!_","!_",2040185597,null),new cljs.core.Symbol(null,"endmacro","endmacro",1607438928,null),new cljs.core.Symbol(null,"macro","macro",772668123,null),new cljs.core.Symbol(null,"map!","map!",359502903,null),new cljs.core.Symbol(null,"_!","_!",415396139,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Symbol(null,"<-into!","<-into!",468214092,null),new cljs.core.Symbol(null,"!_","!_",2040185597,null),new cljs.core.Symbol(null,"endmacro","endmacro",1607438928,null),new cljs.core.Symbol(null,"macro","macro",772668123,null),new cljs.core.Symbol(null,"vec!","vec!",1665592470,null),new cljs.core.Symbol(null,"_!","_!",415396139,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"<-into!","<-into!",468214092,null),new cljs.core.Symbol(null,"!_","!_",2040185597,null),new cljs.core.Symbol(null,"endmacro","endmacro",1607438928,null),new cljs.core.Symbol(null,"macro","macro",772668123,null),new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"_!","_!",415396139,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol(null,"<-into!","<-into!",468214092,null),new cljs.core.Symbol(null,"!_","!_",2040185597,null),new cljs.core.Symbol(null,"endmacro","endmacro",1607438928,null)));
fif.stdlib.collecter.import_stdlib_collecter_mode = (function fif$stdlib$collecter$import_stdlib_collecter_mode(sm){
return fif.stack_machine.words.set_global_meta.call(null,fif.stack_machine.words.set_global_meta.call(null,fif.stack_machine.words.set_global_meta.call(null,fif.stack_machine.words.set_global_meta.call(null,fif.stdlib.collecter.import_collection_collecter_defaults.call(null,fif.stdlib.macro.import_stdlib_macro_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.set_mode.call(null,sm,fif.stdlib.collecter.collecter_mode_flag,fif.stdlib.collecter.collecter_mode),fif.stdlib.collecter.arg_start_collecter,fif.stdlib.collecter.start_collecter,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<coll> <-into! <body> ! -- Place <body> form into <coll> collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.collecter","stdlib.mode.collecter",-352241646)),fif.stdlib.collecter.arg_end_collecter,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"<coll> <-into! <body> ! -- Place <body> form into <coll> collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.collecter","stdlib.mode.collecter",-352241646)))),new cljs.core.Symbol(null,"list!","list!",1380445557,null),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true),new cljs.core.Symbol(null,"map!","map!",359502903,null),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true),new cljs.core.Symbol(null,"vec!","vec!",1665592470,null),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true),new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true);
});
