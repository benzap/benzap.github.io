// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.utils.token');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Takes from a collection, up to the first `token`
 */
fif.utils.token.take_to_token = (function fif$utils$token$take_to_token(coll,token){
return cljs.core.apply.call(null,cljs.core.list,cljs.core.take_while.call(null,(function (p1__38212_SHARP_){
return cljs.core.not_EQ_.call(null,p1__38212_SHARP_,token);
}),coll));
});
/**
 * Removes the given `token` from the start and end of the collection
 */
fif.utils.token.strip_token = (function fif$utils$token$strip_token(coll,token){
var G__38213 = coll;
var G__38213__$1 = ((cljs.core._EQ_.call(null,cljs.core.peek.call(null,coll),token))?cljs.core.rest.call(null,G__38213):G__38213);
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,coll),token)){
var $ = G__38213__$1;
return cljs.core.take.call(null,(cljs.core.count.call(null,$) - (1)),$);
} else {
return G__38213__$1;
}
});
/**
 * Returns the rest of the provided collection, which is not containing
 *   the first set of tokens up to and not containing `token`
 */
fif.utils.token.rest_at_token = (function fif$utils$token$rest_at_token(coll,token){
var idx_token = (cljs.core.count.call(null,fif.utils.token.take_to_token.call(null,coll,token)) + (1));
return cljs.core.apply.call(null,cljs.core.list,cljs.core.drop.call(null,idx_token,coll));
});
/**
 * Returns a collection which is the first subset of the provided
 *   collection between the `start` token and `end` token.
 */
fif.utils.token.between_tokens = (function fif$utils$token$between_tokens(coll,start,end){
var $ = coll;
var $__$1 = fif.utils.token.take_to_token.call(null,$,end);
return fif.utils.token.rest_at_token.call(null,$__$1,start);
});
/**
 * Returns a vector pair, with the first element being the collection up
 *   to the provided `token`, and the second element being the rest of
 *   the collection after the provided `token`.
 */
fif.utils.token.split_at_token = (function fif$utils$token$split_at_token(coll,token){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.utils.token.take_to_token.call(null,coll,token),fif.utils.token.rest_at_token.call(null,coll,token)], null);
});
/**
 * Replace all instances of the old token `otoken` with a new token
 *   `ntoken`.
 */
fif.utils.token.replace_token = (function fif$utils$token$replace_token(coll,otoken,ntoken){
return cljs.core.apply.call(null,cljs.core.list,(function (){var iter__4523__auto__ = (function fif$utils$token$replace_token_$_iter__38214(s__38215){
return (new cljs.core.LazySeq(null,(function (){
var s__38215__$1 = s__38215;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38215__$1);
if(temp__5720__auto__){
var s__38215__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38215__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38215__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38217 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38216 = (0);
while(true){
if((i__38216 < size__4522__auto__)){
var tok = cljs.core._nth.call(null,c__4521__auto__,i__38216);
cljs.core.chunk_append.call(null,b__38217,((cljs.core._EQ_.call(null,otoken,tok))?ntoken:tok));

var G__38218 = (i__38216 + (1));
i__38216 = G__38218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38217),fif$utils$token$replace_token_$_iter__38214.call(null,cljs.core.chunk_rest.call(null,s__38215__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38217),null);
}
} else {
var tok = cljs.core.first.call(null,s__38215__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,otoken,tok))?ntoken:tok),fif$utils$token$replace_token_$_iter__38214.call(null,cljs.core.rest.call(null,s__38215__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})());
});
/**
 * 
 */
fif.utils.token.push_coll = (function fif$utils$token$push_coll(coll,tokens){
return cljs.core.reduce.call(null,(function (coll__$1,token){
return cljs.core.conj.call(null,coll__$1,token);
}),coll,cljs.core.reverse.call(null,tokens));
});
/**
 * Returns true if the given symbol `sym` starts with the string/symbol `s`
 */
fif.utils.token.symbol_starts_with_QMARK_ = (function fif$utils$token$symbol_starts_with_QMARK_(sym,s){
return clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
});
/**
 * Trim the subsymbol `s` from the start of `sym` once.
 */
fif.utils.token.symbol_ltrim_once = (function fif$utils$token$symbol_ltrim_once(sym,s){
if(fif.utils.token.symbol_starts_with_QMARK_.call(null,sym,s)){
return cljs.core.symbol.call(null,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),cljs.core.count.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))));
} else {
return cljs.core.symbol.call(null,sym);
}
});
