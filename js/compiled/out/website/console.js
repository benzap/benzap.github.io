// Compiled by ClojureScript 1.10.339 {}
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
var G__41436 = elem;
(G__41436["style"]["display"] = "block");

(G__41436["className"] = "anim-fade-in-normal");

return G__41436;
} else {
var G__41437 = elem;
(G__41437["style"]["display"] = "none");

(G__41437["className"] = "");

return G__41437;
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
var scroll_max = (function (){var or__3949__auto__ = (elem_console_container["scrollTopMax"]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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
var seq__41438 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41439 = null;
var count__41440 = (0);
var i__41441 = (0);
while(true){
if((i__41441 < count__41440)){
var value__$1 = cljs.core._nth.call(null,chunk__41439,i__41441);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__41442 = seq__41438;
var G__41443 = chunk__41439;
var G__41444 = count__41440;
var G__41445 = (i__41441 + (1));
seq__41438 = G__41442;
chunk__41439 = G__41443;
count__41440 = G__41444;
i__41441 = G__41445;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41438);
if(temp__5457__auto__){
var seq__41438__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41438__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__41438__$1);
var G__41446 = cljs.core.chunk_rest.call(null,seq__41438__$1);
var G__41447 = c__4351__auto__;
var G__41448 = cljs.core.count.call(null,c__4351__auto__);
var G__41449 = (0);
seq__41438 = G__41446;
chunk__41439 = G__41447;
count__41440 = G__41448;
i__41441 = G__41449;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41438__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__41450 = cljs.core.next.call(null,seq__41438__$1);
var G__41451 = null;
var G__41452 = (0);
var G__41453 = (0);
seq__41438 = G__41450;
chunk__41439 = G__41451;
count__41440 = G__41452;
i__41441 = G__41453;
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
var seq__41454 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41455 = null;
var count__41456 = (0);
var i__41457 = (0);
while(true){
if((i__41457 < count__41456)){
var value__$1 = cljs.core._nth.call(null,chunk__41455,i__41457);
var value_41458__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),new cljs.core.Keyword(null,"value","value",305978217),value_41458__$2], null));


var G__41459 = seq__41454;
var G__41460 = chunk__41455;
var G__41461 = count__41456;
var G__41462 = (i__41457 + (1));
seq__41454 = G__41459;
chunk__41455 = G__41460;
count__41456 = G__41461;
i__41457 = G__41462;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41454);
if(temp__5457__auto__){
var seq__41454__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41454__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__41454__$1);
var G__41463 = cljs.core.chunk_rest.call(null,seq__41454__$1);
var G__41464 = c__4351__auto__;
var G__41465 = cljs.core.count.call(null,c__4351__auto__);
var G__41466 = (0);
seq__41454 = G__41463;
chunk__41455 = G__41464;
count__41456 = G__41465;
i__41457 = G__41466;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41454__$1);
var value_41467__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),new cljs.core.Keyword(null,"value","value",305978217),value_41467__$2], null));


var G__41468 = cljs.core.next.call(null,seq__41454__$1);
var G__41469 = null;
var G__41470 = (0);
var G__41471 = (0);
seq__41454 = G__41468;
chunk__41455 = G__41469;
count__41456 = G__41470;
i__41457 = G__41471;
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
var seq__41472 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41473 = null;
var count__41474 = (0);
var i__41475 = (0);
while(true){
if((i__41475 < count__41474)){
var value__$1 = cljs.core._nth.call(null,chunk__41473,i__41475);
var value_41476__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"value","value",305978217),value_41476__$2], null));


var G__41477 = seq__41472;
var G__41478 = chunk__41473;
var G__41479 = count__41474;
var G__41480 = (i__41475 + (1));
seq__41472 = G__41477;
chunk__41473 = G__41478;
count__41474 = G__41479;
i__41475 = G__41480;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41472);
if(temp__5457__auto__){
var seq__41472__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41472__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__41472__$1);
var G__41481 = cljs.core.chunk_rest.call(null,seq__41472__$1);
var G__41482 = c__4351__auto__;
var G__41483 = cljs.core.count.call(null,c__4351__auto__);
var G__41484 = (0);
seq__41472 = G__41481;
chunk__41473 = G__41482;
count__41474 = G__41483;
i__41475 = G__41484;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41472__$1);
var value_41485__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"value","value",305978217),value_41485__$2], null));


var G__41486 = cljs.core.next.call(null,seq__41472__$1);
var G__41487 = null;
var G__41488 = (0);
var G__41489 = (0);
seq__41472 = G__41486;
chunk__41473 = G__41487;
count__41474 = G__41488;
i__41475 = G__41489;
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
var seq__41490 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41491 = null;
var count__41492 = (0);
var i__41493 = (0);
while(true){
if((i__41493 < count__41492)){
var value__$1 = cljs.core._nth.call(null,chunk__41491,i__41493);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__41494 = seq__41490;
var G__41495 = chunk__41491;
var G__41496 = count__41492;
var G__41497 = (i__41493 + (1));
seq__41490 = G__41494;
chunk__41491 = G__41495;
count__41492 = G__41496;
i__41493 = G__41497;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41490);
if(temp__5457__auto__){
var seq__41490__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41490__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__41490__$1);
var G__41498 = cljs.core.chunk_rest.call(null,seq__41490__$1);
var G__41499 = c__4351__auto__;
var G__41500 = cljs.core.count.call(null,c__4351__auto__);
var G__41501 = (0);
seq__41490 = G__41498;
chunk__41491 = G__41499;
count__41492 = G__41500;
i__41493 = G__41501;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41490__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__41502 = cljs.core.next.call(null,seq__41490__$1);
var G__41503 = null;
var G__41504 = (0);
var G__41505 = (0);
seq__41490 = G__41502;
chunk__41491 = G__41503;
count__41492 = G__41504;
i__41493 = G__41505;
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
var seq__41506 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__41507 = null;
var count__41508 = (0);
var i__41509 = (0);
while(true){
if((i__41509 < count__41508)){
var value__$1 = cljs.core._nth.call(null,chunk__41507,i__41509);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj,value__$1);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));


var G__41510 = seq__41506;
var G__41511 = chunk__41507;
var G__41512 = count__41508;
var G__41513 = (i__41509 + (1));
seq__41506 = G__41510;
chunk__41507 = G__41511;
count__41508 = G__41512;
i__41509 = G__41513;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41506);
if(temp__5457__auto__){
var seq__41506__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41506__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__41506__$1);
var G__41514 = cljs.core.chunk_rest.call(null,seq__41506__$1);
var G__41515 = c__4351__auto__;
var G__41516 = cljs.core.count.call(null,c__4351__auto__);
var G__41517 = (0);
seq__41506 = G__41514;
chunk__41507 = G__41515;
count__41508 = G__41516;
i__41509 = G__41517;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__41506__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj,value__$1);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));


var G__41518 = cljs.core.next.call(null,seq__41506__$1);
var G__41519 = null;
var G__41520 = (0);
var G__41521 = (0);
seq__41506 = G__41518;
chunk__41507 = G__41519;
count__41508 = G__41520;
i__41509 = G__41521;
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
website.console.prepl_output_fn = (function website$console$prepl_output_fn(app_state,p__41522){
var map__41523 = p__41522;
var map__41523__$1 = ((((!((map__41523 == null)))?(((((map__41523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41523):map__41523);
var tag = cljs.core.get.call(null,map__41523__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__41523__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__41525 = tag;
var G__41525__$1 = (((G__41525 instanceof cljs.core.Keyword))?G__41525.fqn:null);
switch (G__41525__$1) {
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
var map__41527 = cljs.core.deref.call(null,app_state);
var map__41527__$1 = ((((!((map__41527 == null)))?(((((map__41527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41527):map__41527);
var stack_machine = cljs.core.get.call(null,map__41527__$1,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846));
var input_string = cljs.core.get.call(null,map__41527__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846),fif.core.prepl_eval.call(null,stack_machine,input_string,cljs.core.partial.call(null,website.console.prepl_output_fn,app_state)));

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),"");
});
website.console.c_listing_output = rum.core.build_defc.call(null,(function (output_elements){
return React.createElement("div",({"className": "listing-output"}),cljs.core.into_array.call(null,(function (){var iter__4324__auto__ = (function website$console$iter__41529(s__41530){
return (new cljs.core.LazySeq(null,(function (){
var s__41530__$1 = s__41530;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41530__$1);
if(temp__5457__auto__){
var s__41530__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41530__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__41530__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__41532 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__41531 = (0);
while(true){
if((i__41531 < size__4323__auto__)){
var map__41533 = cljs.core._nth.call(null,c__4322__auto__,i__41531);
var map__41533__$1 = ((((!((map__41533 == null)))?(((((map__41533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41533):map__41533);
var type = cljs.core.get.call(null,map__41533__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__41533__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__41533__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__41532,sablono.interpreter.interpret.call(null,(function (){var G__41535 = type;
var G__41535__$1 = (((G__41535 instanceof cljs.core.Keyword))?G__41535.fqn:null);
switch (G__41535__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-input-text",".console-text.console-input-text",1810246223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__41531,G__41535,G__41535__$1,map__41533,map__41533__$1,type,value,id,c__4322__auto__,size__4323__auto__,b__41532,s__41530__$2,temp__5457__auto__){
return (function (){
website.console.set_input_BANG_.call(null,value);

return website.console.focus_input.call(null);
});})(i__41531,G__41535,G__41535__$1,map__41533,map__41533__$1,type,value,id,c__4322__auto__,size__4323__auto__,b__41532,s__41530__$2,temp__5457__auto__))
], null),value], null);

break;
case "image":
return website.console.image_element.call(null,value,id);

break;
case "youtube-embed":
return website.console.youtube_embed_element.call(null,value,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41535__$1)].join('')));

}
})()));

var G__41540 = (i__41531 + (1));
i__41531 = G__41540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41532),website$console$iter__41529.call(null,cljs.core.chunk_rest.call(null,s__41530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41532),null);
}
} else {
var map__41536 = cljs.core.first.call(null,s__41530__$2);
var map__41536__$1 = ((((!((map__41536 == null)))?(((((map__41536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41536):map__41536);
var type = cljs.core.get.call(null,map__41536__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__41536__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__41536__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var G__41538 = type;
var G__41538__$1 = (((G__41538 instanceof cljs.core.Keyword))?G__41538.fqn:null);
switch (G__41538__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-input-text",".console-text.console-input-text",1810246223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__41538,G__41538__$1,map__41536,map__41536__$1,type,value,id,s__41530__$2,temp__5457__auto__){
return (function (){
website.console.set_input_BANG_.call(null,value);

return website.console.focus_input.call(null);
});})(G__41538,G__41538__$1,map__41536,map__41536__$1,type,value,id,s__41530__$2,temp__5457__auto__))
], null),value], null);

break;
case "image":
return website.console.image_element.call(null,value,id);

break;
case "youtube-embed":
return website.console.youtube_embed_element.call(null,value,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41538__$1)].join('')));

}
})()),website$console$iter__41529.call(null,cljs.core.rest.call(null,s__41530__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,output_elements);
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
var map__41544 = rum.core.react.call(null,app_state);
var map__41544__$1 = ((((!((map__41544 == null)))?(((((map__41544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41544):map__41544);
var input_string = cljs.core.get.call(null,map__41544__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
return React.createElement("div",({"className": "input-container"}),React.createElement("div",({"onClick": ((function (map__41544,map__41544__$1,input_string){
return (function (){
return website.console.focus_input.call(null);
});})(map__41544,map__41544__$1,input_string))
, "className": "input-arrow"}),">"),sablono.interpreter.create_element.call(null,"input",({"type": "text", "value": input_string, "onChange": ((function (map__41544,map__41544__$1,input_string){
return (function (p1__41542_SHARP_){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),p1__41542_SHARP_.target.value);
});})(map__41544,map__41544__$1,input_string))
, "onKeyDown": ((function (map__41544,map__41544__$1,input_string){
return (function (p1__41543_SHARP_){
return website.console.handle_keydown.call(null,p1__41543_SHARP_);
});})(map__41544,map__41544__$1,input_string))
})));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,website.console.mixin_autoscroll.call(null)], null),"c-text-input");
website.console.c_fif_console = rum.core.build_defcs.call(null,(function (state,app_state){
var map__41546 = rum.core.react.call(null,app_state);
var map__41546__$1 = ((((!((map__41546 == null)))?(((((map__41546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41546):map__41546);
var output_elements = cljs.core.get.call(null,map__41546__$1,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609));
return React.createElement("div",({"className": "fif-console-container"}),React.createElement("div",({"id": "close-console-button", "title": "Close Web Console", "onClick": ((function (map__41546,map__41546__$1,output_elements){
return (function (){
return website.console.close_console_BANG_.call(null);
});})(map__41546,map__41546__$1,output_elements))
}),"X"),sablono.interpreter.interpret.call(null,website.console.c_listing_output.call(null,output_elements)),sablono.interpreter.interpret.call(null,website.console.c_text_input.call(null,app_state)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-fif-console");
website.console.mount_fif_console = (function website$console$mount_fif_console(){
var elem = document.createElement("div");
var G__41548_41549 = elem;
G__41548_41549.setAttribute("id","overlay-console");


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

if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,website.console.console_open_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,key,"ArrowUp");
} else {
return and__3938__auto__;
}
})())){
website.console.focus_input.call(null);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-index","input-index",1765754144),cljs.core.inc);

website.console.set_input_BANG_.call(null,(function (){var $ = cljs.core.deref.call(null,website.console.app_state);
var $__$1 = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1($);
var $__$2 = cljs.core.take.call(null,new cljs.core.Keyword(null,"input-index","input-index",1765754144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console.app_state)),$__$1);
var $__$3 = cljs.core.last.call(null,$__$2);
var or__3949__auto__ = $__$3;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})());

e.preventDefault();
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.deref.call(null,website.console.console_open_QMARK_);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,key,"ArrowDown");
} else {
return and__3938__auto__;
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
var or__3949__auto__ = $__$3;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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
