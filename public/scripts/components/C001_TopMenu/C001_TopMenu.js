define(["handlebars", "jQuery"],function(hbs) {
    var factory = {
        instances: 0,        
        create: function() {
            var app = Object.create(TopMenu);
            app.id = Global.ComponentNames.C001_TOPMENU+"-"+this.instances;
            this.instances++;
            return app;
        }
    };
    
    var TopMenu = Object.create(Global.BaseComponent);
    TopMenu.name = Global.ComponentNames.C001_TOPMENU;
    
    TopMenu.initialize = function() {
        this.changeMenu();
        return this;
    }
    TopMenu.changeMenu = function() {
        this.root.find(".link").click(function() {
            $(this).parent().find(".link").removeClass("link-selected");
            $(this).addClass("link-selected");
            Director.changeScene($(this).data("scene"));
        });
    }
    
    return factory;
});
