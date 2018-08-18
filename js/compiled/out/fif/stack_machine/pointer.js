// Compiled by ClojureScript 1.10.339 {}
goog.provide('fif.stack_machine.pointer');
goog.require('cljs.core');
goog.require('fif.utils.token');
goog.require('fif.stdlib.reserved');
/**
 * Returns true if the given argument resembles a pointer. A pointer is
 *   any symbol which begins with reserved/pointer-subtoken.
 */
fif.stack_machine.pointer.arg_is_pointer_QMARK_ = (function fif$stack_machine$pointer$arg_is_pointer_QMARK_(arg){
var and__3938__auto__ = (arg instanceof cljs.core.Symbol);
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not_EQ_.call(null,arg,fif.stdlib.reserved.pointer_subtoken);
if(and__3938__auto____$1){
return fif.utils.token.symbol_starts_with_QMARK_.call(null,arg,fif.stdlib.reserved.pointer_subtoken);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
fif.stack_machine.pointer.trim_pointer_once = (function fif$stack_machine$pointer$trim_pointer_once(arg){
if(cljs.core.truth_(fif.stack_machine.pointer.arg_is_pointer_QMARK_.call(null,arg))){
return fif.utils.token.symbol_ltrim_once.call(null,arg,fif.stdlib.reserved.pointer_subtoken);
} else {
return arg;
}
});
