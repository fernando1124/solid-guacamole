define(["C002_Text", "C003_Image"],function(C002_TextFactory, C003_ImageFactory) {
    var app = Object.create(Global.BaseScene);
    app.name = Global.SceneNames.S002_BIO;

    app.initOn = function(root, isActive) {
        this.root = root;
        this.isActive = (isActive);
        this.loadTemplate(this.root).done(function() {
            C002_TextFactory.createOn(this.root.find('.column').eq(0));
        });
    }
    return app;
});