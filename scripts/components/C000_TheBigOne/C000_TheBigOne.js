define(["C001_TopMenu", "S001_Home"],function(C001_TopMenuFactory, S001_Home) {
	var app = Object.create(Global.BaseComponent);
	app.name = Global.ComponentNames.C000_THEBIGONE;
	
	app.init = function() {
		this.loadTemplate($("body")).done(function() {
			C001_TopMenuFactory.createOn($("#top-container"));
			S001_Home.initOn($("#scene-01"));
		});	
	}
	return app;
});