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
var G__41724__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41721 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41722 = cljs.core.seq.call(null,vec__41721);
var first__41723 = cljs.core.first.call(null,seq__41722);
var seq__41722__$1 = cljs.core.next.call(null,seq__41722);
var tag = first__41723;
var body = seq__41722__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41725__i = 0, G__41725__a = new Array(arguments.length -  0);
while (G__41725__i < G__41725__a.length) {G__41725__a[G__41725__i] = arguments[G__41725__i + 0]; ++G__41725__i;}
  args = new cljs.core.IndexedSeq(G__41725__a,0,null);
} 
return G__41724__delegate.call(this,args);};
G__41724.cljs$lang$maxFixedArity = 0;
G__41724.cljs$lang$applyTo = (function (arglist__41726){
var args = cljs.core.seq(arglist__41726);
return G__41724__delegate(args);
});
G__41724.cljs$core$IFn$_invoke$arity$variadic = G__41724__delegate;
return G__41724;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36272__auto__ = (function sablono$core$update_arglists_$_iter__41731(s__41732){
return (new cljs.core.LazySeq(null,(function (){
var s__41732__$1 = s__41732;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41732__$1);
if(temp__4657__auto__){
var s__41732__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41732__$2)){
var c__36270__auto__ = cljs.core.chunk_first.call(null,s__41732__$2);
var size__36271__auto__ = cljs.core.count.call(null,c__36270__auto__);
var b__41734 = cljs.core.chunk_buffer.call(null,size__36271__auto__);
if((function (){var i__41733 = (0);
while(true){
if((i__41733 < size__36271__auto__)){
var args = cljs.core._nth.call(null,c__36270__auto__,i__41733);
cljs.core.chunk_append.call(null,b__41734,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41735 = (i__41733 + (1));
i__41733 = G__41735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41734),sablono$core$update_arglists_$_iter__41731.call(null,cljs.core.chunk_rest.call(null,s__41732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41734),null);
}
} else {
var args = cljs.core.first.call(null,s__41732__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41731.call(null,cljs.core.rest.call(null,s__41732__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36272__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36604__auto__ = [];
var len__36597__auto___41741 = arguments.length;
var i__36598__auto___41742 = (0);
while(true){
if((i__36598__auto___41742 < len__36597__auto___41741)){
args__36604__auto__.push((arguments[i__36598__auto___41742]));

var G__41743 = (i__36598__auto___41742 + (1));
i__36598__auto___41742 = G__41743;
continue;
} else {
}
break;
}

var argseq__36605__auto__ = ((((0) < args__36604__auto__.length))?(new cljs.core.IndexedSeq(args__36604__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36605__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36272__auto__ = (function sablono$core$iter__41737(s__41738){
return (new cljs.core.LazySeq(null,(function (){
var s__41738__$1 = s__41738;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41738__$1);
if(temp__4657__auto__){
var s__41738__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41738__$2)){
var c__36270__auto__ = cljs.core.chunk_first.call(null,s__41738__$2);
var size__36271__auto__ = cljs.core.count.call(null,c__36270__auto__);
var b__41740 = cljs.core.chunk_buffer.call(null,size__36271__auto__);
if((function (){var i__41739 = (0);
while(true){
if((i__41739 < size__36271__auto__)){
var style = cljs.core._nth.call(null,c__36270__auto__,i__41739);
cljs.core.chunk_append.call(null,b__41740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41744 = (i__41739 + (1));
i__41739 = G__41744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41740),sablono$core$iter__41737.call(null,cljs.core.chunk_rest.call(null,s__41738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41740),null);
}
} else {
var style = cljs.core.first.call(null,s__41738__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41737.call(null,cljs.core.rest.call(null,s__41738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36272__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq41736){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41736));
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
sablono.core.link_to41745 = (function sablono$core$link_to41745(var_args){
var args__36604__auto__ = [];
var len__36597__auto___41748 = arguments.length;
var i__36598__auto___41749 = (0);
while(true){
if((i__36598__auto___41749 < len__36597__auto___41748)){
args__36604__auto__.push((arguments[i__36598__auto___41749]));

var G__41750 = (i__36598__auto___41749 + (1));
i__36598__auto___41749 = G__41750;
continue;
} else {
}
break;
}

var argseq__36605__auto__ = ((((1) < args__36604__auto__.length))?(new cljs.core.IndexedSeq(args__36604__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41745.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36605__auto__);
});

sablono.core.link_to41745.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41745.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41745.cljs$lang$applyTo = (function (seq41746){
var G__41747 = cljs.core.first.call(null,seq41746);
var seq41746__$1 = cljs.core.next.call(null,seq41746);
return sablono.core.link_to41745.cljs$core$IFn$_invoke$arity$variadic(G__41747,seq41746__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41745);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41751 = (function sablono$core$mail_to41751(var_args){
var args__36604__auto__ = [];
var len__36597__auto___41758 = arguments.length;
var i__36598__auto___41759 = (0);
while(true){
if((i__36598__auto___41759 < len__36597__auto___41758)){
args__36604__auto__.push((arguments[i__36598__auto___41759]));

var G__41760 = (i__36598__auto___41759 + (1));
i__36598__auto___41759 = G__41760;
continue;
} else {
}
break;
}

var argseq__36605__auto__ = ((((1) < args__36604__auto__.length))?(new cljs.core.IndexedSeq(args__36604__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41751.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36605__auto__);
});

sablono.core.mail_to41751.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41754){
var vec__41755 = p__41754;
var content = cljs.core.nth.call(null,vec__41755,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35484__auto__ = content;
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41751.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41751.cljs$lang$applyTo = (function (seq41752){
var G__41753 = cljs.core.first.call(null,seq41752);
var seq41752__$1 = cljs.core.next.call(null,seq41752);
return sablono.core.mail_to41751.cljs$core$IFn$_invoke$arity$variadic(G__41753,seq41752__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41751);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41761 = (function sablono$core$unordered_list41761(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36272__auto__ = (function sablono$core$unordered_list41761_$_iter__41766(s__41767){
return (new cljs.core.LazySeq(null,(function (){
var s__41767__$1 = s__41767;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41767__$1);
if(temp__4657__auto__){
var s__41767__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41767__$2)){
var c__36270__auto__ = cljs.core.chunk_first.call(null,s__41767__$2);
var size__36271__auto__ = cljs.core.count.call(null,c__36270__auto__);
var b__41769 = cljs.core.chunk_buffer.call(null,size__36271__auto__);
if((function (){var i__41768 = (0);
while(true){
if((i__41768 < size__36271__auto__)){
var x = cljs.core._nth.call(null,c__36270__auto__,i__41768);
cljs.core.chunk_append.call(null,b__41769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41770 = (i__41768 + (1));
i__41768 = G__41770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41769),sablono$core$unordered_list41761_$_iter__41766.call(null,cljs.core.chunk_rest.call(null,s__41767__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41769),null);
}
} else {
var x = cljs.core.first.call(null,s__41767__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41761_$_iter__41766.call(null,cljs.core.rest.call(null,s__41767__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36272__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41761);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41771 = (function sablono$core$ordered_list41771(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36272__auto__ = (function sablono$core$ordered_list41771_$_iter__41776(s__41777){
return (new cljs.core.LazySeq(null,(function (){
var s__41777__$1 = s__41777;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41777__$1);
if(temp__4657__auto__){
var s__41777__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41777__$2)){
var c__36270__auto__ = cljs.core.chunk_first.call(null,s__41777__$2);
var size__36271__auto__ = cljs.core.count.call(null,c__36270__auto__);
var b__41779 = cljs.core.chunk_buffer.call(null,size__36271__auto__);
if((function (){var i__41778 = (0);
while(true){
if((i__41778 < size__36271__auto__)){
var x = cljs.core._nth.call(null,c__36270__auto__,i__41778);
cljs.core.chunk_append.call(null,b__41779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41780 = (i__41778 + (1));
i__41778 = G__41780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41779),sablono$core$ordered_list41771_$_iter__41776.call(null,cljs.core.chunk_rest.call(null,s__41777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41779),null);
}
} else {
var x = cljs.core.first.call(null,s__41777__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41771_$_iter__41776.call(null,cljs.core.rest.call(null,s__41777__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36272__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list41771);
/**
 * Create an image element.
 */
sablono.core.image41781 = (function sablono$core$image41781(var_args){
var args41782 = [];
var len__36597__auto___41785 = arguments.length;
var i__36598__auto___41786 = (0);
while(true){
if((i__36598__auto___41786 < len__36597__auto___41785)){
args41782.push((arguments[i__36598__auto___41786]));

var G__41787 = (i__36598__auto___41786 + (1));
i__36598__auto___41786 = G__41787;
continue;
} else {
}
break;
}

var G__41784 = args41782.length;
switch (G__41784) {
case 1:
return sablono.core.image41781.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41781.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41782.length)].join('')));

}
});

sablono.core.image41781.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image41781.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image41781.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image41781);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__41789_SHARP_,p2__41790_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41789_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41790_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__41791_SHARP_,p2__41792_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41791_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41792_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35484__auto__ = value;
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field41793 = (function sablono$core$color_field41793(var_args){
var args41794 = [];
var len__36597__auto___41861 = arguments.length;
var i__36598__auto___41862 = (0);
while(true){
if((i__36598__auto___41862 < len__36597__auto___41861)){
args41794.push((arguments[i__36598__auto___41862]));

var G__41863 = (i__36598__auto___41862 + (1));
i__36598__auto___41862 = G__41863;
continue;
} else {
}
break;
}

var G__41796 = args41794.length;
switch (G__41796) {
case 1:
return sablono.core.color_field41793.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41794.length)].join('')));

}
});

sablono.core.color_field41793.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.color_field41793.call(null,name__41708__auto__,null);
});

sablono.core.color_field41793.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.color_field41793.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field41793);

/**
 * Creates a date input field.
 */
sablono.core.date_field41797 = (function sablono$core$date_field41797(var_args){
var args41798 = [];
var len__36597__auto___41865 = arguments.length;
var i__36598__auto___41866 = (0);
while(true){
if((i__36598__auto___41866 < len__36597__auto___41865)){
args41798.push((arguments[i__36598__auto___41866]));

var G__41867 = (i__36598__auto___41866 + (1));
i__36598__auto___41866 = G__41867;
continue;
} else {
}
break;
}

var G__41800 = args41798.length;
switch (G__41800) {
case 1:
return sablono.core.date_field41797.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41797.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41798.length)].join('')));

}
});

sablono.core.date_field41797.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.date_field41797.call(null,name__41708__auto__,null);
});

sablono.core.date_field41797.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.date_field41797.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field41797);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41801 = (function sablono$core$datetime_field41801(var_args){
var args41802 = [];
var len__36597__auto___41869 = arguments.length;
var i__36598__auto___41870 = (0);
while(true){
if((i__36598__auto___41870 < len__36597__auto___41869)){
args41802.push((arguments[i__36598__auto___41870]));

var G__41871 = (i__36598__auto___41870 + (1));
i__36598__auto___41870 = G__41871;
continue;
} else {
}
break;
}

var G__41804 = args41802.length;
switch (G__41804) {
case 1:
return sablono.core.datetime_field41801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41802.length)].join('')));

}
});

sablono.core.datetime_field41801.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.datetime_field41801.call(null,name__41708__auto__,null);
});

sablono.core.datetime_field41801.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.datetime_field41801.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field41801);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41805 = (function sablono$core$datetime_local_field41805(var_args){
var args41806 = [];
var len__36597__auto___41873 = arguments.length;
var i__36598__auto___41874 = (0);
while(true){
if((i__36598__auto___41874 < len__36597__auto___41873)){
args41806.push((arguments[i__36598__auto___41874]));

var G__41875 = (i__36598__auto___41874 + (1));
i__36598__auto___41874 = G__41875;
continue;
} else {
}
break;
}

var G__41808 = args41806.length;
switch (G__41808) {
case 1:
return sablono.core.datetime_local_field41805.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41806.length)].join('')));

}
});

sablono.core.datetime_local_field41805.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.datetime_local_field41805.call(null,name__41708__auto__,null);
});

sablono.core.datetime_local_field41805.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.datetime_local_field41805.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field41805);

/**
 * Creates a email input field.
 */
sablono.core.email_field41809 = (function sablono$core$email_field41809(var_args){
var args41810 = [];
var len__36597__auto___41877 = arguments.length;
var i__36598__auto___41878 = (0);
while(true){
if((i__36598__auto___41878 < len__36597__auto___41877)){
args41810.push((arguments[i__36598__auto___41878]));

var G__41879 = (i__36598__auto___41878 + (1));
i__36598__auto___41878 = G__41879;
continue;
} else {
}
break;
}

var G__41812 = args41810.length;
switch (G__41812) {
case 1:
return sablono.core.email_field41809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41810.length)].join('')));

}
});

sablono.core.email_field41809.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.email_field41809.call(null,name__41708__auto__,null);
});

sablono.core.email_field41809.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.email_field41809.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field41809);

/**
 * Creates a file input field.
 */
sablono.core.file_field41813 = (function sablono$core$file_field41813(var_args){
var args41814 = [];
var len__36597__auto___41881 = arguments.length;
var i__36598__auto___41882 = (0);
while(true){
if((i__36598__auto___41882 < len__36597__auto___41881)){
args41814.push((arguments[i__36598__auto___41882]));

var G__41883 = (i__36598__auto___41882 + (1));
i__36598__auto___41882 = G__41883;
continue;
} else {
}
break;
}

var G__41816 = args41814.length;
switch (G__41816) {
case 1:
return sablono.core.file_field41813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41814.length)].join('')));

}
});

sablono.core.file_field41813.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.file_field41813.call(null,name__41708__auto__,null);
});

sablono.core.file_field41813.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.file_field41813.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field41813);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41817 = (function sablono$core$hidden_field41817(var_args){
var args41818 = [];
var len__36597__auto___41885 = arguments.length;
var i__36598__auto___41886 = (0);
while(true){
if((i__36598__auto___41886 < len__36597__auto___41885)){
args41818.push((arguments[i__36598__auto___41886]));

var G__41887 = (i__36598__auto___41886 + (1));
i__36598__auto___41886 = G__41887;
continue;
} else {
}
break;
}

var G__41820 = args41818.length;
switch (G__41820) {
case 1:
return sablono.core.hidden_field41817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41818.length)].join('')));

}
});

sablono.core.hidden_field41817.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.hidden_field41817.call(null,name__41708__auto__,null);
});

sablono.core.hidden_field41817.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.hidden_field41817.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field41817);

/**
 * Creates a month input field.
 */
sablono.core.month_field41821 = (function sablono$core$month_field41821(var_args){
var args41822 = [];
var len__36597__auto___41889 = arguments.length;
var i__36598__auto___41890 = (0);
while(true){
if((i__36598__auto___41890 < len__36597__auto___41889)){
args41822.push((arguments[i__36598__auto___41890]));

var G__41891 = (i__36598__auto___41890 + (1));
i__36598__auto___41890 = G__41891;
continue;
} else {
}
break;
}

var G__41824 = args41822.length;
switch (G__41824) {
case 1:
return sablono.core.month_field41821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41822.length)].join('')));

}
});

sablono.core.month_field41821.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.month_field41821.call(null,name__41708__auto__,null);
});

sablono.core.month_field41821.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.month_field41821.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field41821);

/**
 * Creates a number input field.
 */
sablono.core.number_field41825 = (function sablono$core$number_field41825(var_args){
var args41826 = [];
var len__36597__auto___41893 = arguments.length;
var i__36598__auto___41894 = (0);
while(true){
if((i__36598__auto___41894 < len__36597__auto___41893)){
args41826.push((arguments[i__36598__auto___41894]));

var G__41895 = (i__36598__auto___41894 + (1));
i__36598__auto___41894 = G__41895;
continue;
} else {
}
break;
}

var G__41828 = args41826.length;
switch (G__41828) {
case 1:
return sablono.core.number_field41825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41826.length)].join('')));

}
});

sablono.core.number_field41825.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.number_field41825.call(null,name__41708__auto__,null);
});

sablono.core.number_field41825.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.number_field41825.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field41825);

/**
 * Creates a password input field.
 */
sablono.core.password_field41829 = (function sablono$core$password_field41829(var_args){
var args41830 = [];
var len__36597__auto___41897 = arguments.length;
var i__36598__auto___41898 = (0);
while(true){
if((i__36598__auto___41898 < len__36597__auto___41897)){
args41830.push((arguments[i__36598__auto___41898]));

var G__41899 = (i__36598__auto___41898 + (1));
i__36598__auto___41898 = G__41899;
continue;
} else {
}
break;
}

var G__41832 = args41830.length;
switch (G__41832) {
case 1:
return sablono.core.password_field41829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41830.length)].join('')));

}
});

sablono.core.password_field41829.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.password_field41829.call(null,name__41708__auto__,null);
});

sablono.core.password_field41829.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.password_field41829.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field41829);

/**
 * Creates a range input field.
 */
sablono.core.range_field41833 = (function sablono$core$range_field41833(var_args){
var args41834 = [];
var len__36597__auto___41901 = arguments.length;
var i__36598__auto___41902 = (0);
while(true){
if((i__36598__auto___41902 < len__36597__auto___41901)){
args41834.push((arguments[i__36598__auto___41902]));

var G__41903 = (i__36598__auto___41902 + (1));
i__36598__auto___41902 = G__41903;
continue;
} else {
}
break;
}

var G__41836 = args41834.length;
switch (G__41836) {
case 1:
return sablono.core.range_field41833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41834.length)].join('')));

}
});

sablono.core.range_field41833.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.range_field41833.call(null,name__41708__auto__,null);
});

sablono.core.range_field41833.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.range_field41833.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field41833);

/**
 * Creates a search input field.
 */
sablono.core.search_field41837 = (function sablono$core$search_field41837(var_args){
var args41838 = [];
var len__36597__auto___41905 = arguments.length;
var i__36598__auto___41906 = (0);
while(true){
if((i__36598__auto___41906 < len__36597__auto___41905)){
args41838.push((arguments[i__36598__auto___41906]));

var G__41907 = (i__36598__auto___41906 + (1));
i__36598__auto___41906 = G__41907;
continue;
} else {
}
break;
}

var G__41840 = args41838.length;
switch (G__41840) {
case 1:
return sablono.core.search_field41837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41838.length)].join('')));

}
});

sablono.core.search_field41837.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.search_field41837.call(null,name__41708__auto__,null);
});

sablono.core.search_field41837.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.search_field41837.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field41837);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41841 = (function sablono$core$tel_field41841(var_args){
var args41842 = [];
var len__36597__auto___41909 = arguments.length;
var i__36598__auto___41910 = (0);
while(true){
if((i__36598__auto___41910 < len__36597__auto___41909)){
args41842.push((arguments[i__36598__auto___41910]));

var G__41911 = (i__36598__auto___41910 + (1));
i__36598__auto___41910 = G__41911;
continue;
} else {
}
break;
}

var G__41844 = args41842.length;
switch (G__41844) {
case 1:
return sablono.core.tel_field41841.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41841.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41842.length)].join('')));

}
});

sablono.core.tel_field41841.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.tel_field41841.call(null,name__41708__auto__,null);
});

sablono.core.tel_field41841.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.tel_field41841.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field41841);

/**
 * Creates a text input field.
 */
sablono.core.text_field41845 = (function sablono$core$text_field41845(var_args){
var args41846 = [];
var len__36597__auto___41913 = arguments.length;
var i__36598__auto___41914 = (0);
while(true){
if((i__36598__auto___41914 < len__36597__auto___41913)){
args41846.push((arguments[i__36598__auto___41914]));

var G__41915 = (i__36598__auto___41914 + (1));
i__36598__auto___41914 = G__41915;
continue;
} else {
}
break;
}

var G__41848 = args41846.length;
switch (G__41848) {
case 1:
return sablono.core.text_field41845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41846.length)].join('')));

}
});

sablono.core.text_field41845.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.text_field41845.call(null,name__41708__auto__,null);
});

sablono.core.text_field41845.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.text_field41845.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field41845);

/**
 * Creates a time input field.
 */
sablono.core.time_field41849 = (function sablono$core$time_field41849(var_args){
var args41850 = [];
var len__36597__auto___41917 = arguments.length;
var i__36598__auto___41918 = (0);
while(true){
if((i__36598__auto___41918 < len__36597__auto___41917)){
args41850.push((arguments[i__36598__auto___41918]));

var G__41919 = (i__36598__auto___41918 + (1));
i__36598__auto___41918 = G__41919;
continue;
} else {
}
break;
}

var G__41852 = args41850.length;
switch (G__41852) {
case 1:
return sablono.core.time_field41849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41850.length)].join('')));

}
});

sablono.core.time_field41849.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.time_field41849.call(null,name__41708__auto__,null);
});

sablono.core.time_field41849.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.time_field41849.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field41849);

/**
 * Creates a url input field.
 */
sablono.core.url_field41853 = (function sablono$core$url_field41853(var_args){
var args41854 = [];
var len__36597__auto___41921 = arguments.length;
var i__36598__auto___41922 = (0);
while(true){
if((i__36598__auto___41922 < len__36597__auto___41921)){
args41854.push((arguments[i__36598__auto___41922]));

var G__41923 = (i__36598__auto___41922 + (1));
i__36598__auto___41922 = G__41923;
continue;
} else {
}
break;
}

var G__41856 = args41854.length;
switch (G__41856) {
case 1:
return sablono.core.url_field41853.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41853.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41854.length)].join('')));

}
});

sablono.core.url_field41853.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.url_field41853.call(null,name__41708__auto__,null);
});

sablono.core.url_field41853.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.url_field41853.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field41853);

/**
 * Creates a week input field.
 */
sablono.core.week_field41857 = (function sablono$core$week_field41857(var_args){
var args41858 = [];
var len__36597__auto___41925 = arguments.length;
var i__36598__auto___41926 = (0);
while(true){
if((i__36598__auto___41926 < len__36597__auto___41925)){
args41858.push((arguments[i__36598__auto___41926]));

var G__41927 = (i__36598__auto___41926 + (1));
i__36598__auto___41926 = G__41927;
continue;
} else {
}
break;
}

var G__41860 = args41858.length;
switch (G__41860) {
case 1:
return sablono.core.week_field41857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41858.length)].join('')));

}
});

sablono.core.week_field41857.cljs$core$IFn$_invoke$arity$1 = (function (name__41708__auto__){
return sablono.core.week_field41857.call(null,name__41708__auto__,null);
});

sablono.core.week_field41857.cljs$core$IFn$_invoke$arity$2 = (function (name__41708__auto__,value__41709__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41708__auto__,value__41709__auto__);
});

sablono.core.week_field41857.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field41857);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41929 = (function sablono$core$check_box41929(var_args){
var args41930 = [];
var len__36597__auto___41933 = arguments.length;
var i__36598__auto___41934 = (0);
while(true){
if((i__36598__auto___41934 < len__36597__auto___41933)){
args41930.push((arguments[i__36598__auto___41934]));

var G__41935 = (i__36598__auto___41934 + (1));
i__36598__auto___41934 = G__41935;
continue;
} else {
}
break;
}

var G__41932 = args41930.length;
switch (G__41932) {
case 1:
return sablono.core.check_box41929.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41929.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41929.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41930.length)].join('')));

}
});

sablono.core.check_box41929.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box41929.call(null,name,null);
});

sablono.core.check_box41929.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box41929.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box41929.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35484__auto__ = value;
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box41929.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box41929);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41937 = (function sablono$core$radio_button41937(var_args){
var args41938 = [];
var len__36597__auto___41941 = arguments.length;
var i__36598__auto___41942 = (0);
while(true){
if((i__36598__auto___41942 < len__36597__auto___41941)){
args41938.push((arguments[i__36598__auto___41942]));

var G__41943 = (i__36598__auto___41942 + (1));
i__36598__auto___41942 = G__41943;
continue;
} else {
}
break;
}

var G__41940 = args41938.length;
switch (G__41940) {
case 1:
return sablono.core.radio_button41937.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41937.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41937.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41938.length)].join('')));

}
});

sablono.core.radio_button41937.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button41937.call(null,group,null);
});

sablono.core.radio_button41937.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button41937.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button41937.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35484__auto__ = value;
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button41937.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button41937);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41945 = (function sablono$core$select_options41945(coll){
var iter__36272__auto__ = (function sablono$core$select_options41945_$_iter__41962(s__41963){
return (new cljs.core.LazySeq(null,(function (){
var s__41963__$1 = s__41963;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41963__$1);
if(temp__4657__auto__){
var s__41963__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41963__$2)){
var c__36270__auto__ = cljs.core.chunk_first.call(null,s__41963__$2);
var size__36271__auto__ = cljs.core.count.call(null,c__36270__auto__);
var b__41965 = cljs.core.chunk_buffer.call(null,size__36271__auto__);
if((function (){var i__41964 = (0);
while(true){
if((i__41964 < size__36271__auto__)){
var x = cljs.core._nth.call(null,c__36270__auto__,i__41964);
cljs.core.chunk_append.call(null,b__41965,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41972 = x;
var text = cljs.core.nth.call(null,vec__41972,(0),null);
var val = cljs.core.nth.call(null,vec__41972,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41972,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41945.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41978 = (i__41964 + (1));
i__41964 = G__41978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41965),sablono$core$select_options41945_$_iter__41962.call(null,cljs.core.chunk_rest.call(null,s__41963__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41965),null);
}
} else {
var x = cljs.core.first.call(null,s__41963__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41975 = x;
var text = cljs.core.nth.call(null,vec__41975,(0),null);
var val = cljs.core.nth.call(null,vec__41975,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41975,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41945.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41945_$_iter__41962.call(null,cljs.core.rest.call(null,s__41963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36272__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options41945);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41979 = (function sablono$core$drop_down41979(var_args){
var args41980 = [];
var len__36597__auto___41983 = arguments.length;
var i__36598__auto___41984 = (0);
while(true){
if((i__36598__auto___41984 < len__36597__auto___41983)){
args41980.push((arguments[i__36598__auto___41984]));

var G__41985 = (i__36598__auto___41984 + (1));
i__36598__auto___41984 = G__41985;
continue;
} else {
}
break;
}

var G__41982 = args41980.length;
switch (G__41982) {
case 2:
return sablono.core.drop_down41979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41979.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41980.length)].join('')));

}
});

sablono.core.drop_down41979.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41979.call(null,name,options,null);
});

sablono.core.drop_down41979.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down41979.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down41979);
/**
 * Creates a text area element.
 */
sablono.core.text_area41987 = (function sablono$core$text_area41987(var_args){
var args41988 = [];
var len__36597__auto___41991 = arguments.length;
var i__36598__auto___41992 = (0);
while(true){
if((i__36598__auto___41992 < len__36597__auto___41991)){
args41988.push((arguments[i__36598__auto___41992]));

var G__41993 = (i__36598__auto___41992 + (1));
i__36598__auto___41992 = G__41993;
continue;
} else {
}
break;
}

var G__41990 = args41988.length;
switch (G__41990) {
case 1:
return sablono.core.text_area41987.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41987.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41988.length)].join('')));

}
});

sablono.core.text_area41987.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area41987.call(null,name,null);
});

sablono.core.text_area41987.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35484__auto__ = value;
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area41987.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area41987);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41995 = (function sablono$core$label41995(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label41995);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41996 = (function sablono$core$submit_button41996(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button41996);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41997 = (function sablono$core$reset_button41997(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button41997);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41998 = (function sablono$core$form_to41998(var_args){
var args__36604__auto__ = [];
var len__36597__auto___42005 = arguments.length;
var i__36598__auto___42006 = (0);
while(true){
if((i__36598__auto___42006 < len__36597__auto___42005)){
args__36604__auto__.push((arguments[i__36598__auto___42006]));

var G__42007 = (i__36598__auto___42006 + (1));
i__36598__auto___42006 = G__42007;
continue;
} else {
}
break;
}

var argseq__36605__auto__ = ((((1) < args__36604__auto__.length))?(new cljs.core.IndexedSeq(args__36604__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41998.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36605__auto__);
});

sablono.core.form_to41998.cljs$core$IFn$_invoke$arity$variadic = (function (p__42001,body){
var vec__42002 = p__42001;
var method = cljs.core.nth.call(null,vec__42002,(0),null);
var action = cljs.core.nth.call(null,vec__42002,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to41998.cljs$lang$maxFixedArity = (1);

sablono.core.form_to41998.cljs$lang$applyTo = (function (seq41999){
var G__42000 = cljs.core.first.call(null,seq41999);
var seq41999__$1 = cljs.core.next.call(null,seq41999);
return sablono.core.form_to41998.cljs$core$IFn$_invoke$arity$variadic(G__42000,seq41999__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to41998);
