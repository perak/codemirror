Template.CodeMirror.rendered = function() {
	var options = this.data.options || { lineNumbers: true };
	var textarea = this.find("textarea");
	var editor = CodeMirror.fromTextArea(textarea, options);

	editor.on("change", function(doc) {
		textarea.value = doc.getValue();
	});

  if (this.data.reactiveVar) {
  	var self = this;
    Tracker.autorun(function () {
      if (!editor.hasFocus()) {
        editor.setValue(Session.get(self.data.reactiveVar));
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
