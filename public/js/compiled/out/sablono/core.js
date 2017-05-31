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
var G__41704__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41701 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41702 = cljs.core.seq.call(null,vec__41701);
var first__41703 = cljs.core.first.call(null,seq__41702);
var seq__41702__$1 = cljs.core.next.call(null,seq__41702);
var tag = first__41703;
var body = seq__41702__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41705__i = 0, G__41705__a = new Array(arguments.length -  0);
while (G__41705__i < G__41705__a.length) {G__41705__a[G__41705__i] = arguments[G__41705__i + 0]; ++G__41705__i;}
  args = new cljs.core.IndexedSeq(G__41705__a,0,null);
} 
return G__41704__delegate.call(this,args);};
G__41704.cljs$lang$maxFixedArity = 0;
G__41704.cljs$lang$applyTo = (function (arglist__41706){
var args = cljs.core.seq(arglist__41706);
return G__41704__delegate(args);
});
G__41704.cljs$core$IFn$_invoke$arity$variadic = G__41704__delegate;
return G__41704;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36262__auto__ = (function sablono$core$update_arglists_$_iter__41711(s__41712){
return (new cljs.core.LazySeq(null,(function (){
var s__41712__$1 = s__41712;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41712__$1);
if(temp__4657__auto__){
var s__41712__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41712__$2)){
var c__36260__auto__ = cljs.core.chunk_first.call(null,s__41712__$2);
var size__36261__auto__ = cljs.core.count.call(null,c__36260__auto__);
var b__41714 = cljs.core.chunk_buffer.call(null,size__36261__auto__);
if((function (){var i__41713 = (0);
while(true){
if((i__41713 < size__36261__auto__)){
var args = cljs.core._nth.call(null,c__36260__auto__,i__41713);
cljs.core.chunk_append.call(null,b__41714,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41715 = (i__41713 + (1));
i__41713 = G__41715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41714),sablono$core$update_arglists_$_iter__41711.call(null,cljs.core.chunk_rest.call(null,s__41712__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41714),null);
}
} else {
var args = cljs.core.first.call(null,s__41712__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41711.call(null,cljs.core.rest.call(null,s__41712__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36262__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36594__auto__ = [];
var len__36587__auto___41721 = arguments.length;
var i__36588__auto___41722 = (0);
while(true){
if((i__36588__auto___41722 < len__36587__auto___41721)){
args__36594__auto__.push((arguments[i__36588__auto___41722]));

var G__41723 = (i__36588__auto___41722 + (1));
i__36588__auto___41722 = G__41723;
continue;
} else {
}
break;
}

var argseq__36595__auto__ = ((((0) < args__36594__auto__.length))?(new cljs.core.IndexedSeq(args__36594__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36595__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36262__auto__ = (function sablono$core$iter__41717(s__41718){
return (new cljs.core.LazySeq(null,(function (){
var s__41718__$1 = s__41718;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41718__$1);
if(temp__4657__auto__){
var s__41718__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41718__$2)){
var c__36260__auto__ = cljs.core.chunk_first.call(null,s__41718__$2);
var size__36261__auto__ = cljs.core.count.call(null,c__36260__auto__);
var b__41720 = cljs.core.chunk_buffer.call(null,size__36261__auto__);
if((function (){var i__41719 = (0);
while(true){
if((i__41719 < size__36261__auto__)){
var style = cljs.core._nth.call(null,c__36260__auto__,i__41719);
cljs.core.chunk_append.call(null,b__41720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41724 = (i__41719 + (1));
i__41719 = G__41724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41720),sablono$core$iter__41717.call(null,cljs.core.chunk_rest.call(null,s__41718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41720),null);
}
} else {
var style = cljs.core.first.call(null,s__41718__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41717.call(null,cljs.core.rest.call(null,s__41718__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36262__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq41716){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41716));
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
sablono.core.link_to41725 = (function sablono$core$link_to41725(var_args){
var args__36594__auto__ = [];
var len__36587__auto___41728 = arguments.length;
var i__36588__auto___41729 = (0);
while(true){
if((i__36588__auto___41729 < len__36587__auto___41728)){
args__36594__auto__.push((arguments[i__36588__auto___41729]));

var G__41730 = (i__36588__auto___41729 + (1));
i__36588__auto___41729 = G__41730;
continue;
} else {
}
break;
}

var argseq__36595__auto__ = ((((1) < args__36594__auto__.length))?(new cljs.core.IndexedSeq(args__36594__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41725.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36595__auto__);
});

sablono.core.link_to41725.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41725.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41725.cljs$lang$applyTo = (function (seq41726){
var G__41727 = cljs.core.first.call(null,seq41726);
var seq41726__$1 = cljs.core.next.call(null,seq41726);
return sablono.core.link_to41725.cljs$core$IFn$_invoke$arity$variadic(G__41727,seq41726__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41725);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41731 = (function sablono$core$mail_to41731(var_args){
var args__36594__auto__ = [];
var len__36587__auto___41738 = arguments.length;
var i__36588__auto___41739 = (0);
while(true){
if((i__36588__auto___41739 < len__36587__auto___41738)){
args__36594__auto__.push((arguments[i__36588__auto___41739]));

var G__41740 = (i__36588__auto___41739 + (1));
i__36588__auto___41739 = G__41740;
continue;
} else {
}
break;
}

var argseq__36595__auto__ = ((((1) < args__36594__auto__.length))?(new cljs.core.IndexedSeq(args__36594__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41731.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36595__auto__);
});

sablono.core.mail_to41731.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41734){
var vec__41735 = p__41734;
var content = cljs.core.nth.call(null,vec__41735,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35474__auto__ = content;
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41731.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41731.cljs$lang$applyTo = (function (seq41732){
var G__41733 = cljs.core.first.call(null,seq41732);
var seq41732__$1 = cljs.core.next.call(null,seq41732);
return sablono.core.mail_to41731.cljs$core$IFn$_invoke$arity$variadic(G__41733,seq41732__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41731);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41741 = (function sablono$core$unordered_list41741(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36262__auto__ = (function sablono$core$unordered_list41741_$_iter__41746(s__41747){
return (new cljs.core.LazySeq(null,(function (){
var s__41747__$1 = s__41747;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41747__$1);
if(temp__4657__auto__){
var s__41747__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41747__$2)){
var c__36260__auto__ = cljs.core.chunk_first.call(null,s__41747__$2);
var size__36261__auto__ = cljs.core.count.call(null,c__36260__auto__);
var b__41749 = cljs.core.chunk_buffer.call(null,size__36261__auto__);
if((function (){var i__41748 = (0);
while(true){
if((i__41748 < size__36261__auto__)){
var x = cljs.core._nth.call(null,c__36260__auto__,i__41748);
cljs.core.chunk_append.call(null,b__41749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41750 = (i__41748 + (1));
i__41748 = G__41750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41749),sablono$core$unordered_list41741_$_iter__41746.call(null,cljs.core.chunk_rest.call(null,s__41747__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41749),null);
}
} else {
var x = cljs.core.first.call(null,s__41747__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41741_$_iter__41746.call(null,cljs.core.rest.call(null,s__41747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36262__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41741);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41751 = (function sablono$core$ordered_list41751(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36262__auto__ = (function sablono$core$ordered_list41751_$_iter__41756(s__41757){
return (new cljs.core.LazySeq(null,(function (){
var s__41757__$1 = s__41757;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41757__$1);
if(temp__4657__auto__){
var s__41757__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41757__$2)){
var c__36260__auto__ = cljs.core.chunk_first.call(null,s__41757__$2);
var size__36261__auto__ = cljs.core.count.call(null,c__36260__auto__);
var b__41759 = cljs.core.chunk_buffer.call(null,size__36261__auto__);
if((function (){var i__41758 = (0);
while(true){
if((i__41758 < size__36261__auto__)){
var x = cljs.core._nth.call(null,c__36260__auto__,i__41758);
cljs.core.chunk_append.call(null,b__41759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__41760 = (i__41758 + (1));
i__41758 = G__41760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41759),sablono$core$ordered_list41751_$_iter__41756.call(null,cljs.core.chunk_rest.call(null,s__41757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41759),null);
}
} else {
var x = cljs.core.first.call(null,s__41757__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41751_$_iter__41756.call(null,cljs.core.rest.call(null,s__41757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36262__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list41751);
/**
 * Create an image element.
 */
sablono.core.image41761 = (function sablono$core$image41761(var_args){
var args41762 = [];
var len__36587__auto___41765 = arguments.length;
var i__36588__auto___41766 = (0);
while(true){
if((i__36588__auto___41766 < len__36587__auto___41765)){
args41762.push((arguments[i__36588__auto___41766]));

var G__41767 = (i__36588__auto___41766 + (1));
i__36588__auto___41766 = G__41767;
continue;
} else {
}
break;
}

var G__41764 = args41762.length;
switch (G__41764) {
case 1:
return sablono.core.image41761.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41761.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41762.length)].join('')));

}
});

sablono.core.image41761.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image41761.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image41761.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image41761);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__41769_SHARP_,p2__41770_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41769_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41770_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__41771_SHARP_,p2__41772_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41771_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41772_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35474__auto__ = value;
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field41773 = (function sablono$core$color_field41773(var_args){
var args41774 = [];
var len__36587__auto___41841 = arguments.length;
var i__36588__auto___41842 = (0);
while(true){
if((i__36588__auto___41842 < len__36587__auto___41841)){
args41774.push((arguments[i__36588__auto___41842]));

var G__41843 = (i__36588__auto___41842 + (1));
i__36588__auto___41842 = G__41843;
continue;
} else {
}
break;
}

var G__41776 = args41774.length;
switch (G__41776) {
case 1:
return sablono.core.color_field41773.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41773.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41774.length)].join('')));

}
});

sablono.core.color_field41773.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.color_field41773.call(null,name__41688__auto__,null);
});

sablono.core.color_field41773.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.color_field41773.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field41773);

/**
 * Creates a date input field.
 */
sablono.core.date_field41777 = (function sablono$core$date_field41777(var_args){
var args41778 = [];
var len__36587__auto___41845 = arguments.length;
var i__36588__auto___41846 = (0);
while(true){
if((i__36588__auto___41846 < len__36587__auto___41845)){
args41778.push((arguments[i__36588__auto___41846]));

var G__41847 = (i__36588__auto___41846 + (1));
i__36588__auto___41846 = G__41847;
continue;
} else {
}
break;
}

var G__41780 = args41778.length;
switch (G__41780) {
case 1:
return sablono.core.date_field41777.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41777.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41778.length)].join('')));

}
});

sablono.core.date_field41777.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.date_field41777.call(null,name__41688__auto__,null);
});

sablono.core.date_field41777.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.date_field41777.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field41777);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41781 = (function sablono$core$datetime_field41781(var_args){
var args41782 = [];
var len__36587__auto___41849 = arguments.length;
var i__36588__auto___41850 = (0);
while(true){
if((i__36588__auto___41850 < len__36587__auto___41849)){
args41782.push((arguments[i__36588__auto___41850]));

var G__41851 = (i__36588__auto___41850 + (1));
i__36588__auto___41850 = G__41851;
continue;
} else {
}
break;
}

var G__41784 = args41782.length;
switch (G__41784) {
case 1:
return sablono.core.datetime_field41781.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41781.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41782.length)].join('')));

}
});

sablono.core.datetime_field41781.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.datetime_field41781.call(null,name__41688__auto__,null);
});

sablono.core.datetime_field41781.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.datetime_field41781.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field41781);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41785 = (function sablono$core$datetime_local_field41785(var_args){
var args41786 = [];
var len__36587__auto___41853 = arguments.length;
var i__36588__auto___41854 = (0);
while(true){
if((i__36588__auto___41854 < len__36587__auto___41853)){
args41786.push((arguments[i__36588__auto___41854]));

var G__41855 = (i__36588__auto___41854 + (1));
i__36588__auto___41854 = G__41855;
continue;
} else {
}
break;
}

var G__41788 = args41786.length;
switch (G__41788) {
case 1:
return sablono.core.datetime_local_field41785.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41785.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41786.length)].join('')));

}
});

sablono.core.datetime_local_field41785.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.datetime_local_field41785.call(null,name__41688__auto__,null);
});

sablono.core.datetime_local_field41785.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.datetime_local_field41785.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field41785);

/**
 * Creates a email input field.
 */
sablono.core.email_field41789 = (function sablono$core$email_field41789(var_args){
var args41790 = [];
var len__36587__auto___41857 = arguments.length;
var i__36588__auto___41858 = (0);
while(true){
if((i__36588__auto___41858 < len__36587__auto___41857)){
args41790.push((arguments[i__36588__auto___41858]));

var G__41859 = (i__36588__auto___41858 + (1));
i__36588__auto___41858 = G__41859;
continue;
} else {
}
break;
}

var G__41792 = args41790.length;
switch (G__41792) {
case 1:
return sablono.core.email_field41789.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41789.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41790.length)].join('')));

}
});

sablono.core.email_field41789.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.email_field41789.call(null,name__41688__auto__,null);
});

sablono.core.email_field41789.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.email_field41789.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field41789);

/**
 * Creates a file input field.
 */
sablono.core.file_field41793 = (function sablono$core$file_field41793(var_args){
var args41794 = [];
var len__36587__auto___41861 = arguments.length;
var i__36588__auto___41862 = (0);
while(true){
if((i__36588__auto___41862 < len__36587__auto___41861)){
args41794.push((arguments[i__36588__auto___41862]));

var G__41863 = (i__36588__auto___41862 + (1));
i__36588__auto___41862 = G__41863;
continue;
} else {
}
break;
}

var G__41796 = args41794.length;
switch (G__41796) {
case 1:
return sablono.core.file_field41793.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41793.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41794.length)].join('')));

}
});

sablono.core.file_field41793.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.file_field41793.call(null,name__41688__auto__,null);
});

sablono.core.file_field41793.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.file_field41793.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field41793);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field41797 = (function sablono$core$hidden_field41797(var_args){
var args41798 = [];
var len__36587__auto___41865 = arguments.length;
var i__36588__auto___41866 = (0);
while(true){
if((i__36588__auto___41866 < len__36587__auto___41865)){
args41798.push((arguments[i__36588__auto___41866]));

var G__41867 = (i__36588__auto___41866 + (1));
i__36588__auto___41866 = G__41867;
continue;
} else {
}
break;
}

var G__41800 = args41798.length;
switch (G__41800) {
case 1:
return sablono.core.hidden_field41797.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field41797.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41798.length)].join('')));

}
});

sablono.core.hidden_field41797.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.hidden_field41797.call(null,name__41688__auto__,null);
});

sablono.core.hidden_field41797.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.hidden_field41797.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field41797);

/**
 * Creates a month input field.
 */
sablono.core.month_field41801 = (function sablono$core$month_field41801(var_args){
var args41802 = [];
var len__36587__auto___41869 = arguments.length;
var i__36588__auto___41870 = (0);
while(true){
if((i__36588__auto___41870 < len__36587__auto___41869)){
args41802.push((arguments[i__36588__auto___41870]));

var G__41871 = (i__36588__auto___41870 + (1));
i__36588__auto___41870 = G__41871;
continue;
} else {
}
break;
}

var G__41804 = args41802.length;
switch (G__41804) {
case 1:
return sablono.core.month_field41801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field41801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41802.length)].join('')));

}
});

sablono.core.month_field41801.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.month_field41801.call(null,name__41688__auto__,null);
});

sablono.core.month_field41801.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.month_field41801.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field41801);

/**
 * Creates a number input field.
 */
sablono.core.number_field41805 = (function sablono$core$number_field41805(var_args){
var args41806 = [];
var len__36587__auto___41873 = arguments.length;
var i__36588__auto___41874 = (0);
while(true){
if((i__36588__auto___41874 < len__36587__auto___41873)){
args41806.push((arguments[i__36588__auto___41874]));

var G__41875 = (i__36588__auto___41874 + (1));
i__36588__auto___41874 = G__41875;
continue;
} else {
}
break;
}

var G__41808 = args41806.length;
switch (G__41808) {
case 1:
return sablono.core.number_field41805.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field41805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41806.length)].join('')));

}
});

sablono.core.number_field41805.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.number_field41805.call(null,name__41688__auto__,null);
});

sablono.core.number_field41805.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.number_field41805.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field41805);

/**
 * Creates a password input field.
 */
sablono.core.password_field41809 = (function sablono$core$password_field41809(var_args){
var args41810 = [];
var len__36587__auto___41877 = arguments.length;
var i__36588__auto___41878 = (0);
while(true){
if((i__36588__auto___41878 < len__36587__auto___41877)){
args41810.push((arguments[i__36588__auto___41878]));

var G__41879 = (i__36588__auto___41878 + (1));
i__36588__auto___41878 = G__41879;
continue;
} else {
}
break;
}

var G__41812 = args41810.length;
switch (G__41812) {
case 1:
return sablono.core.password_field41809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field41809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41810.length)].join('')));

}
});

sablono.core.password_field41809.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.password_field41809.call(null,name__41688__auto__,null);
});

sablono.core.password_field41809.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.password_field41809.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field41809);

/**
 * Creates a range input field.
 */
sablono.core.range_field41813 = (function sablono$core$range_field41813(var_args){
var args41814 = [];
var len__36587__auto___41881 = arguments.length;
var i__36588__auto___41882 = (0);
while(true){
if((i__36588__auto___41882 < len__36587__auto___41881)){
args41814.push((arguments[i__36588__auto___41882]));

var G__41883 = (i__36588__auto___41882 + (1));
i__36588__auto___41882 = G__41883;
continue;
} else {
}
break;
}

var G__41816 = args41814.length;
switch (G__41816) {
case 1:
return sablono.core.range_field41813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field41813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41814.length)].join('')));

}
});

sablono.core.range_field41813.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.range_field41813.call(null,name__41688__auto__,null);
});

sablono.core.range_field41813.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.range_field41813.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field41813);

/**
 * Creates a search input field.
 */
sablono.core.search_field41817 = (function sablono$core$search_field41817(var_args){
var args41818 = [];
var len__36587__auto___41885 = arguments.length;
var i__36588__auto___41886 = (0);
while(true){
if((i__36588__auto___41886 < len__36587__auto___41885)){
args41818.push((arguments[i__36588__auto___41886]));

var G__41887 = (i__36588__auto___41886 + (1));
i__36588__auto___41886 = G__41887;
continue;
} else {
}
break;
}

var G__41820 = args41818.length;
switch (G__41820) {
case 1:
return sablono.core.search_field41817.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field41817.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41818.length)].join('')));

}
});

sablono.core.search_field41817.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.search_field41817.call(null,name__41688__auto__,null);
});

sablono.core.search_field41817.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.search_field41817.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field41817);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field41821 = (function sablono$core$tel_field41821(var_args){
var args41822 = [];
var len__36587__auto___41889 = arguments.length;
var i__36588__auto___41890 = (0);
while(true){
if((i__36588__auto___41890 < len__36587__auto___41889)){
args41822.push((arguments[i__36588__auto___41890]));

var G__41891 = (i__36588__auto___41890 + (1));
i__36588__auto___41890 = G__41891;
continue;
} else {
}
break;
}

var G__41824 = args41822.length;
switch (G__41824) {
case 1:
return sablono.core.tel_field41821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field41821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41822.length)].join('')));

}
});

sablono.core.tel_field41821.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.tel_field41821.call(null,name__41688__auto__,null);
});

sablono.core.tel_field41821.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.tel_field41821.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field41821);

/**
 * Creates a text input field.
 */
sablono.core.text_field41825 = (function sablono$core$text_field41825(var_args){
var args41826 = [];
var len__36587__auto___41893 = arguments.length;
var i__36588__auto___41894 = (0);
while(true){
if((i__36588__auto___41894 < len__36587__auto___41893)){
args41826.push((arguments[i__36588__auto___41894]));

var G__41895 = (i__36588__auto___41894 + (1));
i__36588__auto___41894 = G__41895;
continue;
} else {
}
break;
}

var G__41828 = args41826.length;
switch (G__41828) {
case 1:
return sablono.core.text_field41825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field41825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41826.length)].join('')));

}
});

sablono.core.text_field41825.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.text_field41825.call(null,name__41688__auto__,null);
});

sablono.core.text_field41825.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.text_field41825.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field41825);

/**
 * Creates a time input field.
 */
sablono.core.time_field41829 = (function sablono$core$time_field41829(var_args){
var args41830 = [];
var len__36587__auto___41897 = arguments.length;
var i__36588__auto___41898 = (0);
while(true){
if((i__36588__auto___41898 < len__36587__auto___41897)){
args41830.push((arguments[i__36588__auto___41898]));

var G__41899 = (i__36588__auto___41898 + (1));
i__36588__auto___41898 = G__41899;
continue;
} else {
}
break;
}

var G__41832 = args41830.length;
switch (G__41832) {
case 1:
return sablono.core.time_field41829.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field41829.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41830.length)].join('')));

}
});

sablono.core.time_field41829.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.time_field41829.call(null,name__41688__auto__,null);
});

sablono.core.time_field41829.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.time_field41829.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field41829);

/**
 * Creates a url input field.
 */
sablono.core.url_field41833 = (function sablono$core$url_field41833(var_args){
var args41834 = [];
var len__36587__auto___41901 = arguments.length;
var i__36588__auto___41902 = (0);
while(true){
if((i__36588__auto___41902 < len__36587__auto___41901)){
args41834.push((arguments[i__36588__auto___41902]));

var G__41903 = (i__36588__auto___41902 + (1));
i__36588__auto___41902 = G__41903;
continue;
} else {
}
break;
}

var G__41836 = args41834.length;
switch (G__41836) {
case 1:
return sablono.core.url_field41833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field41833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41834.length)].join('')));

}
});

sablono.core.url_field41833.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.url_field41833.call(null,name__41688__auto__,null);
});

sablono.core.url_field41833.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.url_field41833.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field41833);

/**
 * Creates a week input field.
 */
sablono.core.week_field41837 = (function sablono$core$week_field41837(var_args){
var args41838 = [];
var len__36587__auto___41905 = arguments.length;
var i__36588__auto___41906 = (0);
while(true){
if((i__36588__auto___41906 < len__36587__auto___41905)){
args41838.push((arguments[i__36588__auto___41906]));

var G__41907 = (i__36588__auto___41906 + (1));
i__36588__auto___41906 = G__41907;
continue;
} else {
}
break;
}

var G__41840 = args41838.length;
switch (G__41840) {
case 1:
return sablono.core.week_field41837.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field41837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41838.length)].join('')));

}
});

sablono.core.week_field41837.cljs$core$IFn$_invoke$arity$1 = (function (name__41688__auto__){
return sablono.core.week_field41837.call(null,name__41688__auto__,null);
});

sablono.core.week_field41837.cljs$core$IFn$_invoke$arity$2 = (function (name__41688__auto__,value__41689__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41688__auto__,value__41689__auto__);
});

sablono.core.week_field41837.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field41837);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box41909 = (function sablono$core$check_box41909(var_args){
var args41910 = [];
var len__36587__auto___41913 = arguments.length;
var i__36588__auto___41914 = (0);
while(true){
if((i__36588__auto___41914 < len__36587__auto___41913)){
args41910.push((arguments[i__36588__auto___41914]));

var G__41915 = (i__36588__auto___41914 + (1));
i__36588__auto___41914 = G__41915;
continue;
} else {
}
break;
}

var G__41912 = args41910.length;
switch (G__41912) {
case 1:
return sablono.core.check_box41909.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box41909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box41909.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41910.length)].join('')));

}
});

sablono.core.check_box41909.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box41909.call(null,name,null);
});

sablono.core.check_box41909.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box41909.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box41909.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35474__auto__ = value;
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box41909.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box41909);
/**
 * Creates a radio button.
 */
sablono.core.radio_button41917 = (function sablono$core$radio_button41917(var_args){
var args41918 = [];
var len__36587__auto___41921 = arguments.length;
var i__36588__auto___41922 = (0);
while(true){
if((i__36588__auto___41922 < len__36587__auto___41921)){
args41918.push((arguments[i__36588__auto___41922]));

var G__41923 = (i__36588__auto___41922 + (1));
i__36588__auto___41922 = G__41923;
continue;
} else {
}
break;
}

var G__41920 = args41918.length;
switch (G__41920) {
case 1:
return sablono.core.radio_button41917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button41917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button41917.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41918.length)].join('')));

}
});

sablono.core.radio_button41917.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button41917.call(null,group,null);
});

sablono.core.radio_button41917.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button41917.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button41917.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35474__auto__ = value;
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button41917.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button41917);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options41925 = (function sablono$core$select_options41925(coll){
var iter__36262__auto__ = (function sablono$core$select_options41925_$_iter__41942(s__41943){
return (new cljs.core.LazySeq(null,(function (){
var s__41943__$1 = s__41943;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41943__$1);
if(temp__4657__auto__){
var s__41943__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41943__$2)){
var c__36260__auto__ = cljs.core.chunk_first.call(null,s__41943__$2);
var size__36261__auto__ = cljs.core.count.call(null,c__36260__auto__);
var b__41945 = cljs.core.chunk_buffer.call(null,size__36261__auto__);
if((function (){var i__41944 = (0);
while(true){
if((i__41944 < size__36261__auto__)){
var x = cljs.core._nth.call(null,c__36260__auto__,i__41944);
cljs.core.chunk_append.call(null,b__41945,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41952 = x;
var text = cljs.core.nth.call(null,vec__41952,(0),null);
var val = cljs.core.nth.call(null,vec__41952,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41952,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41925.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__41958 = (i__41944 + (1));
i__41944 = G__41958;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41945),sablono$core$select_options41925_$_iter__41942.call(null,cljs.core.chunk_rest.call(null,s__41943__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41945),null);
}
} else {
var x = cljs.core.first.call(null,s__41943__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__41955 = x;
var text = cljs.core.nth.call(null,vec__41955,(0),null);
var val = cljs.core.nth.call(null,vec__41955,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__41955,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options41925.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options41925_$_iter__41942.call(null,cljs.core.rest.call(null,s__41943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36262__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options41925);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down41959 = (function sablono$core$drop_down41959(var_args){
var args41960 = [];
var len__36587__auto___41963 = arguments.length;
var i__36588__auto___41964 = (0);
while(true){
if((i__36588__auto___41964 < len__36587__auto___41963)){
args41960.push((arguments[i__36588__auto___41964]));

var G__41965 = (i__36588__auto___41964 + (1));
i__36588__auto___41964 = G__41965;
continue;
} else {
}
break;
}

var G__41962 = args41960.length;
switch (G__41962) {
case 2:
return sablono.core.drop_down41959.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down41959.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41960.length)].join('')));

}
});

sablono.core.drop_down41959.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down41959.call(null,name,options,null);
});

sablono.core.drop_down41959.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down41959.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down41959);
/**
 * Creates a text area element.
 */
sablono.core.text_area41967 = (function sablono$core$text_area41967(var_args){
var args41968 = [];
var len__36587__auto___41971 = arguments.length;
var i__36588__auto___41972 = (0);
while(true){
if((i__36588__auto___41972 < len__36587__auto___41971)){
args41968.push((arguments[i__36588__auto___41972]));

var G__41973 = (i__36588__auto___41972 + (1));
i__36588__auto___41972 = G__41973;
continue;
} else {
}
break;
}

var G__41970 = args41968.length;
switch (G__41970) {
case 1:
return sablono.core.text_area41967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area41967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41968.length)].join('')));

}
});

sablono.core.text_area41967.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area41967.call(null,name,null);
});

sablono.core.text_area41967.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35474__auto__ = value;
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area41967.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area41967);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label41975 = (function sablono$core$label41975(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label41975);
/**
 * Creates a submit button.
 */
sablono.core.submit_button41976 = (function sablono$core$submit_button41976(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button41976);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button41977 = (function sablono$core$reset_button41977(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button41977);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to41978 = (function sablono$core$form_to41978(var_args){
var args__36594__auto__ = [];
var len__36587__auto___41985 = arguments.length;
var i__36588__auto___41986 = (0);
while(true){
if((i__36588__auto___41986 < len__36587__auto___41985)){
args__36594__auto__.push((arguments[i__36588__auto___41986]));

var G__41987 = (i__36588__auto___41986 + (1));
i__36588__auto___41986 = G__41987;
continue;
} else {
}
break;
}

var argseq__36595__auto__ = ((((1) < args__36594__auto__.length))?(new cljs.core.IndexedSeq(args__36594__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to41978.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36595__auto__);
});

sablono.core.form_to41978.cljs$core$IFn$_invoke$arity$variadic = (function (p__41981,body){
var vec__41982 = p__41981;
var method = cljs.core.nth.call(null,vec__41982,(0),null);
var action = cljs.core.nth.call(null,vec__41982,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to41978.cljs$lang$maxFixedArity = (1);

sablono.core.form_to41978.cljs$lang$applyTo = (function (seq41979){
var G__41980 = cljs.core.first.call(null,seq41979);
var seq41979__$1 = cljs.core.next.call(null,seq41979);
return sablono.core.form_to41978.cljs$core$IFn$_invoke$arity$variadic(G__41980,seq41979__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to41978);
