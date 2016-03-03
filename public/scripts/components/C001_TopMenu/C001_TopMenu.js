define(["handlebars", "jQuery"],function(hbs) {
    var factory = {
        createOn: function(root) {
            var app = Object.create(Global.BaseComponent);
            app.name = Global.ComponentNames.C001_TOPMENU;
            app.loadTemplate(root).done(function() {
                app.dom.click("a.link", function() {
                    app.root.parent().find(".scene").hide();
                    console.log(this);
                });
            });
            return app;
        }
    }
    return factory;
});
