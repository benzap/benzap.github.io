// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.stdlib.variable');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stack_machine.mode');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.variable');
goog.require('fif.stdlib.reserved');
fif.stdlib.variable.arg_global_var_token = new cljs.core.Symbol(null,"def","def",597100991,null);
fif.stdlib.variable.arg_local_var_token = new cljs.core.Symbol(null,"let","let",358118826,null);
fif.stdlib.variable.variable_mode_flag = new cljs.core.Keyword(null,"variable-mode","variable-mode",-181399941);
fif.stdlib.variable.enter_variable_mode = (function fif$stdlib$variable$enter_variable_mode(sm,stash){
return fif.stack_machine.mode.enter_mode.call(null,sm,fif.stdlib.variable.variable_mode_flag,stash);
});
fif.stdlib.variable.exit_variable_mode = (function fif$stdlib$variable$exit_variable_mode(sm){
return fif.stack_machine.mode.exit_mode.call(null,sm);
});
if((typeof fif !== 'undefined') && (typeof fif.stdlib !== 'undefined') && (typeof fif.stdlib.variable !== 'undefined') && (typeof fif.stdlib.variable.variable_mode !== 'undefined')){
} else {
fif.stdlib.variable.variable_mode = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fif.stdlib.variable","variable-mode"),fif.stack_machine.mode.mode_dispatch_fn,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
/**
 * Puts the stack machine into variable-mode
 */
fif.stdlib.variable.start_global_variable = (function fif$stdlib$variable$start_global_variable(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.variable.enter_variable_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.variable","global-variable","fif.stdlib.variable/global-variable",711066419),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.variable","get-symbol","fif.stdlib.variable/get-symbol",843384079)], null)));
});
cljs.core._add_method.call(null,fif.stdlib.variable.variable_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.variable","global-variable","fif.stdlib.variable/global-variable",711066419),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.variable","get-symbol","fif.stdlib.variable/get-symbol",843384079)], null),(function (sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if((!((arg instanceof cljs.core.Symbol)))){
return fif.stack_machine.exceptions.raise_validation_error.call(null,sm,(0),arg,"Variable name must be a symbol");
} else {
if(cljs.core.contains_QMARK_.call(null,fif.stdlib.reserved._STAR_reserved_tokens_STAR_,arg)){
return fif.stack_machine.exceptions.raise_reserved_word_redefinition_error.call(null,sm,arg);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.push_stack.call(null,sm,arg),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.variable","set","fif.stdlib.variable/set",1067395899)));

}
}
}));
cljs.core._add_method.call(null,fif.stdlib.variable.variable_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.variable","global-variable","fif.stdlib.variable/global-variable",711066419),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.variable","set","fif.stdlib.variable/set",1067395899)], null),(function (sm){
var val = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var sym = cljs.core.peek.call(null,fif.stack_machine.get_stack.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.variable.exit_variable_mode.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,sym,fif.stack_machine.variable.wrap_global_variable.call(null,val),new cljs.core.Keyword(null,"variable?","variable?",-1902009648),new cljs.core.Keyword(null,"global","global",93595047)))));
}));
/**
 * Puts the stack machine into variable-mode to create a local
 *   variable.
 */
fif.stdlib.variable.start_local_variable = (function fif$stdlib$variable$start_local_variable(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.variable.enter_variable_mode.call(null,sm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.variable","local-variable","fif.stdlib.variable/local-variable",-2132337802),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.variable","get-symbol","fif.stdlib.variable/get-symbol",843384079)], null)));
});
cljs.core._add_method.call(null,fif.stdlib.variable.variable_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.variable","local-variable","fif.stdlib.variable/local-variable",-2132337802),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.variable","get-symbol","fif.stdlib.variable/get-symbol",843384079)], null),(function (sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if((!((arg instanceof cljs.core.Symbol)))){
return fif.stack_machine.exceptions.raise_validation_error.call(null,sm,(0),arg,"Variable name must be a symbol");
} else {
if(cljs.core.contains_QMARK_.call(null,fif.stdlib.reserved._STAR_reserved_tokens_STAR_,arg)){
return fif.stack_machine.exceptions.raise_reserved_word_redefinition_error.call(null,sm,arg);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.mode.update_state.call(null,fif.stack_machine.push_stack.call(null,sm,arg),cljs.core.assoc,new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.variable","set","fif.stdlib.variable/set",1067395899)));

}
}
}));
cljs.core._add_method.call(null,fif.stdlib.variable.variable_mode,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword("fif.stdlib.variable","local-variable","fif.stdlib.variable/local-variable",-2132337802),new cljs.core.Keyword(null,"op-state","op-state",1819264218),new cljs.core.Keyword("fif.stdlib.variable","set","fif.stdlib.variable/set",1067395899)], null),(function (sm){
var val = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var sym = cljs.core.peek.call(null,fif.stack_machine.get_stack.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.variable.exit_variable_mode.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.words.set_local_word_defn.call(null,sm,sym,fif.stack_machine.variable.wrap_local_variable.call(null,val),new cljs.core.Keyword(null,"variable?","variable?",-1902009648),new cljs.core.Keyword(null,"local","local",-1497766724)))));
}));
/**
 * Word function used to set a global variable to a provided value
 */
fif.stdlib.variable.setg = (function fif$stdlib$variable$setg(sm){
var vec__32524 = fif.stack_machine.get_stack.call(null,sm);
var val = cljs.core.nth.call(null,vec__32524,(0),null);
var sym = cljs.core.nth.call(null,vec__32524,(1),null);
if((!((sym instanceof cljs.core.Symbol)))){
return fif.stack_machine.exceptions.raise_validation_error.call(null,sm,(1),sym,"Variable name must be a symbol");
} else {
if(cljs.core.contains_QMARK_.call(null,fif.stdlib.reserved._STAR_reserved_tokens_STAR_,sym)){
return fif.stack_machine.exceptions.raise_reserved_word_redefinition_error.call(null,sm,sym);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,sm)),sym,fif.stack_machine.variable.wrap_global_variable.call(null,val),new cljs.core.Keyword(null,"variable?","variable?",-1902009648),new cljs.core.Keyword(null,"global","global",93595047)));

}
}
});
/**
 * Word function used to set a local variable to a provided value
 */
fif.stdlib.variable.setl = (function fif$stdlib$variable$setl(sm){
var vec__32527 = fif.stack_machine.get_stack.call(null,sm);
var val = cljs.core.nth.call(null,vec__32527,(0),null);
var sym = cljs.core.nth.call(null,vec__32527,(1),null);
if((!((sym instanceof cljs.core.Symbol)))){
return fif.stack_machine.exceptions.raise_validation_error.call(null,sm,(1),sym,"Variable name must be a symbol");
} else {
if(cljs.core.contains_QMARK_.call(null,fif.stdlib.reserved._STAR_reserved_tokens_STAR_,sym)){
return fif.stack_machine.exceptions.raise_reserved_word_redefinition_error.call(null,sm,sym);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.words.set_local_word_defn.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,sm)),sym,fif.stack_machine.variable.wrap_local_variable.call(null,val),new cljs.core.Keyword(null,"variable?","variable?",-1902009648),new cljs.core.Keyword(null,"local","local",-1497766724)));

}
}
});
/**
 * Stack Machine Import for variable-mode
 */
fif.stdlib.variable.import_stdlib_variable_mode = (function fif$stdlib$variable$import_stdlib_variable_mode(sm){
return fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.variable.arg_global_var_token,fif.stdlib.variable.start_global_variable,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"def <word> <val> -- Set global variable.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.variable","stdlib.variable",-577286945)),new cljs.core.Symbol(null,"setg","setg",-1763940325,null),fif.stdlib.variable.setg,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( wname val -- ) Set global variable.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.variable","stdlib.variable",-577286945)),fif.stdlib.variable.arg_local_var_token,fif.stdlib.variable.start_local_variable,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"let <word> <val> --  Set local variable.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.variable","stdlib.variable",-577286945)),new cljs.core.Symbol(null,"setl","setl",-1689516920,null),fif.stdlib.variable.setl,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( wname val -- ) Set local variable.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.variable","stdlib.variable",-577286945)),fif.stdlib.variable.variable_mode_flag,fif.stdlib.variable.variable_mode);
});
