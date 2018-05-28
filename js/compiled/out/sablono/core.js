// Compiled by ClojureScript 1.10.238 {}
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
var G__37661__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37658 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__37659 = cljs.core.seq.call(null,vec__37658);
var first__37660 = cljs.core.first.call(null,seq__37659);
var seq__37659__$1 = cljs.core.next.call(null,seq__37659);
var tag = first__37660;
var body = seq__37659__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37662__i = 0, G__37662__a = new Array(arguments.length -  0);
while (G__37662__i < G__37662__a.length) {G__37662__a[G__37662__i] = arguments[G__37662__i + 0]; ++G__37662__i;}
  args = new cljs.core.IndexedSeq(G__37662__a,0,null);
} 
return G__37661__delegate.call(this,args);};
G__37661.cljs$lang$maxFixedArity = 0;
G__37661.cljs$lang$applyTo = (function (arglist__37663){
var args = cljs.core.seq(arglist__37663);
return G__37661__delegate(args);
});
G__37661.cljs$core$IFn$_invoke$arity$variadic = G__37661__delegate;
return G__37661;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__37664(s__37665){
return (new cljs.core.LazySeq(null,(function (){
var s__37665__$1 = s__37665;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37665__$1);
if(temp__5457__auto__){
var s__37665__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37665__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37665__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37667 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37666 = (0);
while(true){
if((i__37666 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__37666);
cljs.core.chunk_append.call(null,b__37667,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37668 = (i__37666 + (1));
i__37666 = G__37668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37667),sablono$core$update_arglists_$_iter__37664.call(null,cljs.core.chunk_rest.call(null,s__37665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37667),null);
}
} else {
var args = cljs.core.first.call(null,s__37665__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37664.call(null,cljs.core.rest.call(null,s__37665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37674 = arguments.length;
var i__4500__auto___37675 = (0);
while(true){
if((i__4500__auto___37675 < len__4499__auto___37674)){
args__4502__auto__.push((arguments[i__4500__auto___37675]));

var G__37676 = (i__4500__auto___37675 + (1));
i__4500__auto___37675 = G__37676;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__37670(s__37671){
return (new cljs.core.LazySeq(null,(function (){
var s__37671__$1 = s__37671;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37671__$1);
if(temp__5457__auto__){
var s__37671__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37671__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37671__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37673 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37672 = (0);
while(true){
if((i__37672 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__37672);
cljs.core.chunk_append.call(null,b__37673,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37677 = (i__37672 + (1));
i__37672 = G__37677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37673),sablono$core$iter__37670.call(null,cljs.core.chunk_rest.call(null,s__37671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37673),null);
}
} else {
var style = cljs.core.first.call(null,s__37671__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37670.call(null,cljs.core.rest.call(null,s__37671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq37669){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37669));
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
sablono.core.link_to37678 = (function sablono$core$link_to37678(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37681 = arguments.length;
var i__4500__auto___37682 = (0);
while(true){
if((i__4500__auto___37682 < len__4499__auto___37681)){
args__4502__auto__.push((arguments[i__4500__auto___37682]));

var G__37683 = (i__4500__auto___37682 + (1));
i__4500__auto___37682 = G__37683;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37678.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to37678.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37678.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to37678.cljs$lang$applyTo = (function (seq37679){
var G__37680 = cljs.core.first.call(null,seq37679);
var seq37679__$1 = cljs.core.next.call(null,seq37679);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37680,seq37679__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37678);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37684 = (function sablono$core$mail_to37684(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37691 = arguments.length;
var i__4500__auto___37692 = (0);
while(true){
if((i__4500__auto___37692 < len__4499__auto___37691)){
args__4502__auto__.push((arguments[i__4500__auto___37692]));

var G__37693 = (i__4500__auto___37692 + (1));
i__4500__auto___37692 = G__37693;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37684.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to37684.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37687){
var vec__37688 = p__37687;
var content = cljs.core.nth.call(null,vec__37688,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37684.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to37684.cljs$lang$applyTo = (function (seq37685){
var G__37686 = cljs.core.first.call(null,seq37685);
var seq37685__$1 = cljs.core.next.call(null,seq37685);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37686,seq37685__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37684);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37694 = (function sablono$core$unordered_list37694(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list37694_$_iter__37695(s__37696){
return (new cljs.core.LazySeq(null,(function (){
var s__37696__$1 = s__37696;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37696__$1);
if(temp__5457__auto__){
var s__37696__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37696__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37696__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37698 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37697 = (0);
while(true){
if((i__37697 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__37697);
cljs.core.chunk_append.call(null,b__37698,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37699 = (i__37697 + (1));
i__37697 = G__37699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37698),sablono$core$unordered_list37694_$_iter__37695.call(null,cljs.core.chunk_rest.call(null,s__37696__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37698),null);
}
} else {
var x = cljs.core.first.call(null,s__37696__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37694_$_iter__37695.call(null,cljs.core.rest.call(null,s__37696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37694);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37700 = (function sablono$core$ordered_list37700(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list37700_$_iter__37701(s__37702){
return (new cljs.core.LazySeq(null,(function (){
var s__37702__$1 = s__37702;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37702__$1);
if(temp__5457__auto__){
var s__37702__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37702__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37702__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37704 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37703 = (0);
while(true){
if((i__37703 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__37703);
cljs.core.chunk_append.call(null,b__37704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37705 = (i__37703 + (1));
i__37703 = G__37705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37704),sablono$core$ordered_list37700_$_iter__37701.call(null,cljs.core.chunk_rest.call(null,s__37702__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37704),null);
}
} else {
var x = cljs.core.first.call(null,s__37702__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37700_$_iter__37701.call(null,cljs.core.rest.call(null,s__37702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37700);
/**
 * Create an image element.
 */
sablono.core.image37706 = (function sablono$core$image37706(var_args){
var G__37708 = arguments.length;
switch (G__37708) {
case 1:
return sablono.core.image37706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image37706.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37706.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37706.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37706);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37710_SHARP_,p2__37711_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37710_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37711_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37712_SHARP_,p2__37713_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37712_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37713_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37715 = arguments.length;
switch (G__37715) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field37717 = (function sablono$core$color_field37717(var_args){
var G__37719 = arguments.length;
switch (G__37719) {
case 1:
return sablono.core.color_field37717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field37717.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37648__auto__);
});

sablono.core.color_field37717.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.color_field37717.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37717);

/**
 * Creates a date input field.
 */
sablono.core.date_field37720 = (function sablono$core$date_field37720(var_args){
var G__37722 = arguments.length;
switch (G__37722) {
case 1:
return sablono.core.date_field37720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field37720.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37648__auto__);
});

sablono.core.date_field37720.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.date_field37720.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37720);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37723 = (function sablono$core$datetime_field37723(var_args){
var G__37725 = arguments.length;
switch (G__37725) {
case 1:
return sablono.core.datetime_field37723.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37723.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field37723.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37648__auto__);
});

sablono.core.datetime_field37723.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.datetime_field37723.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37723);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37726 = (function sablono$core$datetime_local_field37726(var_args){
var G__37728 = arguments.length;
switch (G__37728) {
case 1:
return sablono.core.datetime_local_field37726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field37726.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37648__auto__);
});

sablono.core.datetime_local_field37726.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.datetime_local_field37726.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37726);

/**
 * Creates a email input field.
 */
sablono.core.email_field37729 = (function sablono$core$email_field37729(var_args){
var G__37731 = arguments.length;
switch (G__37731) {
case 1:
return sablono.core.email_field37729.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37729.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field37729.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37648__auto__);
});

sablono.core.email_field37729.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.email_field37729.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37729);

/**
 * Creates a file input field.
 */
sablono.core.file_field37732 = (function sablono$core$file_field37732(var_args){
var G__37734 = arguments.length;
switch (G__37734) {
case 1:
return sablono.core.file_field37732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field37732.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37648__auto__);
});

sablono.core.file_field37732.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.file_field37732.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37732);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37735 = (function sablono$core$hidden_field37735(var_args){
var G__37737 = arguments.length;
switch (G__37737) {
case 1:
return sablono.core.hidden_field37735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field37735.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37648__auto__);
});

sablono.core.hidden_field37735.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.hidden_field37735.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37735);

/**
 * Creates a month input field.
 */
sablono.core.month_field37738 = (function sablono$core$month_field37738(var_args){
var G__37740 = arguments.length;
switch (G__37740) {
case 1:
return sablono.core.month_field37738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field37738.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37648__auto__);
});

sablono.core.month_field37738.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.month_field37738.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37738);

/**
 * Creates a number input field.
 */
sablono.core.number_field37741 = (function sablono$core$number_field37741(var_args){
var G__37743 = arguments.length;
switch (G__37743) {
case 1:
return sablono.core.number_field37741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field37741.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37648__auto__);
});

sablono.core.number_field37741.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.number_field37741.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37741);

/**
 * Creates a password input field.
 */
sablono.core.password_field37744 = (function sablono$core$password_field37744(var_args){
var G__37746 = arguments.length;
switch (G__37746) {
case 1:
return sablono.core.password_field37744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field37744.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37648__auto__);
});

sablono.core.password_field37744.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.password_field37744.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37744);

/**
 * Creates a range input field.
 */
sablono.core.range_field37747 = (function sablono$core$range_field37747(var_args){
var G__37749 = arguments.length;
switch (G__37749) {
case 1:
return sablono.core.range_field37747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field37747.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37648__auto__);
});

sablono.core.range_field37747.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.range_field37747.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37747);

/**
 * Creates a search input field.
 */
sablono.core.search_field37750 = (function sablono$core$search_field37750(var_args){
var G__37752 = arguments.length;
switch (G__37752) {
case 1:
return sablono.core.search_field37750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field37750.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37648__auto__);
});

sablono.core.search_field37750.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.search_field37750.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37750);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37753 = (function sablono$core$tel_field37753(var_args){
var G__37755 = arguments.length;
switch (G__37755) {
case 1:
return sablono.core.tel_field37753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field37753.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37648__auto__);
});

sablono.core.tel_field37753.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.tel_field37753.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37753);

/**
 * Creates a text input field.
 */
sablono.core.text_field37756 = (function sablono$core$text_field37756(var_args){
var G__37758 = arguments.length;
switch (G__37758) {
case 1:
return sablono.core.text_field37756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field37756.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37648__auto__);
});

sablono.core.text_field37756.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.text_field37756.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37756);

/**
 * Creates a time input field.
 */
sablono.core.time_field37759 = (function sablono$core$time_field37759(var_args){
var G__37761 = arguments.length;
switch (G__37761) {
case 1:
return sablono.core.time_field37759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field37759.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37648__auto__);
});

sablono.core.time_field37759.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.time_field37759.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37759);

/**
 * Creates a url input field.
 */
sablono.core.url_field37762 = (function sablono$core$url_field37762(var_args){
var G__37764 = arguments.length;
switch (G__37764) {
case 1:
return sablono.core.url_field37762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field37762.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37648__auto__);
});

sablono.core.url_field37762.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.url_field37762.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37762);

/**
 * Creates a week input field.
 */
sablono.core.week_field37765 = (function sablono$core$week_field37765(var_args){
var G__37767 = arguments.length;
switch (G__37767) {
case 1:
return sablono.core.week_field37765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field37765.cljs$core$IFn$_invoke$arity$1 = (function (name__37648__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37648__auto__);
});

sablono.core.week_field37765.cljs$core$IFn$_invoke$arity$2 = (function (name__37648__auto__,value__37649__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37648__auto__,value__37649__auto__);
});

sablono.core.week_field37765.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37765);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37785 = (function sablono$core$check_box37785(var_args){
var G__37787 = arguments.length;
switch (G__37787) {
case 1:
return sablono.core.check_box37785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37785.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box37785.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box37785.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37785.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37785.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37785);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37789 = (function sablono$core$radio_button37789(var_args){
var G__37791 = arguments.length;
switch (G__37791) {
case 1:
return sablono.core.radio_button37789.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37789.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button37789.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button37789.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37789.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37789.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37789);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37793 = (function sablono$core$select_options37793(coll){
var iter__4292__auto__ = (function sablono$core$select_options37793_$_iter__37794(s__37795){
return (new cljs.core.LazySeq(null,(function (){
var s__37795__$1 = s__37795;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37795__$1);
if(temp__5457__auto__){
var s__37795__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37795__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37795__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37797 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37796 = (0);
while(true){
if((i__37796 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__37796);
cljs.core.chunk_append.call(null,b__37797,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37798 = x;
var text = cljs.core.nth.call(null,vec__37798,(0),null);
var val = cljs.core.nth.call(null,vec__37798,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37798,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37793.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37804 = (i__37796 + (1));
i__37796 = G__37804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37797),sablono$core$select_options37793_$_iter__37794.call(null,cljs.core.chunk_rest.call(null,s__37795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37797),null);
}
} else {
var x = cljs.core.first.call(null,s__37795__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37801 = x;
var text = cljs.core.nth.call(null,vec__37801,(0),null);
var val = cljs.core.nth.call(null,vec__37801,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37801,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37793.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37793_$_iter__37794.call(null,cljs.core.rest.call(null,s__37795__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37793);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37805 = (function sablono$core$drop_down37805(var_args){
var G__37807 = arguments.length;
switch (G__37807) {
case 2:
return sablono.core.drop_down37805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37805.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down37805.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37805.call(null,name,options,null);
});

sablono.core.drop_down37805.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37805.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37805);
/**
 * Creates a text area element.
 */
sablono.core.text_area37809 = (function sablono$core$text_area37809(var_args){
var G__37811 = arguments.length;
switch (G__37811) {
case 1:
return sablono.core.text_area37809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area37809.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area37809.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area37809.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37809);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37813 = (function sablono$core$label37813(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37813);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37814 = (function sablono$core$submit_button37814(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37814);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37815 = (function sablono$core$reset_button37815(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37815);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37816 = (function sablono$core$form_to37816(var_args){
var args__4502__auto__ = [];
var len__4499__auto___37823 = arguments.length;
var i__4500__auto___37824 = (0);
while(true){
if((i__4500__auto___37824 < len__4499__auto___37823)){
args__4502__auto__.push((arguments[i__4500__auto___37824]));

var G__37825 = (i__4500__auto___37824 + (1));
i__4500__auto___37824 = G__37825;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to37816.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to37816.cljs$core$IFn$_invoke$arity$variadic = (function (p__37819,body){
var vec__37820 = p__37819;
var method = cljs.core.nth.call(null,vec__37820,(0),null);
var action = cljs.core.nth.call(null,vec__37820,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37816.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to37816.cljs$lang$applyTo = (function (seq37817){
var G__37818 = cljs.core.first.call(null,seq37817);
var seq37817__$1 = cljs.core.next.call(null,seq37817);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37818,seq37817__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37816);
