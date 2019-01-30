// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.def');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.evaluators');
goog.require('fif.stack_machine.error_handling');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.stack_machine.verification');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.variable');
fif.def.wrap_code_eval = (function fif$def$wrap_code_eval(args){
return (function (sm){
return fif.stack_machine.set_step_num.call(null,fif.stack_machine.evaluators.eval_fn.call(null,sm,args),(0));
});
});
/**
 * Wraps a clojure function `f` which accepts `num-args`, and returns
 *   the function wrapped to be used in a stack machine.
 * 
 *   The returned function accepts `num-args` values on the stack, drops
 *   `num-args` after processing the wrapped function, and pushes the
 *   result of `(apply f args)` back onto the stack.
 *   
 *   Notes:
 * 
 *   This wrapper always returns a result on the stack. If you do not
 *   wish to return a result, use `fif.def/wrap-procedure-with-arity`
 *   instead.
 * 
 *   Examples:
 * 
 *   (defn add2 [x] (+ x 2))
 *   (def my-stack-machine (-> (fif.stack/new-stack-machine)
 *                          (fif.stack/set-word 'add2 (fif.def/wrap-function-with-arity 1 add2))))
 *   (fif.core/with-stack my-stack-machine
 *   (fif.core/reval 1 add2)) ;; => '(3)
 */
fif.def.wrap_function_with_arity = (function fif$def$wrap_function_with_arity(num_args,f){
return (function (sm){
if((!(fif.stack_machine.verification.stack_satisfies_arity_QMARK_.call(null,sm,num_args)))){
return fif.stack_machine.exceptions.raise_incorrect_arity_error.call(null,sm,num_args);
} else {
var args = cljs.core.take.call(null,num_args,fif.stack_machine.get_stack.call(null,sm));
var result = cljs.core.apply.call(null,f,cljs.core.reverse.call(null,args));
var new_stack = (function (){var $ = sm;
var $__$1 = fif.stack_machine.get_stack.call(null,$);
var $__$2 = cljs.core.drop.call(null,num_args,$__$1);
var $__$3 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null),$__$2);
return cljs.core.apply.call(null,cljs.core.list,$__$3);
})();
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stack.call(null,sm,new_stack));

}
});
});
/**
 * Wraps a clojure function `f` which accepts `num-args`, and returns
 *   the function wrapped to be used in a stack machine.
 * 
 *   The returned function accepts `num-args` values on the stack, drops
 *   `num-args` after processing the wrapped function.
 *   
 *   Notes:
 * 
 *   This wrapper never returns a result on the stack. If you wish to
 *   return a result, use `fif.def/wrap-function-with-arity` instead.
 * 
 *   Examples:
 * 
 *   (def val (atom nil))
 *   (defn set-val! [x] (reset! val x))
 *   (def my-stack-machine (-> (fif.stack/new-stack-machine)
 *                          (fif.stack/set-word 'set-val!
 *                                              (fif.def/wrap-procedure-with-arity 1 set-val!))))
 *   (fif.core/with-stack my-stack-machine
 *   (fif.core/reval 1 set-val!)
 *   (deref val)) ;; => 1
 *   
 */
fif.def.wrap_procedure_with_arity = (function fif$def$wrap_procedure_with_arity(num_args,f){
return (function (sm){
if((!(fif.stack_machine.verification.stack_satisfies_arity_QMARK_.call(null,sm,num_args)))){
return fif.stack_machine.exceptions.raise_incorrect_arity_error.call(null,sm,num_args);
} else {
var args = cljs.core.take.call(null,num_args,fif.stack_machine.get_stack.call(null,sm));
var _ = cljs.core.apply.call(null,f,cljs.core.reverse.call(null,args));
var new_stack = cljs.core.drop.call(null,num_args,fif.stack_machine.get_stack.call(null,sm));
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stack.call(null,sm,cljs.core.into.call(null,cljs.core.List.EMPTY,new_stack)));

}
});
});
var ret__4684__auto___40787 = (function (){
/**
 * Allows you to define functions that contain fif code, which can then
 *   be passed through a fif stack machine to be evaluated.
 * 
 *   Example:
 * 
 *   (defcode-eval import-add2-library
 *  fn add2
 *    + 2
 *  endfn)
 * 
 *   (def custom-stack-machine
 *  (-> fif.core/*default-stack*
 *      import-add2-library))
 * 
 *   (fif.core/with-stack custom-stack-machine
 *  (fif.core/reval 2 add2)) ;; => '(4)
 */
fif.def.defcode_eval = (function fif$def$defcode_eval(var_args){
var args__4647__auto__ = [];
var len__4641__auto___40788 = arguments.length;
var i__4642__auto___40789 = (0);
while(true){
if((i__4642__auto___40789 < len__4641__auto___40788)){
args__4647__auto__.push((arguments[i__4642__auto___40789]));

var G__40790 = (i__4642__auto___40789 + (1));
i__4642__auto___40789 = G__40790;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.def.defcode_eval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.def.defcode_eval.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-code-eval","fif.def/wrap-code-eval",-174255041,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,body,null,(1),null))))),null,(1),null))))),null,(1),null)))));
});

fif.def.defcode_eval.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.def.defcode_eval.cljs$lang$applyTo = (function (seq40783){
var G__40784 = cljs.core.first.call(null,seq40783);
var seq40783__$1 = cljs.core.next.call(null,seq40783);
var G__40785 = cljs.core.first.call(null,seq40783__$1);
var seq40783__$2 = cljs.core.next.call(null,seq40783__$1);
var G__40786 = cljs.core.first.call(null,seq40783__$2);
var seq40783__$3 = cljs.core.next.call(null,seq40783__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40784,G__40785,G__40786,seq40783__$3);
});

return null;
})()
;
fif.def.defcode_eval.cljs$lang$macro = true;

var ret__4684__auto___40791 = fif.def.defstack_func_0 = (function fif$def$defstack_func_0(_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-function-with-arity","fif.def/wrap-function-with-arity",-883711997,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
fif.def.defstack_func_0.cljs$lang$macro = true;

var ret__4684__auto___40792 = fif.def.defstack_func_1 = (function fif$def$defstack_func_1(_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-function-with-arity","fif.def/wrap-function-with-arity",-883711997,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
fif.def.defstack_func_1.cljs$lang$macro = true;

var ret__4684__auto___40793 = fif.def.defstack_func_2 = (function fif$def$defstack_func_2(_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-function-with-arity","fif.def/wrap-function-with-arity",-883711997,null),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
fif.def.defstack_func_2.cljs$lang$macro = true;

var ret__4684__auto___40794 = fif.def.defstack_func_3 = (function fif$def$defstack_func_3(_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-function-with-arity","fif.def/wrap-function-with-arity",-883711997,null),null,(1),null)),(new cljs.core.List(null,(3),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
fif.def.defstack_func_3.cljs$lang$macro = true;

var ret__4684__auto___40795 = fif.def.defstack_proc_0 = (function fif$def$defstack_proc_0(_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-procedure-with-arity","fif.def/wrap-procedure-with-arity",-477928721,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
fif.def.defstack_proc_0.cljs$lang$macro = true;

var ret__4684__auto___40796 = fif.def.defstack_proc_1 = (function fif$def$defstack_proc_1(_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-procedure-with-arity","fif.def/wrap-procedure-with-arity",-477928721,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
fif.def.defstack_proc_1.cljs$lang$macro = true;

var ret__4684__auto___40797 = fif.def.defstack_proc_2 = (function fif$def$defstack_proc_2(_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-procedure-with-arity","fif.def/wrap-procedure-with-arity",-477928721,null),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
fif.def.defstack_proc_2.cljs$lang$macro = true;

var ret__4684__auto___40798 = fif.def.defstack_proc_3 = (function fif$def$defstack_proc_3(_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("fif.def","wrap-procedure-with-arity","fif.def/wrap-procedure-with-arity",-477928721,null),null,(1),null)),(new cljs.core.List(null,(3),null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))));
});
fif.def.defstack_proc_3.cljs$lang$macro = true;

fif.def.wrap_variable = fif.stack_machine.variable.wrap_global_variable;
/**
 * Creates a new word variable in `sm` with the symbol name `wname` and
 *   with the value `value`. Optionally, you can include a docstring, and
 *   a group key.
 * 
 *   Notes:
 * 
 *   - `value` is automatically wrapped for you. This is not the case
 *   with `set-word-definition`.
 */
fif.def.set_word_variable = (function fif$def$set_word_variable(var_args){
var args__4647__auto__ = [];
var len__4641__auto___40806 = arguments.length;
var i__4642__auto___40807 = (0);
while(true){
if((i__4642__auto___40807 < len__4641__auto___40806)){
args__4647__auto__.push((arguments[i__4642__auto___40807]));

var G__40808 = (i__4642__auto___40807 + (1));
i__4642__auto___40807 = G__40808;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.def.set_word_variable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.def.set_word_variable.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,value,p__40803){
var map__40804 = p__40803;
var map__40804__$1 = (((((!((map__40804 == null))))?(((((map__40804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40804):map__40804);
var doc = cljs.core.get.call(null,map__40804__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var group = cljs.core.get.call(null,map__40804__$1,new cljs.core.Keyword(null,"group","group",582596132));
return fif.stack_machine.words.set_global_word_defn.call(null,sm,wname,fif.def.wrap_variable.call(null,value),new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),true);
});

fif.def.set_word_variable.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.def.set_word_variable.cljs$lang$applyTo = (function (seq40799){
var G__40800 = cljs.core.first.call(null,seq40799);
var seq40799__$1 = cljs.core.next.call(null,seq40799);
var G__40801 = cljs.core.first.call(null,seq40799__$1);
var seq40799__$2 = cljs.core.next.call(null,seq40799__$1);
var G__40802 = cljs.core.first.call(null,seq40799__$2);
var seq40799__$3 = cljs.core.next.call(null,seq40799__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40800,G__40801,G__40802,seq40799__$3);
});

/**
 * Creates a new word function in `sm` with the symbol name `wname` and
 *   with the word function defined by `wfunc`.
 * 
 *   Notes:
 * 
 *   - `wfunc` is a stack-machine function. Normal clojure functions can
 *   be turned into stack-machine functions via
 *   `wrap-function-with-arity` and `wrap-procedure-with-arity`.
 */
fif.def.set_word_function = (function fif$def$set_word_function(var_args){
var args__4647__auto__ = [];
var len__4641__auto___40816 = arguments.length;
var i__4642__auto___40817 = (0);
while(true){
if((i__4642__auto___40817 < len__4641__auto___40816)){
args__4647__auto__.push((arguments[i__4642__auto___40817]));

var G__40818 = (i__4642__auto___40817 + (1));
i__4642__auto___40817 = G__40818;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return fif.def.set_word_function.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

fif.def.set_word_function.cljs$core$IFn$_invoke$arity$variadic = (function (sm,wname,wfunc,p__40813){
var map__40814 = p__40813;
var map__40814__$1 = (((((!((map__40814 == null))))?(((((map__40814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40814):map__40814);
var doc = cljs.core.get.call(null,map__40814__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var group = cljs.core.get.call(null,map__40814__$1,new cljs.core.Keyword(null,"group","group",582596132));
return fif.stack_machine.words.set_global_word_defn.call(null,sm,wname,wfunc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),false,new cljs.core.Keyword(null,"variable?","variable?",-1902009648),false);
});

fif.def.set_word_function.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fif.def.set_word_function.cljs$lang$applyTo = (function (seq40809){
var G__40810 = cljs.core.first.call(null,seq40809);
var seq40809__$1 = cljs.core.next.call(null,seq40809);
var G__40811 = cljs.core.first.call(null,seq40809__$1);
var seq40809__$2 = cljs.core.next.call(null,seq40809__$1);
var G__40812 = cljs.core.first.call(null,seq40809__$2);
var seq40809__$3 = cljs.core.next.call(null,seq40809__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40810,G__40811,G__40812,seq40809__$3);
});

