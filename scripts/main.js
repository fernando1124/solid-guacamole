define(["handlebars","helpers","C000_TheBigOne"],function(hbs,helpers,C000_TheBigOne) {
    var useMockData = true;

    //INIT CONSTANTS AUTO EXEC FUNCTION
   /* (function() {
    	var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = "scripts/libs/global.js";
		$("head").prepend(s);
    })();*/

    Global.HBS = hbs;
    helpers.initRegistration();

    C000_TheBigOne.init();
});