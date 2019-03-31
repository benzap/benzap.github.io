// Compiled by ClojureScript 1.10.520 {}
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
website.fif_repl.prepl_output_fn = (function website$fif_repl$prepl_output_fn(fif_state,p__40163){
var map__40164 = p__40163;
var map__40164__$1 = (((((!((map__40164 == null))))?(((((map__40164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40164):map__40164);
var tag = cljs.core.get.call(null,map__40164__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__40164__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.swap_BANG_.call(null,fif_state,cljs.core.update,new cljs.core.Keyword(null,"output-string","output-string",-1945250064),((function (map__40164,map__40164__$1,tag,value){
return (function (p1__40161_SHARP_,p2__40162_SHARP_){
return cljs.core.reduce.call(null,cljs.core.str,p1__40161_SHARP_,p2__40162_SHARP_);
});})(map__40164,map__40164__$1,tag,value))
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

var temp__5720__auto___40166 = dom_node.querySelector("textarea");
if(cljs.core.truth_(temp__5720__auto___40166)){
var textarea_40167 = temp__5720__auto___40166;
textarea_40167.addEventListener("input",((function (textarea_40167,temp__5720__auto___40166,comp,dom_node,fif_state){
return (function (e){
cljs.core.swap_BANG_.call(null,fif_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),textarea_40167.value);

return website.fif_repl.evaluate_sm_fcn.call(null,fif_state);
});})(textarea_40167,temp__5720__auto___40166,comp,dom_node,fif_state))
);
} else {
}

return state;
})], null);
website.fif_repl.c_fif_repl = rum.core.build_defcs.call(null,(function (state,app_state){
var map__40168 = rum.core.react.call(null,app_state);
var map__40168__$1 = (((((!((map__40168 == null))))?(((((map__40168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40168):map__40168);
var input_string = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
var output_string = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"output-string","output-string",-1945250064));
var output_stack = cljs.core.get.call(null,map__40168__$1,new cljs.core.Keyword(null,"output-stack","output-stack",333652409));
return React.createElement("div",({"className": "fif-repl-component"}),sablono.interpreter.create_element.call(null,"textarea",({"spellCheck": false, "defaultValue": input_string})),(function (){var attrs40170 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_stack);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40170))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["output-stack"], null)], null),attrs40170)):({"className": "output-stack"})),((cljs.core.map_QMARK_.call(null,attrs40170))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40170)], null)));
})(),(function (){var attrs40171 = output_string;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs40171))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["output-string"], null)], null),attrs40171)):({"className": "output-string"})),((cljs.core.map_QMARK_.call(null,attrs40171))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40171)], null)));
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
var seq__40172 = cljs.core.seq.call(null,cljs.core.range.call(null,elems.length));
var chunk__40173 = null;
var count__40174 = (0);
var i__40175 = (0);
while(true){
if((i__40175 < count__40174)){
var elem_idx = cljs.core._nth.call(null,chunk__40173,i__40175);
var elem_40176 = (elems[elem_idx]);
website.fif_repl.mount_fif_repl.call(null,elem_40176);


var G__40177 = seq__40172;
var G__40178 = chunk__40173;
var G__40179 = count__40174;
var G__40180 = (i__40175 + (1));
seq__40172 = G__40177;
chunk__40173 = G__40178;
count__40174 = G__40179;
i__40175 = G__40180;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40172);
if(temp__5720__auto__){
var seq__40172__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40172__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40172__$1);
var G__40181 = cljs.core.chunk_rest.call(null,seq__40172__$1);
var G__40182 = c__4550__auto__;
var G__40183 = cljs.core.count.call(null,c__4550__auto__);
var G__40184 = (0);
seq__40172 = G__40181;
chunk__40173 = G__40182;
count__40174 = G__40183;
i__40175 = G__40184;
continue;
} else {
var elem_idx = cljs.core.first.call(null,seq__40172__$1);
var elem_40185 = (elems[elem_idx]);
website.fif_repl.mount_fif_repl.call(null,elem_40185);


var G__40186 = cljs.core.next.call(null,seq__40172__$1);
var G__40187 = null;
var G__40188 = (0);
var G__40189 = (0);
seq__40172 = G__40186;
chunk__40173 = G__40187;
count__40174 = G__40188;
i__40175 = G__40189;
continue;
}
} else {
return null;
}
}
break;
}
});
