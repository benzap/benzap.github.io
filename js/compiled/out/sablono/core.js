// Compiled by ClojureScript 1.10.439 {}
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
var G__38881__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__38878 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__38879 = cljs.core.seq.call(null,vec__38878);
var first__38880 = cljs.core.first.call(null,seq__38879);
var seq__38879__$1 = cljs.core.next.call(null,seq__38879);
var tag = first__38880;
var body = seq__38879__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__38881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38882__i = 0, G__38882__a = new Array(arguments.length -  0);
while (G__38882__i < G__38882__a.length) {G__38882__a[G__38882__i] = arguments[G__38882__i + 0]; ++G__38882__i;}
  args = new cljs.core.IndexedSeq(G__38882__a,0,null);
} 
return G__38881__delegate.call(this,args);};
G__38881.cljs$lang$maxFixedArity = 0;
G__38881.cljs$lang$applyTo = (function (arglist__38883){
var args = cljs.core.seq(arglist__38883);
return G__38881__delegate(args);
});
G__38881.cljs$core$IFn$_invoke$arity$variadic = G__38881__delegate;
return G__38881;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4434__auto__ = (function sablono$core$update_arglists_$_iter__38884(s__38885){
return (new cljs.core.LazySeq(null,(function (){
var s__38885__$1 = s__38885;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38885__$1);
if(temp__5720__auto__){
var s__38885__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38885__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38885__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38887 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38886 = (0);
while(true){
if((i__38886 < size__4433__auto__)){
var args = cljs.core._nth.call(null,c__4432__auto__,i__38886);
cljs.core.chunk_append.call(null,b__38887,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38888 = (i__38886 + (1));
i__38886 = G__38888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38887),sablono$core$update_arglists_$_iter__38884.call(null,cljs.core.chunk_rest.call(null,s__38885__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38887),null);
}
} else {
var args = cljs.core.first.call(null,s__38885__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38884.call(null,cljs.core.rest.call(null,s__38885__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38894 = arguments.length;
var i__4642__auto___38895 = (0);
while(true){
if((i__4642__auto___38895 < len__4641__auto___38894)){
args__4647__auto__.push((arguments[i__4642__auto___38895]));

var G__38896 = (i__4642__auto___38895 + (1));
i__4642__auto___38895 = G__38896;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4434__auto__ = (function sablono$core$iter__38890(s__38891){
return (new cljs.core.LazySeq(null,(function (){
var s__38891__$1 = s__38891;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38891__$1);
if(temp__5720__auto__){
var s__38891__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38891__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38891__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38893 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38892 = (0);
while(true){
if((i__38892 < size__4433__auto__)){
var style = cljs.core._nth.call(null,c__4432__auto__,i__38892);
cljs.core.chunk_append.call(null,b__38893,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38897 = (i__38892 + (1));
i__38892 = G__38897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38893),sablono$core$iter__38890.call(null,cljs.core.chunk_rest.call(null,s__38891__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38893),null);
}
} else {
var style = cljs.core.first.call(null,s__38891__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38890.call(null,cljs.core.rest.call(null,s__38891__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq38889){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38889));
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
sablono.core.link_to38898 = (function sablono$core$link_to38898(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38901 = arguments.length;
var i__4642__auto___38902 = (0);
while(true){
if((i__4642__auto___38902 < len__4641__auto___38901)){
args__4647__auto__.push((arguments[i__4642__auto___38902]));

var G__38903 = (i__4642__auto___38902 + (1));
i__4642__auto___38902 = G__38903;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38898.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.link_to38898.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to38898.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to38898.cljs$lang$applyTo = (function (seq38899){
var G__38900 = cljs.core.first.call(null,seq38899);
var seq38899__$1 = cljs.core.next.call(null,seq38899);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38900,seq38899__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38898);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38904 = (function sablono$core$mail_to38904(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38911 = arguments.length;
var i__4642__auto___38912 = (0);
while(true){
if((i__4642__auto___38912 < len__4641__auto___38911)){
args__4647__auto__.push((arguments[i__4642__auto___38912]));

var G__38913 = (i__4642__auto___38912 + (1));
i__4642__auto___38912 = G__38913;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38904.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.mail_to38904.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38907){
var vec__38908 = p__38907;
var content = cljs.core.nth.call(null,vec__38908,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4047__auto__ = content;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to38904.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to38904.cljs$lang$applyTo = (function (seq38905){
var G__38906 = cljs.core.first.call(null,seq38905);
var seq38905__$1 = cljs.core.next.call(null,seq38905);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38906,seq38905__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38904);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38914 = (function sablono$core$unordered_list38914(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4434__auto__ = (function sablono$core$unordered_list38914_$_iter__38915(s__38916){
return (new cljs.core.LazySeq(null,(function (){
var s__38916__$1 = s__38916;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38916__$1);
if(temp__5720__auto__){
var s__38916__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38916__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38916__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38918 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38917 = (0);
while(true){
if((i__38917 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__38917);
cljs.core.chunk_append.call(null,b__38918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38919 = (i__38917 + (1));
i__38917 = G__38919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38918),sablono$core$unordered_list38914_$_iter__38915.call(null,cljs.core.chunk_rest.call(null,s__38916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38918),null);
}
} else {
var x = cljs.core.first.call(null,s__38916__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38914_$_iter__38915.call(null,cljs.core.rest.call(null,s__38916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38914);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38920 = (function sablono$core$ordered_list38920(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4434__auto__ = (function sablono$core$ordered_list38920_$_iter__38921(s__38922){
return (new cljs.core.LazySeq(null,(function (){
var s__38922__$1 = s__38922;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38922__$1);
if(temp__5720__auto__){
var s__38922__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38922__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__38922__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__38924 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__38923 = (0);
while(true){
if((i__38923 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__38923);
cljs.core.chunk_append.call(null,b__38924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38925 = (i__38923 + (1));
i__38923 = G__38925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38924),sablono$core$ordered_list38920_$_iter__38921.call(null,cljs.core.chunk_rest.call(null,s__38922__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38924),null);
}
} else {
var x = cljs.core.first.call(null,s__38922__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38920_$_iter__38921.call(null,cljs.core.rest.call(null,s__38922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38920);
/**
 * Create an image element.
 */
sablono.core.image38926 = (function sablono$core$image38926(var_args){
var G__38928 = arguments.length;
switch (G__38928) {
case 1:
return sablono.core.image38926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image38926.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image38926.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image38926.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38926);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__38930_SHARP_,p2__38931_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38930_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38931_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38932_SHARP_,p2__38933_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38932_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38933_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38935 = arguments.length;
switch (G__38935) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4047__auto__ = value;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field38937 = (function sablono$core$color_field38937(var_args){
var G__38939 = arguments.length;
switch (G__38939) {
case 1:
return sablono.core.color_field38937.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38937.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field38937.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38698__auto__);
});

sablono.core.color_field38937.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.color_field38937.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38937);

/**
 * Creates a date input field.
 */
sablono.core.date_field38940 = (function sablono$core$date_field38940(var_args){
var G__38942 = arguments.length;
switch (G__38942) {
case 1:
return sablono.core.date_field38940.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38940.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field38940.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38698__auto__);
});

sablono.core.date_field38940.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.date_field38940.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38940);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38943 = (function sablono$core$datetime_field38943(var_args){
var G__38945 = arguments.length;
switch (G__38945) {
case 1:
return sablono.core.datetime_field38943.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38943.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field38943.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38698__auto__);
});

sablono.core.datetime_field38943.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.datetime_field38943.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38943);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38946 = (function sablono$core$datetime_local_field38946(var_args){
var G__38948 = arguments.length;
switch (G__38948) {
case 1:
return sablono.core.datetime_local_field38946.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38946.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field38946.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38698__auto__);
});

sablono.core.datetime_local_field38946.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.datetime_local_field38946.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38946);

/**
 * Creates a email input field.
 */
sablono.core.email_field38949 = (function sablono$core$email_field38949(var_args){
var G__38951 = arguments.length;
switch (G__38951) {
case 1:
return sablono.core.email_field38949.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38949.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field38949.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38698__auto__);
});

sablono.core.email_field38949.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.email_field38949.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38949);

/**
 * Creates a file input field.
 */
sablono.core.file_field38952 = (function sablono$core$file_field38952(var_args){
var G__38954 = arguments.length;
switch (G__38954) {
case 1:
return sablono.core.file_field38952.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38952.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field38952.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38698__auto__);
});

sablono.core.file_field38952.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.file_field38952.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38952);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38955 = (function sablono$core$hidden_field38955(var_args){
var G__38957 = arguments.length;
switch (G__38957) {
case 1:
return sablono.core.hidden_field38955.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38955.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field38955.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38698__auto__);
});

sablono.core.hidden_field38955.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.hidden_field38955.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38955);

/**
 * Creates a month input field.
 */
sablono.core.month_field38958 = (function sablono$core$month_field38958(var_args){
var G__38960 = arguments.length;
switch (G__38960) {
case 1:
return sablono.core.month_field38958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field38958.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38698__auto__);
});

sablono.core.month_field38958.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.month_field38958.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38958);

/**
 * Creates a number input field.
 */
sablono.core.number_field38961 = (function sablono$core$number_field38961(var_args){
var G__38963 = arguments.length;
switch (G__38963) {
case 1:
return sablono.core.number_field38961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field38961.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38698__auto__);
});

sablono.core.number_field38961.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.number_field38961.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38961);

/**
 * Creates a password input field.
 */
sablono.core.password_field38964 = (function sablono$core$password_field38964(var_args){
var G__38966 = arguments.length;
switch (G__38966) {
case 1:
return sablono.core.password_field38964.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38964.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field38964.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38698__auto__);
});

sablono.core.password_field38964.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.password_field38964.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38964);

/**
 * Creates a range input field.
 */
sablono.core.range_field38967 = (function sablono$core$range_field38967(var_args){
var G__38969 = arguments.length;
switch (G__38969) {
case 1:
return sablono.core.range_field38967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field38967.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38698__auto__);
});

sablono.core.range_field38967.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.range_field38967.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38967);

/**
 * Creates a search input field.
 */
sablono.core.search_field38970 = (function sablono$core$search_field38970(var_args){
var G__38972 = arguments.length;
switch (G__38972) {
case 1:
return sablono.core.search_field38970.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38970.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field38970.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38698__auto__);
});

sablono.core.search_field38970.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.search_field38970.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38970);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38973 = (function sablono$core$tel_field38973(var_args){
var G__38975 = arguments.length;
switch (G__38975) {
case 1:
return sablono.core.tel_field38973.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38973.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field38973.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38698__auto__);
});

sablono.core.tel_field38973.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.tel_field38973.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38973);

/**
 * Creates a text input field.
 */
sablono.core.text_field38976 = (function sablono$core$text_field38976(var_args){
var G__38978 = arguments.length;
switch (G__38978) {
case 1:
return sablono.core.text_field38976.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38976.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field38976.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38698__auto__);
});

sablono.core.text_field38976.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.text_field38976.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38976);

/**
 * Creates a time input field.
 */
sablono.core.time_field38979 = (function sablono$core$time_field38979(var_args){
var G__38981 = arguments.length;
switch (G__38981) {
case 1:
return sablono.core.time_field38979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field38979.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38698__auto__);
});

sablono.core.time_field38979.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.time_field38979.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38979);

/**
 * Creates a url input field.
 */
sablono.core.url_field38982 = (function sablono$core$url_field38982(var_args){
var G__38984 = arguments.length;
switch (G__38984) {
case 1:
return sablono.core.url_field38982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field38982.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38698__auto__);
});

sablono.core.url_field38982.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.url_field38982.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38982);

/**
 * Creates a week input field.
 */
sablono.core.week_field38985 = (function sablono$core$week_field38985(var_args){
var G__38987 = arguments.length;
switch (G__38987) {
case 1:
return sablono.core.week_field38985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field38985.cljs$core$IFn$_invoke$arity$1 = (function (name__38698__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38698__auto__);
});

sablono.core.week_field38985.cljs$core$IFn$_invoke$arity$2 = (function (name__38698__auto__,value__38699__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__38698__auto__,value__38699__auto__);
});

sablono.core.week_field38985.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38985);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39005 = (function sablono$core$check_box39005(var_args){
var G__39007 = arguments.length;
switch (G__39007) {
case 1:
return sablono.core.check_box39005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39005.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box39005.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box39005.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39005.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39005.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box39005);
/**
 * Creates a radio button.
 */
sablono.core.radio_button39009 = (function sablono$core$radio_button39009(var_args){
var G__39011 = arguments.length;
switch (G__39011) {
case 1:
return sablono.core.radio_button39009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button39009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button39009.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button39009.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button39009.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button39009.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button39009.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button39009);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options39013 = (function sablono$core$select_options39013(coll){
var iter__4434__auto__ = (function sablono$core$select_options39013_$_iter__39014(s__39015){
return (new cljs.core.LazySeq(null,(function (){
var s__39015__$1 = s__39015;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__39015__$1);
if(temp__5720__auto__){
var s__39015__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39015__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__39015__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__39017 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__39016 = (0);
while(true){
if((i__39016 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__39016);
cljs.core.chunk_append.call(null,b__39017,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39018 = x;
var text = cljs.core.nth.call(null,vec__39018,(0),null);
var val = cljs.core.nth.call(null,vec__39018,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39018,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options39013.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__39024 = (i__39016 + (1));
i__39016 = G__39024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39017),sablono$core$select_options39013_$_iter__39014.call(null,cljs.core.chunk_rest.call(null,s__39015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39017),null);
}
} else {
var x = cljs.core.first.call(null,s__39015__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39021 = x;
var text = cljs.core.nth.call(null,vec__39021,(0),null);
var val = cljs.core.nth.call(null,vec__39021,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39021,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options39013.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options39013_$_iter__39014.call(null,cljs.core.rest.call(null,s__39015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options39013);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down39025 = (function sablono$core$drop_down39025(var_args){
var G__39027 = arguments.length;
switch (G__39027) {
case 2:
return sablono.core.drop_down39025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down39025.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down39025.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down39025.call(null,name,options,null);
});

sablono.core.drop_down39025.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down39025.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down39025);
/**
 * Creates a text area element.
 */
sablono.core.text_area39029 = (function sablono$core$text_area39029(var_args){
var G__39031 = arguments.length;
switch (G__39031) {
case 1:
return sablono.core.text_area39029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area39029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area39029.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area39029.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4047__auto__ = value;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area39029.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area39029);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label39033 = (function sablono$core$label39033(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label39033);
/**
 * Creates a submit button.
 */
sablono.core.submit_button39034 = (function sablono$core$submit_button39034(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button39034);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button39035 = (function sablono$core$reset_button39035(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button39035);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to39036 = (function sablono$core$form_to39036(var_args){
var args__4647__auto__ = [];
var len__4641__auto___39043 = arguments.length;
var i__4642__auto___39044 = (0);
while(true){
if((i__4642__auto___39044 < len__4641__auto___39043)){
args__4647__auto__.push((arguments[i__4642__auto___39044]));

var G__39045 = (i__4642__auto___39044 + (1));
i__4642__auto___39044 = G__39045;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to39036.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.form_to39036.cljs$core$IFn$_invoke$arity$variadic = (function (p__39039,body){
var vec__39040 = p__39039;
var method = cljs.core.nth.call(null,vec__39040,(0),null);
var action = cljs.core.nth.call(null,vec__39040,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to39036.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to39036.cljs$lang$applyTo = (function (seq39037){
var G__39038 = cljs.core.first.call(null,seq39037);
var seq39037__$1 = cljs.core.next.call(null,seq39037);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39038,seq39037__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to39036);
