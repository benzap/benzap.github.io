// Compiled by ClojureScript 1.10.520 {}
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
var G__37105__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37102 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__37103 = cljs.core.seq.call(null,vec__37102);
var first__37104 = cljs.core.first.call(null,seq__37103);
var seq__37103__$1 = cljs.core.next.call(null,seq__37103);
var tag = first__37104;
var body = seq__37103__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37106__i = 0, G__37106__a = new Array(arguments.length -  0);
while (G__37106__i < G__37106__a.length) {G__37106__a[G__37106__i] = arguments[G__37106__i + 0]; ++G__37106__i;}
  args = new cljs.core.IndexedSeq(G__37106__a,0,null);
} 
return G__37105__delegate.call(this,args);};
G__37105.cljs$lang$maxFixedArity = 0;
G__37105.cljs$lang$applyTo = (function (arglist__37107){
var args = cljs.core.seq(arglist__37107);
return G__37105__delegate(args);
});
G__37105.cljs$core$IFn$_invoke$arity$variadic = G__37105__delegate;
return G__37105;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__37108(s__37109){
return (new cljs.core.LazySeq(null,(function (){
var s__37109__$1 = s__37109;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37109__$1);
if(temp__5720__auto__){
var s__37109__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37109__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__37109__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__37111 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__37110 = (0);
while(true){
if((i__37110 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__37110);
cljs.core.chunk_append.call(null,b__37111,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37112 = (i__37110 + (1));
i__37110 = G__37112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37111),sablono$core$update_arglists_$_iter__37108.call(null,cljs.core.chunk_rest.call(null,s__37109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37111),null);
}
} else {
var args = cljs.core.first.call(null,s__37109__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37108.call(null,cljs.core.rest.call(null,s__37109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37118 = arguments.length;
var i__4731__auto___37119 = (0);
while(true){
if((i__4731__auto___37119 < len__4730__auto___37118)){
args__4736__auto__.push((arguments[i__4731__auto___37119]));

var G__37120 = (i__4731__auto___37119 + (1));
i__4731__auto___37119 = G__37120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__37114(s__37115){
return (new cljs.core.LazySeq(null,(function (){
var s__37115__$1 = s__37115;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37115__$1);
if(temp__5720__auto__){
var s__37115__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37115__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__37115__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__37117 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__37116 = (0);
while(true){
if((i__37116 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__37116);
cljs.core.chunk_append.call(null,b__37117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37121 = (i__37116 + (1));
i__37116 = G__37121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37117),sablono$core$iter__37114.call(null,cljs.core.chunk_rest.call(null,s__37115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37117),null);
}
} else {
var style = cljs.core.first.call(null,s__37115__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37114.call(null,cljs.core.rest.call(null,s__37115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq37113){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37113));
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
sablono.core.link_to37122 = (function sablono$core$link_to37122(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37125 = arguments.length;
var i__4731__auto___37126 = (0);
while(true){
if((i__4731__auto___37126 < len__4730__auto___37125)){
args__4736__auto__.push((arguments[i__4731__auto___37126]));

var G__37127 = (i__4731__auto___37126 + (1));
i__4731__auto___37126 = G__37127;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37122.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to37122.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37122.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to37122.cljs$lang$applyTo = (function (seq37123){
var G__37124 = cljs.core.first.call(null,seq37123);
var seq37123__$1 = cljs.core.next.call(null,seq37123);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37124,seq37123__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37122);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37128 = (function sablono$core$mail_to37128(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37135 = arguments.length;
var i__4731__auto___37136 = (0);
while(true){
if((i__4731__auto___37136 < len__4730__auto___37135)){
args__4736__auto__.push((arguments[i__4731__auto___37136]));

var G__37137 = (i__4731__auto___37136 + (1));
i__4731__auto___37136 = G__37137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37128.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to37128.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37131){
var vec__37132 = p__37131;
var content = cljs.core.nth.call(null,vec__37132,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37128.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to37128.cljs$lang$applyTo = (function (seq37129){
var G__37130 = cljs.core.first.call(null,seq37129);
var seq37129__$1 = cljs.core.next.call(null,seq37129);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37130,seq37129__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37128);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37138 = (function sablono$core$unordered_list37138(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list37138_$_iter__37139(s__37140){
return (new cljs.core.LazySeq(null,(function (){
var s__37140__$1 = s__37140;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37140__$1);
if(temp__5720__auto__){
var s__37140__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37140__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__37140__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__37142 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__37141 = (0);
while(true){
if((i__37141 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__37141);
cljs.core.chunk_append.call(null,b__37142,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37143 = (i__37141 + (1));
i__37141 = G__37143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37142),sablono$core$unordered_list37138_$_iter__37139.call(null,cljs.core.chunk_rest.call(null,s__37140__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37142),null);
}
} else {
var x = cljs.core.first.call(null,s__37140__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37138_$_iter__37139.call(null,cljs.core.rest.call(null,s__37140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37138);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37144 = (function sablono$core$ordered_list37144(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list37144_$_iter__37145(s__37146){
return (new cljs.core.LazySeq(null,(function (){
var s__37146__$1 = s__37146;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37146__$1);
if(temp__5720__auto__){
var s__37146__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37146__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__37146__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__37148 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__37147 = (0);
while(true){
if((i__37147 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__37147);
cljs.core.chunk_append.call(null,b__37148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37149 = (i__37147 + (1));
i__37147 = G__37149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37148),sablono$core$ordered_list37144_$_iter__37145.call(null,cljs.core.chunk_rest.call(null,s__37146__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37148),null);
}
} else {
var x = cljs.core.first.call(null,s__37146__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37144_$_iter__37145.call(null,cljs.core.rest.call(null,s__37146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37144);
/**
 * Create an image element.
 */
sablono.core.image37150 = (function sablono$core$image37150(var_args){
var G__37152 = arguments.length;
switch (G__37152) {
case 1:
return sablono.core.image37150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image37150.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37150.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37150.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37150);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37154_SHARP_,p2__37155_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37154_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37155_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37156_SHARP_,p2__37157_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37156_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37157_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37159 = arguments.length;
switch (G__37159) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field37161 = (function sablono$core$color_field37161(var_args){
var G__37163 = arguments.length;
switch (G__37163) {
case 1:
return sablono.core.color_field37161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field37161.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37092__auto__);
});

sablono.core.color_field37161.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.color_field37161.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37161);

/**
 * Creates a date input field.
 */
sablono.core.date_field37164 = (function sablono$core$date_field37164(var_args){
var G__37166 = arguments.length;
switch (G__37166) {
case 1:
return sablono.core.date_field37164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field37164.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37092__auto__);
});

sablono.core.date_field37164.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.date_field37164.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37164);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37167 = (function sablono$core$datetime_field37167(var_args){
var G__37169 = arguments.length;
switch (G__37169) {
case 1:
return sablono.core.datetime_field37167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field37167.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37092__auto__);
});

sablono.core.datetime_field37167.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.datetime_field37167.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37167);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37170 = (function sablono$core$datetime_local_field37170(var_args){
var G__37172 = arguments.length;
switch (G__37172) {
case 1:
return sablono.core.datetime_local_field37170.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37170.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field37170.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37092__auto__);
});

sablono.core.datetime_local_field37170.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.datetime_local_field37170.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37170);

/**
 * Creates a email input field.
 */
sablono.core.email_field37173 = (function sablono$core$email_field37173(var_args){
var G__37175 = arguments.length;
switch (G__37175) {
case 1:
return sablono.core.email_field37173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field37173.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37092__auto__);
});

sablono.core.email_field37173.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.email_field37173.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37173);

/**
 * Creates a file input field.
 */
sablono.core.file_field37176 = (function sablono$core$file_field37176(var_args){
var G__37178 = arguments.length;
switch (G__37178) {
case 1:
return sablono.core.file_field37176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field37176.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37092__auto__);
});

sablono.core.file_field37176.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.file_field37176.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37176);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37179 = (function sablono$core$hidden_field37179(var_args){
var G__37181 = arguments.length;
switch (G__37181) {
case 1:
return sablono.core.hidden_field37179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field37179.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37092__auto__);
});

sablono.core.hidden_field37179.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.hidden_field37179.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37179);

/**
 * Creates a month input field.
 */
sablono.core.month_field37182 = (function sablono$core$month_field37182(var_args){
var G__37184 = arguments.length;
switch (G__37184) {
case 1:
return sablono.core.month_field37182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field37182.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37092__auto__);
});

sablono.core.month_field37182.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.month_field37182.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37182);

/**
 * Creates a number input field.
 */
sablono.core.number_field37185 = (function sablono$core$number_field37185(var_args){
var G__37187 = arguments.length;
switch (G__37187) {
case 1:
return sablono.core.number_field37185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field37185.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37092__auto__);
});

sablono.core.number_field37185.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.number_field37185.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37185);

/**
 * Creates a password input field.
 */
sablono.core.password_field37188 = (function sablono$core$password_field37188(var_args){
var G__37190 = arguments.length;
switch (G__37190) {
case 1:
return sablono.core.password_field37188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field37188.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37092__auto__);
});

sablono.core.password_field37188.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.password_field37188.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37188);

/**
 * Creates a range input field.
 */
sablono.core.range_field37191 = (function sablono$core$range_field37191(var_args){
var G__37193 = arguments.length;
switch (G__37193) {
case 1:
return sablono.core.range_field37191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field37191.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37092__auto__);
});

sablono.core.range_field37191.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.range_field37191.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37191);

/**
 * Creates a search input field.
 */
sablono.core.search_field37194 = (function sablono$core$search_field37194(var_args){
var G__37196 = arguments.length;
switch (G__37196) {
case 1:
return sablono.core.search_field37194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field37194.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37092__auto__);
});

sablono.core.search_field37194.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.search_field37194.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37194);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37197 = (function sablono$core$tel_field37197(var_args){
var G__37199 = arguments.length;
switch (G__37199) {
case 1:
return sablono.core.tel_field37197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field37197.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37092__auto__);
});

sablono.core.tel_field37197.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.tel_field37197.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37197);

/**
 * Creates a text input field.
 */
sablono.core.text_field37200 = (function sablono$core$text_field37200(var_args){
var G__37202 = arguments.length;
switch (G__37202) {
case 1:
return sablono.core.text_field37200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field37200.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37092__auto__);
});

sablono.core.text_field37200.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.text_field37200.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37200);

/**
 * Creates a time input field.
 */
sablono.core.time_field37203 = (function sablono$core$time_field37203(var_args){
var G__37205 = arguments.length;
switch (G__37205) {
case 1:
return sablono.core.time_field37203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field37203.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37092__auto__);
});

sablono.core.time_field37203.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.time_field37203.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37203);

/**
 * Creates a url input field.
 */
sablono.core.url_field37206 = (function sablono$core$url_field37206(var_args){
var G__37208 = arguments.length;
switch (G__37208) {
case 1:
return sablono.core.url_field37206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field37206.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37092__auto__);
});

sablono.core.url_field37206.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.url_field37206.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37206);

/**
 * Creates a week input field.
 */
sablono.core.week_field37209 = (function sablono$core$week_field37209(var_args){
var G__37211 = arguments.length;
switch (G__37211) {
case 1:
return sablono.core.week_field37209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field37209.cljs$core$IFn$_invoke$arity$1 = (function (name__37092__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37092__auto__);
});

sablono.core.week_field37209.cljs$core$IFn$_invoke$arity$2 = (function (name__37092__auto__,value__37093__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__37092__auto__,value__37093__auto__);
});

sablono.core.week_field37209.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37209);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37229 = (function sablono$core$check_box37229(var_args){
var G__37231 = arguments.length;
switch (G__37231) {
case 1:
return sablono.core.check_box37229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37229.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box37229.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box37229.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37229.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37229.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37229);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37233 = (function sablono$core$radio_button37233(var_args){
var G__37235 = arguments.length;
switch (G__37235) {
case 1:
return sablono.core.radio_button37233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37233.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button37233.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button37233.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37233.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37233.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37233);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37237 = (function sablono$core$select_options37237(coll){
var iter__4523__auto__ = (function sablono$core$select_options37237_$_iter__37238(s__37239){
return (new cljs.core.LazySeq(null,(function (){
var s__37239__$1 = s__37239;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37239__$1);
if(temp__5720__auto__){
var s__37239__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37239__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__37239__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__37241 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__37240 = (0);
while(true){
if((i__37240 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__37240);
cljs.core.chunk_append.call(null,b__37241,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37242 = x;
var text = cljs.core.nth.call(null,vec__37242,(0),null);
var val = cljs.core.nth.call(null,vec__37242,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37242,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37237.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37248 = (i__37240 + (1));
i__37240 = G__37248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37241),sablono$core$select_options37237_$_iter__37238.call(null,cljs.core.chunk_rest.call(null,s__37239__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37241),null);
}
} else {
var x = cljs.core.first.call(null,s__37239__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37245 = x;
var text = cljs.core.nth.call(null,vec__37245,(0),null);
var val = cljs.core.nth.call(null,vec__37245,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37245,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37237.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37237_$_iter__37238.call(null,cljs.core.rest.call(null,s__37239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37237);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37249 = (function sablono$core$drop_down37249(var_args){
var G__37251 = arguments.length;
switch (G__37251) {
case 2:
return sablono.core.drop_down37249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37249.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down37249.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37249.call(null,name,options,null);
});

sablono.core.drop_down37249.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37249.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37249);
/**
 * Creates a text area element.
 */
sablono.core.text_area37253 = (function sablono$core$text_area37253(var_args){
var G__37255 = arguments.length;
switch (G__37255) {
case 1:
return sablono.core.text_area37253.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area37253.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area37253.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area37253.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37253);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37257 = (function sablono$core$label37257(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37257);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37258 = (function sablono$core$submit_button37258(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37258);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37259 = (function sablono$core$reset_button37259(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37259);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37260 = (function sablono$core$form_to37260(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37267 = arguments.length;
var i__4731__auto___37268 = (0);
while(true){
if((i__4731__auto___37268 < len__4730__auto___37267)){
args__4736__auto__.push((arguments[i__4731__auto___37268]));

var G__37269 = (i__4731__auto___37268 + (1));
i__4731__auto___37268 = G__37269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to37260.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to37260.cljs$core$IFn$_invoke$arity$variadic = (function (p__37263,body){
var vec__37264 = p__37263;
var method = cljs.core.nth.call(null,vec__37264,(0),null);
var action = cljs.core.nth.call(null,vec__37264,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37260.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to37260.cljs$lang$applyTo = (function (seq37261){
var G__37262 = cljs.core.first.call(null,seq37261);
var seq37261__$1 = cljs.core.next.call(null,seq37261);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37262,seq37261__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37260);
