// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.core');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.evaluators');
goog.require('fif.stack_machine.stash');
goog.require('fif.stack_machine.error_handling');
goog.require('fif.stdlib');
goog.require('fif.impl.stack_machine');
goog.require('fif.impl.prepl');
goog.require('fif.repl');
fif.core.get_stack = fif.stack_machine.get_stack;
/**
 * Default Stack Machine, containing all of the standard
 *   libraries. Can be used with `with-stack` in order to rebind for
 *   `eval`, `seval` and `reval`
 */
fif.core._STAR_default_stack_STAR_ = fif.stdlib.import_stdlib.call(null,fif.stack_machine.set_stack_error_handler.call(null,fif.stack_machine.set_system_error_handler.call(null,fif.impl.stack_machine.new_stack_machine.call(null),fif.stack_machine.error_handling.default_system_error_handler),fif.stack_machine.error_handling.default_stack_error_handler));
/**
 * Command-line Repl for either the *default-stack*, or a provided
 *   stack-machine.
 */
fif.core.repl = (function fif$core$repl(var_args){
var G__39993 = arguments.length;
switch (G__39993) {
case 1:
return fif.core.repl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return fif.core.repl.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fif.core.repl.cljs$core$IFn$_invoke$arity$1 = (function (sm){
return fif.repl.repl.call(null,sm);
});

fif.core.repl.cljs$core$IFn$_invoke$arity$0 = (function (){
return fif.core.repl.call(null,fif.core._STAR_default_stack_STAR_);
});

fif.core.repl.cljs$lang$maxFixedArity = 1;

/**
 * Programmable Repl Evaluation Function, for creating a full-fledged
 *   prepl. Documentation can be found in fif.impl.prepl/prepl-eval.
 */
fif.core.prepl_eval = fif.impl.prepl.prepl_eval;
var ret__4776__auto___39999 = (function (){
/**
 * Used to rebind the `*default-stack*` for use with `eval`, `seval` and
 *   `reval`
 */
fif.core.with_stack = (function fif$core$with_stack(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40000 = arguments.length;
var i__4731__auto___40001 = (0);
while(true){
if((i__4731__auto___40001 < len__4730__auto___40000)){
args__4736__auto__.push((arguments[i__4731__auto___40001]));

var G__40002 = (i__4731__auto___40001 + (1));
i__4731__auto___40001 = G__40002;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fif.core.with_stack.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fif.core.with_stack.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","*default-stack*","fif.core/*default-stack*",298619527,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)))))),null,(1),null)),body)));
});

fif.core.with_stack.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.with_stack.cljs$lang$applyTo = (function (seq39995){
var G__39996 = cljs.core.first.call(null,seq39995);
var seq39995__$1 = cljs.core.next.call(null,seq39995);
var G__39997 = cljs.core.first.call(null,seq39995__$1);
var seq39995__$2 = cljs.core.next.call(null,seq39995__$1);
var G__39998 = cljs.core.first.call(null,seq39995__$2);
var seq39995__$3 = cljs.core.next.call(null,seq39995__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39996,G__39997,G__39998,seq39995__$3);
});

return null;
})()
;
fif.core.with_stack.cljs$lang$macro = true;

/**
 * Evaluate the sequence of args within the fif stackmachine, and return
 *   the stackmachine as a result.
 */
fif.core.eval_fn = (function fif$core$eval_fn(args){
return fif.stack_machine.evaluators.eval_fn.call(null,fif.core._STAR_default_stack_STAR_,args);
});
var ret__4776__auto___40006 = (function (){
/**
 * Evaluate the values provided in `body` within the fif
 * stackmachine, and returns the stackmachine
 */
fif.core.eval = (function fif$core$eval(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40007 = arguments.length;
var i__4731__auto___40008 = (0);
while(true){
if((i__4731__auto___40008 < len__4730__auto___40007)){
args__4736__auto__.push((arguments[i__4731__auto___40008]));

var G__40009 = (i__4731__auto___40008 + (1));
i__4731__auto___40008 = G__40009;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fif.core.eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fif.core.eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.core.eval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.eval.cljs$lang$applyTo = (function (seq40003){
var G__40004 = cljs.core.first.call(null,seq40003);
var seq40003__$1 = cljs.core.next.call(null,seq40003);
var G__40005 = cljs.core.first.call(null,seq40003__$1);
var seq40003__$2 = cljs.core.next.call(null,seq40003__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40004,G__40005,seq40003__$2);
});

return null;
})()
;
fif.core.eval.cljs$lang$macro = true;

fif.core.ieval_fn = (function fif$core$ieval_fn(sm,args){
return fif.stack_machine.evaluators.eval_fn.call(null,sm,args);
});
var ret__4776__auto___40014 = (function (){
/**
 * Evaluate `body` forms within the provided stack-machine,
 *   `sm`. Returns the stack-machine after evaluation.
 */
fif.core.ieval = (function fif$core$ieval(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40015 = arguments.length;
var i__4731__auto___40016 = (0);
while(true){
if((i__4731__auto___40016 < len__4730__auto___40015)){
args__4736__auto__.push((arguments[i__4731__auto___40016]));

var G__40017 = (i__4731__auto___40016 + (1));
i__4731__auto___40016 = G__40017;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fif.core.ieval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fif.core.ieval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","ieval-fn","fif.core/ieval-fn",1184213547,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.core.ieval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.ieval.cljs$lang$applyTo = (function (seq40010){
var G__40011 = cljs.core.first.call(null,seq40010);
var seq40010__$1 = cljs.core.next.call(null,seq40010);
var G__40012 = cljs.core.first.call(null,seq40010__$1);
var seq40010__$2 = cljs.core.next.call(null,seq40010__$1);
var G__40013 = cljs.core.first.call(null,seq40010__$2);
var seq40010__$3 = cljs.core.next.call(null,seq40010__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40011,G__40012,G__40013,seq40010__$3);
});

return null;
})()
;
fif.core.ieval.cljs$lang$macro = true;

var ret__4776__auto___40021 = (function (){
/**
 * Evaluate the values provided in `body`, and return the main stack
 *   after completion.
 * 
 *   Notes:
 * 
 *   - You will likely want to use fif.core/reval, since it returns the
 *   main stack in a more pleasing orientation.
 */
fif.core.seval = (function fif$core$seval(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40022 = arguments.length;
var i__4731__auto___40023 = (0);
while(true){
if((i__4731__auto___40023 < len__4730__auto___40022)){
args__4736__auto__.push((arguments[i__4731__auto___40023]));

var G__40024 = (i__4731__auto___40023 + (1));
i__4731__auto___40023 = G__40024;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fif.core.seval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fif.core.seval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","get-stack","fif.stack-machine/get-stack",-1921152297,null),null,(1),null)))));
});

fif.core.seval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.seval.cljs$lang$applyTo = (function (seq40018){
var G__40019 = cljs.core.first.call(null,seq40018);
var seq40018__$1 = cljs.core.next.call(null,seq40018);
var G__40020 = cljs.core.first.call(null,seq40018__$1);
var seq40018__$2 = cljs.core.next.call(null,seq40018__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40019,G__40020,seq40018__$2);
});

return null;
})()
;
fif.core.seval.cljs$lang$macro = true;

var ret__4776__auto___40028 = (function (){
/**
 * Evaluate the values provided in `body` within the fif stackmachine,
 *   and return the main stack as a result.
 */
fif.core.reval = (function fif$core$reval(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40029 = arguments.length;
var i__4731__auto___40030 = (0);
while(true){
if((i__4731__auto___40030 < len__4730__auto___40029)){
args__4736__auto__.push((arguments[i__4731__auto___40030]));

var G__40031 = (i__4731__auto___40030 + (1));
i__4731__auto___40030 = G__40031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return fif.core.reval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

fif.core.reval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","get-stack","fif.stack-machine/get-stack",-1921152297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reverse","cljs.core/reverse",1527953530,null),null,(1),null)))));
});

fif.core.reval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.reval.cljs$lang$applyTo = (function (seq40025){
var G__40026 = cljs.core.first.call(null,seq40025);
var seq40025__$1 = cljs.core.next.call(null,seq40025);
var G__40027 = cljs.core.first.call(null,seq40025__$1);
var seq40025__$2 = cljs.core.next.call(null,seq40025__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40026,G__40027,seq40025__$2);
});

return null;
})()
;
fif.core.reval.cljs$lang$macro = true;

/**
 * Safeily evaluates the given string as a stream of EDN values within
 *   the fif stackmachine, and returns the stackmachine after evaluation.
 *   
 */
fif.core.eval_string = (function fif$core$eval_string(s){
return fif.stack_machine.evaluators.eval_string.call(null,fif.core._STAR_default_stack_STAR_,s);
});
/**
 * Evaluates the given string as a stream of EDN values within the fif
 *   stackmachine, and returns the main stack in a more pleasing
 *   orientation.
 */
fif.core.reval_string = (function fif$core$reval_string(s){
return cljs.core.reverse.call(null,fif.stack_machine.get_stack.call(null,fif.stack_machine.evaluators.eval_string.call(null,fif.core._STAR_default_stack_STAR_,s)));
});
var ret__4776__auto___40037 = (function (){
/**
 * Debugging tool. By default enables the step inhibitor.
 */
fif.core.dbg_eval = (function fif$core$dbg_eval(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40038 = arguments.length;
var i__4731__auto___40039 = (0);
while(true){
if((i__4731__auto___40039 < len__4730__auto___40038)){
args__4736__auto__.push((arguments[i__4731__auto___40039]));

var G__40040 = (i__4731__auto___40039 + (1));
i__4731__auto___40039 = G__40040;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fif.core.dbg_eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fif.core.dbg_eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,opts,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"step-max__40032__auto__","step-max__40032__auto__",1168649178,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"step-max","step-max",-2042341837),null,(1),null)),(new cljs.core.List(null,(100),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.core","*default-stack*","fif.core/*default-stack*",298619527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","set-step-max","fif.stack-machine/set-step-max",548682185,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"step-max__40032__auto__","step-max__40032__auto__",1168649178,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine.evaluators","eval-fn","fif.stack-machine.evaluators/eval-fn",-1450442074,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

fif.core.dbg_eval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.dbg_eval.cljs$lang$applyTo = (function (seq40033){
var G__40034 = cljs.core.first.call(null,seq40033);
var seq40033__$1 = cljs.core.next.call(null,seq40033);
var G__40035 = cljs.core.first.call(null,seq40033__$1);
var seq40033__$2 = cljs.core.next.call(null,seq40033__$1);
var G__40036 = cljs.core.first.call(null,seq40033__$2);
var seq40033__$3 = cljs.core.next.call(null,seq40033__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40034,G__40035,G__40036,seq40033__$3);
});

return null;
})()
;
fif.core.dbg_eval.cljs$lang$macro = true;

