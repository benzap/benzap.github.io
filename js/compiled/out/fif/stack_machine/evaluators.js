// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stack_machine.evaluators');
goog.require('cljs.core');
goog.require('cljs.tools.reader.edn');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.error_handling');
fif.stack_machine.evaluators.eval_fn = (function fif$stack_machine$evaluators$eval_fn(sm,args){
return fif.stack_machine.run.call(null,fif.stack_machine.set_code.call(null,sm,cljs.core.concat.call(null,fif.stack_machine.get_code.call(null,sm),args)));
});
var ret__4533__auto___39574 = (function (){
fif.stack_machine.evaluators.eval = (function fif$stack_machine$evaluators$eval(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39575 = arguments.length;
var i__4500__auto___39576 = (0);
while(true){
if((i__4500__auto___39576 < len__4499__auto___39575)){
args__4502__auto__.push((arguments[i__4500__auto___39576]));

var G__39577 = (i__4500__auto___39576 + (1));
i__4500__auto___39576 = G__39577;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.stack_machine.evaluators.eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.stack_machine.evaluators.eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine.evaluators","eval-fn","fif.stack-machine.evaluators/eval-fn",-1450442074,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.stack_machine.evaluators.eval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.stack_machine.evaluators.eval.cljs$lang$applyTo = (function (seq39570){
var G__39571 = cljs.core.first.call(null,seq39570);
var seq39570__$1 = cljs.core.next.call(null,seq39570);
var G__39572 = cljs.core.first.call(null,seq39570__$1);
var seq39570__$2 = cljs.core.next.call(null,seq39570__$1);
var G__39573 = cljs.core.first.call(null,seq39570__$2);
var seq39570__$3 = cljs.core.next.call(null,seq39570__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39571,G__39572,G__39573,seq39570__$3);
});

return null;
})()
;
fif.stack_machine.evaluators.eval.cljs$lang$macro = true;

fif.stack_machine.evaluators.wrap_eval_string = (function fif$stack_machine$evaluators$wrap_eval_string(s){
return ["\n[\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n]\n"].join('');
});
fif.stack_machine.evaluators.read_string = (function fif$stack_machine$evaluators$read_string(sm,s){
var s__$1 = fif.stack_machine.evaluators.wrap_eval_string.call(null,s);
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sm,cljs.tools.reader.edn.read_string.call(null,s__$1)], null);
}catch (e39578){if((e39578 instanceof Error)){
var ex = e39578;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stack_machine.error_handling.handle_system_error.call(null,sm,ex),cljs.core.PersistentVector.EMPTY], null);
} else {
throw e39578;

}
}});
fif.stack_machine.evaluators.eval_string = (function fif$stack_machine$evaluators$eval_string(sm,s){
var vec__39579 = fif.stack_machine.evaluators.read_string.call(null,sm,s);
var sm__$1 = cljs.core.nth.call(null,vec__39579,(0),null);
var args = cljs.core.nth.call(null,vec__39579,(1),null);
return fif.stack_machine.evaluators.eval_fn.call(null,sm__$1,args);
});
