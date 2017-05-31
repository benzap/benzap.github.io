// Compiled by ClojureScript 1.9.542 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args41727 = [];
var len__36322__auto___41747 = arguments.length;
var i__36323__auto___41748 = (0);
while(true){
if((i__36323__auto___41748 < len__36322__auto___41747)){
args41727.push((arguments[i__36323__auto___41748]));

var G__41749 = (i__36323__auto___41748 + (1));
i__36323__auto___41748 = G__41749;
continue;
} else {
}
break;
}

var G__41729 = args41727.length;
switch (G__41729) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41727.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__41730 = opts;
var map__41730__$1 = ((((!((map__41730 == null)))?((((map__41730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41730):map__41730);
var ref = cljs.core.get.call(null,map__41730__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__41730__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__41732 = cljs.core.count.call(null,refs);
switch (G__41732) {
case (1):
var vec__41733 = refs;
var a = cljs.core.nth.call(null,vec__41733,(0),null);
return ((function (vec__41733,a,G__41732,map__41730,map__41730__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__41733,a,G__41732,map__41730,map__41730__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__41736 = refs;
var a = cljs.core.nth.call(null,vec__41736,(0),null);
var b = cljs.core.nth.call(null,vec__41736,(1),null);
return ((function (vec__41736,a,b,G__41732,map__41730,map__41730__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__41736,a,b,G__41732,map__41730,map__41730__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__41739 = refs;
var a = cljs.core.nth.call(null,vec__41739,(0),null);
var b = cljs.core.nth.call(null,vec__41739,(1),null);
var c = cljs.core.nth.call(null,vec__41739,(2),null);
return ((function (vec__41739,a,b,c,G__41732,map__41730,map__41730__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__41739,a,b,c,G__41732,map__41730,map__41730__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__41732,map__41730,map__41730__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__41732,map__41730,map__41730__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__41742 = ref;
cljs.core.reset_BANG_.call(null,G__41742,recalc.call(null));

return G__41742;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__41730,map__41730__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__41730,map__41730__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__41730,map__41730__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__41730,map__41730__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__41743_41752 = cljs.core.seq.call(null,refs);
var chunk__41744_41753 = null;
var count__41745_41754 = (0);
var i__41746_41755 = (0);
while(true){
if((i__41746_41755 < count__41745_41754)){
var ref_41756__$1 = cljs.core._nth.call(null,chunk__41744_41753,i__41746_41755);
cljs.core.add_watch.call(null,ref_41756__$1,key,watch);

var G__41757 = seq__41743_41752;
var G__41758 = chunk__41744_41753;
var G__41759 = count__41745_41754;
var G__41760 = (i__41746_41755 + (1));
seq__41743_41752 = G__41757;
chunk__41744_41753 = G__41758;
count__41745_41754 = G__41759;
i__41746_41755 = G__41760;
continue;
} else {
var temp__4657__auto___41761 = cljs.core.seq.call(null,seq__41743_41752);
if(temp__4657__auto___41761){
var seq__41743_41762__$1 = temp__4657__auto___41761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41743_41762__$1)){
var c__36028__auto___41763 = cljs.core.chunk_first.call(null,seq__41743_41762__$1);
var G__41764 = cljs.core.chunk_rest.call(null,seq__41743_41762__$1);
var G__41765 = c__36028__auto___41763;
var G__41766 = cljs.core.count.call(null,c__36028__auto___41763);
var G__41767 = (0);
seq__41743_41752 = G__41764;
chunk__41744_41753 = G__41765;
count__41745_41754 = G__41766;
i__41746_41755 = G__41767;
continue;
} else {
var ref_41768__$1 = cljs.core.first.call(null,seq__41743_41762__$1);
cljs.core.add_watch.call(null,ref_41768__$1,key,watch);

var G__41769 = cljs.core.next.call(null,seq__41743_41762__$1);
var G__41770 = null;
var G__41771 = (0);
var G__41772 = (0);
seq__41743_41752 = G__41769;
chunk__41744_41753 = G__41770;
count__41745_41754 = G__41771;
i__41746_41755 = G__41772;
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

