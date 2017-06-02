// Compiled by ClojureScript 1.9.542 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args42012 = [];
var len__36597__auto___42032 = arguments.length;
var i__36598__auto___42033 = (0);
while(true){
if((i__36598__auto___42033 < len__36597__auto___42032)){
args42012.push((arguments[i__36598__auto___42033]));

var G__42034 = (i__36598__auto___42033 + (1));
i__36598__auto___42033 = G__42034;
continue;
} else {
}
break;
}

var G__42014 = args42012.length;
switch (G__42014) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42012.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__42015 = opts;
var map__42015__$1 = ((((!((map__42015 == null)))?((((map__42015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42015):map__42015);
var ref = cljs.core.get.call(null,map__42015__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__42015__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__42017 = cljs.core.count.call(null,refs);
switch (G__42017) {
case (1):
var vec__42018 = refs;
var a = cljs.core.nth.call(null,vec__42018,(0),null);
return ((function (vec__42018,a,G__42017,map__42015,map__42015__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__42018,a,G__42017,map__42015,map__42015__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__42021 = refs;
var a = cljs.core.nth.call(null,vec__42021,(0),null);
var b = cljs.core.nth.call(null,vec__42021,(1),null);
return ((function (vec__42021,a,b,G__42017,map__42015,map__42015__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__42021,a,b,G__42017,map__42015,map__42015__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__42024 = refs;
var a = cljs.core.nth.call(null,vec__42024,(0),null);
var b = cljs.core.nth.call(null,vec__42024,(1),null);
var c = cljs.core.nth.call(null,vec__42024,(2),null);
return ((function (vec__42024,a,b,c,G__42017,map__42015,map__42015__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__42024,a,b,c,G__42017,map__42015,map__42015__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__42017,map__42015,map__42015__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__42017,map__42015,map__42015__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__42027 = ref;
cljs.core.reset_BANG_.call(null,G__42027,recalc.call(null));

return G__42027;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__42015,map__42015__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__42015,map__42015__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__42015,map__42015__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__42015,map__42015__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__42028_42037 = cljs.core.seq.call(null,refs);
var chunk__42029_42038 = null;
var count__42030_42039 = (0);
var i__42031_42040 = (0);
while(true){
if((i__42031_42040 < count__42030_42039)){
var ref_42041__$1 = cljs.core._nth.call(null,chunk__42029_42038,i__42031_42040);
cljs.core.add_watch.call(null,ref_42041__$1,key,watch);

var G__42042 = seq__42028_42037;
var G__42043 = chunk__42029_42038;
var G__42044 = count__42030_42039;
var G__42045 = (i__42031_42040 + (1));
seq__42028_42037 = G__42042;
chunk__42029_42038 = G__42043;
count__42030_42039 = G__42044;
i__42031_42040 = G__42045;
continue;
} else {
var temp__4657__auto___42046 = cljs.core.seq.call(null,seq__42028_42037);
if(temp__4657__auto___42046){
var seq__42028_42047__$1 = temp__4657__auto___42046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42028_42047__$1)){
var c__36303__auto___42048 = cljs.core.chunk_first.call(null,seq__42028_42047__$1);
var G__42049 = cljs.core.chunk_rest.call(null,seq__42028_42047__$1);
var G__42050 = c__36303__auto___42048;
var G__42051 = cljs.core.count.call(null,c__36303__auto___42048);
var G__42052 = (0);
seq__42028_42037 = G__42049;
chunk__42029_42038 = G__42050;
count__42030_42039 = G__42051;
i__42031_42040 = G__42052;
continue;
} else {
var ref_42053__$1 = cljs.core.first.call(null,seq__42028_42047__$1);
cljs.core.add_watch.call(null,ref_42053__$1,key,watch);

var G__42054 = cljs.core.next.call(null,seq__42028_42047__$1);
var G__42055 = null;
var G__42056 = (0);
var G__42057 = (0);
seq__42028_42037 = G__42054;
chunk__42029_42038 = G__42055;
count__42030_42039 = G__42056;
i__42031_42040 = G__42057;
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

