// Compiled by ClojureScript 1.10.217 {}
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
var G__37020__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37017 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__37018 = cljs.core.seq.call(null,vec__37017);
var first__37019 = cljs.core.first.call(null,seq__37018);
var seq__37018__$1 = cljs.core.next.call(null,seq__37018);
var tag = first__37019;
var body = seq__37018__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37021__i = 0, G__37021__a = new Array(arguments.length -  0);
while (G__37021__i < G__37021__a.length) {G__37021__a[G__37021__i] = arguments[G__37021__i + 0]; ++G__37021__i;}
  args = new cljs.core.IndexedSeq(G__37021__a,0,null);
} 
return G__37020__delegate.call(this,args);};
G__37020.cljs$lang$maxFixedArity = 0;
G__37020.cljs$lang$applyTo = (function (arglist__37022){
var args = cljs.core.seq(arglist__37022);
return G__37020__delegate(args);
});
G__37020.cljs$core$IFn$_invoke$arity$variadic = G__37020__delegate;
return G__37020;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4291__auto__ = (function sablono$core$update_arglists_$_iter__37023(s__37024){
return (new cljs.core.LazySeq(null,(function (){
var s__37024__$1 = s__37024;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37024__$1);
if(temp__5457__auto__){
var s__37024__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37024__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37024__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37026 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37025 = (0);
while(true){
if((i__37025 < size__4290__auto__)){
var args = cljs.core._nth.call(null,c__4289__auto__,i__37025);
cljs.core.chunk_append.call(null,b__37026,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37027 = (i__37025 + (1));
i__37025 = G__37027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37026),sablono$core$update_arglists_$_iter__37023.call(null,cljs.core.chunk_rest.call(null,s__37024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37026),null);
}
} else {
var args = cljs.core.first.call(null,s__37024__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37023.call(null,cljs.core.rest.call(null,s__37024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37033 = arguments.length;
var i__4499__auto___37034 = (0);
while(true){
if((i__4499__auto___37034 < len__4498__auto___37033)){
args__4501__auto__.push((arguments[i__4499__auto___37034]));

var G__37035 = (i__4499__auto___37034 + (1));
i__4499__auto___37034 = G__37035;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4291__auto__ = (function sablono$core$iter__37029(s__37030){
return (new cljs.core.LazySeq(null,(function (){
var s__37030__$1 = s__37030;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37030__$1);
if(temp__5457__auto__){
var s__37030__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37030__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37030__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37032 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37031 = (0);
while(true){
if((i__37031 < size__4290__auto__)){
var style = cljs.core._nth.call(null,c__4289__auto__,i__37031);
cljs.core.chunk_append.call(null,b__37032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37036 = (i__37031 + (1));
i__37031 = G__37036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37032),sablono$core$iter__37029.call(null,cljs.core.chunk_rest.call(null,s__37030__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37032),null);
}
} else {
var style = cljs.core.first.call(null,s__37030__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37029.call(null,cljs.core.rest.call(null,s__37030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq37028){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37028));
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
sablono.core.link_to37037 = (function sablono$core$link_to37037(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37040 = arguments.length;
var i__4499__auto___37041 = (0);
while(true){
if((i__4499__auto___37041 < len__4498__auto___37040)){
args__4501__auto__.push((arguments[i__4499__auto___37041]));

var G__37042 = (i__4499__auto___37041 + (1));
i__4499__auto___37041 = G__37042;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37037.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.link_to37037.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37037.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to37037.cljs$lang$applyTo = (function (seq37038){
var G__37039 = cljs.core.first.call(null,seq37038);
var seq37038__$1 = cljs.core.next.call(null,seq37038);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37039,seq37038__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37037);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37043 = (function sablono$core$mail_to37043(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37050 = arguments.length;
var i__4499__auto___37051 = (0);
while(true){
if((i__4499__auto___37051 < len__4498__auto___37050)){
args__4501__auto__.push((arguments[i__4499__auto___37051]));

var G__37052 = (i__4499__auto___37051 + (1));
i__4499__auto___37051 = G__37052;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37043.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.mail_to37043.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37046){
var vec__37047 = p__37046;
var content = cljs.core.nth.call(null,vec__37047,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3921__auto__ = content;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37043.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to37043.cljs$lang$applyTo = (function (seq37044){
var G__37045 = cljs.core.first.call(null,seq37044);
var seq37044__$1 = cljs.core.next.call(null,seq37044);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37045,seq37044__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37043);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37053 = (function sablono$core$unordered_list37053(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4291__auto__ = (function sablono$core$unordered_list37053_$_iter__37054(s__37055){
return (new cljs.core.LazySeq(null,(function (){
var s__37055__$1 = s__37055;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37055__$1);
if(temp__5457__auto__){
var s__37055__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37055__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37055__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37057 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37056 = (0);
while(true){
if((i__37056 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__37056);
cljs.core.chunk_append.call(null,b__37057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37058 = (i__37056 + (1));
i__37056 = G__37058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37057),sablono$core$unordered_list37053_$_iter__37054.call(null,cljs.core.chunk_rest.call(null,s__37055__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37057),null);
}
} else {
var x = cljs.core.first.call(null,s__37055__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37053_$_iter__37054.call(null,cljs.core.rest.call(null,s__37055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37053);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37059 = (function sablono$core$ordered_list37059(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4291__auto__ = (function sablono$core$ordered_list37059_$_iter__37060(s__37061){
return (new cljs.core.LazySeq(null,(function (){
var s__37061__$1 = s__37061;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37061__$1);
if(temp__5457__auto__){
var s__37061__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37061__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37061__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37063 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37062 = (0);
while(true){
if((i__37062 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__37062);
cljs.core.chunk_append.call(null,b__37063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37064 = (i__37062 + (1));
i__37062 = G__37064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37063),sablono$core$ordered_list37059_$_iter__37060.call(null,cljs.core.chunk_rest.call(null,s__37061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37063),null);
}
} else {
var x = cljs.core.first.call(null,s__37061__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37059_$_iter__37060.call(null,cljs.core.rest.call(null,s__37061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37059);
/**
 * Create an image element.
 */
sablono.core.image37065 = (function sablono$core$image37065(var_args){
var G__37067 = arguments.length;
switch (G__37067) {
case 1:
return sablono.core.image37065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image37065.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37065.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37065.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37065);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37069_SHARP_,p2__37070_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37069_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37070_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37071_SHARP_,p2__37072_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37071_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37072_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37074 = arguments.length;
switch (G__37074) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3921__auto__ = value;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field37076 = (function sablono$core$color_field37076(var_args){
var G__37078 = arguments.length;
switch (G__37078) {
case 1:
return sablono.core.color_field37076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field37076.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37007__auto__);
});

sablono.core.color_field37076.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.color_field37076.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37076);

/**
 * Creates a date input field.
 */
sablono.core.date_field37079 = (function sablono$core$date_field37079(var_args){
var G__37081 = arguments.length;
switch (G__37081) {
case 1:
return sablono.core.date_field37079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field37079.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37007__auto__);
});

sablono.core.date_field37079.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.date_field37079.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37079);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37082 = (function sablono$core$datetime_field37082(var_args){
var G__37084 = arguments.length;
switch (G__37084) {
case 1:
return sablono.core.datetime_field37082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field37082.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37007__auto__);
});

sablono.core.datetime_field37082.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.datetime_field37082.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37082);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37085 = (function sablono$core$datetime_local_field37085(var_args){
var G__37087 = arguments.length;
switch (G__37087) {
case 1:
return sablono.core.datetime_local_field37085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field37085.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37007__auto__);
});

sablono.core.datetime_local_field37085.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.datetime_local_field37085.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37085);

/**
 * Creates a email input field.
 */
sablono.core.email_field37088 = (function sablono$core$email_field37088(var_args){
var G__37090 = arguments.length;
switch (G__37090) {
case 1:
return sablono.core.email_field37088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field37088.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37007__auto__);
});

sablono.core.email_field37088.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.email_field37088.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37088);

/**
 * Creates a file input field.
 */
sablono.core.file_field37091 = (function sablono$core$file_field37091(var_args){
var G__37093 = arguments.length;
switch (G__37093) {
case 1:
return sablono.core.file_field37091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field37091.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37007__auto__);
});

sablono.core.file_field37091.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.file_field37091.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37091);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37094 = (function sablono$core$hidden_field37094(var_args){
var G__37096 = arguments.length;
switch (G__37096) {
case 1:
return sablono.core.hidden_field37094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field37094.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37007__auto__);
});

sablono.core.hidden_field37094.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.hidden_field37094.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37094);

/**
 * Creates a month input field.
 */
sablono.core.month_field37097 = (function sablono$core$month_field37097(var_args){
var G__37099 = arguments.length;
switch (G__37099) {
case 1:
return sablono.core.month_field37097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field37097.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37007__auto__);
});

sablono.core.month_field37097.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.month_field37097.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37097);

/**
 * Creates a number input field.
 */
sablono.core.number_field37100 = (function sablono$core$number_field37100(var_args){
var G__37102 = arguments.length;
switch (G__37102) {
case 1:
return sablono.core.number_field37100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field37100.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37007__auto__);
});

sablono.core.number_field37100.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.number_field37100.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37100);

/**
 * Creates a password input field.
 */
sablono.core.password_field37103 = (function sablono$core$password_field37103(var_args){
var G__37105 = arguments.length;
switch (G__37105) {
case 1:
return sablono.core.password_field37103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field37103.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37007__auto__);
});

sablono.core.password_field37103.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.password_field37103.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37103);

/**
 * Creates a range input field.
 */
sablono.core.range_field37106 = (function sablono$core$range_field37106(var_args){
var G__37108 = arguments.length;
switch (G__37108) {
case 1:
return sablono.core.range_field37106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field37106.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37007__auto__);
});

sablono.core.range_field37106.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.range_field37106.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37106);

/**
 * Creates a search input field.
 */
sablono.core.search_field37109 = (function sablono$core$search_field37109(var_args){
var G__37111 = arguments.length;
switch (G__37111) {
case 1:
return sablono.core.search_field37109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field37109.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37007__auto__);
});

sablono.core.search_field37109.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.search_field37109.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37109);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37112 = (function sablono$core$tel_field37112(var_args){
var G__37114 = arguments.length;
switch (G__37114) {
case 1:
return sablono.core.tel_field37112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field37112.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37007__auto__);
});

sablono.core.tel_field37112.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.tel_field37112.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37112);

/**
 * Creates a text input field.
 */
sablono.core.text_field37115 = (function sablono$core$text_field37115(var_args){
var G__37117 = arguments.length;
switch (G__37117) {
case 1:
return sablono.core.text_field37115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field37115.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37007__auto__);
});

sablono.core.text_field37115.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.text_field37115.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37115);

/**
 * Creates a time input field.
 */
sablono.core.time_field37118 = (function sablono$core$time_field37118(var_args){
var G__37120 = arguments.length;
switch (G__37120) {
case 1:
return sablono.core.time_field37118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field37118.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37007__auto__);
});

sablono.core.time_field37118.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.time_field37118.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37118);

/**
 * Creates a url input field.
 */
sablono.core.url_field37121 = (function sablono$core$url_field37121(var_args){
var G__37123 = arguments.length;
switch (G__37123) {
case 1:
return sablono.core.url_field37121.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37121.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field37121.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37007__auto__);
});

sablono.core.url_field37121.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.url_field37121.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37121);

/**
 * Creates a week input field.
 */
sablono.core.week_field37124 = (function sablono$core$week_field37124(var_args){
var G__37126 = arguments.length;
switch (G__37126) {
case 1:
return sablono.core.week_field37124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field37124.cljs$core$IFn$_invoke$arity$1 = (function (name__37007__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37007__auto__);
});

sablono.core.week_field37124.cljs$core$IFn$_invoke$arity$2 = (function (name__37007__auto__,value__37008__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37007__auto__,value__37008__auto__);
});

sablono.core.week_field37124.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37124);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37144 = (function sablono$core$check_box37144(var_args){
var G__37146 = arguments.length;
switch (G__37146) {
case 1:
return sablono.core.check_box37144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37144.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box37144.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box37144.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37144.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37144.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37144);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37148 = (function sablono$core$radio_button37148(var_args){
var G__37150 = arguments.length;
switch (G__37150) {
case 1:
return sablono.core.radio_button37148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37148.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button37148.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button37148.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37148.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37148.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37148);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37152 = (function sablono$core$select_options37152(coll){
var iter__4291__auto__ = (function sablono$core$select_options37152_$_iter__37153(s__37154){
return (new cljs.core.LazySeq(null,(function (){
var s__37154__$1 = s__37154;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37154__$1);
if(temp__5457__auto__){
var s__37154__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37154__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37154__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37156 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37155 = (0);
while(true){
if((i__37155 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__37155);
cljs.core.chunk_append.call(null,b__37156,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37157 = x;
var text = cljs.core.nth.call(null,vec__37157,(0),null);
var val = cljs.core.nth.call(null,vec__37157,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37157,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37152.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37163 = (i__37155 + (1));
i__37155 = G__37163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37156),sablono$core$select_options37152_$_iter__37153.call(null,cljs.core.chunk_rest.call(null,s__37154__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37156),null);
}
} else {
var x = cljs.core.first.call(null,s__37154__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37160 = x;
var text = cljs.core.nth.call(null,vec__37160,(0),null);
var val = cljs.core.nth.call(null,vec__37160,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37160,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37152.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37152_$_iter__37153.call(null,cljs.core.rest.call(null,s__37154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4291__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37152);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37164 = (function sablono$core$drop_down37164(var_args){
var G__37166 = arguments.length;
switch (G__37166) {
case 2:
return sablono.core.drop_down37164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37164.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down37164.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37164.call(null,name,options,null);
});

sablono.core.drop_down37164.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37164.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37164);
/**
 * Creates a text area element.
 */
sablono.core.text_area37168 = (function sablono$core$text_area37168(var_args){
var G__37170 = arguments.length;
switch (G__37170) {
case 1:
return sablono.core.text_area37168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area37168.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area37168.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3921__auto__ = value;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area37168.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37168);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37172 = (function sablono$core$label37172(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37172);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37173 = (function sablono$core$submit_button37173(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37173);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37174 = (function sablono$core$reset_button37174(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37174);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37175 = (function sablono$core$form_to37175(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37182 = arguments.length;
var i__4499__auto___37183 = (0);
while(true){
if((i__4499__auto___37183 < len__4498__auto___37182)){
args__4501__auto__.push((arguments[i__4499__auto___37183]));

var G__37184 = (i__4499__auto___37183 + (1));
i__4499__auto___37183 = G__37184;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to37175.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.form_to37175.cljs$core$IFn$_invoke$arity$variadic = (function (p__37178,body){
var vec__37179 = p__37178;
var method = cljs.core.nth.call(null,vec__37179,(0),null);
var action = cljs.core.nth.call(null,vec__37179,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37175.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to37175.cljs$lang$applyTo = (function (seq37176){
var G__37177 = cljs.core.first.call(null,seq37176);
var seq37176__$1 = cljs.core.next.call(null,seq37176);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37177,seq37176__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37175);
