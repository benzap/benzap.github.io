// Compiled by ClojureScript 1.9.542 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__41027_SHARP_){
return (max === p1__41027_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args41028 = [];
var len__36597__auto___41034 = arguments.length;
var i__36598__auto___41035 = (0);
while(true){
if((i__36598__auto___41035 < len__36597__auto___41034)){
args41028.push((arguments[i__36598__auto___41035]));

var G__41036 = (i__36598__auto___41035 + (1));
i__36598__auto___41035 = G__41036;
continue;
} else {
}
break;
}

var G__41033 = args41028.length;
switch (G__41033) {
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
var argseq__36616__auto__ = (new cljs.core.IndexedSeq(args41028.slice((2)),(0),null));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36616__auto__);

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

clojure.set.union.cljs$lang$applyTo = (function (seq41029){
var G__41030 = cljs.core.first.call(null,seq41029);
var seq41029__$1 = cljs.core.next.call(null,seq41029);
var G__41031 = cljs.core.first.call(null,seq41029__$1);
var seq41029__$2 = cljs.core.next.call(null,seq41029__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__41030,G__41031,seq41029__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args41039 = [];
var len__36597__auto___41045 = arguments.length;
var i__36598__auto___41046 = (0);
while(true){
if((i__36598__auto___41046 < len__36597__auto___41045)){
args41039.push((arguments[i__36598__auto___41046]));

var G__41047 = (i__36598__auto___41046 + (1));
i__36598__auto___41046 = G__41047;
continue;
} else {
}
break;
}

var G__41044 = args41039.length;
switch (G__41044) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36616__auto__ = (new cljs.core.IndexedSeq(args41039.slice((2)),(0),null));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36616__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__41049 = s2;
var G__41050 = s1;
s1 = G__41049;
s2 = G__41050;
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
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__41038_SHARP_){
return (- cljs.core.count.call(null,p1__41038_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq41040){
var G__41041 = cljs.core.first.call(null,seq41040);
var seq41040__$1 = cljs.core.next.call(null,seq41040);
var G__41042 = cljs.core.first.call(null,seq41040__$1);
var seq41040__$2 = cljs.core.next.call(null,seq41040__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__41041,G__41042,seq41040__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);

/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args41051 = [];
var len__36597__auto___41057 = arguments.length;
var i__36598__auto___41058 = (0);
while(true){
if((i__36598__auto___41058 < len__36597__auto___41057)){
args41051.push((arguments[i__36598__auto___41058]));

var G__41059 = (i__36598__auto___41058 + (1));
i__36598__auto___41058 = G__41059;
continue;
} else {
}
break;
}

var G__41056 = args41051.length;
switch (G__41056) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__36616__auto__ = (new cljs.core.IndexedSeq(args41051.slice((2)),(0),null));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36616__auto__);

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

clojure.set.difference.cljs$lang$applyTo = (function (seq41052){
var G__41053 = cljs.core.first.call(null,seq41052);
var seq41052__$1 = cljs.core.next.call(null,seq41052);
var G__41054 = cljs.core.first.call(null,seq41052__$1);
var seq41052__$2 = cljs.core.next.call(null,seq41052__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__41053,G__41054,seq41052__$2);
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
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__41061_SHARP_){
return cljs.core.select_keys.call(null,p1__41061_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__41066){
var vec__41067 = p__41066;
var old = cljs.core.nth.call(null,vec__41067,(0),null);
var new$ = cljs.core.nth.call(null,vec__41067,(1),null);
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
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__41070_SHARP_){
return clojure.set.rename_keys.call(null,p1__41070_SHARP_,kmap);
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
return cljs.core.reduce.call(null,(function (m__$1,p__41075){
var vec__41076 = p__41075;
var k = cljs.core.nth.call(null,vec__41076,(0),null);
var v = cljs.core.nth.call(null,vec__41076,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args41083 = [];
var len__36597__auto___41092 = arguments.length;
var i__36598__auto___41093 = (0);
while(true){
if((i__36598__auto___41093 < len__36597__auto___41092)){
args41083.push((arguments[i__36598__auto___41093]));

var G__41094 = (i__36598__auto___41093 + (1));
i__36598__auto___41093 = G__41094;
continue;
} else {
}
break;
}

var G__41085 = args41083.length;
switch (G__41085) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41083.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__41086 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__41086,(0),null);
var s = cljs.core.nth.call(null,vec__41086,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__41086,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__41086,r,s,idx){
return (function (p1__41079_SHARP_,p2__41080_SHARP_){
return cljs.core.conj.call(null,p1__41079_SHARP_,cljs.core.merge.call(null,p2__41080_SHARP_,x));
});})(found,ks,vec__41086,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__41086,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__41089 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__41089,(0),null);
var s = cljs.core.nth.call(null,vec__41089,(1),null);
var k = cljs.core.nth.call(null,vec__41089,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__41089,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__41089,r,s,k,idx){
return (function (p1__41081_SHARP_,p2__41082_SHARP_){
return cljs.core.conj.call(null,p1__41081_SHARP_,cljs.core.merge.call(null,p2__41082_SHARP_,x));
});})(found,vec__41089,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__41089,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;

/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__41096_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__41096_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__41097_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__41097_SHARP_);
}),set2));
});
