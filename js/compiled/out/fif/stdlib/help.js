// Compiled by ClojureScript 1.10.339 {}
goog.provide('fif.stdlib.help');
goog.require('cljs.core');
goog.require('fif.stack_machine');
goog.require('fif.stack_machine.words');
fif.stdlib.help.arg_help_op = new cljs.core.Symbol(null,"help","help",1201298081,null);
fif.stdlib.help._STAR_help_msg_STAR_ = "\nFif Help Message\n----------------\nWebsite: github.com/benzap/fif\n\nView all words with 'see-words'\n\nView values on the stack with '.s'\n\nLearn more about a specific word with 'see <word>'.\n\nWords are categorized by group.\n - View all of the groups with 'see-groups'\n - View all of the words in a group with 'dir <group>'\n\n";
fif.stdlib.help.help_op = (function fif$stdlib$help$help_op(sm){
cljs.core.println.call(null,fif.stdlib.help._STAR_help_msg_STAR_);

return fif.stack_machine.dequeue_code.call(null,sm);
});
fif.stdlib.help.import_stdlib_help = (function fif$stdlib$help$import_stdlib_help(sm){
return fif.stack_machine.words.set_global_word_defn.call(null,sm,new cljs.core.Symbol(null,"help","help",1201298081,null),fif.stdlib.help.help_op,new cljs.core.Keyword(null,"stdlib?","stdlib?",351742220),true,new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"stdlib.help","stdlib.help",-1453902526),new cljs.core.Keyword(null,"doc","doc",1913296891),"Display a help message.");
});
