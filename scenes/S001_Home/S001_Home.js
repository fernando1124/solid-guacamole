define(["C002_Text", "C003_Image"],function(C002_TextFactory, C003_ImageFactory) {
    var app = Object.create(Global.BaseScene);
    app.name = Global.SceneNames.S001_HOME;

    app.initOn = function(root) {
        this.loadTemplate(root).done(function() {
            C003_ImageFactory.createOn(this.dom.find(".column").eq(1));
            C002_TextFactory.createOn(this.dom.find(".column").eq(0));
            C002_TextFactory.createOn(this.dom.find(".column").eq(2));
        });
    }
    return app;
});