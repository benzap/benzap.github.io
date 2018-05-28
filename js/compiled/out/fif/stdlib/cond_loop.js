// Compiled by ClojureScript 1.10.238 {}
goog.provide('fif.stdlib.cond_loop');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.sub_stack');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.exceptions');
goog.require('fif.utils.token');
goog.require('fif.stdlib.conditional');
goog.require('fif.stack_machine.processor');
fif.stdlib.cond_loop.arg_do_token = new cljs.core.Symbol(null,"do","do",1686842252,null);
fif.stdlib.cond_loop.arg_loop_token = new cljs.core.Symbol(null,"loop","loop",1244978678,null);
fif.stdlib.cond_loop.arg_loopend_token = new cljs.core.Symbol(null,"loopend","loopend",1097291332,null);
fif.stdlib.cond_loop.arg_plus_loop_token = new cljs.core.Symbol(null,"+loop","+loop",1162909765,null);
fif.stdlib.cond_loop.arg_plus_loopend_token = new cljs.core.Symbol(null,"+loopend","+loopend",-787502493,null);
fif.stdlib.cond_loop.arg_leave_token = new cljs.core.Symbol(null,"leave","leave",-1631856326,null);
fif.stdlib.cond_loop.arg_begin_token = new cljs.core.Symbol(null,"begin","begin",1321497208,null);
fif.stdlib.cond_loop.arg_until_token = new cljs.core.Symbol(null,"until","until",451365137,null);
fif.stdlib.cond_loop.arg_untilend_token = new cljs.core.Symbol(null,"untilend","untilend",-1282880324,null);
fif.stdlib.cond_loop.arg_while_token = new cljs.core.Symbol(null,"while","while",-1691317983,null);
fif.stdlib.cond_loop.arg_repeat_token = new cljs.core.Symbol(null,"repeat","repeat",-1821743682,null);
fif.stdlib.cond_loop.arg_repeatend_token = new cljs.core.Symbol(null,"repeatend","repeatend",248538785,null);
fif.stdlib.cond_loop.do_mode_flag = new cljs.core.Keyword(null,"do-mode","do-mode",-1152868226);
fif.stdlib.cond_loop.inner_do_mode_flag = new cljs.core.Keyword(null,"inner-do-mode","inner-do-mode",-1813173250);
fif.stdlib.cond_loop.loop_mode_flag = new cljs.core.Keyword(null,"loop-mode","loop-mode",-1109546396);
fif.stdlib.cond_loop.loop_leave_mode_flag = new cljs.core.Keyword(null,"loop-leave-mode","loop-leave-mode",-364273553);
fif.stdlib.cond_loop.loop_plus_mode_flag = new cljs.core.Keyword(null,"loop-plus-mode","loop-plus-mode",450528150);
fif.stdlib.cond_loop.begin_mode_flag = new cljs.core.Keyword(null,"begin-mode","begin-mode",-1624153162);
fif.stdlib.cond_loop.inner_begin_mode_flag = new cljs.core.Keyword(null,"inner-begin-mode","inner-begin-mode",1971000757);
fif.stdlib.cond_loop.begin_until_mode_flag = new cljs.core.Keyword(null,"begin-until-mode","begin-until-mode",421792273);
fif.stdlib.cond_loop.begin_until_leave_mode_flag = new cljs.core.Keyword(null,"begin-until-leave-mode","begin-until-leave-mode",-1571128882);
fif.stdlib.cond_loop.begin_while_mode_flag = new cljs.core.Keyword(null,"begin-while-mode","begin-while-mode",2139164829);
fif.stdlib.cond_loop.begin_while_leave_mode_flag = new cljs.core.Keyword(null,"begin-while-leave-mode","begin-while-leave-mode",-1587758432);
fif.stdlib.cond_loop.begin_dump_mode_flag = new cljs.core.Keyword(null,"begin-dump-mode","begin-dump-mode",1607710259);
fif.stdlib.cond_loop.get_loop_start_index = (function fif$stdlib$cond_loop$get_loop_start_index(sm){
return cljs.core.first.call(null,cljs.core.peek.call(null,fif.stack_machine.get_ret.call(null,sm)));
});
fif.stdlib.cond_loop.get_loop_end_index = (function fif$stdlib$cond_loop$get_loop_end_index(sm){
return cljs.core.second.call(null,cljs.core.peek.call(null,fif.stack_machine.get_ret.call(null,sm)));
});
fif.stdlib.cond_loop.increment_loop_index = (function fif$stdlib$cond_loop$increment_loop_index(sm,i){
var vec__39833 = cljs.core.peek.call(null,fif.stack_machine.get_ret.call(null,sm));
var start = cljs.core.nth.call(null,vec__39833,(0),null);
var end = cljs.core.nth.call(null,vec__39833,(1),null);
return fif.stack_machine.push_ret.call(null,fif.stack_machine.pop_ret.call(null,sm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + i),end], null));
});
fif.stdlib.cond_loop.loop_leave_mode = (function fif$stdlib$cond_loop$loop_leave_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(((cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_loopend_token)) || (cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_plus_loopend_token)))){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_ret.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash))));
} else {
return fif.stack_machine.dequeue_code.call(null,sm);

}
});
fif.stdlib.cond_loop.loop_mode = (function fif$stdlib$cond_loop$loop_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_loopend_token)){
var start_idx = fif.stdlib.cond_loop.get_loop_start_index.call(null,sm);
var end_idx = fif.stdlib.cond_loop.get_loop_end_index.call(null,sm);
if(!((start_idx >= end_idx))){
var loop_body = fif.stack_machine.sub_stack.get_sub_stack.call(null,stash);
var new_code = cljs.core.concat.call(null,cljs.core.reverse.call(null,loop_body),(new cljs.core.List(null,fif.stdlib.cond_loop.arg_loopend_token,null,(1),null)),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)));
return fif.stack_machine.set_code.call(null,fif.stdlib.cond_loop.increment_loop_index.call(null,sm,(1)),new_code);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_ret.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash))));
}
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_plus_loopend_token)){
var start_idx = fif.stdlib.cond_loop.get_loop_start_index.call(null,sm);
var end_idx = fif.stdlib.cond_loop.get_loop_end_index.call(null,sm);
if(!((start_idx >= end_idx))){
var vec__39836 = fif.stack_machine.get_stack.call(null,sm);
var loop_step = cljs.core.nth.call(null,vec__39836,(0),null);
var loop_body = fif.stack_machine.sub_stack.get_sub_stack.call(null,stash);
var new_code = cljs.core.concat.call(null,cljs.core.reverse.call(null,loop_body),(new cljs.core.List(null,fif.stdlib.cond_loop.arg_plus_loopend_token,null,(1),null)),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)));
return fif.stack_machine.set_code.call(null,fif.stdlib.cond_loop.increment_loop_index.call(null,fif.stack_machine.pop_stack.call(null,sm),loop_step),new_code);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_ret.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,fif.stack_machine.pop_stack.call(null,sm)),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash))));
}
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
}
});
fif.stdlib.cond_loop.inner_do_mode = (function fif$stdlib$cond_loop$inner_do_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(((cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_loop_token)) || (cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_plus_loop_token)))){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_do_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.cond_loop.inner_do_mode_flag),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));

}
}
});
fif.stdlib.cond_loop.do_mode = (function fif$stdlib$cond_loop$do_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_do_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.cond_loop.inner_do_mode_flag),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
if(((cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_loop_token)) || (cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_plus_loop_token)))){
var loop_body = fif.stack_machine.sub_stack.get_sub_stack.call(null,stash);
var end_token = ((cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_loop_token))?fif.stdlib.cond_loop.arg_loopend_token:((cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_plus_loop_token))?fif.stdlib.cond_loop.arg_plus_loopend_token:null));
var new_code = cljs.core.concat.call(null,cljs.core.reverse.call(null,loop_body),(new cljs.core.List(null,end_token,null,(1),null)),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)));
return fif.stack_machine.set_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stdlib.cond_loop.loop_mode_flag),new_code);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));

}
}
});
/**
 * Do structure is <start> <end> do (<body> loop)|(<body ... step> +loop)
 */
fif.stdlib.cond_loop.start_do = (function fif$stdlib$cond_loop$start_do(sm){
var vec__39839 = fif.stack_machine.get_stack.call(null,sm);
var start = cljs.core.nth.call(null,vec__39839,(0),null);
var end = cljs.core.nth.call(null,vec__39839,(1),null);
var stash = fif.stack_machine.get_stash.call(null,sm);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.push_ret.call(null,fif.stack_machine.pop_stack.call(null,fif.stack_machine.pop_stack.call(null,sm)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)),fif.stdlib.cond_loop.do_mode_flag),fif.stack_machine.sub_stack.create_sub_stack.call(null,stash)));
});
fif.stdlib.cond_loop.get_loop_index_1 = (function fif$stdlib$cond_loop$get_loop_index_1(sm){
var idx = cljs.core.first.call(null,cljs.core.first.call(null,fif.stack_machine.get_ret.call(null,sm)));
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,sm,idx));
});
fif.stdlib.cond_loop.get_loop_index_2 = (function fif$stdlib$cond_loop$get_loop_index_2(sm){
var idx = cljs.core.first.call(null,cljs.core.second.call(null,fif.stack_machine.get_ret.call(null,sm)));
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,sm,idx));
});
fif.stdlib.cond_loop.get_loop_index_3 = (function fif$stdlib$cond_loop$get_loop_index_3(sm){
var idx = cljs.core.first.call(null,cljs.core.nth.call(null,fif.stack_machine.get_ret.call(null,sm),(2)));
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_stack.call(null,sm,idx));
});
fif.stdlib.cond_loop.begin_until_leave_mode = (function fif$stdlib$cond_loop$begin_until_leave_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_untilend_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash)));
} else {
return fif.stack_machine.dequeue_code.call(null,sm);

}
});
fif.stdlib.cond_loop.begin_while_leave_mode = (function fif$stdlib$cond_loop$begin_while_leave_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_repeatend_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash)));
} else {
return fif.stack_machine.dequeue_code.call(null,sm);

}
});
fif.stdlib.cond_loop.begin_dump_mode = (function fif$stdlib$cond_loop$begin_dump_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_begin_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.cond_loop.begin_dump_mode_flag));
} else {
if(((cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_until_token)) || (cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_repeat_token)) || (cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_repeatend_token)))){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_flag.call(null,sm));
} else {
return fif.stack_machine.dequeue_code.call(null,sm);

}
}
});
fif.stdlib.cond_loop.begin_while_mode = (function fif$stdlib$cond_loop$begin_while_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_while_token)){
var vec__39842 = fif.stack_machine.get_stack.call(null,sm);
var flag = cljs.core.nth.call(null,vec__39842,(0),null);
if(cljs.core.truth_(fif.stdlib.conditional.condition_true_QMARK_.call(null,flag))){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.pop_stack.call(null,sm));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.pop_flag.call(null,fif.stack_machine.pop_stack.call(null,sm)),fif.stdlib.cond_loop.begin_dump_mode_flag),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash)));
}
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_repeatend_token)){
var loop_body = fif.stack_machine.sub_stack.get_sub_stack.call(null,stash);
var new_code = cljs.core.concat.call(null,cljs.core.reverse.call(null,loop_body),(new cljs.core.List(null,fif.stdlib.cond_loop.arg_repeatend_token,null,(1),null)),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)));
return fif.stack_machine.set_code.call(null,sm,new_code);
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
}
});
fif.stdlib.cond_loop.begin_until_mode = (function fif$stdlib$cond_loop$begin_until_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_untilend_token)){
var vec__39845 = fif.stack_machine.get_stack.call(null,sm);
var flag = cljs.core.nth.call(null,vec__39845,(0),null);
if(cljs.core.not.call(null,fif.stdlib.conditional.condition_true_QMARK_.call(null,flag))){
var loop_body = fif.stack_machine.sub_stack.get_sub_stack.call(null,stash);
var new_code = cljs.core.concat.call(null,cljs.core.reverse.call(null,loop_body),(new cljs.core.List(null,fif.stdlib.cond_loop.arg_untilend_token,null,(1),null)),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)));
return fif.stack_machine.set_code.call(null,fif.stack_machine.pop_stack.call(null,sm),new_code);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,fif.stack_machine.pop_stack.call(null,sm)),fif.stack_machine.sub_stack.remove_sub_stack.call(null,stash)));
}
} else {
return fif.stack_machine.processor.process_arg.call(null,sm);

}
});
fif.stdlib.cond_loop.inner_begin_mode = (function fif$stdlib$cond_loop$inner_begin_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(((cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_until_token)) || (cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_repeat_token)))){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_begin_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.cond_loop.inner_do_mode_flag),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));

}
}
});
fif.stdlib.cond_loop.begin_mode = (function fif$stdlib$cond_loop$begin_mode(sm){
var arg = cljs.core.first.call(null,fif.stack_machine.get_code.call(null,sm));
var stash = fif.stack_machine.get_stash.call(null,sm);
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_begin_token)){
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.cond_loop.inner_begin_mode_flag),fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_until_token)){
var loop_body = fif.stack_machine.sub_stack.get_sub_stack.call(null,stash);
var new_code = cljs.core.concat.call(null,cljs.core.reverse.call(null,loop_body),(new cljs.core.List(null,fif.stdlib.cond_loop.arg_untilend_token,null,(1),null)),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)));
return fif.stack_machine.set_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stdlib.cond_loop.begin_until_mode_flag),new_code);
} else {
if(cljs.core._EQ_.call(null,arg,fif.stdlib.cond_loop.arg_repeat_token)){
var loop_body = fif.stack_machine.sub_stack.get_sub_stack.call(null,stash);
var new_code = cljs.core.concat.call(null,cljs.core.reverse.call(null,loop_body),(new cljs.core.List(null,fif.stdlib.cond_loop.arg_repeatend_token,null,(1),null)),fif.stack_machine.get_code.call(null,fif.stack_machine.dequeue_code.call(null,sm)));
return fif.stack_machine.set_code.call(null,fif.stack_machine.push_flag.call(null,fif.stack_machine.pop_flag.call(null,sm),fif.stdlib.cond_loop.begin_while_mode_flag),new_code);
} else {
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,sm,fif.stack_machine.sub_stack.push_sub_stack.call(null,stash,arg)));

}
}
}
});
/**
 * Begin structure begin <body ... ?> until
 *                 begin <?> while <body> repeat
 */
fif.stdlib.cond_loop.start_begin = (function fif$stdlib$cond_loop$start_begin(sm){
var vec__39848 = fif.stack_machine.get_stack.call(null,sm);
var start = cljs.core.nth.call(null,vec__39848,(0),null);
var end = cljs.core.nth.call(null,vec__39848,(1),null);
var stash = fif.stack_machine.get_stash.call(null,sm);
return fif.stack_machine.dequeue_code.call(null,fif.stack_machine.set_stash.call(null,fif.stack_machine.push_flag.call(null,sm,fif.stdlib.cond_loop.begin_mode_flag),fif.stack_machine.sub_stack.create_sub_stack.call(null,stash)));
});
/**
 * Find the most recent loop flag and replace it with a loop leave
 *   mode.
 * 
 *   Notes:
 * 
 *   - Note that any additional conditional modes that are passed need to
 *   be also be replaced with a dump to preserve the stash.
 */
fif.stdlib.cond_loop.leave_recent_loop = (function fif$stdlib$cond_loop$leave_recent_loop(sm){
var flags = cljs.core.reverse.call(null,fif.stack_machine.get_flags.call(null,sm));
var recent_begin_until = cljs.core.concat.call(null,fif.utils.token.take_to_token.call(null,flags,fif.stdlib.cond_loop.begin_until_mode_flag),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.cond_loop.begin_until_mode_flag], null));
var recent_begin_while = cljs.core.concat.call(null,fif.utils.token.take_to_token.call(null,flags,fif.stdlib.cond_loop.begin_while_mode_flag),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.cond_loop.begin_while_mode_flag], null));
var recent_loop = cljs.core.concat.call(null,fif.utils.token.take_to_token.call(null,flags,fif.stdlib.cond_loop.loop_mode_flag),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fif.stdlib.cond_loop.loop_mode_flag], null));
var recent_listing = cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.count,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [recent_begin_until,recent_begin_while,recent_loop], null)));
var leave_loop_tag = (function (){var pred__39851 = cljs.core._EQ_;
var expr__39852 = cljs.core.last.call(null,recent_listing);
if(cljs.core.truth_(pred__39851.call(null,fif.stdlib.cond_loop.loop_mode_flag,expr__39852))){
return fif.stdlib.cond_loop.loop_leave_mode_flag;
} else {
if(cljs.core.truth_(pred__39851.call(null,fif.stdlib.cond_loop.begin_until_mode_flag,expr__39852))){
return fif.stdlib.cond_loop.begin_until_leave_mode_flag;
} else {
if(cljs.core.truth_(pred__39851.call(null,fif.stdlib.cond_loop.begin_while_mode_flag,expr__39852))){
return fif.stdlib.cond_loop.begin_while_leave_mode_flag;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39852)].join('')));
}
}
}
})();
var new_flags = (function (){var $ = flags;
var $__$1 = cljs.core.drop.call(null,cljs.core.count.call(null,recent_listing),$);
var $__$2 = cljs.core.reverse.call(null,$__$1);
var $__$3 = cljs.core.concat.call(null,$__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [leave_loop_tag], null));
return cljs.core.vec.call(null,$__$3);
})();
return fif.stack_machine.set_flags.call(null,sm,new_flags);
});
/**
 * Leaves whatever the current loop is.
 * 
 * Goes through the flags, and replaces the most recent loop with a dump-mode
 */
fif.stdlib.cond_loop.start_leave = (function fif$stdlib$cond_loop$start_leave(sm){
return fif.stack_machine.dequeue_code.call(null,fif.stdlib.cond_loop.leave_recent_loop.call(null,sm));
});
fif.stdlib.cond_loop.doc_string_do = "<end> <start> do <body> loop|+loop -- Loop conditional";
fif.stdlib.cond_loop.doc_string_begin = "begin <body> <flag> until | begin <flag> while <body> repeat -- Loop conditional -- Loop conditional";
fif.stdlib.cond_loop.import_stdlib_cond_loop_mode = (function fif$stdlib$cond_loop$import_stdlib_cond_loop_mode(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.set_mode.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.cond_loop.arg_do_token,fif.stdlib.cond_loop.start_do,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_do,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_loop_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_do,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_loopend_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_do,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_plus_loop_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_do,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_plus_loopend_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_do,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),new cljs.core.Symbol(null,"i","i",253690212,null),fif.stdlib.cond_loop.get_loop_index_1,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- n ) Retrieve the index of the innermost loop.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),new cljs.core.Symbol(null,"j","j",242556762,null),fif.stdlib.cond_loop.get_loop_index_2,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- n ) Retrieve the index of the second from the innermost loop."),new cljs.core.Symbol(null,"k","k",-505765866,null),fif.stdlib.cond_loop.get_loop_index_3,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( -- n ) Retrieve the index of the third from the innermost loop."),fif.stdlib.cond_loop.do_mode_flag,fif.stdlib.cond_loop.do_mode),fif.stdlib.cond_loop.inner_do_mode_flag,fif.stdlib.cond_loop.inner_do_mode),fif.stdlib.cond_loop.loop_mode_flag,fif.stdlib.cond_loop.loop_mode),fif.stdlib.cond_loop.loop_leave_mode_flag,fif.stdlib.cond_loop.loop_leave_mode),fif.stdlib.cond_loop.arg_begin_token,fif.stdlib.cond_loop.start_begin,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_begin,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_until_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_begin,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_untilend_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_begin,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_while_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_begin,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_repeat_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_begin,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.arg_repeatend_token,fif.stack_machine.exceptions.raise_unbounded_mode_argument,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),fif.stdlib.cond_loop.doc_string_begin,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627)),fif.stdlib.cond_loop.begin_mode_flag,fif.stdlib.cond_loop.begin_mode),fif.stdlib.cond_loop.inner_begin_mode_flag,fif.stdlib.cond_loop.inner_begin_mode),fif.stdlib.cond_loop.begin_until_mode_flag,fif.stdlib.cond_loop.begin_until_mode),fif.stdlib.cond_loop.begin_while_mode_flag,fif.stdlib.cond_loop.begin_while_mode),fif.stdlib.cond_loop.begin_dump_mode_flag,fif.stdlib.cond_loop.begin_dump_mode),fif.stdlib.cond_loop.begin_while_leave_mode_flag,fif.stdlib.cond_loop.begin_while_leave_mode),fif.stdlib.cond_loop.begin_until_leave_mode_flag,fif.stdlib.cond_loop.begin_until_leave_mode),fif.stdlib.cond_loop.arg_leave_token,fif.stdlib.cond_loop.start_leave,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"Used within a conditional loop to leave early",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.mode.conditional-loop","stdlib.mode.conditional-loop",2025130627));
});
