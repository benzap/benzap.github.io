// Compiled by ClojureScript 1.10.217 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__35345 = arguments.length;
switch (G__35345) {
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
var map__35346 = opts;
var map__35346__$1 = ((((!((map__35346 == null)))?(((((map__35346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35346):map__35346);
var ref = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__35348 = cljs.core.count.call(null,refs);
switch (G__35348) {
case (1):
var vec__35349 = refs;
var a = cljs.core.nth.call(null,vec__35349,(0),null);
return ((function (vec__35349,a,G__35348,map__35346,map__35346__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__35349,a,G__35348,map__35346,map__35346__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__35352 = refs;
var a = cljs.core.nth.call(null,vec__35352,(0),null);
var b = cljs.core.nth.call(null,vec__35352,(1),null);
return ((function (vec__35352,a,b,G__35348,map__35346,map__35346__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__35352,a,b,G__35348,map__35346,map__35346__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__35355 = refs;
var a = cljs.core.nth.call(null,vec__35355,(0),null);
var b = cljs.core.nth.call(null,vec__35355,(1),null);
var c = cljs.core.nth.call(null,vec__35355,(2),null);
return ((function (vec__35355,a,b,c,G__35348,map__35346,map__35346__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__35355,a,b,c,G__35348,map__35346,map__35346__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__35348,map__35346,map__35346__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__35348,map__35346,map__35346__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__35358 = ref;
cljs.core.reset_BANG_.call(null,G__35358,recalc.call(null));

return G__35358;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__35346,map__35346__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__35346,map__35346__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__35346,map__35346__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__35346,map__35346__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__35359_35365 = cljs.core.seq.call(null,refs);
var chunk__35360_35366 = null;
var count__35361_35367 = (0);
var i__35362_35368 = (0);
while(true){
if((i__35362_35368 < count__35361_35367)){
var ref_35369__$1 = cljs.core._nth.call(null,chunk__35360_35366,i__35362_35368);
cljs.core.add_watch.call(null,ref_35369__$1,key,watch);


var G__35370 = seq__35359_35365;
var G__35371 = chunk__35360_35366;
var G__35372 = count__35361_35367;
var G__35373 = (i__35362_35368 + (1));
seq__35359_35365 = G__35370;
chunk__35360_35366 = G__35371;
count__35361_35367 = G__35372;
i__35362_35368 = G__35373;
continue;
} else {
var temp__5457__auto___35374 = cljs.core.seq.call(null,seq__35359_35365);
if(temp__5457__auto___35374){
var seq__35359_35375__$1 = temp__5457__auto___35374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35359_35375__$1)){
var c__4318__auto___35376 = cljs.core.chunk_first.call(null,seq__35359_35375__$1);
var G__35377 = cljs.core.chunk_rest.call(null,seq__35359_35375__$1);
var G__35378 = c__4318__auto___35376;
var G__35379 = cljs.core.count.call(null,c__4318__auto___35376);
var G__35380 = (0);
seq__35359_35365 = G__35377;
chunk__35360_35366 = G__35378;
count__35361_35367 = G__35379;
i__35362_35368 = G__35380;
continue;
} else {
var ref_35381__$1 = cljs.core.first.call(null,seq__35359_35375__$1);
cljs.core.add_watch.call(null,ref_35381__$1,key,watch);


var G__35382 = cljs.core.next.call(null,seq__35359_35375__$1);
var G__35383 = null;
var G__35384 = (0);
var G__35385 = (0);
seq__35359_35365 = G__35382;
chunk__35360_35366 = G__35383;
count__35361_35367 = G__35384;
i__35362_35368 = G__35385;
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

