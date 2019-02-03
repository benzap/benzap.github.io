// Compiled by ClojureScript 1.10.439 {}
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
var G__34425 = arguments.length;
switch (G__34425) {
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
var ret__4684__auto___34431 = (function (){
/**
 * Used to rebind the `*default-stack*` for use with `eval`, `seval` and
 *   `reval`
 */
fif.core.with_stack = (function fif$core$with_stack(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34432 = arguments.length;
var i__4642__auto___34433 = (0);
while(true){
if((i__4642__auto___34433 < len__4641__auto___34432)){
args__4647__auto__.push((arguments[i__4642__auto___34433]));

var G__34434 = (i__4642__auto___34433 + (1));
i__4642__auto___34433 = G__34434;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.core.with_stack.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.core.with_stack.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","*default-stack*","fif.core/*default-stack*",298619527,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)))))),null,(1),null)),body)));
});

fif.core.with_stack.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.with_stack.cljs$lang$applyTo = (function (seq34427){
var G__34428 = cljs.core.first.call(null,seq34427);
var seq34427__$1 = cljs.core.next.call(null,seq34427);
var G__34429 = cljs.core.first.call(null,seq34427__$1);
var seq34427__$2 = cljs.core.next.call(null,seq34427__$1);
var G__34430 = cljs.core.first.call(null,seq34427__$2);
var seq34427__$3 = cljs.core.next.call(null,seq34427__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34428,G__34429,G__34430,seq34427__$3);
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
var ret__4684__auto___34438 = (function (){
/**
 * Evaluate the values provided in `body` within the fif
 * stackmachine, and returns the stackmachine
 */
fif.core.eval = (function fif$core$eval(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34439 = arguments.length;
var i__4642__auto___34440 = (0);
while(true){
if((i__4642__auto___34440 < len__4641__auto___34439)){
args__4647__auto__.push((arguments[i__4642__auto___34440]));

var G__34441 = (i__4642__auto___34440 + (1));
i__4642__auto___34440 = G__34441;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.core.eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.core.eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.core.eval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.eval.cljs$lang$applyTo = (function (seq34435){
var G__34436 = cljs.core.first.call(null,seq34435);
var seq34435__$1 = cljs.core.next.call(null,seq34435);
var G__34437 = cljs.core.first.call(null,seq34435__$1);
var seq34435__$2 = cljs.core.next.call(null,seq34435__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34436,G__34437,seq34435__$2);
});

return null;
})()
;
fif.core.eval.cljs$lang$macro = true;

fif.core.ieval_fn = (function fif$core$ieval_fn(sm,args){
return fif.stack_machine.evaluators.eval_fn.call(null,sm,args);
});
var ret__4684__auto___34446 = (function (){
/**
 * Evaluate `body` forms within the provided stack-machine,
 *   `sm`. Returns the stack-machine after evaluation.
 */
fif.core.ieval = (function fif$core$ieval(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34447 = arguments.length;
var i__4642__auto___34448 = (0);
while(true){
if((i__4642__auto___34448 < len__4641__auto___34447)){
args__4647__auto__.push((arguments[i__4642__auto___34448]));

var G__34449 = (i__4642__auto___34448 + (1));
i__4642__auto___34448 = G__34449;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.core.ieval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.core.ieval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","ieval-fn","fif.core/ieval-fn",1184213547,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.core.ieval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.ieval.cljs$lang$applyTo = (function (seq34442){
var G__34443 = cljs.core.first.call(null,seq34442);
var seq34442__$1 = cljs.core.next.call(null,seq34442);
var G__34444 = cljs.core.first.call(null,seq34442__$1);
var seq34442__$2 = cljs.core.next.call(null,seq34442__$1);
var G__34445 = cljs.core.first.call(null,seq34442__$2);
var seq34442__$3 = cljs.core.next.call(null,seq34442__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34443,G__34444,G__34445,seq34442__$3);
});

return null;
})()
;
fif.core.ieval.cljs$lang$macro = true;

var ret__4684__auto___34453 = (function (){
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
var args__4647__auto__ = [];
var len__4641__auto___34454 = arguments.length;
var i__4642__auto___34455 = (0);
while(true){
if((i__4642__auto___34455 < len__4641__auto___34454)){
args__4647__auto__.push((arguments[i__4642__auto___34455]));

var G__34456 = (i__4642__auto___34455 + (1));
i__4642__auto___34455 = G__34456;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.core.seval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.core.seval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","get-stack","fif.stack-machine/get-stack",-1921152297,null),null,(1),null)))));
});

fif.core.seval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.seval.cljs$lang$applyTo = (function (seq34450){
var G__34451 = cljs.core.first.call(null,seq34450);
var seq34450__$1 = cljs.core.next.call(null,seq34450);
var G__34452 = cljs.core.first.call(null,seq34450__$1);
var seq34450__$2 = cljs.core.next.call(null,seq34450__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34451,G__34452,seq34450__$2);
});

return null;
})()
;
fif.core.seval.cljs$lang$macro = true;

var ret__4684__auto___34460 = (function (){
/**
 * Evaluate the values provided in `body` within the fif stackmachine,
 *   and return the main stack as a result.
 */
fif.core.reval = (function fif$core$reval(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34461 = arguments.length;
var i__4642__auto___34462 = (0);
while(true){
if((i__4642__auto___34462 < len__4641__auto___34461)){
args__4647__auto__.push((arguments[i__4642__auto___34462]));

var G__34463 = (i__4642__auto___34462 + (1));
i__4642__auto___34462 = G__34463;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return fif.core.reval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

fif.core.reval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","get-stack","fif.stack-machine/get-stack",-1921152297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reverse","cljs.core/reverse",1527953530,null),null,(1),null)))));
});

fif.core.reval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.reval.cljs$lang$applyTo = (function (seq34457){
var G__34458 = cljs.core.first.call(null,seq34457);
var seq34457__$1 = cljs.core.next.call(null,seq34457);
var G__34459 = cljs.core.first.call(null,seq34457__$1);
var seq34457__$2 = cljs.core.next.call(null,seq34457__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34458,G__34459,seq34457__$2);
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
var ret__4684__auto___34469 = (function (){
/**
 * Debugging tool. By default enables the step inhibitor.
 */
fif.core.dbg_eval = (function fif$core$dbg_eval(var_args){
var args__4647__auto__ = [];
var len__4641__auto___34470 = arguments.length;
var i__4642__auto___34471 = (0);
while(true){
if((i__4642__auto___34471 < len__4641__auto___34470)){
args__4647__auto__.push((arguments[i__4642__auto___34471]));

var G__34472 = (i__4642__auto___34471 + (1));
i__4642__auto___34471 = G__34472;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.core.dbg_eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.core.dbg_eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,opts,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"step-max__34464__auto__","step-max__34464__auto__",467922252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"step-max","step-max",-2042341837),null,(1),null)),(new cljs.core.List(null,(100),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.core","*default-stack*","fif.core/*default-stack*",298619527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","set-step-max","fif.stack-machine/set-step-max",548682185,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"step-max__34464__auto__","step-max__34464__auto__",467922252,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine.evaluators","eval-fn","fif.stack-machine.evaluators/eval-fn",-1450442074,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

fif.core.dbg_eval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.dbg_eval.cljs$lang$applyTo = (function (seq34465){
var G__34466 = cljs.core.first.call(null,seq34465);
var seq34465__$1 = cljs.core.next.call(null,seq34465);
var G__34467 = cljs.core.first.call(null,seq34465__$1);
var seq34465__$2 = cljs.core.next.call(null,seq34465__$1);
var G__34468 = cljs.core.first.call(null,seq34465__$2);
var seq34465__$3 = cljs.core.next.call(null,seq34465__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34466,G__34467,G__34468,seq34465__$3);
});

return null;
})()
;
fif.core.dbg_eval.cljs$lang$macro = true;

