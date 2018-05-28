// Compiled by ClojureScript 1.10.238 {}
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
website.fif_repl.prepl_output_fn = (function website$fif_repl$prepl_output_fn(fif_state,p__41327){
var map__41328 = p__41327;
var map__41328__$1 = ((((!((map__41328 == null)))?(((((map__41328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41328):map__41328);
var tag = cljs.core.get.call(null,map__41328__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__41328__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.swap_BANG_.call(null,fif_state,cljs.core.update,new cljs.core.Keyword(null,"output-string","output-string",-1945250064),((function (map__41328,map__41328__$1,tag,value){
return (function (p1__41325_SHARP_,p2__41326_SHARP_){
return cljs.core.reduce.call(null,cljs.core.str,p1__41325_SHARP_,p2__41326_SHARP_);
});})(map__41328,map__41328__$1,tag,value))
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

var temp__5457__auto___41330 = dom_node.querySelector("textarea");
if(cljs.core.truth_(temp__5457__auto___41330)){
var textarea_41331 = temp__5457__auto___41330;
textarea_41331.addEventListener("input",((function (textarea_41331,temp__5457__auto___41330,comp,dom_node,fif_state){
return (function (e){
cljs.core.swap_BANG_.call(null,fif_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),textarea_41331.value);

return website.fif_repl.evaluate_sm_fcn.call(null,fif_state);
});})(textarea_41331,temp__5457__auto___41330,comp,dom_node,fif_state))
);
} else {
}

return state;
})], null);
website.fif_repl.c_fif_repl = rum.core.build_defcs.call(null,(function (state,app_state){
var map__41332 = rum.core.react.call(null,app_state);
var map__41332__$1 = ((((!((map__41332 == null)))?(((((map__41332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41332):map__41332);
var input_string = cljs.core.get.call(null,map__41332__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
var output_string = cljs.core.get.call(null,map__41332__$1,new cljs.core.Keyword(null,"output-string","output-string",-1945250064));
var output_stack = cljs.core.get.call(null,map__41332__$1,new cljs.core.Keyword(null,"output-stack","output-stack",333652409));
return React.createElement("div",({"className": "fif-repl-component"}),sablono.interpreter.create_element.call(null,"textarea",({"spellCheck": false, "defaultValue": input_string})),(function (){var attrs41334 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_stack)].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41334))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["output-stack"], null)], null),attrs41334)):({"className": "output-stack"})),((cljs.core.map_QMARK_.call(null,attrs41334))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41334)], null)));
})(),(function (){var attrs41335 = output_string;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs41335))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["output-string"], null)], null),attrs41335)):({"className": "output-string"})),((cljs.core.map_QMARK_.call(null,attrs41335))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41335)], null)));
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
var seq__41336 = cljs.core.seq.call(null,cljs.core.range.call(null,elems.length));
var chunk__41337 = null;
var count__41338 = (0);
var i__41339 = (0);
while(true){
if((i__41339 < count__41338)){
var elem_idx = cljs.core._nth.call(null,chunk__41337,i__41339);
var elem_41340 = (elems[elem_idx]);
website.fif_repl.mount_fif_repl.call(null,elem_41340);


var G__41341 = seq__41336;
var G__41342 = chunk__41337;
var G__41343 = count__41338;
var G__41344 = (i__41339 + (1));
seq__41336 = G__41341;
chunk__41337 = G__41342;
count__41338 = G__41343;
i__41339 = G__41344;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41336);
if(temp__5457__auto__){
var seq__41336__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41336__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41336__$1);
var G__41345 = cljs.core.chunk_rest.call(null,seq__41336__$1);
var G__41346 = c__4319__auto__;
var G__41347 = cljs.core.count.call(null,c__4319__auto__);
var G__41348 = (0);
seq__41336 = G__41345;
chunk__41337 = G__41346;
count__41338 = G__41347;
i__41339 = G__41348;
continue;
} else {
var elem_idx = cljs.core.first.call(null,seq__41336__$1);
var elem_41349 = (elems[elem_idx]);
website.fif_repl.mount_fif_repl.call(null,elem_41349);


var G__41350 = cljs.core.next.call(null,seq__41336__$1);
var G__41351 = null;
var G__41352 = (0);
var G__41353 = (0);
seq__41336 = G__41350;
chunk__41337 = G__41351;
count__41338 = G__41352;
i__41339 = G__41353;
continue;
}
} else {
return null;
}
}
break;
}
});
