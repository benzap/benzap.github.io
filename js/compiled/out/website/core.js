// Compiled by ClojureScript 1.10.217 {}
goog.provide('website.core');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('website.utils');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof website.core.app_state !== 'undefined'){
} else {
website.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),""], null));
}
website.core.greeting = rum.core.build_defc.call(null,(function (){
var attrs37770 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(rum.core.react.call(null,website.core.app_state));
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs37770))?sablono.interpreter.attributes.call(null,attrs37770):null),((cljs.core.map_QMARK_.call(null,attrs37770))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37770)], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"greeting");
var temp__5457__auto___37771 = website.utils.query_select.call(null,"#app");
if(cljs.core.truth_(temp__5457__auto___37771)){
var app_37772 = temp__5457__auto___37771;
rum.core.mount.call(null,website.core.greeting.call(null),document.app());
} else {
}
hljs.initHighlighting();
