// Compiled by ClojureScript 1.9.542 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args41992 = [];
var len__36587__auto___42012 = arguments.length;
var i__36588__auto___42013 = (0);
while(true){
if((i__36588__auto___42013 < len__36587__auto___42012)){
args41992.push((arguments[i__36588__auto___42013]));

var G__42014 = (i__36588__auto___42013 + (1));
i__36588__auto___42013 = G__42014;
continue;
} else {
}
break;
}

var G__41994 = args41992.length;
switch (G__41994) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41992.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__41995 = opts;
var map__41995__$1 = ((((!((map__41995 == null)))?((((map__41995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41995):map__41995);
var ref = cljs.core.get.call(null,map__41995__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__41995__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__41997 = cljs.core.count.call(null,refs);
switch (G__41997) {
case (1):
var vec__41998 = refs;
var a = cljs.core.nth.call(null,vec__41998,(0),null);
return ((function (vec__41998,a,G__41997,map__41995,map__41995__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__41998,a,G__41997,map__41995,map__41995__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__42001 = refs;
var a = cljs.core.nth.call(null,vec__42001,(0),null);
var b = cljs.core.nth.call(null,vec__42001,(1),null);
return ((function (vec__42001,a,b,G__41997,map__41995,map__41995__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__42001,a,b,G__41997,map__41995,map__41995__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__42004 = refs;
var a = cljs.core.nth.call(null,vec__42004,(0),null);
var b = cljs.core.nth.call(null,vec__42004,(1),null);
var c = cljs.core.nth.call(null,vec__42004,(2),null);
return ((function (vec__42004,a,b,c,G__41997,map__41995,map__41995__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__42004,a,b,c,G__41997,map__41995,map__41995__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__41997,map__41995,map__41995__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__41997,map__41995,map__41995__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__42007 = ref;
cljs.core.reset_BANG_.call(null,G__42007,recalc.call(null));

return G__42007;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__41995,map__41995__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__41995,map__41995__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__41995,map__41995__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__41995,map__41995__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__42008_42017 = cljs.core.seq.call(null,refs);
var chunk__42009_42018 = null;
var count__42010_42019 = (0);
var i__42011_42020 = (0);
while(true){
if((i__42011_42020 < count__42010_42019)){
var ref_42021__$1 = cljs.core._nth.call(null,chunk__42009_42018,i__42011_42020);
cljs.core.add_watch.call(null,ref_42021__$1,key,watch);

var G__42022 = seq__42008_42017;
var G__42023 = chunk__42009_42018;
var G__42024 = count__42010_42019;
var G__42025 = (i__42011_42020 + (1));
seq__42008_42017 = G__42022;
chunk__42009_42018 = G__42023;
count__42010_42019 = G__42024;
i__42011_42020 = G__42025;
continue;
} else {
var temp__4657__auto___42026 = cljs.core.seq.call(null,seq__42008_42017);
if(temp__4657__auto___42026){
var seq__42008_42027__$1 = temp__4657__auto___42026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42008_42027__$1)){
var c__36293__auto___42028 = cljs.core.chunk_first.call(null,seq__42008_42027__$1);
var G__42029 = cljs.core.chunk_rest.call(null,seq__42008_42027__$1);
var G__42030 = c__36293__auto___42028;
var G__42031 = cljs.core.count.call(null,c__36293__auto___42028);
var G__42032 = (0);
seq__42008_42017 = G__42029;
chunk__42009_42018 = G__42030;
count__42010_42019 = G__42031;
i__42011_42020 = G__42032;
continue;
} else {
var ref_42033__$1 = cljs.core.first.call(null,seq__42008_42027__$1);
cljs.core.add_watch.call(null,ref_42033__$1,key,watch);

var G__42034 = cljs.core.next.call(null,seq__42008_42027__$1);
var G__42035 = null;
var G__42036 = (0);
var G__42037 = (0);
seq__42008_42017 = G__42034;
chunk__42009_42018 = G__42035;
count__42010_42019 = G__42036;
i__42011_42020 = G__42037;
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

