// Compiled by ClojureScript 1.10.339 {}
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
var G__38929__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__38926 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__38927 = cljs.core.seq.call(null,vec__38926);
var first__38928 = cljs.core.first.call(null,seq__38927);
var seq__38927__$1 = cljs.core.next.call(null,seq__38927);
var tag = first__38928;
var body = seq__38927__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__38929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38930__i = 0, G__38930__a = new Array(arguments.length -  0);
while (G__38930__i < G__38930__a.length) {G__38930__a[G__38930__i] = arguments[G__38930__i + 0]; ++G__38930__i;}
  args = new cljs.core.IndexedSeq(G__38930__a,0,null);
} 
return G__38929__delegate.call(this,args);};
G__38929.cljs$lang$maxFixedArity = 0;
G__38929.cljs$lang$applyTo = (function (arglist__38931){
var args = cljs.core.seq(arglist__38931);
return G__38929__delegate(args);
});
G__38929.cljs$core$IFn$_invoke$arity$variadic = G__38929__delegate;
return G__38929;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__38932(s__38933){
return (new cljs.core.LazySeq(null,(function (){
var s__38933__$1 = s__38933;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38933__$1);
if(temp__5457__auto__){
var s__38933__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38933__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__38933__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__38935 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__38934 = (0);
while(true){
if((i__38934 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__38934);
cljs.core.chunk_append.call(null,b__38935,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38936 = (i__38934 + (1));
i__38934 = G__38936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38935),sablono$core$update_arglists_$_iter__38932.call(null,cljs.core.chunk_rest.call(null,s__38933__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38935),null);
}
} else {
var args = cljs.core.first.call(null,s__38933__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38932.call(null,cljs.core.rest.call(null,s__38933__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38942 = arguments.length;
var i__4532__auto___38943 = (0);
while(true){
if((i__4532__auto___38943 < len__4531__auto___38942)){
args__4534__auto__.push((arguments[i__4532__auto___38943]));

var G__38944 = (i__4532__auto___38943 + (1));
i__4532__auto___38943 = G__38944;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__38938(s__38939){
return (new cljs.core.LazySeq(null,(function (){
var s__38939__$1 = s__38939;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38939__$1);
if(temp__5457__auto__){
var s__38939__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38939__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__38939__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__38941 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__38940 = (0);
while(true){
if((i__38940 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__38940);
cljs.core.chunk_append.call(null,b__38941,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38945 = (i__38940 + (1));
i__38940 = G__38945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38941),sablono$core$iter__38938.call(null,cljs.core.chunk_rest.call(null,s__38939__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38941),null);
}
} else {
var style = cljs.core.first.call(null,s__38939__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38938.call(null,cljs.core.rest.call(null,s__38939__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq38937){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38937));
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
sablono.core.link_to38946 = (function sablono$core$link_to38946(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38949 = arguments.length;
var i__4532__auto___38950 = (0);
while(true){
if((i__4532__auto___38950 < len__4531__auto___38949)){
args__4534__auto__.push((arguments[i__4532__auto___38950]));

var G__38951 = (i__4532__auto___38950 + (1));
i__4532__auto___38950 = G__38951;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38946.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to38946.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to38946.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to38946.cljs$lang$applyTo = (function (seq38947){
var G__38948 = cljs.core.first.call(null,seq38947);
var seq38947__$1 = cljs.core.next.call(null,seq38947);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38948,seq38947__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38946);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38952 = (function sablono$core$mail_to38952(var_args){
var args__4534__auto__ = [];
var len__4531__auto___38959 = arguments.length;
var i__4532__auto___38960 = (0);
while(true){
if((i__4532__auto___38960 < len__4531__auto___38959)){
args__4534__auto__.push((arguments[i__4532__auto___38960]));

var G__38961 = (i__4532__auto___38960 + (1));
i__4532__auto___38960 = G__38961;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38952.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to38952.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38955){
var vec__38956 = p__38955;
var content = cljs.core.nth.call(null,vec__38956,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to38952.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to38952.cljs$lang$applyTo = (function (seq38953){
var G__38954 = cljs.core.first.call(null,seq38953);
var seq38953__$1 = cljs.core.next.call(null,seq38953);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38954,seq38953__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38952);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38962 = (function sablono$core$unordered_list38962(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list38962_$_iter__38963(s__38964){
return (new cljs.core.LazySeq(null,(function (){
var s__38964__$1 = s__38964;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38964__$1);
if(temp__5457__auto__){
var s__38964__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38964__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__38964__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__38966 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__38965 = (0);
while(true){
if((i__38965 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__38965);
cljs.core.chunk_append.call(null,b__38966,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38967 = (i__38965 + (1));
i__38965 = G__38967;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38966),sablono$core$unordered_list38962_$_iter__38963.call(null,cljs.core.chunk_rest.call(null,s__38964__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38966),null);
}
} else {
var x = cljs.core.first.call(null,s__38964__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38962_$_iter__38963.call(null,cljs.core.rest.call(null,s__38964__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38962);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38968 = (function sablono$core$ordered_list38968(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list38968_$_iter__38969(s__38970){
return (new cljs.core.LazySeq(null,(function (){
var s__38970__$1 = s__38970;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38970__$1);
if(temp__5457__auto__){
var s__38970__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38970__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__38970__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__38972 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__38971 = (0);
while(true){
if((i__38971 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__38971);
cljs.core.chunk_append.call(null,b__38972,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38973 = (i__38971 + (1));
i__38971 = G__38973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38972),sablono$core$ordered_list38968_$_iter__38969.call(null,cljs.core.chunk_rest.call(null,s__38970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38972),null);
}
} else {
var x = cljs.core.first.call(null,s__38970__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38968_$_iter__38969.call(null,cljs.core.rest.call(null,s__38970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38968);
/**
 * Create an image element.
 */
sablono.core.image38974 = (function sablono$core$image38974(var_args){
var G__38976 = arguments.length;
switch (G__38976) {
case 1:
return sablono.core.image38974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image38974.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image38974.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image38974.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38974);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__38978_SHARP_,p2__38979_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38978_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38979_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38980_SHARP_,p2__38981_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38980_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38981_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38983 = arguments.length;
switch (G__38983) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field38985 = (function sablono$core$color_field38985(var_args){
var G__38987 = arguments.length;
switch (G__38987) {
case 1:
return sablono.core.color_field38985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field38985.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__38916__auto__);
});

sablono.core.color_field38985.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.color_field38985.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38985);

/**
 * Creates a date input field.
 */
sablono.core.date_field38988 = (function sablono$core$date_field38988(var_args){
var G__38990 = arguments.length;
switch (G__38990) {
case 1:
return sablono.core.date_field38988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field38988.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__38916__auto__);
});

sablono.core.date_field38988.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.date_field38988.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38988);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38991 = (function sablono$core$datetime_field38991(var_args){
var G__38993 = arguments.length;
switch (G__38993) {
case 1:
return sablono.core.datetime_field38991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field38991.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__38916__auto__);
});

sablono.core.datetime_field38991.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.datetime_field38991.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38991);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38994 = (function sablono$core$datetime_local_field38994(var_args){
var G__38996 = arguments.length;
switch (G__38996) {
case 1:
return sablono.core.datetime_local_field38994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field38994.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__38916__auto__);
});

sablono.core.datetime_local_field38994.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.datetime_local_field38994.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38994);

/**
 * Creates a email input field.
 */
sablono.core.email_field38997 = (function sablono$core$email_field38997(var_args){
var G__38999 = arguments.length;
switch (G__38999) {
case 1:
return sablono.core.email_field38997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field38997.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__38916__auto__);
});

sablono.core.email_field38997.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.email_field38997.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38997);

/**
 * Creates a file input field.
 */
sablono.core.file_field39000 = (function sablono$core$file_field39000(var_args){
var G__39002 = arguments.length;
switch (G__39002) {
case 1:
return sablono.core.file_field39000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field39000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field39000.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__38916__auto__);
});

sablono.core.file_field39000.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.file_field39000.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field39000);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field39003 = (function sablono$core$hidden_field39003(var_args){
var G__39005 = arguments.length;
switch (G__39005) {
case 1:
return sablono.core.hidden_field39003.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field39003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field39003.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__38916__auto__);
});

sablono.core.hidden_field39003.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.hidden_field39003.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field39003);

/**
 * Creates a month input field.
 */
sablono.core.month_field39006 = (function sablono$core$month_field39006(var_args){
var G__39008 = arguments.length;
switch (G__39008) {
case 1:
return sablono.core.month_field39006.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field39006.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field39006.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__38916__auto__);
});

sablono.core.month_field39006.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.month_field39006.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field39006);

/**
 * Creates a number input field.
 */
sablono.core.number_field39009 = (function sablono$core$number_field39009(var_args){
var G__39011 = arguments.length;
switch (G__39011) {
case 1:
return sablono.core.number_field39009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field39009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field39009.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__38916__auto__);
});

sablono.core.number_field39009.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.number_field39009.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field39009);

/**
 * Creates a password input field.
 */
sablono.core.password_field39012 = (function sablono$core$password_field39012(var_args){
var G__39014 = arguments.length;
switch (G__39014) {
case 1:
return sablono.core.password_field39012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field39012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field39012.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__38916__auto__);
});

sablono.core.password_field39012.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.password_field39012.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field39012);

/**
 * Creates a range input field.
 */
sablono.core.range_field39015 = (function sablono$core$range_field39015(var_args){
var G__39017 = arguments.length;
switch (G__39017) {
case 1:
return sablono.core.range_field39015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field39015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field39015.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__38916__auto__);
});

sablono.core.range_field39015.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.range_field39015.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field39015);

/**
 * Creates a search input field.
 */
sablono.core.search_field39018 = (function sablono$core$search_field39018(var_args){
var G__39020 = arguments.length;
switch (G__39020) {
case 1:
return sablono.core.search_field39018.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field39018.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field39018.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__38916__auto__);
});

sablono.core.search_field39018.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.search_field39018.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field39018);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field39021 = (function sablono$core$tel_field39021(var_args){
var G__39023 = arguments.length;
switch (G__39023) {
case 1:
return sablono.core.tel_field39021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field39021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field39021.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__38916__auto__);
});

sablono.core.tel_field39021.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.tel_field39021.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field39021);

/**
 * Creates a text input field.
 */
sablono.core.text_field39024 = (function sablono$core$text_field39024(var_args){
var G__39026 = arguments.length;
switch (G__39026) {
case 1:
return sablono.core.text_field39024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field39024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field39024.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__38916__auto__);
});

sablono.core.text_field39024.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.text_field39024.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field39024);

/**
 * Creates a time input field.
 */
sablono.core.time_field39027 = (function sablono$core$time_field39027(var_args){
var G__39029 = arguments.length;
switch (G__39029) {
case 1:
return sablono.core.time_field39027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field39027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field39027.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__38916__auto__);
});

sablono.core.time_field39027.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.time_field39027.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field39027);

/**
 * Creates a url input field.
 */
sablono.core.url_field39030 = (function sablono$core$url_field39030(var_args){
var G__39032 = arguments.length;
switch (G__39032) {
case 1:
return sablono.core.url_field39030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field39030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field39030.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__38916__auto__);
});

sablono.core.url_field39030.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.url_field39030.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field39030);

/**
 * Creates a week input field.
 */
sablono.core.week_field39033 = (function sablono$core$week_field39033(var_args){
var G__39035 = arguments.length;
switch (G__39035) {
case 1:
return sablono.core.week_field39033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field39033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field39033.cljs$core$IFn$_invoke$arity$1 = (function (name__38916__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__38916__auto__);
});

sablono.core.week_field39033.cljs$core$IFn$_invoke$arity$2 = (function (name__38916__auto__,value__38917__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__38916__auto__,value__38917__auto__);
});

sablono.core.week_field39033.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field39033);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box39053 = (function sablono$core$check_box39053(var_args){
var G__39055 = arguments.length;
switch (G__39055) {
case 1:
return sablono.core.check_box39053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box39053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box39053.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box39053.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box39053.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39053.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box39053.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box39053);
/**
 * Creates a radio button.
 */
sablono.core.radio_button39057 = (function sablono$core$radio_button39057(var_args){
var G__39059 = arguments.length;
switch (G__39059) {
case 1:
return sablono.core.radio_button39057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button39057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button39057.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button39057.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button39057.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button39057.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button39057.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button39057);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options39061 = (function sablono$core$select_options39061(coll){
var iter__4324__auto__ = (function sablono$core$select_options39061_$_iter__39062(s__39063){
return (new cljs.core.LazySeq(null,(function (){
var s__39063__$1 = s__39063;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__39063__$1);
if(temp__5457__auto__){
var s__39063__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39063__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__39063__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__39065 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__39064 = (0);
while(true){
if((i__39064 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__39064);
cljs.core.chunk_append.call(null,b__39065,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39066 = x;
var text = cljs.core.nth.call(null,vec__39066,(0),null);
var val = cljs.core.nth.call(null,vec__39066,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39066,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options39061.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__39072 = (i__39064 + (1));
i__39064 = G__39072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39065),sablono$core$select_options39061_$_iter__39062.call(null,cljs.core.chunk_rest.call(null,s__39063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39065),null);
}
} else {
var x = cljs.core.first.call(null,s__39063__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__39069 = x;
var text = cljs.core.nth.call(null,vec__39069,(0),null);
var val = cljs.core.nth.call(null,vec__39069,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__39069,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options39061.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options39061_$_iter__39062.call(null,cljs.core.rest.call(null,s__39063__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options39061);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down39073 = (function sablono$core$drop_down39073(var_args){
var G__39075 = arguments.length;
switch (G__39075) {
case 2:
return sablono.core.drop_down39073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down39073.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down39073.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down39073.call(null,name,options,null);
});

sablono.core.drop_down39073.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down39073.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down39073);
/**
 * Creates a text area element.
 */
sablono.core.text_area39077 = (function sablono$core$text_area39077(var_args){
var G__39079 = arguments.length;
switch (G__39079) {
case 1:
return sablono.core.text_area39077.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area39077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area39077.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area39077.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area39077.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area39077);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label39081 = (function sablono$core$label39081(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label39081);
/**
 * Creates a submit button.
 */
sablono.core.submit_button39082 = (function sablono$core$submit_button39082(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button39082);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button39083 = (function sablono$core$reset_button39083(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button39083);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to39084 = (function sablono$core$form_to39084(var_args){
var args__4534__auto__ = [];
var len__4531__auto___39091 = arguments.length;
var i__4532__auto___39092 = (0);
while(true){
if((i__4532__auto___39092 < len__4531__auto___39091)){
args__4534__auto__.push((arguments[i__4532__auto___39092]));

var G__39093 = (i__4532__auto___39092 + (1));
i__4532__auto___39092 = G__39093;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to39084.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to39084.cljs$core$IFn$_invoke$arity$variadic = (function (p__39087,body){
var vec__39088 = p__39087;
var method = cljs.core.nth.call(null,vec__39088,(0),null);
var action = cljs.core.nth.call(null,vec__39088,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to39084.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to39084.cljs$lang$applyTo = (function (seq39085){
var G__39086 = cljs.core.first.call(null,seq39085);
var seq39085__$1 = cljs.core.next.call(null,seq39085);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39086,seq39085__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to39084);
