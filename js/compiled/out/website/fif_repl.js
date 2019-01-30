// Compiled by ClojureScript 1.10.439 {}
goog.provide('website.fif_repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rum.core');
goog.require('fif.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.error_handling');
goog.require('website.repl_imports');
/**
 * Custom fif error handler for stack errors
 */
website.fif_repl.stack_error_handler = (function website$fif_repl$stack_error_handler(sm,errobj){
return fif.stack_machine.error_handling.set_error.call(null,sm,errobj);
});
/**
 * Custom fif error handler for system errors
 */
website.fif_repl.system_error_handler = (function website$fif_repl$system_error_handler(sm,ex){
cljs.core.println.call(null,ex);

return fif.stack_machine.error_handling.set_error.call(null,sm,fif.stack_machine.error_handling.system_error.call(null,sm,ex,"System Error"));
});
website.fif_repl.website_sm = fif.stack_machine.set_step_max.call(null,fif.stack_machine.set_stack_error_handler.call(null,fif.stack_machine.set_system_error_handler.call(null,website.repl_imports.import_super_secret_words.call(null,fif.stack_machine.enable_debug.call(null,fif.core._STAR_default_stack_STAR_)),website.fif_repl.system_error_handler),website.fif_repl.stack_error_handler),(10000));
/**
 * Correctly format newlines within <div>'s placed in markdown. Super
 *   Hacky.
 */
website.fif_repl.format_inner_html = (function website$fif_repl$format_inner_html(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.subs.call(null,s.innerHTML,(1)),/<p>/,""),/<\/p>/,"\n"),/_ /,"\n");
});
/**
 * Main Prepl Output Function.
 */
website.fif_repl.prepl_output_fn = (function website$fif_repl$prepl_output_fn(fif_state,p__42574){
var map__42575 = p__42574;
var map__42575__$1 = (((((!((map__42575 == null))))?(((((map__42575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42575):map__42575);
var tag = cljs.core.get.call(null,map__42575__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__42575__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.swap_BANG_.call(null,fif_state,cljs.core.update,new cljs.core.Keyword(null,"output-string","output-string",-1945250064),((function (map__42575,map__42575__$1,tag,value){
return (function (p1__42572_SHARP_,p2__42573_SHARP_){
return cljs.core.reduce.call(null,cljs.core.str,p1__42572_SHARP_,p2__42573_SHARP_);
});})(map__42575,map__42575__$1,tag,value))
,value);
});
/**
 * Stack Machine Evaluation
 */
website.fif_repl.evaluate_sm_fcn = (function website$fif_repl$evaluate_sm_fcn(fif_state){
cljs.core.swap_BANG_.call(null,fif_state,cljs.core.assoc,new cljs.core.Keyword(null,"output-string","output-string",-1945250064),"");

var sm = fif.core.prepl_eval.call(null,website.fif_repl.website_sm,new cljs.core.Keyword(null,"input-string","input-string",-1281740233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fif_state)),cljs.core.partial.call(null,website.fif_repl.prepl_output_fn,fif_state));
var main_stack = cljs.core.reverse.call(null,fif.core.get_stack.call(null,sm));
return cljs.core.swap_BANG_.call(null,fif_state,cljs.core.assoc,new cljs.core.Keyword(null,"output-stack","output-stack",333652409),main_stack);
});
/**
 * Rum Mixin for stack-machine evaluation after mount.
 *   
 *   Also includes textarea 'input' event to re-evaluate after change.
 */
website.fif_repl.mixin_evaluate_fif_repl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var dom_node = ReactDOM.findDOMNode(comp);
var fif_state = cljs.core.first.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
website.fif_repl.evaluate_sm_fcn.call(null,fif_state);

var temp__5720__auto___42577 = dom_node.querySelector("textarea");
if(cljs.core.truth_(temp__5720__auto___42577)){
var textarea_42578 = temp__5720__auto___42577;
textarea_42578.addEventListener("input",((function (textarea_42578,temp__5720__auto___42577,comp,dom_node,fif_state){
return (function (e){
cljs.core.swap_BANG_.call(null,fif_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),textarea_42578.value);

return website.fif_repl.evaluate_sm_fcn.call(null,fif_state);
});})(textarea_42578,temp__5720__auto___42577,comp,dom_node,fif_state))
);
} else {
}

return state;
})], null);
website.fif_repl.c_fif_repl = rum.core.build_defcs.call(null,(function (state,app_state){
var map__42579 = rum.core.react.call(null,app_state);
var map__42579__$1 = (((((!((map__42579 == null))))?(((((map__42579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42579):map__42579);
var input_string = cljs.core.get.call(null,map__42579__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
var output_string = cljs.core.get.call(null,map__42579__$1,new cljs.core.Keyword(null,"output-string","output-string",-1945250064));
var output_stack = cljs.core.get.call(null,map__42579__$1,new cljs.core.Keyword(null,"output-stack","output-stack",333652409));
return React.createElement("div",({"className": "fif-repl-component"}),sablono.interpreter.create_element.call(null,"textarea",({"spellCheck": false, "defaultValue": input_string})),(function (){var attrs42581 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_stack);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42581))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["output-stack"], null)], null),attrs42581)):({"className": "output-stack"})),((cljs.core.map_QMARK_.call(null,attrs42581))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42581)], null)));
})(),(function (){var attrs42582 = output_string;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42582))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["output-string"], null)], null),attrs42582)):({"className": "output-string"})),((cljs.core.map_QMARK_.call(null,attrs42582))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42582)], null)));
})());
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,website.fif_repl.mixin_evaluate_fif_repl], null),"c-fif-repl");
/**
 * Turns the given element into a fif-repl. element is assumed to have
 *   <p></p> separated paragraphs as fif script. This is a little hacky,
 *   since i'm placing the <div> elements in a markdown parser. Would
 *   probably be less hacky outside of a markdown parser.
 */
website.fif_repl.mount_fif_repl = (function website$fif_repl$mount_fif_repl(elem){
var fif_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"elem","elem",618631056),elem,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),website.fif_repl.format_inner_html.call(null,elem),new cljs.core.Keyword(null,"output-string","output-string",-1945250064),"",new cljs.core.Keyword(null,"output-stack","output-stack",333652409),cljs.core.list((2),(2),new cljs.core.Symbol(null,"+","+",-740910886,null))], null));
return rum.core.mount.call(null,website.fif_repl.c_fif_repl.call(null,fif_state),elem);
});
/**
 * Turns all elements with 'selector' into a fif-repl.
 */
website.fif_repl.enable_fif_repls = (function website$fif_repl$enable_fif_repls(selector){
var elems = document.querySelectorAll(selector);
var seq__42583 = cljs.core.seq.call(null,cljs.core.range.call(null,elems.length));
var chunk__42584 = null;
var count__42585 = (0);
var i__42586 = (0);
while(true){
if((i__42586 < count__42585)){
var elem_idx = cljs.core._nth.call(null,chunk__42584,i__42586);
var elem_42587 = (elems[elem_idx]);
website.fif_repl.mount_fif_repl.call(null,elem_42587);


var G__42588 = seq__42583;
var G__42589 = chunk__42584;
var G__42590 = count__42585;
var G__42591 = (i__42586 + (1));
seq__42583 = G__42588;
chunk__42584 = G__42589;
count__42585 = G__42590;
i__42586 = G__42591;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42583);
if(temp__5720__auto__){
var seq__42583__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42583__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42583__$1);
var G__42592 = cljs.core.chunk_rest.call(null,seq__42583__$1);
var G__42593 = c__4461__auto__;
var G__42594 = cljs.core.count.call(null,c__4461__auto__);
var G__42595 = (0);
seq__42583 = G__42592;
chunk__42584 = G__42593;
count__42585 = G__42594;
i__42586 = G__42595;
continue;
} else {
var elem_idx = cljs.core.first.call(null,seq__42583__$1);
var elem_42596 = (elems[elem_idx]);
website.fif_repl.mount_fif_repl.call(null,elem_42596);


var G__42597 = cljs.core.next.call(null,seq__42583__$1);
var G__42598 = null;
var G__42599 = (0);
var G__42600 = (0);
seq__42583 = G__42597;
chunk__42584 = G__42598;
count__42585 = G__42599;
i__42586 = G__42600;
continue;
}
} else {
return null;
}
}
break;
}
});
