// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__36996 = arguments.length;
switch (G__36996) {
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
var map__36997 = opts;
var map__36997__$1 = ((((!((map__36997 == null)))?(((((map__36997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36997):map__36997);
var ref = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__36997__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__36999 = cljs.core.count.call(null,refs);
switch (G__36999) {
case (1):
var vec__37000 = refs;
var a = cljs.core.nth.call(null,vec__37000,(0),null);
return ((function (vec__37000,a,G__36999,map__36997,map__36997__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__37000,a,G__36999,map__36997,map__36997__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__37003 = refs;
var a = cljs.core.nth.call(null,vec__37003,(0),null);
var b = cljs.core.nth.call(null,vec__37003,(1),null);
return ((function (vec__37003,a,b,G__36999,map__36997,map__36997__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__37003,a,b,G__36999,map__36997,map__36997__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__37006 = refs;
var a = cljs.core.nth.call(null,vec__37006,(0),null);
var b = cljs.core.nth.call(null,vec__37006,(1),null);
var c = cljs.core.nth.call(null,vec__37006,(2),null);
return ((function (vec__37006,a,b,c,G__36999,map__36997,map__36997__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__37006,a,b,c,G__36999,map__36997,map__36997__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__36999,map__36997,map__36997__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__36999,map__36997,map__36997__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__37009 = ref;
cljs.core.reset_BANG_.call(null,G__37009,recalc.call(null));

return G__37009;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__36997,map__36997__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__36997,map__36997__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__36997,map__36997__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__36997,map__36997__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__37010_37016 = cljs.core.seq.call(null,refs);
var chunk__37011_37017 = null;
var count__37012_37018 = (0);
var i__37013_37019 = (0);
while(true){
if((i__37013_37019 < count__37012_37018)){
var ref_37020__$1 = cljs.core._nth.call(null,chunk__37011_37017,i__37013_37019);
cljs.core.add_watch.call(null,ref_37020__$1,key,watch);


var G__37021 = seq__37010_37016;
var G__37022 = chunk__37011_37017;
var G__37023 = count__37012_37018;
var G__37024 = (i__37013_37019 + (1));
seq__37010_37016 = G__37021;
chunk__37011_37017 = G__37022;
count__37012_37018 = G__37023;
i__37013_37019 = G__37024;
continue;
} else {
var temp__5457__auto___37025 = cljs.core.seq.call(null,seq__37010_37016);
if(temp__5457__auto___37025){
var seq__37010_37026__$1 = temp__5457__auto___37025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37010_37026__$1)){
var c__4319__auto___37027 = cljs.core.chunk_first.call(null,seq__37010_37026__$1);
var G__37028 = cljs.core.chunk_rest.call(null,seq__37010_37026__$1);
var G__37029 = c__4319__auto___37027;
var G__37030 = cljs.core.count.call(null,c__4319__auto___37027);
var G__37031 = (0);
seq__37010_37016 = G__37028;
chunk__37011_37017 = G__37029;
count__37012_37018 = G__37030;
i__37013_37019 = G__37031;
continue;
} else {
var ref_37032__$1 = cljs.core.first.call(null,seq__37010_37026__$1);
cljs.core.add_watch.call(null,ref_37032__$1,key,watch);


var G__37033 = cljs.core.next.call(null,seq__37010_37026__$1);
var G__37034 = null;
var G__37035 = (0);
var G__37036 = (0);
seq__37010_37016 = G__37033;
chunk__37011_37017 = G__37034;
count__37012_37018 = G__37035;
i__37013_37019 = G__37036;
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

