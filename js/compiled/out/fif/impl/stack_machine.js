// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.impl.stack_machine');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.flags');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.variable');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stack_machine.processor');
goog.require('fif.stack_machine.error_handling');
goog.require('fif.stack_machine.scope');
goog.require('fif.utils.scope');
goog.require('fif.utils.stash');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {fif.stack_machine.IStackMachine}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fif.impl.stack_machine.StackMachine = (function (arg_stack,code_stack,ret_stack,temp_macro_stack,scope,sub_stash,mode_stash,flags,modes,step_num,step_max,system_error_handler,stack_error_handler,halt_QMARK_,debug_QMARK_,__meta,__extmap,__hash){
this.arg_stack = arg_stack;
this.code_stack = code_stack;
this.ret_stack = ret_stack;
this.temp_macro_stack = temp_macro_stack;
this.scope = scope;
this.sub_stash = sub_stash;
this.mode_stash = mode_stash;
this.flags = flags;
this.modes = modes;
this.step_num = step_num;
this.step_max = step_max;
this.system_error_handler = system_error_handler;
this.stack_error_handler = stack_error_handler;
this.halt_QMARK_ = halt_QMARK_;
this.debug_QMARK_ = debug_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fif.impl.stack_machine.StackMachine.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39943,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39947 = k39943;
var G__39947__$1 = (((G__39947 instanceof cljs.core.Keyword))?G__39947.fqn:null);
switch (G__39947__$1) {
case "arg-stack":
return self__.arg_stack;

break;
case "code-stack":
return self__.code_stack;

break;
case "ret-stack":
return self__.ret_stack;

break;
case "temp-macro-stack":
return self__.temp_macro_stack;

break;
case "scope":
return self__.scope;

break;
case "sub-stash":
return self__.sub_stash;

break;
case "mode-stash":
return self__.mode_stash;

break;
case "flags":
return self__.flags;

break;
case "modes":
return self__.modes;

break;
case "step-num":
return self__.step_num;

break;
case "step-max":
return self__.step_max;

break;
case "system-error-handler":
return self__.system_error_handler;

break;
case "stack-error-handler":
return self__.stack_error_handler;

break;
case "halt?":
return self__.halt_QMARK_;

break;
case "debug?":
return self__.debug_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39943,else__4388__auto__);

}
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39948){
var vec__39949 = p__39948;
var k__4408__auto__ = cljs.core.nth.call(null,vec__39949,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__39949,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#fif.impl.stack-machine.StackMachine{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871),self__.arg_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),self__.code_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511),self__.ret_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),self__.temp_macro_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scope","scope",-439358418),self__.scope],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),self__.sub_stash],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468),self__.mode_stash],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flags","flags",1775418075),self__.flags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modes","modes",-1377787092),self__.modes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"step-num","step-num",-1199653885),self__.step_num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"step-max","step-max",-2042341837),self__.step_max],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636),self__.system_error_handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214),self__.stack_error_handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"halt?","halt?",-1110658247),self__.halt_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"debug?","debug?",-1831756173),self__.debug_QMARK_],null))], null),self__.__extmap));
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39942){
var self__ = this;
var G__39942__$1 = this;
return (new cljs.core.RecordIter((0),G__39942__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871),new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511),new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"step-num","step-num",-1199653885),new cljs.core.Keyword(null,"step-max","step-max",-2042341837),new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636),new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),new cljs.core.Keyword(null,"debug?","debug?",-1831756173)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (15 + cljs.core.count.call(null,self__.__extmap));
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1562506297 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39944,other39945){
var self__ = this;
var this39944__$1 = this;
return (((!((other39945 == null)))) && ((this39944__$1.constructor === other39945.constructor)) && (cljs.core._EQ_.call(null,this39944__$1.arg_stack,other39945.arg_stack)) && (cljs.core._EQ_.call(null,this39944__$1.code_stack,other39945.code_stack)) && (cljs.core._EQ_.call(null,this39944__$1.ret_stack,other39945.ret_stack)) && (cljs.core._EQ_.call(null,this39944__$1.temp_macro_stack,other39945.temp_macro_stack)) && (cljs.core._EQ_.call(null,this39944__$1.scope,other39945.scope)) && (cljs.core._EQ_.call(null,this39944__$1.sub_stash,other39945.sub_stash)) && (cljs.core._EQ_.call(null,this39944__$1.mode_stash,other39945.mode_stash)) && (cljs.core._EQ_.call(null,this39944__$1.flags,other39945.flags)) && (cljs.core._EQ_.call(null,this39944__$1.modes,other39945.modes)) && (cljs.core._EQ_.call(null,this39944__$1.step_num,other39945.step_num)) && (cljs.core._EQ_.call(null,this39944__$1.step_max,other39945.step_max)) && (cljs.core._EQ_.call(null,this39944__$1.system_error_handler,other39945.system_error_handler)) && (cljs.core._EQ_.call(null,this39944__$1.stack_error_handler,other39945.stack_error_handler)) && (cljs.core._EQ_.call(null,this39944__$1.halt_QMARK_,other39945.halt_QMARK_)) && (cljs.core._EQ_.call(null,this39944__$1.debug_QMARK_,other39945.debug_QMARK_)) && (cljs.core._EQ_.call(null,this39944__$1.__extmap,other39945.__extmap)));
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$ = cljs.core.PROTOCOL_SENTINEL;

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$pop_temp_macro$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320)], null),cljs.core.pop);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$push_temp_macro$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320)], null),cljs.core.conj,x);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_step_max$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"step-max","step-max",-2042341837).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$is_debug_mode_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_flags$arity$2 = (function (this$,flags__$1){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),flags__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$halt$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$enqueue_code$arity$2 = (function (this$,arg){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-stack","code-stack",1724254090)], null),cljs.core.concat,(new cljs.core.List(null,arg,null,(1),null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-stack","code-stack",1724254090)], null),cljs.core.vec);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$clear_flags$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.empty.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(this$__$1)));
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_mode$arity$3 = (function (this$,flag,modefn){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092)], null),cljs.core.assoc,flag,modefn);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$step$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var arg = cljs.core.first.call(null,this$__$1.fif$stack_machine$IStackMachine$get_code$arity$1(null));
if(fif.stack_machine.flags.has_flags_QMARK_.call(null,this$__$1)){
try{return fif.stack_machine.inc_step.call(null,fif.stack_machine.processor.process_mode.call(null,this$__$1));
}catch (e39952){if((e39952 instanceof Error)){
var ex = e39952;
return fif.stack_machine.error_handling.handle_system_error.call(null,this$__$1,ex);
} else {
throw e39952;

}
}} else {
try{return fif.stack_machine.inc_step.call(null,fif.stack_machine.processor.process_arg.call(null,this$__$1));
}catch (e39953){if((e39953 instanceof Error)){
var ex = e39953;
return fif.stack_machine.error_handling.handle_system_error.call(null,this$__$1,ex);
} else {
throw e39953;

}
}}
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$push_stack_STAR_$arity$2 = (function (this$,arg){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871)], null),cljs.core.conj,arg);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$pop_ret$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511)], null),cljs.core.pop);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_word_metadata$arity$3 = (function (this$,wname,wmeta){
var self__ = this;
var this$__$1 = this;
return fif.stack_machine.words.set_global_metadata.call(null,this$__$1,wname,wmeta);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$clear_temp_macro$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),cljs.core.empty.call(null,this$__$1.fif$stack_machine$IStackMachine$get_temp_macro$arity$1(null)));
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_scope$arity$2 = (function (this$,scope__$1){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"scope","scope",-439358418),scope__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_word_listing$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fif.stack_machine.words.get_word_listing.call(null,this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_stack_error_handler$arity$2 = (function (this$,err_handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214),err_handler);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_word_STAR_$arity$3 = (function (this$,wname,wbody){
var self__ = this;
var this$__$1 = this;
return fif.stack_machine.words.set_global_word.call(null,this$__$1,wname,wbody);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_code$arity$2 = (function (this$,args){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),args);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$enable_debug$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),true);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sm = this$__$1;
while(true){
var step_num__$1 = fif.stack_machine.get_step_num.call(null,sm);
var step_max__$1 = fif.stack_machine.get_step_max.call(null,sm);
if(cljs.core.empty_QMARK_.call(null,fif.stack_machine.get_code.call(null,sm))){
return sm;
} else {
if((((step_max__$1 > (0))) && ((step_num__$1 >= step_max__$1)))){
return fif.stack_machine.exceptions.raise_max_steps_exceeded.call(null,sm);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"halt?","halt?",-1110658247).cljs$core$IFn$_invoke$arity$1(sm))){
return sm;
} else {
var G__39959 = fif.stack_machine.step.call(null,sm);
sm = G__39959;
continue;

}
}
}
break;
}
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$clear_scope$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fif.stack_machine.scope.clear_scope.call(null,this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_stash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_stack_error_handler$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_temp_macro$arity$2 = (function (this$,st){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),st);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_code$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"code-stack","code-stack",1724254090).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$pop_flag$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075)], null),cljs.core.pop);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_mode_stash$arity$2 = (function (this$,stash){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468),stash);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_stash$arity$2 = (function (this$,st){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),st);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_temp_macro$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$continue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),false);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_stack$arity$2 = (function (this$,stack){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871),stack);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_word$arity$2 = (function (this$,wname){
var self__ = this;
var this$__$1 = this;
return fif.stack_machine.words.get_word.call(null,this$__$1,wname);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_word_metadata$arity$2 = (function (this$,wname){
var self__ = this;
var this$__$1 = this;
return fif.stack_machine.words.get_global_metadata.call(null,this$__$1,wname);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_system_error_handler$arity$2 = (function (this$,err_handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636),err_handler);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$dequeue_code$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-stack","code-stack",1724254090)], null),((function (this$__$1){
return (function (p1__39941_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__39941_SHARP_));
});})(this$__$1))
);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$pick_temp_macro$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.peek.call(null,new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_scope$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"scope","scope",-439358418).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_step_num$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"step-num","step-num",-1199653885),n);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$inc_step$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.update.call(null,this$__$1,new cljs.core.Keyword(null,"step-num","step-num",-1199653885),cljs.core.inc);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$disable_debug$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),false);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_step_num$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"step-num","step-num",-1199653885).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_variable$arity$3 = (function (this$,wname,value){
var self__ = this;
var this$__$1 = this;
return fif.stack_machine.words.set_global_word_defn.call(null,this$__$1,wname,fif.stack_machine.variable.wrap_global_variable.call(null,value),new cljs.core.Keyword(null,"variable?","variable?",-1902009648),true);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_ret$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$clear_ret$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511),cljs.core.empty.call(null,new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511).cljs$core$IFn$_invoke$arity$1(this$__$1)));
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_system_error_handler$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_mode_stash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_flags$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$remove_mode$arity$2 = (function (this$,flag){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",-1377787092)], null),cljs.core.dissoc,flag);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$push_code$arity$2 = (function (this$,arg){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code-stack","code-stack",1724254090)], null),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null),new cljs.core.Keyword(null,"code-stack","code-stack",1724254090).cljs$core$IFn$_invoke$arity$1(this$__$1))));
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$set_step_max$arity$2 = (function (this$,m){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"step-max","step-max",-2042341837),m);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$clear_stack$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871),cljs.core.empty.call(null,new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871).cljs$core$IFn$_invoke$arity$1(this$__$1)));
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$get_stack$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$clear_mode_stash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fif.stack_machine.stash.clear_stash.call(null,this$__$1);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$push_ret$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511)], null),cljs.core.conj,x);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$push_flag$arity$2 = (function (this$,flag){
var self__ = this;
var this$__$1 = this;
return cljs.core.update_in.call(null,this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075)], null),cljs.core.conj,flag);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$clear_stash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),cljs.core.empty.call(null,new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691).cljs$core$IFn$_invoke$arity$1(this$__$1)));
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$pop_stack$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var $ = this$__$1;
return cljs.core.update_in.call(null,$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871)], null),cljs.core.pop);
});

fif.impl.stack_machine.StackMachine.prototype.fif$stack_machine$IStackMachine$clear_code$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),cljs.core.empty.call(null,new cljs.core.Keyword(null,"code-stack","code-stack",1724254090).cljs$core$IFn$_invoke$arity$1(this$__$1)));
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"step-num","step-num",-1199653885),null,new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214),null,new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511),null,new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),null,new cljs.core.Keyword(null,"modes","modes",-1377787092),null,new cljs.core.Keyword(null,"scope","scope",-439358418),null,new cljs.core.Keyword(null,"step-max","step-max",-2042341837),null,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),null,new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468),null,new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),null,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),null,new cljs.core.Keyword(null,"flags","flags",1775418075),null,new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),null,new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636),null,new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39942){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39954 = cljs.core.keyword_identical_QMARK_;
var expr__39955 = k__4393__auto__;
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(G__39942,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,G__39942,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,G__39942,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,G__39942,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"scope","scope",-439358418),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,G__39942,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,G__39942,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,G__39942,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,G__39942,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"modes","modes",-1377787092),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,G__39942,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"step-num","step-num",-1199653885),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,G__39942,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"step-max","step-max",-2042341837),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,G__39942,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,G__39942,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,G__39942,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,G__39942,self__.debug_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39954.call(null,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),expr__39955))){
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,G__39942,self__.__meta,self__.__extmap,null));
} else {
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__39942),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871),self__.arg_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),self__.code_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511),self__.ret_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),self__.temp_macro_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"scope","scope",-439358418),self__.scope,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),self__.sub_stash,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468),self__.mode_stash,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"flags","flags",1775418075),self__.flags,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"modes","modes",-1377787092),self__.modes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"step-num","step-num",-1199653885),self__.step_num,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"step-max","step-max",-2042341837),self__.step_max,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636),self__.system_error_handler,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214),self__.stack_error_handler,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"halt?","halt?",-1110658247),self__.halt_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"debug?","debug?",-1831756173),self__.debug_QMARK_,null))], null),self__.__extmap));
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39942){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fif.impl.stack_machine.StackMachine(self__.arg_stack,self__.code_stack,self__.ret_stack,self__.temp_macro_stack,self__.scope,self__.sub_stash,self__.mode_stash,self__.flags,self__.modes,self__.step_num,self__.step_max,self__.system_error_handler,self__.stack_error_handler,self__.halt_QMARK_,self__.debug_QMARK_,G__39942,self__.__extmap,self__.__hash));
});

fif.impl.stack_machine.StackMachine.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

fif.impl.stack_machine.StackMachine.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arg-stack","arg-stack",-1731859898,null),new cljs.core.Symbol(null,"code-stack","code-stack",-930181679,null),new cljs.core.Symbol(null,"ret-stack","ret-stack",-279639984,null),new cljs.core.Symbol(null,"temp-macro-stack","temp-macro-stack",177422207,null),new cljs.core.Symbol(null,"scope","scope",1201173109,null),new cljs.core.Symbol(null,"sub-stash","sub-stash",1753929218,null),new cljs.core.Symbol(null,"mode-stash","mode-stash",-1578435301,null),new cljs.core.Symbol(null,"flags","flags",-879017694,null),new cljs.core.Symbol(null,"modes","modes",262744435,null),new cljs.core.Symbol(null,"step-num","step-num",440877642,null),new cljs.core.Symbol(null,"step-max","step-max",-401810310,null),new cljs.core.Symbol(null,"system-error-handler","system-error-handler",-289070109,null),new cljs.core.Symbol(null,"stack-error-handler","stack-error-handler",-696821555,null),new cljs.core.Symbol(null,"halt?","halt?",529873280,null),new cljs.core.Symbol(null,"debug?","debug?",-191224646,null)], null);
});

fif.impl.stack_machine.StackMachine.cljs$lang$type = true;

fif.impl.stack_machine.StackMachine.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"fif.impl.stack-machine/StackMachine",null,(1),null));
});

fif.impl.stack_machine.StackMachine.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"fif.impl.stack-machine/StackMachine");
});

/**
 * Positional factory function for fif.impl.stack-machine/StackMachine.
 */
fif.impl.stack_machine.__GT_StackMachine = (function fif$impl$stack_machine$__GT_StackMachine(arg_stack,code_stack,ret_stack,temp_macro_stack,scope,sub_stash,mode_stash,flags,modes,step_num,step_max,system_error_handler,stack_error_handler,halt_QMARK_,debug_QMARK_){
return (new fif.impl.stack_machine.StackMachine(arg_stack,code_stack,ret_stack,temp_macro_stack,scope,sub_stash,mode_stash,flags,modes,step_num,step_max,system_error_handler,stack_error_handler,halt_QMARK_,debug_QMARK_,null,null,null));
});

/**
 * Factory function for fif.impl.stack-machine/StackMachine, taking a map of keywords to field values.
 */
fif.impl.stack_machine.map__GT_StackMachine = (function fif$impl$stack_machine$map__GT_StackMachine(G__39946){
var extmap__4424__auto__ = (function (){var G__39957 = cljs.core.dissoc.call(null,G__39946,new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871),new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511),new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"step-num","step-num",-1199653885),new cljs.core.Keyword(null,"step-max","step-max",-2042341837),new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636),new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),new cljs.core.Keyword(null,"debug?","debug?",-1831756173));
if(cljs.core.record_QMARK_.call(null,G__39946)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__39957);
} else {
return G__39957;
}
})();
return (new fif.impl.stack_machine.StackMachine(new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"code-stack","code-stack",1724254090).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"scope","scope",-439358418).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"modes","modes",-1377787092).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"step-num","step-num",-1199653885).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"step-max","step-max",-2042341837).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"halt?","halt?",-1110658247).cljs$core$IFn$_invoke$arity$1(G__39946),new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(G__39946),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

fif.impl.stack_machine.new_stack_machine = (function fif$impl$stack_machine$new_stack_machine(){
return fif.impl.stack_machine.map__GT_StackMachine.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"step-num","step-num",-1199653885),new cljs.core.Keyword(null,"stack-error-handler","stack-error-handler",1957614214),new cljs.core.Keyword(null,"ret-stack","ret-stack",-1920171511),new cljs.core.Keyword(null,"code-stack","code-stack",1724254090),new cljs.core.Keyword(null,"modes","modes",-1377787092),new cljs.core.Keyword(null,"scope","scope",-439358418),new cljs.core.Keyword(null,"step-max","step-max",-2042341837),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),new cljs.core.Keyword(null,"mode-stash","mode-stash",1076000468),new cljs.core.Keyword(null,"temp-macro-stack","temp-macro-stack",-1463109320),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"sub-stash","sub-stash",113397691),new cljs.core.Keyword(null,"system-error-handler","system-error-handler",-1929601636),new cljs.core.Keyword(null,"arg-stack","arg-stack",922575871)],[(0),null,cljs.core.List.EMPTY,cljs.core.List.EMPTY,cljs.core.PersistentArrayMap.EMPTY,fif.utils.scope.new_scope.call(null),(0),true,fif.utils.stash.create_stash.call(null),cljs.core.List.EMPTY,false,cljs.core.PersistentVector.EMPTY,cljs.core.List.EMPTY,null,cljs.core.List.EMPTY]));
});
