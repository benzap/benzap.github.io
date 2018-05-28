// Compiled by ClojureScript 1.10.238 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__38229 = cljs.core.seq.call(null,props);
var chunk__38231 = null;
var count__38232 = (0);
var i__38233 = (0);
while(true){
if((i__38233 < count__38232)){
var vec__38235 = cljs.core._nth.call(null,chunk__38231,i__38233);
var k = cljs.core.nth.call(null,vec__38235,(0),null);
var v = cljs.core.nth.call(null,vec__38235,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__38241 = seq__38229;
var G__38242 = chunk__38231;
var G__38243 = count__38232;
var G__38244 = (i__38233 + (1));
seq__38229 = G__38241;
chunk__38231 = G__38242;
count__38232 = G__38243;
i__38233 = G__38244;
continue;
} else {
var G__38245 = seq__38229;
var G__38246 = chunk__38231;
var G__38247 = count__38232;
var G__38248 = (i__38233 + (1));
seq__38229 = G__38245;
chunk__38231 = G__38246;
count__38232 = G__38247;
i__38233 = G__38248;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38229);
if(temp__5457__auto__){
var seq__38229__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38229__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38229__$1);
var G__38249 = cljs.core.chunk_rest.call(null,seq__38229__$1);
var G__38250 = c__4319__auto__;
var G__38251 = cljs.core.count.call(null,c__4319__auto__);
var G__38252 = (0);
seq__38229 = G__38249;
chunk__38231 = G__38250;
count__38232 = G__38251;
i__38233 = G__38252;
continue;
} else {
var vec__38238 = cljs.core.first.call(null,seq__38229__$1);
var k = cljs.core.nth.call(null,vec__38238,(0),null);
var v = cljs.core.nth.call(null,vec__38238,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__38253 = cljs.core.next.call(null,seq__38229__$1);
var G__38254 = null;
var G__38255 = (0);
var G__38256 = (0);
seq__38229 = G__38253;
chunk__38231 = G__38254;
count__38232 = G__38255;
i__38233 = G__38256;
continue;
} else {
var G__38257 = cljs.core.next.call(null,seq__38229__$1);
var G__38258 = null;
var G__38259 = (0);
var G__38260 = (0);
seq__38229 = G__38257;
chunk__38231 = G__38258;
count__38232 = G__38259;
i__38233 = G__38260;
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
return (function (p1__38262_SHARP_,p2__38261_SHARP_){
return p2__38261_SHARP_.call(null,p1__38262_SHARP_);
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
return (function (p1__38264_SHARP_,p2__38263_SHARP_){
return p2__38263_SHARP_.call(null,old_state,p1__38264_SHARP_);
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
var or__3922__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__38265_SHARP_){
return p1__38265_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var vec__38267 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__38267,(0),null);
var next_state = cljs.core.nth.call(null,vec__38267,(1),null);
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
return (function (p1__38266_SHARP_){
return p1__38266_SHARP_.call(null,state);
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
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__38270__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__38270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38271__i = 0, G__38271__a = new Array(arguments.length -  0);
while (G__38271__i < G__38271__a.length) {G__38271__a[G__38271__i] = arguments[G__38271__i + 0]; ++G__38271__i;}
  args = new cljs.core.IndexedSeq(G__38271__a,0,null);
} 
return G__38270__delegate.call(this,args);};
G__38270.cljs$lang$maxFixedArity = 0;
G__38270.cljs$lang$applyTo = (function (arglist__38272){
var args = cljs.core.seq(arglist__38272);
return G__38270__delegate(args);
});
G__38270.cljs$core$IFn$_invoke$arity$variadic = G__38270__delegate;
return G__38270;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__38273__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__38273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38274__i = 0, G__38274__a = new Array(arguments.length -  0);
while (G__38274__i < G__38274__a.length) {G__38274__a[G__38274__i] = arguments[G__38274__i + 0]; ++G__38274__i;}
  args = new cljs.core.IndexedSeq(G__38274__a,0,null);
} 
return G__38273__delegate.call(this,args);};
G__38273.cljs$lang$maxFixedArity = 0;
G__38273.cljs$lang$applyTo = (function (arglist__38275){
var args = cljs.core.seq(arglist__38275);
return G__38273__delegate(args);
});
G__38273.cljs$core$IFn$_invoke$arity$variadic = G__38273__delegate;
return G__38273;
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
var G__38276__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__38276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38277__i = 0, G__38277__a = new Array(arguments.length -  0);
while (G__38277__i < G__38277__a.length) {G__38277__a[G__38277__i] = arguments[G__38277__i + 0]; ++G__38277__i;}
  args = new cljs.core.IndexedSeq(G__38277__a,0,null);
} 
return G__38276__delegate.call(this,args);};
G__38276.cljs$lang$maxFixedArity = 0;
G__38276.cljs$lang$applyTo = (function (arglist__38278){
var args = cljs.core.seq(arglist__38278);
return G__38276__delegate(args);
});
G__38276.cljs$core$IFn$_invoke$arity$variadic = G__38276__delegate;
return G__38276;
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
rum.core.schedule = (function (){var or__3922__auto__ = (function (){var and__3911__auto__ = typeof window !== 'undefined';
if(and__3911__auto__){
var or__3922__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return ((function (or__3922__auto__){
return (function (p1__38279_SHARP_){
return setTimeout(p1__38279_SHARP_,(16));
});
;})(or__3922__auto__))
}
})();
rum.core.batch = (function (){var or__3922__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return ((function (or__3922__auto____$1,or__3922__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3922__auto____$1,or__3922__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__38280 = cljs.core.seq.call(null,queue);
var chunk__38282 = null;
var count__38283 = (0);
var i__38284 = (0);
while(true){
if((i__38284 < count__38283)){
var comp = cljs.core._nth.call(null,chunk__38282,i__38284);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__38286 = seq__38280;
var G__38287 = chunk__38282;
var G__38288 = count__38283;
var G__38289 = (i__38284 + (1));
seq__38280 = G__38286;
chunk__38282 = G__38287;
count__38283 = G__38288;
i__38284 = G__38289;
continue;
} else {
var G__38290 = seq__38280;
var G__38291 = chunk__38282;
var G__38292 = count__38283;
var G__38293 = (i__38284 + (1));
seq__38280 = G__38290;
chunk__38282 = G__38291;
count__38283 = G__38292;
i__38284 = G__38293;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38280);
if(temp__5457__auto__){
var seq__38280__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38280__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38280__$1);
var G__38294 = cljs.core.chunk_rest.call(null,seq__38280__$1);
var G__38295 = c__4319__auto__;
var G__38296 = cljs.core.count.call(null,c__4319__auto__);
var G__38297 = (0);
seq__38280 = G__38294;
chunk__38282 = G__38295;
count__38283 = G__38296;
i__38284 = G__38297;
continue;
} else {
var comp = cljs.core.first.call(null,seq__38280__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__38298 = cljs.core.next.call(null,seq__38280__$1);
var G__38299 = null;
var G__38300 = (0);
var G__38301 = (0);
seq__38280 = G__38298;
chunk__38282 = G__38299;
count__38283 = G__38300;
i__38284 = G__38301;
continue;
} else {
var G__38302 = cljs.core.next.call(null,seq__38280__$1);
var G__38303 = null;
var G__38304 = (0);
var G__38305 = (0);
seq__38280 = G__38302;
chunk__38282 = G__38303;
count__38283 = G__38304;
i__38284 = G__38305;
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
 * Hydrates server rendered DOM tree with provided component.
 */
rum.core.hydrate = (function rum$core$hydrate(component,node){
return ReactDOM.hydrate(component,node);
});
/**
 * Render `component` in a DOM `node` that might be ouside of current DOM hierarchy
 */
rum.core.portal = (function rum$core$portal(component,node){
return ReactDOM.createPortal(component,node);
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
var G__38307 = arguments.length;
switch (G__38307) {
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
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_38309 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__38310 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__38310,(0),null);
var next_state = cljs.core.nth.call(null,vec__38310,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__38313_38325 = cljs.core.seq.call(null,old_reactions);
var chunk__38314_38326 = null;
var count__38315_38327 = (0);
var i__38316_38328 = (0);
while(true){
if((i__38316_38328 < count__38315_38327)){
var ref_38329 = cljs.core._nth.call(null,chunk__38314_38326,i__38316_38328);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_38329)){
} else {
cljs.core.remove_watch.call(null,ref_38329,key);
}


var G__38330 = seq__38313_38325;
var G__38331 = chunk__38314_38326;
var G__38332 = count__38315_38327;
var G__38333 = (i__38316_38328 + (1));
seq__38313_38325 = G__38330;
chunk__38314_38326 = G__38331;
count__38315_38327 = G__38332;
i__38316_38328 = G__38333;
continue;
} else {
var temp__5457__auto___38334 = cljs.core.seq.call(null,seq__38313_38325);
if(temp__5457__auto___38334){
var seq__38313_38335__$1 = temp__5457__auto___38334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38313_38335__$1)){
var c__4319__auto___38336 = cljs.core.chunk_first.call(null,seq__38313_38335__$1);
var G__38337 = cljs.core.chunk_rest.call(null,seq__38313_38335__$1);
var G__38338 = c__4319__auto___38336;
var G__38339 = cljs.core.count.call(null,c__4319__auto___38336);
var G__38340 = (0);
seq__38313_38325 = G__38337;
chunk__38314_38326 = G__38338;
count__38315_38327 = G__38339;
i__38316_38328 = G__38340;
continue;
} else {
var ref_38341 = cljs.core.first.call(null,seq__38313_38335__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_38341)){
} else {
cljs.core.remove_watch.call(null,ref_38341,key);
}


var G__38342 = cljs.core.next.call(null,seq__38313_38335__$1);
var G__38343 = null;
var G__38344 = (0);
var G__38345 = (0);
seq__38313_38325 = G__38342;
chunk__38314_38326 = G__38343;
count__38315_38327 = G__38344;
i__38316_38328 = G__38345;
continue;
}
} else {
}
}
break;
}

var seq__38317_38346 = cljs.core.seq.call(null,new_reactions);
var chunk__38318_38347 = null;
var count__38319_38348 = (0);
var i__38320_38349 = (0);
while(true){
if((i__38320_38349 < count__38319_38348)){
var ref_38350 = cljs.core._nth.call(null,chunk__38318_38347,i__38320_38349);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_38350)){
} else {
cljs.core.add_watch.call(null,ref_38350,key,((function (seq__38317_38346,chunk__38318_38347,count__38319_38348,i__38320_38349,ref_38350,comp,old_reactions,vec__38310,dom,next_state,new_reactions,key,_STAR_reactions_STAR_38309){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__38317_38346,chunk__38318_38347,count__38319_38348,i__38320_38349,ref_38350,comp,old_reactions,vec__38310,dom,next_state,new_reactions,key,_STAR_reactions_STAR_38309))
);
}


var G__38351 = seq__38317_38346;
var G__38352 = chunk__38318_38347;
var G__38353 = count__38319_38348;
var G__38354 = (i__38320_38349 + (1));
seq__38317_38346 = G__38351;
chunk__38318_38347 = G__38352;
count__38319_38348 = G__38353;
i__38320_38349 = G__38354;
continue;
} else {
var temp__5457__auto___38355 = cljs.core.seq.call(null,seq__38317_38346);
if(temp__5457__auto___38355){
var seq__38317_38356__$1 = temp__5457__auto___38355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38317_38356__$1)){
var c__4319__auto___38357 = cljs.core.chunk_first.call(null,seq__38317_38356__$1);
var G__38358 = cljs.core.chunk_rest.call(null,seq__38317_38356__$1);
var G__38359 = c__4319__auto___38357;
var G__38360 = cljs.core.count.call(null,c__4319__auto___38357);
var G__38361 = (0);
seq__38317_38346 = G__38358;
chunk__38318_38347 = G__38359;
count__38319_38348 = G__38360;
i__38320_38349 = G__38361;
continue;
} else {
var ref_38362 = cljs.core.first.call(null,seq__38317_38356__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_38362)){
} else {
cljs.core.add_watch.call(null,ref_38362,key,((function (seq__38317_38346,chunk__38318_38347,count__38319_38348,i__38320_38349,ref_38362,seq__38317_38356__$1,temp__5457__auto___38355,comp,old_reactions,vec__38310,dom,next_state,new_reactions,key,_STAR_reactions_STAR_38309){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__38317_38346,chunk__38318_38347,count__38319_38348,i__38320_38349,ref_38362,seq__38317_38356__$1,temp__5457__auto___38355,comp,old_reactions,vec__38310,dom,next_state,new_reactions,key,_STAR_reactions_STAR_38309))
);
}


var G__38363 = cljs.core.next.call(null,seq__38317_38356__$1);
var G__38364 = null;
var G__38365 = (0);
var G__38366 = (0);
seq__38317_38346 = G__38363;
chunk__38318_38347 = G__38364;
count__38319_38348 = G__38365;
i__38320_38349 = G__38366;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_38309;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_38367 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__38321_38368 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__38322_38369 = null;
var count__38323_38370 = (0);
var i__38324_38371 = (0);
while(true){
if((i__38324_38371 < count__38323_38370)){
var ref_38372 = cljs.core._nth.call(null,chunk__38322_38369,i__38324_38371);
cljs.core.remove_watch.call(null,ref_38372,key_38367);


var G__38373 = seq__38321_38368;
var G__38374 = chunk__38322_38369;
var G__38375 = count__38323_38370;
var G__38376 = (i__38324_38371 + (1));
seq__38321_38368 = G__38373;
chunk__38322_38369 = G__38374;
count__38323_38370 = G__38375;
i__38324_38371 = G__38376;
continue;
} else {
var temp__5457__auto___38377 = cljs.core.seq.call(null,seq__38321_38368);
if(temp__5457__auto___38377){
var seq__38321_38378__$1 = temp__5457__auto___38377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38321_38378__$1)){
var c__4319__auto___38379 = cljs.core.chunk_first.call(null,seq__38321_38378__$1);
var G__38380 = cljs.core.chunk_rest.call(null,seq__38321_38378__$1);
var G__38381 = c__4319__auto___38379;
var G__38382 = cljs.core.count.call(null,c__4319__auto___38379);
var G__38383 = (0);
seq__38321_38368 = G__38380;
chunk__38322_38369 = G__38381;
count__38323_38370 = G__38382;
i__38324_38371 = G__38383;
continue;
} else {
var ref_38384 = cljs.core.first.call(null,seq__38321_38378__$1);
cljs.core.remove_watch.call(null,ref_38384,key_38367);


var G__38385 = cljs.core.next.call(null,seq__38321_38378__$1);
var G__38386 = null;
var G__38387 = (0);
var G__38388 = (0);
seq__38321_38368 = G__38385;
chunk__38322_38369 = G__38386;
count__38323_38370 = G__38387;
i__38324_38371 = G__38388;
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
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
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
var args__4502__auto__ = [];
var len__4499__auto___38395 = arguments.length;
var i__4500__auto___38396 = (0);
while(true){
if((i__4500__auto___38396 < len__4499__auto___38395)){
args__4502__auto__.push((arguments[i__4500__auto___38396]));

var G__38397 = (i__4500__auto___38396 + (1));
i__4500__auto___38396 = G__38397;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__38392){
var map__38393 = p__38392;
var map__38393__$1 = ((((!((map__38393 == null)))?(((((map__38393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38393):map__38393);
var options = map__38393__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq38389){
var G__38390 = cljs.core.first.call(null,seq38389);
var seq38389__$1 = cljs.core.next.call(null,seq38389);
var G__38391 = cljs.core.first.call(null,seq38389__$1);
var seq38389__$2 = cljs.core.next.call(null,seq38389__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38390,G__38391,seq38389__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38401 = arguments.length;
var i__4500__auto___38402 = (0);
while(true){
if((i__4500__auto___38402 < len__4499__auto___38401)){
args__4502__auto__.push((arguments[i__4500__auto___38402]));

var G__38403 = (i__4500__auto___38402 + (1));
i__4500__auto___38402 = G__38403;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq38398){
var G__38399 = cljs.core.first.call(null,seq38398);
var seq38398__$1 = cljs.core.next.call(null,seq38398);
var G__38400 = cljs.core.first.call(null,seq38398__$1);
var seq38398__$2 = cljs.core.next.call(null,seq38398__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38399,G__38400,seq38398__$2);
});

