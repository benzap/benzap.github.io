// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.stdlib.collection_ops');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.words');
goog.require('fif.def');
/**
 * Turns the two arguments into a vector of the two arguments.
 */
fif.stdlib.collection_ops.pair = (function fif$stdlib$collection_ops$pair(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Takes the top value, which is a vector of two-elements, and places
 *   the two elements on the main stack.
 */
fif.stdlib.collection_ops.op_unpair = (function fif$stdlib$collection_ops$op_unpair(sm){
var vec__38531 = fif.stack_machine.get_stack.call(null,sm);
var x = cljs.core.nth.call(null,vec__38531,(0),null);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.push_stack.call(null,fif.stack_machine.pop_stack.call(null,sm),cljs.core.first.call(null,x)),cljs.core.second.call(null,x)));
});
/**
 * Takes the top value, which is a collection of values, and places them
 *   at the front of the code queue. Places any non-collection values on
 *   the code queue.
 */
fif.stdlib.collection_ops.apply_op = (function fif$stdlib$collection_ops$apply_op(sm){
var vec__38536 = fif.stack_machine.get_stack.call(null,sm);
var coll = cljs.core.nth.call(null,vec__38536,(0),null);
var coll__$1 = ((cljs.core.coll_QMARK_.call(null,coll))?coll:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll], null));
return fif.stack_machine.update_code.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.dequeue_code.call(null,sm)),((function (vec__38536,coll,coll__$1){
return (function (p1__38535_SHARP_,p2__38534_SHARP_){
return cljs.core.concat.call(null,p2__38534_SHARP_,p1__38535_SHARP_);
});})(vec__38536,coll,coll__$1))
,coll__$1);
});
/**
 * Imports the collection operators as part of the standard library.
 */
fif.stdlib.collection_ops.import_stdlib_collection_ops = (function fif$stdlib$collection_ops$import_stdlib_collection_ops(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,new cljs.core.Symbol(null,"apply","apply",-1334050276,null),fif.stdlib.collection_ops.apply_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll - any.. ) Places the elements of the top value collection onto the stack.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),fif.def.wrap_function_with_arity.call(null,(3),cljs.core.assoc),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll key val -- coll ) Associates the `key` - `val` pair into the collection `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),fif.def.wrap_function_with_arity.call(null,(3),cljs.core.assoc_in),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll kv val -- coll ) Associates at key vector `kv` with value `val` into the `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"butlast","butlast",1573039585,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.butlast),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a seq of all but the last item.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"concat","concat",-467652465,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.concat),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll coll -- coll ) Returns a lazy sequence of the concatentation of the top two collections on the stack.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.conj),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll x -- coll ) Conjoin. Returns a new collection with the addition of `x` to `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"cons","cons",755448454,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.cons),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll x -- coll ) Returns a new seq where `x` is the new first element of `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.contains_QMARK_),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll key -- b ) Returns true if `key` is present in the given collection `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"dedupe","dedupe",-461856254,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.dedupe),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a lazy-seq removing consecutive duplicates in `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.dissoc),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll key -- coll ) Returns a new map which has dissociated with `key`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.distinct),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a lazy-seq of the elements with duplicates removed.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"drop-last","drop-last",-1123611530,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.drop_last),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a lazy-seq of all but the last item.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"drop-last-n","drop-last-n",-631996332,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.drop_last),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll n -- coll ) Returns a lazy-seq of all but the last `n` items.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"empty","empty",-1886564811,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.empty),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns an empty collection of the provided collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.empty_QMARK_),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- b ) Returns true if the collection is empty.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"find","find",2136810983,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.find),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( map key -- kv ) Returns the map entry for `key` in `map`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"first","first",996428481,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.first),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- x ) Returns the first element in the collection, otherwise nil.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"flatten","flatten",-1441633353,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.flatten),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns the collection with any inner collections flattened.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"fnext","fnext",1424835295,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.fnext),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Same as `coll next first`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"get","get",-971253014,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.get),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( map key -- val ) Returns the value `val` mapped to `key` within `map`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.get_in),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( map kv -- val ) Returns the value `val` in a nested map of keys `kv` in `map`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"idrop","idrop",-1616125089,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.drop),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n coll -- coll ) Returns a lazy-seq of all but the first `n` items of `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"interleave","interleave",165488106,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.interleave),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( c1 c2 -- coll ) Returns a lazy-seq of the first item in each coll.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"interleave3","interleave3",-2137483534,null),fif.def.wrap_function_with_arity.call(null,(3),cljs.core.interleave),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( c1 c2 c3 -- coll ) 3-arity of interleave",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"interleave4","interleave4",2119732682,null),fif.def.wrap_function_with_arity.call(null,(4),cljs.core.interleave),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( c1 c2 c3 c4 -- coll ) 4-arity of interleave",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"interpose","interpose",-2078295140,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.interpose),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( sep coll -- coll ) Returns a lazy-seq of `coll` with each element separated by `sep`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"into","into",1489695498,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.into),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( to from -- coll) Returns a new `coll` consisting of `to` collection with all the items of `from` collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.keys),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( map -- coll ) Returns a sequence of map keys in `map`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"last","last",-1548700637,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.last),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- val ) Returns the last element in `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"merge","merge",-163787882,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.merge),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( m1 m2 -- m ) Returns a map containing the keyvals of 'm1' and 'm2' (m2>m1).",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"next","next",1522830042,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.next),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a seq of items after the first",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"nnext","nnext",-2065435598,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.nnext),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Same as `next next`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.not_empty),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns the collection if it not empty. otherwise nil.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"nth","nth",1529209554,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.nth),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll n -- val ) Returns the element at index `n` of `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"nthrest","nthrest",1219890118,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.nthrest),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll n -- coll ) Returns the rest of the collection after index `n`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"pair","pair",1193015215,null),fif.def.wrap_function_with_arity.call(null,(2),fif.stdlib.collection_ops.pair),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( k v -- kv ) Creates a vector pair from `k` and `v`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"partition","partition",-1479695018,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.partition),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n coll -- coll ) Returns a lazy-seq of lists of `n` items each",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"partition-all","partition-all",-1985005385,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.partition_all),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n coll ) Same as `partition`, but will maintain fewer items in the last collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"partition-all3","partition-all3",-1767967542,null),fif.def.wrap_function_with_arity.call(null,(3),cljs.core.partition_all),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n step coll ) Same as 3-arity `paritition`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"partition3","partition3",796767460,null),fif.def.wrap_function_with_arity.call(null,(3),cljs.core.partition),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n step coll -- coll ) Returns lazy-seq of lists of `n` at offsets `step`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"partition4","partition4",1163862144,null),fif.def.wrap_function_with_arity.call(null,(4),cljs.core.partition),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n step pad coll -- coll ) Returns a lazy-seq of lists of `n` at offsets `step` padded with `pad`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"peek","peek",1349135202,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.peek),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- val ) Peeks into the collection to retrieve a value.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"pop","pop",-94247249,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.pop),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a new collection with a value removed.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"rand-nth","rand-nth",-1227719931,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.rand_nth),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- val ) Return a random element of `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.random","stdlib.random",1568595792)),new cljs.core.Symbol(null,"random-sample","random-sample",-914181101,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.random_sample),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( prob coll -- coll ) Returns items from coll with random probability `prob` (0.0 - 1.0).",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.random","stdlib.random",1568595792)),new cljs.core.Symbol(null,"range","range",-1014743483,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.range),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( start end -- coll ) Returns a lazy-seq of nums from [start end).",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"replace","replace",853943757,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.replace),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( smap coll -- coll ) Returns a new collection with smap replacements.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"rest","rest",398835108,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.rest),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a new seq without the first element.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"reverse","reverse",752076261,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.reverse),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a new collection with all elements reversed.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"second","second",1195829517,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.second),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- val ) Returns the second element in a collection, or nil otherwise.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.select_keys),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( map keyseq -- map ) Returns a map containing only keys in `keyseq`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"seq","seq",-177272256,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.seq),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- seq ) Returns a sequence on the collection.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"set","set",1945134081,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.set),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- set ) Returns a set of the distinct elements of coll.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"shuffle","shuffle",-1393023609,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.shuffle),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Return a random permutation of `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.random","stdlib.random",1568595792)),new cljs.core.Symbol(null,"sort","sort",-1700969851,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.sort),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll -- coll ) Returns a sorted sequence of `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.split_at),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n coll -- coll ) Returns a vector of `[(n coll take) apply (n coll idrop) apply] ?`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"take","take",871646627,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.take),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n coll -- coll ) Returns a lazy seq of the first `n` items in `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"take-last","take-last",-41013151,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.take_last),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n coll -- coll ) Returns a lazy-seq of the last `n` items in `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"take-nth","take-nth",1378204353,null),fif.def.wrap_function_with_arity.call(null,(2),cljs.core.take_nth),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n coll -- coll ) Returns a lazy-seq of every `n`th item in `coll`.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"unpair","unpair",1152628433,null),fif.stdlib.collection_ops.op_unpair,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( kv -- k v ) Places the two values in a vector pair onto the stack.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"vals","vals",-1886377036,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.vals),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( map -- vals ) Returns all of the values in the `map` as a sequence of values.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768)),new cljs.core.Symbol(null,"vec","vec",982683596,null),fif.def.wrap_function_with_arity.call(null,(1),cljs.core.vec),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( coll - vec ) Returns the collection in the form of a vector.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.collection","stdlib.collection",-1645870768));
});
