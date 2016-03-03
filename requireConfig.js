require.config({
    baseUrl: 'scripts',
    paths: {
        jQuery: "libs/jquery",
        handlebars: "libs/handlebars-v4.0.5",
        helpers: "utils/helpers",
        C000_TheBigOne: "components/"+Global.ComponentNames.C000_THEBIGONE+"/"+Global.ComponentNames.C000_THEBIGONE,
        C001_TopMenu: "components/"+Global.ComponentNames.C001_TOPMENU+"/"+Global.ComponentNames.C001_TOPMENU,
        C002_Text: "components/"+Global.ComponentNames.C002_TEXT+"/"+Global.ComponentNames.C002_TEXT,
        C003_Image: "components/"+Global.ComponentNames.C003_IMAGE+"/"+Global.ComponentNames.C003_IMAGE,
        S001_Home: "scenes/"+Global.SceneNames.S001_HOME+"/"+Global.SceneNames.S001_HOME
    },
    shim: {
        jQuery: { exports: "$" },
        handlebars: { exports: "handlebars" }
    }
});