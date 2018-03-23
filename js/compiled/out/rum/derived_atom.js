// Compiled by ClojureScript 1.10.217 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
<<<<<<< HEAD
var G__35316 = arguments.length;
switch (G__35316) {
=======
var args42200 = [];
var len__36785__auto___42220 = arguments.length;
var i__36786__auto___42221 = (0);
while(true){
if((i__36786__auto___42221 < len__36785__auto___42220)){
args42200.push((arguments[i__36786__auto___42221]));

var G__42222 = (i__36786__auto___42221 + (1));
i__36786__auto___42221 = G__42222;
continue;
} else {
}
break;
}

var G__42202 = args42200.length;
switch (G__42202) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
<<<<<<< HEAD
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));
=======
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42200.length)].join('')));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
<<<<<<< HEAD
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
=======
var map__42203 = opts;
var map__42203__$1 = ((((!((map__42203 == null)))?((((map__42203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42203):map__42203);
var ref = cljs.core.get.call(null,map__42203__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__42203__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__42205 = cljs.core.count.call(null,refs);
switch (G__42205) {
case (1):
var vec__42206 = refs;
var a = cljs.core.nth.call(null,vec__42206,(0),null);
return ((function (vec__42206,a,G__42205,map__42203,map__42203__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__42206,a,G__42205,map__42203,map__42203__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__42209 = refs;
var a = cljs.core.nth.call(null,vec__42209,(0),null);
var b = cljs.core.nth.call(null,vec__42209,(1),null);
return ((function (vec__42209,a,b,G__42205,map__42203,map__42203__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__42209,a,b,G__42205,map__42203,map__42203__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__42212 = refs;
var a = cljs.core.nth.call(null,vec__42212,(0),null);
var b = cljs.core.nth.call(null,vec__42212,(1),null);
var c = cljs.core.nth.call(null,vec__42212,(2),null);
return ((function (vec__42212,a,b,c,G__42205,map__42203,map__42203__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__42212,a,b,c,G__42205,map__42203,map__42203__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__42205,map__42203,map__42203__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__42205,map__42203,map__42203__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__42215 = ref;
cljs.core.reset_BANG_.call(null,G__42215,recalc.call(null));

return G__42215;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__42203,map__42203__$1,ref,check_equals_QMARK_,recalc,sink){
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
<<<<<<< HEAD
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
=======
});})(map__42203,map__42203__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__42203,map__42203__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__42203,map__42203__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__42216_42225 = cljs.core.seq.call(null,refs);
var chunk__42217_42226 = null;
var count__42218_42227 = (0);
var i__42219_42228 = (0);
while(true){
if((i__42219_42228 < count__42218_42227)){
var ref_42229__$1 = cljs.core._nth.call(null,chunk__42217_42226,i__42219_42228);
cljs.core.add_watch.call(null,ref_42229__$1,key,watch);

var G__42230 = seq__42216_42225;
var G__42231 = chunk__42217_42226;
var G__42232 = count__42218_42227;
var G__42233 = (i__42219_42228 + (1));
seq__42216_42225 = G__42230;
chunk__42217_42226 = G__42231;
count__42218_42227 = G__42232;
i__42219_42228 = G__42233;
continue;
} else {
var temp__4657__auto___42234 = cljs.core.seq.call(null,seq__42216_42225);
if(temp__4657__auto___42234){
var seq__42216_42235__$1 = temp__4657__auto___42234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42216_42235__$1)){
var c__36491__auto___42236 = cljs.core.chunk_first.call(null,seq__42216_42235__$1);
var G__42237 = cljs.core.chunk_rest.call(null,seq__42216_42235__$1);
var G__42238 = c__36491__auto___42236;
var G__42239 = cljs.core.count.call(null,c__36491__auto___42236);
var G__42240 = (0);
seq__42216_42225 = G__42237;
chunk__42217_42226 = G__42238;
count__42218_42227 = G__42239;
i__42219_42228 = G__42240;
continue;
} else {
var ref_42241__$1 = cljs.core.first.call(null,seq__42216_42235__$1);
cljs.core.add_watch.call(null,ref_42241__$1,key,watch);

var G__42242 = cljs.core.next.call(null,seq__42216_42235__$1);
var G__42243 = null;
var G__42244 = (0);
var G__42245 = (0);
seq__42216_42225 = G__42242;
chunk__42217_42226 = G__42243;
count__42218_42227 = G__42244;
i__42219_42228 = G__42245;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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

