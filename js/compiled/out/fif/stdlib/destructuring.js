// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.stdlib.destructuring');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.mode');
goog.require('fif.stack_machine.variable');
goog.require('fif.stack_machine.exceptions');
fif.stdlib.destructuring.arg_destructuring_token = new cljs.core.Symbol(null,"&","&",-2144855648,null);
fif.stdlib.destructuring.assign_parameters = (function fif$stdlib$destructuring$assign_parameters(sm,arg_list){
return cljs.core.reduce.call(null,(function (sm__$1,p__39835){
var vec__39836 = p__39835;
var param = cljs.core.nth.call(null,vec__39836,(0),null);
var arg = cljs.core.nth.call(null,vec__39836,(1),null);
var wfunc = fif.stack_machine.variable.wrap_local_variable.call(null,arg);
return fif.stack_machine.words.set_word.call(null,sm__$1,param,wfunc);
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sm], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,arg_list)));
});
fif.stdlib.destructuring.check_parameter_types = (function fif$stdlib$destructuring$check_parameter_types(parameters){
return cljs.core.some.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),parameters);
});
fif.stdlib.destructuring.pop_stack_n = (function fif$stdlib$destructuring$pop_stack_n(sm,n){
var sm__$1 = sm;
var n__$1 = n;
while(true){
if((n__$1 <= (0))){
return sm__$1;
} else {
var G__39839 = fif.stack_machine.pop_stack.call(null,sm__$1);
var G__39840 = (n__$1 - (1));
sm__$1 = G__39839;
n__$1 = G__39840;
continue;
}
break;
}
});
fif.stdlib.destructuring.destructure_op = (function fif$stdlib$destructuring$destructure_op(sm){
var vec__39841 = fif.stack_machine.get_stack.call(null,sm);
var seq__39842 = cljs.core.seq.call(null,vec__39841);
var first__39843 = cljs.core.first.call(null,seq__39842);
var seq__39842__$1 = cljs.core.next.call(null,seq__39842);
var parameters = first__39843;
var stack = seq__39842__$1;
var arguments$ = cljs.core.take.call(null,cljs.core.count.call(null,parameters),stack);
var arg_list = cljs.core.zipmap.call(null,cljs.core.reverse.call(null,parameters),arguments$);
var sm__$1 = fif.stack_machine.dequeue_code.call(null,fif.stdlib.destructuring.pop_stack_n.call(null,sm,(cljs.core.count.call(null,parameters) + (1))));
if((!(cljs.core.vector_QMARK_.call(null,parameters)))){
return fif.stack_machine.exceptions.raise_validation_error.call(null,sm__$1,(0),parameters,"Parameters for destructuring should be presented in the form of a vector");
} else {
if(cljs.core.truth_(fif.stdlib.destructuring.check_parameter_types.call(null,parameters))){
return fif.stack_machine.exceptions.raise_validation_error.call(null,sm__$1,(0),parameters,"One or more parameters within the vector form are not symbols");
} else {
return fif.stdlib.destructuring.assign_parameters.call(null,sm__$1,arg_list);

}
}
});
fif.stdlib.destructuring.import_stdlib_destructuring = (function fif$stdlib$destructuring$import_stdlib_destructuring(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,sm,fif.stdlib.destructuring.arg_destructuring_token,fif.stdlib.destructuring.destructure_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( arguments & [parameters] -- ) Destructures values on\n       the stack defined by `parameters` and places them in local\n       variables.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.destructuring","stdlib.destructuring",1276307739));
});
