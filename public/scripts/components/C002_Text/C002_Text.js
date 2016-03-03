define([],function() {
	
	var factory = {
		createOn: function(root) {
					var app = Object.create(Global.BaseComponent);
					app.name = Global.ComponentNames.C002_TEXT;
					app.loadTemplate(root);
					return app;
				}
		}
	return factory;
});