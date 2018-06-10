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
var G__38818__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__38815 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__38816 = cljs.core.seq.call(null,vec__38815);
var first__38817 = cljs.core.first.call(null,seq__38816);
var seq__38816__$1 = cljs.core.next.call(null,seq__38816);
var tag = first__38817;
var body = seq__38816__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__38818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38819__i = 0, G__38819__a = new Array(arguments.length -  0);
while (G__38819__i < G__38819__a.length) {G__38819__a[G__38819__i] = arguments[G__38819__i + 0]; ++G__38819__i;}
  args = new cljs.core.IndexedSeq(G__38819__a,0,null);
} 
return G__38818__delegate.call(this,args);};
G__38818.cljs$lang$maxFixedArity = 0;
G__38818.cljs$lang$applyTo = (function (arglist__38820){
var args = cljs.core.seq(arglist__38820);
return G__38818__delegate(args);
});
G__38818.cljs$core$IFn$_invoke$arity$variadic = G__38818__delegate;
return G__38818;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4292__auto__ = (function sablono$core$update_arglists_$_iter__38821(s__38822){
return (new cljs.core.LazySeq(null,(function (){
var s__38822__$1 = s__38822;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38822__$1);
if(temp__5457__auto__){
var s__38822__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38822__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__38822__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__38824 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__38823 = (0);
while(true){
if((i__38823 < size__4291__auto__)){
var args = cljs.core._nth.call(null,c__4290__auto__,i__38823);
cljs.core.chunk_append.call(null,b__38824,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38825 = (i__38823 + (1));
i__38823 = G__38825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38824),sablono$core$update_arglists_$_iter__38821.call(null,cljs.core.chunk_rest.call(null,s__38822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38824),null);
}
} else {
var args = cljs.core.first.call(null,s__38822__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38821.call(null,cljs.core.rest.call(null,s__38822__$2)));
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
var len__4499__auto___38831 = arguments.length;
var i__4500__auto___38832 = (0);
while(true){
if((i__4500__auto___38832 < len__4499__auto___38831)){
args__4502__auto__.push((arguments[i__4500__auto___38832]));

var G__38833 = (i__4500__auto___38832 + (1));
i__4500__auto___38832 = G__38833;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4292__auto__ = (function sablono$core$iter__38827(s__38828){
return (new cljs.core.LazySeq(null,(function (){
var s__38828__$1 = s__38828;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38828__$1);
if(temp__5457__auto__){
var s__38828__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38828__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__38828__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__38830 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__38829 = (0);
while(true){
if((i__38829 < size__4291__auto__)){
var style = cljs.core._nth.call(null,c__4290__auto__,i__38829);
cljs.core.chunk_append.call(null,b__38830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38834 = (i__38829 + (1));
i__38829 = G__38834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38830),sablono$core$iter__38827.call(null,cljs.core.chunk_rest.call(null,s__38828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38830),null);
}
} else {
var style = cljs.core.first.call(null,s__38828__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38827.call(null,cljs.core.rest.call(null,s__38828__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq38826){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38826));
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
sablono.core.link_to38835 = (function sablono$core$link_to38835(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38838 = arguments.length;
var i__4500__auto___38839 = (0);
while(true){
if((i__4500__auto___38839 < len__4499__auto___38838)){
args__4502__auto__.push((arguments[i__4500__auto___38839]));

var G__38840 = (i__4500__auto___38839 + (1));
i__4500__auto___38839 = G__38840;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38835.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.link_to38835.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to38835.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to38835.cljs$lang$applyTo = (function (seq38836){
var G__38837 = cljs.core.first.call(null,seq38836);
var seq38836__$1 = cljs.core.next.call(null,seq38836);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38837,seq38836__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38835);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38841 = (function sablono$core$mail_to38841(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38848 = arguments.length;
var i__4500__auto___38849 = (0);
while(true){
if((i__4500__auto___38849 < len__4499__auto___38848)){
args__4502__auto__.push((arguments[i__4500__auto___38849]));

var G__38850 = (i__4500__auto___38849 + (1));
i__4500__auto___38849 = G__38850;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38841.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.mail_to38841.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38844){
var vec__38845 = p__38844;
var content = cljs.core.nth.call(null,vec__38845,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3922__auto__ = content;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to38841.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to38841.cljs$lang$applyTo = (function (seq38842){
var G__38843 = cljs.core.first.call(null,seq38842);
var seq38842__$1 = cljs.core.next.call(null,seq38842);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38843,seq38842__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38841);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38851 = (function sablono$core$unordered_list38851(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4292__auto__ = (function sablono$core$unordered_list38851_$_iter__38852(s__38853){
return (new cljs.core.LazySeq(null,(function (){
var s__38853__$1 = s__38853;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38853__$1);
if(temp__5457__auto__){
var s__38853__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38853__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__38853__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__38855 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__38854 = (0);
while(true){
if((i__38854 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__38854);
cljs.core.chunk_append.call(null,b__38855,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38856 = (i__38854 + (1));
i__38854 = G__38856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38855),sablono$core$unordered_list38851_$_iter__38852.call(null,cljs.core.chunk_rest.call(null,s__38853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38855),null);
}
} else {
var x = cljs.core.first.call(null,s__38853__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38851_$_iter__38852.call(null,cljs.core.rest.call(null,s__38853__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38851);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38857 = (function sablono$core$ordered_list38857(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4292__auto__ = (function sablono$core$ordered_list38857_$_iter__38858(s__38859){
return (new cljs.core.LazySeq(null,(function (){
var s__38859__$1 = s__38859;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38859__$1);
if(temp__5457__auto__){
var s__38859__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38859__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__38859__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__38861 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__38860 = (0);
while(true){
if((i__38860 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__38860);
cljs.core.chunk_append.call(null,b__38861,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38862 = (i__38860 + (1));
i__38860 = G__38862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38861),sablono$core$ordered_list38857_$_iter__38858.call(null,cljs.core.chunk_rest.call(null,s__38859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38861),null);
}
} else {
var x = cljs.core.first.call(null,s__38859__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38857_$_iter__38858.call(null,cljs.core.rest.call(null,s__38859__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38857);
/**
 * Create an image element.
 */
sablono.core.image38863 = (function sablono$core$image38863(var_args){
var G__38865 = arguments.length;
switch (G__38865) {
case 1:
return sablono.core.image38863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image38863.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image38863.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image38863.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38863);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__38867_SHARP_,p2__38868_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38867_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38868_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38869_SHARP_,p2__38870_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38869_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38870_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38872 = arguments.length;
switch (G__38872) {
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
sablono.core.color_field38874 = (function sablono$core$color_field38874(var_args){
var G__38876 = arguments.length;
switch (G__38876) {
case 1:
return sablono.core.color_field38874.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38874.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field38874.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__38805__auto__);
});

sablono.core.color_field38874.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.color_field38874.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38874);

/**
 * Creates a date input field.
 */
sablono.core.date_field38877 = (function sablono$core$date_field38877(var_args){
var G__38879 = arguments.length;
switch (G__38879) {
case 1:
return sablono.core.date_field38877.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38877.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field38877.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__38805__auto__);
});

sablono.core.date_field38877.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.date_field38877.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38877);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38880 = (function sablono$core$datetime_field38880(var_args){
var G__38882 = arguments.length;
switch (G__38882) {
case 1:
return sablono.core.datetime_field38880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field38880.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__38805__auto__);
});

sablono.core.datetime_field38880.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.datetime_field38880.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38880);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38883 = (function sablono$core$datetime_local_field38883(var_args){
var G__38885 = arguments.length;
switch (G__38885) {
case 1:
return sablono.core.datetime_local_field38883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field38883.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__38805__auto__);
});

sablono.core.datetime_local_field38883.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.datetime_local_field38883.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38883);

/**
 * Creates a email input field.
 */
sablono.core.email_field38886 = (function sablono$core$email_field38886(var_args){
var G__38888 = arguments.length;
switch (G__38888) {
case 1:
return sablono.core.email_field38886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field38886.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__38805__auto__);
});

sablono.core.email_field38886.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.email_field38886.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38886);

/**
 * Creates a file input field.
 */
sablono.core.file_field38889 = (function sablono$core$file_field38889(var_args){
var G__38891 = arguments.length;
switch (G__38891) {
case 1:
return sablono.core.file_field38889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field38889.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__38805__auto__);
});

sablono.core.file_field38889.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.file_field38889.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38889);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38892 = (function sablono$core$hidden_field38892(var_args){
var G__38894 = arguments.length;
switch (G__38894) {
case 1:
return sablono.core.hidden_field38892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field38892.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__38805__auto__);
});

sablono.core.hidden_field38892.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.hidden_field38892.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38892);

/**
 * Creates a month input field.
 */
sablono.core.month_field38895 = (function sablono$core$month_field38895(var_args){
var G__38897 = arguments.length;
switch (G__38897) {
case 1:
return sablono.core.month_field38895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field38895.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__38805__auto__);
});

sablono.core.month_field38895.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.month_field38895.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38895);

/**
 * Creates a number input field.
 */
sablono.core.number_field38898 = (function sablono$core$number_field38898(var_args){
var G__38900 = arguments.length;
switch (G__38900) {
case 1:
return sablono.core.number_field38898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field38898.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__38805__auto__);
});

sablono.core.number_field38898.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.number_field38898.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38898);

/**
 * Creates a password input field.
 */
sablono.core.password_field38901 = (function sablono$core$password_field38901(var_args){
var G__38903 = arguments.length;
switch (G__38903) {
case 1:
return sablono.core.password_field38901.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38901.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field38901.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__38805__auto__);
});

sablono.core.password_field38901.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.password_field38901.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38901);

/**
 * Creates a range input field.
 */
sablono.core.range_field38904 = (function sablono$core$range_field38904(var_args){
var G__38906 = arguments.length;
switch (G__38906) {
case 1:
return sablono.core.range_field38904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field38904.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__38805__auto__);
});

sablono.core.range_field38904.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.range_field38904.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38904);

/**
 * Creates a search input field.
 */
sablono.core.search_field38907 = (function sablono$core$search_field38907(var_args){
var G__38909 = arguments.length;
switch (G__38909) {
case 1:
return sablono.core.search_field38907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field38907.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__38805__auto__);
});

sablono.core.search_field38907.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.search_field38907.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38907);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38910 = (function sablono$core$tel_field38910(var_args){
var G__38912 = arguments.length;
switch (G__38912) {
case 1:
return sablono.core.tel_field38910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field38910.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__38805__auto__);
});

sablono.core.tel_field38910.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.tel_field38910.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38910);

/**
 * Creates a text input field.
 */
sablono.core.text_field38913 = (function sablono$core$text_field38913(var_args){
var G__38915 = arguments.length;
switch (G__38915) {
case 1:
return sablono.core.text_field38913.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38913.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field38913.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__38805__auto__);
});

sablono.core.text_field38913.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.text_field38913.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38913);

/**
 * Creates a time input field.
 */
sablono.core.time_field38916 = (function sablono$core$time_field38916(var_args){
var G__38918 = arguments.length;
switch (G__38918) {
case 1:
return sablono.core.time_field38916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field38916.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__38805__auto__);
});

sablono.core.time_field38916.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.time_field38916.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38916);

/**
 * Creates a url input field.
 */
sablono.core.url_field38919 = (function sablono$core$url_field38919(var_args){
var G__38921 = arguments.length;
switch (G__38921) {
case 1:
return sablono.core.url_field38919.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38919.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field38919.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__38805__auto__);
});

sablono.core.url_field38919.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.url_field38919.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38919);

/**
 * Creates a week input field.
 */
sablono.core.week_field38922 = (function sablono$core$week_field38922(var_args){
var G__38924 = arguments.length;
switch (G__38924) {
case 1:
return sablono.core.week_field38922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field38922.cljs$core$IFn$_invoke$arity$1 = (function (name__38805__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__38805__auto__);
});

sablono.core.week_field38922.cljs$core$IFn$_invoke$arity$2 = (function (name__38805__auto__,value__38806__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__38805__auto__,value__38806__auto__);
});

sablono.core.week_field38922.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38922);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38942 = (function sablono$core$check_box38942(var_args){
var G__38944 = arguments.length;
switch (G__38944) {
case 1:
return sablono.core.check_box38942.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38942.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38942.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box38942.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box38942.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38942.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38942.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38942);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38946 = (function sablono$core$radio_button38946(var_args){
var G__38948 = arguments.length;
switch (G__38948) {
case 1:
return sablono.core.radio_button38946.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38946.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38946.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button38946.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button38946.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38946.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38946.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38946);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38950 = (function sablono$core$select_options38950(coll){
var iter__4292__auto__ = (function sablono$core$select_options38950_$_iter__38951(s__38952){
return (new cljs.core.LazySeq(null,(function (){
var s__38952__$1 = s__38952;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38952__$1);
if(temp__5457__auto__){
var s__38952__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38952__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__38952__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__38954 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__38953 = (0);
while(true){
if((i__38953 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__38953);
cljs.core.chunk_append.call(null,b__38954,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38955 = x;
var text = cljs.core.nth.call(null,vec__38955,(0),null);
var val = cljs.core.nth.call(null,vec__38955,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38955,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38950.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38961 = (i__38953 + (1));
i__38953 = G__38961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38954),sablono$core$select_options38950_$_iter__38951.call(null,cljs.core.chunk_rest.call(null,s__38952__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38954),null);
}
} else {
var x = cljs.core.first.call(null,s__38952__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38958 = x;
var text = cljs.core.nth.call(null,vec__38958,(0),null);
var val = cljs.core.nth.call(null,vec__38958,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38958,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38950.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38950_$_iter__38951.call(null,cljs.core.rest.call(null,s__38952__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38950);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38962 = (function sablono$core$drop_down38962(var_args){
var G__38964 = arguments.length;
switch (G__38964) {
case 2:
return sablono.core.drop_down38962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38962.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down38962.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38962.call(null,name,options,null);
});

sablono.core.drop_down38962.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38962.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38962);
/**
 * Creates a text area element.
 */
sablono.core.text_area38966 = (function sablono$core$text_area38966(var_args){
var G__38968 = arguments.length;
switch (G__38968) {
case 1:
return sablono.core.text_area38966.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38966.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area38966.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area38966.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3922__auto__ = value;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area38966.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38966);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38970 = (function sablono$core$label38970(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38970);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38971 = (function sablono$core$submit_button38971(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38971);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38972 = (function sablono$core$reset_button38972(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38972);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38973 = (function sablono$core$form_to38973(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38980 = arguments.length;
var i__4500__auto___38981 = (0);
while(true){
if((i__4500__auto___38981 < len__4499__auto___38980)){
args__4502__auto__.push((arguments[i__4500__auto___38981]));

var G__38982 = (i__4500__auto___38981 + (1));
i__4500__auto___38981 = G__38982;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38973.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

sablono.core.form_to38973.cljs$core$IFn$_invoke$arity$variadic = (function (p__38976,body){
var vec__38977 = p__38976;
var method = cljs.core.nth.call(null,vec__38977,(0),null);
var action = cljs.core.nth.call(null,vec__38977,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38973.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to38973.cljs$lang$applyTo = (function (seq38974){
var G__38975 = cljs.core.first.call(null,seq38974);
var seq38974__$1 = cljs.core.next.call(null,seq38974);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38975,seq38974__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38973);
