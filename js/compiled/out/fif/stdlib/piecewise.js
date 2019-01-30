// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stdlib.piecewise');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.words');
goog.require('fif.def');
/**
 * (n -- 'n) Queues the first value on the stack back on the code
 *   stack. Used to dereference variables on the stack, or to reorganize stack values.
 */
fif.stdlib.piecewise.piecewise_first = (function fif$stdlib$piecewise$piecewise_first(sm){
var vec__42189 = fif.stack_machine.get_stack.call(null,sm);
var x1 = cljs.core.nth.call(null,vec__42189,(0),null);
return fif.stack_machine.push_code.call(null,fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_stack.call(null,sm)),x1);
});
fif.stdlib.piecewise.piecewise_second = (function fif$stdlib$piecewise$piecewise_second(sm){
var vec__42192 = fif.stack_machine.get_stack.call(null,sm);
var x1 = cljs.core.nth.call(null,vec__42192,(0),null);
var x2 = cljs.core.nth.call(null,vec__42192,(1),null);
return fif.stack_machine.push_code.call(null,fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,sm)),x1)),x2);
});
fif.stdlib.piecewise.piecewise_third = (function fif$stdlib$piecewise$piecewise_third(sm){
var vec__42195 = fif.stack_machine.get_stack.call(null,sm);
var x1 = cljs.core.nth.call(null,vec__42195,(0),null);
var x2 = cljs.core.nth.call(null,vec__42195,(1),null);
var x3 = cljs.core.nth.call(null,vec__42195,(2),null);
return fif.stack_machine.push_code.call(null,fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,sm))),x2),x1)),x3);
});
fif.stdlib.piecewise.import_stdlib_piecewise = (function fif$stdlib$piecewise$import_stdlib_piecewise(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,new cljs.core.Symbol(null,"%","%",-950237169,null),fif.stdlib.piecewise.piecewise_first,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- 'n ) Pop and re-evaluate the first value on the stack.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.piecewise","stdlib.piecewise",-1785240859)),new cljs.core.Symbol(null,"%1","%1",1309450150,null),fif.stdlib.piecewise.piecewise_first,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- 'n ) Pop and re-evaluate the first value on the stack.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.piecewise","stdlib.piecewise",-1785240859)),new cljs.core.Symbol(null,"%2","%2",1953183984,null),fif.stdlib.piecewise.piecewise_second,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- 'n ) Pop and re-evaluate the second value on the stack.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.piecewise","stdlib.piecewise",-1785240859)),new cljs.core.Symbol(null,"%3","%3",623755202,null),fif.stdlib.piecewise.piecewise_third,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- 'n ) Pop and re-evaluate the third value on the stack.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.piecewise","stdlib.piecewise",-1785240859));
});
