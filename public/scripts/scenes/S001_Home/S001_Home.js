define(["C002_Text", "C003_Image"],function(C002_TextFactory, C003_ImageFactory) {
    var app = Object.create(Global.BaseScene);
    app.name = Global.SceneNames.S001_HOME;

    app.initOn = function(root, isActive) {
        this.root = root;
        this.isActive = (isActive);
        this.loadTemplate(this.root).done(function() {
            this.addComponent(C002_TextFactory.create(), this.dom.find(".column").eq(0));
            this.addComponent(C003_ImageFactory.create(), this.dom.find(".column").eq(1));
            this.addComponent(C002_TextFactory.create(), this.dom.find(".column").eq(2));
        });
    };
    return app;
});