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
return (function (p1__42161_SHARP_,p2__42160_SHARP_){
return p2__42160_SHARP_.call(null,p1__42161_SHARP_);
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
return (function (p1__42163_SHARP_,p2__42162_SHARP_){
return p2__42162_SHARP_.call(null,old_state,p1__42163_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35209__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42164_SHARP_){
return p1__42164_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__42169 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__42169,(0),null);
var next_state = cljs.core.nth.call(null,vec__42169,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42165_SHARP_){
return p1__42165_SHARP_.call(null,state);
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
var G__42172__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__42172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42173__i = 0, G__42173__a = new Array(arguments.length -  0);
while (G__42173__i < G__42173__a.length) {G__42173__a[G__42173__i] = arguments[G__42173__i + 0]; ++G__42173__i;}
  args = new cljs.core.IndexedSeq(G__42173__a,0,null);
} 
return G__42172__delegate.call(this,args);};
G__42172.cljs$lang$maxFixedArity = 0;
G__42172.cljs$lang$applyTo = (function (arglist__42174){
var args = cljs.core.seq(arglist__42174);
return G__42172__delegate(args);
});
G__42172.cljs$core$IFn$_invoke$arity$variadic = G__42172__delegate;
return G__42172;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__42175__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__42175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42176__i = 0, G__42176__a = new Array(arguments.length -  0);
while (G__42176__i < G__42176__a.length) {G__42176__a[G__42176__i] = arguments[G__42176__i + 0]; ++G__42176__i;}
  args = new cljs.core.IndexedSeq(G__42176__a,0,null);
} 
return G__42175__delegate.call(this,args);};
G__42175.cljs$lang$maxFixedArity = 0;
G__42175.cljs$lang$applyTo = (function (arglist__42177){
var args = cljs.core.seq(arglist__42177);
return G__42175__delegate(args);
});
G__42175.cljs$core$IFn$_invoke$arity$variadic = G__42175__delegate;
return G__42175;
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
var G__42178__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__42178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42179__i = 0, G__42179__a = new Array(arguments.length -  0);
while (G__42179__i < G__42179__a.length) {G__42179__a[G__42179__i] = arguments[G__42179__i + 0]; ++G__42179__i;}
  args = new cljs.core.IndexedSeq(G__42179__a,0,null);
} 
return G__42178__delegate.call(this,args);};
G__42178.cljs$lang$maxFixedArity = 0;
G__42178.cljs$lang$applyTo = (function (arglist__42180){
var args = cljs.core.seq(arglist__42180);
return G__42178__delegate(args);
});
G__42178.cljs$core$IFn$_invoke$arity$variadic = G__42178__delegate;
return G__42178;
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
rum.core.schedule = (function (){var or__35209__auto__ = (function (){var and__35197__auto__ = typeof window !== 'undefined';
if(and__35197__auto__){
var or__35209__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
var or__35209__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35209__auto____$1)){
return or__35209__auto____$1;
} else {
var or__35209__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35209__auto____$2)){
return or__35209__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__35197__auto__;
}
})();
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
return ((function (or__35209__auto__){
return (function (p1__42181_SHARP_){
return setTimeout(p1__42181_SHARP_,(16));
});
;})(or__35209__auto__))
}
})();
rum.core.batch = (function (){var or__35209__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35209__auto__)){
return or__35209__auto__;
} else {
var or__35209__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35209__auto____$1)){
return or__35209__auto____$1;
} else {
return ((function (or__35209__auto____$1,or__35209__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__35209__auto____$1,or__35209__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__42188 = cljs.core.seq.call(null,queue);
var chunk__42190 = null;
var count__42191 = (0);
var i__42192 = (0);
while(true){
if((i__42192 < count__42191)){
var comp = cljs.core._nth.call(null,chunk__42190,i__42192);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42194 = seq__42188;
var G__42195 = chunk__42190;
var G__42196 = count__42191;
var G__42197 = (i__42192 + (1));
seq__42188 = G__42194;
chunk__42190 = G__42195;
count__42191 = G__42196;
i__42192 = G__42197;
continue;
} else {
var G__42198 = seq__42188;
var G__42199 = chunk__42190;
var G__42200 = count__42191;
var G__42201 = (i__42192 + (1));
seq__42188 = G__42198;
chunk__42190 = G__42199;
count__42191 = G__42200;
i__42192 = G__42201;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42188);
if(temp__4657__auto__){
var seq__42188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42188__$1)){
var c__36028__auto__ = cljs.core.chunk_first.call(null,seq__42188__$1);
var G__42202 = cljs.core.chunk_rest.call(null,seq__42188__$1);
var G__42203 = c__36028__auto__;
var G__42204 = cljs.core.count.call(null,c__36028__auto__);
var G__42205 = (0);
seq__42188 = G__42202;
chunk__42190 = G__42203;
count__42191 = G__42204;
i__42192 = G__42205;
continue;
} else {
var comp = cljs.core.first.call(null,seq__42188__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42206 = cljs.core.next.call(null,seq__42188__$1);
var G__42207 = null;
var G__42208 = (0);
var G__42209 = (0);
seq__42188 = G__42206;
chunk__42190 = G__42207;
count__42191 = G__42208;
i__42192 = G__42209;
continue;
} else {
var G__42210 = cljs.core.next.call(null,seq__42188__$1);
var G__42211 = null;
var G__42212 = (0);
var G__42213 = (0);
seq__42188 = G__42210;
chunk__42190 = G__42211;
count__42191 = G__42212;
i__42192 = G__42213;
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
var args42214 = [];
var len__36322__auto___42217 = arguments.length;
var i__36323__auto___42218 = (0);
while(true){
if((i__36323__auto___42218 < len__36322__auto___42217)){
args42214.push((arguments[i__36323__auto___42218]));

var G__42219 = (i__36323__auto___42218 + (1));
i__36323__auto___42218 = G__42219;
continue;
} else {
}
break;
}

var G__42216 = args42214.length;
switch (G__42216) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42214.length)].join('')));

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
var _STAR_reactions_STAR_42221 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__42222 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__42222,(0),null);
var next_state = cljs.core.nth.call(null,vec__42222,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42225_42237 = cljs.core.seq.call(null,old_reactions);
var chunk__42226_42238 = null;
var count__42227_42239 = (0);
var i__42228_42240 = (0);
while(true){
if((i__42228_42240 < count__42227_42239)){
var ref_42241 = cljs.core._nth.call(null,chunk__42226_42238,i__42228_42240);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42241)){
} else {
cljs.core.remove_watch.call(null,ref_42241,key);
}

var G__42242 = seq__42225_42237;
var G__42243 = chunk__42226_42238;
var G__42244 = count__42227_42239;
var G__42245 = (i__42228_42240 + (1));
seq__42225_42237 = G__42242;
chunk__42226_42238 = G__42243;
count__42227_42239 = G__42244;
i__42228_42240 = G__42245;
continue;
} else {
var temp__4657__auto___42246 = cljs.core.seq.call(null,seq__42225_42237);
if(temp__4657__auto___42246){
var seq__42225_42247__$1 = temp__4657__auto___42246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42225_42247__$1)){
var c__36028__auto___42248 = cljs.core.chunk_first.call(null,seq__42225_42247__$1);
var G__42249 = cljs.core.chunk_rest.call(null,seq__42225_42247__$1);
var G__42250 = c__36028__auto___42248;
var G__42251 = cljs.core.count.call(null,c__36028__auto___42248);
var G__42252 = (0);
seq__42225_42237 = G__42249;
chunk__42226_42238 = G__42250;
count__42227_42239 = G__42251;
i__42228_42240 = G__42252;
continue;
} else {
var ref_42253 = cljs.core.first.call(null,seq__42225_42247__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42253)){
} else {
cljs.core.remove_watch.call(null,ref_42253,key);
}

var G__42254 = cljs.core.next.call(null,seq__42225_42247__$1);
var G__42255 = null;
var G__42256 = (0);
var G__42257 = (0);
seq__42225_42237 = G__42254;
chunk__42226_42238 = G__42255;
count__42227_42239 = G__42256;
i__42228_42240 = G__42257;
continue;
}
} else {
}
}
break;
}

var seq__42229_42258 = cljs.core.seq.call(null,new_reactions);
var chunk__42230_42259 = null;
var count__42231_42260 = (0);
var i__42232_42261 = (0);
while(true){
if((i__42232_42261 < count__42231_42260)){
var ref_42262 = cljs.core._nth.call(null,chunk__42230_42259,i__42232_42261);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42262)){
} else {
cljs.core.add_watch.call(null,ref_42262,key,((function (seq__42229_42258,chunk__42230_42259,count__42231_42260,i__42232_42261,ref_42262,comp,old_reactions,vec__42222,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42221){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42229_42258,chunk__42230_42259,count__42231_42260,i__42232_42261,ref_42262,comp,old_reactions,vec__42222,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42221))
);
}

var G__42263 = seq__42229_42258;
var G__42264 = chunk__42230_42259;
var G__42265 = count__42231_42260;
var G__42266 = (i__42232_42261 + (1));
seq__42229_42258 = G__42263;
chunk__42230_42259 = G__42264;
count__42231_42260 = G__42265;
i__42232_42261 = G__42266;
continue;
} else {
var temp__4657__auto___42267 = cljs.core.seq.call(null,seq__42229_42258);
if(temp__4657__auto___42267){
var seq__42229_42268__$1 = temp__4657__auto___42267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42229_42268__$1)){
var c__36028__auto___42269 = cljs.core.chunk_first.call(null,seq__42229_42268__$1);
var G__42270 = cljs.core.chunk_rest.call(null,seq__42229_42268__$1);
var G__42271 = c__36028__auto___42269;
var G__42272 = cljs.core.count.call(null,c__36028__auto___42269);
var G__42273 = (0);
seq__42229_42258 = G__42270;
chunk__42230_42259 = G__42271;
count__42231_42260 = G__42272;
i__42232_42261 = G__42273;
continue;
} else {
var ref_42274 = cljs.core.first.call(null,seq__42229_42268__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42274)){
} else {
cljs.core.add_watch.call(null,ref_42274,key,((function (seq__42229_42258,chunk__42230_42259,count__42231_42260,i__42232_42261,ref_42274,seq__42229_42268__$1,temp__4657__auto___42267,comp,old_reactions,vec__42222,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42221){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42229_42258,chunk__42230_42259,count__42231_42260,i__42232_42261,ref_42274,seq__42229_42268__$1,temp__4657__auto___42267,comp,old_reactions,vec__42222,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42221))
);
}

var G__42275 = cljs.core.next.call(null,seq__42229_42268__$1);
var G__42276 = null;
var G__42277 = (0);
var G__42278 = (0);
seq__42229_42258 = G__42275;
chunk__42230_42259 = G__42276;
count__42231_42260 = G__42277;
i__42232_42261 = G__42278;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_42221;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_42279 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42233_42280 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__42234_42281 = null;
var count__42235_42282 = (0);
var i__42236_42283 = (0);
while(true){
if((i__42236_42283 < count__42235_42282)){
var ref_42284 = cljs.core._nth.call(null,chunk__42234_42281,i__42236_42283);
cljs.core.remove_watch.call(null,ref_42284,key_42279);

var G__42285 = seq__42233_42280;
var G__42286 = chunk__42234_42281;
var G__42287 = count__42235_42282;
var G__42288 = (i__42236_42283 + (1));
seq__42233_42280 = G__42285;
chunk__42234_42281 = G__42286;
count__42235_42282 = G__42287;
i__42236_42283 = G__42288;
continue;
} else {
var temp__4657__auto___42289 = cljs.core.seq.call(null,seq__42233_42280);
if(temp__4657__auto___42289){
var seq__42233_42290__$1 = temp__4657__auto___42289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42233_42290__$1)){
var c__36028__auto___42291 = cljs.core.chunk_first.call(null,seq__42233_42290__$1);
var G__42292 = cljs.core.chunk_rest.call(null,seq__42233_42290__$1);
var G__42293 = c__36028__auto___42291;
var G__42294 = cljs.core.count.call(null,c__36028__auto___42291);
var G__42295 = (0);
seq__42233_42280 = G__42292;
chunk__42234_42281 = G__42293;
count__42235_42282 = G__42294;
i__42236_42283 = G__42295;
continue;
} else {
var ref_42296 = cljs.core.first.call(null,seq__42233_42290__$1);
cljs.core.remove_watch.call(null,ref_42296,key_42279);

var G__42297 = cljs.core.next.call(null,seq__42233_42290__$1);
var G__42298 = null;
var G__42299 = (0);
var G__42300 = (0);
seq__42233_42280 = G__42297;
chunk__42234_42281 = G__42298;
count__42235_42282 = G__42299;
i__42236_42283 = G__42300;
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
var args__36329__auto__ = [];
var len__36322__auto___42307 = arguments.length;
var i__36323__auto___42308 = (0);
while(true){
if((i__36323__auto___42308 < len__36322__auto___42307)){
args__36329__auto__.push((arguments[i__36323__auto___42308]));

var G__42309 = (i__36323__auto___42308 + (1));
i__36323__auto___42308 = G__42309;
continue;
} else {
}
break;
}

var argseq__36330__auto__ = ((((2) < args__36329__auto__.length))?(new cljs.core.IndexedSeq(args__36329__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36330__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__42304){
var map__42305 = p__42304;
var map__42305__$1 = ((((!((map__42305 == null)))?((((map__42305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42305):map__42305);
var options = map__42305__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq42301){
var G__42302 = cljs.core.first.call(null,seq42301);
var seq42301__$1 = cljs.core.next.call(null,seq42301);
var G__42303 = cljs.core.first.call(null,seq42301__$1);
var seq42301__$2 = cljs.core.next.call(null,seq42301__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__42302,G__42303,seq42301__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__36329__auto__ = [];
var len__36322__auto___42313 = arguments.length;
var i__36323__auto___42314 = (0);
while(true){
if((i__36323__auto___42314 < len__36322__auto___42313)){
args__36329__auto__.push((arguments[i__36323__auto___42314]));

var G__42315 = (i__36323__auto___42314 + (1));
i__36323__auto___42314 = G__42315;
continue;
} else {
}
break;
}

var argseq__36330__auto__ = ((((2) < args__36329__auto__.length))?(new cljs.core.IndexedSeq(args__36329__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36330__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq42310){
var G__42311 = cljs.core.first.call(null,seq42310);
var seq42310__$1 = cljs.core.next.call(null,seq42310);
var G__42312 = cljs.core.first.call(null,seq42310__$1);
var seq42310__$2 = cljs.core.next.call(null,seq42310__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__42311,G__42312,seq42310__$2);
});

