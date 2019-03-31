// Compiled by ClojureScript 1.10.520 {}
goog.provide('fif.stdlib.math');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.words');
goog.require('fif.stack_machine.variable');
goog.require('fif.def');
fif.stdlib.math.import_stdlib_math = (function fif$stdlib$math$import_stdlib_math(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,fif.stack_machine.words.set_global_word_defn.call(null,sm,new cljs.core.Symbol(null,"PI","PI",-9477137,null),fif.stack_machine.variable.wrap_global_variable.call(null,Math.PI),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"The ratio of the circumference of a circle to its diameter",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"E","E",1871381369,null),fif.stack_machine.variable.wrap_global_variable.call(null,Math.E),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"The base of the natural logarithms",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"acos","acos",353741763,null),fif.def.wrap_function_with_arity.call(null,(1),Math.acos),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the arccosine of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"asin","asin",-904130570,null),fif.def.wrap_function_with_arity.call(null,(1),Math.asin),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the arcsine of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"atan","atan",-1026550135,null),fif.def.wrap_function_with_arity.call(null,(1),Math.atan),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the arctangent of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"atan2","atan2",-134972156,null),fif.def.wrap_function_with_arity.call(null,(2),Math.atan2),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( x y -- n ) Returns the angle theta from the conversion of rectangular coordinates (x, y) to polar coordinates (r, theta).",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"cbrt","cbrt",-235140820,null),fif.def.wrap_function_with_arity.call(null,(1),Math.cbrt),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the cube root of a value.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"ceil","ceil",-184398425,null),fif.def.wrap_function_with_arity.call(null,(1),Math.ceil),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- i ) Returns the smallest closest value that is greater than or equal to the given value as an integer.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"cos","cos",-1452677493,null),fif.def.wrap_function_with_arity.call(null,(1),Math.cos),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the cosine of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null),fif.def.wrap_function_with_arity.call(null,(1),Math.cosh),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the hyperbolic cosine of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"exp","exp",1378825265,null),fif.def.wrap_function_with_arity.call(null,(1),Math.exp),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the value of E^n",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"floor","floor",-772394748,null),fif.def.wrap_function_with_arity.call(null,(1),Math.floor),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- i ) Returns the largest closest value that is greater than or equal to the given value as an integer.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"log","log",45015523,null),fif.def.wrap_function_with_arity.call(null,(1),Math.log),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the natural logarithm (base e) of value.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"pow","pow",196526960,null),fif.def.wrap_function_with_arity.call(null,(2),Math.pow),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( x y -- n ) Returns the value of x to the power of y.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"round","round",-645002441,null),fif.def.wrap_function_with_arity.call(null,(1),Math.round),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the rounded value.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"sin","sin",1721439389,null),fif.def.wrap_function_with_arity.call(null,(1),Math.sin),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the sine of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"sinh","sinh",-990423302,null),fif.def.wrap_function_with_arity.call(null,(1),Math.sinh),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the hyperbolic sine of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null),fif.def.wrap_function_with_arity.call(null,(1),Math.sqrt),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the square root of the value.",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"tan","tan",-1380825876,null),fif.def.wrap_function_with_arity.call(null,(1),Math.tan),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the tangent of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694)),new cljs.core.Symbol(null,"tanh","tanh",480481797,null),fif.def.wrap_function_with_arity.call(null,(1),Math.tanh),new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"( n -- n ) Returns the hyperbolic tangent of x, in radians",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.math","stdlib.math",1853837694));
});
