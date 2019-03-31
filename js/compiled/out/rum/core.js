// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__37681 = cljs.core.seq.call(null,props);
var chunk__37683 = null;
var count__37684 = (0);
var i__37685 = (0);
while(true){
if((i__37685 < count__37684)){
var vec__37693 = cljs.core._nth.call(null,chunk__37683,i__37685);
var k = cljs.core.nth.call(null,vec__37693,(0),null);
var v = cljs.core.nth.call(null,vec__37693,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__37699 = seq__37681;
var G__37700 = chunk__37683;
var G__37701 = count__37684;
var G__37702 = (i__37685 + (1));
seq__37681 = G__37699;
chunk__37683 = G__37700;
count__37684 = G__37701;
i__37685 = G__37702;
continue;
} else {
var G__37703 = seq__37681;
var G__37704 = chunk__37683;
var G__37705 = count__37684;
var G__37706 = (i__37685 + (1));
seq__37681 = G__37703;
chunk__37683 = G__37704;
count__37684 = G__37705;
i__37685 = G__37706;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37681);
if(temp__5720__auto__){
var seq__37681__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37681__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__37681__$1);
var G__37707 = cljs.core.chunk_rest.call(null,seq__37681__$1);
var G__37708 = c__4550__auto__;
var G__37709 = cljs.core.count.call(null,c__4550__auto__);
var G__37710 = (0);
seq__37681 = G__37707;
chunk__37683 = G__37708;
count__37684 = G__37709;
i__37685 = G__37710;
continue;
} else {
var vec__37696 = cljs.core.first.call(null,seq__37681__$1);
var k = cljs.core.nth.call(null,vec__37696,(0),null);
var v = cljs.core.nth.call(null,vec__37696,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__37711 = cljs.core.next.call(null,seq__37681__$1);
var G__37712 = null;
var G__37713 = (0);
var G__37714 = (0);
seq__37681 = G__37711;
chunk__37683 = G__37712;
count__37684 = G__37713;
i__37685 = G__37714;
continue;
} else {
var G__37715 = cljs.core.next.call(null,seq__37681__$1);
var G__37716 = null;
var G__37717 = (0);
var G__37718 = (0);
seq__37681 = G__37715;
chunk__37683 = G__37716;
count__37684 = G__37717;
i__37685 = G__37718;
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
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__37720_SHARP_,p2__37719_SHARP_){
return p2__37719_SHARP_.call(null,p1__37720_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__37722_SHARP_,p2__37721_SHARP_){
return p2__37721_SHARP_.call(null,old_state,p1__37722_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__4131__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__37723_SHARP_){
return p1__37723_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__37725 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__37725,(0),null);
var next_state = cljs.core.nth.call(null,vec__37725,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__37724_SHARP_){
return p1__37724_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?((function (class$,key_fn){
return (function() { 
var G__37728__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__37728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37729__i = 0, G__37729__a = new Array(arguments.length -  0);
while (G__37729__i < G__37729__a.length) {G__37729__a[G__37729__i] = arguments[G__37729__i + 0]; ++G__37729__i;}
  args = new cljs.core.IndexedSeq(G__37729__a,0,null);
} 
return G__37728__delegate.call(this,args);};
G__37728.cljs$lang$maxFixedArity = 0;
G__37728.cljs$lang$applyTo = (function (arglist__37730){
var args = cljs.core.seq(arglist__37730);
return G__37728__delegate(args);
});
G__37728.cljs$core$IFn$_invoke$arity$variadic = G__37728__delegate;
return G__37728;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__37731__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__37731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37732__i = 0, G__37732__a = new Array(arguments.length -  0);
while (G__37732__i < G__37732__a.length) {G__37732__a[G__37732__i] = arguments[G__37732__i + 0]; ++G__37732__i;}
  args = new cljs.core.IndexedSeq(G__37732__a,0,null);
} 
return G__37731__delegate.call(this,args);};
G__37731.cljs$lang$maxFixedArity = 0;
G__37731.cljs$lang$applyTo = (function (arglist__37733){
var args = cljs.core.seq(arglist__37733);
return G__37731__delegate(args);
});
G__37731.cljs$core$IFn$_invoke$arity$variadic = G__37731__delegate;
return G__37731;
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
var G__37734__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__37734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37735__i = 0, G__37735__a = new Array(arguments.length -  0);
while (G__37735__i < G__37735__a.length) {G__37735__a[G__37735__i] = arguments[G__37735__i + 0]; ++G__37735__i;}
  args = new cljs.core.IndexedSeq(G__37735__a,0,null);
} 
return G__37734__delegate.call(this,args);};
G__37734.cljs$lang$maxFixedArity = 0;
G__37734.cljs$lang$applyTo = (function (arglist__37736){
var args = cljs.core.seq(arglist__37736);
return G__37734__delegate(args);
});
G__37734.cljs$core$IFn$_invoke$arity$variadic = G__37734__delegate;
return G__37734;
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
rum.core.schedule = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = (typeof window !== 'undefined');
if(and__4120__auto__){
var or__4131__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__){
return (function (p1__37737_SHARP_){
return setTimeout(p1__37737_SHARP_,(16));
});
;})(or__4131__auto__))
}
})();
rum.core.batch = (function (){var or__4131__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ((function (or__4131__auto____$1,or__4131__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__4131__auto____$1,or__4131__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__37738 = cljs.core.seq.call(null,queue);
var chunk__37740 = null;
var count__37741 = (0);
var i__37742 = (0);
while(true){
if((i__37742 < count__37741)){
var comp = cljs.core._nth.call(null,chunk__37740,i__37742);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__37744 = seq__37738;
var G__37745 = chunk__37740;
var G__37746 = count__37741;
var G__37747 = (i__37742 + (1));
seq__37738 = G__37744;
chunk__37740 = G__37745;
count__37741 = G__37746;
i__37742 = G__37747;
continue;
} else {
var G__37748 = seq__37738;
var G__37749 = chunk__37740;
var G__37750 = count__37741;
var G__37751 = (i__37742 + (1));
seq__37738 = G__37748;
chunk__37740 = G__37749;
count__37741 = G__37750;
i__37742 = G__37751;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__37738);
if(temp__5720__auto__){
var seq__37738__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37738__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__37738__$1);
var G__37752 = cljs.core.chunk_rest.call(null,seq__37738__$1);
var G__37753 = c__4550__auto__;
var G__37754 = cljs.core.count.call(null,c__4550__auto__);
var G__37755 = (0);
seq__37738 = G__37752;
chunk__37740 = G__37753;
count__37741 = G__37754;
i__37742 = G__37755;
continue;
} else {
var comp = cljs.core.first.call(null,seq__37738__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__37756 = cljs.core.next.call(null,seq__37738__$1);
var G__37757 = null;
var G__37758 = (0);
var G__37759 = (0);
seq__37738 = G__37756;
chunk__37740 = G__37757;
count__37741 = G__37758;
i__37742 = G__37759;
continue;
} else {
var G__37760 = cljs.core.next.call(null,seq__37738__$1);
var G__37761 = null;
var G__37762 = (0);
var G__37763 = (0);
seq__37738 = G__37760;
chunk__37740 = G__37761;
count__37741 = G__37762;
i__37742 = G__37763;
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
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__37765 = arguments.length;
switch (G__37765) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__37767 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__37768 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__37768;

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__37769 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__37769,(0),null);
var next_state = cljs.core.nth.call(null,vec__37769,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__37772_37784 = cljs.core.seq.call(null,old_reactions);
var chunk__37773_37785 = null;
var count__37774_37786 = (0);
var i__37775_37787 = (0);
while(true){
if((i__37775_37787 < count__37774_37786)){
var ref_37788 = cljs.core._nth.call(null,chunk__37773_37785,i__37775_37787);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_37788)){
} else {
cljs.core.remove_watch.call(null,ref_37788,key);
}


var G__37789 = seq__37772_37784;
var G__37790 = chunk__37773_37785;
var G__37791 = count__37774_37786;
var G__37792 = (i__37775_37787 + (1));
seq__37772_37784 = G__37789;
chunk__37773_37785 = G__37790;
count__37774_37786 = G__37791;
i__37775_37787 = G__37792;
continue;
} else {
var temp__5720__auto___37793 = cljs.core.seq.call(null,seq__37772_37784);
if(temp__5720__auto___37793){
var seq__37772_37794__$1 = temp__5720__auto___37793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37772_37794__$1)){
var c__4550__auto___37795 = cljs.core.chunk_first.call(null,seq__37772_37794__$1);
var G__37796 = cljs.core.chunk_rest.call(null,seq__37772_37794__$1);
var G__37797 = c__4550__auto___37795;
var G__37798 = cljs.core.count.call(null,c__4550__auto___37795);
var G__37799 = (0);
seq__37772_37784 = G__37796;
chunk__37773_37785 = G__37797;
count__37774_37786 = G__37798;
i__37775_37787 = G__37799;
continue;
} else {
var ref_37800 = cljs.core.first.call(null,seq__37772_37794__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_37800)){
} else {
cljs.core.remove_watch.call(null,ref_37800,key);
}


var G__37801 = cljs.core.next.call(null,seq__37772_37794__$1);
var G__37802 = null;
var G__37803 = (0);
var G__37804 = (0);
seq__37772_37784 = G__37801;
chunk__37773_37785 = G__37802;
count__37774_37786 = G__37803;
i__37775_37787 = G__37804;
continue;
}
} else {
}
}
break;
}

var seq__37776_37805 = cljs.core.seq.call(null,new_reactions);
var chunk__37777_37806 = null;
var count__37778_37807 = (0);
var i__37779_37808 = (0);
while(true){
if((i__37779_37808 < count__37778_37807)){
var ref_37809 = cljs.core._nth.call(null,chunk__37777_37806,i__37779_37808);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_37809)){
} else {
cljs.core.add_watch.call(null,ref_37809,key,((function (seq__37776_37805,chunk__37777_37806,count__37778_37807,i__37779_37808,ref_37809,comp,old_reactions,vec__37769,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__37767,_STAR_reactions_STAR__temp_val__37768){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__37776_37805,chunk__37777_37806,count__37778_37807,i__37779_37808,ref_37809,comp,old_reactions,vec__37769,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__37767,_STAR_reactions_STAR__temp_val__37768))
);
}


var G__37810 = seq__37776_37805;
var G__37811 = chunk__37777_37806;
var G__37812 = count__37778_37807;
var G__37813 = (i__37779_37808 + (1));
seq__37776_37805 = G__37810;
chunk__37777_37806 = G__37811;
count__37778_37807 = G__37812;
i__37779_37808 = G__37813;
continue;
} else {
var temp__5720__auto___37814 = cljs.core.seq.call(null,seq__37776_37805);
if(temp__5720__auto___37814){
var seq__37776_37815__$1 = temp__5720__auto___37814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37776_37815__$1)){
var c__4550__auto___37816 = cljs.core.chunk_first.call(null,seq__37776_37815__$1);
var G__37817 = cljs.core.chunk_rest.call(null,seq__37776_37815__$1);
var G__37818 = c__4550__auto___37816;
var G__37819 = cljs.core.count.call(null,c__4550__auto___37816);
var G__37820 = (0);
seq__37776_37805 = G__37817;
chunk__37777_37806 = G__37818;
count__37778_37807 = G__37819;
i__37779_37808 = G__37820;
continue;
} else {
var ref_37821 = cljs.core.first.call(null,seq__37776_37815__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_37821)){
} else {
cljs.core.add_watch.call(null,ref_37821,key,((function (seq__37776_37805,chunk__37777_37806,count__37778_37807,i__37779_37808,ref_37821,seq__37776_37815__$1,temp__5720__auto___37814,comp,old_reactions,vec__37769,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__37767,_STAR_reactions_STAR__temp_val__37768){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__37776_37805,chunk__37777_37806,count__37778_37807,i__37779_37808,ref_37821,seq__37776_37815__$1,temp__5720__auto___37814,comp,old_reactions,vec__37769,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__37767,_STAR_reactions_STAR__temp_val__37768))
);
}


var G__37822 = cljs.core.next.call(null,seq__37776_37815__$1);
var G__37823 = null;
var G__37824 = (0);
var G__37825 = (0);
seq__37776_37805 = G__37822;
chunk__37777_37806 = G__37823;
count__37778_37807 = G__37824;
i__37779_37808 = G__37825;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__37767;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_37826 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__37780_37827 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__37781_37828 = null;
var count__37782_37829 = (0);
var i__37783_37830 = (0);
while(true){
if((i__37783_37830 < count__37782_37829)){
var ref_37831 = cljs.core._nth.call(null,chunk__37781_37828,i__37783_37830);
cljs.core.remove_watch.call(null,ref_37831,key_37826);


var G__37832 = seq__37780_37827;
var G__37833 = chunk__37781_37828;
var G__37834 = count__37782_37829;
var G__37835 = (i__37783_37830 + (1));
seq__37780_37827 = G__37832;
chunk__37781_37828 = G__37833;
count__37782_37829 = G__37834;
i__37783_37830 = G__37835;
continue;
} else {
var temp__5720__auto___37836 = cljs.core.seq.call(null,seq__37780_37827);
if(temp__5720__auto___37836){
var seq__37780_37837__$1 = temp__5720__auto___37836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37780_37837__$1)){
var c__4550__auto___37838 = cljs.core.chunk_first.call(null,seq__37780_37837__$1);
var G__37839 = cljs.core.chunk_rest.call(null,seq__37780_37837__$1);
var G__37840 = c__4550__auto___37838;
var G__37841 = cljs.core.count.call(null,c__4550__auto___37838);
var G__37842 = (0);
seq__37780_37827 = G__37839;
chunk__37781_37828 = G__37840;
count__37782_37829 = G__37841;
i__37783_37830 = G__37842;
continue;
} else {
var ref_37843 = cljs.core.first.call(null,seq__37780_37837__$1);
cljs.core.remove_watch.call(null,ref_37843,key_37826);


var G__37844 = cljs.core.next.call(null,seq__37780_37837__$1);
var G__37845 = null;
var G__37846 = (0);
var G__37847 = (0);
seq__37780_37827 = G__37844;
chunk__37781_37828 = G__37845;
count__37782_37829 = G__37846;
i__37783_37830 = G__37847;
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
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x) ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37854 = arguments.length;
var i__4731__auto___37855 = (0);
while(true){
if((i__4731__auto___37855 < len__4730__auto___37854)){
args__4736__auto__.push((arguments[i__4731__auto___37855]));

var G__37856 = (i__4731__auto___37855 + (1));
i__4731__auto___37855 = G__37856;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__37851){
var map__37852 = p__37851;
var map__37852__$1 = (((((!((map__37852 == null))))?(((((map__37852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37852):map__37852);
var options = map__37852__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq37848){
var G__37849 = cljs.core.first.call(null,seq37848);
var seq37848__$1 = cljs.core.next.call(null,seq37848);
var G__37850 = cljs.core.first.call(null,seq37848__$1);
var seq37848__$2 = cljs.core.next.call(null,seq37848__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37849,G__37850,seq37848__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37860 = arguments.length;
var i__4731__auto___37861 = (0);
while(true){
if((i__4731__auto___37861 < len__4730__auto___37860)){
args__4736__auto__.push((arguments[i__4731__auto___37861]));

var G__37862 = (i__4731__auto___37861 + (1));
i__4731__auto___37861 = G__37862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq37857){
var G__37858 = cljs.core.first.call(null,seq37857);
var seq37857__$1 = cljs.core.next.call(null,seq37857);
var G__37859 = cljs.core.first.call(null,seq37857__$1);
var seq37857__$2 = cljs.core.next.call(null,seq37857__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37858,G__37859,seq37857__$2);
});

