// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stack_machine.error_handling');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.utils.display');
fif.stack_machine.error_handling.error_symbol = new cljs.core.Symbol(null,"ERR##","ERR##",1556008340,null);
/**
 * Creates a new error object
 */
fif.stack_machine.error_handling.new_error_object = (function fif$stack_machine$error_handling$new_error_object(var_args){
var G__39558 = arguments.length;
switch (G__39558) {
case 2:
return fif.stack_machine.error_handling.new_error_object.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return fif.stack_machine.error_handling.new_error_object.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.stack_machine.error_handling.new_error_object.cljs$core$IFn$_invoke$arity$2 = (function (msg,extra){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stack_machine.error_handling.error_symbol,msg,extra], null);
});

fif.stack_machine.error_handling.new_error_object.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return fif.stack_machine.error_handling.new_error_object.call(null,msg,cljs.core.PersistentArrayMap.EMPTY);
});

fif.stack_machine.error_handling.new_error_object.cljs$lang$maxFixedArity = 2;

fif.stack_machine.error_handling.error_object_QMARK_ = (function fif$stack_machine$error_handling$error_object_QMARK_(obj){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,obj),fif.stack_machine.error_handling.error_symbol);
});
/**
 * Creates an error object for stack errors.
 */
fif.stack_machine.error_handling.stack_error = (function fif$stack_machine$error_handling$stack_error(var_args){
var G__39561 = arguments.length;
switch (G__39561) {
case 3:
return fif.stack_machine.error_handling.stack_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return fif.stack_machine.error_handling.stack_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.stack_machine.error_handling.stack_error.cljs$core$IFn$_invoke$arity$3 = (function (sm,msg,extra){
var stack_info = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("fif.stack-machine.error-handling","stack-error","fif.stack-machine.error-handling/stack-error",1141540237),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.reverse.call(null,fif.stack_machine.get_stack.call(null,sm)),new cljs.core.Keyword(null,"word","word",-420123725),cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.reverse.call(null,fif.stack_machine.get_flags.call(null,sm))], null);
return fif.stack_machine.error_handling.new_error_object.call(null,msg,cljs.core.merge.call(null,stack_info,extra));
});

fif.stack_machine.error_handling.stack_error.cljs$core$IFn$_invoke$arity$2 = (function (sm,msg){
return fif.stack_machine.error_handling.stack_error.call(null,sm,msg,cljs.core.PersistentArrayMap.EMPTY);
});

fif.stack_machine.error_handling.stack_error.cljs$lang$maxFixedArity = 3;

/**
 * Returns true if the given object is a stack error object
 */
fif.stack_machine.error_handling.stack_error_object_QMARK_ = (function fif$stack_machine$error_handling$stack_error_object_QMARK_(obj){
var and__3911__auto__ = fif.stack_machine.error_handling.error_object_QMARK_.call(null,obj);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,obj,(2))),new cljs.core.Keyword("fif.stack-machine.error-handling","stack-error","fif.stack-machine.error-handling/stack-error",1141540237));
} else {
return and__3911__auto__;
}
});
/**
 * Creates an error object for system errors.
 */
fif.stack_machine.error_handling.system_error = (function fif$stack_machine$error_handling$system_error(var_args){
var G__39564 = arguments.length;
switch (G__39564) {
case 4:
return fif.stack_machine.error_handling.system_error.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return fif.stack_machine.error_handling.system_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.stack_machine.error_handling.system_error.cljs$core$IFn$_invoke$arity$4 = (function (sm,ex,msg,extra){
var stack_info = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("fif.stack-machine.error-handling","system-error","fif.stack-machine.error-handling/system-error",2077074304),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.reverse.call(null,fif.stack_machine.get_stack.call(null,sm)),new cljs.core.Keyword(null,"word","word",-420123725),cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.reverse.call(null,fif.stack_machine.get_flags.call(null,sm)),new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),cljs.core.ex_data.call(null,ex),new cljs.core.Keyword(null,"ex-message","ex-message",1526142375),null], null);
return fif.stack_machine.error_handling.new_error_object.call(null,msg,cljs.core.merge.call(null,stack_info,extra));
});

fif.stack_machine.error_handling.system_error.cljs$core$IFn$_invoke$arity$3 = (function (sm,ex,msg){
return fif.stack_machine.error_handling.system_error.call(null,sm,ex,msg,cljs.core.PersistentArrayMap.EMPTY);
});

fif.stack_machine.error_handling.system_error.cljs$lang$maxFixedArity = 4;

/**
 * Returns true if the given object is a system error object
 */
fif.stack_machine.error_handling.system_error_object_QMARK_ = (function fif$stack_machine$error_handling$system_error_object_QMARK_(obj){
var and__3911__auto__ = fif.stack_machine.error_handling.error_object_QMARK_.call(null,obj);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,obj,(2))),new cljs.core.Keyword("fif.stack-machine.error-handling","system-error","fif.stack-machine.error-handling/system-error",2077074304));
} else {
return and__3911__auto__;
}
});
/**
 * Resets the stack, and places the given error object on the stack.
 */
fif.stack_machine.error_handling.set_error = (function fif$stack_machine$error_handling$set_error(sm,errobj){
return fif.stack_machine.push_stack.call(null,fif.stack_machine.clear_code.call(null,fif.stack_machine.clear_temp_macro.call(null,fif.stack_machine.clear_flags.call(null,fif.stack_machine.clear_ret.call(null,fif.stack_machine.clear_stack.call(null,sm))))),errobj);
});
/**
 * The default error handler for system errors that the fif
 *   stackmachine experiences.
 * 
 *   Keyword Arguments:
 * 
 *   sm - The Stackmachine instance at the time of the system error
 * 
 *   ex - An exception object
 * 
 *   Notes:
 *   
 *   - System error is re-thrown if the stackmachine is not in debug-mode.
 */
fif.stack_machine.error_handling.default_system_error_handler = (function fif$stack_machine$error_handling$default_system_error_handler(sm,ex){
if(cljs.core.truth_(fif.stack_machine.is_debug_mode_QMARK_.call(null,sm))){
var errmsg = ["System Error"].join('');
var errobj = fif.stack_machine.error_handling.system_error.call(null,sm,ex,errmsg);
fif.utils.display.pprint_err.call(null,errobj);

return fif.stack_machine.error_handling.set_error.call(null,sm,errobj);
} else {
throw ex;
}
});
fif.stack_machine.error_handling.handle_system_error = (function fif$stack_machine$error_handling$handle_system_error(sm,ex){
var temp__5455__auto__ = fif.stack_machine.get_system_error_handler.call(null,sm);
if(cljs.core.truth_(temp__5455__auto__)){
var system_error_handler = temp__5455__auto__;
return system_error_handler.call(null,sm,ex);
} else {
throw ex;
}
});
fif.stack_machine.error_handling.default_stack_error_handler = (function fif$stack_machine$error_handling$default_stack_error_handler(sm,err){
fif.utils.display.pprint_err.call(null,err);

return fif.stack_machine.error_handling.set_error.call(null,sm,err);
});
fif.stack_machine.error_handling.handle_stack_error = (function fif$stack_machine$error_handling$handle_stack_error(sm,err){
var temp__5455__auto__ = fif.stack_machine.get_stack_error_handler.call(null,sm);
if(cljs.core.truth_(temp__5455__auto__)){
var stack_error_handler = temp__5455__auto__;
return stack_error_handler.call(null,sm,err);
} else {
return fif.stack_machine.error_handling.set_error.call(null,sm,err);
}
});
