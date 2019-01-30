// Compiled by ClojureScript 1.10.439 {}
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
var seq__39643 = cljs.core.seq.call(null,props);
var chunk__39645 = null;
var count__39646 = (0);
var i__39647 = (0);
while(true){
if((i__39647 < count__39646)){
var vec__39649 = cljs.core._nth.call(null,chunk__39645,i__39647);
var k = cljs.core.nth.call(null,vec__39649,(0),null);
var v = cljs.core.nth.call(null,vec__39649,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__39655 = seq__39643;
var G__39656 = chunk__39645;
var G__39657 = count__39646;
var G__39658 = (i__39647 + (1));
seq__39643 = G__39655;
chunk__39645 = G__39656;
count__39646 = G__39657;
i__39647 = G__39658;
continue;
} else {
var G__39659 = seq__39643;
var G__39660 = chunk__39645;
var G__39661 = count__39646;
var G__39662 = (i__39647 + (1));
seq__39643 = G__39659;
chunk__39645 = G__39660;
count__39646 = G__39661;
i__39647 = G__39662;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39643);
if(temp__5720__auto__){
var seq__39643__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39643__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39643__$1);
var G__39663 = cljs.core.chunk_rest.call(null,seq__39643__$1);
var G__39664 = c__4461__auto__;
var G__39665 = cljs.core.count.call(null,c__4461__auto__);
var G__39666 = (0);
seq__39643 = G__39663;
chunk__39645 = G__39664;
count__39646 = G__39665;
i__39647 = G__39666;
continue;
} else {
var vec__39652 = cljs.core.first.call(null,seq__39643__$1);
var k = cljs.core.nth.call(null,vec__39652,(0),null);
var v = cljs.core.nth.call(null,vec__39652,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__39667 = cljs.core.next.call(null,seq__39643__$1);
var G__39668 = null;
var G__39669 = (0);
var G__39670 = (0);
seq__39643 = G__39667;
chunk__39645 = G__39668;
count__39646 = G__39669;
i__39647 = G__39670;
continue;
} else {
var G__39671 = cljs.core.next.call(null,seq__39643__$1);
var G__39672 = null;
var G__39673 = (0);
var G__39674 = (0);
seq__39643 = G__39671;
chunk__39645 = G__39672;
count__39646 = G__39673;
i__39647 = G__39674;
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
return (function (p1__39676_SHARP_,p2__39675_SHARP_){
return p2__39675_SHARP_.call(null,p1__39676_SHARP_);
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
return (function (p1__39678_SHARP_,p2__39677_SHARP_){
return p2__39677_SHARP_.call(null,old_state,p1__39678_SHARP_);
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
var or__4047__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__39679_SHARP_){
return p1__39679_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
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
var vec__39681 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__39681,(0),null);
var next_state = cljs.core.nth.call(null,vec__39681,(1),null);
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
return (function (p1__39680_SHARP_){
return p1__39680_SHARP_.call(null,state);
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
var G__39684__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__39684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39685__i = 0, G__39685__a = new Array(arguments.length -  0);
while (G__39685__i < G__39685__a.length) {G__39685__a[G__39685__i] = arguments[G__39685__i + 0]; ++G__39685__i;}
  args = new cljs.core.IndexedSeq(G__39685__a,0,null);
} 
return G__39684__delegate.call(this,args);};
G__39684.cljs$lang$maxFixedArity = 0;
G__39684.cljs$lang$applyTo = (function (arglist__39686){
var args = cljs.core.seq(arglist__39686);
return G__39684__delegate(args);
});
G__39684.cljs$core$IFn$_invoke$arity$variadic = G__39684__delegate;
return G__39684;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__39687__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__39687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39688__i = 0, G__39688__a = new Array(arguments.length -  0);
while (G__39688__i < G__39688__a.length) {G__39688__a[G__39688__i] = arguments[G__39688__i + 0]; ++G__39688__i;}
  args = new cljs.core.IndexedSeq(G__39688__a,0,null);
} 
return G__39687__delegate.call(this,args);};
G__39687.cljs$lang$maxFixedArity = 0;
G__39687.cljs$lang$applyTo = (function (arglist__39689){
var args = cljs.core.seq(arglist__39689);
return G__39687__delegate(args);
});
G__39687.cljs$core$IFn$_invoke$arity$variadic = G__39687__delegate;
return G__39687;
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
var G__39690__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__39690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39691__i = 0, G__39691__a = new Array(arguments.length -  0);
while (G__39691__i < G__39691__a.length) {G__39691__a[G__39691__i] = arguments[G__39691__i + 0]; ++G__39691__i;}
  args = new cljs.core.IndexedSeq(G__39691__a,0,null);
} 
return G__39690__delegate.call(this,args);};
G__39690.cljs$lang$maxFixedArity = 0;
G__39690.cljs$lang$applyTo = (function (arglist__39692){
var args = cljs.core.seq(arglist__39692);
return G__39690__delegate(args);
});
G__39690.cljs$core$IFn$_invoke$arity$variadic = G__39690__delegate;
return G__39690;
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
rum.core.schedule = (function (){var or__4047__auto__ = (function (){var and__4036__auto__ = (typeof window !== 'undefined');
if(and__4036__auto__){
var or__4047__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ((function (or__4047__auto__){
return (function (p1__39693_SHARP_){
return setTimeout(p1__39693_SHARP_,(16));
});
;})(or__4047__auto__))
}
})();
rum.core.batch = (function (){var or__4047__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return ((function (or__4047__auto____$1,or__4047__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__4047__auto____$1,or__4047__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__39694 = cljs.core.seq.call(null,queue);
var chunk__39696 = null;
var count__39697 = (0);
var i__39698 = (0);
while(true){
if((i__39698 < count__39697)){
var comp = cljs.core._nth.call(null,chunk__39696,i__39698);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__39700 = seq__39694;
var G__39701 = chunk__39696;
var G__39702 = count__39697;
var G__39703 = (i__39698 + (1));
seq__39694 = G__39700;
chunk__39696 = G__39701;
count__39697 = G__39702;
i__39698 = G__39703;
continue;
} else {
var G__39704 = seq__39694;
var G__39705 = chunk__39696;
var G__39706 = count__39697;
var G__39707 = (i__39698 + (1));
seq__39694 = G__39704;
chunk__39696 = G__39705;
count__39697 = G__39706;
i__39698 = G__39707;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39694);
if(temp__5720__auto__){
var seq__39694__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39694__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__39694__$1);
var G__39708 = cljs.core.chunk_rest.call(null,seq__39694__$1);
var G__39709 = c__4461__auto__;
var G__39710 = cljs.core.count.call(null,c__4461__auto__);
var G__39711 = (0);
seq__39694 = G__39708;
chunk__39696 = G__39709;
count__39697 = G__39710;
i__39698 = G__39711;
continue;
} else {
var comp = cljs.core.first.call(null,seq__39694__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__39712 = cljs.core.next.call(null,seq__39694__$1);
var G__39713 = null;
var G__39714 = (0);
var G__39715 = (0);
seq__39694 = G__39712;
chunk__39696 = G__39713;
count__39697 = G__39714;
i__39698 = G__39715;
continue;
} else {
var G__39716 = cljs.core.next.call(null,seq__39694__$1);
var G__39717 = null;
var G__39718 = (0);
var G__39719 = (0);
seq__39694 = G__39716;
chunk__39696 = G__39717;
count__39697 = G__39718;
i__39698 = G__39719;
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
var G__39721 = arguments.length;
switch (G__39721) {
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
var _STAR_reactions_STAR__orig_val__39723 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__39724 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__39724;

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__39725 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__39725,(0),null);
var next_state = cljs.core.nth.call(null,vec__39725,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__39728_39740 = cljs.core.seq.call(null,old_reactions);
var chunk__39729_39741 = null;
var count__39730_39742 = (0);
var i__39731_39743 = (0);
while(true){
if((i__39731_39743 < count__39730_39742)){
var ref_39744 = cljs.core._nth.call(null,chunk__39729_39741,i__39731_39743);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_39744)){
} else {
cljs.core.remove_watch.call(null,ref_39744,key);
}


var G__39745 = seq__39728_39740;
var G__39746 = chunk__39729_39741;
var G__39747 = count__39730_39742;
var G__39748 = (i__39731_39743 + (1));
seq__39728_39740 = G__39745;
chunk__39729_39741 = G__39746;
count__39730_39742 = G__39747;
i__39731_39743 = G__39748;
continue;
} else {
var temp__5720__auto___39749 = cljs.core.seq.call(null,seq__39728_39740);
if(temp__5720__auto___39749){
var seq__39728_39750__$1 = temp__5720__auto___39749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39728_39750__$1)){
var c__4461__auto___39751 = cljs.core.chunk_first.call(null,seq__39728_39750__$1);
var G__39752 = cljs.core.chunk_rest.call(null,seq__39728_39750__$1);
var G__39753 = c__4461__auto___39751;
var G__39754 = cljs.core.count.call(null,c__4461__auto___39751);
var G__39755 = (0);
seq__39728_39740 = G__39752;
chunk__39729_39741 = G__39753;
count__39730_39742 = G__39754;
i__39731_39743 = G__39755;
continue;
} else {
var ref_39756 = cljs.core.first.call(null,seq__39728_39750__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_39756)){
} else {
cljs.core.remove_watch.call(null,ref_39756,key);
}


var G__39757 = cljs.core.next.call(null,seq__39728_39750__$1);
var G__39758 = null;
var G__39759 = (0);
var G__39760 = (0);
seq__39728_39740 = G__39757;
chunk__39729_39741 = G__39758;
count__39730_39742 = G__39759;
i__39731_39743 = G__39760;
continue;
}
} else {
}
}
break;
}

var seq__39732_39761 = cljs.core.seq.call(null,new_reactions);
var chunk__39733_39762 = null;
var count__39734_39763 = (0);
var i__39735_39764 = (0);
while(true){
if((i__39735_39764 < count__39734_39763)){
var ref_39765 = cljs.core._nth.call(null,chunk__39733_39762,i__39735_39764);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_39765)){
} else {
cljs.core.add_watch.call(null,ref_39765,key,((function (seq__39732_39761,chunk__39733_39762,count__39734_39763,i__39735_39764,ref_39765,comp,old_reactions,vec__39725,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__39723,_STAR_reactions_STAR__temp_val__39724){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__39732_39761,chunk__39733_39762,count__39734_39763,i__39735_39764,ref_39765,comp,old_reactions,vec__39725,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__39723,_STAR_reactions_STAR__temp_val__39724))
);
}


var G__39766 = seq__39732_39761;
var G__39767 = chunk__39733_39762;
var G__39768 = count__39734_39763;
var G__39769 = (i__39735_39764 + (1));
seq__39732_39761 = G__39766;
chunk__39733_39762 = G__39767;
count__39734_39763 = G__39768;
i__39735_39764 = G__39769;
continue;
} else {
var temp__5720__auto___39770 = cljs.core.seq.call(null,seq__39732_39761);
if(temp__5720__auto___39770){
var seq__39732_39771__$1 = temp__5720__auto___39770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39732_39771__$1)){
var c__4461__auto___39772 = cljs.core.chunk_first.call(null,seq__39732_39771__$1);
var G__39773 = cljs.core.chunk_rest.call(null,seq__39732_39771__$1);
var G__39774 = c__4461__auto___39772;
var G__39775 = cljs.core.count.call(null,c__4461__auto___39772);
var G__39776 = (0);
seq__39732_39761 = G__39773;
chunk__39733_39762 = G__39774;
count__39734_39763 = G__39775;
i__39735_39764 = G__39776;
continue;
} else {
var ref_39777 = cljs.core.first.call(null,seq__39732_39771__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_39777)){
} else {
cljs.core.add_watch.call(null,ref_39777,key,((function (seq__39732_39761,chunk__39733_39762,count__39734_39763,i__39735_39764,ref_39777,seq__39732_39771__$1,temp__5720__auto___39770,comp,old_reactions,vec__39725,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__39723,_STAR_reactions_STAR__temp_val__39724){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__39732_39761,chunk__39733_39762,count__39734_39763,i__39735_39764,ref_39777,seq__39732_39771__$1,temp__5720__auto___39770,comp,old_reactions,vec__39725,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__39723,_STAR_reactions_STAR__temp_val__39724))
);
}


var G__39778 = cljs.core.next.call(null,seq__39732_39771__$1);
var G__39779 = null;
var G__39780 = (0);
var G__39781 = (0);
seq__39732_39761 = G__39778;
chunk__39733_39762 = G__39779;
count__39734_39763 = G__39780;
i__39735_39764 = G__39781;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__39723;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_39782 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__39736_39783 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__39737_39784 = null;
var count__39738_39785 = (0);
var i__39739_39786 = (0);
while(true){
if((i__39739_39786 < count__39738_39785)){
var ref_39787 = cljs.core._nth.call(null,chunk__39737_39784,i__39739_39786);
cljs.core.remove_watch.call(null,ref_39787,key_39782);


var G__39788 = seq__39736_39783;
var G__39789 = chunk__39737_39784;
var G__39790 = count__39738_39785;
var G__39791 = (i__39739_39786 + (1));
seq__39736_39783 = G__39788;
chunk__39737_39784 = G__39789;
count__39738_39785 = G__39790;
i__39739_39786 = G__39791;
continue;
} else {
var temp__5720__auto___39792 = cljs.core.seq.call(null,seq__39736_39783);
if(temp__5720__auto___39792){
var seq__39736_39793__$1 = temp__5720__auto___39792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39736_39793__$1)){
var c__4461__auto___39794 = cljs.core.chunk_first.call(null,seq__39736_39793__$1);
var G__39795 = cljs.core.chunk_rest.call(null,seq__39736_39793__$1);
var G__39796 = c__4461__auto___39794;
var G__39797 = cljs.core.count.call(null,c__4461__auto___39794);
var G__39798 = (0);
seq__39736_39783 = G__39795;
chunk__39737_39784 = G__39796;
count__39738_39785 = G__39797;
i__39739_39786 = G__39798;
continue;
} else {
var ref_39799 = cljs.core.first.call(null,seq__39736_39793__$1);
cljs.core.remove_watch.call(null,ref_39799,key_39782);


var G__39800 = cljs.core.next.call(null,seq__39736_39793__$1);
var G__39801 = null;
var G__39802 = (0);
var G__39803 = (0);
seq__39736_39783 = G__39800;
chunk__39737_39784 = G__39801;
count__39738_39785 = G__39802;
i__39739_39786 = G__39803;
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
var args__4647__auto__ = [];
var len__4641__auto___39810 = arguments.length;
var i__4642__auto___39811 = (0);
while(true){
if((i__4642__auto___39811 < len__4641__auto___39810)){
args__4647__auto__.push((arguments[i__4642__auto___39811]));

var G__39812 = (i__4642__auto___39811 + (1));
i__4642__auto___39811 = G__39812;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__39807){
var map__39808 = p__39807;
var map__39808__$1 = (((((!((map__39808 == null))))?(((((map__39808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39808):map__39808);
var options = map__39808__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq39804){
var G__39805 = cljs.core.first.call(null,seq39804);
var seq39804__$1 = cljs.core.next.call(null,seq39804);
var G__39806 = cljs.core.first.call(null,seq39804__$1);
var seq39804__$2 = cljs.core.next.call(null,seq39804__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39805,G__39806,seq39804__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4647__auto__ = [];
var len__4641__auto___39816 = arguments.length;
var i__4642__auto___39817 = (0);
while(true){
if((i__4642__auto___39817 < len__4641__auto___39816)){
args__4647__auto__.push((arguments[i__4642__auto___39817]));

var G__39818 = (i__4642__auto___39817 + (1));
i__4642__auto___39817 = G__39818;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq39813){
var G__39814 = cljs.core.first.call(null,seq39813);
var seq39813__$1 = cljs.core.next.call(null,seq39813);
var G__39815 = cljs.core.first.call(null,seq39813__$1);
var seq39813__$2 = cljs.core.next.call(null,seq39813__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39814,G__39815,seq39813__$2);
});

