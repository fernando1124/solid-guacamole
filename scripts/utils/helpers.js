define([],function() {
    var helpers = {
        test: function(variable, value, whenTrue, whenFalse) {
            return (variable === value) ? whenTrue : whenFalse;
        }
    }
    
    var app = {
        initRegistration: function() {
            Global.HBS.registerHelper("test", helpers.test);
        }
    }
    
    return app;
});