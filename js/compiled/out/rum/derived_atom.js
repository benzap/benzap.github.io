// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__35839 = arguments.length;
switch (G__35839) {
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
var map__35840 = opts;
var map__35840__$1 = ((((!((map__35840 == null)))?(((((map__35840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35840):map__35840);
var ref = cljs.core.get.call(null,map__35840__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__35840__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__35842 = cljs.core.count.call(null,refs);
switch (G__35842) {
case (1):
var vec__35843 = refs;
var a = cljs.core.nth.call(null,vec__35843,(0),null);
return ((function (vec__35843,a,G__35842,map__35840,map__35840__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__35843,a,G__35842,map__35840,map__35840__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__35846 = refs;
var a = cljs.core.nth.call(null,vec__35846,(0),null);
var b = cljs.core.nth.call(null,vec__35846,(1),null);
return ((function (vec__35846,a,b,G__35842,map__35840,map__35840__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__35846,a,b,G__35842,map__35840,map__35840__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__35849 = refs;
var a = cljs.core.nth.call(null,vec__35849,(0),null);
var b = cljs.core.nth.call(null,vec__35849,(1),null);
var c = cljs.core.nth.call(null,vec__35849,(2),null);
return ((function (vec__35849,a,b,c,G__35842,map__35840,map__35840__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__35849,a,b,c,G__35842,map__35840,map__35840__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__35842,map__35840,map__35840__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__35842,map__35840,map__35840__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__35852 = ref;
cljs.core.reset_BANG_.call(null,G__35852,recalc.call(null));

return G__35852;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__35840,map__35840__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__35840,map__35840__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__35840,map__35840__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__35840,map__35840__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__35853_35859 = cljs.core.seq.call(null,refs);
var chunk__35854_35860 = null;
var count__35855_35861 = (0);
var i__35856_35862 = (0);
while(true){
if((i__35856_35862 < count__35855_35861)){
var ref_35863__$1 = cljs.core._nth.call(null,chunk__35854_35860,i__35856_35862);
cljs.core.add_watch.call(null,ref_35863__$1,key,watch);


var G__35864 = seq__35853_35859;
var G__35865 = chunk__35854_35860;
var G__35866 = count__35855_35861;
var G__35867 = (i__35856_35862 + (1));
seq__35853_35859 = G__35864;
chunk__35854_35860 = G__35865;
count__35855_35861 = G__35866;
i__35856_35862 = G__35867;
continue;
} else {
var temp__5457__auto___35868 = cljs.core.seq.call(null,seq__35853_35859);
if(temp__5457__auto___35868){
var seq__35853_35869__$1 = temp__5457__auto___35868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35853_35869__$1)){
var c__4319__auto___35870 = cljs.core.chunk_first.call(null,seq__35853_35869__$1);
var G__35871 = cljs.core.chunk_rest.call(null,seq__35853_35869__$1);
var G__35872 = c__4319__auto___35870;
var G__35873 = cljs.core.count.call(null,c__4319__auto___35870);
var G__35874 = (0);
seq__35853_35859 = G__35871;
chunk__35854_35860 = G__35872;
count__35855_35861 = G__35873;
i__35856_35862 = G__35874;
continue;
} else {
var ref_35875__$1 = cljs.core.first.call(null,seq__35853_35869__$1);
cljs.core.add_watch.call(null,ref_35875__$1,key,watch);


var G__35876 = cljs.core.next.call(null,seq__35853_35869__$1);
var G__35877 = null;
var G__35878 = (0);
var G__35879 = (0);
seq__35853_35859 = G__35876;
chunk__35854_35860 = G__35877;
count__35855_35861 = G__35878;
i__35856_35862 = G__35879;
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

