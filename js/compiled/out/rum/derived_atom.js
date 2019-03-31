// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__35292 = arguments.length;
switch (G__35292) {
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
var map__35293 = opts;
var map__35293__$1 = (((((!((map__35293 == null))))?(((((map__35293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35293):map__35293);
var ref = cljs.core.get.call(null,map__35293__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__35293__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__35295 = cljs.core.count.call(null,refs);
switch (G__35295) {
case (1):
var vec__35296 = refs;
var a = cljs.core.nth.call(null,vec__35296,(0),null);
return ((function (vec__35296,a,G__35295,map__35293,map__35293__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__35296,a,G__35295,map__35293,map__35293__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__35299 = refs;
var a = cljs.core.nth.call(null,vec__35299,(0),null);
var b = cljs.core.nth.call(null,vec__35299,(1),null);
return ((function (vec__35299,a,b,G__35295,map__35293,map__35293__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__35299,a,b,G__35295,map__35293,map__35293__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__35302 = refs;
var a = cljs.core.nth.call(null,vec__35302,(0),null);
var b = cljs.core.nth.call(null,vec__35302,(1),null);
var c = cljs.core.nth.call(null,vec__35302,(2),null);
return ((function (vec__35302,a,b,c,G__35295,map__35293,map__35293__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__35302,a,b,c,G__35295,map__35293,map__35293__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__35295,map__35293,map__35293__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__35295,map__35293,map__35293__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__35305 = ref;
cljs.core.reset_BANG_.call(null,G__35305,recalc.call(null));

return G__35305;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__35293,map__35293__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__35293,map__35293__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__35293,map__35293__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__35293,map__35293__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__35306_35312 = cljs.core.seq.call(null,refs);
var chunk__35307_35313 = null;
var count__35308_35314 = (0);
var i__35309_35315 = (0);
while(true){
if((i__35309_35315 < count__35308_35314)){
var ref_35316__$1 = cljs.core._nth.call(null,chunk__35307_35313,i__35309_35315);
cljs.core.add_watch.call(null,ref_35316__$1,key,watch);


var G__35317 = seq__35306_35312;
var G__35318 = chunk__35307_35313;
var G__35319 = count__35308_35314;
var G__35320 = (i__35309_35315 + (1));
seq__35306_35312 = G__35317;
chunk__35307_35313 = G__35318;
count__35308_35314 = G__35319;
i__35309_35315 = G__35320;
continue;
} else {
var temp__5720__auto___35321 = cljs.core.seq.call(null,seq__35306_35312);
if(temp__5720__auto___35321){
var seq__35306_35322__$1 = temp__5720__auto___35321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35306_35322__$1)){
var c__4550__auto___35323 = cljs.core.chunk_first.call(null,seq__35306_35322__$1);
var G__35324 = cljs.core.chunk_rest.call(null,seq__35306_35322__$1);
var G__35325 = c__4550__auto___35323;
var G__35326 = cljs.core.count.call(null,c__4550__auto___35323);
var G__35327 = (0);
seq__35306_35312 = G__35324;
chunk__35307_35313 = G__35325;
count__35308_35314 = G__35326;
i__35309_35315 = G__35327;
continue;
} else {
var ref_35328__$1 = cljs.core.first.call(null,seq__35306_35322__$1);
cljs.core.add_watch.call(null,ref_35328__$1,key,watch);


var G__35329 = cljs.core.next.call(null,seq__35306_35322__$1);
var G__35330 = null;
var G__35331 = (0);
var G__35332 = (0);
seq__35306_35312 = G__35329;
chunk__35307_35313 = G__35330;
count__35308_35314 = G__35331;
i__35309_35315 = G__35332;
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

