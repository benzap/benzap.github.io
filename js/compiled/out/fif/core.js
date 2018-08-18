// Compiled by ClojureScript 1.10.339 {}
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
var G__41384 = arguments.length;
switch (G__41384) {
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
var ret__4565__auto___41390 = (function (){
/**
 * Used to rebind the `*default-stack*` for use with `eval`, `seval` and
 *   `reval`
 */
fif.core.with_stack = (function fif$core$with_stack(var_args){
var args__4534__auto__ = [];
var len__4531__auto___41391 = arguments.length;
var i__4532__auto___41392 = (0);
while(true){
if((i__4532__auto___41392 < len__4531__auto___41391)){
args__4534__auto__.push((arguments[i__4532__auto___41392]));

var G__41393 = (i__4532__auto___41392 + (1));
i__4532__auto___41392 = G__41393;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return fif.core.with_stack.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

fif.core.with_stack.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","*default-stack*","fif.core/*default-stack*",298619527,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)))))),null,(1),null)),body)));
});

fif.core.with_stack.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.with_stack.cljs$lang$applyTo = (function (seq41386){
var G__41387 = cljs.core.first.call(null,seq41386);
var seq41386__$1 = cljs.core.next.call(null,seq41386);
var G__41388 = cljs.core.first.call(null,seq41386__$1);
var seq41386__$2 = cljs.core.next.call(null,seq41386__$1);
var G__41389 = cljs.core.first.call(null,seq41386__$2);
var seq41386__$3 = cljs.core.next.call(null,seq41386__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41387,G__41388,G__41389,seq41386__$3);
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
var ret__4565__auto___41397 = (function (){
/**
 * Evaluate the values provided in `body` within the fif
 * stackmachine, and returns the stackmachine
 */
fif.core.eval = (function fif$core$eval(var_args){
var args__4534__auto__ = [];
var len__4531__auto___41398 = arguments.length;
var i__4532__auto___41399 = (0);
while(true){
if((i__4532__auto___41399 < len__4531__auto___41398)){
args__4534__auto__.push((arguments[i__4532__auto___41399]));

var G__41400 = (i__4532__auto___41399 + (1));
i__4532__auto___41399 = G__41400;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fif.core.eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fif.core.eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.core.eval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.eval.cljs$lang$applyTo = (function (seq41394){
var G__41395 = cljs.core.first.call(null,seq41394);
var seq41394__$1 = cljs.core.next.call(null,seq41394);
var G__41396 = cljs.core.first.call(null,seq41394__$1);
var seq41394__$2 = cljs.core.next.call(null,seq41394__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41395,G__41396,seq41394__$2);
});

return null;
})()
;
fif.core.eval.cljs$lang$macro = true;

fif.core.ieval_fn = (function fif$core$ieval_fn(sm,args){
return fif.stack_machine.evaluators.eval_fn.call(null,sm,args);
});
var ret__4565__auto___41405 = (function (){
/**
 * Evaluate `body` forms within the provided stack-machine,
 *   `sm`. Returns the stack-machine after evaluation.
 */
fif.core.ieval = (function fif$core$ieval(var_args){
var args__4534__auto__ = [];
var len__4531__auto___41406 = arguments.length;
var i__4532__auto___41407 = (0);
while(true){
if((i__4532__auto___41407 < len__4531__auto___41406)){
args__4534__auto__.push((arguments[i__4532__auto___41407]));

var G__41408 = (i__4532__auto___41407 + (1));
i__4532__auto___41407 = G__41408;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return fif.core.ieval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

fif.core.ieval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","ieval-fn","fif.core/ieval-fn",1184213547,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.core.ieval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.ieval.cljs$lang$applyTo = (function (seq41401){
var G__41402 = cljs.core.first.call(null,seq41401);
var seq41401__$1 = cljs.core.next.call(null,seq41401);
var G__41403 = cljs.core.first.call(null,seq41401__$1);
var seq41401__$2 = cljs.core.next.call(null,seq41401__$1);
var G__41404 = cljs.core.first.call(null,seq41401__$2);
var seq41401__$3 = cljs.core.next.call(null,seq41401__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41402,G__41403,G__41404,seq41401__$3);
});

return null;
})()
;
fif.core.ieval.cljs$lang$macro = true;

var ret__4565__auto___41412 = (function (){
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
var args__4534__auto__ = [];
var len__4531__auto___41413 = arguments.length;
var i__4532__auto___41414 = (0);
while(true){
if((i__4532__auto___41414 < len__4531__auto___41413)){
args__4534__auto__.push((arguments[i__4532__auto___41414]));

var G__41415 = (i__4532__auto___41414 + (1));
i__4532__auto___41414 = G__41415;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fif.core.seval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fif.core.seval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","get-stack","fif.stack-machine/get-stack",-1921152297,null),null,(1),null)))));
});

fif.core.seval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.seval.cljs$lang$applyTo = (function (seq41409){
var G__41410 = cljs.core.first.call(null,seq41409);
var seq41409__$1 = cljs.core.next.call(null,seq41409);
var G__41411 = cljs.core.first.call(null,seq41409__$1);
var seq41409__$2 = cljs.core.next.call(null,seq41409__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41410,G__41411,seq41409__$2);
});

return null;
})()
;
fif.core.seval.cljs$lang$macro = true;

var ret__4565__auto___41419 = (function (){
/**
 * Evaluate the values provided in `body` within the fif stackmachine,
 *   and return the main stack as a result.
 */
fif.core.reval = (function fif$core$reval(var_args){
var args__4534__auto__ = [];
var len__4531__auto___41420 = arguments.length;
var i__4532__auto___41421 = (0);
while(true){
if((i__4532__auto___41421 < len__4531__auto___41420)){
args__4534__auto__.push((arguments[i__4532__auto___41421]));

var G__41422 = (i__4532__auto___41421 + (1));
i__4532__auto___41421 = G__41422;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return fif.core.reval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

fif.core.reval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","get-stack","fif.stack-machine/get-stack",-1921152297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reverse","cljs.core/reverse",1527953530,null),null,(1),null)))));
});

fif.core.reval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.reval.cljs$lang$applyTo = (function (seq41416){
var G__41417 = cljs.core.first.call(null,seq41416);
var seq41416__$1 = cljs.core.next.call(null,seq41416);
var G__41418 = cljs.core.first.call(null,seq41416__$1);
var seq41416__$2 = cljs.core.next.call(null,seq41416__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41417,G__41418,seq41416__$2);
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
var ret__4565__auto___41428 = (function (){
/**
 * Debugging tool. By default enables the step inhibitor.
 */
fif.core.dbg_eval = (function fif$core$dbg_eval(var_args){
var args__4534__auto__ = [];
var len__4531__auto___41429 = arguments.length;
var i__4532__auto___41430 = (0);
while(true){
if((i__4532__auto___41430 < len__4531__auto___41429)){
args__4534__auto__.push((arguments[i__4532__auto___41430]));

var G__41431 = (i__4532__auto___41430 + (1));
i__4532__auto___41430 = G__41431;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return fif.core.dbg_eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

fif.core.dbg_eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,opts,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"step-max__41423__auto__","step-max__41423__auto__",892116138,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"step-max","step-max",-2042341837),null,(1),null)),(new cljs.core.List(null,(100),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.core","*default-stack*","fif.core/*default-stack*",298619527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","set-step-max","fif.stack-machine/set-step-max",548682185,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"step-max__41423__auto__","step-max__41423__auto__",892116138,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine.evaluators","eval-fn","fif.stack-machine.evaluators/eval-fn",-1450442074,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

fif.core.dbg_eval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.dbg_eval.cljs$lang$applyTo = (function (seq41424){
var G__41425 = cljs.core.first.call(null,seq41424);
var seq41424__$1 = cljs.core.next.call(null,seq41424);
var G__41426 = cljs.core.first.call(null,seq41424__$1);
var seq41424__$2 = cljs.core.next.call(null,seq41424__$1);
var G__41427 = cljs.core.first.call(null,seq41424__$2);
var seq41424__$3 = cljs.core.next.call(null,seq41424__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41425,G__41426,G__41427,seq41424__$3);
});

return null;
})()
;
fif.core.dbg_eval.cljs$lang$macro = true;

