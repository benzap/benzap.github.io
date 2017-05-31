// Compiled by ClojureScript 1.9.542 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__41439__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41436 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41437 = cljs.core.seq.call(null,vec__41436);
var first__41438 = cljs.core.first.call(null,seq__41437);
var seq__41437__$1 = cljs.core.next.call(null,seq__41437);
var tag = first__41438;
var body = seq__41437__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41440__i = 0, G__41440__a = new Array(arguments.length -  0);
while (G__41440__i < G__41440__a.length) {G__41440__a[G__41440__i] = arguments[G__41440__i + 0]; ++G__41440__i;}
  args = new cljs.core.IndexedSeq(G__41440__a,0,null);
} 
return G__41439__delegate.call(this,args);};
G__41439.cljs$lang$maxFixedArity = 0;
G__41439.cljs$lang$applyTo = (function (arglist__41441){
var args = cljs.core.seq(arglist__41441);
return G__41439__delegate(args);
});
G__41439.cljs$core$IFn$_invoke$arity$variadic = G__41439__delegate;
return G__41439;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__35997__auto__ = (function sablono$core$update_arglists_$_iter__41446(s__41447){
return (new cljs.core.LazySeq(null,(function (){
var s__41447__$1 = s__41447;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41447__$1);
if(temp__4657__auto__){
var s__41447__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41447__$2)){
var c__35995__auto__ = cljs.core.chunk_first.call(null,s__41447__$2);
var size__35996__auto__ = cljs.core.count.call(null,c__35995__auto__);
var b__41449 = cljs.core.chunk_buffer.call(null,size__35996__auto__);
if((function (){var i__41448 = (0);
while(true){
if((i__41448 < size__35996__auto__)){
var args = cljs.core._nth.call(null,c__35995__auto__,i__41448);
cljs.core.chunk_append.call(null,b__41449,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41450 = (i__41448 + (1));
i__41448 = G__41450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41449),sablono$core$update_arglists_$_iter__41446.call(null,cljs.core.chunk_rest.call(null,s__41447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41449),null);
}
} else {
var args = cljs.core.first.call(null,s__41447__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41446.call(null,cljs.core.rest.call(null,s__41447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35997__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36329__auto__ = [];
var len__36322__auto___41456 = arguments.length;
var i__36323__auto___41457 = (0);
while(true){
if((i__36323__auto___41457 < len__36322__auto___41456)){
args__36329__auto__.push((arguments[i__36323__auto___41457]));

var G__41458 = (i__36323__auto___41457 + (1));
i__36323__auto___41457 = G__41458;
continue;
} else {
}
break;
}

var argseq__36330__auto__ = ((((0) < args__36329__auto__.length))?(new cljs.core.IndexedSeq(args__36329__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36330__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__35997__auto__ = (function sablono$core$iter__41452(s__41453){
return (new cljs.core.LazySeq(null,(function (){
var s__41453__$1 = s__41453;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41453__$1);
if(temp__4657__auto__){
var s__41453__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41453__$2)){
var c__35995__auto__ = cljs.core.chunk_first.call(null,s__41453__$2);
var size__35996__auto__ = cljs.core.count.call(null,c__35995__auto__);
var b__41455 = cljs.core.chunk_buffer.call(null,size__35996__auto__);
if((function (){var i__41454 = (0);
while(true){
if((i__41454 < size__35996__auto__)){
var style = cljs.core._nth.call(null,c__35995__auto__,i__41454);
cljs.core.chunk_append.call(null,b__41455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41459 = (i__41454 + (1));
i__41454 = G__41459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41455),sablono$core$iter__41452.call(null,cljs.core.chunk_rest.call(null,s__41453__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41455),null);
}
} else {
var style = cljs.core.first.call(null,s__41453__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41452.call(null,cljs.core.rest.call(null,s__41453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35997__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq41451){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41451));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to41460 = (function sablono$core$link_to41460(var_args){
var args__36329__auto__ = [];
var len__36322__auto___41463 = arguments.length;
var i__36323__auto___41464 = (0);
while(true){
if((i__36323__auto___41464 < len__36322__auto___41463)){
args__36329__auto__.push((arguments[i__36323__auto___41464]));

var G__41465 = (i__36323__auto___41464 + (1));
i__36323__auto___41464 = G__41465;
continue;
} else {
}
break;
}

var argseq__36330__auto__ = ((((1) < args__36329__auto__.length))?(new cljs.core.IndexedSeq(args__36329__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41460.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36330__auto__);
});

sablono.core.link_to41460.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41460.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41460.cljs$lang$applyTo = (function (seq41461){
var G__41462 = cljs.core.first.call(null,seq41461);
var seq41461__$1 = cljs.core.next.call(null,seq41461);
return sablono.core.link_to41460.cljs$core$IFn$_invoke$arity$variadic(G__41462,seq41461__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41460);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41466 = (function sablono$core$mail_to41466(var_args){
var args__36329__auto__ = [];
var len__36322__auto___41473 = arguments.length;
var i__36323__auto___41474 = (0);
while(true){
if((i__36323__auto___41474 < len__36322__auto___41473)){
args__36329__auto__.push((arguments[i__36323__auto___41474]));

var G__41475 = (i__36323__auto___41474 + (1));
i__36323__auto___41474 = G__41475;
continue;
} else {
}
break;
}

var argseq__36330__auto__ = ((((1) < args__36329__auto__.length))?(new cljs.core.IndexedSeq(args__36329__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41466.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36330__auto__);
});

sablono.core.mail_to41466.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41469){
var vec__41470 = p__41469;
var content = cljs.core.nth.call(null,vec__41470,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35209__auto__ = content;
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41466.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41466.cljs$lang$applyTo = (function (seq41467){
var G__41468 = cljs.core.first.call(null,seq41467);
var seq41467__$1 = cljs.core.next.call(null,seq41467);
return sablono.core.mail_to41466.cljs$core$IFn$_invoke$arity$variadic(G__41468,seq41467__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41466);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41476 = (function sablono$core$unordered_list41476(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__35997__auto__ = (function sablono$core$unordered_list41476_$_iter__41481(s__41482){
return (new cljs.core.LazySeq(null,(function (){
var s__41482__$1 = s__41482;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41482__$1);
if(temp__4657__auto__){
var s__41482__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41482__$2)){
var c__35995__auto__ = cljs.core.chunk_first.call(null,s__41482__$2);
var size__35996__auto__ = cljs.core.count.call(null,c__35995__auto__);
var b__41484 = cljs.core.chunk_buffer.call(null,size__35996__auto__);
if((function (){var i__41483 = (0);
while(true){
if((i__41483 < size__35996__auto__)){
var x = cljs.core._nth.call(null,c__35995__auto__,i__41483);
cljs.core.chunk_append.call(null,b__41484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41485 = (i__41483 + (1));
i__41483 = G__41485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41484),sablono$core$unordered_list41476_$_iter__41481.call(null,cljs.core.chunk_rest.call(null,s__41482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41484),null);
}
} else {
var x = cljs.core.first.call(null,s__41482__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41476_$_iter__41481.call(null,cljs.core.rest.call(null,s__41482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35997__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41476);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41486 = (function sablono$core$ordered_list41486(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__35997__auto__ = (function sablono$core$ordered_list41486_$_iter__41491(s__41492){
return (new cljs.core.LazySeq(null,(function (){
var s__41492__$1 = s__41492;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41492__$1);
if(temp__4657__auto__){
var s__41492__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41492__$2)){
var c__35995__auto__ = cljs.core.chunk_first.call(null,s__41492__$2);
var size__35996__auto__ = cljs.core.count.call(null,c__35995__auto__);
var b__41494 = cljs.core.chunk_buffer.call(null,size__35996__auto__);
if((function (){var i__41493 = (0);
while(true){
if((i__41493 < size__35996__auto__)){
var x = cljs.core._nth.call(null,c__35995__auto__,i__41493);
cljs.core.chunk_append.call(null,b__41494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41495 = (i__41493 + (1));
i__41493 = G__41495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41494),sablono$core$ordered_list41486_$_iter__41491.call(null,cljs.core.chunk_rest.call(null,s__41492__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41494),null);
}
} else {
var x = cljs.core.first.call(null,s__41492__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41486_$_iter__41491.call(null,cljs.core.rest.call(null,s__41492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35997__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list41486);
/**
 * Create an image element.
 */
sablono.core.image41496 = (function sablono$core$image41496(var_args){
var args41497 = [];
var len__36322__auto___41500 = arguments.length;
var i__36323__auto___41501 = (0);
while(true){
if((i__36323__auto___41501 < len__36322__auto___41500)){
args41497.push((arguments[i__36323__auto___41501]));

var G__41502 = (i__36323__auto___41501 + (1));
i__36323__auto___41501 = G__41502;
continue;
} else {
}
break;
}

var G__41499 = args41497.length;
switch (G__41499) {
case 1:
return sablono.core.image41496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41497.length)].join('')));

}
});

sablono.core.image41496.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image41496.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image41496.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image41496);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__41504_SHARP_,p2__41505_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41504_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41505_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__41506_SHARP_,p2__41507_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41506_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41507_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35209__auto__ = value;
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field41508 = (function sablono$core$color_field41508(var_args){
var args41509 = [];
var len__36322__auto___41576 = arguments.length;
var i__36323__auto___41577 = (0);
while(true){
if((i__36323__auto___41577 < len__36322__auto___41576)){
args41509.push((arguments[i__36323__auto___41577]));

var G__41578 = (i__36323__auto___41577 + (1));
i__36323__auto___41577 = G__41578;
continue;
} else {
}
break;
}

var G__41511 = args41509.length;
switch (G__41511) {
case 1:
return sablono.core.color_field41508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41509.length)].join('')));

}
});

sablono.core.color_field41508.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.color_field41508.call(null,name__41423__auto__,null);
});

sablono.core.color_field41508.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.color_field41508.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field41508);

/**
 * Creates a date input field.
 */
sablono.core.date_field41512 = (function sablono$core$date_field41512(var_args){
var args41513 = [];
var len__36322__auto___41580 = arguments.length;
var i__36323__auto___41581 = (0);
while(true){
if((i__36323__auto___41581 < len__36322__auto___41580)){
args41513.push((arguments[i__36323__auto___41581]));

var G__41582 = (i__36323__auto___41581 + (1));
i__36323__auto___41581 = G__41582;
continue;
} else {
}
break;
}

var G__41515 = args41513.length;
switch (G__41515) {
case 1:
return sablono.core.date_field41512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41513.length)].join('')));

}
});

sablono.core.date_field41512.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.date_field41512.call(null,name__41423__auto__,null);
});

sablono.core.date_field41512.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.date_field41512.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field41512);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41516 = (function sablono$core$datetime_field41516(var_args){
var args41517 = [];
var len__36322__auto___41584 = arguments.length;
var i__36323__auto___41585 = (0);
while(true){
if((i__36323__auto___41585 < len__36322__auto___41584)){
args41517.push((arguments[i__36323__auto___41585]));

var G__41586 = (i__36323__auto___41585 + (1));
i__36323__auto___41585 = G__41586;
continue;
} else {
}
break;
}

var G__41519 = args41517.length;
switch (G__41519) {
case 1:
return sablono.core.datetime_field41516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41517.length)].join('')));

}
});

sablono.core.datetime_field41516.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.datetime_field41516.call(null,name__41423__auto__,null);
});

sablono.core.datetime_field41516.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.datetime_field41516.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field41516);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41520 = (function sablono$core$datetime_local_field41520(var_args){
var args41521 = [];
var len__36322__auto___41588 = arguments.length;
var i__36323__auto___41589 = (0);
while(true){
if((i__36323__auto___41589 < len__36322__auto___41588)){
args41521.push((arguments[i__36323__auto___41589]));

var G__41590 = (i__36323__auto___41589 + (1));
i__36323__auto___41589 = G__41590;
continue;
} else {
}
break;
}

var G__41523 = args41521.length;
switch (G__41523) {
case 1:
return sablono.core.datetime_local_field41520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41521.length)].join('')));

}
});

sablono.core.datetime_local_field41520.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.datetime_local_field41520.call(null,name__41423__auto__,null);
});

sablono.core.datetime_local_field41520.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.datetime_local_field41520.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field41520);

/**
 * Creates a email input field.
 */
sablono.core.email_field41524 = (function sablono$core$email_field41524(var_args){
var args41525 = [];
var len__36322__auto___41592 = arguments.length;
var i__36323__auto___41593 = (0);
while(true){
if((i__36323__auto___41593 < len__36322__auto___41592)){
args41525.push((arguments[i__36323__auto___41593]));

var G__41594 = (i__36323__auto___41593 + (1));
i__36323__auto___41593 = G__41594;
continue;
} else {
}
break;
}

var G__41527 = args41525.length;
switch (G__41527) {
case 1:
return sablono.core.email_field41524.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41525.length)].join('')));

}
});

sablono.core.email_field41524.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.email_field41524.call(null,name__41423__auto__,null);
});

sablono.core.email_field41524.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.email_field41524.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field41524);

/**
 * Creates a file input field.
 */
sablono.core.file_field41528 = (function sablono$core$file_field41528(var_args){
var args41529 = [];
var len__36322__auto___41596 = arguments.length;
var i__36323__auto___41597 = (0);
while(true){
if((i__36323__auto___41597 < len__36322__auto___41596)){
args41529.push((arguments[i__36323__auto___41597]));

var G__41598 = (i__36323__auto___41597 + (1));
i__36323__auto___41597 = G__41598;
continue;
} else {
}
break;
}

var G__41531 = args41529.length;
switch (G__41531) {
case 1:
return sablono.core.file_field41528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41529.length)].join('')));

}
});

sablono.core.file_field41528.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.file_field41528.call(null,name__41423__auto__,null);
});

sablono.core.file_field41528.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.file_field41528.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field41528);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41532 = (function sablono$core$hidden_field41532(var_args){
var args41533 = [];
var len__36322__auto___41600 = arguments.length;
var i__36323__auto___41601 = (0);
while(true){
if((i__36323__auto___41601 < len__36322__auto___41600)){
args41533.push((arguments[i__36323__auto___41601]));

var G__41602 = (i__36323__auto___41601 + (1));
i__36323__auto___41601 = G__41602;
continue;
} else {
}
break;
}

var G__41535 = args41533.length;
switch (G__41535) {
case 1:
return sablono.core.hidden_field41532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41533.length)].join('')));

}
});

sablono.core.hidden_field41532.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.hidden_field41532.call(null,name__41423__auto__,null);
});

sablono.core.hidden_field41532.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.hidden_field41532.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field41532);

/**
 * Creates a month input field.
 */
sablono.core.month_field41536 = (function sablono$core$month_field41536(var_args){
var args41537 = [];
var len__36322__auto___41604 = arguments.length;
var i__36323__auto___41605 = (0);
while(true){
if((i__36323__auto___41605 < len__36322__auto___41604)){
args41537.push((arguments[i__36323__auto___41605]));

var G__41606 = (i__36323__auto___41605 + (1));
i__36323__auto___41605 = G__41606;
continue;
} else {
}
break;
}

var G__41539 = args41537.length;
switch (G__41539) {
case 1:
return sablono.core.month_field41536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41537.length)].join('')));

}
});

sablono.core.month_field41536.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.month_field41536.call(null,name__41423__auto__,null);
});

sablono.core.month_field41536.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.month_field41536.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field41536);

/**
 * Creates a number input field.
 */
sablono.core.number_field41540 = (function sablono$core$number_field41540(var_args){
var args41541 = [];
var len__36322__auto___41608 = arguments.length;
var i__36323__auto___41609 = (0);
while(true){
if((i__36323__auto___41609 < len__36322__auto___41608)){
args41541.push((arguments[i__36323__auto___41609]));

var G__41610 = (i__36323__auto___41609 + (1));
i__36323__auto___41609 = G__41610;
continue;
} else {
}
break;
}

var G__41543 = args41541.length;
switch (G__41543) {
case 1:
return sablono.core.number_field41540.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41540.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41541.length)].join('')));

}
});

sablono.core.number_field41540.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.number_field41540.call(null,name__41423__auto__,null);
});

sablono.core.number_field41540.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.number_field41540.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field41540);

/**
 * Creates a password input field.
 */
sablono.core.password_field41544 = (function sablono$core$password_field41544(var_args){
var args41545 = [];
var len__36322__auto___41612 = arguments.length;
var i__36323__auto___41613 = (0);
while(true){
if((i__36323__auto___41613 < len__36322__auto___41612)){
args41545.push((arguments[i__36323__auto___41613]));

var G__41614 = (i__36323__auto___41613 + (1));
i__36323__auto___41613 = G__41614;
continue;
} else {
}
break;
}

var G__41547 = args41545.length;
switch (G__41547) {
case 1:
return sablono.core.password_field41544.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41544.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41545.length)].join('')));

}
});

sablono.core.password_field41544.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.password_field41544.call(null,name__41423__auto__,null);
});

sablono.core.password_field41544.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.password_field41544.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field41544);

/**
 * Creates a range input field.
 */
sablono.core.range_field41548 = (function sablono$core$range_field41548(var_args){
var args41549 = [];
var len__36322__auto___41616 = arguments.length;
var i__36323__auto___41617 = (0);
while(true){
if((i__36323__auto___41617 < len__36322__auto___41616)){
args41549.push((arguments[i__36323__auto___41617]));

var G__41618 = (i__36323__auto___41617 + (1));
i__36323__auto___41617 = G__41618;
continue;
} else {
}
break;
}

var G__41551 = args41549.length;
switch (G__41551) {
case 1:
return sablono.core.range_field41548.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41548.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41549.length)].join('')));

}
});

sablono.core.range_field41548.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.range_field41548.call(null,name__41423__auto__,null);
});

sablono.core.range_field41548.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.range_field41548.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field41548);

/**
 * Creates a search input field.
 */
sablono.core.search_field41552 = (function sablono$core$search_field41552(var_args){
var args41553 = [];
var len__36322__auto___41620 = arguments.length;
var i__36323__auto___41621 = (0);
while(true){
if((i__36323__auto___41621 < len__36322__auto___41620)){
args41553.push((arguments[i__36323__auto___41621]));

var G__41622 = (i__36323__auto___41621 + (1));
i__36323__auto___41621 = G__41622;
continue;
} else {
}
break;
}

var G__41555 = args41553.length;
switch (G__41555) {
case 1:
return sablono.core.search_field41552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41553.length)].join('')));

}
});

sablono.core.search_field41552.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.search_field41552.call(null,name__41423__auto__,null);
});

sablono.core.search_field41552.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.search_field41552.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field41552);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41556 = (function sablono$core$tel_field41556(var_args){
var args41557 = [];
var len__36322__auto___41624 = arguments.length;
var i__36323__auto___41625 = (0);
while(true){
if((i__36323__auto___41625 < len__36322__auto___41624)){
args41557.push((arguments[i__36323__auto___41625]));

var G__41626 = (i__36323__auto___41625 + (1));
i__36323__auto___41625 = G__41626;
continue;
} else {
}
break;
}

var G__41559 = args41557.length;
switch (G__41559) {
case 1:
return sablono.core.tel_field41556.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41556.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41557.length)].join('')));

}
});

sablono.core.tel_field41556.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.tel_field41556.call(null,name__41423__auto__,null);
});

sablono.core.tel_field41556.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.tel_field41556.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field41556);

/**
 * Creates a text input field.
 */
sablono.core.text_field41560 = (function sablono$core$text_field41560(var_args){
var args41561 = [];
var len__36322__auto___41628 = arguments.length;
var i__36323__auto___41629 = (0);
while(true){
if((i__36323__auto___41629 < len__36322__auto___41628)){
args41561.push((arguments[i__36323__auto___41629]));

var G__41630 = (i__36323__auto___41629 + (1));
i__36323__auto___41629 = G__41630;
continue;
} else {
}
break;
}

var G__41563 = args41561.length;
switch (G__41563) {
case 1:
return sablono.core.text_field41560.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41560.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41561.length)].join('')));

}
});

sablono.core.text_field41560.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.text_field41560.call(null,name__41423__auto__,null);
});

sablono.core.text_field41560.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.text_field41560.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field41560);

/**
 * Creates a time input field.
 */
sablono.core.time_field41564 = (function sablono$core$time_field41564(var_args){
var args41565 = [];
var len__36322__auto___41632 = arguments.length;
var i__36323__auto___41633 = (0);
while(true){
if((i__36323__auto___41633 < len__36322__auto___41632)){
args41565.push((arguments[i__36323__auto___41633]));

var G__41634 = (i__36323__auto___41633 + (1));
i__36323__auto___41633 = G__41634;
continue;
} else {
}
break;
}

var G__41567 = args41565.length;
switch (G__41567) {
case 1:
return sablono.core.time_field41564.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41564.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41565.length)].join('')));

}
});

sablono.core.time_field41564.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.time_field41564.call(null,name__41423__auto__,null);
});

sablono.core.time_field41564.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.time_field41564.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field41564);

/**
 * Creates a url input field.
 */
sablono.core.url_field41568 = (function sablono$core$url_field41568(var_args){
var args41569 = [];
var len__36322__auto___41636 = arguments.length;
var i__36323__auto___41637 = (0);
while(true){
if((i__36323__auto___41637 < len__36322__auto___41636)){
args41569.push((arguments[i__36323__auto___41637]));

var G__41638 = (i__36323__auto___41637 + (1));
i__36323__auto___41637 = G__41638;
continue;
} else {
}
break;
}

var G__41571 = args41569.length;
switch (G__41571) {
case 1:
return sablono.core.url_field41568.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41568.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41569.length)].join('')));

}
});

sablono.core.url_field41568.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.url_field41568.call(null,name__41423__auto__,null);
});

sablono.core.url_field41568.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.url_field41568.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field41568);

/**
 * Creates a week input field.
 */
sablono.core.week_field41572 = (function sablono$core$week_field41572(var_args){
var args41573 = [];
var len__36322__auto___41640 = arguments.length;
var i__36323__auto___41641 = (0);
while(true){
if((i__36323__auto___41641 < len__36322__auto___41640)){
args41573.push((arguments[i__36323__auto___41641]));

var G__41642 = (i__36323__auto___41641 + (1));
i__36323__auto___41641 = G__41642;
continue;
} else {
}
break;
}

var G__41575 = args41573.length;
switch (G__41575) {
case 1:
return sablono.core.week_field41572.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41572.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41573.length)].join('')));

}
});

sablono.core.week_field41572.cljs$core$IFn$_invoke$arity$1 = (function (name__41423__auto__){
return sablono.core.week_field41572.call(null,name__41423__auto__,null);
});

sablono.core.week_field41572.cljs$core$IFn$_invoke$arity$2 = (function (name__41423__auto__,value__41424__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41423__auto__,value__41424__auto__);
});

sablono.core.week_field41572.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field41572);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41644 = (function sablono$core$check_box41644(var_args){
var args41645 = [];
var len__36322__auto___41648 = arguments.length;
var i__36323__auto___41649 = (0);
while(true){
if((i__36323__auto___41649 < len__36322__auto___41648)){
args41645.push((arguments[i__36323__auto___41649]));

var G__41650 = (i__36323__auto___41649 + (1));
i__36323__auto___41649 = G__41650;
continue;
} else {
}
break;
}

var G__41647 = args41645.length;
switch (G__41647) {
case 1:
return sablono.core.check_box41644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41644.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41645.length)].join('')));

}
});

sablono.core.check_box41644.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box41644.call(null,name,null);
});

sablono.core.check_box41644.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box41644.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box41644.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35209__auto__ = value;
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box41644.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box41644);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41652 = (function sablono$core$radio_button41652(var_args){
var args41653 = [];
var len__36322__auto___41656 = arguments.length;
var i__36323__auto___41657 = (0);
while(true){
if((i__36323__auto___41657 < len__36322__auto___41656)){
args41653.push((arguments[i__36323__auto___41657]));

var G__41658 = (i__36323__auto___41657 + (1));
i__36323__auto___41657 = G__41658;
continue;
} else {
}
break;
}

var G__41655 = args41653.length;
switch (G__41655) {
case 1:
return sablono.core.radio_button41652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41652.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41653.length)].join('')));

}
});

sablono.core.radio_button41652.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button41652.call(null,group,null);
});

sablono.core.radio_button41652.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button41652.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button41652.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35209__auto__ = value;
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button41652.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button41652);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41660 = (function sablono$core$select_options41660(coll){
var iter__35997__auto__ = (function sablono$core$select_options41660_$_iter__41677(s__41678){
return (new cljs.core.LazySeq(null,(function (){
var s__41678__$1 = s__41678;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41678__$1);
if(temp__4657__auto__){
var s__41678__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41678__$2)){
var c__35995__auto__ = cljs.core.chunk_first.call(null,s__41678__$2);
var size__35996__auto__ = cljs.core.count.call(null,c__35995__auto__);
var b__41680 = cljs.core.chunk_buffer.call(null,size__35996__auto__);
if((function (){var i__41679 = (0);
while(true){
if((i__41679 < size__35996__auto__)){
var x = cljs.core._nth.call(null,c__35995__auto__,i__41679);
cljs.core.chunk_append.call(null,b__41680,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41687 = x;
var text = cljs.core.nth.call(null,vec__41687,(0),null);
var val = cljs.core.nth.call(null,vec__41687,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41687,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41660.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41693 = (i__41679 + (1));
i__41679 = G__41693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41680),sablono$core$select_options41660_$_iter__41677.call(null,cljs.core.chunk_rest.call(null,s__41678__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41680),null);
}
} else {
var x = cljs.core.first.call(null,s__41678__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41690 = x;
var text = cljs.core.nth.call(null,vec__41690,(0),null);
var val = cljs.core.nth.call(null,vec__41690,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41690,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41660.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41660_$_iter__41677.call(null,cljs.core.rest.call(null,s__41678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__35997__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options41660);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41694 = (function sablono$core$drop_down41694(var_args){
var args41695 = [];
var len__36322__auto___41698 = arguments.length;
var i__36323__auto___41699 = (0);
while(true){
if((i__36323__auto___41699 < len__36322__auto___41698)){
args41695.push((arguments[i__36323__auto___41699]));

var G__41700 = (i__36323__auto___41699 + (1));
i__36323__auto___41699 = G__41700;
continue;
} else {
}
break;
}

var G__41697 = args41695.length;
switch (G__41697) {
case 2:
return sablono.core.drop_down41694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41694.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41695.length)].join('')));

}
});

sablono.core.drop_down41694.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41694.call(null,name,options,null);
});

sablono.core.drop_down41694.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down41694.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down41694);
/**
 * Creates a text area element.
 */
sablono.core.text_area41702 = (function sablono$core$text_area41702(var_args){
var args41703 = [];
var len__36322__auto___41706 = arguments.length;
var i__36323__auto___41707 = (0);
while(true){
if((i__36323__auto___41707 < len__36322__auto___41706)){
args41703.push((arguments[i__36323__auto___41707]));

var G__41708 = (i__36323__auto___41707 + (1));
i__36323__auto___41707 = G__41708;
continue;
} else {
}
break;
}

var G__41705 = args41703.length;
switch (G__41705) {
case 1:
return sablono.core.text_area41702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41703.length)].join('')));

}
});

sablono.core.text_area41702.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area41702.call(null,name,null);
});

sablono.core.text_area41702.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35209__auto__ = value;
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area41702.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area41702);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41710 = (function sablono$core$label41710(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label41710);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41711 = (function sablono$core$submit_button41711(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button41711);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41712 = (function sablono$core$reset_button41712(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button41712);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41713 = (function sablono$core$form_to41713(var_args){
var args__36329__auto__ = [];
var len__36322__auto___41720 = arguments.length;
var i__36323__auto___41721 = (0);
while(true){
if((i__36323__auto___41721 < len__36322__auto___41720)){
args__36329__auto__.push((arguments[i__36323__auto___41721]));

var G__41722 = (i__36323__auto___41721 + (1));
i__36323__auto___41721 = G__41722;
continue;
} else {
}
break;
}

var argseq__36330__auto__ = ((((1) < args__36329__auto__.length))?(new cljs.core.IndexedSeq(args__36329__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41713.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36330__auto__);
});

sablono.core.form_to41713.cljs$core$IFn$_invoke$arity$variadic = (function (p__41716,body){
var vec__41717 = p__41716;
var method = cljs.core.nth.call(null,vec__41717,(0),null);
var action = cljs.core.nth.call(null,vec__41717,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to41713.cljs$lang$maxFixedArity = (1);

sablono.core.form_to41713.cljs$lang$applyTo = (function (seq41714){
var G__41715 = cljs.core.first.call(null,seq41714);
var seq41714__$1 = cljs.core.next.call(null,seq41714);
return sablono.core.form_to41713.cljs$core$IFn$_invoke$arity$variadic(G__41715,seq41714__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to41713);
