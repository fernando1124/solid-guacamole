define([],function() {
    
    var ImageComponent = Object.create(Global.BaseComponent);
    ImageComponent.name = Global.ComponentNames.C003_IMAGE;
    
    ImageComponent.initialize = function() {
        return this;
    }
    
    var factory = 
    {
        instances: 0,
        create: function() 
        {
            var app = Object.create(ImageComponent);
            app.id = Global.ComponentNames.C003_IMAGE+"-"+this.instances;
            this.instances++;
            return app;
        }
    }
    return factory;
});