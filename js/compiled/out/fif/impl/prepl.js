// Compiled by ClojureScript 1.10.439 {}
goog.provide('fif.impl.prepl');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.evaluators');
/**
 * Programmable Repl Evaluation for clojure(script). Function is useful
 *   for a full repl implementation, since the output can be processed
 *   via `output-fn`.
 * 
 * 
 * Keyword Arguments:
 *   
 * sm -- Stack-machine
 * 
 * input-string -- String representation of fif form to be evaluated.
 * 
 * output-fn -- Function of the form (fn [{:keys [tag value]}]).
 * 
 * 
 * Output Function Key Arguments:
 * 
 * tag -- either :error from *err* output, :out from *out* output.
 * 
 * value -- string value of the presented tag.
 * 
 * 
 * Return Value:
 *   
 * Returns an updated stack-machine after the `input-string` has been evaluated.
 * 
 * Notes:
 * 
 * - Standard Out is flushed after evaluation, however, while
 *   evaluating, output-fn will get called preceding any newline
 *   delimited string within the print writer.
 * 
 */
fif.impl.prepl.prepl_eval = (function fif$impl$prepl$prepl_eval(sm,input_string,output_fn){
var _STAR_print_newline_STAR__orig_val__42304 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42305 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42306 = true;
var _STAR_print_fn_STAR__temp_val__42307 = ((function (_STAR_print_newline_STAR__orig_val__42304,_STAR_print_fn_STAR__orig_val__42305,_STAR_print_newline_STAR__temp_val__42306){
return (function (p1__42303_SHARP_){
return output_fn.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"value","value",305978217),p1__42303_SHARP_], null));
});})(_STAR_print_newline_STAR__orig_val__42304,_STAR_print_fn_STAR__orig_val__42305,_STAR_print_newline_STAR__temp_val__42306))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42306;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42307;

try{var evaled_sm = fif.stack_machine.evaluators.eval_string.call(null,sm,input_string);
cljs.core.flush.call(null);

return evaled_sm;
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42305;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42304;
}});
