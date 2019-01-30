// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.impl.repl');
goog.require('cljs.core');
goog.require('fif.stack_machine.evaluators');
goog.require('fif.protocols.repl');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {fif.protocols.repl.IRepl}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fif.impl.repl.Repl = (function (_STAR_sm,__meta,__extmap,__hash){
this._STAR_sm = _STAR_sm;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fif.impl.repl.Repl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

fif.impl.repl.Repl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k42332,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__42336 = k42332;
var G__42336__$1 = (((G__42336 instanceof cljs.core.Keyword))?G__42336.fqn:null);
switch (G__42336__$1) {
case "*sm":
return self__._STAR_sm;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k42332,else__4304__auto__);

}
});

fif.impl.repl.Repl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__42337){
var vec__42338 = p__42337;
var k__4324__auto__ = cljs.core.nth.call(null,vec__42338,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__42338,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

fif.impl.repl.Repl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#fif.impl.repl.Repl{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sm","*sm",-1345068121),self__._STAR_sm],null))], null),self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42331){
var self__ = this;
var G__42331__$1 = this;
return (new cljs.core.RecordIter((0),G__42331__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

fif.impl.repl.Repl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

fif.impl.repl.Repl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,self__.__extmap,self__.__hash));
});

fif.impl.repl.Repl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (1086872593 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

fif.impl.repl.Repl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42333,other42334){
var self__ = this;
var this42333__$1 = this;
return (((!((other42334 == null)))) && ((this42333__$1.constructor === other42334.constructor)) && (cljs.core._EQ_.call(null,this42333__$1._STAR_sm,other42334._STAR_sm)) && (cljs.core._EQ_.call(null,this42333__$1.__extmap,other42334.__extmap)));
});

fif.impl.repl.Repl.prototype.fif$protocols$repl$IRepl$ = cljs.core.PROTOCOL_SENTINEL;

fif.impl.repl.Repl.prototype.fif$protocols$repl$IRepl$repl_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.println.call(null,this$__$1,"Fif Repl");
});

fif.impl.repl.Repl.prototype.fif$protocols$repl$IRepl$repl_prompt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.print.call(null,this$__$1,"> ");
});

fif.impl.repl.Repl.prototype.fif$protocols$repl$IRepl$repl_read$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

fif.impl.repl.Repl.prototype.fif$protocols$repl$IRepl$repl_eval$arity$2 = (function (this$,sform){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"*sm","*sm",-1345068121).cljs$core$IFn$_invoke$arity$1(this$__$1),fif.stack_machine.evaluators.eval_string,sform);
});

fif.impl.repl.Repl.prototype.fif$protocols$repl$IRepl$repl_loop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
this$__$1.fif$protocols$repl$IRepl$repl_prompt$arity$1(null);

var sform = this$__$1.fif$protocols$repl$IRepl$repl_read$arity$1(null);
if((!(cljs.core._EQ_.call(null,sform,"bye")))){
this$__$1.fif$protocols$repl$IRepl$repl_eval$arity$2(null,sform);

continue;
} else {
return cljs.core.println.call(null,"For now, bye!!");
}
break;
}
});

fif.impl.repl.Repl.prototype.fif$protocols$repl$IRepl$repl_run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.fif$protocols$repl$IRepl$repl_init$arity$1(null);

return this$__$1.fif$protocols$repl$IRepl$repl_loop$arity$1(null);
});

fif.impl.repl.Repl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

fif.impl.repl.Repl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__42331){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__42341 = cljs.core.keyword_identical_QMARK_;
var expr__42342 = k__4309__auto__;
if(cljs.core.truth_(pred__42341.call(null,new cljs.core.Keyword(null,"*sm","*sm",-1345068121),expr__42342))){
return (new fif.impl.repl.Repl(G__42331,self__.__meta,self__.__extmap,null));
} else {
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__42331),null));
}
});

fif.impl.repl.Repl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sm","*sm",-1345068121),self__._STAR_sm,null))], null),self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__42331){
var self__ = this;
var this__4300__auto____$1 = this;
return (new fif.impl.repl.Repl(self__._STAR_sm,G__42331,self__.__extmap,self__.__hash));
});

fif.impl.repl.Repl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

fif.impl.repl.Repl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*sm","*sm",295463406,null)], null);
});

fif.impl.repl.Repl.cljs$lang$type = true;

fif.impl.repl.Repl.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"fif.impl.repl/Repl",null,(1),null));
});

fif.impl.repl.Repl.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"fif.impl.repl/Repl");
});

/**
 * Positional factory function for fif.impl.repl/Repl.
 */
fif.impl.repl.__GT_Repl = (function fif$impl$repl$__GT_Repl(_STAR_sm){
return (new fif.impl.repl.Repl(_STAR_sm,null,null,null));
});

/**
 * Factory function for fif.impl.repl/Repl, taking a map of keywords to field values.
 */
fif.impl.repl.map__GT_Repl = (function fif$impl$repl$map__GT_Repl(G__42335){
var extmap__4340__auto__ = (function (){var G__42344 = cljs.core.dissoc.call(null,G__42335,new cljs.core.Keyword(null,"*sm","*sm",-1345068121));
if(cljs.core.record_QMARK_.call(null,G__42335)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__42344);
} else {
return G__42344;
}
})();
return (new fif.impl.repl.Repl(new cljs.core.Keyword(null,"*sm","*sm",-1345068121).cljs$core$IFn$_invoke$arity$1(G__42335),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

fif.impl.repl.new_repl = (function fif$impl$repl$new_repl(sm){
return fif.impl.repl.map__GT_Repl.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121),cljs.core.atom.call(null,sm)], null));
});
