// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stack_machine.sub_stack');
goog.require('cljs.core');
fif.stack_machine.sub_stack.create_sub_stack = (function fif$stack_machine$sub_stack$create_sub_stack(coll){
return cljs.core.conj.call(null,coll,cljs.core.List.EMPTY);
});
fif.stack_machine.sub_stack.push_sub_stack = (function fif$stack_machine$sub_stack$push_sub_stack(coll,x){
var f = cljs.core.conj.call(null,cljs.core.peek.call(null,coll),x);
return cljs.core.conj.call(null,cljs.core.pop.call(null,coll),f);
});
fif.stack_machine.sub_stack.pop_sub_stack = (function fif$stack_machine$sub_stack$pop_sub_stack(coll){
var f = cljs.core.pop.call(null,cljs.core.peek.call(null,coll));
return cljs.core.conj.call(null,cljs.core.pop.call(null,coll),f);
});
fif.stack_machine.sub_stack.get_sub_stack = (function fif$stack_machine$sub_stack$get_sub_stack(coll){
return cljs.core.peek.call(null,coll);
});
fif.stack_machine.sub_stack.set_sub_stack = (function fif$stack_machine$sub_stack$set_sub_stack(coll,x){
return cljs.core.conj.call(null,cljs.core.pop.call(null,coll),x);
});
fif.stack_machine.sub_stack.remove_sub_stack = (function fif$stack_machine$sub_stack$remove_sub_stack(coll){
return cljs.core.pop.call(null,coll);
});
