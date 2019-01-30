// Compiled by ClojureScript 1.10.439 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__36780 = arguments.length;
switch (G__36780) {
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
var map__36781 = opts;
var map__36781__$1 = (((((!((map__36781 == null))))?(((((map__36781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36781):map__36781);
var ref = cljs.core.get.call(null,map__36781__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__36781__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__36783 = cljs.core.count.call(null,refs);
switch (G__36783) {
case (1):
var vec__36784 = refs;
var a = cljs.core.nth.call(null,vec__36784,(0),null);
return ((function (vec__36784,a,G__36783,map__36781,map__36781__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__36784,a,G__36783,map__36781,map__36781__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__36787 = refs;
var a = cljs.core.nth.call(null,vec__36787,(0),null);
var b = cljs.core.nth.call(null,vec__36787,(1),null);
return ((function (vec__36787,a,b,G__36783,map__36781,map__36781__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__36787,a,b,G__36783,map__36781,map__36781__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__36790 = refs;
var a = cljs.core.nth.call(null,vec__36790,(0),null);
var b = cljs.core.nth.call(null,vec__36790,(1),null);
var c = cljs.core.nth.call(null,vec__36790,(2),null);
return ((function (vec__36790,a,b,c,G__36783,map__36781,map__36781__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__36790,a,b,c,G__36783,map__36781,map__36781__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__36783,map__36781,map__36781__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__36783,map__36781,map__36781__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__36793 = ref;
cljs.core.reset_BANG_.call(null,G__36793,recalc.call(null));

return G__36793;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__36781,map__36781__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__36781,map__36781__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__36781,map__36781__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__36781,map__36781__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__36794_36800 = cljs.core.seq.call(null,refs);
var chunk__36795_36801 = null;
var count__36796_36802 = (0);
var i__36797_36803 = (0);
while(true){
if((i__36797_36803 < count__36796_36802)){
var ref_36804__$1 = cljs.core._nth.call(null,chunk__36795_36801,i__36797_36803);
cljs.core.add_watch.call(null,ref_36804__$1,key,watch);


var G__36805 = seq__36794_36800;
var G__36806 = chunk__36795_36801;
var G__36807 = count__36796_36802;
var G__36808 = (i__36797_36803 + (1));
seq__36794_36800 = G__36805;
chunk__36795_36801 = G__36806;
count__36796_36802 = G__36807;
i__36797_36803 = G__36808;
continue;
} else {
var temp__5720__auto___36809 = cljs.core.seq.call(null,seq__36794_36800);
if(temp__5720__auto___36809){
var seq__36794_36810__$1 = temp__5720__auto___36809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36794_36810__$1)){
var c__4461__auto___36811 = cljs.core.chunk_first.call(null,seq__36794_36810__$1);
var G__36812 = cljs.core.chunk_rest.call(null,seq__36794_36810__$1);
var G__36813 = c__4461__auto___36811;
var G__36814 = cljs.core.count.call(null,c__4461__auto___36811);
var G__36815 = (0);
seq__36794_36800 = G__36812;
chunk__36795_36801 = G__36813;
count__36796_36802 = G__36814;
i__36797_36803 = G__36815;
continue;
} else {
var ref_36816__$1 = cljs.core.first.call(null,seq__36794_36810__$1);
cljs.core.add_watch.call(null,ref_36816__$1,key,watch);


var G__36817 = cljs.core.next.call(null,seq__36794_36810__$1);
var G__36818 = null;
var G__36819 = (0);
var G__36820 = (0);
seq__36794_36800 = G__36817;
chunk__36795_36801 = G__36818;
count__36796_36802 = G__36819;
i__36797_36803 = G__36820;
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

