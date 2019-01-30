// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.protocols.repl');
goog.require('cljs.core');

/**
 * @interface
 */
fif.protocols.repl.IRepl = function(){};

fif.protocols.repl.repl_init = (function fif$protocols$repl$repl_init(this$){
if((((!((this$ == null)))) && ((!((this$.fif$protocols$repl$IRepl$repl_init$arity$1 == null)))))){
return this$.fif$protocols$repl$IRepl$repl_init$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (fif.protocols.repl.repl_init[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (fif.protocols.repl.repl_init["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRepl.repl-init",this$);
}
}
}
});

fif.protocols.repl.repl_prompt = (function fif$protocols$repl$repl_prompt(this$){
if((((!((this$ == null)))) && ((!((this$.fif$protocols$repl$IRepl$repl_prompt$arity$1 == null)))))){
return this$.fif$protocols$repl$IRepl$repl_prompt$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (fif.protocols.repl.repl_prompt[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (fif.protocols.repl.repl_prompt["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRepl.repl-prompt",this$);
}
}
}
});

fif.protocols.repl.repl_read = (function fif$protocols$repl$repl_read(this$){
if((((!((this$ == null)))) && ((!((this$.fif$protocols$repl$IRepl$repl_read$arity$1 == null)))))){
return this$.fif$protocols$repl$IRepl$repl_read$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (fif.protocols.repl.repl_read[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (fif.protocols.repl.repl_read["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRepl.repl-read",this$);
}
}
}
});

fif.protocols.repl.repl_eval = (function fif$protocols$repl$repl_eval(this$,form){
if((((!((this$ == null)))) && ((!((this$.fif$protocols$repl$IRepl$repl_eval$arity$2 == null)))))){
return this$.fif$protocols$repl$IRepl$repl_eval$arity$2(this$,form);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (fif.protocols.repl.repl_eval[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,form);
} else {
var m__4348__auto____$1 = (fif.protocols.repl.repl_eval["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,form);
} else {
throw cljs.core.missing_protocol.call(null,"IRepl.repl-eval",this$);
}
}
}
});

fif.protocols.repl.repl_print = (function fif$protocols$repl$repl_print(this$,args){
if((((!((this$ == null)))) && ((!((this$.fif$protocols$repl$IRepl$repl_print$arity$2 == null)))))){
return this$.fif$protocols$repl$IRepl$repl_print$arity$2(this$,args);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (fif.protocols.repl.repl_print[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,args);
} else {
var m__4348__auto____$1 = (fif.protocols.repl.repl_print["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,args);
} else {
throw cljs.core.missing_protocol.call(null,"IRepl.repl-print",this$);
}
}
}
});

fif.protocols.repl.repl_loop = (function fif$protocols$repl$repl_loop(this$){
if((((!((this$ == null)))) && ((!((this$.fif$protocols$repl$IRepl$repl_loop$arity$1 == null)))))){
return this$.fif$protocols$repl$IRepl$repl_loop$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (fif.protocols.repl.repl_loop[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (fif.protocols.repl.repl_loop["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRepl.repl-loop",this$);
}
}
}
});

fif.protocols.repl.repl_run = (function fif$protocols$repl$repl_run(this$){
if((((!((this$ == null)))) && ((!((this$.fif$protocols$repl$IRepl$repl_run$arity$1 == null)))))){
return this$.fif$protocols$repl$IRepl$repl_run$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (fif.protocols.repl.repl_run[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (fif.protocols.repl.repl_run["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRepl.repl-run",this$);
}
}
}
});

