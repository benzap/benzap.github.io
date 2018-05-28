// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stdlib.reader');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.evaluators');
goog.require('fif.stack_machine.words');
goog.require('fif.def');
fif.stdlib.reader.read_string_op = (function fif$stdlib$reader$read_string_op(sm){
var vec__41174 = fif.stack_machine.get_stack.call(null,sm);
var s = cljs.core.nth.call(null,vec__41174,(0),null);
var vec__41177 = fif.stack_machine.evaluators.read_string.call(null,sm,s);
var sm__$1 = cljs.core.nth.call(null,vec__41177,(0),null);
var fif_forms = cljs.core.nth.call(null,vec__41177,(1),null);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm__$1),fif_forms));
});
fif.stdlib.reader.import_stdlib_reader = (function fif$stdlib$reader$import_stdlib_reader(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,sm,new cljs.core.Symbol(null,"read-string","read-string",-558384455,null),fif.stdlib.reader.read_string_op,new cljs.core.Keyword(null,"doc","doc",1913296891),"( s -- vec-form ) Reads the string as an edn structure",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.reader","stdlib.reader",1728704765),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true);
});
