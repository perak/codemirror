Meteor CodeMirror package
=========================

<a href="http://codemirror.net/" target="_blank">CodeMirror</a> packaged for Meteor. **CodeMirror** is a versatile text editor implemented in JavaScript for the browser.


Usage
-----

Put somewhere in your template:

```
<template name="EditorPage">

	{{> CodeMirror id="some-id" name="someName" options=editorOptions code=editorCode reactiveVar="varName"}}

</template>
```

Parameters:

- `id` will be set to internal textarea element

- `name` will be set to internal textarea element (useful in form submit)

- `options` is CodeMirror options object

- `code` is code to show in editor

- `reactiveVar` optional name of Session variable, which is a reactive source of code

And provide helpers that returns CodeMirror options and content:

```
Template.EditorPage.helpers({

	"editorOptions": function() {
		return {
			lineNumbers: true,
			mode: "javascript"
		}
	},

	"editorCode": function() {
		return "Code to show in editor";
	}

});
```

To get value from editor, just read value from the internal textarea:

```
Template.EditorPage.events({

	"some event": function(e, t) {
		var code = t.find("#some-id").value;
		alert(code);
	}

});

```

Or, if you provided `reactiveVar` you can read session variable:

```
Template.EditorPage.helpers({
	"getEditorText": function() {
		return Session.get("varName"); // "varName" is variable name you provided to reactiveVar 
	}
});

```


Or, using raw html/javascript
-----------------------------

Create textarea somewhere in your html template:

```
<template name="EditorPage">

	<textarea id="myTextarea"></textarea>

</template>
```

Initialize CodeMirror somewhere from your js:

```
Template.EditorPage.rendered = function() {
	var editor = CodeMirror.fromTextArea(this.find("#myTextarea"), {
		lineNumbers: true,
		mode: "javascript" // set any of supported language modes here
	});
}
```

Deal with textarea as you normaly do with textarea, with exception that you cannot directly style `textarea` element - so, wrap it into `div` (that's because your textarea will be hidden and replaced by CodeMirror's own markup).


Supported modes
---------------

```
apl
asterisk
clike
clojure
cobol
commonlisp
coffeescript
css
cypher
d
diff
django
dtd
dylan
ecl
eiffel
erlang
fortran
gas
gfm
gherkin
go
groovy
haml
haskell
haxe
htmlembedded
htmlmixed
http
idl
jade
javascript
jinja2
julia
kotlin
livescript
lua
markdown
mirc
mllike
modelica
nginx
ntriples
octave
pascal
pegjs
perl
php
pig
properties
puppet
python
q
r
rpm
rst
ruby
rust
sass
scheme
shell
sieve
slim
smalltalk
smarty
smartymixed
solr
sparql
sql
stex
tcl
textile
tiddlywiki
tiki
toml
tornado
turtle
vb
vbscript
velocity
verilog
xml
xquery
yaml
z80
```


Supported themes
----------------

```
3024-day
3024-night
ambiance-mobile
ambiance
base16-dark
base16-light
blackboard
cobalt
eclipse
elegant
erlang-dark
lesser-dark
mbo
mdn-like
midnight
monokai
neat
neo
night
paraiso-dark
paraiso-light
pastel-on-dark
rubyblue
solarized
the-matrix
tomorrow-night-eighties
twilight
vibrant-ink
xq-dark
xq-light
```


Supported key bindings
----------------------

```
emacs
sublime
vim
```

Supported "lints"
-----------------

```
javascript
json
css
```

Version history
===============

1.2.9
-----

Fixed an error that appears when there are multiple editors on the the same template, which results in removing all editors when destroying just one template instance.

Thanks to <a href="https://github.com/Kurounin" target="_blank">Kurounin</a>


1.2.8
-----

Bugfixes


1.2.7
-----

Bugfixes


1.2.6
-----

Bugfixes


1.2.5
-----

- Included search & replace addon


1.2.4
-----

- Included "active line mode" addon


1.2.3
-----

- Added `/addon/mode/overlay.js` required by gfm mode. Thanks to <a href="https://github.com/keyanzhang" target="_blank">Keyan Zhang</a>.


1.2.2
-----

- `reactiveVar` now gets and sets session variable to/from editor text


1.2.1
-----

- Fixed minor bug


1.2.0
-----

- Fixed bug with `reactiveVar` 



That's it.
