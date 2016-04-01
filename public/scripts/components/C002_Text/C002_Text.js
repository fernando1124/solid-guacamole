define([],function() {
    
    var TextZone = Object.create(Global.BaseComponent);
    TextZone.name = Global.ComponentNames.C002_TEXT;
    
    TextZone.initialize = function() {
        return this;
    }
    
    var factory = {
        instances: 0,
        create: function() {
            var app = Object.create(TextZone);
            app.id = Global.ComponentNames.C002_TEXT+"-"+this.instances;
            this.instances++;
            return app;
        }
    }
    return factory;
});