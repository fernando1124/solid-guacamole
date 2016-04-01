define(["C001_TopMenu", "S001_Home", "S002_Bio"],function(C001_TopMenuFactory, S001_Home, S002_Bio) {
	var app = Object.create(Global.BaseScene);
	app.name = Global.SceneNames.S000_MAIN;

	app.initOn = function(root, isActive) {
            this.isActive = isActive;
            this.loadTemplate(root).done(function() {                
                this.addComponent(C001_TopMenuFactory.create(), this.root.find("#top-container"));
                this.addScene(S001_Home, this.root.find("#scene-01"), true);
            });
            /*this.loadTemplate($("body")).done(function() {
                C001_TopMenuFactory.createOn($("#top-container"));
                S001_Home.initOn($("#scene-01"), true);
                S002_Bio.initOn($("#scene-02"));
            });*/
	}
        
        
	return app;
});
