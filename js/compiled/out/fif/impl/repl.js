// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.impl.repl');
goog.require('cljs.core');
goog.require('fif.stack_machine.evaluators');
goog.require('fif.protocols.repl');

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fif.impl.repl.Repl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

fif.impl.repl.Repl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k41255,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__41259 = k41255;
var G__41259__$1 = (((G__41259 instanceof cljs.core.Keyword))?G__41259.fqn:null);
switch (G__41259__$1) {
case "*sm":
return self__._STAR_sm;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k41255,else__4175__auto__);

}
});

fif.impl.repl.Repl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#fif.impl.repl.Repl{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sm","*sm",-1345068121),self__._STAR_sm],null))], null),self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41254){
var self__ = this;
var G__41254__$1 = this;
return (new cljs.core.RecordIter((0),G__41254__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

fif.impl.repl.Repl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

fif.impl.repl.Repl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,self__.__extmap,self__.__hash));
});

fif.impl.repl.Repl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1086872593 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

fif.impl.repl.Repl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41256,other41257){
var self__ = this;
var this41256__$1 = this;
return ((!((other41257 == null))) && ((this41256__$1.constructor === other41257.constructor)) && (cljs.core._EQ_.call(null,this41256__$1._STAR_sm,other41257._STAR_sm)) && (cljs.core._EQ_.call(null,this41256__$1.__extmap,other41257.__extmap)));
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
if(!(cljs.core._EQ_.call(null,sform,"bye"))){
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

fif.impl.repl.Repl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

fif.impl.repl.Repl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__41254){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__41260 = cljs.core.keyword_identical_QMARK_;
var expr__41261 = k__4180__auto__;
if(cljs.core.truth_(pred__41260.call(null,new cljs.core.Keyword(null,"*sm","*sm",-1345068121),expr__41261))){
return (new fif.impl.repl.Repl(G__41254,self__.__meta,self__.__extmap,null));
} else {
return (new fif.impl.repl.Repl(self__._STAR_sm,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__41254),null));
}
});

fif.impl.repl.Repl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sm","*sm",-1345068121),self__._STAR_sm,null))], null),self__.__extmap));
});

fif.impl.repl.Repl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__41254){
var self__ = this;
var this__4171__auto____$1 = this;
return (new fif.impl.repl.Repl(self__._STAR_sm,G__41254,self__.__extmap,self__.__hash));
});

fif.impl.repl.Repl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

fif.impl.repl.Repl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*sm","*sm",295463406,null)], null);
});

fif.impl.repl.Repl.cljs$lang$type = true;

fif.impl.repl.Repl.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"fif.impl.repl/Repl",null,(1),null));
});

fif.impl.repl.Repl.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"fif.impl.repl/Repl");
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
fif.impl.repl.map__GT_Repl = (function fif$impl$repl$map__GT_Repl(G__41258){
return (new fif.impl.repl.Repl(new cljs.core.Keyword(null,"*sm","*sm",-1345068121).cljs$core$IFn$_invoke$arity$1(G__41258),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__41258,new cljs.core.Keyword(null,"*sm","*sm",-1345068121))),null));
});

fif.impl.repl.new_repl = (function fif$impl$repl$new_repl(sm){
return fif.impl.repl.map__GT_Repl.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*sm","*sm",-1345068121),cljs.core.atom.call(null,sm)], null));
});
