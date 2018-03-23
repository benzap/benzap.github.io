// Compiled by ClojureScript 1.10.217 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__35316 = arguments.length;
switch (G__35316) {
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
var map__35317 = opts;
var map__35317__$1 = ((((!((map__35317 == null)))?(((((map__35317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35317):map__35317);
var ref = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__35319 = cljs.core.count.call(null,refs);
switch (G__35319) {
case (1):
var vec__35320 = refs;
var a = cljs.core.nth.call(null,vec__35320,(0),null);
return ((function (vec__35320,a,G__35319,map__35317,map__35317__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__35320,a,G__35319,map__35317,map__35317__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__35323 = refs;
var a = cljs.core.nth.call(null,vec__35323,(0),null);
var b = cljs.core.nth.call(null,vec__35323,(1),null);
return ((function (vec__35323,a,b,G__35319,map__35317,map__35317__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__35323,a,b,G__35319,map__35317,map__35317__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__35326 = refs;
var a = cljs.core.nth.call(null,vec__35326,(0),null);
var b = cljs.core.nth.call(null,vec__35326,(1),null);
var c = cljs.core.nth.call(null,vec__35326,(2),null);
return ((function (vec__35326,a,b,c,G__35319,map__35317,map__35317__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__35326,a,b,c,G__35319,map__35317,map__35317__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__35319,map__35317,map__35317__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__35319,map__35317,map__35317__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__35329 = ref;
cljs.core.reset_BANG_.call(null,G__35329,recalc.call(null));

return G__35329;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__35317,map__35317__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__35317,map__35317__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__35317,map__35317__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__35317,map__35317__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__35330_35336 = cljs.core.seq.call(null,refs);
var chunk__35331_35337 = null;
var count__35332_35338 = (0);
var i__35333_35339 = (0);
while(true){
if((i__35333_35339 < count__35332_35338)){
var ref_35340__$1 = cljs.core._nth.call(null,chunk__35331_35337,i__35333_35339);
cljs.core.add_watch.call(null,ref_35340__$1,key,watch);


var G__35341 = seq__35330_35336;
var G__35342 = chunk__35331_35337;
var G__35343 = count__35332_35338;
var G__35344 = (i__35333_35339 + (1));
seq__35330_35336 = G__35341;
chunk__35331_35337 = G__35342;
count__35332_35338 = G__35343;
i__35333_35339 = G__35344;
continue;
} else {
var temp__5457__auto___35345 = cljs.core.seq.call(null,seq__35330_35336);
if(temp__5457__auto___35345){
var seq__35330_35346__$1 = temp__5457__auto___35345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35330_35346__$1)){
var c__4318__auto___35347 = cljs.core.chunk_first.call(null,seq__35330_35346__$1);
var G__35348 = cljs.core.chunk_rest.call(null,seq__35330_35346__$1);
var G__35349 = c__4318__auto___35347;
var G__35350 = cljs.core.count.call(null,c__4318__auto___35347);
var G__35351 = (0);
seq__35330_35336 = G__35348;
chunk__35331_35337 = G__35349;
count__35332_35338 = G__35350;
i__35333_35339 = G__35351;
continue;
} else {
var ref_35352__$1 = cljs.core.first.call(null,seq__35330_35346__$1);
cljs.core.add_watch.call(null,ref_35352__$1,key,watch);


var G__35353 = cljs.core.next.call(null,seq__35330_35346__$1);
var G__35354 = null;
var G__35355 = (0);
var G__35356 = (0);
seq__35330_35336 = G__35353;
chunk__35331_35337 = G__35354;
count__35332_35338 = G__35355;
i__35333_35339 = G__35356;
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

