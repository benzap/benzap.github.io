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
var G__37043__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37040 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__37041 = cljs.core.seq.call(null,vec__37040);
var first__37042 = cljs.core.first.call(null,seq__37041);
var seq__37041__$1 = cljs.core.next.call(null,seq__37041);
var tag = first__37042;
var body = seq__37041__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37044__i = 0, G__37044__a = new Array(arguments.length -  0);
while (G__37044__i < G__37044__a.length) {G__37044__a[G__37044__i] = arguments[G__37044__i + 0]; ++G__37044__i;}
  args = new cljs.core.IndexedSeq(G__37044__a,0,null);
} 
return G__37043__delegate.call(this,args);};
G__37043.cljs$lang$maxFixedArity = 0;
G__37043.cljs$lang$applyTo = (function (arglist__37045){
var args = cljs.core.seq(arglist__37045);
return G__37043__delegate(args);
});
G__37043.cljs$core$IFn$_invoke$arity$variadic = G__37043__delegate;
return G__37043;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4291__auto__ = (function sablono$core$update_arglists_$_iter__37046(s__37047){
return (new cljs.core.LazySeq(null,(function (){
var s__37047__$1 = s__37047;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37047__$1);
if(temp__5457__auto__){
var s__37047__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37047__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37047__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37049 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37048 = (0);
while(true){
if((i__37048 < size__4290__auto__)){
var args = cljs.core._nth.call(null,c__4289__auto__,i__37048);
cljs.core.chunk_append.call(null,b__37049,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37050 = (i__37048 + (1));
i__37048 = G__37050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37049),sablono$core$update_arglists_$_iter__37046.call(null,cljs.core.chunk_rest.call(null,s__37047__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37049),null);
}
} else {
var args = cljs.core.first.call(null,s__37047__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37046.call(null,cljs.core.rest.call(null,s__37047__$2)));
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
var len__4498__auto___37056 = arguments.length;
var i__4499__auto___37057 = (0);
while(true){
if((i__4499__auto___37057 < len__4498__auto___37056)){
args__4501__auto__.push((arguments[i__4499__auto___37057]));

var G__37058 = (i__4499__auto___37057 + (1));
i__4499__auto___37057 = G__37058;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((0) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4502__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4291__auto__ = (function sablono$core$iter__37052(s__37053){
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
var style = cljs.core._nth.call(null,c__4289__auto__,i__37054);
cljs.core.chunk_append.call(null,b__37055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37059 = (i__37054 + (1));
i__37054 = G__37059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37055),sablono$core$iter__37052.call(null,cljs.core.chunk_rest.call(null,s__37053__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37055),null);
}
} else {
var style = cljs.core.first.call(null,s__37053__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37052.call(null,cljs.core.rest.call(null,s__37053__$2)));
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
sablono.core.include_css.cljs$lang$applyTo = (function (seq37051){
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37051));
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
sablono.core.link_to37060 = (function sablono$core$link_to37060(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37063 = arguments.length;
var i__4499__auto___37064 = (0);
while(true){
if((i__4499__auto___37064 < len__4498__auto___37063)){
args__4501__auto__.push((arguments[i__4499__auto___37064]));

var G__37065 = (i__4499__auto___37064 + (1));
i__4499__auto___37064 = G__37065;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37060.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.link_to37060.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37060.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to37060.cljs$lang$applyTo = (function (seq37061){
var G__37062 = cljs.core.first.call(null,seq37061);
var seq37061__$1 = cljs.core.next.call(null,seq37061);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37062,seq37061__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37060);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37066 = (function sablono$core$mail_to37066(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37073 = arguments.length;
var i__4499__auto___37074 = (0);
while(true){
if((i__4499__auto___37074 < len__4498__auto___37073)){
args__4501__auto__.push((arguments[i__4499__auto___37074]));

var G__37075 = (i__4499__auto___37074 + (1));
i__4499__auto___37074 = G__37075;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37066.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.mail_to37066.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37069){
var vec__37070 = p__37069;
var content = cljs.core.nth.call(null,vec__37070,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3921__auto__ = content;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37066.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to37066.cljs$lang$applyTo = (function (seq37067){
var G__37068 = cljs.core.first.call(null,seq37067);
var seq37067__$1 = cljs.core.next.call(null,seq37067);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37068,seq37067__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37066);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37076 = (function sablono$core$unordered_list37076(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4291__auto__ = (function sablono$core$unordered_list37076_$_iter__37077(s__37078){
return (new cljs.core.LazySeq(null,(function (){
var s__37078__$1 = s__37078;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37078__$1);
if(temp__5457__auto__){
var s__37078__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37078__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37078__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37080 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37079 = (0);
while(true){
if((i__37079 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__37079);
cljs.core.chunk_append.call(null,b__37080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37081 = (i__37079 + (1));
i__37079 = G__37081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37080),sablono$core$unordered_list37076_$_iter__37077.call(null,cljs.core.chunk_rest.call(null,s__37078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37080),null);
}
} else {
var x = cljs.core.first.call(null,s__37078__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37076_$_iter__37077.call(null,cljs.core.rest.call(null,s__37078__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37076);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37082 = (function sablono$core$ordered_list37082(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4291__auto__ = (function sablono$core$ordered_list37082_$_iter__37083(s__37084){
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
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37086),sablono$core$ordered_list37082_$_iter__37083.call(null,cljs.core.chunk_rest.call(null,s__37084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37086),null);
}
} else {
var x = cljs.core.first.call(null,s__37084__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37082_$_iter__37083.call(null,cljs.core.rest.call(null,s__37084__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37082);
/**
 * Create an image element.
 */
sablono.core.image37088 = (function sablono$core$image37088(var_args){
var G__37090 = arguments.length;
switch (G__37090) {
case 1:
return sablono.core.image37088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image37088.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37088.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37088.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37088);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37092_SHARP_,p2__37093_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37092_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37093_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37094_SHARP_,p2__37095_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37094_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37095_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__37097 = arguments.length;
switch (G__37097) {
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
sablono.core.color_field37099 = (function sablono$core$color_field37099(var_args){
var G__37101 = arguments.length;
switch (G__37101) {
case 1:
return sablono.core.color_field37099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field37099.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37030__auto__);
});

sablono.core.color_field37099.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.color_field37099.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37099);

/**
 * Creates a date input field.
 */
sablono.core.date_field37102 = (function sablono$core$date_field37102(var_args){
var G__37104 = arguments.length;
switch (G__37104) {
case 1:
return sablono.core.date_field37102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field37102.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37030__auto__);
});

sablono.core.date_field37102.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.date_field37102.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37102);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37105 = (function sablono$core$datetime_field37105(var_args){
var G__37107 = arguments.length;
switch (G__37107) {
case 1:
return sablono.core.datetime_field37105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field37105.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37030__auto__);
});

sablono.core.datetime_field37105.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.datetime_field37105.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37105);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37108 = (function sablono$core$datetime_local_field37108(var_args){
var G__37110 = arguments.length;
switch (G__37110) {
case 1:
return sablono.core.datetime_local_field37108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field37108.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37030__auto__);
});

sablono.core.datetime_local_field37108.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.datetime_local_field37108.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37108);

/**
 * Creates a email input field.
 */
sablono.core.email_field37111 = (function sablono$core$email_field37111(var_args){
var G__37113 = arguments.length;
switch (G__37113) {
case 1:
return sablono.core.email_field37111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field37111.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37030__auto__);
});

sablono.core.email_field37111.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.email_field37111.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37111);

/**
 * Creates a file input field.
 */
sablono.core.file_field37114 = (function sablono$core$file_field37114(var_args){
var G__37116 = arguments.length;
switch (G__37116) {
case 1:
return sablono.core.file_field37114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field37114.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37030__auto__);
});

sablono.core.file_field37114.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.file_field37114.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37114);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37117 = (function sablono$core$hidden_field37117(var_args){
var G__37119 = arguments.length;
switch (G__37119) {
case 1:
return sablono.core.hidden_field37117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field37117.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37030__auto__);
});

sablono.core.hidden_field37117.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.hidden_field37117.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37117);

/**
 * Creates a month input field.
 */
sablono.core.month_field37120 = (function sablono$core$month_field37120(var_args){
var G__37122 = arguments.length;
switch (G__37122) {
case 1:
return sablono.core.month_field37120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field37120.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37030__auto__);
});

sablono.core.month_field37120.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.month_field37120.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37120);

/**
 * Creates a number input field.
 */
sablono.core.number_field37123 = (function sablono$core$number_field37123(var_args){
var G__37125 = arguments.length;
switch (G__37125) {
case 1:
return sablono.core.number_field37123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field37123.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37030__auto__);
});

sablono.core.number_field37123.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.number_field37123.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37123);

/**
 * Creates a password input field.
 */
sablono.core.password_field37126 = (function sablono$core$password_field37126(var_args){
var G__37128 = arguments.length;
switch (G__37128) {
case 1:
return sablono.core.password_field37126.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37126.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field37126.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37030__auto__);
});

sablono.core.password_field37126.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.password_field37126.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37126);

/**
 * Creates a range input field.
 */
sablono.core.range_field37129 = (function sablono$core$range_field37129(var_args){
var G__37131 = arguments.length;
switch (G__37131) {
case 1:
return sablono.core.range_field37129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field37129.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37030__auto__);
});

sablono.core.range_field37129.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.range_field37129.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37129);

/**
 * Creates a search input field.
 */
sablono.core.search_field37132 = (function sablono$core$search_field37132(var_args){
var G__37134 = arguments.length;
switch (G__37134) {
case 1:
return sablono.core.search_field37132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field37132.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37030__auto__);
});

sablono.core.search_field37132.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.search_field37132.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37132);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37135 = (function sablono$core$tel_field37135(var_args){
var G__37137 = arguments.length;
switch (G__37137) {
case 1:
return sablono.core.tel_field37135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field37135.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37030__auto__);
});

sablono.core.tel_field37135.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.tel_field37135.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37135);

/**
 * Creates a text input field.
 */
sablono.core.text_field37138 = (function sablono$core$text_field37138(var_args){
var G__37140 = arguments.length;
switch (G__37140) {
case 1:
return sablono.core.text_field37138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field37138.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37030__auto__);
});

sablono.core.text_field37138.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.text_field37138.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37138);

/**
 * Creates a time input field.
 */
sablono.core.time_field37141 = (function sablono$core$time_field37141(var_args){
var G__37143 = arguments.length;
switch (G__37143) {
case 1:
return sablono.core.time_field37141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field37141.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37030__auto__);
});

sablono.core.time_field37141.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.time_field37141.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37141);

/**
 * Creates a url input field.
 */
sablono.core.url_field37144 = (function sablono$core$url_field37144(var_args){
var G__37146 = arguments.length;
switch (G__37146) {
case 1:
return sablono.core.url_field37144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field37144.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37030__auto__);
});

sablono.core.url_field37144.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.url_field37144.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37144);

/**
 * Creates a week input field.
 */
sablono.core.week_field37147 = (function sablono$core$week_field37147(var_args){
var G__37149 = arguments.length;
switch (G__37149) {
case 1:
return sablono.core.week_field37147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field37147.cljs$core$IFn$_invoke$arity$1 = (function (name__37030__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37030__auto__);
});

sablono.core.week_field37147.cljs$core$IFn$_invoke$arity$2 = (function (name__37030__auto__,value__37031__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37030__auto__,value__37031__auto__);
});

sablono.core.week_field37147.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37147);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box37167 = (function sablono$core$check_box37167(var_args){
var G__37169 = arguments.length;
switch (G__37169) {
case 1:
return sablono.core.check_box37167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box37167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box37167.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box37167.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box37167.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37167.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box37167.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box37167);
/**
 * Creates a radio button.
 */
sablono.core.radio_button37171 = (function sablono$core$radio_button37171(var_args){
var G__37173 = arguments.length;
switch (G__37173) {
case 1:
return sablono.core.radio_button37171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button37171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button37171.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button37171.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button37171.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37171.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button37171.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button37171);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options37175 = (function sablono$core$select_options37175(coll){
var iter__4291__auto__ = (function sablono$core$select_options37175_$_iter__37176(s__37177){
return (new cljs.core.LazySeq(null,(function (){
var s__37177__$1 = s__37177;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37177__$1);
if(temp__5457__auto__){
var s__37177__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37177__$2)){
var c__4289__auto__ = cljs.core.chunk_first.call(null,s__37177__$2);
var size__4290__auto__ = cljs.core.count.call(null,c__4289__auto__);
var b__37179 = cljs.core.chunk_buffer.call(null,size__4290__auto__);
if((function (){var i__37178 = (0);
while(true){
if((i__37178 < size__4290__auto__)){
var x = cljs.core._nth.call(null,c__4289__auto__,i__37178);
cljs.core.chunk_append.call(null,b__37179,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37180 = x;
var text = cljs.core.nth.call(null,vec__37180,(0),null);
var val = cljs.core.nth.call(null,vec__37180,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37180,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37175.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37186 = (i__37178 + (1));
i__37178 = G__37186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37179),sablono$core$select_options37175_$_iter__37176.call(null,cljs.core.chunk_rest.call(null,s__37177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37179),null);
}
} else {
var x = cljs.core.first.call(null,s__37177__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37183 = x;
var text = cljs.core.nth.call(null,vec__37183,(0),null);
var val = cljs.core.nth.call(null,vec__37183,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37183,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options37175.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options37175_$_iter__37176.call(null,cljs.core.rest.call(null,s__37177__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options37175);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37187 = (function sablono$core$drop_down37187(var_args){
var G__37189 = arguments.length;
switch (G__37189) {
case 2:
return sablono.core.drop_down37187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37187.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down37187.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37187.call(null,name,options,null);
});

sablono.core.drop_down37187.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37187.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37187);
/**
 * Creates a text area element.
 */
sablono.core.text_area37191 = (function sablono$core$text_area37191(var_args){
var G__37193 = arguments.length;
switch (G__37193) {
case 1:
return sablono.core.text_area37191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area37191.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area37191.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3921__auto__ = value;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area37191.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37191);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37195 = (function sablono$core$label37195(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37195);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37196 = (function sablono$core$submit_button37196(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37196);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37197 = (function sablono$core$reset_button37197(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37197);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37198 = (function sablono$core$form_to37198(var_args){
var args__4501__auto__ = [];
var len__4498__auto___37205 = arguments.length;
var i__4499__auto___37206 = (0);
while(true){
if((i__4499__auto___37206 < len__4498__auto___37205)){
args__4501__auto__.push((arguments[i__4499__auto___37206]));

var G__37207 = (i__4499__auto___37206 + (1));
i__4499__auto___37206 = G__37207;
continue;
} else {
}
break;
}

var argseq__4502__auto__ = ((((1) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to37198.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4502__auto__);
});

sablono.core.form_to37198.cljs$core$IFn$_invoke$arity$variadic = (function (p__37201,body){
var vec__37202 = p__37201;
var method = cljs.core.nth.call(null,vec__37202,(0),null);
var action = cljs.core.nth.call(null,vec__37202,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37198.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to37198.cljs$lang$applyTo = (function (seq37199){
var G__37200 = cljs.core.first.call(null,seq37199);
var seq37199__$1 = cljs.core.next.call(null,seq37199);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37200,seq37199__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37198);
