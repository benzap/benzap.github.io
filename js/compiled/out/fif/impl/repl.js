// Compiled by ClojureScript 1.10.520 {}
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
fif.impl.repl.Repl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fif.impl.repl.Repl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39974,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39978 = k39974;
var G__39978__$1 = (((G__39978 instanceof cljs.core.Keyword))?G__39978.fqn:null);
switch (G__39978__$1) {
case "*sm":
return self__._STAR_sm;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39974,else__4388__auto__);

}
});

fif.impl.repl.Repl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39979){
var vec__39980 = p__39979;
var k__4408__auto__ = cljs.core.nth.call(null,vec__39980,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__39980,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

fif.impl.repl.Repl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#fif.impl.repl.Repl{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sm","*sm",-1345068121),self__._STAR_sm],null))], null),self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39973){
var self__ = this;
var G__39973__$1 = this;
return (new cljs.core.RecordIter((0),G__39973__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

fif.impl.repl.Repl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

fif.impl.repl.Repl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,self__.__extmap,self__.__hash));
});

fif.impl.repl.Repl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1086872593 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fif.impl.repl.Repl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39975,other39976){
var self__ = this;
var this39975__$1 = this;
return (((!((other39976 == null)))) && ((this39975__$1.constructor === other39976.constructor)) && (cljs.core._EQ_.call(null,this39975__$1._STAR_sm,other39976._STAR_sm)) && (cljs.core._EQ_.call(null,this39975__$1.__extmap,other39976.__extmap)));
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

fif.impl.repl.Repl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

fif.impl.repl.Repl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39973){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39983 = cljs.core.keyword_identical_QMARK_;
var expr__39984 = k__4393__auto__;
if(cljs.core.truth_(pred__39983.call(null,new cljs.core.Keyword(null,"*sm","*sm",-1345068121),expr__39984))){
return (new fif.impl.repl.Repl(G__39973,self__.__meta,self__.__extmap,null));
} else {
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__39973),null));
}
});

fif.impl.repl.Repl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sm","*sm",-1345068121),self__._STAR_sm,null))], null),self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39973){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fif.impl.repl.Repl(self__._STAR_sm,G__39973,self__.__extmap,self__.__hash));
});

fif.impl.repl.Repl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

fif.impl.repl.Repl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*sm","*sm",295463406,null)], null);
});

fif.impl.repl.Repl.cljs$lang$type = true;

fif.impl.repl.Repl.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"fif.impl.repl/Repl",null,(1),null));
});

fif.impl.repl.Repl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"fif.impl.repl/Repl");
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
fif.impl.repl.map__GT_Repl = (function fif$impl$repl$map__GT_Repl(G__39977){
var extmap__4424__auto__ = (function (){var G__39986 = cljs.core.dissoc.call(null,G__39977,new cljs.core.Keyword(null,"*sm","*sm",-1345068121));
if(cljs.core.record_QMARK_.call(null,G__39977)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__39986);
} else {
return G__39986;
}
})();
return (new fif.impl.repl.Repl(new cljs.core.Keyword(null,"*sm","*sm",-1345068121).cljs$core$IFn$_invoke$arity$1(G__39977),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

fif.impl.repl.new_repl = (function fif$impl$repl$new_repl(sm){
return fif.impl.repl.map__GT_Repl.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121),cljs.core.atom.call(null,sm)], null));
});
