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
var G__37049__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37046 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__37047 = cljs.core.seq.call(null,vec__37046);
var first__37048 = cljs.core.first.call(null,seq__37047);
var seq__37047__$1 = cljs.core.next.call(null,seq__37047);
var tag = first__37048;
var body = seq__37047__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37050__i = 0, G__37050__a = new Array(arguments.length -  0);
while (G__37050__i < G__37050__a.length) {G__37050__a[G__37050__i] = arguments[G__37050__i + 0]; ++G__37050__i;}
  args = new cljs.core.IndexedSeq(G__37050__a,0,null);
} 
return G__37049__delegate.call(this,args);};
G__37049.cljs$lang$maxFixedArity = 0;
G__37049.cljs$lang$applyTo = (function (arglist__37051){
var args = cljs.core.seq(arglist__37051);
return G__37049__delegate(args);
});
G__37049.cljs$core$IFn$_invoke$arity$variadic = G__37049__delegate;
return G__37049;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4291__auto__ = (function sablono$core$update_arglists_$_iter__37052(s__37053){
return (new cljs.core.LazySeq(null,(function (){
var s__37053__$1 = s__37053;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37053__$1);
if(temp__5457__auto__){
var s__37053__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37053__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37053__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37055 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37054 = (0);
while(true){
if((i__37054 < size__4290__auto__)){
var args = cljs.core._nth.call(null,c__4289__auto__,i__37054);
cljs.core.chunk_append.call(null,b__37055,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37056 = (i__37054 + (1));
i__37054 = G__37056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37055),sablono$core$update_arglists_$_iter__37052.call(null,cljs.core.chunk_rest.call(null,s__37053__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37055),null);
}
} else {
var args = cljs.core.first.call(null,s__37053__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37052.call(null,cljs.core.rest.call(null,s__37053__$2)));
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
var len__4498__auto___37062 = arguments.length;
var i__4499__auto___37063 = (0);
while(true){
if((i__4499__auto___37063 < len__4498__auto___37062)){
args__4501__auto__.push((arguments[i__4499__auto___37063]));

var G__37064 = (i__4499__auto___37063 + (1));
i__4499__auto___37063 = G__37064;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4291__auto__ = (function sablono$core$iter__37058(s__37059){
return (new cljs.core.LazySeq(null,(function (){
var s__37059__$1 = s__37059;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37059__$1);
if(temp__5457__auto__){
var s__37059__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37059__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37059__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37061 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37060 = (0);
while(true){
if((i__37060 < size__4290__auto__)){
var style = cljs.core._nth.call(null,c__4289__auto__,i__37060);
cljs.core.chunk_append.call(null,b__37061,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37065 = (i__37060 + (1));
i__37060 = G__37065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37061),sablono$core$iter__37058.call(null,cljs.core.chunk_rest.call(null,s__37059__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37061),null);
}
} else {
var style = cljs.core.first.call(null,s__37059__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37058.call(null,cljs.core.rest.call(null,s__37059__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq37057){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37057));
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
sablono.core.link_to37066 = (function sablono$core$link_to37066(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37069 = arguments.length;
var i__4499__auto___37070 = (0);
while(true){
if((i__4499__auto___37070 < len__4498__auto___37069)){
args__4501__auto__.push((arguments[i__4499__auto___37070]));

var G__37071 = (i__4499__auto___37070 + (1));
i__4499__auto___37070 = G__37071;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37066.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.link_to37066.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37066.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to37066.cljs$lang$applyTo = (function (seq37067){
var G__37068 = cljs.core.first.call(null,seq37067);
var seq37067__$1 = cljs.core.next.call(null,seq37067);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37068,seq37067__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37066);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37072 = (function sablono$core$mail_to37072(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37079 = arguments.length;
var i__4499__auto___37080 = (0);
while(true){
if((i__4499__auto___37080 < len__4498__auto___37079)){
args__4501__auto__.push((arguments[i__4499__auto___37080]));

var G__37081 = (i__4499__auto___37080 + (1));
i__4499__auto___37080 = G__37081;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37072.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.mail_to37072.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37075){
var vec__37076 = p__37075;
var content = cljs.core.nth.call(null,vec__37076,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3921__auto__ = content;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37072.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to37072.cljs$lang$applyTo = (function (seq37073){
var G__37074 = cljs.core.first.call(null,seq37073);
var seq37073__$1 = cljs.core.next.call(null,seq37073);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37074,seq37073__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37072);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37082 = (function sablono$core$unordered_list37082(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4291__auto__ = (function sablono$core$unordered_list37082_$_iter__37083(s__37084){
return (new cljs.core.LazySeq(null,(function (){
var s__37084__$1 = s__37084;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37084__$1);
if(temp__5457__auto__){
var s__37084__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37084__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37084__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37086 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37085 = (0);
while(true){
if((i__37085 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__37085);
cljs.core.chunk_append.call(null,b__37086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37087 = (i__37085 + (1));
i__37085 = G__37087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37086),sablono$core$unordered_list37082_$_iter__37083.call(null,cljs.core.chunk_rest.call(null,s__37084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37086),null);
}
} else {
var x = cljs.core.first.call(null,s__37084__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37082_$_iter__37083.call(null,cljs.core.rest.call(null,s__37084__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37082);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37088 = (function sablono$core$ordered_list37088(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4291__auto__ = (function sablono$core$ordered_list37088_$_iter__37089(s__37090){
return (new cljs.core.LazySeq(null,(function (){
var s__37090__$1 = s__37090;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37090__$1);
if(temp__5457__auto__){
var s__37090__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37090__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37090__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37092 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37091 = (0);
while(true){
if((i__37091 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__37091);
cljs.core.chunk_append.call(null,b__37092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37093 = (i__37091 + (1));
i__37091 = G__37093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37092),sablono$core$ordered_list37088_$_iter__37089.call(null,cljs.core.chunk_rest.call(null,s__37090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37092),null);
}
} else {
var x = cljs.core.first.call(null,s__37090__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37088_$_iter__37089.call(null,cljs.core.rest.call(null,s__37090__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37088);
/**
 * Create an image element.
 */
sablono.core.image37094 = (function sablono$core$image37094(var_args){
var G__37096 = arguments.length;
switch (G__37096) {
case 1:
return sablono.core.image37094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image37094.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37094.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37094.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37094);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37098_SHARP_,p2__37099_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37098_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37099_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37100_SHARP_,p2__37101_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37100_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37101_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37103 = arguments.length;
switch (G__37103) {
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
sablono.core.color_field37105 = (function sablono$core$color_field37105(var_args){
var G__37107 = arguments.length;
switch (G__37107) {
case 1:
return sablono.core.color_field37105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field37105.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37036__auto__);
});

sablono.core.color_field37105.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.color_field37105.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37105);

/**
 * Creates a date input field.
 */
sablono.core.date_field37108 = (function sablono$core$date_field37108(var_args){
var G__37110 = arguments.length;
switch (G__37110) {
case 1:
return sablono.core.date_field37108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field37108.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37036__auto__);
});

sablono.core.date_field37108.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.date_field37108.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37108);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37111 = (function sablono$core$datetime_field37111(var_args){
var G__37113 = arguments.length;
switch (G__37113) {
case 1:
return sablono.core.datetime_field37111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field37111.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37036__auto__);
});

sablono.core.datetime_field37111.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.datetime_field37111.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37111);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37114 = (function sablono$core$datetime_local_field37114(var_args){
var G__37116 = arguments.length;
switch (G__37116) {
case 1:
return sablono.core.datetime_local_field37114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field37114.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37036__auto__);
});

sablono.core.datetime_local_field37114.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.datetime_local_field37114.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37114);

/**
 * Creates a email input field.
 */
sablono.core.email_field37117 = (function sablono$core$email_field37117(var_args){
var G__37119 = arguments.length;
switch (G__37119) {
case 1:
return sablono.core.email_field37117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field37117.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37036__auto__);
});

sablono.core.email_field37117.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.email_field37117.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37117);

/**
 * Creates a file input field.
 */
sablono.core.file_field37120 = (function sablono$core$file_field37120(var_args){
var G__37122 = arguments.length;
switch (G__37122) {
case 1:
return sablono.core.file_field37120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field37120.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37036__auto__);
});

sablono.core.file_field37120.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.file_field37120.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37120);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37123 = (function sablono$core$hidden_field37123(var_args){
var G__37125 = arguments.length;
switch (G__37125) {
case 1:
return sablono.core.hidden_field37123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field37123.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37036__auto__);
});

sablono.core.hidden_field37123.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.hidden_field37123.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37123);

/**
 * Creates a month input field.
 */
sablono.core.month_field37126 = (function sablono$core$month_field37126(var_args){
var G__37128 = arguments.length;
switch (G__37128) {
case 1:
return sablono.core.month_field37126.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37126.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field37126.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37036__auto__);
});

sablono.core.month_field37126.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.month_field37126.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37126);

/**
 * Creates a number input field.
 */
sablono.core.number_field37129 = (function sablono$core$number_field37129(var_args){
var G__37131 = arguments.length;
switch (G__37131) {
case 1:
return sablono.core.number_field37129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field37129.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37036__auto__);
});

sablono.core.number_field37129.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.number_field37129.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37129);

/**
 * Creates a password input field.
 */
sablono.core.password_field37132 = (function sablono$core$password_field37132(var_args){
var G__37134 = arguments.length;
switch (G__37134) {
case 1:
return sablono.core.password_field37132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field37132.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37036__auto__);
});

sablono.core.password_field37132.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.password_field37132.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37132);

/**
 * Creates a range input field.
 */
sablono.core.range_field37135 = (function sablono$core$range_field37135(var_args){
var G__37137 = arguments.length;
switch (G__37137) {
case 1:
return sablono.core.range_field37135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field37135.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37036__auto__);
});

sablono.core.range_field37135.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.range_field37135.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37135);

/**
 * Creates a search input field.
 */
sablono.core.search_field37138 = (function sablono$core$search_field37138(var_args){
var G__37140 = arguments.length;
switch (G__37140) {
case 1:
return sablono.core.search_field37138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field37138.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37036__auto__);
});

sablono.core.search_field37138.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.search_field37138.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37138);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37141 = (function sablono$core$tel_field37141(var_args){
var G__37143 = arguments.length;
switch (G__37143) {
case 1:
return sablono.core.tel_field37141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field37141.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37036__auto__);
});

sablono.core.tel_field37141.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.tel_field37141.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37141);

/**
 * Creates a text input field.
 */
sablono.core.text_field37144 = (function sablono$core$text_field37144(var_args){
var G__37146 = arguments.length;
switch (G__37146) {
case 1:
return sablono.core.text_field37144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field37144.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37036__auto__);
});

sablono.core.text_field37144.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.text_field37144.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37144);

/**
 * Creates a time input field.
 */
sablono.core.time_field37147 = (function sablono$core$time_field37147(var_args){
var G__37149 = arguments.length;
switch (G__37149) {
case 1:
return sablono.core.time_field37147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field37147.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37036__auto__);
});

sablono.core.time_field37147.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.time_field37147.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37147);

/**
 * Creates a url input field.
 */
sablono.core.url_field37150 = (function sablono$core$url_field37150(var_args){
var G__37152 = arguments.length;
switch (G__37152) {
case 1:
return sablono.core.url_field37150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field37150.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37036__auto__);
});

sablono.core.url_field37150.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.url_field37150.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37150);

/**
 * Creates a week input field.
 */
sablono.core.week_field37153 = (function sablono$core$week_field37153(var_args){
var G__37155 = arguments.length;
switch (G__37155) {
case 1:
return sablono.core.week_field37153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field37153.cljs$core$IFn$_invoke$arity$1 = (function (name__37036__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37036__auto__);
});

sablono.core.week_field37153.cljs$core$IFn$_invoke$arity$2 = (function (name__37036__auto__,value__37037__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37036__auto__,value__37037__auto__);
});

sablono.core.week_field37153.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37153);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37173 = (function sablono$core$check_box37173(var_args){
var G__37175 = arguments.length;
switch (G__37175) {
case 1:
return sablono.core.check_box37173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37173.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box37173.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box37173.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37173.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37173.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37173);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37177 = (function sablono$core$radio_button37177(var_args){
var G__37179 = arguments.length;
switch (G__37179) {
case 1:
return sablono.core.radio_button37177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37177.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button37177.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button37177.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37177.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37177.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37177);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37181 = (function sablono$core$select_options37181(coll){
var iter__4291__auto__ = (function sablono$core$select_options37181_$_iter__37182(s__37183){
return (new cljs.core.LazySeq(null,(function (){
var s__37183__$1 = s__37183;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37183__$1);
if(temp__5457__auto__){
var s__37183__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37183__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37183__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37185 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37184 = (0);
while(true){
if((i__37184 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__37184);
cljs.core.chunk_append.call(null,b__37185,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37186 = x;
var text = cljs.core.nth.call(null,vec__37186,(0),null);
var val = cljs.core.nth.call(null,vec__37186,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37186,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37181.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37192 = (i__37184 + (1));
i__37184 = G__37192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37185),sablono$core$select_options37181_$_iter__37182.call(null,cljs.core.chunk_rest.call(null,s__37183__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37185),null);
}
} else {
var x = cljs.core.first.call(null,s__37183__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37189 = x;
var text = cljs.core.nth.call(null,vec__37189,(0),null);
var val = cljs.core.nth.call(null,vec__37189,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37189,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37181.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37181_$_iter__37182.call(null,cljs.core.rest.call(null,s__37183__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37181);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37193 = (function sablono$core$drop_down37193(var_args){
var G__37195 = arguments.length;
switch (G__37195) {
case 2:
return sablono.core.drop_down37193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37193.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down37193.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37193.call(null,name,options,null);
});

sablono.core.drop_down37193.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37193.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37193);
/**
 * Creates a text area element.
 */
sablono.core.text_area37197 = (function sablono$core$text_area37197(var_args){
var G__37199 = arguments.length;
switch (G__37199) {
case 1:
return sablono.core.text_area37197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area37197.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area37197.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3921__auto__ = value;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area37197.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37197);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37201 = (function sablono$core$label37201(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37201);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37202 = (function sablono$core$submit_button37202(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37202);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37203 = (function sablono$core$reset_button37203(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37203);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37204 = (function sablono$core$form_to37204(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37211 = arguments.length;
var i__4499__auto___37212 = (0);
while(true){
if((i__4499__auto___37212 < len__4498__auto___37211)){
args__4501__auto__.push((arguments[i__4499__auto___37212]));

var G__37213 = (i__4499__auto___37212 + (1));
i__4499__auto___37212 = G__37213;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to37204.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.form_to37204.cljs$core$IFn$_invoke$arity$variadic = (function (p__37207,body){
var vec__37208 = p__37207;
var method = cljs.core.nth.call(null,vec__37208,(0),null);
var action = cljs.core.nth.call(null,vec__37208,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37204.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to37204.cljs$lang$applyTo = (function (seq37205){
var G__37206 = cljs.core.first.call(null,seq37205);
var seq37205__$1 = cljs.core.next.call(null,seq37205);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37206,seq37205__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37204);
