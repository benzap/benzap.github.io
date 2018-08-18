// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__37107 = arguments.length;
switch (G__37107) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__37108 = opts;
var map__37108__$1 = ((((!((map__37108 == null)))?(((((map__37108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37108):map__37108);
var ref = cljs.core.get.call(null,map__37108__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__37108__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__37110 = cljs.core.count.call(null,refs);
switch (G__37110) {
case (1):
var vec__37111 = refs;
var a = cljs.core.nth.call(null,vec__37111,(0),null);
return ((function (vec__37111,a,G__37110,map__37108,map__37108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__37111,a,G__37110,map__37108,map__37108__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__37114 = refs;
var a = cljs.core.nth.call(null,vec__37114,(0),null);
var b = cljs.core.nth.call(null,vec__37114,(1),null);
return ((function (vec__37114,a,b,G__37110,map__37108,map__37108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__37114,a,b,G__37110,map__37108,map__37108__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__37117 = refs;
var a = cljs.core.nth.call(null,vec__37117,(0),null);
var b = cljs.core.nth.call(null,vec__37117,(1),null);
var c = cljs.core.nth.call(null,vec__37117,(2),null);
return ((function (vec__37117,a,b,c,G__37110,map__37108,map__37108__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__37117,a,b,c,G__37110,map__37108,map__37108__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__37110,map__37108,map__37108__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__37110,map__37108,map__37108__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__37120 = ref;
cljs.core.reset_BANG_.call(null,G__37120,recalc.call(null));

return G__37120;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__37108,map__37108__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__37108,map__37108__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__37108,map__37108__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__37108,map__37108__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__37121_37127 = cljs.core.seq.call(null,refs);
var chunk__37122_37128 = null;
var count__37123_37129 = (0);
var i__37124_37130 = (0);
while(true){
if((i__37124_37130 < count__37123_37129)){
var ref_37131__$1 = cljs.core._nth.call(null,chunk__37122_37128,i__37124_37130);
cljs.core.add_watch.call(null,ref_37131__$1,key,watch);


var G__37132 = seq__37121_37127;
var G__37133 = chunk__37122_37128;
var G__37134 = count__37123_37129;
var G__37135 = (i__37124_37130 + (1));
seq__37121_37127 = G__37132;
chunk__37122_37128 = G__37133;
count__37123_37129 = G__37134;
i__37124_37130 = G__37135;
continue;
} else {
var temp__5457__auto___37136 = cljs.core.seq.call(null,seq__37121_37127);
if(temp__5457__auto___37136){
var seq__37121_37137__$1 = temp__5457__auto___37136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37121_37137__$1)){
var c__4351__auto___37138 = cljs.core.chunk_first.call(null,seq__37121_37137__$1);
var G__37139 = cljs.core.chunk_rest.call(null,seq__37121_37137__$1);
var G__37140 = c__4351__auto___37138;
var G__37141 = cljs.core.count.call(null,c__4351__auto___37138);
var G__37142 = (0);
seq__37121_37127 = G__37139;
chunk__37122_37128 = G__37140;
count__37123_37129 = G__37141;
i__37124_37130 = G__37142;
continue;
} else {
var ref_37143__$1 = cljs.core.first.call(null,seq__37121_37137__$1);
cljs.core.add_watch.call(null,ref_37143__$1,key,watch);


var G__37144 = cljs.core.next.call(null,seq__37121_37137__$1);
var G__37145 = null;
var G__37146 = (0);
var G__37147 = (0);
seq__37121_37127 = G__37144;
chunk__37122_37128 = G__37145;
count__37123_37129 = G__37146;
i__37124_37130 = G__37147;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

