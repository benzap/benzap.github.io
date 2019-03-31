// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.stack_machine.validation');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.error_handling');
goog.require('fif.stack_machine.exceptions');
fif.stack_machine.validation.validate_stack_arg = (function fif$stack_machine$validation$validate_stack_arg(sm,index,validation_fn,errmsg){
var arg = cljs.core.nth.call(null,fif.stack_machine.get_stack.call(null,sm),index);
if(cljs.core.truth_(validation_fn.call(null,arg))){
return sm;
} else {
return fif.stack_machine.exceptions.raise_validation_error.call(null,sm,index,arg,errmsg);
}
});
fif.stack_machine.validation.arg_sym_QMARK_ = (function fif$stack_machine$validation$arg_sym_QMARK_(sm,index){
return fif.stack_machine.validation.validate_stack_arg.call(null,sm,index,cljs.core.symbol_QMARK_,["Stack Argument '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"' is not a symbol"].join(''));
});
fif.stack_machine.validation.arg_string_QMARK_ = (function fif$stack_machine$validation$arg_string_QMARK_(sm,index){
return fif.stack_machine.validation.validate_stack_arg.call(null,sm,index,cljs.core.string_QMARK_,["Stack Argument '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"' is not a string"].join(''));
});
