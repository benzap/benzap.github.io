// Compiled by ClojureScript 1.10.439 {}
goog.provide('website.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('website.utils');
goog.require('website.fif_repl');
goog.require('website.console');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof website !== 'undefined') && (typeof website.core !== 'undefined') && (typeof website.core.app_state !== 'undefined')){
} else {
website.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),""], null));
}
website.core.greeting = rum.core.build_defc.call(null,(function (){
var attrs36959 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,website.core.app_state));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs36959))?sablono.interpreter.attributes.call(null,attrs36959):null),((cljs.core.map_QMARK_.call(null,attrs36959))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36959)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"greeting");
var temp__5720__auto___36960 = website.utils.query_select.call(null,"#app");
if(cljs.core.truth_(temp__5720__auto___36960)){
var app_36961 = temp__5720__auto___36960;
rum.core.mount.call(null,website.core.greeting.call(null),document.app());
} else {
}
hljs.initHighlighting();
website.fif_repl.enable_fif_repls.call(null,".fif-repl");
if(cljs.core.truth_(website.utils.query_select.call(null,"#overlay-console"))){
} else {
website.console.mount_fif_console.call(null);

website.console.attach_event_global_keypress_console.call(null);
}
