Package.describe({
	summary: "CodeMirror editor for Meteor >= 1.0",
	version: "1.2.4",
	git: "https://github.com/perak/codemirror.git"
});

// Before Meteor 0.9?
if(!Package.onUse) Package.onUse = Package.on_use;

Package.onUse(function (api) {
	if(api.versionsFrom) {
		api.versionsFrom('METEOR@0.9.0');
	}

	api.use("underscore");
	api.use("templating");

	// code
	api.add_files('lib/codemirror/lib/codemirror.css', "client");
	api.add_files('lib/codemirror/lib/codemirror.js', "client");
	api.export('CodeMirror', "client");


	// component
	api.add_files('lib/component/component.html', "client");
	api.add_files('lib/component/component.js', "client");


	// lints
	api.add_files('lib/codemirror/addon/lint/jsonlint.js', "client");
	api.add_files('lib/codemirror/addon/lint/jshint.js', "client");
	api.add_files('lib/codemirror/addon/lint/csslint.js', "client");
	api.export('jsonlint', "client");
	api.export('JSHINT', "client");
	api.export('CSSLint', "client");

	api.add_files('lib/codemirror/addon/lint/lint.css', "client");
	api.add_files('lib/codemirror/addon/lint/lint.js', "client");
	api.add_files('lib/codemirror/addon/lint/json-lint.js', "client");
	api.add_files('lib/codemirror/addon/lint/javascript-lint.js', "client");

	// active line mode
	api.add_files('lib/codemirror/addon/selection/active-line.js', "client");	

	// overlay: required by `gfm.js`
	api.add_files('lib/codemirror/addon/mode/overlay.js', "client");
	
	// modes
	api.add_files('lib/codemirror/mode/apl/apl.js', "client");
	api.add_files('lib/codemirror/mode/asterisk/asterisk.js', "client");
	api.add_files('lib/codemirror/mode/clike/clike.js', "client");
	api.add_files('lib/codemirror/mode/clojure/clojure.js', "client");
	api.add_files('lib/codemirror/mode/cobol/cobol.js', "client");
	api.add_files('lib/codemirror/mode/commonlisp/commonlisp.js', "client");
	api.add_files('lib/codemirror/mode/coffeescript/coffeescript.js', "client");
	api.add_files('lib/codemirror/mode/css/css.js', "client");
	api.add_files('lib/codemirror/mode/cypher/cypher.js', "client");
	api.add_files('lib/codemirror/mode/d/d.js', "client");
	api.add_files('lib/codemirror/mode/diff/diff.js', "client");
	api.add_files('lib/codemirror/mode/django/django.js', "client");
//	api.add_files('lib/codemirror/mode/dockerfile/dockerfile.js', "client");
	api.add_files('lib/codemirror/mode/dtd/dtd.js', "client");
	api.add_files('lib/codemirror/mode/dylan/dylan.js', "client");
	api.add_files('lib/codemirror/mode/ecl/ecl.js', "client");
	api.add_files('lib/codemirror/mode/eiffel/eiffel.js', "client");
	api.add_files('lib/codemirror/mode/erlang/erlang.js', "client");
	api.add_files('lib/codemirror/mode/fortran/fortran.js', "client");
	api.add_files('lib/codemirror/mode/gas/gas.js', "client");
	api.add_files('lib/codemirror/mode/gfm/gfm.js', "client");
	api.add_files('lib/codemirror/mode/gherkin/gherkin.js', "client");
	api.add_files('lib/codemirror/mode/go/go.js', "client");
	api.add_files('lib/codemirror/mode/groovy/groovy.js', "client");
	api.add_files('lib/codemirror/mode/haml/haml.js', "client");
	api.add_files('lib/codemirror/mode/haskell/haskell.js', "client");
	api.add_files('lib/codemirror/mode/haxe/haxe.js', "client");
	api.add_files('lib/codemirror/mode/htmlembedded/htmlembedded.js', "client");
	api.add_files('lib/codemirror/mode/htmlmixed/htmlmixed.js', "client");
	api.add_files('lib/codemirror/mode/http/http.js', "client");
	api.add_files('lib/codemirror/mode/idl/idl.js', "client");
	api.add_files('lib/codemirror/mode/jade/jade.js', "client");
	api.add_files('lib/codemirror/mode/javascript/javascript.js', "client");
	api.add_files('lib/codemirror/mode/jinja2/jinja2.js', "client");
	api.add_files('lib/codemirror/mode/julia/julia.js', "client");
	api.add_files('lib/codemirror/mode/kotlin/kotlin.js', "client");
	api.add_files('lib/codemirror/mode/livescript/livescript.js', "client");
	api.add_files('lib/codemirror/mode/lua/lua.js', "client");
	api.add_files('lib/codemirror/mode/markdown/markdown.js', "client");
	api.add_files('lib/codemirror/mode/mirc/mirc.js', "client");
	api.add_files('lib/codemirror/mode/mllike/mllike.js', "client");
	api.add_files('lib/codemirror/mode/modelica/modelica.js', "client");
	api.add_files('lib/codemirror/mode/nginx/nginx.js', "client");
	api.add_files('lib/codemirror/mode/ntriples/ntriples.js', "client");
	api.add_files('lib/codemirror/mode/octave/octave.js', "client");
	api.add_files('lib/codemirror/mode/pascal/pascal.js', "client");
	api.add_files('lib/codemirror/mode/pegjs/pegjs.js', "client");
	api.add_files('lib/codemirror/mode/perl/perl.js', "client");
	api.add_files('lib/codemirror/mode/php/php.js', "client");
	api.add_files('lib/codemirror/mode/pig/pig.js', "client");
	api.add_files('lib/codemirror/mode/properties/properties.js', "client");
	api.add_files('lib/codemirror/mode/puppet/puppet.js', "client");
	api.add_files('lib/codemirror/mode/python/python.js', "client");
	api.add_files('lib/codemirror/mode/q/q.js', "client");
	api.add_files('lib/codemirror/mode/r/r.js', "client");
	api.add_files('lib/codemirror/mode/rpm/rpm.js', "client");
	api.add_files('lib/codemirror/mode/rst/rst.js', "client");
	api.add_files('lib/codemirror/mode/ruby/ruby.js', "client");
	api.add_files('lib/codemirror/mode/rust/rust.js', "client");
	api.add_files('lib/codemirror/mode/sass/sass.js', "client");
	api.add_files('lib/codemirror/mode/scheme/scheme.js', "client");
	api.add_files('lib/codemirror/mode/shell/shell.js', "client");
	api.add_files('lib/codemirror/mode/sieve/sieve.js', "client");
	api.add_files('lib/codemirror/mode/slim/slim.js', "client");
	api.add_files('lib/codemirror/mode/smalltalk/smalltalk.js', "client");
	api.add_files('lib/codemirror/mode/smarty/smarty.js', "client");
	api.add_files('lib/codemirror/mode/smartymixed/smartymixed.js', "client");
	api.add_files('lib/codemirror/mode/solr/solr.js', "client");
	api.add_files('lib/codemirror/mode/sparql/sparql.js', "client");
	api.add_files('lib/codemirror/mode/sql/sql.js', "client");
	api.add_files('lib/codemirror/mode/stex/stex.js', "client");
	api.add_files('lib/codemirror/mode/tcl/tcl.js', "client");
	api.add_files('lib/codemirror/mode/textile/textile.js', "client");
	api.add_files('lib/codemirror/mode/tiddlywiki/tiddlywiki.js', "client");
	api.add_files('lib/codemirror/mode/tiki/tiki.js', "client");
	api.add_files('lib/codemirror/mode/toml/toml.js', "client");
	api.add_files('lib/codemirror/mode/tornado/tornado.js', "client");
	api.add_files('lib/codemirror/mode/turtle/turtle.js', "client");
	api.add_files('lib/codemirror/mode/vb/vb.js', "client");
	api.add_files('lib/codemirror/mode/vbscript/vbscript.js', "client");
	api.add_files('lib/codemirror/mode/velocity/velocity.js', "client");
	api.add_files('lib/codemirror/mode/verilog/verilog.js', "client");
	api.add_files('lib/codemirror/mode/xml/xml.js', "client");
	api.add_files('lib/codemirror/mode/xquery/xquery.js', "client");
	api.add_files('lib/codemirror/mode/yaml/yaml.js', "client");
	api.add_files('lib/codemirror/mode/z80/z80.js', "client");


	// themes
	api.add_files('lib/codemirror/theme/3024-day.css', "client");
	api.add_files('lib/codemirror/theme/3024-night.css', "client");
	api.add_files('lib/codemirror/theme/ambiance-mobile.css', "client");
	api.add_files('lib/codemirror/theme/ambiance.css', "client");
	api.add_files('lib/codemirror/theme/base16-dark.css', "client");
	api.add_files('lib/codemirror/theme/base16-light.css', "client");
	api.add_files('lib/codemirror/theme/blackboard.css', "client");
	api.add_files('lib/codemirror/theme/cobalt.css', "client");
	api.add_files('lib/codemirror/theme/eclipse.css', "client");
	api.add_files('lib/codemirror/theme/elegant.css', "client");
	api.add_files('lib/codemirror/theme/erlang-dark.css', "client");
	api.add_files('lib/codemirror/theme/lesser-dark.css', "client");
	api.add_files('lib/codemirror/theme/mbo.css', "client");
	api.add_files('lib/codemirror/theme/mdn-like.css', "client");
	api.add_files('lib/codemirror/theme/midnight.css', "client");
	api.add_files('lib/codemirror/theme/monokai.css', "client");
	api.add_files('lib/codemirror/theme/neat.css', "client");
	api.add_files('lib/codemirror/theme/neo.css', "client");
	api.add_files('lib/codemirror/theme/night.css', "client");
	api.add_files('lib/codemirror/theme/paraiso-dark.css', "client");
	api.add_files('lib/codemirror/theme/paraiso-light.css', "client");
	api.add_files('lib/codemirror/theme/pastel-on-dark.css', "client");
	api.add_files('lib/codemirror/theme/rubyblue.css', "client");
	api.add_files('lib/codemirror/theme/solarized.css', "client");
	api.add_files('lib/codemirror/theme/the-matrix.css', "client");
	api.add_files('lib/codemirror/theme/tomorrow-night-eighties.css', "client");
	api.add_files('lib/codemirror/theme/twilight.css', "client");
	api.add_files('lib/codemirror/theme/vibrant-ink.css', "client");
	api.add_files('lib/codemirror/theme/xq-dark.css', "client");
	api.add_files('lib/codemirror/theme/xq-light.css', "client");


	// key bindings
	api.add_files('lib/codemirror/keymap/emacs.js', "client");
	api.add_files('lib/codemirror/keymap/sublime.js', "client");
	api.add_files('lib/codemirror/keymap/vim.js', "client");

});
