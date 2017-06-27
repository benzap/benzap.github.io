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
return (function (p1__42634_SHARP_,p2__42633_SHARP_){
return p2__42633_SHARP_.call(null,p1__42634_SHARP_);
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
return (function (p1__42636_SHARP_,p2__42635_SHARP_){
return p2__42635_SHARP_.call(null,old_state,p1__42636_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35672__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42637_SHARP_){
return p1__42637_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__42642 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__42642,(0),null);
var next_state = cljs.core.nth.call(null,vec__42642,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42638_SHARP_){
return p1__42638_SHARP_.call(null,state);
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
var G__42645__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__42645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42646__i = 0, G__42646__a = new Array(arguments.length -  0);
while (G__42646__i < G__42646__a.length) {G__42646__a[G__42646__i] = arguments[G__42646__i + 0]; ++G__42646__i;}
  args = new cljs.core.IndexedSeq(G__42646__a,0,null);
} 
return G__42645__delegate.call(this,args);};
G__42645.cljs$lang$maxFixedArity = 0;
G__42645.cljs$lang$applyTo = (function (arglist__42647){
var args = cljs.core.seq(arglist__42647);
return G__42645__delegate(args);
});
G__42645.cljs$core$IFn$_invoke$arity$variadic = G__42645__delegate;
return G__42645;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__42648__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__42648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42649__i = 0, G__42649__a = new Array(arguments.length -  0);
while (G__42649__i < G__42649__a.length) {G__42649__a[G__42649__i] = arguments[G__42649__i + 0]; ++G__42649__i;}
  args = new cljs.core.IndexedSeq(G__42649__a,0,null);
} 
return G__42648__delegate.call(this,args);};
G__42648.cljs$lang$maxFixedArity = 0;
G__42648.cljs$lang$applyTo = (function (arglist__42650){
var args = cljs.core.seq(arglist__42650);
return G__42648__delegate(args);
});
G__42648.cljs$core$IFn$_invoke$arity$variadic = G__42648__delegate;
return G__42648;
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
var G__42651__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__42651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42652__i = 0, G__42652__a = new Array(arguments.length -  0);
while (G__42652__i < G__42652__a.length) {G__42652__a[G__42652__i] = arguments[G__42652__i + 0]; ++G__42652__i;}
  args = new cljs.core.IndexedSeq(G__42652__a,0,null);
} 
return G__42651__delegate.call(this,args);};
G__42651.cljs$lang$maxFixedArity = 0;
G__42651.cljs$lang$applyTo = (function (arglist__42653){
var args = cljs.core.seq(arglist__42653);
return G__42651__delegate(args);
});
G__42651.cljs$core$IFn$_invoke$arity$variadic = G__42651__delegate;
return G__42651;
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
rum.core.schedule = (function (){var or__35672__auto__ = (function (){var and__35660__auto__ = typeof window !== 'undefined';
if(and__35660__auto__){
var or__35672__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
var or__35672__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35672__auto____$1)){
return or__35672__auto____$1;
} else {
var or__35672__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35672__auto____$2)){
return or__35672__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__35660__auto__;
}
})();
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
return ((function (or__35672__auto__){
return (function (p1__42654_SHARP_){
return setTimeout(p1__42654_SHARP_,(16));
});
;})(or__35672__auto__))
}
})();
rum.core.batch = (function (){var or__35672__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
} else {
var or__35672__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35672__auto____$1)){
return or__35672__auto____$1;
} else {
return ((function (or__35672__auto____$1,or__35672__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__35672__auto____$1,or__35672__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__42661 = cljs.core.seq.call(null,queue);
var chunk__42663 = null;
var count__42664 = (0);
var i__42665 = (0);
while(true){
if((i__42665 < count__42664)){
var comp = cljs.core._nth.call(null,chunk__42663,i__42665);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42667 = seq__42661;
var G__42668 = chunk__42663;
var G__42669 = count__42664;
var G__42670 = (i__42665 + (1));
seq__42661 = G__42667;
chunk__42663 = G__42668;
count__42664 = G__42669;
i__42665 = G__42670;
continue;
} else {
var G__42671 = seq__42661;
var G__42672 = chunk__42663;
var G__42673 = count__42664;
var G__42674 = (i__42665 + (1));
seq__42661 = G__42671;
chunk__42663 = G__42672;
count__42664 = G__42673;
i__42665 = G__42674;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42661);
if(temp__4657__auto__){
var seq__42661__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42661__$1)){
var c__36491__auto__ = cljs.core.chunk_first.call(null,seq__42661__$1);
var G__42675 = cljs.core.chunk_rest.call(null,seq__42661__$1);
var G__42676 = c__36491__auto__;
var G__42677 = cljs.core.count.call(null,c__36491__auto__);
var G__42678 = (0);
seq__42661 = G__42675;
chunk__42663 = G__42676;
count__42664 = G__42677;
i__42665 = G__42678;
continue;
} else {
var comp = cljs.core.first.call(null,seq__42661__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__42679 = cljs.core.next.call(null,seq__42661__$1);
var G__42680 = null;
var G__42681 = (0);
var G__42682 = (0);
seq__42661 = G__42679;
chunk__42663 = G__42680;
count__42664 = G__42681;
i__42665 = G__42682;
continue;
} else {
var G__42683 = cljs.core.next.call(null,seq__42661__$1);
var G__42684 = null;
var G__42685 = (0);
var G__42686 = (0);
seq__42661 = G__42683;
chunk__42663 = G__42684;
count__42664 = G__42685;
i__42665 = G__42686;
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
var args42687 = [];
var len__36785__auto___42690 = arguments.length;
var i__36786__auto___42691 = (0);
while(true){
if((i__36786__auto___42691 < len__36785__auto___42690)){
args42687.push((arguments[i__36786__auto___42691]));

var G__42692 = (i__36786__auto___42691 + (1));
i__36786__auto___42691 = G__42692;
continue;
} else {
}
break;
}

var G__42689 = args42687.length;
switch (G__42689) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42687.length)].join('')));

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
var _STAR_reactions_STAR_42694 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__42695 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__42695,(0),null);
var next_state = cljs.core.nth.call(null,vec__42695,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42698_42710 = cljs.core.seq.call(null,old_reactions);
var chunk__42699_42711 = null;
var count__42700_42712 = (0);
var i__42701_42713 = (0);
while(true){
if((i__42701_42713 < count__42700_42712)){
var ref_42714 = cljs.core._nth.call(null,chunk__42699_42711,i__42701_42713);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42714)){
} else {
cljs.core.remove_watch.call(null,ref_42714,key);
}

var G__42715 = seq__42698_42710;
var G__42716 = chunk__42699_42711;
var G__42717 = count__42700_42712;
var G__42718 = (i__42701_42713 + (1));
seq__42698_42710 = G__42715;
chunk__42699_42711 = G__42716;
count__42700_42712 = G__42717;
i__42701_42713 = G__42718;
continue;
} else {
var temp__4657__auto___42719 = cljs.core.seq.call(null,seq__42698_42710);
if(temp__4657__auto___42719){
var seq__42698_42720__$1 = temp__4657__auto___42719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42698_42720__$1)){
var c__36491__auto___42721 = cljs.core.chunk_first.call(null,seq__42698_42720__$1);
var G__42722 = cljs.core.chunk_rest.call(null,seq__42698_42720__$1);
var G__42723 = c__36491__auto___42721;
var G__42724 = cljs.core.count.call(null,c__36491__auto___42721);
var G__42725 = (0);
seq__42698_42710 = G__42722;
chunk__42699_42711 = G__42723;
count__42700_42712 = G__42724;
i__42701_42713 = G__42725;
continue;
} else {
var ref_42726 = cljs.core.first.call(null,seq__42698_42720__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_42726)){
} else {
cljs.core.remove_watch.call(null,ref_42726,key);
}

var G__42727 = cljs.core.next.call(null,seq__42698_42720__$1);
var G__42728 = null;
var G__42729 = (0);
var G__42730 = (0);
seq__42698_42710 = G__42727;
chunk__42699_42711 = G__42728;
count__42700_42712 = G__42729;
i__42701_42713 = G__42730;
continue;
}
} else {
}
}
break;
}

var seq__42702_42731 = cljs.core.seq.call(null,new_reactions);
var chunk__42703_42732 = null;
var count__42704_42733 = (0);
var i__42705_42734 = (0);
while(true){
if((i__42705_42734 < count__42704_42733)){
var ref_42735 = cljs.core._nth.call(null,chunk__42703_42732,i__42705_42734);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42735)){
} else {
cljs.core.add_watch.call(null,ref_42735,key,((function (seq__42702_42731,chunk__42703_42732,count__42704_42733,i__42705_42734,ref_42735,comp,old_reactions,vec__42695,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42694){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42702_42731,chunk__42703_42732,count__42704_42733,i__42705_42734,ref_42735,comp,old_reactions,vec__42695,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42694))
);
}

var G__42736 = seq__42702_42731;
var G__42737 = chunk__42703_42732;
var G__42738 = count__42704_42733;
var G__42739 = (i__42705_42734 + (1));
seq__42702_42731 = G__42736;
chunk__42703_42732 = G__42737;
count__42704_42733 = G__42738;
i__42705_42734 = G__42739;
continue;
} else {
var temp__4657__auto___42740 = cljs.core.seq.call(null,seq__42702_42731);
if(temp__4657__auto___42740){
var seq__42702_42741__$1 = temp__4657__auto___42740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42702_42741__$1)){
var c__36491__auto___42742 = cljs.core.chunk_first.call(null,seq__42702_42741__$1);
var G__42743 = cljs.core.chunk_rest.call(null,seq__42702_42741__$1);
var G__42744 = c__36491__auto___42742;
var G__42745 = cljs.core.count.call(null,c__36491__auto___42742);
var G__42746 = (0);
seq__42702_42731 = G__42743;
chunk__42703_42732 = G__42744;
count__42704_42733 = G__42745;
i__42705_42734 = G__42746;
continue;
} else {
var ref_42747 = cljs.core.first.call(null,seq__42702_42741__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_42747)){
} else {
cljs.core.add_watch.call(null,ref_42747,key,((function (seq__42702_42731,chunk__42703_42732,count__42704_42733,i__42705_42734,ref_42747,seq__42702_42741__$1,temp__4657__auto___42740,comp,old_reactions,vec__42695,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42694){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__42702_42731,chunk__42703_42732,count__42704_42733,i__42705_42734,ref_42747,seq__42702_42741__$1,temp__4657__auto___42740,comp,old_reactions,vec__42695,dom,next_state,new_reactions,key,_STAR_reactions_STAR_42694))
);
}

var G__42748 = cljs.core.next.call(null,seq__42702_42741__$1);
var G__42749 = null;
var G__42750 = (0);
var G__42751 = (0);
seq__42702_42731 = G__42748;
chunk__42703_42732 = G__42749;
count__42704_42733 = G__42750;
i__42705_42734 = G__42751;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_42694;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_42752 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__42706_42753 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__42707_42754 = null;
var count__42708_42755 = (0);
var i__42709_42756 = (0);
while(true){
if((i__42709_42756 < count__42708_42755)){
var ref_42757 = cljs.core._nth.call(null,chunk__42707_42754,i__42709_42756);
cljs.core.remove_watch.call(null,ref_42757,key_42752);

var G__42758 = seq__42706_42753;
var G__42759 = chunk__42707_42754;
var G__42760 = count__42708_42755;
var G__42761 = (i__42709_42756 + (1));
seq__42706_42753 = G__42758;
chunk__42707_42754 = G__42759;
count__42708_42755 = G__42760;
i__42709_42756 = G__42761;
continue;
} else {
var temp__4657__auto___42762 = cljs.core.seq.call(null,seq__42706_42753);
if(temp__4657__auto___42762){
var seq__42706_42763__$1 = temp__4657__auto___42762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42706_42763__$1)){
var c__36491__auto___42764 = cljs.core.chunk_first.call(null,seq__42706_42763__$1);
var G__42765 = cljs.core.chunk_rest.call(null,seq__42706_42763__$1);
var G__42766 = c__36491__auto___42764;
var G__42767 = cljs.core.count.call(null,c__36491__auto___42764);
var G__42768 = (0);
seq__42706_42753 = G__42765;
chunk__42707_42754 = G__42766;
count__42708_42755 = G__42767;
i__42709_42756 = G__42768;
continue;
} else {
var ref_42769 = cljs.core.first.call(null,seq__42706_42763__$1);
cljs.core.remove_watch.call(null,ref_42769,key_42752);

var G__42770 = cljs.core.next.call(null,seq__42706_42763__$1);
var G__42771 = null;
var G__42772 = (0);
var G__42773 = (0);
seq__42706_42753 = G__42770;
chunk__42707_42754 = G__42771;
count__42708_42755 = G__42772;
i__42709_42756 = G__42773;
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
var args__36792__auto__ = [];
var len__36785__auto___42780 = arguments.length;
var i__36786__auto___42781 = (0);
while(true){
if((i__36786__auto___42781 < len__36785__auto___42780)){
args__36792__auto__.push((arguments[i__36786__auto___42781]));

var G__42782 = (i__36786__auto___42781 + (1));
i__36786__auto___42781 = G__42782;
continue;
} else {
}
break;
}

var argseq__36793__auto__ = ((((2) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36793__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__42777){
var map__42778 = p__42777;
var map__42778__$1 = ((((!((map__42778 == null)))?((((map__42778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42778):map__42778);
var options = map__42778__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq42774){
var G__42775 = cljs.core.first.call(null,seq42774);
var seq42774__$1 = cljs.core.next.call(null,seq42774);
var G__42776 = cljs.core.first.call(null,seq42774__$1);
var seq42774__$2 = cljs.core.next.call(null,seq42774__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__42775,G__42776,seq42774__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__36792__auto__ = [];
var len__36785__auto___42786 = arguments.length;
var i__36786__auto___42787 = (0);
while(true){
if((i__36786__auto___42787 < len__36785__auto___42786)){
args__36792__auto__.push((arguments[i__36786__auto___42787]));

var G__42788 = (i__36786__auto___42787 + (1));
i__36786__auto___42787 = G__42788;
continue;
} else {
}
break;
}

var argseq__36793__auto__ = ((((2) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36793__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq42783){
var G__42784 = cljs.core.first.call(null,seq42783);
var seq42783__$1 = cljs.core.next.call(null,seq42783);
var G__42785 = cljs.core.first.call(null,seq42783__$1);
var seq42783__$2 = cljs.core.next.call(null,seq42783__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__42784,G__42785,seq42783__$2);
});

