// Compiled by ClojureScript 1.10.217 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__35339 = arguments.length;
switch (G__35339) {
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
var map__35340 = opts;
var map__35340__$1 = ((((!((map__35340 == null)))?(((((map__35340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35340):map__35340);
var ref = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__35342 = cljs.core.count.call(null,refs);
switch (G__35342) {
case (1):
var vec__35343 = refs;
var a = cljs.core.nth.call(null,vec__35343,(0),null);
return ((function (vec__35343,a,G__35342,map__35340,map__35340__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__35343,a,G__35342,map__35340,map__35340__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__35346 = refs;
var a = cljs.core.nth.call(null,vec__35346,(0),null);
var b = cljs.core.nth.call(null,vec__35346,(1),null);
return ((function (vec__35346,a,b,G__35342,map__35340,map__35340__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__35346,a,b,G__35342,map__35340,map__35340__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__35349 = refs;
var a = cljs.core.nth.call(null,vec__35349,(0),null);
var b = cljs.core.nth.call(null,vec__35349,(1),null);
var c = cljs.core.nth.call(null,vec__35349,(2),null);
return ((function (vec__35349,a,b,c,G__35342,map__35340,map__35340__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__35349,a,b,c,G__35342,map__35340,map__35340__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__35342,map__35340,map__35340__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__35342,map__35340,map__35340__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__35352 = ref;
cljs.core.reset_BANG_.call(null,G__35352,recalc.call(null));

return G__35352;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__35340,map__35340__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__35340,map__35340__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__35340,map__35340__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__35340,map__35340__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__35353_35359 = cljs.core.seq.call(null,refs);
var chunk__35354_35360 = null;
var count__35355_35361 = (0);
var i__35356_35362 = (0);
while(true){
if((i__35356_35362 < count__35355_35361)){
var ref_35363__$1 = cljs.core._nth.call(null,chunk__35354_35360,i__35356_35362);
cljs.core.add_watch.call(null,ref_35363__$1,key,watch);


var G__35364 = seq__35353_35359;
var G__35365 = chunk__35354_35360;
var G__35366 = count__35355_35361;
var G__35367 = (i__35356_35362 + (1));
seq__35353_35359 = G__35364;
chunk__35354_35360 = G__35365;
count__35355_35361 = G__35366;
i__35356_35362 = G__35367;
continue;
} else {
var temp__5457__auto___35368 = cljs.core.seq.call(null,seq__35353_35359);
if(temp__5457__auto___35368){
var seq__35353_35369__$1 = temp__5457__auto___35368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35353_35369__$1)){
var c__4318__auto___35370 = cljs.core.chunk_first.call(null,seq__35353_35369__$1);
var G__35371 = cljs.core.chunk_rest.call(null,seq__35353_35369__$1);
var G__35372 = c__4318__auto___35370;
var G__35373 = cljs.core.count.call(null,c__4318__auto___35370);
var G__35374 = (0);
seq__35353_35359 = G__35371;
chunk__35354_35360 = G__35372;
count__35355_35361 = G__35373;
i__35356_35362 = G__35374;
continue;
} else {
var ref_35375__$1 = cljs.core.first.call(null,seq__35353_35369__$1);
cljs.core.add_watch.call(null,ref_35375__$1,key,watch);


var G__35376 = cljs.core.next.call(null,seq__35353_35369__$1);
var G__35377 = null;
var G__35378 = (0);
var G__35379 = (0);
seq__35353_35359 = G__35376;
chunk__35354_35360 = G__35377;
count__35355_35361 = G__35378;
i__35356_35362 = G__35379;
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

