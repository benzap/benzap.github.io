// Compiled by ClojureScript 1.10.217 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
<<<<<<< HEAD
return (function (p1__35164_SHARP_){
return (max === p1__35164_SHARP_);
=======
return (function (p1__41215_SHARP_){
return (max === p1__41215_SHARP_);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
<<<<<<< HEAD
var G__35169 = arguments.length;
switch (G__35169) {
=======
var args41216 = [];
var len__36785__auto___41222 = arguments.length;
var i__36786__auto___41223 = (0);
while(true){
if((i__36786__auto___41223 < len__36785__auto___41222)){
args41216.push((arguments[i__36786__auto___41223]));

var G__41224 = (i__36786__auto___41223 + (1));
i__36786__auto___41223 = G__41224;
continue;
} else {
}
break;
}

var G__41221 = args41216.length;
switch (G__41221) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__4513__auto__ = [];
var len__4498__auto___35171 = arguments.length;
var i__4499__auto___35172 = (0);
while(true){
if((i__4499__auto___35172 < len__4498__auto___35171)){
args_arr__4513__auto__.push((arguments[i__4499__auto___35172]));

var G__35173 = (i__4499__auto___35172 + (1));
i__4499__auto___35172 = G__35173;
continue;
} else {
}
break;
}

var argseq__4514__auto__ = (new cljs.core.IndexedSeq(args_arr__4513__auto__.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4514__auto__);
=======
var argseq__36804__auto__ = (new cljs.core.IndexedSeq(args41216.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36804__auto__);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

<<<<<<< HEAD
/** @this {Function} */
clojure.set.union.cljs$lang$applyTo = (function (seq35166){
var G__35167 = cljs.core.first.call(null,seq35166);
var seq35166__$1 = cljs.core.next.call(null,seq35166);
var G__35168 = cljs.core.first.call(null,seq35166__$1);
var seq35166__$2 = cljs.core.next.call(null,seq35166__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35167,G__35168,seq35166__$2);
=======
clojure.set.union.cljs$lang$applyTo = (function (seq41217){
var G__41218 = cljs.core.first.call(null,seq41217);
var seq41217__$1 = cljs.core.next.call(null,seq41217);
var G__41219 = cljs.core.first.call(null,seq41217__$1);
var seq41217__$2 = cljs.core.next.call(null,seq41217__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__41218,G__41219,seq41217__$2);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});

clojure.set.union.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
<<<<<<< HEAD
var G__35179 = arguments.length;
switch (G__35179) {
=======
var args41227 = [];
var len__36785__auto___41233 = arguments.length;
var i__36786__auto___41234 = (0);
while(true){
if((i__36786__auto___41234 < len__36785__auto___41233)){
args41227.push((arguments[i__36786__auto___41234]));

var G__41235 = (i__36786__auto___41234 + (1));
i__36786__auto___41234 = G__41235;
continue;
} else {
}
break;
}

var G__41232 = args41227.length;
switch (G__41232) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__4513__auto__ = [];
var len__4498__auto___35181 = arguments.length;
var i__4499__auto___35182 = (0);
while(true){
if((i__4499__auto___35182 < len__4498__auto___35181)){
args_arr__4513__auto__.push((arguments[i__4499__auto___35182]));

var G__35183 = (i__4499__auto___35182 + (1));
i__4499__auto___35182 = G__35183;
continue;
} else {
}
break;
}

var argseq__4514__auto__ = (new cljs.core.IndexedSeq(args_arr__4513__auto__.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4514__auto__);
=======
var argseq__36804__auto__ = (new cljs.core.IndexedSeq(args41227.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36804__auto__);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
<<<<<<< HEAD
var G__35184 = s2;
var G__35185 = s1;
s1 = G__35184;
s2 = G__35185;
=======
var G__41237 = s2;
var G__41238 = s1;
s1 = G__41237;
s2 = G__41238;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
<<<<<<< HEAD
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__35174_SHARP_){
return (- cljs.core.count.call(null,p1__35174_SHARP_));
=======
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__41226_SHARP_){
return (- cljs.core.count.call(null,p1__41226_SHARP_));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

<<<<<<< HEAD
/** @this {Function} */
clojure.set.intersection.cljs$lang$applyTo = (function (seq35176){
var G__35177 = cljs.core.first.call(null,seq35176);
var seq35176__$1 = cljs.core.next.call(null,seq35176);
var G__35178 = cljs.core.first.call(null,seq35176__$1);
var seq35176__$2 = cljs.core.next.call(null,seq35176__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35177,G__35178,seq35176__$2);
=======
clojure.set.intersection.cljs$lang$applyTo = (function (seq41228){
var G__41229 = cljs.core.first.call(null,seq41228);
var seq41228__$1 = cljs.core.next.call(null,seq41228);
var G__41230 = cljs.core.first.call(null,seq41228__$1);
var seq41228__$2 = cljs.core.next.call(null,seq41228__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__41229,G__41230,seq41228__$2);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
<<<<<<< HEAD
var G__35190 = arguments.length;
switch (G__35190) {
=======
var args41239 = [];
var len__36785__auto___41245 = arguments.length;
var i__36786__auto___41246 = (0);
while(true){
if((i__36786__auto___41246 < len__36785__auto___41245)){
args41239.push((arguments[i__36786__auto___41246]));

var G__41247 = (i__36786__auto___41246 + (1));
i__36786__auto___41246 = G__41247;
continue;
} else {
}
break;
}

var G__41244 = args41239.length;
switch (G__41244) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
var args_arr__4513__auto__ = [];
var len__4498__auto___35192 = arguments.length;
var i__4499__auto___35193 = (0);
while(true){
if((i__4499__auto___35193 < len__4498__auto___35192)){
args_arr__4513__auto__.push((arguments[i__4499__auto___35193]));

var G__35194 = (i__4499__auto___35193 + (1));
i__4499__auto___35193 = G__35194;
continue;
} else {
}
break;
}

var argseq__4514__auto__ = (new cljs.core.IndexedSeq(args_arr__4513__auto__.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4514__auto__);
=======
var argseq__36804__auto__ = (new cljs.core.IndexedSeq(args41239.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36804__auto__);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

<<<<<<< HEAD
/** @this {Function} */
clojure.set.difference.cljs$lang$applyTo = (function (seq35187){
var G__35188 = cljs.core.first.call(null,seq35187);
var seq35187__$1 = cljs.core.next.call(null,seq35187);
var G__35189 = cljs.core.first.call(null,seq35187__$1);
var seq35187__$2 = cljs.core.next.call(null,seq35187__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35188,G__35189,seq35187__$2);
=======
clojure.set.difference.cljs$lang$applyTo = (function (seq41240){
var G__41241 = cljs.core.first.call(null,seq41240);
var seq41240__$1 = cljs.core.next.call(null,seq41240);
var G__41242 = cljs.core.first.call(null,seq41240__$1);
var seq41240__$2 = cljs.core.next.call(null,seq41240__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__41241,G__41242,seq41240__$2);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);

/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
<<<<<<< HEAD
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__35195_SHARP_){
return cljs.core.select_keys.call(null,p1__35195_SHARP_,ks);
=======
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__41249_SHARP_){
return cljs.core.select_keys.call(null,p1__41249_SHARP_,ks);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (m,p__35196){
var vec__35197 = p__35196;
var old = cljs.core.nth.call(null,vec__35197,(0),null);
var new$ = cljs.core.nth.call(null,vec__35197,(1),null);
=======
return cljs.core.reduce.call(null,(function (m,p__41254){
var vec__41255 = p__41254;
var old = cljs.core.nth.call(null,vec__41255,(0),null);
var new$ = cljs.core.nth.call(null,vec__41255,(1),null);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
<<<<<<< HEAD
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__35200_SHARP_){
return clojure.set.rename_keys.call(null,p1__35200_SHARP_,kmap);
=======
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__41258_SHARP_){
return clojure.set.rename_keys.call(null,p1__41258_SHARP_,kmap);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
<<<<<<< HEAD
return cljs.core.reduce.call(null,(function (m__$1,p__35201){
var vec__35202 = p__35201;
var k = cljs.core.nth.call(null,vec__35202,(0),null);
var v = cljs.core.nth.call(null,vec__35202,(1),null);
=======
return cljs.core.reduce.call(null,(function (m__$1,p__41263){
var vec__41264 = p__41263;
var k = cljs.core.nth.call(null,vec__41264,(0),null);
var v = cljs.core.nth.call(null,vec__41264,(1),null);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
<<<<<<< HEAD
var G__35210 = arguments.length;
switch (G__35210) {
=======
var args41271 = [];
var len__36785__auto___41280 = arguments.length;
var i__36786__auto___41281 = (0);
while(true){
if((i__36786__auto___41281 < len__36785__auto___41280)){
args41271.push((arguments[i__36786__auto___41281]));

var G__41282 = (i__36786__auto___41281 + (1));
i__36786__auto___41281 = G__41282;
continue;
} else {
}
break;
}

var G__41273 = args41271.length;
switch (G__41273) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
<<<<<<< HEAD
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));
=======
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41271.length)].join('')));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if(((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel)))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
<<<<<<< HEAD
var vec__35211 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__35211,(0),null);
var s = cljs.core.nth.call(null,vec__35211,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__35211,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__35211,r,s,idx){
return (function (p1__35205_SHARP_,p2__35206_SHARP_){
return cljs.core.conj.call(null,p1__35205_SHARP_,cljs.core.merge.call(null,p2__35206_SHARP_,x));
});})(found,ks,vec__35211,r,s,idx))
=======
var vec__41274 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__41274,(0),null);
var s = cljs.core.nth.call(null,vec__41274,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__41274,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__41274,r,s,idx){
return (function (p1__41267_SHARP_,p2__41268_SHARP_){
return cljs.core.conj.call(null,p1__41267_SHARP_,cljs.core.merge.call(null,p2__41268_SHARP_,x));
});})(found,ks,vec__41274,r,s,idx))
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
,ret,found);
} else {
return ret;
}
<<<<<<< HEAD
});})(ks,vec__35211,r,s,idx))
=======
});})(ks,vec__41274,r,s,idx))
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
<<<<<<< HEAD
var vec__35214 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__35214,(0),null);
var s = cljs.core.nth.call(null,vec__35214,(1),null);
var k = cljs.core.nth.call(null,vec__35214,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__35214,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__35214,r,s,k,idx){
return (function (p1__35207_SHARP_,p2__35208_SHARP_){
return cljs.core.conj.call(null,p1__35207_SHARP_,cljs.core.merge.call(null,p2__35208_SHARP_,x));
});})(found,vec__35214,r,s,k,idx))
=======
var vec__41277 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__41277,(0),null);
var s = cljs.core.nth.call(null,vec__41277,(1),null);
var k = cljs.core.nth.call(null,vec__41277,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__41277,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__41277,r,s,k,idx){
return (function (p1__41269_SHARP_,p2__41270_SHARP_){
return cljs.core.conj.call(null,p1__41269_SHARP_,cljs.core.merge.call(null,p2__41270_SHARP_,x));
});})(found,vec__41277,r,s,k,idx))
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
,ret,found);
} else {
return ret;
}
<<<<<<< HEAD
});})(vec__35214,r,s,k,idx))
=======
});})(vec__41277,r,s,k,idx))
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;

/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
<<<<<<< HEAD
return (((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__35218_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__35218_SHARP_);
}),set1)));
=======
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__41284_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__41284_SHARP_);
}),set1));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
<<<<<<< HEAD
return (((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__35219_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__35219_SHARP_);
}),set2)));
=======
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__41285_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__41285_SHARP_);
}),set2));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});
