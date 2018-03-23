// Compiled by ClojureScript 1.10.217 {}
goog.provide('website.utils');
goog.require('cljs.core');
website.utils.query_select = (function website$utils$query_select(var_args){
var G__37766 = arguments.length;
switch (G__37766) {
case 1:
return website.utils.query_select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website.utils.query_select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

website.utils.query_select.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return document.querySelector(selector);
});

website.utils.query_select.cljs$core$IFn$_invoke$arity$2 = (function (el,selector){
return el.querySelector(selector);
});

website.utils.query_select.cljs$lang$maxFixedArity = 2;

