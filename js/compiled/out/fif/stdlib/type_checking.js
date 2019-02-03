// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stdlib.type_checking');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.evaluators');
goog.require('fif.stack_machine.words');
goog.require('fif.def');
fif.stdlib.type_checking.word_QMARK__op = (function fif$stdlib$type_checking$word_QMARK__op(sm){
var vec__34206 = fif.stack_machine.get_stack.call(null,sm);
var wname = cljs.core.nth.call(null,vec__34206,(0),null);
if(cljs.core.truth_(cljs.core.get.call(null,fif.stack_machine.words.get_word_listing.call(null,sm),wname))){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),true));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),false));
}
});
fif.stdlib.type_checking.fn_QMARK__op = (function fif$stdlib$type_checking$fn_QMARK__op(sm){
var vec__34209 = fif.stack_machine.get_stack.call(null,sm);
var wname = cljs.core.nth.call(null,vec__34209,(0),null);
var temp__5718__auto__ = fif.stack_machine.words.get_global_metadata.call(null,sm,wname);
if(cljs.core.truth_(temp__5718__auto__)){
var meta = temp__5718__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"variable?","variable?",-1902009648).cljs$core$IFn$_invoke$arity$1(meta))){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),false));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),true));
}
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),false));
}
});
fif.stdlib.type_checking.variable_QMARK__op = (function fif$stdlib$type_checking$variable_QMARK__op(sm){
var vec__34212 = fif.stack_machine.get_stack.call(null,sm);
var wname = cljs.core.nth.call(null,vec__34212,(0),null);
var temp__5718__auto__ = fif.stack_machine.words.get_global_metadata.call(null,sm,wname);
if(cljs.core.truth_(temp__5718__auto__)){
var meta = temp__5718__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"variable?","variable?",-1902009648).cljs$core$IFn$_invoke$arity$1(meta))){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),true));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),false));
}
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),false));
}
});
fif.stdlib.type_checking.import_stdlib_type_checking = (function fif$stdlib$type_checking$import_stdlib_type_checking(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,new cljs.core.Symbol(null,"word?","word?",1261272362,null),fif.stdlib.type_checking.word_QMARK__op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.type-checking","stdlib.type-checking",-1343529658),new cljs.core.Keyword(null,"doc","doc",1913296891),"( any -- bool ) Returns true if the given value is a word definition."),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),fif.stdlib.type_checking.fn_QMARK__op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.type-checking","stdlib.type-checking",-1343529658),new cljs.core.Keyword(null,"doc","doc",1913296891),"( any -- bool ) Returns true if the given value is a word function."),new cljs.core.Symbol(null,"variable?","variable?",-261478121,null),fif.stdlib.type_checking.variable_QMARK__op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.type-checking","stdlib.type-checking",-1343529658),new cljs.core.Keyword(null,"doc","doc",1913296891),"( any -- bool ) Returns true if the given value is a word variable.");
});
