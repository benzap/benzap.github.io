// Compiled by ClojureScript 1.10.217 {}
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
var seq__37588 = cljs.core.seq.call(null,props);
var chunk__37590 = null;
var count__37591 = (0);
var i__37592 = (0);
while(true){
if((i__37592 < count__37591)){
var vec__37594 = cljs.core._nth.call(null,chunk__37590,i__37592);
var k = cljs.core.nth.call(null,vec__37594,(0),null);
var v = cljs.core.nth.call(null,vec__37594,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__37600 = seq__37588;
var G__37601 = chunk__37590;
var G__37602 = count__37591;
var G__37603 = (i__37592 + (1));
seq__37588 = G__37600;
chunk__37590 = G__37601;
count__37591 = G__37602;
i__37592 = G__37603;
continue;
} else {
var G__37604 = seq__37588;
var G__37605 = chunk__37590;
var G__37606 = count__37591;
var G__37607 = (i__37592 + (1));
seq__37588 = G__37604;
chunk__37590 = G__37605;
count__37591 = G__37606;
i__37592 = G__37607;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37588);
if(temp__5457__auto__){
var seq__37588__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37588__$1)){
var c__4318__auto__ = cljs.core.chunk_first.call(null,seq__37588__$1);
var G__37608 = cljs.core.chunk_rest.call(null,seq__37588__$1);
var G__37609 = c__4318__auto__;
var G__37610 = cljs.core.count.call(null,c__4318__auto__);
var G__37611 = (0);
seq__37588 = G__37608;
chunk__37590 = G__37609;
count__37591 = G__37610;
i__37592 = G__37611;
continue;
} else {
var vec__37597 = cljs.core.first.call(null,seq__37588__$1);
var k = cljs.core.nth.call(null,vec__37597,(0),null);
var v = cljs.core.nth.call(null,vec__37597,(1),null);
if(!((v == null))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__37612 = cljs.core.next.call(null,seq__37588__$1);
var G__37613 = null;
var G__37614 = (0);
var G__37615 = (0);
seq__37588 = G__37612;
chunk__37590 = G__37613;
count__37591 = G__37614;
i__37592 = G__37615;
continue;
} else {
var G__37616 = cljs.core.next.call(null,seq__37588__$1);
var G__37617 = null;
var G__37618 = (0);
var G__37619 = (0);
seq__37588 = G__37616;
chunk__37590 = G__37617;
count__37591 = G__37618;
i__37592 = G__37619;
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
<<<<<<< HEAD
return (function (p1__37621_SHARP_,p2__37620_SHARP_){
return p2__37620_SHARP_.call(null,p1__37621_SHARP_);
=======
return (function (p1__42634_SHARP_,p2__42633_SHARP_){
return p2__42633_SHARP_.call(null,p1__42634_SHARP_);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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
<<<<<<< HEAD
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__37623_SHARP_,p2__37622_SHARP_){
return p2__37622_SHARP_.call(null,old_state,p1__37623_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
=======
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42636_SHARP_,p2__42635_SHARP_){
return p2__42635_SHARP_.call(null,old_state,p1__42636_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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
<<<<<<< HEAD
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__3921__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__37624_SHARP_){
return p1__37624_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
=======
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35672__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__42637_SHARP_){
return p1__42637_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35672__auto__)){
return or__35672__auto__;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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
<<<<<<< HEAD
var vec__37626 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__37626,(0),null);
var next_state = cljs.core.nth.call(null,vec__37626,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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
return (function (p1__37625_SHARP_){
return p1__37625_SHARP_.call(null,state);
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
<<<<<<< HEAD
var G__37629__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__37629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37630__i = 0, G__37630__a = new Array(arguments.length -  0);
while (G__37630__i < G__37630__a.length) {G__37630__a[G__37630__i] = arguments[G__37630__i + 0]; ++G__37630__i;}
  args = new cljs.core.IndexedSeq(G__37630__a,0,null);
} 
return G__37629__delegate.call(this,args);};
G__37629.cljs$lang$maxFixedArity = 0;
G__37629.cljs$lang$applyTo = (function (arglist__37631){
var args = cljs.core.seq(arglist__37631);
return G__37629__delegate(args);
});
G__37629.cljs$core$IFn$_invoke$arity$variadic = G__37629__delegate;
return G__37629;
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
<<<<<<< HEAD
var G__37632__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__37632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37633__i = 0, G__37633__a = new Array(arguments.length -  0);
while (G__37633__i < G__37633__a.length) {G__37633__a[G__37633__i] = arguments[G__37633__i + 0]; ++G__37633__i;}
  args = new cljs.core.IndexedSeq(G__37633__a,0,null);
} 
return G__37632__delegate.call(this,args);};
G__37632.cljs$lang$maxFixedArity = 0;
G__37632.cljs$lang$applyTo = (function (arglist__37634){
var args = cljs.core.seq(arglist__37634);
return G__37632__delegate(args);
});
G__37632.cljs$core$IFn$_invoke$arity$variadic = G__37632__delegate;
return G__37632;
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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
<<<<<<< HEAD
var G__37635__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__37635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37636__i = 0, G__37636__a = new Array(arguments.length -  0);
while (G__37636__i < G__37636__a.length) {G__37636__a[G__37636__i] = arguments[G__37636__i + 0]; ++G__37636__i;}
  args = new cljs.core.IndexedSeq(G__37636__a,0,null);
} 
return G__37635__delegate.call(this,args);};
G__37635.cljs$lang$maxFixedArity = 0;
G__37635.cljs$lang$applyTo = (function (arglist__37637){
var args = cljs.core.seq(arglist__37637);
return G__37635__delegate(args);
});
G__37635.cljs$core$IFn$_invoke$arity$variadic = G__37635__delegate;
return G__37635;
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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
<<<<<<< HEAD
rum.core.schedule = (function (){var or__3921__auto__ = (function (){var and__3910__auto__ = typeof window !== 'undefined';
if(and__3910__auto__){
var or__3921__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
var or__3921__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3921__auto____$1)){
return or__3921__auto____$1;
} else {
var or__3921__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3921__auto____$2)){
return or__3921__auto____$2;
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
<<<<<<< HEAD
return and__3910__auto__;
}
})();
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
return ((function (or__3921__auto__){
return (function (p1__37638_SHARP_){
return setTimeout(p1__37638_SHARP_,(16));
});
;})(or__3921__auto__))
}
})();
rum.core.batch = (function (){var or__3921__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3921__auto__)){
return or__3921__auto__;
} else {
var or__3921__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3921__auto____$1)){
return or__3921__auto____$1;
} else {
return ((function (or__3921__auto____$1,or__3921__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__3921__auto____$1,or__3921__auto__))
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
<<<<<<< HEAD
var seq__37639 = cljs.core.seq.call(null,queue);
var chunk__37641 = null;
var count__37642 = (0);
var i__37643 = (0);
while(true){
if((i__37643 < count__37642)){
var comp = cljs.core._nth.call(null,chunk__37641,i__37643);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__37645 = seq__37639;
var G__37646 = chunk__37641;
var G__37647 = count__37642;
var G__37648 = (i__37643 + (1));
seq__37639 = G__37645;
chunk__37641 = G__37646;
count__37642 = G__37647;
i__37643 = G__37648;
continue;
} else {
var G__37649 = seq__37639;
var G__37650 = chunk__37641;
var G__37651 = count__37642;
var G__37652 = (i__37643 + (1));
seq__37639 = G__37649;
chunk__37641 = G__37650;
count__37642 = G__37651;
i__37643 = G__37652;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37639);
if(temp__5457__auto__){
var seq__37639__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37639__$1)){
var c__4318__auto__ = cljs.core.chunk_first.call(null,seq__37639__$1);
var G__37653 = cljs.core.chunk_rest.call(null,seq__37639__$1);
var G__37654 = c__4318__auto__;
var G__37655 = cljs.core.count.call(null,c__4318__auto__);
var G__37656 = (0);
seq__37639 = G__37653;
chunk__37641 = G__37654;
count__37642 = G__37655;
i__37643 = G__37656;
continue;
} else {
var comp = cljs.core.first.call(null,seq__37639__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__37657 = cljs.core.next.call(null,seq__37639__$1);
var G__37658 = null;
var G__37659 = (0);
var G__37660 = (0);
seq__37639 = G__37657;
chunk__37641 = G__37658;
count__37642 = G__37659;
i__37643 = G__37660;
continue;
} else {
var G__37661 = cljs.core.next.call(null,seq__37639__$1);
var G__37662 = null;
var G__37663 = (0);
var G__37664 = (0);
seq__37639 = G__37661;
chunk__37641 = G__37662;
count__37642 = G__37663;
i__37643 = G__37664;
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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
<<<<<<< HEAD
var G__37666 = arguments.length;
switch (G__37666) {
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));
=======
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42687.length)].join('')));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

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
<<<<<<< HEAD
var _STAR_reactions_STAR_37668 = rum.core._STAR_reactions_STAR_;
=======
var _STAR_reactions_STAR_42694 = rum.core._STAR_reactions_STAR_;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
<<<<<<< HEAD
var vec__37669 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__37669,(0),null);
var next_state = cljs.core.nth.call(null,vec__37669,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__37672_37684 = cljs.core.seq.call(null,old_reactions);
var chunk__37673_37685 = null;
var count__37674_37686 = (0);
var i__37675_37687 = (0);
while(true){
if((i__37675_37687 < count__37674_37686)){
var ref_37688 = cljs.core._nth.call(null,chunk__37673_37685,i__37675_37687);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_37688)){
} else {
cljs.core.remove_watch.call(null,ref_37688,key);
}


var G__37689 = seq__37672_37684;
var G__37690 = chunk__37673_37685;
var G__37691 = count__37674_37686;
var G__37692 = (i__37675_37687 + (1));
seq__37672_37684 = G__37689;
chunk__37673_37685 = G__37690;
count__37674_37686 = G__37691;
i__37675_37687 = G__37692;
continue;
} else {
var temp__5457__auto___37693 = cljs.core.seq.call(null,seq__37672_37684);
if(temp__5457__auto___37693){
var seq__37672_37694__$1 = temp__5457__auto___37693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37672_37694__$1)){
var c__4318__auto___37695 = cljs.core.chunk_first.call(null,seq__37672_37694__$1);
var G__37696 = cljs.core.chunk_rest.call(null,seq__37672_37694__$1);
var G__37697 = c__4318__auto___37695;
var G__37698 = cljs.core.count.call(null,c__4318__auto___37695);
var G__37699 = (0);
seq__37672_37684 = G__37696;
chunk__37673_37685 = G__37697;
count__37674_37686 = G__37698;
i__37675_37687 = G__37699;
continue;
} else {
var ref_37700 = cljs.core.first.call(null,seq__37672_37694__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_37700)){
} else {
cljs.core.remove_watch.call(null,ref_37700,key);
}


var G__37701 = cljs.core.next.call(null,seq__37672_37694__$1);
var G__37702 = null;
var G__37703 = (0);
var G__37704 = (0);
seq__37672_37684 = G__37701;
chunk__37673_37685 = G__37702;
count__37674_37686 = G__37703;
i__37675_37687 = G__37704;
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
}
} else {
}
}
break;
}

<<<<<<< HEAD
var seq__37676_37705 = cljs.core.seq.call(null,new_reactions);
var chunk__37677_37706 = null;
var count__37678_37707 = (0);
var i__37679_37708 = (0);
while(true){
if((i__37679_37708 < count__37678_37707)){
var ref_37709 = cljs.core._nth.call(null,chunk__37677_37706,i__37679_37708);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_37709)){
} else {
cljs.core.add_watch.call(null,ref_37709,key,((function (seq__37676_37705,chunk__37677_37706,count__37678_37707,i__37679_37708,ref_37709,comp,old_reactions,vec__37669,dom,next_state,new_reactions,key,_STAR_reactions_STAR_37668){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__37676_37705,chunk__37677_37706,count__37678_37707,i__37679_37708,ref_37709,comp,old_reactions,vec__37669,dom,next_state,new_reactions,key,_STAR_reactions_STAR_37668))
);
}


var G__37710 = seq__37676_37705;
var G__37711 = chunk__37677_37706;
var G__37712 = count__37678_37707;
var G__37713 = (i__37679_37708 + (1));
seq__37676_37705 = G__37710;
chunk__37677_37706 = G__37711;
count__37678_37707 = G__37712;
i__37679_37708 = G__37713;
continue;
} else {
var temp__5457__auto___37714 = cljs.core.seq.call(null,seq__37676_37705);
if(temp__5457__auto___37714){
var seq__37676_37715__$1 = temp__5457__auto___37714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37676_37715__$1)){
var c__4318__auto___37716 = cljs.core.chunk_first.call(null,seq__37676_37715__$1);
var G__37717 = cljs.core.chunk_rest.call(null,seq__37676_37715__$1);
var G__37718 = c__4318__auto___37716;
var G__37719 = cljs.core.count.call(null,c__4318__auto___37716);
var G__37720 = (0);
seq__37676_37705 = G__37717;
chunk__37677_37706 = G__37718;
count__37678_37707 = G__37719;
i__37679_37708 = G__37720;
continue;
} else {
var ref_37721 = cljs.core.first.call(null,seq__37676_37715__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_37721)){
} else {
cljs.core.add_watch.call(null,ref_37721,key,((function (seq__37676_37705,chunk__37677_37706,count__37678_37707,i__37679_37708,ref_37721,seq__37676_37715__$1,temp__5457__auto___37714,comp,old_reactions,vec__37669,dom,next_state,new_reactions,key,_STAR_reactions_STAR_37668){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__37676_37705,chunk__37677_37706,count__37678_37707,i__37679_37708,ref_37721,seq__37676_37715__$1,temp__5457__auto___37714,comp,old_reactions,vec__37669,dom,next_state,new_reactions,key,_STAR_reactions_STAR_37668))
);
}


var G__37722 = cljs.core.next.call(null,seq__37676_37715__$1);
var G__37723 = null;
var G__37724 = (0);
var G__37725 = (0);
seq__37676_37705 = G__37722;
chunk__37677_37706 = G__37723;
count__37678_37707 = G__37724;
i__37679_37708 = G__37725;
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
<<<<<<< HEAD
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_37668;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_37726 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__37680_37727 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__37681_37728 = null;
var count__37682_37729 = (0);
var i__37683_37730 = (0);
while(true){
if((i__37683_37730 < count__37682_37729)){
var ref_37731 = cljs.core._nth.call(null,chunk__37681_37728,i__37683_37730);
cljs.core.remove_watch.call(null,ref_37731,key_37726);


var G__37732 = seq__37680_37727;
var G__37733 = chunk__37681_37728;
var G__37734 = count__37682_37729;
var G__37735 = (i__37683_37730 + (1));
seq__37680_37727 = G__37732;
chunk__37681_37728 = G__37733;
count__37682_37729 = G__37734;
i__37683_37730 = G__37735;
continue;
} else {
var temp__5457__auto___37736 = cljs.core.seq.call(null,seq__37680_37727);
if(temp__5457__auto___37736){
var seq__37680_37737__$1 = temp__5457__auto___37736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37680_37737__$1)){
var c__4318__auto___37738 = cljs.core.chunk_first.call(null,seq__37680_37737__$1);
var G__37739 = cljs.core.chunk_rest.call(null,seq__37680_37737__$1);
var G__37740 = c__4318__auto___37738;
var G__37741 = cljs.core.count.call(null,c__4318__auto___37738);
var G__37742 = (0);
seq__37680_37727 = G__37739;
chunk__37681_37728 = G__37740;
count__37682_37729 = G__37741;
i__37683_37730 = G__37742;
continue;
} else {
var ref_37743 = cljs.core.first.call(null,seq__37680_37737__$1);
cljs.core.remove_watch.call(null,ref_37743,key_37726);


var G__37744 = cljs.core.next.call(null,seq__37680_37737__$1);
var G__37745 = null;
var G__37746 = (0);
var G__37747 = (0);
seq__37680_37727 = G__37744;
chunk__37681_37728 = G__37745;
count__37682_37729 = G__37746;
i__37683_37730 = G__37747;
=======
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
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
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
<<<<<<< HEAD
var args__4501__auto__ = [];
var len__4498__auto___37754 = arguments.length;
var i__4499__auto___37755 = (0);
while(true){
if((i__4499__auto___37755 < len__4498__auto___37754)){
args__4501__auto__.push((arguments[i__4499__auto___37755]));

var G__37756 = (i__4499__auto___37755 + (1));
i__4499__auto___37755 = G__37756;
=======
var args__36792__auto__ = [];
var len__36785__auto___42780 = arguments.length;
var i__36786__auto___42781 = (0);
while(true){
if((i__36786__auto___42781 < len__36785__auto___42780)){
args__36792__auto__.push((arguments[i__36786__auto___42781]));

var G__42782 = (i__36786__auto___42781 + (1));
i__36786__auto___42781 = G__42782;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__4502__auto__ = ((((2) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4502__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__37751){
var map__37752 = p__37751;
var map__37752__$1 = ((((!((map__37752 == null)))?(((((map__37752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37752):map__37752);
var options = map__37752__$1;
=======
var argseq__36793__auto__ = ((((2) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36793__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__42777){
var map__42778 = p__42777;
var map__42778__$1 = ((((!((map__42778 == null)))?((((map__42778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42778):map__42778);
var options = map__42778__$1;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq37748){
var G__37749 = cljs.core.first.call(null,seq37748);
var seq37748__$1 = cljs.core.next.call(null,seq37748);
var G__37750 = cljs.core.first.call(null,seq37748__$1);
var seq37748__$2 = cljs.core.next.call(null,seq37748__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37749,G__37750,seq37748__$2);
=======
rum.core.cursor_in.cljs$lang$applyTo = (function (seq42774){
var G__42775 = cljs.core.first.call(null,seq42774);
var seq42774__$1 = cljs.core.next.call(null,seq42774);
var G__42776 = cljs.core.first.call(null,seq42774__$1);
var seq42774__$2 = cljs.core.next.call(null,seq42774__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__42775,G__42776,seq42774__$2);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
<<<<<<< HEAD
var args__4501__auto__ = [];
var len__4498__auto___37760 = arguments.length;
var i__4499__auto___37761 = (0);
while(true){
if((i__4499__auto___37761 < len__4498__auto___37760)){
args__4501__auto__.push((arguments[i__4499__auto___37761]));

var G__37762 = (i__4499__auto___37761 + (1));
i__4499__auto___37761 = G__37762;
=======
var args__36792__auto__ = [];
var len__36785__auto___42786 = arguments.length;
var i__36786__auto___42787 = (0);
while(true){
if((i__36786__auto___42787 < len__36785__auto___42786)){
args__36792__auto__.push((arguments[i__36786__auto___42787]));

var G__42788 = (i__36786__auto___42787 + (1));
i__36786__auto___42787 = G__42788;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
}
break;
}

<<<<<<< HEAD
var argseq__4502__auto__ = ((((2) < args__4501__auto__.length))?(new cljs.core.IndexedSeq(args__4501__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4502__auto__);
=======
var argseq__36793__auto__ = ((((2) < args__36792__auto__.length))?(new cljs.core.IndexedSeq(args__36792__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36793__auto__);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

<<<<<<< HEAD
/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq37757){
var G__37758 = cljs.core.first.call(null,seq37757);
var seq37757__$1 = cljs.core.next.call(null,seq37757);
var G__37759 = cljs.core.first.call(null,seq37757__$1);
var seq37757__$2 = cljs.core.next.call(null,seq37757__$1);
var self__4485__auto__ = this;
return self__4485__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37758,G__37759,seq37757__$2);
=======
rum.core.cursor.cljs$lang$applyTo = (function (seq42783){
var G__42784 = cljs.core.first.call(null,seq42783);
var seq42783__$1 = cljs.core.next.call(null,seq42783);
var G__42785 = cljs.core.first.call(null,seq42783__$1);
var seq42783__$2 = cljs.core.next.call(null,seq42783__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__42784,G__42785,seq42783__$2);
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
});

