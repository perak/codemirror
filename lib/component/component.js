Template.CodeMirror.rendered = function() {
	var options = this.data.options || { lineNumbers: true };
	var textarea = this.find("textarea");
	var editor = CodeMirror.fromTextArea(textarea, options);
  	var self = this;

	editor.on("change", function(doc) {
		var val = doc.getValue();
		textarea.value = val;
		if(self.data.reactiveVar) {
   			Session.set(self.data.reactiveVar, val);
		}
	});

	if(this.data.reactiveVar) {
		Tracker.autorun(function () {
			var val = Session.get(self.data.reactiveVar) || "";
			if(val != editor.getValue()) {
				editor.setValue(val);
			}
    	});
	}
};

Template.CodeMirror.destroyed = function() {
	this.$("textarea").parent().find(".CodeMirror").remove();
}

Template.CodeMirror.helpers({
	"editorId": function() {
		return this.id || "code-mirror-textarea";
	},

	"editorName": function() {
		return this.name || "code-mirror-textarea";
	}
});
