// Compiled by ClojureScript 1.10.238 {}
goog.provide('website.console');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('rum.core');
goog.require('fif.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.error_handling');
goog.require('fif.def');
goog.require('website.repl_imports');
goog.require('website.utils');
goog.require('website.me');
website.console.console_open_QMARK_ = cljs.core.atom.call(null,false);
cljs.core.add_watch.call(null,website.console.console_open_QMARK_,new cljs.core.Keyword(null,"console","console",1228072057),(function (_key,_ref,old_value,new_value){
var temp__5457__auto__ = website.utils.query_select.call(null,"#overlay-console");
if(cljs.core.truth_(temp__5457__auto__)){
var elem = temp__5457__auto__;
if(cljs.core.truth_(new_value)){
var G__41323 = elem;
(G__41323["style"]["display"] = "block");

(G__41323["className"] = "anim-fade-in-normal");

return G__41323;
} else {
var G__41324 = elem;
(G__41324["style"]["display"] = "none");

(G__41324["className"] = "");

return G__41324;
}
} else {
return null;
}
}));
website.console.fif_logo_url = "https://i.imgur.com/fPZvN72.png";
website.console.youtube_never_gonna_give_you_up = "dQw4w9WgXcQ";
website.console.scroll_down = (function website$console$scroll_down(){
var temp__5457__auto__ = document.querySelector("#overlay-console");
if(cljs.core.truth_(temp__5457__auto__)){
var elem_console_container = temp__5457__auto__;
var scroll_max = (function (){var or__3922__auto__ = (elem_console_container["scrollTopMax"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (900000);
}
})();
(elem_console_container["scrollTop"] = scroll_max);

if(cljs.core.truth_((elem_console_container["scrollTo"]))){
return elem_console_container.scrollTo((0),scroll_max);
} else {
return null;
}
} else {
return null;
}
});
website.console.focus_input = (function website$console$focus_input(){
var elem = document.querySelector(".input-container > input");
return elem.focus();
});
website.console.open_console_BANG_ = (function website$console$open_console_BANG_(){
cljs.core.reset_BANG_.call(null,website.console.console_open_QMARK_,true);

website.console.scroll_down.call(null);

return website.console.focus_input.call(null);
});
website.console.openc = website.console.open_console_BANG_;
website.console.close_console_BANG_ = (function website$console$close_console_BANG_(){
return cljs.core.reset_BANG_.call(null,website.console.console_open_QMARK_,false);
});
website.console.toggle_console_BANG_ = (function website$console$toggle_console_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,website.console.console_open_QMARK_))){
return website.console.close_console_BANG_.call(null);
} else {
return website.console.open_console_BANG_.call(null);
}
});
/**
 * Custom fif error handler for stack errors
 */
website.console.stack_error_handler = (function website$console$stack_error_handler(sm,errobj){
website.console.insert_error_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(errobj)].join(''));

return fif.stack_machine.error_handling.set_error.call(null,sm,errobj);
});
/**
 * Custom fif error handler for system errors
 */
website.console.system_error_handler = (function website$console$system_error_handler(sm,ex){
website.console.insert_error_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''));

return fif.stack_machine.error_handling.set_error.call(null,sm,fif.stack_machine.error_handling.system_error.call(null,sm,ex,"System Error"));
});
website.console.website_sm = fif.stack_machine.set_step_max.call(null,fif.stack_machine.set_stack_error_handler.call(null,fif.stack_machine.set_system_error_handler.call(null,fif.def.set_word_function.call(null,website.repl_imports.import_super_secret_words.call(null,fif.stack_machine.enable_debug.call(null,fif.core._STAR_default_stack_STAR_)),new cljs.core.Symbol(null,"bye","bye",-836015872,null),fif.def.wrap_procedure_with_arity.call(null,(0),website.console.close_console_BANG_),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- ) Closes the terminal."),website.console.system_error_handler),website.console.stack_error_handler),(100000));
if(typeof website.console.app_state !== 'undefined'){
} else {
website.console.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846),website.console.website_sm,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),"",new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0),new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.list("never-gonna-give-you-up")], null));
}
website.console.set_input_BANG_ = (function website$console$set_input_BANG_(value){
return cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),value);
});
website.console.set_eval_BANG_ = (function website$console$set_eval_BANG_(value){
return null;
});
website.console.clear_output_BANG_ = (function website$console$clear_output_BANG_(){
return cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.PersistentVector.EMPTY);
});
website.console.image_element = rum.core.build_defc.call(null,(function (value,id){
return React.createElement("img",({"src": value, "key": id, "onLoad": (function (){
return website.console.scroll_down.call(null);
}), "className": "console-image"}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (value,id){
return id;
})], null)], null),"image-element");
website.console.youtube_embed_element = rum.core.build_defc.call(null,(function (value,id){
return React.createElement("div",({"key": id, "className": "console-youtube-video"}),React.createElement("iframe",({"src": ["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"?&autoplay=1"].join(''), "frameBorder": "0", "width": (622), "height": (350), "allow": "autoplay; encrypted-media", "allowFullScreen": (1), "className": "console-youtube-video-iframe"})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (value,id){
return id;
})], null)], null),"youtube-embed-element");
website.console.format_spaces = (function website$console$format_spaces(value){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,value,/  /,"\u00A0 "),/  /,"\u00A0 "),/^ /,"\u00A0");
});
if(typeof website.console._STAR_id !== 'undefined'){
} else {
website.console._STAR_id = cljs.core.atom.call(null,(0));
}
website.console.uid = (function website$console$uid(){
cljs.core.swap_BANG_.call(null,website.console._STAR_id,cljs.core.inc);

return ["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console._STAR_id))].join('');
});
website.console.insert_header_BANG_ = (function website$console$insert_header_BANG_(value){
var seq__41325 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41326 = null;
var count__41327 = (0);
var i__41328 = (0);
while(true){
if((i__41328 < count__41327)){
var value__$1 = cljs.core._nth.call(null,chunk__41326,i__41328);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__41329 = seq__41325;
var G__41330 = chunk__41326;
var G__41331 = count__41327;
var G__41332 = (i__41328 + (1));
seq__41325 = G__41329;
chunk__41326 = G__41330;
count__41327 = G__41331;
i__41328 = G__41332;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41325);
if(temp__5457__auto__){
var seq__41325__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41325__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41325__$1);
var G__41333 = cljs.core.chunk_rest.call(null,seq__41325__$1);
var G__41334 = c__4319__auto__;
var G__41335 = cljs.core.count.call(null,c__4319__auto__);
var G__41336 = (0);
seq__41325 = G__41333;
chunk__41326 = G__41334;
count__41327 = G__41335;
i__41328 = G__41336;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41325__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__41337 = cljs.core.next.call(null,seq__41325__$1);
var G__41338 = null;
var G__41339 = (0);
var G__41340 = (0);
seq__41325 = G__41337;
chunk__41326 = G__41338;
count__41327 = G__41339;
i__41328 = G__41340;
continue;
}
} else {
return null;
}
}
break;
}
});
website.console.insert_sub_header_BANG_ = (function website$console$insert_sub_header_BANG_(value){
var seq__41341 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41342 = null;
var count__41343 = (0);
var i__41344 = (0);
while(true){
if((i__41344 < count__41343)){
var value__$1 = cljs.core._nth.call(null,chunk__41342,i__41344);
var value_41345__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),new cljs.core.Keyword(null,"value","value",305978217),value_41345__$2], null));


var G__41346 = seq__41341;
var G__41347 = chunk__41342;
var G__41348 = count__41343;
var G__41349 = (i__41344 + (1));
seq__41341 = G__41346;
chunk__41342 = G__41347;
count__41343 = G__41348;
i__41344 = G__41349;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41341);
if(temp__5457__auto__){
var seq__41341__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41341__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41341__$1);
var G__41350 = cljs.core.chunk_rest.call(null,seq__41341__$1);
var G__41351 = c__4319__auto__;
var G__41352 = cljs.core.count.call(null,c__4319__auto__);
var G__41353 = (0);
seq__41341 = G__41350;
chunk__41342 = G__41351;
count__41343 = G__41352;
i__41344 = G__41353;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41341__$1);
var value_41354__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),new cljs.core.Keyword(null,"value","value",305978217),value_41354__$2], null));


var G__41355 = cljs.core.next.call(null,seq__41341__$1);
var G__41356 = null;
var G__41357 = (0);
var G__41358 = (0);
seq__41341 = G__41355;
chunk__41342 = G__41356;
count__41343 = G__41357;
i__41344 = G__41358;
continue;
}
} else {
return null;
}
}
break;
}
});
website.console.insert_output_BANG_ = (function website$console$insert_output_BANG_(value){
var seq__41359 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41360 = null;
var count__41361 = (0);
var i__41362 = (0);
while(true){
if((i__41362 < count__41361)){
var value__$1 = cljs.core._nth.call(null,chunk__41360,i__41362);
var value_41363__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"value","value",305978217),value_41363__$2], null));


var G__41364 = seq__41359;
var G__41365 = chunk__41360;
var G__41366 = count__41361;
var G__41367 = (i__41362 + (1));
seq__41359 = G__41364;
chunk__41360 = G__41365;
count__41361 = G__41366;
i__41362 = G__41367;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41359);
if(temp__5457__auto__){
var seq__41359__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41359__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41359__$1);
var G__41368 = cljs.core.chunk_rest.call(null,seq__41359__$1);
var G__41369 = c__4319__auto__;
var G__41370 = cljs.core.count.call(null,c__4319__auto__);
var G__41371 = (0);
seq__41359 = G__41368;
chunk__41360 = G__41369;
count__41361 = G__41370;
i__41362 = G__41371;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41359__$1);
var value_41372__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"value","value",305978217),value_41372__$2], null));


var G__41373 = cljs.core.next.call(null,seq__41359__$1);
var G__41374 = null;
var G__41375 = (0);
var G__41376 = (0);
seq__41359 = G__41373;
chunk__41360 = G__41374;
count__41361 = G__41375;
i__41362 = G__41376;
continue;
}
} else {
return null;
}
}
break;
}
});
website.console.insert_error_BANG_ = (function website$console$insert_error_BANG_(value){
var seq__41377 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41378 = null;
var count__41379 = (0);
var i__41380 = (0);
while(true){
if((i__41380 < count__41379)){
var value__$1 = cljs.core._nth.call(null,chunk__41378,i__41380);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__41381 = seq__41377;
var G__41382 = chunk__41378;
var G__41383 = count__41379;
var G__41384 = (i__41380 + (1));
seq__41377 = G__41381;
chunk__41378 = G__41382;
count__41379 = G__41383;
i__41380 = G__41384;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41377);
if(temp__5457__auto__){
var seq__41377__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41377__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41377__$1);
var G__41385 = cljs.core.chunk_rest.call(null,seq__41377__$1);
var G__41386 = c__4319__auto__;
var G__41387 = cljs.core.count.call(null,c__4319__auto__);
var G__41388 = (0);
seq__41377 = G__41385;
chunk__41378 = G__41386;
count__41379 = G__41387;
i__41380 = G__41388;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41377__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__41389 = cljs.core.next.call(null,seq__41377__$1);
var G__41390 = null;
var G__41391 = (0);
var G__41392 = (0);
seq__41377 = G__41389;
chunk__41378 = G__41390;
count__41379 = G__41391;
i__41380 = G__41392;
continue;
}
} else {
return null;
}
}
break;
}
});
website.console.insert_input_BANG_ = (function website$console$insert_input_BANG_(value){
var seq__41393 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41394 = null;
var count__41395 = (0);
var i__41396 = (0);
while(true){
if((i__41396 < count__41395)){
var value__$1 = cljs.core._nth.call(null,chunk__41394,i__41396);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj,value__$1);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));


var G__41397 = seq__41393;
var G__41398 = chunk__41394;
var G__41399 = count__41395;
var G__41400 = (i__41396 + (1));
seq__41393 = G__41397;
chunk__41394 = G__41398;
count__41395 = G__41399;
i__41396 = G__41400;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41393);
if(temp__5457__auto__){
var seq__41393__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41393__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41393__$1);
var G__41401 = cljs.core.chunk_rest.call(null,seq__41393__$1);
var G__41402 = c__4319__auto__;
var G__41403 = cljs.core.count.call(null,c__4319__auto__);
var G__41404 = (0);
seq__41393 = G__41401;
chunk__41394 = G__41402;
count__41395 = G__41403;
i__41396 = G__41404;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41393__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj,value__$1);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));


var G__41405 = cljs.core.next.call(null,seq__41393__$1);
var G__41406 = null;
var G__41407 = (0);
var G__41408 = (0);
seq__41393 = G__41405;
chunk__41394 = G__41406;
count__41395 = G__41407;
i__41396 = G__41408;
continue;
}
} else {
return null;
}
}
break;
}
});
website.console.insert_image_BANG_ = (function website$console$insert_image_BANG_(url){
return cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"value","value",305978217),url], null));
});
website.console.insert_youtube_BANG_ = (function website$console$insert_youtube_BANG_(youtube_id){
return cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"youtube-embed","youtube-embed",844391221),new cljs.core.Keyword(null,"value","value",305978217),youtube_id], null));
});
website.console._STAR_temp_output = cljs.core.atom.call(null,"");
/**
 * Main Prepl Output Function.
 */
website.console.prepl_output_fn = (function website$console$prepl_output_fn(app_state,p__41409){
var map__41410 = p__41409;
var map__41410__$1 = ((((!((map__41410 == null)))?(((((map__41410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41410):map__41410);
var tag = cljs.core.get.call(null,map__41410__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__41410__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__41412 = tag;
var G__41412__$1 = (((G__41412 instanceof cljs.core.Keyword))?G__41412.fqn:null);
switch (G__41412__$1) {
case "out":
if(clojure.string.ends_with_QMARK_.call(null,value,"\n")){
cljs.core.swap_BANG_.call(null,website.console._STAR_temp_output,cljs.core.str,value);

website.console.insert_output_BANG_.call(null,cljs.core.deref.call(null,website.console._STAR_temp_output));

return cljs.core.reset_BANG_.call(null,website.console._STAR_temp_output,"");
} else {
return cljs.core.swap_BANG_.call(null,website.console._STAR_temp_output,cljs.core.str,value);

}

break;
case "error":
return website.console.insert_error_BANG_.call(null,value);

break;
default:
return website.console.insert_error_BANG_.call(null,value);

}
});
/**
 * Stack Machine Evaluation
 */
website.console.evaluate_sm_fcn = (function website$console$evaluate_sm_fcn(app_state){
var map__41414 = cljs.core.deref.call(null,app_state);
var map__41414__$1 = ((((!((map__41414 == null)))?(((((map__41414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41414):map__41414);
var stack_machine = cljs.core.get.call(null,map__41414__$1,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846));
var input_string = cljs.core.get.call(null,map__41414__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846),fif.core.prepl_eval.call(null,stack_machine,input_string,cljs.core.partial.call(null,website.console.prepl_output_fn,app_state)));

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),"");
});
website.console.c_listing_output = rum.core.build_defc.call(null,(function (output_elements){
return React.createElement("div",({"className": "listing-output"}),cljs.core.into_array.call(null,(function (){var iter__4292__auto__ = (function website$console$iter__41416(s__41417){
return (new cljs.core.LazySeq(null,(function (){
var s__41417__$1 = s__41417;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41417__$1);
if(temp__5457__auto__){
var s__41417__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41417__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__41417__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__41419 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__41418 = (0);
while(true){
if((i__41418 < size__4291__auto__)){
var map__41420 = cljs.core._nth.call(null,c__4290__auto__,i__41418);
var map__41420__$1 = ((((!((map__41420 == null)))?(((((map__41420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41420):map__41420);
var type = cljs.core.get.call(null,map__41420__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__41420__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__41420__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__41419,sablono.interpreter.interpret.call(null,(function (){var G__41422 = type;
var G__41422__$1 = (((G__41422 instanceof cljs.core.Keyword))?G__41422.fqn:null);
switch (G__41422__$1) {
case "sub-header":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-sub-header-text",".console-text.console-sub-header-text",1396622357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),value], null);

break;
case "header":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-header-text",".console-text.console-header-text",-894778055),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),value], null);

break;
case "output":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-output-text",".console-text.console-output-text",1840780810),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),value], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-error-text",".console-text.console-error-text",1651370537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),value], null);

break;
case "input":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-input-text",".console-text.console-input-text",1810246223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41418,G__41422,G__41422__$1,map__41420,map__41420__$1,type,value,id,c__4290__auto__,size__4291__auto__,b__41419,s__41417__$2,temp__5457__auto__){
return (function (){
website.console.set_input_BANG_.call(null,value);

return website.console.focus_input.call(null);
});})(i__41418,G__41422,G__41422__$1,map__41420,map__41420__$1,type,value,id,c__4290__auto__,size__4291__auto__,b__41419,s__41417__$2,temp__5457__auto__))
], null),value], null);

break;
case "image":
return website.console.image_element.call(null,value,id);

break;
case "youtube-embed":
return website.console.youtube_embed_element.call(null,value,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41422__$1)].join('')));

}
})()));

var G__41427 = (i__41418 + (1));
i__41418 = G__41427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41419),website$console$iter__41416.call(null,cljs.core.chunk_rest.call(null,s__41417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41419),null);
}
} else {
var map__41423 = cljs.core.first.call(null,s__41417__$2);
var map__41423__$1 = ((((!((map__41423 == null)))?(((((map__41423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41423):map__41423);
var type = cljs.core.get.call(null,map__41423__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__41423__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__41423__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var G__41425 = type;
var G__41425__$1 = (((G__41425 instanceof cljs.core.Keyword))?G__41425.fqn:null);
switch (G__41425__$1) {
case "sub-header":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-sub-header-text",".console-text.console-sub-header-text",1396622357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),value], null);

break;
case "header":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-header-text",".console-text.console-header-text",-894778055),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),value], null);

break;
case "output":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-output-text",".console-text.console-output-text",1840780810),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),value], null);

break;
case "error":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-error-text",".console-text.console-error-text",1651370537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),value], null);

break;
case "input":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-input-text",".console-text.console-input-text",1810246223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__41425,G__41425__$1,map__41423,map__41423__$1,type,value,id,s__41417__$2,temp__5457__auto__){
return (function (){
website.console.set_input_BANG_.call(null,value);

return website.console.focus_input.call(null);
});})(G__41425,G__41425__$1,map__41423,map__41423__$1,type,value,id,s__41417__$2,temp__5457__auto__))
], null),value], null);

break;
case "image":
return website.console.image_element.call(null,value,id);

break;
case "youtube-embed":
return website.console.youtube_embed_element.call(null,value,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41425__$1)].join('')));

}
})()),website$console$iter__41416.call(null,cljs.core.rest.call(null,s__41417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,output_elements);
})()));
}),null,"c-listing-output");
website.console.evaluate_BANG_ = (function website$console$evaluate_BANG_(text){
website.console.insert_input_BANG_.call(null,text);

website.console.set_input_BANG_.call(null,text);

website.console.evaluate_sm_fcn.call(null,website.console.app_state);

return website.console.scroll_down.call(null);
});
website.console.handle_keydown = (function website$console$handle_keydown(event){
var key = event.key;
var console_input_text = new cljs.core.Keyword(null,"input-string","input-string",-1281740233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console.app_state));
if(((cljs.core._EQ_.call(null,key,"Enter")) && ((cljs.core.count.call(null,console_input_text) > (0))))){
return website.console.evaluate_BANG_.call(null,console_input_text);
} else {
return null;
}
});
website.console.mixin_autoscroll = (function website$console$mixin_autoscroll(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var elem_console_container = document.querySelector("#overlay-console");
elem_console_container.addEventListener("click",((function (elem_console_container){
return (function (e){
var elem = document.querySelector(".input-container > input");
if(cljs.core._EQ_.call(null,e.target,elem_console_container)){
return elem.focus();
} else {
return null;
}
});})(elem_console_container))
);

return state;
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
website.console.scroll_down.call(null);

return state;
})], null);
});
website.console.c_text_input = rum.core.build_defcs.call(null,(function (state,app_state){
var map__41431 = rum.core.react.call(null,app_state);
var map__41431__$1 = ((((!((map__41431 == null)))?(((((map__41431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41431):map__41431);
var input_string = cljs.core.get.call(null,map__41431__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
return React.createElement("div",({"className": "input-container"}),React.createElement("div",({"onClick": ((function (map__41431,map__41431__$1,input_string){
return (function (){
return website.console.focus_input.call(null);
});})(map__41431,map__41431__$1,input_string))
, "className": "input-arrow"}),">"),sablono.interpreter.create_element.call(null,"input",({"type": "text", "value": input_string, "onChange": ((function (map__41431,map__41431__$1,input_string){
return (function (p1__41429_SHARP_){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),p1__41429_SHARP_.target.value);
});})(map__41431,map__41431__$1,input_string))
, "onKeyDown": ((function (map__41431,map__41431__$1,input_string){
return (function (p1__41430_SHARP_){
return website.console.handle_keydown.call(null,p1__41430_SHARP_);
});})(map__41431,map__41431__$1,input_string))
})));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,website.console.mixin_autoscroll.call(null)], null),"c-text-input");
website.console.c_fif_console = rum.core.build_defcs.call(null,(function (state,app_state){
var map__41433 = rum.core.react.call(null,app_state);
var map__41433__$1 = ((((!((map__41433 == null)))?(((((map__41433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41433):map__41433);
var output_elements = cljs.core.get.call(null,map__41433__$1,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609));
return React.createElement("div",({"className": "fif-console-container"}),React.createElement("div",({"id": "close-console-button", "title": "Close Web Console", "onClick": ((function (map__41433,map__41433__$1,output_elements){
return (function (){
return website.console.close_console_BANG_.call(null);
});})(map__41433,map__41433__$1,output_elements))
}),"X"),sablono.interpreter.interpret.call(null,website.console.c_listing_output.call(null,output_elements)),sablono.interpreter.interpret.call(null,website.console.c_text_input.call(null,app_state)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-fif-console");
website.console.mount_fif_console = (function website$console$mount_fif_console(){
var elem = document.createElement("div");
var G__41435_41436 = elem;
G__41435_41436.setAttribute("id","overlay-console");


document.body.appendChild(elem);

return rum.core.mount.call(null,website.console.c_fif_console.call(null,website.console.app_state),elem);
});
website.console.attach_event_global_keypress_console = (function website$console$attach_event_global_keypress_console(){
return document.addEventListener("keydown",(function (e){
var key = e.key;
if(cljs.core._EQ_.call(null,key,"`")){
website.console.toggle_console_BANG_.call(null);

e.preventDefault();
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,website.console.console_open_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,key,"ArrowUp");
} else {
return and__3911__auto__;
}
})())){
website.console.focus_input.call(null);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-index","input-index",1765754144),cljs.core.inc);

website.console.set_input_BANG_.call(null,(function (){var $ = cljs.core.deref.call(null,website.console.app_state);
var $__$1 = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1($);
var $__$2 = cljs.core.take.call(null,new cljs.core.Keyword(null,"input-index","input-index",1765754144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console.app_state)),$__$1);
var $__$3 = cljs.core.last.call(null,$__$2);
var or__3922__auto__ = $__$3;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

e.preventDefault();
} else {
}

if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.deref.call(null,website.console.console_open_QMARK_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,key,"ArrowDown");
} else {
return and__3911__auto__;
}
})())){
website.console.focus_input.call(null);

if((new cljs.core.Keyword(null,"input-index","input-index",1765754144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console.app_state)) > (0))){
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-index","input-index",1765754144),cljs.core.dec);
} else {
}

website.console.set_input_BANG_.call(null,(function (){var $ = cljs.core.deref.call(null,website.console.app_state);
var $__$1 = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1($);
var $__$2 = cljs.core.take.call(null,new cljs.core.Keyword(null,"input-index","input-index",1765754144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console.app_state)),$__$1);
var $__$3 = cljs.core.last.call(null,$__$2);
var or__3922__auto__ = $__$3;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return e.preventDefault();
} else {
return null;
}
}));
});
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846),fif.def.set_word_variable.call(null,fif.def.set_word_variable.call(null,fif.def.set_word_variable.call(null,fif.def.set_word_variable.call(null,fif.def.set_word_function.call(null,fif.def.set_word_function.call(null,fif.def.set_word_variable.call(null,fif.def.set_word_function.call(null,fif.def.set_word_variable.call(null,fif.def.set_word_function.call(null,fif.def.set_word_function.call(null,fif.def.set_word_function.call(null,fif.def.set_word_function.call(null,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console.app_state)),new cljs.core.Symbol(null,"clear","clear",-777330810,null),fif.def.wrap_procedure_with_arity.call(null,(0),website.console.clear_output_BANG_),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- ) Clears the terminal console."),new cljs.core.Symbol(null,"cls","cls",370180952,null),fif.def.wrap_procedure_with_arity.call(null,(0),website.console.clear_output_BANG_),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- ) Clears the terminal console."),new cljs.core.Symbol(null,"image","image",1581806431,null),fif.def.wrap_procedure_with_arity.call(null,(1),website.console.insert_image_BANG_),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"( url -- ) Inserts an image into the console"),new cljs.core.Symbol(null,"youtube","youtube",-291829558,null),fif.def.wrap_procedure_with_arity.call(null,(1),website.console.insert_youtube_BANG_),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"( video-id -- ) Inserts a youtube embedded video into the console."),new cljs.core.Symbol(null,"fif-logo-url","fif-logo-url",1808984638,null),website.console.fif_logo_url,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"Fif Logo Hosted on imgur."),new cljs.core.Symbol(null,"fif-logo","fif-logo",-1089849377,null),fif.def.wrap_procedure_with_arity.call(null,(0),(function (){
return website.console.insert_image_BANG_.call(null,website.console.fif_logo_url);
})),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- ) Inserts the fif-logo into the console"),new cljs.core.Symbol(null,"never-gonna-give-you-up-video-id","never-gonna-give-you-up-video-id",-1266634147,null),"dQw4w9WgXcQ",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"Never gonna let you down."),new cljs.core.Symbol(null,"never-gonna-give-you-up","never-gonna-give-you-up",282205484,null),fif.def.wrap_procedure_with_arity.call(null,(0),(function (){
return website.console.insert_youtube_BANG_.call(null,"dQw4w9WgXcQ");
})),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- ) Inserts a very important video into youtube."),new cljs.core.Symbol(null,"pprint","pprint",-1434237374,null),fif.def.wrap_procedure_with_arity.call(null,(1),cljs.pprint.pprint),new cljs.core.Keyword(null,"doc","doc",1913296891),"( obj -- ) Pretty prints object structure to standard out."),new cljs.core.Symbol("my","info","my/info",1323465929,null),website.me.personal,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"benzap","benzap",-804767164),new cljs.core.Keyword(null,"doc","doc",1913296891),"Social Information about Ben Zaporzan."),new cljs.core.Symbol("my","work-experience","my/work-experience",1124236152,null),website.me.education,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"benzap","benzap",-804767164),new cljs.core.Keyword(null,"doc","doc",1913296891),"Education Information for Ben Zaporzan."),new cljs.core.Symbol("my","projects","my/projects",1275680772,null),website.me.projects,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"benzap","benzap",-804767164),new cljs.core.Keyword(null,"doc","doc",1913296891),"Project Information for Ben Zaporzan."),new cljs.core.Symbol("my","research-publications","my/research-publications",-493459286,null),website.me.publications,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"benzap","benzap",-804767164),new cljs.core.Keyword(null,"doc","doc",1913296891),"Research Publications for Ben Zaporzan."));
website.console.insert_header_BANG_.call(null,"Web Console - benzaporzan.me ");
website.console.insert_sub_header_BANG_.call(null,"open/close this console with the tilde (`) key");
website.console.insert_sub_header_BANG_.call(null,"  - 'help' shows helpful information");
website.console.insert_sub_header_BANG_.call(null,"  - 'bye' closes the console");
website.console.insert_sub_header_BANG_.call(null,"  - 'cls' clears the console");
website.console.insert_sub_header_BANG_.call(null," ");
website.console.evaluate_BANG_.call(null,"my/info pprint");
