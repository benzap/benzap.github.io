// Compiled by ClojureScript 1.9.542 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__42426_SHARP_,p2__42425_SHARP_){
return p2__42425_SHARP_.call(null,p1__42426_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42428_SHARP_,p2__42427_SHARP_){
return p2__42427_SHARP_.call(null,old_state,p1__42428_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35474__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42429_SHARP_){
return p1__42429_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__42434 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__42434,(0),null);
var next_state = cljs.core.nth.call(null,vec__42434,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42430_SHARP_){
return p1__42430_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__42437__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__42437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42438__i = 0, G__42438__a = new Array(arguments.length -  0);
while (G__42438__i < G__42438__a.length) {G__42438__a[G__42438__i] = arguments[G__42438__i + 0]; ++G__42438__i;}
  args = new cljs.core.IndexedSeq(G__42438__a,0,null);
} 
return G__42437__delegate.call(this,args);};
G__42437.cljs$lang$maxFixedArity = 0;
G__42437.cljs$lang$applyTo = (function (arglist__42439){
var args = cljs.core.seq(arglist__42439);
return G__42437__delegate(args);
});
G__42437.cljs$core$IFn$_invoke$arity$variadic = G__42437__delegate;
return G__42437;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__42440__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__42440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42441__i = 0, G__42441__a = new Array(arguments.length -  0);
while (G__42441__i < G__42441__a.length) {G__42441__a[G__42441__i] = arguments[G__42441__i + 0]; ++G__42441__i;}
  args = new cljs.core.IndexedSeq(G__42441__a,0,null);
} 
return G__42440__delegate.call(this,args);};
G__42440.cljs$lang$maxFixedArity = 0;
G__42440.cljs$lang$applyTo = (function (arglist__42442){
var args = cljs.core.seq(arglist__42442);
return G__42440__delegate(args);
});
G__42440.cljs$core$IFn$_invoke$arity$variadic = G__42440__delegate;
return G__42440;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__42443__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__42443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42444__i = 0, G__42444__a = new Array(arguments.length -  0);
while (G__42444__i < G__42444__a.length) {G__42444__a[G__42444__i] = arguments[G__42444__i + 0]; ++G__42444__i;}
  args = new cljs.core.IndexedSeq(G__42444__a,0,null);
} 
return G__42443__delegate.call(this,args);};
G__42443.cljs$lang$maxFixedArity = 0;
G__42443.cljs$lang$applyTo = (function (arglist__42445){
var args = cljs.core.seq(arglist__42445);
return G__42443__delegate(args);
});
G__42443.cljs$core$IFn$_invoke$arity$variadic = G__42443__delegate;
return G__42443;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__35474__auto__ = (function (){var and__35462__auto__ = typeof window !== 'undefined';
if(and__35462__auto__){
var or__35474__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
var or__35474__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35474__auto____$1)){
return or__35474__auto____$1;
} else {
var or__35474__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35474__auto____$2)){
return or__35474__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__35462__auto__;
}
})();
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
return ((function (or__35474__auto__){
return (function (p1__42446_SHARP_){
return setTimeout(p1__42446_SHARP_,(16));
});
;})(or__35474__auto__))
}
})();
rum.core.batch = (function (){var or__35474__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35474__auto__)){
return or__35474__auto__;
} else {
var or__35474__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35474__auto____$1)){
return or__35474__auto____$1;
} else {
return ((function (or__35474__auto____$1,or__35474__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__35474__auto____$1,or__35474__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__42453 = cljs.core.seq.call(null,queue);
var chunk__42455 = null;
var count__42456 = (0);
var i__42457 = (0);
while(true){
if((i__42457 < count__42456)){
var comp = cljs.core._nth.call(null,chunk__42455,i__42457);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42459 = seq__42453;
var G__42460 = chunk__42455;
var G__42461 = count__42456;
var G__42462 = (i__42457 + (1));
seq__42453 = G__42459;
chunk__42455 = G__42460;
count__42456 = G__42461;
i__42457 = G__42462;
continue;
} else {
var G__42463 = seq__42453;
var G__42464 = chunk__42455;
var G__42465 = count__42456;
var G__42466 = (i__42457 + (1));
seq__42453 = G__42463;
chunk__42455 = G__42464;
count__42456 = G__42465;
i__42457 = G__42466;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42453);
if(temp__4657__auto__){
var seq__42453__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42453__$1)){
var c__36293__auto__ = cljs.core.chunk_first.call(null,seq__42453__$1);
var G__42467 = cljs.core.chunk_rest.call(null,seq__42453__$1);
var G__42468 = c__36293__auto__;
var G__42469 = cljs.core.count.call(null,c__36293__auto__);
var G__42470 = (0);
seq__42453 = G__42467;
chunk__42455 = G__42468;
count__42456 = G__42469;
i__42457 = G__42470;
continue;
} else {
var comp = cljs.core.first.call(null,seq__42453__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42471 = cljs.core.next.call(null,seq__42453__$1);
var G__42472 = null;
var G__42473 = (0);
var G__42474 = (0);
seq__42453 = G__42471;
chunk__42455 = G__42472;
count__42456 = G__42473;
i__42457 = G__42474;
continue;
} else {
var G__42475 = cljs.core.next.call(null,seq__42453__$1);
var G__42476 = null;
var G__42477 = (0);
var G__42478 = (0);
seq__42453 = G__42475;
chunk__42455 = G__42476;
count__42456 = G__42477;
i__42457 = G__42478;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args42479 = [];
var len__36587__auto___42482 = arguments.length;
var i__36588__auto___42483 = (0);
while(true){
if((i__36588__auto___42483 < len__36587__auto___42482)){
args42479.push((arguments[i__36588__auto___42483]));

var G__42484 = (i__36588__auto___42483 + (1));
i__36588__auto___42483 = G__42484;
continue;
} else {
}
break;
}

var G__42481 = args42479.length;
switch (G__42481) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42479.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_42486 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__42487 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__42487,(0),null);
var next_state = cljs.core.nth.call(null,vec__42487,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42490_42502 = cljs.core.seq.call(null,old_reactions);
var chunk__42491_42503 = null;
var count__42492_42504 = (0);
var i__42493_42505 = (0);
while(true){
if((i__42493_42505 < count__42492_42504)){
var ref_42506 = cljs.core._nth.call(null,chunk__42491_42503,i__42493_42505);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42506)){
} else {
cljs.core.remove_watch.call(null,ref_42506,key);
}

var G__42507 = seq__42490_42502;
var G__42508 = chunk__42491_42503;
var G__42509 = count__42492_42504;
var G__42510 = (i__42493_42505 + (1));
seq__42490_42502 = G__42507;
chunk__42491_42503 = G__42508;
count__42492_42504 = G__42509;
i__42493_42505 = G__42510;
continue;
} else {
var temp__4657__auto___42511 = cljs.core.seq.call(null,seq__42490_42502);
if(temp__4657__auto___42511){
var seq__42490_42512__$1 = temp__4657__auto___42511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42490_42512__$1)){
var c__36293__auto___42513 = cljs.core.chunk_first.call(null,seq__42490_42512__$1);
var G__42514 = cljs.core.chunk_rest.call(null,seq__42490_42512__$1);
var G__42515 = c__36293__auto___42513;
var G__42516 = cljs.core.count.call(null,c__36293__auto___42513);
var G__42517 = (0);
seq__42490_42502 = G__42514;
chunk__42491_42503 = G__42515;
count__42492_42504 = G__42516;
i__42493_42505 = G__42517;
continue;
} else {
var ref_42518 = cljs.core.first.call(null,seq__42490_42512__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42518)){
} else {
cljs.core.remove_watch.call(null,ref_42518,key);
}

var G__42519 = cljs.core.next.call(null,seq__42490_42512__$1);
var G__42520 = null;
var G__42521 = (0);
var G__42522 = (0);
seq__42490_42502 = G__42519;
chunk__42491_42503 = G__42520;
count__42492_42504 = G__42521;
i__42493_42505 = G__42522;
continue;
}
} else {
}
}
break;
}

var seq__42494_42523 = cljs.core.seq.call(null,new_reactions);
var chunk__42495_42524 = null;
var count__42496_42525 = (0);
var i__42497_42526 = (0);
while(true){
if((i__42497_42526 < count__42496_42525)){
var ref_42527 = cljs.core._nth.call(null,chunk__42495_42524,i__42497_42526);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42527)){
} else {
cljs.core.add_watch.call(null,ref_42527,key,((function (seq__42494_42523,chunk__42495_42524,count__42496_42525,i__42497_42526,ref_42527,comp,old_reactions,vec__42487,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42486){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42494_42523,chunk__42495_42524,count__42496_42525,i__42497_42526,ref_42527,comp,old_reactions,vec__42487,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42486))
);
}

var G__42528 = seq__42494_42523;
var G__42529 = chunk__42495_42524;
var G__42530 = count__42496_42525;
var G__42531 = (i__42497_42526 + (1));
seq__42494_42523 = G__42528;
chunk__42495_42524 = G__42529;
count__42496_42525 = G__42530;
i__42497_42526 = G__42531;
continue;
} else {
var temp__4657__auto___42532 = cljs.core.seq.call(null,seq__42494_42523);
if(temp__4657__auto___42532){
var seq__42494_42533__$1 = temp__4657__auto___42532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42494_42533__$1)){
var c__36293__auto___42534 = cljs.core.chunk_first.call(null,seq__42494_42533__$1);
var G__42535 = cljs.core.chunk_rest.call(null,seq__42494_42533__$1);
var G__42536 = c__36293__auto___42534;
var G__42537 = cljs.core.count.call(null,c__36293__auto___42534);
var G__42538 = (0);
seq__42494_42523 = G__42535;
chunk__42495_42524 = G__42536;
count__42496_42525 = G__42537;
i__42497_42526 = G__42538;
continue;
} else {
var ref_42539 = cljs.core.first.call(null,seq__42494_42533__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42539)){
} else {
cljs.core.add_watch.call(null,ref_42539,key,((function (seq__42494_42523,chunk__42495_42524,count__42496_42525,i__42497_42526,ref_42539,seq__42494_42533__$1,temp__4657__auto___42532,comp,old_reactions,vec__42487,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42486){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42494_42523,chunk__42495_42524,count__42496_42525,i__42497_42526,ref_42539,seq__42494_42533__$1,temp__4657__auto___42532,comp,old_reactions,vec__42487,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42486))
);
}

var G__42540 = cljs.core.next.call(null,seq__42494_42533__$1);
var G__42541 = null;
var G__42542 = (0);
var G__42543 = (0);
seq__42494_42523 = G__42540;
chunk__42495_42524 = G__42541;
count__42496_42525 = G__42542;
i__42497_42526 = G__42543;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_42486;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_42544 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42498_42545 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__42499_42546 = null;
var count__42500_42547 = (0);
var i__42501_42548 = (0);
while(true){
if((i__42501_42548 < count__42500_42547)){
var ref_42549 = cljs.core._nth.call(null,chunk__42499_42546,i__42501_42548);
cljs.core.remove_watch.call(null,ref_42549,key_42544);

var G__42550 = seq__42498_42545;
var G__42551 = chunk__42499_42546;
var G__42552 = count__42500_42547;
var G__42553 = (i__42501_42548 + (1));
seq__42498_42545 = G__42550;
chunk__42499_42546 = G__42551;
count__42500_42547 = G__42552;
i__42501_42548 = G__42553;
continue;
} else {
var temp__4657__auto___42554 = cljs.core.seq.call(null,seq__42498_42545);
if(temp__4657__auto___42554){
var seq__42498_42555__$1 = temp__4657__auto___42554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42498_42555__$1)){
var c__36293__auto___42556 = cljs.core.chunk_first.call(null,seq__42498_42555__$1);
var G__42557 = cljs.core.chunk_rest.call(null,seq__42498_42555__$1);
var G__42558 = c__36293__auto___42556;
var G__42559 = cljs.core.count.call(null,c__36293__auto___42556);
var G__42560 = (0);
seq__42498_42545 = G__42557;
chunk__42499_42546 = G__42558;
count__42500_42547 = G__42559;
i__42501_42548 = G__42560;
continue;
} else {
var ref_42561 = cljs.core.first.call(null,seq__42498_42555__$1);
cljs.core.remove_watch.call(null,ref_42561,key_42544);

var G__42562 = cljs.core.next.call(null,seq__42498_42555__$1);
var G__42563 = null;
var G__42564 = (0);
var G__42565 = (0);
seq__42498_42545 = G__42562;
chunk__42499_42546 = G__42563;
count__42500_42547 = G__42564;
i__42501_42548 = G__42565;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__36594__auto__ = [];
var len__36587__auto___42572 = arguments.length;
var i__36588__auto___42573 = (0);
while(true){
if((i__36588__auto___42573 < len__36587__auto___42572)){
args__36594__auto__.push((arguments[i__36588__auto___42573]));

var G__42574 = (i__36588__auto___42573 + (1));
i__36588__auto___42573 = G__42574;
continue;
} else {
}
break;
}

var argseq__36595__auto__ = ((((2) < args__36594__auto__.length))?(new cljs.core.IndexedSeq(args__36594__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36595__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__42569){
var map__42570 = p__42569;
var map__42570__$1 = ((((!((map__42570 == null)))?((((map__42570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42570):map__42570);
var options = map__42570__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq42566){
var G__42567 = cljs.core.first.call(null,seq42566);
var seq42566__$1 = cljs.core.next.call(null,seq42566);
var G__42568 = cljs.core.first.call(null,seq42566__$1);
var seq42566__$2 = cljs.core.next.call(null,seq42566__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__42567,G__42568,seq42566__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__36594__auto__ = [];
var len__36587__auto___42578 = arguments.length;
var i__36588__auto___42579 = (0);
while(true){
if((i__36588__auto___42579 < len__36587__auto___42578)){
args__36594__auto__.push((arguments[i__36588__auto___42579]));

var G__42580 = (i__36588__auto___42579 + (1));
i__36588__auto___42579 = G__42580;
continue;
} else {
}
break;
}

var argseq__36595__auto__ = ((((2) < args__36594__auto__.length))?(new cljs.core.IndexedSeq(args__36594__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36595__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq42575){
var G__42576 = cljs.core.first.call(null,seq42575);
var seq42575__$1 = cljs.core.next.call(null,seq42575);
var G__42577 = cljs.core.first.call(null,seq42575__$1);
var seq42575__$2 = cljs.core.next.call(null,seq42575__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__42576,G__42577,seq42575__$2);
});

