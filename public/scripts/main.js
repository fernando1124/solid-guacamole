define(["handlebars","helpers","S000_Main"],function(hbs,helpers,S000_Main) {
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

    S000_Main.initOn($('body'),true);
});