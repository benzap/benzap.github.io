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
return (function (p1__42446_SHARP_,p2__42445_SHARP_){
return p2__42445_SHARP_.call(null,p1__42446_SHARP_);
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
return (function (p1__42448_SHARP_,p2__42447_SHARP_){
return p2__42447_SHARP_.call(null,old_state,p1__42448_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35484__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42449_SHARP_){
return p1__42449_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__42454 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__42454,(0),null);
var next_state = cljs.core.nth.call(null,vec__42454,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42450_SHARP_){
return p1__42450_SHARP_.call(null,state);
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
var G__42457__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__42457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42458__i = 0, G__42458__a = new Array(arguments.length -  0);
while (G__42458__i < G__42458__a.length) {G__42458__a[G__42458__i] = arguments[G__42458__i + 0]; ++G__42458__i;}
  args = new cljs.core.IndexedSeq(G__42458__a,0,null);
} 
return G__42457__delegate.call(this,args);};
G__42457.cljs$lang$maxFixedArity = 0;
G__42457.cljs$lang$applyTo = (function (arglist__42459){
var args = cljs.core.seq(arglist__42459);
return G__42457__delegate(args);
});
G__42457.cljs$core$IFn$_invoke$arity$variadic = G__42457__delegate;
return G__42457;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__42460__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__42460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42461__i = 0, G__42461__a = new Array(arguments.length -  0);
while (G__42461__i < G__42461__a.length) {G__42461__a[G__42461__i] = arguments[G__42461__i + 0]; ++G__42461__i;}
  args = new cljs.core.IndexedSeq(G__42461__a,0,null);
} 
return G__42460__delegate.call(this,args);};
G__42460.cljs$lang$maxFixedArity = 0;
G__42460.cljs$lang$applyTo = (function (arglist__42462){
var args = cljs.core.seq(arglist__42462);
return G__42460__delegate(args);
});
G__42460.cljs$core$IFn$_invoke$arity$variadic = G__42460__delegate;
return G__42460;
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
var G__42463__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__42463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42464__i = 0, G__42464__a = new Array(arguments.length -  0);
while (G__42464__i < G__42464__a.length) {G__42464__a[G__42464__i] = arguments[G__42464__i + 0]; ++G__42464__i;}
  args = new cljs.core.IndexedSeq(G__42464__a,0,null);
} 
return G__42463__delegate.call(this,args);};
G__42463.cljs$lang$maxFixedArity = 0;
G__42463.cljs$lang$applyTo = (function (arglist__42465){
var args = cljs.core.seq(arglist__42465);
return G__42463__delegate(args);
});
G__42463.cljs$core$IFn$_invoke$arity$variadic = G__42463__delegate;
return G__42463;
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
rum.core.schedule = (function (){var or__35484__auto__ = (function (){var and__35472__auto__ = typeof window !== 'undefined';
if(and__35472__auto__){
var or__35484__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
var or__35484__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35484__auto____$1)){
return or__35484__auto____$1;
} else {
var or__35484__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35484__auto____$2)){
return or__35484__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__35472__auto__;
}
})();
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
return ((function (or__35484__auto__){
return (function (p1__42466_SHARP_){
return setTimeout(p1__42466_SHARP_,(16));
});
;})(or__35484__auto__))
}
})();
rum.core.batch = (function (){var or__35484__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35484__auto__)){
return or__35484__auto__;
} else {
var or__35484__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35484__auto____$1)){
return or__35484__auto____$1;
} else {
return ((function (or__35484__auto____$1,or__35484__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__35484__auto____$1,or__35484__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__42473 = cljs.core.seq.call(null,queue);
var chunk__42475 = null;
var count__42476 = (0);
var i__42477 = (0);
while(true){
if((i__42477 < count__42476)){
var comp = cljs.core._nth.call(null,chunk__42475,i__42477);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42479 = seq__42473;
var G__42480 = chunk__42475;
var G__42481 = count__42476;
var G__42482 = (i__42477 + (1));
seq__42473 = G__42479;
chunk__42475 = G__42480;
count__42476 = G__42481;
i__42477 = G__42482;
continue;
} else {
var G__42483 = seq__42473;
var G__42484 = chunk__42475;
var G__42485 = count__42476;
var G__42486 = (i__42477 + (1));
seq__42473 = G__42483;
chunk__42475 = G__42484;
count__42476 = G__42485;
i__42477 = G__42486;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42473);
if(temp__4657__auto__){
var seq__42473__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42473__$1)){
var c__36303__auto__ = cljs.core.chunk_first.call(null,seq__42473__$1);
var G__42487 = cljs.core.chunk_rest.call(null,seq__42473__$1);
var G__42488 = c__36303__auto__;
var G__42489 = cljs.core.count.call(null,c__36303__auto__);
var G__42490 = (0);
seq__42473 = G__42487;
chunk__42475 = G__42488;
count__42476 = G__42489;
i__42477 = G__42490;
continue;
} else {
var comp = cljs.core.first.call(null,seq__42473__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42491 = cljs.core.next.call(null,seq__42473__$1);
var G__42492 = null;
var G__42493 = (0);
var G__42494 = (0);
seq__42473 = G__42491;
chunk__42475 = G__42492;
count__42476 = G__42493;
i__42477 = G__42494;
continue;
} else {
var G__42495 = cljs.core.next.call(null,seq__42473__$1);
var G__42496 = null;
var G__42497 = (0);
var G__42498 = (0);
seq__42473 = G__42495;
chunk__42475 = G__42496;
count__42476 = G__42497;
i__42477 = G__42498;
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
var args42499 = [];
var len__36597__auto___42502 = arguments.length;
var i__36598__auto___42503 = (0);
while(true){
if((i__36598__auto___42503 < len__36597__auto___42502)){
args42499.push((arguments[i__36598__auto___42503]));

var G__42504 = (i__36598__auto___42503 + (1));
i__36598__auto___42503 = G__42504;
continue;
} else {
}
break;
}

var G__42501 = args42499.length;
switch (G__42501) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42499.length)].join('')));

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
var _STAR_reactions_STAR_42506 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__42507 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__42507,(0),null);
var next_state = cljs.core.nth.call(null,vec__42507,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42510_42522 = cljs.core.seq.call(null,old_reactions);
var chunk__42511_42523 = null;
var count__42512_42524 = (0);
var i__42513_42525 = (0);
while(true){
if((i__42513_42525 < count__42512_42524)){
var ref_42526 = cljs.core._nth.call(null,chunk__42511_42523,i__42513_42525);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42526)){
} else {
cljs.core.remove_watch.call(null,ref_42526,key);
}

var G__42527 = seq__42510_42522;
var G__42528 = chunk__42511_42523;
var G__42529 = count__42512_42524;
var G__42530 = (i__42513_42525 + (1));
seq__42510_42522 = G__42527;
chunk__42511_42523 = G__42528;
count__42512_42524 = G__42529;
i__42513_42525 = G__42530;
continue;
} else {
var temp__4657__auto___42531 = cljs.core.seq.call(null,seq__42510_42522);
if(temp__4657__auto___42531){
var seq__42510_42532__$1 = temp__4657__auto___42531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42510_42532__$1)){
var c__36303__auto___42533 = cljs.core.chunk_first.call(null,seq__42510_42532__$1);
var G__42534 = cljs.core.chunk_rest.call(null,seq__42510_42532__$1);
var G__42535 = c__36303__auto___42533;
var G__42536 = cljs.core.count.call(null,c__36303__auto___42533);
var G__42537 = (0);
seq__42510_42522 = G__42534;
chunk__42511_42523 = G__42535;
count__42512_42524 = G__42536;
i__42513_42525 = G__42537;
continue;
} else {
var ref_42538 = cljs.core.first.call(null,seq__42510_42532__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42538)){
} else {
cljs.core.remove_watch.call(null,ref_42538,key);
}

var G__42539 = cljs.core.next.call(null,seq__42510_42532__$1);
var G__42540 = null;
var G__42541 = (0);
var G__42542 = (0);
seq__42510_42522 = G__42539;
chunk__42511_42523 = G__42540;
count__42512_42524 = G__42541;
i__42513_42525 = G__42542;
continue;
}
} else {
}
}
break;
}

var seq__42514_42543 = cljs.core.seq.call(null,new_reactions);
var chunk__42515_42544 = null;
var count__42516_42545 = (0);
var i__42517_42546 = (0);
while(true){
if((i__42517_42546 < count__42516_42545)){
var ref_42547 = cljs.core._nth.call(null,chunk__42515_42544,i__42517_42546);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42547)){
} else {
cljs.core.add_watch.call(null,ref_42547,key,((function (seq__42514_42543,chunk__42515_42544,count__42516_42545,i__42517_42546,ref_42547,comp,old_reactions,vec__42507,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42506){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42514_42543,chunk__42515_42544,count__42516_42545,i__42517_42546,ref_42547,comp,old_reactions,vec__42507,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42506))
);
}

var G__42548 = seq__42514_42543;
var G__42549 = chunk__42515_42544;
var G__42550 = count__42516_42545;
var G__42551 = (i__42517_42546 + (1));
seq__42514_42543 = G__42548;
chunk__42515_42544 = G__42549;
count__42516_42545 = G__42550;
i__42517_42546 = G__42551;
continue;
} else {
var temp__4657__auto___42552 = cljs.core.seq.call(null,seq__42514_42543);
if(temp__4657__auto___42552){
var seq__42514_42553__$1 = temp__4657__auto___42552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42514_42553__$1)){
var c__36303__auto___42554 = cljs.core.chunk_first.call(null,seq__42514_42553__$1);
var G__42555 = cljs.core.chunk_rest.call(null,seq__42514_42553__$1);
var G__42556 = c__36303__auto___42554;
var G__42557 = cljs.core.count.call(null,c__36303__auto___42554);
var G__42558 = (0);
seq__42514_42543 = G__42555;
chunk__42515_42544 = G__42556;
count__42516_42545 = G__42557;
i__42517_42546 = G__42558;
continue;
} else {
var ref_42559 = cljs.core.first.call(null,seq__42514_42553__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42559)){
} else {
cljs.core.add_watch.call(null,ref_42559,key,((function (seq__42514_42543,chunk__42515_42544,count__42516_42545,i__42517_42546,ref_42559,seq__42514_42553__$1,temp__4657__auto___42552,comp,old_reactions,vec__42507,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42506){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42514_42543,chunk__42515_42544,count__42516_42545,i__42517_42546,ref_42559,seq__42514_42553__$1,temp__4657__auto___42552,comp,old_reactions,vec__42507,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42506))
);
}

var G__42560 = cljs.core.next.call(null,seq__42514_42553__$1);
var G__42561 = null;
var G__42562 = (0);
var G__42563 = (0);
seq__42514_42543 = G__42560;
chunk__42515_42544 = G__42561;
count__42516_42545 = G__42562;
i__42517_42546 = G__42563;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_42506;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_42564 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42518_42565 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__42519_42566 = null;
var count__42520_42567 = (0);
var i__42521_42568 = (0);
while(true){
if((i__42521_42568 < count__42520_42567)){
var ref_42569 = cljs.core._nth.call(null,chunk__42519_42566,i__42521_42568);
cljs.core.remove_watch.call(null,ref_42569,key_42564);

var G__42570 = seq__42518_42565;
var G__42571 = chunk__42519_42566;
var G__42572 = count__42520_42567;
var G__42573 = (i__42521_42568 + (1));
seq__42518_42565 = G__42570;
chunk__42519_42566 = G__42571;
count__42520_42567 = G__42572;
i__42521_42568 = G__42573;
continue;
} else {
var temp__4657__auto___42574 = cljs.core.seq.call(null,seq__42518_42565);
if(temp__4657__auto___42574){
var seq__42518_42575__$1 = temp__4657__auto___42574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42518_42575__$1)){
var c__36303__auto___42576 = cljs.core.chunk_first.call(null,seq__42518_42575__$1);
var G__42577 = cljs.core.chunk_rest.call(null,seq__42518_42575__$1);
var G__42578 = c__36303__auto___42576;
var G__42579 = cljs.core.count.call(null,c__36303__auto___42576);
var G__42580 = (0);
seq__42518_42565 = G__42577;
chunk__42519_42566 = G__42578;
count__42520_42567 = G__42579;
i__42521_42568 = G__42580;
continue;
} else {
var ref_42581 = cljs.core.first.call(null,seq__42518_42575__$1);
cljs.core.remove_watch.call(null,ref_42581,key_42564);

var G__42582 = cljs.core.next.call(null,seq__42518_42575__$1);
var G__42583 = null;
var G__42584 = (0);
var G__42585 = (0);
seq__42518_42565 = G__42582;
chunk__42519_42566 = G__42583;
count__42520_42567 = G__42584;
i__42521_42568 = G__42585;
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
var args__36604__auto__ = [];
var len__36597__auto___42592 = arguments.length;
var i__36598__auto___42593 = (0);
while(true){
if((i__36598__auto___42593 < len__36597__auto___42592)){
args__36604__auto__.push((arguments[i__36598__auto___42593]));

var G__42594 = (i__36598__auto___42593 + (1));
i__36598__auto___42593 = G__42594;
continue;
} else {
}
break;
}

var argseq__36605__auto__ = ((((2) < args__36604__auto__.length))?(new cljs.core.IndexedSeq(args__36604__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36605__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__42589){
var map__42590 = p__42589;
var map__42590__$1 = ((((!((map__42590 == null)))?((((map__42590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42590):map__42590);
var options = map__42590__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq42586){
var G__42587 = cljs.core.first.call(null,seq42586);
var seq42586__$1 = cljs.core.next.call(null,seq42586);
var G__42588 = cljs.core.first.call(null,seq42586__$1);
var seq42586__$2 = cljs.core.next.call(null,seq42586__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__42587,G__42588,seq42586__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__36604__auto__ = [];
var len__36597__auto___42598 = arguments.length;
var i__36598__auto___42599 = (0);
while(true){
if((i__36598__auto___42599 < len__36597__auto___42598)){
args__36604__auto__.push((arguments[i__36598__auto___42599]));

var G__42600 = (i__36598__auto___42599 + (1));
i__36598__auto___42599 = G__42600;
continue;
} else {
}
break;
}

var argseq__36605__auto__ = ((((2) < args__36604__auto__.length))?(new cljs.core.IndexedSeq(args__36604__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36605__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq42595){
var G__42596 = cljs.core.first.call(null,seq42595);
var seq42595__$1 = cljs.core.next.call(null,seq42595);
var G__42597 = cljs.core.first.call(null,seq42595__$1);
var seq42595__$2 = cljs.core.next.call(null,seq42595__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__42596,G__42597,seq42595__$2);
});

