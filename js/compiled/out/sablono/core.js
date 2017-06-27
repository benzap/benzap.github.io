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
var G__41912__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41909 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41910 = cljs.core.seq.call(null,vec__41909);
var first__41911 = cljs.core.first.call(null,seq__41910);
var seq__41910__$1 = cljs.core.next.call(null,seq__41910);
var tag = first__41911;
var body = seq__41910__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41913__i = 0, G__41913__a = new Array(arguments.length -  0);
while (G__41913__i < G__41913__a.length) {G__41913__a[G__41913__i] = arguments[G__41913__i + 0]; ++G__41913__i;}
  args = new cljs.core.IndexedSeq(G__41913__a,0,null);
} 
return G__41912__delegate.call(this,args);};
G__41912.cljs$lang$maxFixedArity = 0;
G__41912.cljs$lang$applyTo = (function (arglist__41914){
var args = cljs.core.seq(arglist__41914);
return G__41912__delegate(args);
});
G__41912.cljs$core$IFn$_invoke$arity$variadic = G__41912__delegate;
return G__41912;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36460__auto__ = (function sablono$core$update_arglists_$_iter__41919(s__41920){
return (new cljs.core.LazySeq(null,(function (){
var s__41920__$1 = s__41920;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41920__$1);
if(temp__4657__auto__){
var s__41920__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41920__$2)){
var c__36458__auto__ = cljs.core.chunk_first.call(null,s__41920__$2);
var size__36459__auto__ = cljs.core.count.call(null,c__36458__auto__);
var b__41922 = cljs.core.chunk_buffer.call(null,size__36459__auto__);
if((function (){var i__41921 = (0);
while(true){
if((i__41921 < size__36459__auto__)){
var args = cljs.core._nth.call(null,c__36458__auto__,i__41921);
cljs.core.chunk_append.call(null,b__41922,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41923 = (i__41921 + (1));
i__41921 = G__41923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41922),sablono$core$update_arglists_$_iter__41919.call(null,cljs.core.chunk_rest.call(null,s__41920__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41922),null);
}
} else {
var args = cljs.core.first.call(null,s__41920__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41919.call(null,cljs.core.rest.call(null,s__41920__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36460__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36792__auto__ = [];
var len__36785__auto___41929 = arguments.length;
var i__36786__auto___41930 = (0);
while(true){
if((i__36786__auto___41930 < len__36785__auto___41929)){
args__36792__auto__.push((arguments[i__36786__auto___41930]));

var G__41931 = (i__36786__auto___41930 + (1));
i__36786__auto___41930 = G__41931;
continue;
} else {
}
break;
}

var argseq__36793__auto__ = ((((0) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36793__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36460__auto__ = (function sablono$core$iter__41925(s__41926){
return (new cljs.core.LazySeq(null,(function (){
var s__41926__$1 = s__41926;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41926__$1);
if(temp__4657__auto__){
var s__41926__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41926__$2)){
var c__36458__auto__ = cljs.core.chunk_first.call(null,s__41926__$2);
var size__36459__auto__ = cljs.core.count.call(null,c__36458__auto__);
var b__41928 = cljs.core.chunk_buffer.call(null,size__36459__auto__);
if((function (){var i__41927 = (0);
while(true){
if((i__41927 < size__36459__auto__)){
var style = cljs.core._nth.call(null,c__36458__auto__,i__41927);
cljs.core.chunk_append.call(null,b__41928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41932 = (i__41927 + (1));
i__41927 = G__41932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41928),sablono$core$iter__41925.call(null,cljs.core.chunk_rest.call(null,s__41926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41928),null);
}
} else {
var style = cljs.core.first.call(null,s__41926__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41925.call(null,cljs.core.rest.call(null,s__41926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36460__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq41924){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41924));
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
sablono.core.link_to41933 = (function sablono$core$link_to41933(var_args){
var args__36792__auto__ = [];
var len__36785__auto___41936 = arguments.length;
var i__36786__auto___41937 = (0);
while(true){
if((i__36786__auto___41937 < len__36785__auto___41936)){
args__36792__auto__.push((arguments[i__36786__auto___41937]));

var G__41938 = (i__36786__auto___41937 + (1));
i__36786__auto___41937 = G__41938;
continue;
} else {
}
break;
}

var argseq__36793__auto__ = ((((1) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41933.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36793__auto__);
});

sablono.core.link_to41933.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41933.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41933.cljs$lang$applyTo = (function (seq41934){
var G__41935 = cljs.core.first.call(null,seq41934);
var seq41934__$1 = cljs.core.next.call(null,seq41934);
return sablono.core.link_to41933.cljs$core$IFn$_invoke$arity$variadic(G__41935,seq41934__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41933);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41939 = (function sablono$core$mail_to41939(var_args){
var args__36792__auto__ = [];
var len__36785__auto___41946 = arguments.length;
var i__36786__auto___41947 = (0);
while(true){
if((i__36786__auto___41947 < len__36785__auto___41946)){
args__36792__auto__.push((arguments[i__36786__auto___41947]));

var G__41948 = (i__36786__auto___41947 + (1));
i__36786__auto___41947 = G__41948;
continue;
} else {
}
break;
}

var argseq__36793__auto__ = ((((1) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41939.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36793__auto__);
});

sablono.core.mail_to41939.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41942){
var vec__41943 = p__41942;
var content = cljs.core.nth.call(null,vec__41943,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35672__auto__ = content;
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41939.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41939.cljs$lang$applyTo = (function (seq41940){
var G__41941 = cljs.core.first.call(null,seq41940);
var seq41940__$1 = cljs.core.next.call(null,seq41940);
return sablono.core.mail_to41939.cljs$core$IFn$_invoke$arity$variadic(G__41941,seq41940__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41939);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41949 = (function sablono$core$unordered_list41949(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36460__auto__ = (function sablono$core$unordered_list41949_$_iter__41954(s__41955){
return (new cljs.core.LazySeq(null,(function (){
var s__41955__$1 = s__41955;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41955__$1);
if(temp__4657__auto__){
var s__41955__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41955__$2)){
var c__36458__auto__ = cljs.core.chunk_first.call(null,s__41955__$2);
var size__36459__auto__ = cljs.core.count.call(null,c__36458__auto__);
var b__41957 = cljs.core.chunk_buffer.call(null,size__36459__auto__);
if((function (){var i__41956 = (0);
while(true){
if((i__41956 < size__36459__auto__)){
var x = cljs.core._nth.call(null,c__36458__auto__,i__41956);
cljs.core.chunk_append.call(null,b__41957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41958 = (i__41956 + (1));
i__41956 = G__41958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41957),sablono$core$unordered_list41949_$_iter__41954.call(null,cljs.core.chunk_rest.call(null,s__41955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41957),null);
}
} else {
var x = cljs.core.first.call(null,s__41955__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41949_$_iter__41954.call(null,cljs.core.rest.call(null,s__41955__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36460__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41949);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41959 = (function sablono$core$ordered_list41959(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36460__auto__ = (function sablono$core$ordered_list41959_$_iter__41964(s__41965){
return (new cljs.core.LazySeq(null,(function (){
var s__41965__$1 = s__41965;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41965__$1);
if(temp__4657__auto__){
var s__41965__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41965__$2)){
var c__36458__auto__ = cljs.core.chunk_first.call(null,s__41965__$2);
var size__36459__auto__ = cljs.core.count.call(null,c__36458__auto__);
var b__41967 = cljs.core.chunk_buffer.call(null,size__36459__auto__);
if((function (){var i__41966 = (0);
while(true){
if((i__41966 < size__36459__auto__)){
var x = cljs.core._nth.call(null,c__36458__auto__,i__41966);
cljs.core.chunk_append.call(null,b__41967,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41968 = (i__41966 + (1));
i__41966 = G__41968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41967),sablono$core$ordered_list41959_$_iter__41964.call(null,cljs.core.chunk_rest.call(null,s__41965__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41967),null);
}
} else {
var x = cljs.core.first.call(null,s__41965__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41959_$_iter__41964.call(null,cljs.core.rest.call(null,s__41965__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36460__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list41959);
/**
 * Create an image element.
 */
sablono.core.image41969 = (function sablono$core$image41969(var_args){
var args41970 = [];
var len__36785__auto___41973 = arguments.length;
var i__36786__auto___41974 = (0);
while(true){
if((i__36786__auto___41974 < len__36785__auto___41973)){
args41970.push((arguments[i__36786__auto___41974]));

var G__41975 = (i__36786__auto___41974 + (1));
i__36786__auto___41974 = G__41975;
continue;
} else {
}
break;
}

var G__41972 = args41970.length;
switch (G__41972) {
case 1:
return sablono.core.image41969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41970.length)].join('')));

}
});

sablono.core.image41969.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image41969.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image41969.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image41969);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__41977_SHARP_,p2__41978_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41977_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41978_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__41979_SHARP_,p2__41980_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41979_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41980_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35672__auto__ = value;
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field41981 = (function sablono$core$color_field41981(var_args){
var args41982 = [];
var len__36785__auto___42049 = arguments.length;
var i__36786__auto___42050 = (0);
while(true){
if((i__36786__auto___42050 < len__36785__auto___42049)){
args41982.push((arguments[i__36786__auto___42050]));

var G__42051 = (i__36786__auto___42050 + (1));
i__36786__auto___42050 = G__42051;
continue;
} else {
}
break;
}

var G__41984 = args41982.length;
switch (G__41984) {
case 1:
return sablono.core.color_field41981.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41981.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41982.length)].join('')));

}
});

sablono.core.color_field41981.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.color_field41981.call(null,name__41896__auto__,null);
});

sablono.core.color_field41981.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.color_field41981.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field41981);

/**
 * Creates a date input field.
 */
sablono.core.date_field41985 = (function sablono$core$date_field41985(var_args){
var args41986 = [];
var len__36785__auto___42053 = arguments.length;
var i__36786__auto___42054 = (0);
while(true){
if((i__36786__auto___42054 < len__36785__auto___42053)){
args41986.push((arguments[i__36786__auto___42054]));

var G__42055 = (i__36786__auto___42054 + (1));
i__36786__auto___42054 = G__42055;
continue;
} else {
}
break;
}

var G__41988 = args41986.length;
switch (G__41988) {
case 1:
return sablono.core.date_field41985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41986.length)].join('')));

}
});

sablono.core.date_field41985.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.date_field41985.call(null,name__41896__auto__,null);
});

sablono.core.date_field41985.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.date_field41985.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field41985);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41989 = (function sablono$core$datetime_field41989(var_args){
var args41990 = [];
var len__36785__auto___42057 = arguments.length;
var i__36786__auto___42058 = (0);
while(true){
if((i__36786__auto___42058 < len__36785__auto___42057)){
args41990.push((arguments[i__36786__auto___42058]));

var G__42059 = (i__36786__auto___42058 + (1));
i__36786__auto___42058 = G__42059;
continue;
} else {
}
break;
}

var G__41992 = args41990.length;
switch (G__41992) {
case 1:
return sablono.core.datetime_field41989.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41989.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41990.length)].join('')));

}
});

sablono.core.datetime_field41989.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.datetime_field41989.call(null,name__41896__auto__,null);
});

sablono.core.datetime_field41989.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.datetime_field41989.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field41989);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41993 = (function sablono$core$datetime_local_field41993(var_args){
var args41994 = [];
var len__36785__auto___42061 = arguments.length;
var i__36786__auto___42062 = (0);
while(true){
if((i__36786__auto___42062 < len__36785__auto___42061)){
args41994.push((arguments[i__36786__auto___42062]));

var G__42063 = (i__36786__auto___42062 + (1));
i__36786__auto___42062 = G__42063;
continue;
} else {
}
break;
}

var G__41996 = args41994.length;
switch (G__41996) {
case 1:
return sablono.core.datetime_local_field41993.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41993.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41994.length)].join('')));

}
});

sablono.core.datetime_local_field41993.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.datetime_local_field41993.call(null,name__41896__auto__,null);
});

sablono.core.datetime_local_field41993.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.datetime_local_field41993.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field41993);

/**
 * Creates a email input field.
 */
sablono.core.email_field41997 = (function sablono$core$email_field41997(var_args){
var args41998 = [];
var len__36785__auto___42065 = arguments.length;
var i__36786__auto___42066 = (0);
while(true){
if((i__36786__auto___42066 < len__36785__auto___42065)){
args41998.push((arguments[i__36786__auto___42066]));

var G__42067 = (i__36786__auto___42066 + (1));
i__36786__auto___42066 = G__42067;
continue;
} else {
}
break;
}

var G__42000 = args41998.length;
switch (G__42000) {
case 1:
return sablono.core.email_field41997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41998.length)].join('')));

}
});

sablono.core.email_field41997.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.email_field41997.call(null,name__41896__auto__,null);
});

sablono.core.email_field41997.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.email_field41997.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field41997);

/**
 * Creates a file input field.
 */
sablono.core.file_field42001 = (function sablono$core$file_field42001(var_args){
var args42002 = [];
var len__36785__auto___42069 = arguments.length;
var i__36786__auto___42070 = (0);
while(true){
if((i__36786__auto___42070 < len__36785__auto___42069)){
args42002.push((arguments[i__36786__auto___42070]));

var G__42071 = (i__36786__auto___42070 + (1));
i__36786__auto___42070 = G__42071;
continue;
} else {
}
break;
}

var G__42004 = args42002.length;
switch (G__42004) {
case 1:
return sablono.core.file_field42001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42002.length)].join('')));

}
});

sablono.core.file_field42001.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.file_field42001.call(null,name__41896__auto__,null);
});

sablono.core.file_field42001.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.file_field42001.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field42001);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42005 = (function sablono$core$hidden_field42005(var_args){
var args42006 = [];
var len__36785__auto___42073 = arguments.length;
var i__36786__auto___42074 = (0);
while(true){
if((i__36786__auto___42074 < len__36785__auto___42073)){
args42006.push((arguments[i__36786__auto___42074]));

var G__42075 = (i__36786__auto___42074 + (1));
i__36786__auto___42074 = G__42075;
continue;
} else {
}
break;
}

var G__42008 = args42006.length;
switch (G__42008) {
case 1:
return sablono.core.hidden_field42005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42006.length)].join('')));

}
});

sablono.core.hidden_field42005.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.hidden_field42005.call(null,name__41896__auto__,null);
});

sablono.core.hidden_field42005.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.hidden_field42005.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field42005);

/**
 * Creates a month input field.
 */
sablono.core.month_field42009 = (function sablono$core$month_field42009(var_args){
var args42010 = [];
var len__36785__auto___42077 = arguments.length;
var i__36786__auto___42078 = (0);
while(true){
if((i__36786__auto___42078 < len__36785__auto___42077)){
args42010.push((arguments[i__36786__auto___42078]));

var G__42079 = (i__36786__auto___42078 + (1));
i__36786__auto___42078 = G__42079;
continue;
} else {
}
break;
}

var G__42012 = args42010.length;
switch (G__42012) {
case 1:
return sablono.core.month_field42009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42010.length)].join('')));

}
});

sablono.core.month_field42009.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.month_field42009.call(null,name__41896__auto__,null);
});

sablono.core.month_field42009.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.month_field42009.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field42009);

/**
 * Creates a number input field.
 */
sablono.core.number_field42013 = (function sablono$core$number_field42013(var_args){
var args42014 = [];
var len__36785__auto___42081 = arguments.length;
var i__36786__auto___42082 = (0);
while(true){
if((i__36786__auto___42082 < len__36785__auto___42081)){
args42014.push((arguments[i__36786__auto___42082]));

var G__42083 = (i__36786__auto___42082 + (1));
i__36786__auto___42082 = G__42083;
continue;
} else {
}
break;
}

var G__42016 = args42014.length;
switch (G__42016) {
case 1:
return sablono.core.number_field42013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42014.length)].join('')));

}
});

sablono.core.number_field42013.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.number_field42013.call(null,name__41896__auto__,null);
});

sablono.core.number_field42013.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.number_field42013.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field42013);

/**
 * Creates a password input field.
 */
sablono.core.password_field42017 = (function sablono$core$password_field42017(var_args){
var args42018 = [];
var len__36785__auto___42085 = arguments.length;
var i__36786__auto___42086 = (0);
while(true){
if((i__36786__auto___42086 < len__36785__auto___42085)){
args42018.push((arguments[i__36786__auto___42086]));

var G__42087 = (i__36786__auto___42086 + (1));
i__36786__auto___42086 = G__42087;
continue;
} else {
}
break;
}

var G__42020 = args42018.length;
switch (G__42020) {
case 1:
return sablono.core.password_field42017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42018.length)].join('')));

}
});

sablono.core.password_field42017.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.password_field42017.call(null,name__41896__auto__,null);
});

sablono.core.password_field42017.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.password_field42017.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field42017);

/**
 * Creates a range input field.
 */
sablono.core.range_field42021 = (function sablono$core$range_field42021(var_args){
var args42022 = [];
var len__36785__auto___42089 = arguments.length;
var i__36786__auto___42090 = (0);
while(true){
if((i__36786__auto___42090 < len__36785__auto___42089)){
args42022.push((arguments[i__36786__auto___42090]));

var G__42091 = (i__36786__auto___42090 + (1));
i__36786__auto___42090 = G__42091;
continue;
} else {
}
break;
}

var G__42024 = args42022.length;
switch (G__42024) {
case 1:
return sablono.core.range_field42021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42022.length)].join('')));

}
});

sablono.core.range_field42021.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.range_field42021.call(null,name__41896__auto__,null);
});

sablono.core.range_field42021.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.range_field42021.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field42021);

/**
 * Creates a search input field.
 */
sablono.core.search_field42025 = (function sablono$core$search_field42025(var_args){
var args42026 = [];
var len__36785__auto___42093 = arguments.length;
var i__36786__auto___42094 = (0);
while(true){
if((i__36786__auto___42094 < len__36785__auto___42093)){
args42026.push((arguments[i__36786__auto___42094]));

var G__42095 = (i__36786__auto___42094 + (1));
i__36786__auto___42094 = G__42095;
continue;
} else {
}
break;
}

var G__42028 = args42026.length;
switch (G__42028) {
case 1:
return sablono.core.search_field42025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42026.length)].join('')));

}
});

sablono.core.search_field42025.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.search_field42025.call(null,name__41896__auto__,null);
});

sablono.core.search_field42025.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.search_field42025.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field42025);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42029 = (function sablono$core$tel_field42029(var_args){
var args42030 = [];
var len__36785__auto___42097 = arguments.length;
var i__36786__auto___42098 = (0);
while(true){
if((i__36786__auto___42098 < len__36785__auto___42097)){
args42030.push((arguments[i__36786__auto___42098]));

var G__42099 = (i__36786__auto___42098 + (1));
i__36786__auto___42098 = G__42099;
continue;
} else {
}
break;
}

var G__42032 = args42030.length;
switch (G__42032) {
case 1:
return sablono.core.tel_field42029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42030.length)].join('')));

}
});

sablono.core.tel_field42029.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.tel_field42029.call(null,name__41896__auto__,null);
});

sablono.core.tel_field42029.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.tel_field42029.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field42029);

/**
 * Creates a text input field.
 */
sablono.core.text_field42033 = (function sablono$core$text_field42033(var_args){
var args42034 = [];
var len__36785__auto___42101 = arguments.length;
var i__36786__auto___42102 = (0);
while(true){
if((i__36786__auto___42102 < len__36785__auto___42101)){
args42034.push((arguments[i__36786__auto___42102]));

var G__42103 = (i__36786__auto___42102 + (1));
i__36786__auto___42102 = G__42103;
continue;
} else {
}
break;
}

var G__42036 = args42034.length;
switch (G__42036) {
case 1:
return sablono.core.text_field42033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42034.length)].join('')));

}
});

sablono.core.text_field42033.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.text_field42033.call(null,name__41896__auto__,null);
});

sablono.core.text_field42033.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.text_field42033.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field42033);

/**
 * Creates a time input field.
 */
sablono.core.time_field42037 = (function sablono$core$time_field42037(var_args){
var args42038 = [];
var len__36785__auto___42105 = arguments.length;
var i__36786__auto___42106 = (0);
while(true){
if((i__36786__auto___42106 < len__36785__auto___42105)){
args42038.push((arguments[i__36786__auto___42106]));

var G__42107 = (i__36786__auto___42106 + (1));
i__36786__auto___42106 = G__42107;
continue;
} else {
}
break;
}

var G__42040 = args42038.length;
switch (G__42040) {
case 1:
return sablono.core.time_field42037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42038.length)].join('')));

}
});

sablono.core.time_field42037.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.time_field42037.call(null,name__41896__auto__,null);
});

sablono.core.time_field42037.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.time_field42037.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field42037);

/**
 * Creates a url input field.
 */
sablono.core.url_field42041 = (function sablono$core$url_field42041(var_args){
var args42042 = [];
var len__36785__auto___42109 = arguments.length;
var i__36786__auto___42110 = (0);
while(true){
if((i__36786__auto___42110 < len__36785__auto___42109)){
args42042.push((arguments[i__36786__auto___42110]));

var G__42111 = (i__36786__auto___42110 + (1));
i__36786__auto___42110 = G__42111;
continue;
} else {
}
break;
}

var G__42044 = args42042.length;
switch (G__42044) {
case 1:
return sablono.core.url_field42041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42042.length)].join('')));

}
});

sablono.core.url_field42041.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.url_field42041.call(null,name__41896__auto__,null);
});

sablono.core.url_field42041.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.url_field42041.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field42041);

/**
 * Creates a week input field.
 */
sablono.core.week_field42045 = (function sablono$core$week_field42045(var_args){
var args42046 = [];
var len__36785__auto___42113 = arguments.length;
var i__36786__auto___42114 = (0);
while(true){
if((i__36786__auto___42114 < len__36785__auto___42113)){
args42046.push((arguments[i__36786__auto___42114]));

var G__42115 = (i__36786__auto___42114 + (1));
i__36786__auto___42114 = G__42115;
continue;
} else {
}
break;
}

var G__42048 = args42046.length;
switch (G__42048) {
case 1:
return sablono.core.week_field42045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42046.length)].join('')));

}
});

sablono.core.week_field42045.cljs$core$IFn$_invoke$arity$1 = (function (name__41896__auto__){
return sablono.core.week_field42045.call(null,name__41896__auto__,null);
});

sablono.core.week_field42045.cljs$core$IFn$_invoke$arity$2 = (function (name__41896__auto__,value__41897__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41896__auto__,value__41897__auto__);
});

sablono.core.week_field42045.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field42045);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42117 = (function sablono$core$check_box42117(var_args){
var args42118 = [];
var len__36785__auto___42121 = arguments.length;
var i__36786__auto___42122 = (0);
while(true){
if((i__36786__auto___42122 < len__36785__auto___42121)){
args42118.push((arguments[i__36786__auto___42122]));

var G__42123 = (i__36786__auto___42122 + (1));
i__36786__auto___42122 = G__42123;
continue;
} else {
}
break;
}

var G__42120 = args42118.length;
switch (G__42120) {
case 1:
return sablono.core.check_box42117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42117.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42118.length)].join('')));

}
});

sablono.core.check_box42117.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box42117.call(null,name,null);
});

sablono.core.check_box42117.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box42117.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box42117.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35672__auto__ = value;
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box42117.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box42117);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42125 = (function sablono$core$radio_button42125(var_args){
var args42126 = [];
var len__36785__auto___42129 = arguments.length;
var i__36786__auto___42130 = (0);
while(true){
if((i__36786__auto___42130 < len__36785__auto___42129)){
args42126.push((arguments[i__36786__auto___42130]));

var G__42131 = (i__36786__auto___42130 + (1));
i__36786__auto___42130 = G__42131;
continue;
} else {
}
break;
}

var G__42128 = args42126.length;
switch (G__42128) {
case 1:
return sablono.core.radio_button42125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42125.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42126.length)].join('')));

}
});

sablono.core.radio_button42125.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button42125.call(null,group,null);
});

sablono.core.radio_button42125.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button42125.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button42125.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35672__auto__ = value;
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button42125.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button42125);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42133 = (function sablono$core$select_options42133(coll){
var iter__36460__auto__ = (function sablono$core$select_options42133_$_iter__42150(s__42151){
return (new cljs.core.LazySeq(null,(function (){
var s__42151__$1 = s__42151;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42151__$1);
if(temp__4657__auto__){
var s__42151__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42151__$2)){
var c__36458__auto__ = cljs.core.chunk_first.call(null,s__42151__$2);
var size__36459__auto__ = cljs.core.count.call(null,c__36458__auto__);
var b__42153 = cljs.core.chunk_buffer.call(null,size__36459__auto__);
if((function (){var i__42152 = (0);
while(true){
if((i__42152 < size__36459__auto__)){
var x = cljs.core._nth.call(null,c__36458__auto__,i__42152);
cljs.core.chunk_append.call(null,b__42153,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__42160 = x;
var text = cljs.core.nth.call(null,vec__42160,(0),null);
var val = cljs.core.nth.call(null,vec__42160,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__42160,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options42133.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42166 = (i__42152 + (1));
i__42152 = G__42166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42153),sablono$core$select_options42133_$_iter__42150.call(null,cljs.core.chunk_rest.call(null,s__42151__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42153),null);
}
} else {
var x = cljs.core.first.call(null,s__42151__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__42163 = x;
var text = cljs.core.nth.call(null,vec__42163,(0),null);
var val = cljs.core.nth.call(null,vec__42163,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__42163,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options42133.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42133_$_iter__42150.call(null,cljs.core.rest.call(null,s__42151__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36460__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options42133);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42167 = (function sablono$core$drop_down42167(var_args){
var args42168 = [];
var len__36785__auto___42171 = arguments.length;
var i__36786__auto___42172 = (0);
while(true){
if((i__36786__auto___42172 < len__36785__auto___42171)){
args42168.push((arguments[i__36786__auto___42172]));

var G__42173 = (i__36786__auto___42172 + (1));
i__36786__auto___42172 = G__42173;
continue;
} else {
}
break;
}

var G__42170 = args42168.length;
switch (G__42170) {
case 2:
return sablono.core.drop_down42167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42167.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42168.length)].join('')));

}
});

sablono.core.drop_down42167.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42167.call(null,name,options,null);
});

sablono.core.drop_down42167.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down42167.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down42167);
/**
 * Creates a text area element.
 */
sablono.core.text_area42175 = (function sablono$core$text_area42175(var_args){
var args42176 = [];
var len__36785__auto___42179 = arguments.length;
var i__36786__auto___42180 = (0);
while(true){
if((i__36786__auto___42180 < len__36785__auto___42179)){
args42176.push((arguments[i__36786__auto___42180]));

var G__42181 = (i__36786__auto___42180 + (1));
i__36786__auto___42180 = G__42181;
continue;
} else {
}
break;
}

var G__42178 = args42176.length;
switch (G__42178) {
case 1:
return sablono.core.text_area42175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42176.length)].join('')));

}
});

sablono.core.text_area42175.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area42175.call(null,name,null);
});

sablono.core.text_area42175.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35672__auto__ = value;
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area42175.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area42175);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42183 = (function sablono$core$label42183(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label42183);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42184 = (function sablono$core$submit_button42184(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button42184);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42185 = (function sablono$core$reset_button42185(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button42185);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42186 = (function sablono$core$form_to42186(var_args){
var args__36792__auto__ = [];
var len__36785__auto___42193 = arguments.length;
var i__36786__auto___42194 = (0);
while(true){
if((i__36786__auto___42194 < len__36785__auto___42193)){
args__36792__auto__.push((arguments[i__36786__auto___42194]));

var G__42195 = (i__36786__auto___42194 + (1));
i__36786__auto___42194 = G__42195;
continue;
} else {
}
break;
}

var argseq__36793__auto__ = ((((1) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42186.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36793__auto__);
});

sablono.core.form_to42186.cljs$core$IFn$_invoke$arity$variadic = (function (p__42189,body){
var vec__42190 = p__42189;
var method = cljs.core.nth.call(null,vec__42190,(0),null);
var action = cljs.core.nth.call(null,vec__42190,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to42186.cljs$lang$maxFixedArity = (1);

sablono.core.form_to42186.cljs$lang$applyTo = (function (seq42187){
var G__42188 = cljs.core.first.call(null,seq42187);
var seq42187__$1 = cljs.core.next.call(null,seq42187);
return sablono.core.form_to42186.cljs$core$IFn$_invoke$arity$variadic(G__42188,seq42187__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to42186);
