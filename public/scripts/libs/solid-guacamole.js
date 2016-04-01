var Director = {
    currentScene: false,
    scenes: {},
    
    registerScene: function(objScene, isCurrent) {
        if(isCurrent) {
            this.currentScene = objScene;
        }
        this.scenes[objScene.name] = objScene;
    },
    
    getScene: function(sceneId) {
        return this.scenes[sceneId];
    },
    
    changeScene: function(nextScene) {
        var nextScene = this.getScene(nextScene);
        if(nextScene) {
            this.currentScene.deactivateScene();
            nextScene.activateScene();
            this.currentScene = nextScene;
        } else {
            this.deactivateScenes();
        }
    },
    
    deactivateScenes: function() {
        for(var scene in this.scenes) {
            this.getScene(scene).deactivateScene();
        }
    }
};

var Global = {
    SiteConstants: {
        BASE_URL: "http://" + window.location.host + "/",
        COMPONENTS_REL_URL: "scripts/components/",
        SCENES_REL_URL: "scripts/scenes/",
        MOCK_FILE_REL_URL: "/JSON/input.json",
        TEMPLATE_REL_URL: "/html/template.hbs"
    },
    ComponentNames: {
        C001_TOPMENU: "C001_TopMenu",
        C002_TEXT: "C002_Text",
        C003_IMAGE: "C003_Image"
    },
    SceneNames: {
        S000_MAIN: "S000_Main",
        S001_HOME: "S001_Home",
        S002_BIO: "S002_Bio"
    },
    BaseComponent: {
        name: "Component Name Goes Here",
        id: "",
        isMocked: true,
        isAppendable: true,
        template: "",
        data: "",
        root: "",
        templateLoaded: false,
        dom: false,
        loadTemplate: function (root) {
            console.log("Loading Template for Component: " + this.name);
            this.root = root;
            this.templateLoaded = $.Deferred();
            $.ajax({
                context: this,
                url: Global.SiteConstants.BASE_URL + Global.SiteConstants.COMPONENTS_REL_URL + this.name + Global.SiteConstants.TEMPLATE_REL_URL
            })
                    .done(function (template) {
                        this.template = Global.HBS.compile(template);
                        this.loadData().done(function () {
                            var html = this.template(this.data);
                            if (this.root && this.root.length > 0) {
                                if (this.isAppendable) {
                                    this.root.append(html);
                                } else {
                                    this.root.html(html);
                                }
                                this.dom = this.root.find("header,div").eq(0);
                                this.dom.attr("id",this.id);
                            } else {
                                console.log("Couldn't find root '$(" + this.root.selector + ")' to append component '" + this.name + "'");
                            }
                            this.templateLoaded.resolveWith(this);
                        });
                    });
            return this.templateLoaded.promise();
        },
        loadData: function () {
            if (this.isMocked) {
                return this.loadMockedData();
            }
        },
        loadMockedData: function () {
            var deferred = $.Deferred();
            $.ajax({
                context: this,
                url: Global.SiteConstants.BASE_URL + Global.SiteConstants.COMPONENTS_REL_URL + this.name + Global.SiteConstants.MOCK_FILE_REL_URL
            })
                    .done(function (data) {
                        this.data = data;
                        deferred.resolveWith(this);
                    });
            return deferred.promise();
        }
    },
    BaseScene: {
        isActive: false,
        name: "DefaultScene",
        templateReady: false,
        template: "",
        data: {},
        root: false,
        dom: false,
        components: {},
        
        loadTemplate: function (root) {
            console.log("Loading Template for Scene: " + this.name);
            this.root = root;
            this.templateReady = $.Deferred();
            $.ajax({
                context: this,
                url: Global.SiteConstants.BASE_URL + Global.SiteConstants.SCENES_REL_URL + this.name + Global.SiteConstants.TEMPLATE_REL_URL
            })
            .done(function (template) {
                this.template = Global.HBS.compile(template);
                var html = this.template(this.data);
                if (this.root.length > 0) {
                    this.root.html(html);
                    this.dom = this.root.find("div").eq(0);
                } else {
                    console.log("Couldn't find root '$(" + this.root.selector + ")' to insert scene '" + this.name + "'");
                }
                if(!this.isActive) {
                    this.deactivateScene();
                }
                this.templateReady.resolveWith(this);
                    });
            return this.templateReady.promise();
        },
        addComponent: function(objComponent, section) {
            objComponent.loadTemplate(section).done(function() {
                this.initialize();
            });
            this.registerComponent(objComponent);
        },
        getComponent: function(componentId) {
            return this.components[componentId];
        },
        registerComponent: function(objComponent) {
            this.components[objComponent.name] = objComponent;
        },
        addScene: function(objScene, parent, isActive) {
            objScene.initOn(parent, isActive);
            Director.registerScene(objScene, isActive);
        },
        activateScene: function() {
            this.isActive = true;
            this.root.show();
        },

        deactivateScene: function() {
            this.isActive = false;
            this.root.hide();
        }
    }
};