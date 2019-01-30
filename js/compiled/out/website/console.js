// Compiled by ClojureScript 1.10.439 {}
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
var temp__5720__auto__ = website.utils.query_select.call(null,"#overlay-console");
if(cljs.core.truth_(temp__5720__auto__)){
var elem = temp__5720__auto__;
if(cljs.core.truth_(new_value)){
var G__42456 = elem;
(G__42456["style"]["display"] = "block");

(G__42456["className"] = "anim-fade-in-normal");

return G__42456;
} else {
var G__42457 = elem;
(G__42457["style"]["display"] = "none");

(G__42457["className"] = "");

return G__42457;
}
} else {
return null;
}
}));
website.console.fif_logo_url = "https://i.imgur.com/fPZvN72.png";
website.console.youtube_never_gonna_give_you_up = "dQw4w9WgXcQ";
website.console.scroll_down = (function website$console$scroll_down(){
var temp__5720__auto__ = document.querySelector("#overlay-console");
if(cljs.core.truth_(temp__5720__auto__)){
var elem_console_container = temp__5720__auto__;
var scroll_max = (function (){var or__4047__auto__ = (elem_console_container["scrollTopMax"]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
website.console.insert_error_BANG_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(errobj));

return fif.stack_machine.error_handling.set_error.call(null,sm,errobj);
});
/**
 * Custom fif error handler for system errors
 */
website.console.system_error_handler = (function website$console$system_error_handler(sm,ex){
website.console.insert_error_BANG_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex));

return fif.stack_machine.error_handling.set_error.call(null,sm,fif.stack_machine.error_handling.system_error.call(null,sm,ex,"System Error"));
});
website.console.website_sm = fif.stack_machine.set_step_max.call(null,fif.stack_machine.set_stack_error_handler.call(null,fif.stack_machine.set_system_error_handler.call(null,fif.def.set_word_function.call(null,website.repl_imports.import_super_secret_words.call(null,fif.stack_machine.enable_debug.call(null,fif.core._STAR_default_stack_STAR_)),new cljs.core.Symbol(null,"bye","bye",-836015872,null),fif.def.wrap_procedure_with_arity.call(null,(0),website.console.close_console_BANG_),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- ) Closes the terminal."),website.console.system_error_handler),website.console.stack_error_handler),(100000));
if((typeof website !== 'undefined') && (typeof website.console !== 'undefined') && (typeof website.console.app_state !== 'undefined')){
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
if((typeof website !== 'undefined') && (typeof website.console !== 'undefined') && (typeof website.console._STAR_id !== 'undefined')){
} else {
website.console._STAR_id = cljs.core.atom.call(null,(0));
}
website.console.uid = (function website$console$uid(){
cljs.core.swap_BANG_.call(null,website.console._STAR_id,cljs.core.inc);

return ["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console._STAR_id))].join('');
});
website.console.insert_header_BANG_ = (function website$console$insert_header_BANG_(value){
var seq__42458 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__42459 = null;
var count__42460 = (0);
var i__42461 = (0);
while(true){
if((i__42461 < count__42460)){
var value__$1 = cljs.core._nth.call(null,chunk__42459,i__42461);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__42462 = seq__42458;
var G__42463 = chunk__42459;
var G__42464 = count__42460;
var G__42465 = (i__42461 + (1));
seq__42458 = G__42462;
chunk__42459 = G__42463;
count__42460 = G__42464;
i__42461 = G__42465;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42458);
if(temp__5720__auto__){
var seq__42458__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42458__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42458__$1);
var G__42466 = cljs.core.chunk_rest.call(null,seq__42458__$1);
var G__42467 = c__4461__auto__;
var G__42468 = cljs.core.count.call(null,c__4461__auto__);
var G__42469 = (0);
seq__42458 = G__42466;
chunk__42459 = G__42467;
count__42460 = G__42468;
i__42461 = G__42469;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__42458__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__42470 = cljs.core.next.call(null,seq__42458__$1);
var G__42471 = null;
var G__42472 = (0);
var G__42473 = (0);
seq__42458 = G__42470;
chunk__42459 = G__42471;
count__42460 = G__42472;
i__42461 = G__42473;
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
var seq__42474 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__42475 = null;
var count__42476 = (0);
var i__42477 = (0);
while(true){
if((i__42477 < count__42476)){
var value__$1 = cljs.core._nth.call(null,chunk__42475,i__42477);
var value_42478__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),new cljs.core.Keyword(null,"value","value",305978217),value_42478__$2], null));


var G__42479 = seq__42474;
var G__42480 = chunk__42475;
var G__42481 = count__42476;
var G__42482 = (i__42477 + (1));
seq__42474 = G__42479;
chunk__42475 = G__42480;
count__42476 = G__42481;
i__42477 = G__42482;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42474);
if(temp__5720__auto__){
var seq__42474__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42474__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42474__$1);
var G__42483 = cljs.core.chunk_rest.call(null,seq__42474__$1);
var G__42484 = c__4461__auto__;
var G__42485 = cljs.core.count.call(null,c__4461__auto__);
var G__42486 = (0);
seq__42474 = G__42483;
chunk__42475 = G__42484;
count__42476 = G__42485;
i__42477 = G__42486;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__42474__$1);
var value_42487__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),new cljs.core.Keyword(null,"value","value",305978217),value_42487__$2], null));


var G__42488 = cljs.core.next.call(null,seq__42474__$1);
var G__42489 = null;
var G__42490 = (0);
var G__42491 = (0);
seq__42474 = G__42488;
chunk__42475 = G__42489;
count__42476 = G__42490;
i__42477 = G__42491;
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
var seq__42492 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__42493 = null;
var count__42494 = (0);
var i__42495 = (0);
while(true){
if((i__42495 < count__42494)){
var value__$1 = cljs.core._nth.call(null,chunk__42493,i__42495);
var value_42496__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"value","value",305978217),value_42496__$2], null));


var G__42497 = seq__42492;
var G__42498 = chunk__42493;
var G__42499 = count__42494;
var G__42500 = (i__42495 + (1));
seq__42492 = G__42497;
chunk__42493 = G__42498;
count__42494 = G__42499;
i__42495 = G__42500;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42492);
if(temp__5720__auto__){
var seq__42492__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42492__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42492__$1);
var G__42501 = cljs.core.chunk_rest.call(null,seq__42492__$1);
var G__42502 = c__4461__auto__;
var G__42503 = cljs.core.count.call(null,c__4461__auto__);
var G__42504 = (0);
seq__42492 = G__42501;
chunk__42493 = G__42502;
count__42494 = G__42503;
i__42495 = G__42504;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__42492__$1);
var value_42505__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"value","value",305978217),value_42505__$2], null));


var G__42506 = cljs.core.next.call(null,seq__42492__$1);
var G__42507 = null;
var G__42508 = (0);
var G__42509 = (0);
seq__42492 = G__42506;
chunk__42493 = G__42507;
count__42494 = G__42508;
i__42495 = G__42509;
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
var seq__42510 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__42511 = null;
var count__42512 = (0);
var i__42513 = (0);
while(true){
if((i__42513 < count__42512)){
var value__$1 = cljs.core._nth.call(null,chunk__42511,i__42513);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__42514 = seq__42510;
var G__42515 = chunk__42511;
var G__42516 = count__42512;
var G__42517 = (i__42513 + (1));
seq__42510 = G__42514;
chunk__42511 = G__42515;
count__42512 = G__42516;
i__42513 = G__42517;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42510);
if(temp__5720__auto__){
var seq__42510__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42510__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42510__$1);
var G__42518 = cljs.core.chunk_rest.call(null,seq__42510__$1);
var G__42519 = c__4461__auto__;
var G__42520 = cljs.core.count.call(null,c__4461__auto__);
var G__42521 = (0);
seq__42510 = G__42518;
chunk__42511 = G__42519;
count__42512 = G__42520;
i__42513 = G__42521;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__42510__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__42522 = cljs.core.next.call(null,seq__42510__$1);
var G__42523 = null;
var G__42524 = (0);
var G__42525 = (0);
seq__42510 = G__42522;
chunk__42511 = G__42523;
count__42512 = G__42524;
i__42513 = G__42525;
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
var seq__42526 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__42527 = null;
var count__42528 = (0);
var i__42529 = (0);
while(true){
if((i__42529 < count__42528)){
var value__$1 = cljs.core._nth.call(null,chunk__42527,i__42529);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj,value__$1);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));


var G__42530 = seq__42526;
var G__42531 = chunk__42527;
var G__42532 = count__42528;
var G__42533 = (i__42529 + (1));
seq__42526 = G__42530;
chunk__42527 = G__42531;
count__42528 = G__42532;
i__42529 = G__42533;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__42526);
if(temp__5720__auto__){
var seq__42526__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42526__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42526__$1);
var G__42534 = cljs.core.chunk_rest.call(null,seq__42526__$1);
var G__42535 = c__4461__auto__;
var G__42536 = cljs.core.count.call(null,c__4461__auto__);
var G__42537 = (0);
seq__42526 = G__42534;
chunk__42527 = G__42535;
count__42528 = G__42536;
i__42529 = G__42537;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__42526__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj,value__$1);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));


var G__42538 = cljs.core.next.call(null,seq__42526__$1);
var G__42539 = null;
var G__42540 = (0);
var G__42541 = (0);
seq__42526 = G__42538;
chunk__42527 = G__42539;
count__42528 = G__42540;
i__42529 = G__42541;
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
website.console.prepl_output_fn = (function website$console$prepl_output_fn(app_state,p__42542){
var map__42543 = p__42542;
var map__42543__$1 = (((((!((map__42543 == null))))?(((((map__42543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42543):map__42543);
var tag = cljs.core.get.call(null,map__42543__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__42543__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__42545 = tag;
var G__42545__$1 = (((G__42545 instanceof cljs.core.Keyword))?G__42545.fqn:null);
switch (G__42545__$1) {
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
var map__42547 = cljs.core.deref.call(null,app_state);
var map__42547__$1 = (((((!((map__42547 == null))))?(((((map__42547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42547):map__42547);
var stack_machine = cljs.core.get.call(null,map__42547__$1,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846));
var input_string = cljs.core.get.call(null,map__42547__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846),fif.core.prepl_eval.call(null,stack_machine,input_string,cljs.core.partial.call(null,website.console.prepl_output_fn,app_state)));

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),"");
});
website.console.c_listing_output = rum.core.build_defc.call(null,(function (output_elements){
return React.createElement("div",({"className": "listing-output"}),cljs.core.into_array.call(null,(function (){var iter__4434__auto__ = (function website$console$iter__42549(s__42550){
return (new cljs.core.LazySeq(null,(function (){
var s__42550__$1 = s__42550;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__42550__$1);
if(temp__5720__auto__){
var s__42550__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42550__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__42550__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__42552 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__42551 = (0);
while(true){
if((i__42551 < size__4433__auto__)){
var map__42553 = cljs.core._nth.call(null,c__4432__auto__,i__42551);
var map__42553__$1 = (((((!((map__42553 == null))))?(((((map__42553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42553):map__42553);
var type = cljs.core.get.call(null,map__42553__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__42553__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__42553__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__42552,sablono.interpreter.interpret.call(null,(function (){var G__42555 = type;
var G__42555__$1 = (((G__42555 instanceof cljs.core.Keyword))?G__42555.fqn:null);
switch (G__42555__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-input-text",".console-text.console-input-text",1810246223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42551,G__42555,G__42555__$1,map__42553,map__42553__$1,type,value,id,c__4432__auto__,size__4433__auto__,b__42552,s__42550__$2,temp__5720__auto__){
return (function (){
website.console.set_input_BANG_.call(null,value);

return website.console.focus_input.call(null);
});})(i__42551,G__42555,G__42555__$1,map__42553,map__42553__$1,type,value,id,c__4432__auto__,size__4433__auto__,b__42552,s__42550__$2,temp__5720__auto__))
], null),value], null);

break;
case "image":
return website.console.image_element.call(null,value,id);

break;
case "youtube-embed":
return website.console.youtube_embed_element.call(null,value,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42555__$1)].join('')));

}
})()));

var G__42560 = (i__42551 + (1));
i__42551 = G__42560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42552),website$console$iter__42549.call(null,cljs.core.chunk_rest.call(null,s__42550__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42552),null);
}
} else {
var map__42556 = cljs.core.first.call(null,s__42550__$2);
var map__42556__$1 = (((((!((map__42556 == null))))?(((((map__42556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42556):map__42556);
var type = cljs.core.get.call(null,map__42556__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__42556__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__42556__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var G__42558 = type;
var G__42558__$1 = (((G__42558 instanceof cljs.core.Keyword))?G__42558.fqn:null);
switch (G__42558__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-input-text",".console-text.console-input-text",1810246223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__42558,G__42558__$1,map__42556,map__42556__$1,type,value,id,s__42550__$2,temp__5720__auto__){
return (function (){
website.console.set_input_BANG_.call(null,value);

return website.console.focus_input.call(null);
});})(G__42558,G__42558__$1,map__42556,map__42556__$1,type,value,id,s__42550__$2,temp__5720__auto__))
], null),value], null);

break;
case "image":
return website.console.image_element.call(null,value,id);

break;
case "youtube-embed":
return website.console.youtube_embed_element.call(null,value,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42558__$1)].join('')));

}
})()),website$console$iter__42549.call(null,cljs.core.rest.call(null,s__42550__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,output_elements);
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
var map__42564 = rum.core.react.call(null,app_state);
var map__42564__$1 = (((((!((map__42564 == null))))?(((((map__42564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42564):map__42564);
var input_string = cljs.core.get.call(null,map__42564__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
return React.createElement("div",({"className": "input-container"}),React.createElement("div",({"onClick": ((function (map__42564,map__42564__$1,input_string){
return (function (){
return website.console.focus_input.call(null);
});})(map__42564,map__42564__$1,input_string))
, "className": "input-arrow"}),">"),sablono.interpreter.create_element.call(null,"input",({"type": "text", "value": input_string, "onChange": ((function (map__42564,map__42564__$1,input_string){
return (function (p1__42562_SHARP_){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),p1__42562_SHARP_.target.value);
});})(map__42564,map__42564__$1,input_string))
, "onKeyDown": ((function (map__42564,map__42564__$1,input_string){
return (function (p1__42563_SHARP_){
return website.console.handle_keydown.call(null,p1__42563_SHARP_);
});})(map__42564,map__42564__$1,input_string))
})));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,website.console.mixin_autoscroll.call(null)], null),"c-text-input");
website.console.c_fif_console = rum.core.build_defcs.call(null,(function (state,app_state){
var map__42566 = rum.core.react.call(null,app_state);
var map__42566__$1 = (((((!((map__42566 == null))))?(((((map__42566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42566):map__42566);
var output_elements = cljs.core.get.call(null,map__42566__$1,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609));
return React.createElement("div",({"className": "fif-console-container"}),React.createElement("div",({"id": "close-console-button", "title": "Close Web Console", "onClick": ((function (map__42566,map__42566__$1,output_elements){
return (function (){
return website.console.close_console_BANG_.call(null);
});})(map__42566,map__42566__$1,output_elements))
}),"X"),sablono.interpreter.interpret.call(null,website.console.c_listing_output.call(null,output_elements)),sablono.interpreter.interpret.call(null,website.console.c_text_input.call(null,app_state)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-fif-console");
website.console.mount_fif_console = (function website$console$mount_fif_console(){
var elem = document.createElement("div");
var G__42568_42569 = elem;
G__42568_42569.setAttribute("id","overlay-console");


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

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref.call(null,website.console.console_open_QMARK_);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,key,"ArrowUp");
} else {
return and__4036__auto__;
}
})())){
website.console.focus_input.call(null);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-index","input-index",1765754144),cljs.core.inc);

website.console.set_input_BANG_.call(null,(function (){var $ = cljs.core.deref.call(null,website.console.app_state);
var $__$1 = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1($);
var $__$2 = cljs.core.take.call(null,new cljs.core.Keyword(null,"input-index","input-index",1765754144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console.app_state)),$__$1);
var $__$3 = cljs.core.last.call(null,$__$2);
var or__4047__auto__ = $__$3;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})());

e.preventDefault();
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref.call(null,website.console.console_open_QMARK_);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,key,"ArrowDown");
} else {
return and__4036__auto__;
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
var or__4047__auto__ = $__$3;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
