// Compiled by ClojureScript 1.10.217 {}
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function clojure$string$seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
 * Returns s with its characters reversed.
 */
clojure.string.reverse = (function clojure$string$reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
clojure.string.replace_all = (function clojure$string$replace_all(s,re,replacement){
<<<<<<< HEAD
var r = (new RegExp(re.source,(function (){var G__35222 = "g";
var G__35222__$1 = (cljs.core.truth_(re.ignoreCase)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35222),"i"].join(''):G__35222);
var G__35222__$2 = (cljs.core.truth_(re.multiline)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35222__$1),"m"].join(''):G__35222__$1);
if(cljs.core.truth_(re.unicode)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35222__$2),"u"].join('');
} else {
return G__35222__$2;
=======
var r = (new RegExp(re.source,(function (){var G__41289 = "g";
var G__41289__$1 = (cljs.core.truth_(re.ignoreCase)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41289),cljs.core.str.cljs$core$IFn$_invoke$arity$1("i")].join(''):G__41289);
var G__41289__$2 = (cljs.core.truth_(re.multiline)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41289__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("m")].join(''):G__41289__$1);
if(cljs.core.truth_(re.unicode)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41289__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1("u")].join('');
} else {
return G__41289__$2;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
}
})()));
return s.replace(r,replacement);
});
clojure.string.replace_with = (function clojure$string$replace_with(f){
return (function() { 
<<<<<<< HEAD
var G__35223__delegate = function (args){
=======
var G__41290__delegate = function (args){
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
var matches = cljs.core.drop_last.call(null,(2),args);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches),(1))){
return f.call(null,cljs.core.first.call(null,matches));
} else {
return f.call(null,cljs.core.vec.call(null,matches));
}
};
<<<<<<< HEAD
var G__35223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35224__i = 0, G__35224__a = new Array(arguments.length -  0);
while (G__35224__i < G__35224__a.length) {G__35224__a[G__35224__i] = arguments[G__35224__i + 0]; ++G__35224__i;}
  args = new cljs.core.IndexedSeq(G__35224__a,0,null);
} 
return G__35223__delegate.call(this,args);};
G__35223.cljs$lang$maxFixedArity = 0;
G__35223.cljs$lang$applyTo = (function (arglist__35225){
var args = cljs.core.seq(arglist__35225);
return G__35223__delegate(args);
});
G__35223.cljs$core$IFn$_invoke$arity$variadic = G__35223__delegate;
return G__35223;
=======
var G__41290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41291__i = 0, G__41291__a = new Array(arguments.length -  0);
while (G__41291__i < G__41291__a.length) {G__41291__a[G__41291__i] = arguments[G__41291__i + 0]; ++G__41291__i;}
  args = new cljs.core.IndexedSeq(G__41291__a,0,null);
} 
return G__41290__delegate.call(this,args);};
G__41290.cljs$lang$maxFixedArity = 0;
G__41290.cljs$lang$applyTo = (function (arglist__41292){
var args = cljs.core.seq(arglist__41292);
return G__41290__delegate(args);
});
G__41290.cljs$core$IFn$_invoke$arity$variadic = G__41290__delegate;
return G__41290;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
})()
;
});
/**
 * Replaces all instance of match with replacement in s.
 * 
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 * 
 * See also replace-first.
 * 
 * The replacement is literal (i.e. none of its characters are treated
 * specially) for all cases above except pattern / string.
 * 
 * For pattern / string, $1, $2, etc. in the replacement string are
 * substituted with the string that matched the corresponding
 * parenthesized group in the pattern.
 * 
 * Example:
 * (clojure.string/replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 * -> "lmostAay igPay atinLay"
 */
clojure.string.replace = (function clojure$string$replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
if(typeof replacement === 'string'){
return clojure.string.replace_all.call(null,s,match,replacement);
} else {
return clojure.string.replace_all.call(null,s,match,clojure.string.replace_with.call(null,replacement));
}
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');

}
}
});
/**
 * Replaces the first instance of match with replacement in s.
 * 
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 * 
 * See also replace.
 * 
 * The replacement is literal (i.e. none of its characters are treated
 * specially) for all cases above except pattern / string.
 * 
 * For pattern / string, $1, $2, etc. in the replacement string are
 * substituted with the string that matched the corresponding
 * parenthesized group in the pattern.
 * 
 * Example:
 * (clojure.string/replace-first "swap first two words"
 *                               #"(\w+)(\s+)(\w+)" "$3$2$1")
 * -> "first swap two words"
 */
clojure.string.replace_first = (function clojure$string$replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
 * Returns a string of all elements in coll, as returned by (seq coll),
 *   separated by an optional separator.
 */
clojure.string.join = (function clojure$string$join(var_args){
<<<<<<< HEAD
var G__35227 = arguments.length;
switch (G__35227) {
=======
var args41293 = [];
var len__36785__auto___41296 = arguments.length;
var i__36786__auto___41297 = (0);
while(true){
if((i__36786__auto___41297 < len__36785__auto___41296)){
args41293.push((arguments[i__36786__auto___41297]));

var G__41298 = (i__36786__auto___41297 + (1));
i__36786__auto___41297 = G__41298;
continue;
} else {
}
break;
}

var G__41295 = args41293.length;
switch (G__41295) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 1:
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.string.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
<<<<<<< HEAD
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));
=======
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41293.length)].join('')));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(!((coll__$1 == null))){
<<<<<<< HEAD
var G__35229 = sb.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll__$1))].join(''));
var G__35230 = cljs.core.next.call(null,coll__$1);
sb = G__35229;
coll__$1 = G__35230;
=======
var G__41300 = sb.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll__$1))].join(''));
var G__41301 = cljs.core.next.call(null,coll__$1);
sb = G__41300;
coll__$1 = G__41301;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(!((coll__$1 == null))){
sb.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll__$1))].join(''));

var coll__$2 = cljs.core.next.call(null,coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

<<<<<<< HEAD
var G__35231 = sb;
var G__35232 = coll__$2;
sb = G__35231;
coll__$1 = G__35232;
=======
var G__41302 = sb;
var G__41303 = coll__$2;
sb = G__41302;
coll__$1 = G__41303;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$lang$maxFixedArity = 2;

/**
 * Converts string to all upper-case.
 */
clojure.string.upper_case = (function clojure$string$upper_case(s){
return s.toUpperCase();
});
/**
 * Converts string to all lower-case.
 */
clojure.string.lower_case = (function clojure$string$lower_case(s){
return s.toLowerCase();
});
/**
 * Converts first character of the string to upper-case, all other
 *   characters to lower-case.
 */
clojure.string.capitalize = (function clojure$string$capitalize(s){
return goog.string.capitalize(s);
});
clojure.string.pop_last_while_empty = (function clojure$string$pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(("" === cljs.core.peek.call(null,v__$1))){
<<<<<<< HEAD
var G__35233 = cljs.core.pop.call(null,v__$1);
v__$1 = G__35233;
=======
var G__41304 = cljs.core.pop.call(null,v__$1);
v__$1 = G__41304;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function clojure$string$discard_trailing_if_needed(limit,v){
if(((((0) === limit)) && (((1) < cljs.core.count.call(null,v))))){
return clojure.string.pop_last_while_empty.call(null,v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function clojure$string$split_with_empty_regex(s,limit){
if((((limit <= (0))) || ((limit >= ((2) + cljs.core.count.call(null,s)))))){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s)))),"");
} else {
<<<<<<< HEAD
var pred__35234 = cljs.core._EQ__EQ_;
var expr__35235 = limit;
if(cljs.core.truth_(pred__35234.call(null,(1),expr__35235))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_(pred__35234.call(null,(2),expr__35235))){
=======
var pred__41308 = cljs.core._EQ__EQ_;
var expr__41309 = limit;
if(cljs.core.truth_(pred__41308.call(null,(1),expr__41309))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_(pred__41308.call(null,(2),expr__41309))){
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s))),(0),c))),cljs.core.subs.call(null,s,c));
}
}
}
});
/**
 * Splits string on a regular expression. Optional argument limit is
 *   the maximum number of splits. Not lazy. Returns vector of the splits.
 */
clojure.string.split = (function clojure$string$split(var_args){
<<<<<<< HEAD
var G__35238 = arguments.length;
switch (G__35238) {
=======
var args41311 = [];
var len__36785__auto___41314 = arguments.length;
var i__36786__auto___41315 = (0);
while(true){
if((i__36786__auto___41315 < len__36785__auto___41314)){
args41311.push((arguments[i__36786__auto___41315]));

var G__41316 = (i__36786__auto___41315 + (1));
i__36786__auto___41315 = G__41316;
continue;
} else {
}
break;
}

var G__41313 = args41311.length;
switch (G__41313) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 2:
return clojure.string.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
<<<<<<< HEAD
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));
=======
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41311.length)].join('')));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

clojure.string.split.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
return clojure.string.split.call(null,s,re,(0));
});

clojure.string.split.cljs$core$IFn$_invoke$arity$3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed.call(null,limit,((("/(?:)/" === [cljs.core.str.cljs$core$IFn$_invoke$arity$1(re)].join('')))?clojure.string.split_with_empty_regex.call(null,s,limit):(((limit < (1)))?cljs.core.vec.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(((1) === limit__$1)){
return cljs.core.conj.call(null,parts,s__$1);
} else {
var m = cljs.core.re_find.call(null,re,s__$1);
if(!((m == null))){
var index = s__$1.indexOf(m);
<<<<<<< HEAD
var G__35240 = s__$1.substring((index + cljs.core.count.call(null,m)));
var G__35241 = (limit__$1 - (1));
var G__35242 = cljs.core.conj.call(null,parts,s__$1.substring((0),index));
s__$1 = G__35240;
limit__$1 = G__35241;
parts = G__35242;
=======
var G__41318 = s__$1.substring((index + cljs.core.count.call(null,m)));
var G__41319 = (limit__$1 - (1));
var G__41320 = cljs.core.conj.call(null,parts,s__$1.substring((0),index));
s__$1 = G__41318;
limit__$1 = G__41319;
parts = G__41320;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
return cljs.core.conj.call(null,parts,s__$1);
}
}
break;
}
})())));
});

clojure.string.split.cljs$lang$maxFixedArity = 3;

/**
 * Splits s on \n or \r\n.
 */
clojure.string.split_lines = (function clojure$string$split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
 * Removes whitespace from both ends of string.
 */
clojure.string.trim = (function clojure$string$trim(s){
return goog.string.trim(s);
});
/**
 * Removes whitespace from the left side of string.
 */
clojure.string.triml = (function clojure$string$triml(s){
return goog.string.trimLeft(s);
});
/**
 * Removes whitespace from the right side of string.
 */
clojure.string.trimr = (function clojure$string$trimr(s){
return goog.string.trimRight(s);
});
/**
 * Removes all trailing newline \n or return \r characters from
 *   string.  Similar to Perl's chomp.
 */
clojure.string.trim_newline = (function clojure$string$trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.call(null,s,(index - (1)));
<<<<<<< HEAD
if(((("\n" === ch)) || (("\r" === ch)))){
var G__35243 = (index - (1));
index = G__35243;
=======
if((("\n" === ch)) || (("\r" === ch))){
var G__41321 = (index - (1));
index = G__41321;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
 * True is s is nil, empty, or contains only whitespace.
 */
clojure.string.blank_QMARK_ = (function clojure$string$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
 * Return a new string, using cmap to escape each character ch
 * from s as follows:
 * 
 * If (cmap ch) is nil, append ch to the new string.
 * If (cmap ch) is non-nil, append (str (cmap ch)) instead.
 */
clojure.string.escape = (function clojure$string$escape(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if((length === index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var replacement = cljs.core.get.call(null,cmap,ch);
if(!((replacement == null))){
buffer.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(replacement)].join(''));
} else {
buffer.append(ch);
}

<<<<<<< HEAD
var G__35244 = (index + (1));
index = G__35244;
=======
var G__41322 = (index + (1));
index = G__41322;
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
continue;
}
break;
}
});
/**
 * Return index of value (string or char) in s, optionally searching
 *   forward from from-index or nil if not found.
 */
clojure.string.index_of = (function clojure$string$index_of(var_args){
<<<<<<< HEAD
var G__35246 = arguments.length;
switch (G__35246) {
=======
var args41323 = [];
var len__36785__auto___41326 = arguments.length;
var i__36786__auto___41327 = (0);
while(true){
if((i__36786__auto___41327 < len__36785__auto___41326)){
args41323.push((arguments[i__36786__auto___41327]));

var G__41328 = (i__36786__auto___41327 + (1));
i__36786__auto___41327 = G__41328;
continue;
} else {
}
break;
}

var G__41325 = args41323.length;
switch (G__41325) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 2:
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
<<<<<<< HEAD
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));
=======
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41323.length)].join('')));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

clojure.string.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.indexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.indexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.index_of.cljs$lang$maxFixedArity = 3;

/**
 * Return last index of value (string or char) in s, optionally
 *   searching backward from from-index or nil if not found.
 */
clojure.string.last_index_of = (function clojure$string$last_index_of(var_args){
<<<<<<< HEAD
var G__35249 = arguments.length;
switch (G__35249) {
=======
var args41330 = [];
var len__36785__auto___41333 = arguments.length;
var i__36786__auto___41334 = (0);
while(true){
if((i__36786__auto___41334 < len__36785__auto___41333)){
args41330.push((arguments[i__36786__auto___41334]));

var G__41335 = (i__36786__auto___41334 + (1));
i__36786__auto___41334 = G__41335;
continue;
} else {
}
break;
}

var G__41332 = args41330.length;
switch (G__41332) {
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2
case 2:
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
<<<<<<< HEAD
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));
=======
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41330.length)].join('')));
>>>>>>> 54b92db2afab0b3f8b43d3015ce0608ab4a589a2

}
});

clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.lastIndexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.lastIndexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.last_index_of.cljs$lang$maxFixedArity = 3;

/**
 * True if s starts with substr.
 */
clojure.string.starts_with_QMARK_ = (function clojure$string$starts_with_QMARK_(s,substr){
return goog.string.startsWith(s,substr);
});
/**
 * True if s ends with substr.
 */
clojure.string.ends_with_QMARK_ = (function clojure$string$ends_with_QMARK_(s,substr){
return goog.string.endsWith(s,substr);
});
/**
 * True if s includes substr.
 */
clojure.string.includes_QMARK_ = (function clojure$string$includes_QMARK_(s,substr){
return goog.string.contains(s,substr);
});
