// Compiled by ClojureScript 1.10.520 {}
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
var G__40045 = elem;
(G__40045["style"]["display"] = "block");

(G__40045["className"] = "anim-fade-in-normal");

return G__40045;
} else {
var G__40046 = elem;
(G__40046["style"]["display"] = "none");

(G__40046["className"] = "");

return G__40046;
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
var scroll_max = (function (){var or__4131__auto__ = (elem_console_container["scrollTopMax"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var seq__40047 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__40048 = null;
var count__40049 = (0);
var i__40050 = (0);
while(true){
if((i__40050 < count__40049)){
var value__$1 = cljs.core._nth.call(null,chunk__40048,i__40050);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__40051 = seq__40047;
var G__40052 = chunk__40048;
var G__40053 = count__40049;
var G__40054 = (i__40050 + (1));
seq__40047 = G__40051;
chunk__40048 = G__40052;
count__40049 = G__40053;
i__40050 = G__40054;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40047);
if(temp__5720__auto__){
var seq__40047__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40047__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40047__$1);
var G__40055 = cljs.core.chunk_rest.call(null,seq__40047__$1);
var G__40056 = c__4550__auto__;
var G__40057 = cljs.core.count.call(null,c__4550__auto__);
var G__40058 = (0);
seq__40047 = G__40055;
chunk__40048 = G__40056;
count__40049 = G__40057;
i__40050 = G__40058;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__40047__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__40059 = cljs.core.next.call(null,seq__40047__$1);
var G__40060 = null;
var G__40061 = (0);
var G__40062 = (0);
seq__40047 = G__40059;
chunk__40048 = G__40060;
count__40049 = G__40061;
i__40050 = G__40062;
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
var seq__40063 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__40064 = null;
var count__40065 = (0);
var i__40066 = (0);
while(true){
if((i__40066 < count__40065)){
var value__$1 = cljs.core._nth.call(null,chunk__40064,i__40066);
var value_40067__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),new cljs.core.Keyword(null,"value","value",305978217),value_40067__$2], null));


var G__40068 = seq__40063;
var G__40069 = chunk__40064;
var G__40070 = count__40065;
var G__40071 = (i__40066 + (1));
seq__40063 = G__40068;
chunk__40064 = G__40069;
count__40065 = G__40070;
i__40066 = G__40071;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40063);
if(temp__5720__auto__){
var seq__40063__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40063__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40063__$1);
var G__40072 = cljs.core.chunk_rest.call(null,seq__40063__$1);
var G__40073 = c__4550__auto__;
var G__40074 = cljs.core.count.call(null,c__4550__auto__);
var G__40075 = (0);
seq__40063 = G__40072;
chunk__40064 = G__40073;
count__40065 = G__40074;
i__40066 = G__40075;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__40063__$1);
var value_40076__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"sub-header","sub-header",1915186221),new cljs.core.Keyword(null,"value","value",305978217),value_40076__$2], null));


var G__40077 = cljs.core.next.call(null,seq__40063__$1);
var G__40078 = null;
var G__40079 = (0);
var G__40080 = (0);
seq__40063 = G__40077;
chunk__40064 = G__40078;
count__40065 = G__40079;
i__40066 = G__40080;
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
var seq__40081 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__40082 = null;
var count__40083 = (0);
var i__40084 = (0);
while(true){
if((i__40084 < count__40083)){
var value__$1 = cljs.core._nth.call(null,chunk__40082,i__40084);
var value_40085__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"value","value",305978217),value_40085__$2], null));


var G__40086 = seq__40081;
var G__40087 = chunk__40082;
var G__40088 = count__40083;
var G__40089 = (i__40084 + (1));
seq__40081 = G__40086;
chunk__40082 = G__40087;
count__40083 = G__40088;
i__40084 = G__40089;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40081);
if(temp__5720__auto__){
var seq__40081__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40081__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40081__$1);
var G__40090 = cljs.core.chunk_rest.call(null,seq__40081__$1);
var G__40091 = c__4550__auto__;
var G__40092 = cljs.core.count.call(null,c__4550__auto__);
var G__40093 = (0);
seq__40081 = G__40090;
chunk__40082 = G__40091;
count__40083 = G__40092;
i__40084 = G__40093;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__40081__$1);
var value_40094__$2 = website.console.format_spaces.call(null,value__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"value","value",305978217),value_40094__$2], null));


var G__40095 = cljs.core.next.call(null,seq__40081__$1);
var G__40096 = null;
var G__40097 = (0);
var G__40098 = (0);
seq__40081 = G__40095;
chunk__40082 = G__40096;
count__40083 = G__40097;
i__40084 = G__40098;
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
var seq__40099 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__40100 = null;
var count__40101 = (0);
var i__40102 = (0);
while(true){
if((i__40102 < count__40101)){
var value__$1 = cljs.core._nth.call(null,chunk__40100,i__40102);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__40103 = seq__40099;
var G__40104 = chunk__40100;
var G__40105 = count__40101;
var G__40106 = (i__40102 + (1));
seq__40099 = G__40103;
chunk__40100 = G__40104;
count__40101 = G__40105;
i__40102 = G__40106;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40099);
if(temp__5720__auto__){
var seq__40099__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40099__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40099__$1);
var G__40107 = cljs.core.chunk_rest.call(null,seq__40099__$1);
var G__40108 = c__4550__auto__;
var G__40109 = cljs.core.count.call(null,c__4550__auto__);
var G__40110 = (0);
seq__40099 = G__40107;
chunk__40100 = G__40108;
count__40101 = G__40109;
i__40102 = G__40110;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__40099__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));


var G__40111 = cljs.core.next.call(null,seq__40099__$1);
var G__40112 = null;
var G__40113 = (0);
var G__40114 = (0);
seq__40099 = G__40111;
chunk__40100 = G__40112;
count__40101 = G__40113;
i__40102 = G__40114;
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
var seq__40115 = cljs.core.seq.call(null,clojure.string.split_lines.call(null,value));
var chunk__40116 = null;
var count__40117 = (0);
var i__40118 = (0);
while(true){
if((i__40118 < count__40117)){
var value__$1 = cljs.core._nth.call(null,chunk__40116,i__40118);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj,value__$1);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));


var G__40119 = seq__40115;
var G__40120 = chunk__40116;
var G__40121 = count__40117;
var G__40122 = (i__40118 + (1));
seq__40115 = G__40119;
chunk__40116 = G__40120;
count__40117 = G__40121;
i__40118 = G__40122;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__40115);
if(temp__5720__auto__){
var seq__40115__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40115__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40115__$1);
var G__40123 = cljs.core.chunk_rest.call(null,seq__40115__$1);
var G__40124 = c__4550__auto__;
var G__40125 = cljs.core.count.call(null,c__4550__auto__);
var G__40126 = (0);
seq__40115 = G__40123;
chunk__40116 = G__40124;
count__40117 = G__40125;
i__40118 = G__40126;
continue;
} else {
var value__$1 = cljs.core.first.call(null,seq__40115__$1);
cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),website.console.uid.call(null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-history","input-history",-2110310510),cljs.core.conj,value__$1);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-index","input-index",1765754144),(0));


var G__40127 = cljs.core.next.call(null,seq__40115__$1);
var G__40128 = null;
var G__40129 = (0);
var G__40130 = (0);
seq__40115 = G__40127;
chunk__40116 = G__40128;
count__40117 = G__40129;
i__40118 = G__40130;
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
website.console.prepl_output_fn = (function website$console$prepl_output_fn(app_state,p__40131){
var map__40132 = p__40131;
var map__40132__$1 = (((((!((map__40132 == null))))?(((((map__40132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40132):map__40132);
var tag = cljs.core.get.call(null,map__40132__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var value = cljs.core.get.call(null,map__40132__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__40134 = tag;
var G__40134__$1 = (((G__40134 instanceof cljs.core.Keyword))?G__40134.fqn:null);
switch (G__40134__$1) {
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
var map__40136 = cljs.core.deref.call(null,app_state);
var map__40136__$1 = (((((!((map__40136 == null))))?(((((map__40136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40136):map__40136);
var stack_machine = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846));
var input_string = cljs.core.get.call(null,map__40136__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"stack-machine","stack-machine",819752846),fif.core.prepl_eval.call(null,stack_machine,input_string,cljs.core.partial.call(null,website.console.prepl_output_fn,app_state)));

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),"");
});
website.console.c_listing_output = rum.core.build_defc.call(null,(function (output_elements){
return React.createElement("div",({"className": "listing-output"}),cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = (function website$console$iter__40138(s__40139){
return (new cljs.core.LazySeq(null,(function (){
var s__40139__$1 = s__40139;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__40139__$1);
if(temp__5720__auto__){
var s__40139__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40139__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__40139__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__40141 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__40140 = (0);
while(true){
if((i__40140 < size__4522__auto__)){
var map__40142 = cljs.core._nth.call(null,c__4521__auto__,i__40140);
var map__40142__$1 = (((((!((map__40142 == null))))?(((((map__40142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40142):map__40142);
var type = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__40142__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__40141,sablono.interpreter.interpret.call(null,(function (){var G__40144 = type;
var G__40144__$1 = (((G__40144 instanceof cljs.core.Keyword))?G__40144.fqn:null);
switch (G__40144__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-input-text",".console-text.console-input-text",1810246223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40140,G__40144,G__40144__$1,map__40142,map__40142__$1,type,value,id,c__4521__auto__,size__4522__auto__,b__40141,s__40139__$2,temp__5720__auto__){
return (function (){
website.console.set_input_BANG_.call(null,value);

return website.console.focus_input.call(null);
});})(i__40140,G__40144,G__40144__$1,map__40142,map__40142__$1,type,value,id,c__4521__auto__,size__4522__auto__,b__40141,s__40139__$2,temp__5720__auto__))
], null),value], null);

break;
case "image":
return website.console.image_element.call(null,value,id);

break;
case "youtube-embed":
return website.console.youtube_embed_element.call(null,value,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40144__$1)].join('')));

}
})()));

var G__40149 = (i__40140 + (1));
i__40140 = G__40149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40141),website$console$iter__40138.call(null,cljs.core.chunk_rest.call(null,s__40139__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40141),null);
}
} else {
var map__40145 = cljs.core.first.call(null,s__40139__$2);
var map__40145__$1 = (((((!((map__40145 == null))))?(((((map__40145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40145):map__40145);
var type = cljs.core.get.call(null,map__40145__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__40145__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__40145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var G__40147 = type;
var G__40147__$1 = (((G__40147 instanceof cljs.core.Keyword))?G__40147.fqn:null);
switch (G__40147__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".console-text.console-input-text",".console-text.console-input-text",1810246223),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),false,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__40147,G__40147__$1,map__40145,map__40145__$1,type,value,id,s__40139__$2,temp__5720__auto__){
return (function (){
website.console.set_input_BANG_.call(null,value);

return website.console.focus_input.call(null);
});})(G__40147,G__40147__$1,map__40145,map__40145__$1,type,value,id,s__40139__$2,temp__5720__auto__))
], null),value], null);

break;
case "image":
return website.console.image_element.call(null,value,id);

break;
case "youtube-embed":
return website.console.youtube_embed_element.call(null,value,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40147__$1)].join('')));

}
})()),website$console$iter__40138.call(null,cljs.core.rest.call(null,s__40139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,output_elements);
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
var map__40153 = rum.core.react.call(null,app_state);
var map__40153__$1 = (((((!((map__40153 == null))))?(((((map__40153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40153):map__40153);
var input_string = cljs.core.get.call(null,map__40153__$1,new cljs.core.Keyword(null,"input-string","input-string",-1281740233));
return React.createElement("div",({"className": "input-container"}),React.createElement("div",({"onClick": ((function (map__40153,map__40153__$1,input_string){
return (function (){
return website.console.focus_input.call(null);
});})(map__40153,map__40153__$1,input_string))
, "className": "input-arrow"}),">"),sablono.interpreter.create_element.call(null,"input",({"type": "text", "value": input_string, "onChange": ((function (map__40153,map__40153__$1,input_string){
return (function (p1__40151_SHARP_){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-string","input-string",-1281740233),p1__40151_SHARP_.target.value);
});})(map__40153,map__40153__$1,input_string))
, "onKeyDown": ((function (map__40153,map__40153__$1,input_string){
return (function (p1__40152_SHARP_){
return website.console.handle_keydown.call(null,p1__40152_SHARP_);
});})(map__40153,map__40153__$1,input_string))
})));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,website.console.mixin_autoscroll.call(null)], null),"c-text-input");
website.console.c_fif_console = rum.core.build_defcs.call(null,(function (state,app_state){
var map__40155 = rum.core.react.call(null,app_state);
var map__40155__$1 = (((((!((map__40155 == null))))?(((((map__40155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40155):map__40155);
var output_elements = cljs.core.get.call(null,map__40155__$1,new cljs.core.Keyword(null,"output-elements","output-elements",-282500609));
return React.createElement("div",({"className": "fif-console-container"}),React.createElement("div",({"id": "close-console-button", "title": "Close Web Console", "onClick": ((function (map__40155,map__40155__$1,output_elements){
return (function (){
return website.console.close_console_BANG_.call(null);
});})(map__40155,map__40155__$1,output_elements))
}),"X"),sablono.interpreter.interpret.call(null,website.console.c_listing_output.call(null,output_elements)),sablono.interpreter.interpret.call(null,website.console.c_text_input.call(null,app_state)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"c-fif-console");
website.console.mount_fif_console = (function website$console$mount_fif_console(){
var elem = document.createElement("div");
var G__40157_40158 = elem;
G__40157_40158.setAttribute("id","overlay-console");


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

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref.call(null,website.console.console_open_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,key,"ArrowUp");
} else {
return and__4120__auto__;
}
})())){
website.console.focus_input.call(null);

cljs.core.swap_BANG_.call(null,website.console.app_state,cljs.core.update,new cljs.core.Keyword(null,"input-index","input-index",1765754144),cljs.core.inc);

website.console.set_input_BANG_.call(null,(function (){var $ = cljs.core.deref.call(null,website.console.app_state);
var $__$1 = new cljs.core.Keyword(null,"input-history","input-history",-2110310510).cljs$core$IFn$_invoke$arity$1($);
var $__$2 = cljs.core.take.call(null,new cljs.core.Keyword(null,"input-index","input-index",1765754144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.console.app_state)),$__$1);
var $__$3 = cljs.core.last.call(null,$__$2);
var or__4131__auto__ = $__$3;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

e.preventDefault();
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref.call(null,website.console.console_open_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,key,"ArrowDown");
} else {
return and__4120__auto__;
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
var or__4131__auto__ = $__$3;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
