// Compiled by ClojureScript 1.10.339 {}
goog.provide('fif.stack_machine');
goog.require('cljs.core');

/**
 * @interface
 */
fif.stack_machine.IStackMachine = function(){};

fif.stack_machine.push_stack_STAR_ = (function fif$stack_machine$push_stack_STAR_(this$,arg){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$push_stack_STAR_$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$push_stack_STAR_$arity$2(this$,arg);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.push_stack_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,arg);
} else {
var m__4244__auto____$1 = (fif.stack_machine.push_stack_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.push-stack*",this$);
}
}
}
});

fif.stack_machine.pop_stack = (function fif$stack_machine$pop_stack(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$pop_stack$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$pop_stack$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.pop_stack[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.pop_stack["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.pop-stack",this$);
}
}
}
});

fif.stack_machine.get_stack = (function fif$stack_machine$get_stack(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_stack$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_stack$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_stack[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_stack["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-stack",this$);
}
}
}
});

fif.stack_machine.set_stack = (function fif$stack_machine$set_stack(this$,stack){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_stack$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_stack$arity$2(this$,stack);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_stack[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,stack);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_stack["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,stack);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-stack",this$);
}
}
}
});

fif.stack_machine.clear_stack = (function fif$stack_machine$clear_stack(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$clear_stack$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$clear_stack$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.clear_stack[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.clear_stack["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.clear-stack",this$);
}
}
}
});

fif.stack_machine.push_ret = (function fif$stack_machine$push_ret(this$,ret){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$push_ret$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$push_ret$arity$2(this$,ret);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.push_ret[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,ret);
} else {
var m__4244__auto____$1 = (fif.stack_machine.push_ret["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,ret);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.push-ret",this$);
}
}
}
});

fif.stack_machine.pop_ret = (function fif$stack_machine$pop_ret(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$pop_ret$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$pop_ret$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.pop_ret[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.pop_ret["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.pop-ret",this$);
}
}
}
});

fif.stack_machine.get_ret = (function fif$stack_machine$get_ret(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_ret$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_ret$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_ret[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_ret["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-ret",this$);
}
}
}
});

fif.stack_machine.clear_ret = (function fif$stack_machine$clear_ret(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$clear_ret$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$clear_ret$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.clear_ret[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.clear_ret["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.clear-ret",this$);
}
}
}
});

fif.stack_machine.get_stash = (function fif$stack_machine$get_stash(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_stash$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_stash$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_stash[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_stash["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-stash",this$);
}
}
}
});

fif.stack_machine.set_stash = (function fif$stack_machine$set_stash(this$,st){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_stash$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_stash$arity$2(this$,st);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_stash[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,st);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_stash["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,st);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-stash",this$);
}
}
}
});

fif.stack_machine.clear_stash = (function fif$stack_machine$clear_stash(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$clear_stash$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$clear_stash$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.clear_stash[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.clear_stash["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.clear-stash",this$);
}
}
}
});

fif.stack_machine.get_mode_stash = (function fif$stack_machine$get_mode_stash(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_mode_stash$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_mode_stash$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_mode_stash[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_mode_stash["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-mode-stash",this$);
}
}
}
});

fif.stack_machine.set_mode_stash = (function fif$stack_machine$set_mode_stash(this$,stash){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_mode_stash$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_mode_stash$arity$2(this$,stash);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_mode_stash[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,stash);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_mode_stash["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,stash);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-mode-stash",this$);
}
}
}
});

fif.stack_machine.clear_mode_stash = (function fif$stack_machine$clear_mode_stash(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$clear_mode_stash$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$clear_mode_stash$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.clear_mode_stash[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.clear_mode_stash["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.clear-mode-stash",this$);
}
}
}
});

fif.stack_machine.get_scope = (function fif$stack_machine$get_scope(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_scope$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_scope$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_scope[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_scope["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-scope",this$);
}
}
}
});

fif.stack_machine.set_scope = (function fif$stack_machine$set_scope(this$,scope){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_scope$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_scope$arity$2(this$,scope);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_scope[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,scope);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_scope["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,scope);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-scope",this$);
}
}
}
});

fif.stack_machine.clear_scope = (function fif$stack_machine$clear_scope(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$clear_scope$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$clear_scope$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.clear_scope[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.clear_scope["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.clear-scope",this$);
}
}
}
});

fif.stack_machine.push_temp_macro = (function fif$stack_machine$push_temp_macro(this$,x){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$push_temp_macro$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$push_temp_macro$arity$2(this$,x);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.push_temp_macro[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,x);
} else {
var m__4244__auto____$1 = (fif.stack_machine.push_temp_macro["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.push-temp-macro",this$);
}
}
}
});

fif.stack_machine.pop_temp_macro = (function fif$stack_machine$pop_temp_macro(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$pop_temp_macro$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$pop_temp_macro$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.pop_temp_macro[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.pop_temp_macro["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.pop-temp-macro",this$);
}
}
}
});

fif.stack_machine.get_temp_macro = (function fif$stack_machine$get_temp_macro(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_temp_macro$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_temp_macro$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_temp_macro[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_temp_macro["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-temp-macro",this$);
}
}
}
});

fif.stack_machine.set_temp_macro = (function fif$stack_machine$set_temp_macro(this$,st){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_temp_macro$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_temp_macro$arity$2(this$,st);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_temp_macro[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,st);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_temp_macro["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,st);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-temp-macro",this$);
}
}
}
});

fif.stack_machine.pick_temp_macro = (function fif$stack_machine$pick_temp_macro(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$pick_temp_macro$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$pick_temp_macro$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.pick_temp_macro[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.pick_temp_macro["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.pick-temp-macro",this$);
}
}
}
});

fif.stack_machine.clear_temp_macro = (function fif$stack_machine$clear_temp_macro(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$clear_temp_macro$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$clear_temp_macro$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.clear_temp_macro[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.clear_temp_macro["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.clear-temp-macro",this$);
}
}
}
});

fif.stack_machine.set_word_STAR_ = (function fif$stack_machine$set_word_STAR_(this$,wname,wbody){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_word_STAR_$arity$3 == null))))){
return this$.fif$stack_machine$IStackMachine$set_word_STAR_$arity$3(this$,wname,wbody);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_word_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,wname,wbody);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_word_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,wname,wbody);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-word*",this$);
}
}
}
});

fif.stack_machine.get_word = (function fif$stack_machine$get_word(this$,wname){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_word$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$get_word$arity$2(this$,wname);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_word[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,wname);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_word["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,wname);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-word",this$);
}
}
}
});

fif.stack_machine.get_word_listing = (function fif$stack_machine$get_word_listing(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_word_listing$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_word_listing$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_word_listing[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_word_listing["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-word-listing",this$);
}
}
}
});

fif.stack_machine.set_variable = (function fif$stack_machine$set_variable(this$,wname,value){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_variable$arity$3 == null))))){
return this$.fif$stack_machine$IStackMachine$set_variable$arity$3(this$,wname,value);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_variable[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,wname,value);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_variable["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,wname,value);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-variable",this$);
}
}
}
});

fif.stack_machine.set_word_metadata = (function fif$stack_machine$set_word_metadata(this$,wname,wmeta){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_word_metadata$arity$3 == null))))){
return this$.fif$stack_machine$IStackMachine$set_word_metadata$arity$3(this$,wname,wmeta);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_word_metadata[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,wname,wmeta);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_word_metadata["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,wname,wmeta);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-word-metadata",this$);
}
}
}
});

fif.stack_machine.get_word_metadata = (function fif$stack_machine$get_word_metadata(this$,wname){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_word_metadata$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$get_word_metadata$arity$2(this$,wname);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_word_metadata[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,wname);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_word_metadata["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,wname);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-word-metadata",this$);
}
}
}
});

fif.stack_machine.set_mode = (function fif$stack_machine$set_mode(this$,flag,modefn){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_mode$arity$3 == null))))){
return this$.fif$stack_machine$IStackMachine$set_mode$arity$3(this$,flag,modefn);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_mode[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,flag,modefn);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_mode["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,flag,modefn);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-mode",this$);
}
}
}
});

fif.stack_machine.remove_mode = (function fif$stack_machine$remove_mode(this$,flag){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$remove_mode$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$remove_mode$arity$2(this$,flag);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.remove_mode[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,flag);
} else {
var m__4244__auto____$1 = (fif.stack_machine.remove_mode["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,flag);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.remove-mode",this$);
}
}
}
});

fif.stack_machine.push_flag = (function fif$stack_machine$push_flag(this$,flag){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$push_flag$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$push_flag$arity$2(this$,flag);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.push_flag[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,flag);
} else {
var m__4244__auto____$1 = (fif.stack_machine.push_flag["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,flag);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.push-flag",this$);
}
}
}
});

fif.stack_machine.pop_flag = (function fif$stack_machine$pop_flag(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$pop_flag$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$pop_flag$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.pop_flag[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.pop_flag["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.pop-flag",this$);
}
}
}
});

fif.stack_machine.get_flags = (function fif$stack_machine$get_flags(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_flags$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_flags$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_flags[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_flags["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-flags",this$);
}
}
}
});

fif.stack_machine.set_flags = (function fif$stack_machine$set_flags(this$,flags){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_flags$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_flags$arity$2(this$,flags);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_flags[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,flags);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_flags["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,flags);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-flags",this$);
}
}
}
});

fif.stack_machine.clear_flags = (function fif$stack_machine$clear_flags(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$clear_flags$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$clear_flags$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.clear_flags[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.clear_flags["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.clear-flags",this$);
}
}
}
});

fif.stack_machine.enqueue_code = (function fif$stack_machine$enqueue_code(this$,arg){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$enqueue_code$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$enqueue_code$arity$2(this$,arg);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.enqueue_code[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,arg);
} else {
var m__4244__auto____$1 = (fif.stack_machine.enqueue_code["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,arg);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.enqueue-code",this$);
}
}
}
});

fif.stack_machine.dequeue_code = (function fif$stack_machine$dequeue_code(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$dequeue_code$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$dequeue_code$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.dequeue_code[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.dequeue_code["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.dequeue-code",this$);
}
}
}
});

fif.stack_machine.set_code = (function fif$stack_machine$set_code(this$,stack){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_code$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_code$arity$2(this$,stack);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_code[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,stack);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_code["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,stack);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-code",this$);
}
}
}
});

fif.stack_machine.get_code = (function fif$stack_machine$get_code(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_code$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_code$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_code[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_code["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-code",this$);
}
}
}
});

fif.stack_machine.clear_code = (function fif$stack_machine$clear_code(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$clear_code$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$clear_code$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.clear_code[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.clear_code["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.clear-code",this$);
}
}
}
});

fif.stack_machine.get_step_max = (function fif$stack_machine$get_step_max(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_step_max$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_step_max$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_step_max[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_step_max["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-step-max",this$);
}
}
}
});

fif.stack_machine.set_step_max = (function fif$stack_machine$set_step_max(this$,m){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_step_max$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_step_max$arity$2(this$,m);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_step_max[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,m);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_step_max["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,m);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-step-max",this$);
}
}
}
});

fif.stack_machine.inc_step = (function fif$stack_machine$inc_step(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$inc_step$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$inc_step$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.inc_step[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.inc_step["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.inc-step",this$);
}
}
}
});

fif.stack_machine.set_step_num = (function fif$stack_machine$set_step_num(this$,n){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_step_num$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_step_num$arity$2(this$,n);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_step_num[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,n);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_step_num["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,n);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-step-num",this$);
}
}
}
});

fif.stack_machine.get_step_num = (function fif$stack_machine$get_step_num(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_step_num$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_step_num$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_step_num[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_step_num["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-step-num",this$);
}
}
}
});

fif.stack_machine.enable_debug = (function fif$stack_machine$enable_debug(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$enable_debug$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$enable_debug$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.enable_debug[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.enable_debug["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.enable-debug",this$);
}
}
}
});

fif.stack_machine.disable_debug = (function fif$stack_machine$disable_debug(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$disable_debug$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$disable_debug$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.disable_debug[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.disable_debug["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.disable-debug",this$);
}
}
}
});

fif.stack_machine.is_debug_mode_QMARK_ = (function fif$stack_machine$is_debug_mode_QMARK_(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$is_debug_mode_QMARK_$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$is_debug_mode_QMARK_$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.is_debug_mode_QMARK_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.is_debug_mode_QMARK_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.is-debug-mode?",this$);
}
}
}
});

fif.stack_machine.get_system_error_handler = (function fif$stack_machine$get_system_error_handler(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_system_error_handler$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_system_error_handler$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_system_error_handler[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_system_error_handler["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-system-error-handler",this$);
}
}
}
});

fif.stack_machine.set_system_error_handler = (function fif$stack_machine$set_system_error_handler(this$,err_handler){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_system_error_handler$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_system_error_handler$arity$2(this$,err_handler);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_system_error_handler[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,err_handler);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_system_error_handler["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,err_handler);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-system-error-handler",this$);
}
}
}
});

fif.stack_machine.get_stack_error_handler = (function fif$stack_machine$get_stack_error_handler(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$get_stack_error_handler$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$get_stack_error_handler$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.get_stack_error_handler[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.get_stack_error_handler["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.get-stack-error-handler",this$);
}
}
}
});

fif.stack_machine.set_stack_error_handler = (function fif$stack_machine$set_stack_error_handler(this$,err_handler){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$set_stack_error_handler$arity$2 == null))))){
return this$.fif$stack_machine$IStackMachine$set_stack_error_handler$arity$2(this$,err_handler);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.set_stack_error_handler[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$,err_handler);
} else {
var m__4244__auto____$1 = (fif.stack_machine.set_stack_error_handler["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$,err_handler);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.set-stack-error-handler",this$);
}
}
}
});

fif.stack_machine.step = (function fif$stack_machine$step(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$step$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$step$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.step[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.step["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.step",this$);
}
}
}
});

fif.stack_machine.run = (function fif$stack_machine$run(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$run$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$run$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.run[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.run["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.run",this$);
}
}
}
});

fif.stack_machine.halt = (function fif$stack_machine$halt(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$halt$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$halt$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.halt[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.halt["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.halt",this$);
}
}
}
});

fif.stack_machine.continue$ = (function fif$stack_machine$continue(this$){
if(((!((this$ == null))) && (!((this$.fif$stack_machine$IStackMachine$continue$arity$1 == null))))){
return this$.fif$stack_machine$IStackMachine$continue$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (fif.stack_machine.continue$[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (fif.stack_machine.continue$["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStackMachine.continue",this$);
}
}
}
});

fif.stack_machine.push_stack = (function fif$stack_machine$push_stack(var_args){
var G__37080 = arguments.length;
switch (G__37080) {
case 2:
return fif.stack_machine.push_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fif.stack_machine.push_stack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fif.stack_machine.push_stack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___37082 = arguments.length;
var i__4532__auto___37083 = (0);
while(true){
if((i__4532__auto___37083 < len__4531__auto___37082)){
args_arr__4546__auto__.push((arguments[i__4532__auto___37083]));

var G__37084 = (i__4532__auto___37083 + (1));
i__4532__auto___37083 = G__37084;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((4)),(0),null));
return fif.stack_machine.push_stack.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4547__auto__);

}
});

fif.stack_machine.push_stack.cljs$core$IFn$_invoke$arity$2 = (function (sm,x){
return fif.stack_machine.push_stack_STAR_.call(null,sm,x);
});

fif.stack_machine.push_stack.cljs$core$IFn$_invoke$arity$3 = (function (sm,x1,x2){
return fif.stack_machine.push_stack_STAR_.call(null,fif.stack_machine.push_stack_STAR_.call(null,sm,x1),x2);
});

fif.stack_machine.push_stack.cljs$core$IFn$_invoke$arity$4 = (function (sm,x1,x2,x3){
return fif.stack_machine.push_stack_STAR_.call(null,fif.stack_machine.push_stack_STAR_.call(null,fif.stack_machine.push_stack_STAR_.call(null,sm,x1),x2),x3);
});

fif.stack_machine.push_stack.cljs$core$IFn$_invoke$arity$variadic = (function (sm,x1,x2,x3,xs){
var $ = fif.stack_machine.push_stack_STAR_.call(null,fif.stack_machine.push_stack_STAR_.call(null,fif.stack_machine.push_stack_STAR_.call(null,sm,x1),x2),x3);
return cljs.core.reduce.call(null,fif.stack_machine.push_stack_STAR_,$,xs);
});

/** @this {Function} */
fif.stack_machine.push_stack.cljs$lang$applyTo = (function (seq37075){
var G__37076 = cljs.core.first.call(null,seq37075);
var seq37075__$1 = cljs.core.next.call(null,seq37075);
var G__37077 = cljs.core.first.call(null,seq37075__$1);
var seq37075__$2 = cljs.core.next.call(null,seq37075__$1);
var G__37078 = cljs.core.first.call(null,seq37075__$2);
var seq37075__$3 = cljs.core.next.call(null,seq37075__$2);
var G__37079 = cljs.core.first.call(null,seq37075__$3);
var seq37075__$4 = cljs.core.next.call(null,seq37075__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37076,G__37077,G__37078,G__37079,seq37075__$4);
});

fif.stack_machine.push_stack.cljs$lang$maxFixedArity = (4);

fif.stack_machine.update_code = (function fif$stack_machine$update_code(var_args){
var args__4534__auto__ = [];
var len__4531__auto___37088 = arguments.length;
var i__4532__auto___37089 = (0);
while(true){
if((i__4532__auto___37089 < len__4531__auto___37088)){
args__4534__auto__.push((arguments[i__4532__auto___37089]));

var G__37090 = (i__4532__auto___37089 + (1));
i__4532__auto___37089 = G__37090;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fif.stack_machine.update_code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fif.stack_machine.update_code.cljs$core$IFn$_invoke$arity$variadic = (function (sm,f,args){
var code = fif.stack_machine.get_code.call(null,sm);
return fif.stack_machine.set_code.call(null,sm,cljs.core.apply.call(null,f,code,args));
});

fif.stack_machine.update_code.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.stack_machine.update_code.cljs$lang$applyTo = (function (seq37085){
var G__37086 = cljs.core.first.call(null,seq37085);
var seq37085__$1 = cljs.core.next.call(null,seq37085);
var G__37087 = cljs.core.first.call(null,seq37085__$1);
var seq37085__$2 = cljs.core.next.call(null,seq37085__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37086,G__37087,seq37085__$2);
});

fif.stack_machine.set_word = (function fif$stack_machine$set_word(sm,wname,wfunc){
return fif.stack_machine.set_word_STAR_.call(null,sm,wname,wfunc);
});
