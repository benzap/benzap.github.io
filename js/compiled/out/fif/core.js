// Compiled by ClojureScript 1.10.238 {}
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
var G__41269 = arguments.length;
switch (G__41269) {
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
var ret__4533__auto___41275 = (function (){
/**
 * Used to rebind the `*default-stack*` for use with `eval`, `seval` and
 *   `reval`
 */
fif.core.with_stack = (function fif$core$with_stack(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41276 = arguments.length;
var i__4500__auto___41277 = (0);
while(true){
if((i__4500__auto___41277 < len__4499__auto___41276)){
args__4502__auto__.push((arguments[i__4500__auto___41277]));

var G__41278 = (i__4500__auto___41277 + (1));
i__4500__auto___41277 = G__41278;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.core.with_stack.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.core.with_stack.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","*default-stack*","fif.core/*default-stack*",298619527,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)))))),null,(1),null)),body)));
});

fif.core.with_stack.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.with_stack.cljs$lang$applyTo = (function (seq41271){
var G__41272 = cljs.core.first.call(null,seq41271);
var seq41271__$1 = cljs.core.next.call(null,seq41271);
var G__41273 = cljs.core.first.call(null,seq41271__$1);
var seq41271__$2 = cljs.core.next.call(null,seq41271__$1);
var G__41274 = cljs.core.first.call(null,seq41271__$2);
var seq41271__$3 = cljs.core.next.call(null,seq41271__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41272,G__41273,G__41274,seq41271__$3);
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
var ret__4533__auto___41282 = (function (){
/**
 * Evaluate the values provided in `body` within the fif
 * stackmachine, and returns the stackmachine
 */
fif.core.eval = (function fif$core$eval(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41283 = arguments.length;
var i__4500__auto___41284 = (0);
while(true){
if((i__4500__auto___41284 < len__4499__auto___41283)){
args__4502__auto__.push((arguments[i__4500__auto___41284]));

var G__41285 = (i__4500__auto___41284 + (1));
i__4500__auto___41284 = G__41285;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.core.eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.core.eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.core.eval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.eval.cljs$lang$applyTo = (function (seq41279){
var G__41280 = cljs.core.first.call(null,seq41279);
var seq41279__$1 = cljs.core.next.call(null,seq41279);
var G__41281 = cljs.core.first.call(null,seq41279__$1);
var seq41279__$2 = cljs.core.next.call(null,seq41279__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41280,G__41281,seq41279__$2);
});

return null;
})()
;
fif.core.eval.cljs$lang$macro = true;

fif.core.ieval_fn = (function fif$core$ieval_fn(sm,args){
return fif.stack_machine.evaluators.eval_fn.call(null,sm,args);
});
var ret__4533__auto___41290 = (function (){
/**
 * Evaluate `body` forms within the provided stack-machine,
 *   `sm`. Returns the stack-machine after evaluation.
 */
fif.core.ieval = (function fif$core$ieval(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41291 = arguments.length;
var i__4500__auto___41292 = (0);
while(true){
if((i__4500__auto___41292 < len__4499__auto___41291)){
args__4502__auto__.push((arguments[i__4500__auto___41292]));

var G__41293 = (i__4500__auto___41292 + (1));
i__4500__auto___41292 = G__41293;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.core.ieval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.core.ieval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sm,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","ieval-fn","fif.core/ieval-fn",1184213547,null),null,(1),null)),(new cljs.core.List(null,sm,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null)))));
});

fif.core.ieval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.ieval.cljs$lang$applyTo = (function (seq41286){
var G__41287 = cljs.core.first.call(null,seq41286);
var seq41286__$1 = cljs.core.next.call(null,seq41286);
var G__41288 = cljs.core.first.call(null,seq41286__$1);
var seq41286__$2 = cljs.core.next.call(null,seq41286__$1);
var G__41289 = cljs.core.first.call(null,seq41286__$2);
var seq41286__$3 = cljs.core.next.call(null,seq41286__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41287,G__41288,G__41289,seq41286__$3);
});

return null;
})()
;
fif.core.ieval.cljs$lang$macro = true;

var ret__4533__auto___41297 = (function (){
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
var args__4502__auto__ = [];
var len__4499__auto___41298 = arguments.length;
var i__4500__auto___41299 = (0);
while(true){
if((i__4500__auto___41299 < len__4499__auto___41298)){
args__4502__auto__.push((arguments[i__4500__auto___41299]));

var G__41300 = (i__4500__auto___41299 + (1));
i__4500__auto___41299 = G__41300;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.core.seval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.core.seval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","get-stack","fif.stack-machine/get-stack",-1921152297,null),null,(1),null)))));
});

fif.core.seval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.seval.cljs$lang$applyTo = (function (seq41294){
var G__41295 = cljs.core.first.call(null,seq41294);
var seq41294__$1 = cljs.core.next.call(null,seq41294);
var G__41296 = cljs.core.first.call(null,seq41294__$1);
var seq41294__$2 = cljs.core.next.call(null,seq41294__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41295,G__41296,seq41294__$2);
});

return null;
})()
;
fif.core.seval.cljs$lang$macro = true;

var ret__4533__auto___41304 = (function (){
/**
 * Evaluate the values provided in `body` within the fif stackmachine,
 *   and return the main stack as a result.
 */
fif.core.reval = (function fif$core$reval(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41305 = arguments.length;
var i__4500__auto___41306 = (0);
while(true){
if((i__4500__auto___41306 < len__4499__auto___41305)){
args__4502__auto__.push((arguments[i__4500__auto___41306]));

var G__41307 = (i__4500__auto___41306 + (1));
i__4500__auto___41306 = G__41307;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return fif.core.reval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

fif.core.reval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.core","eval-fn","fif.core/eval-fn",1454065431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","get-stack","fif.stack-machine/get-stack",-1921152297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reverse","cljs.core/reverse",1527953530,null),null,(1),null)))));
});

fif.core.reval.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
fif.core.reval.cljs$lang$applyTo = (function (seq41301){
var G__41302 = cljs.core.first.call(null,seq41301);
var seq41301__$1 = cljs.core.next.call(null,seq41301);
var G__41303 = cljs.core.first.call(null,seq41301__$1);
var seq41301__$2 = cljs.core.next.call(null,seq41301__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41302,G__41303,seq41301__$2);
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
var ret__4533__auto___41313 = (function (){
/**
 * Debugging tool. By default enables the step inhibitor.
 */
fif.core.dbg_eval = (function fif$core$dbg_eval(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41314 = arguments.length;
var i__4500__auto___41315 = (0);
while(true){
if((i__4500__auto___41315 < len__4499__auto___41314)){
args__4502__auto__.push((arguments[i__4500__auto___41315]));

var G__41316 = (i__4500__auto___41315 + (1));
i__4500__auto___41315 = G__41316;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return fif.core.dbg_eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

fif.core.dbg_eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,opts,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"step-max__41308__auto__","step-max__41308__auto__",430024816,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"step-max","step-max",-2042341837),null,(1),null)),(new cljs.core.List(null,(100),null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("fif.core","*default-stack*","fif.core/*default-stack*",298619527,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine","set-step-max","fif.stack-machine/set-step-max",548682185,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"step-max__41308__auto__","step-max__41308__auto__",430024816,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.stack-machine.evaluators","eval-fn","fif.stack-machine.evaluators/eval-fn",-1450442074,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

fif.core.dbg_eval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.core.dbg_eval.cljs$lang$applyTo = (function (seq41309){
var G__41310 = cljs.core.first.call(null,seq41309);
var seq41309__$1 = cljs.core.next.call(null,seq41309);
var G__41311 = cljs.core.first.call(null,seq41309__$1);
var seq41309__$2 = cljs.core.next.call(null,seq41309__$1);
var G__41312 = cljs.core.first.call(null,seq41309__$2);
var seq41309__$3 = cljs.core.next.call(null,seq41309__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41310,G__41311,G__41312,seq41309__$3);
});

return null;
})()
;
fif.core.dbg_eval.cljs$lang$macro = true;

/**
 * Main Execution opens a commandline repl of the *default-stack*
 */
fif.core._main = (function fif$core$_main(var_args){
var args__4502__auto__ = [];
var len__4499__auto___41318 = arguments.length;
var i__4500__auto___41319 = (0);
while(true){
if((i__4500__auto___41319 < len__4499__auto___41318)){
args__4502__auto__.push((arguments[i__4500__auto___41319]));

var G__41320 = (i__4500__auto___41319 + (1));
i__4500__auto___41319 = G__41320;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return fif.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

fif.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return fif.core.repl.call(null);
});

fif.core._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fif.core._main.cljs$lang$applyTo = (function (seq41317){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41317));
});

