var Global = {
	SiteConstants: {
		BASE_URL: "http://" + window.location.host + "/",
		COMPONENTS_REL_URL: "scripts/components/",
		SCENES_REL_URL: "scripts/scenes/",
		MOCK_FILE_REL_URL: "/JSON/input.json",
		TEMPLATE_REL_URL: "/html/template.hbs"
	},
	ComponentNames: {
		C000_THEBIGONE: "C000_TheBigOne",
		C001_TOPMENU: "C001_TopMenu",
		C002_TEXT: "C002_Text",
		C003_IMAGE: "C003_Image"
	},
	SceneNames: {
		S001_HOME: "S001_Home"
	},


	BaseComponent: {
		name: "Component Name Goes Here",
		isMocked: true,
		isAppendable: true,
		template: "",
		data: "",
		root: "",
		templateLoaded: false,
		template: "",
		dom: false,

		loadTemplate: function(root) {
			console.log("Loading Template for Component: "+this.name);
			this.root = root;
			this.templateLoaded = $.Deferred();
			$.ajax({
				context: this,
				url: Global.SiteConstants.BASE_URL+Global.SiteConstants.COMPONENTS_REL_URL+this.name+Global.SiteConstants.TEMPLATE_REL_URL
			})
			.done(function(template) {
				this.template = Global.HBS.compile(template);
				this.loadData().done(function() {
					var html = this.template(this.data);
					if(this.root && this.root.length > 0) {
						if(this.isAppendable) {
							this.root.append(html);
						} else {
							this.root.html(html);
						}
						this.dom = this.root.find("div").eq(0);
					} else {
						console.log("Couldn't find root '$("+this.root.selector+")' to append component '"+this.name+"'");
					}
					this.templateLoaded.resolveWith(this);
				});
			});
			return this.templateLoaded.promise();
		},
		loadData: function() {
			if(this.isMocked) {
				return this.loadMockedData();
			}
		},
		loadMockedData: function() {
			var deferred = $.Deferred();
			$.ajax({
				context: this,
				url: Global.SiteConstants.BASE_URL+Global.SiteConstants.COMPONENTS_REL_URL+this.name+Global.SiteConstants.MOCK_FILE_REL_URL
			})
			.done(function(data) {
				this.data = data;
				deferred.resolveWith(this);
			});
            return deferred.promise();
		}
	},

	BaseScene: {
		name: "DefaultScene",
		templateReady: false,
		template: "",
		data: {},
		root: false,
		dom: false,

		loadTemplate: function(root) {
			console.log("Loading Template for Scene: "+this.name);
			this.root = root;
			this.templateReady = $.Deferred();
			$.ajax({
				context: this,
				url: Global.SiteConstants.BASE_URL+Global.SiteConstants.SCENES_REL_URL+this.name+Global.SiteConstants.TEMPLATE_REL_URL
			})
			.done(function(template) {
				this.template = Global.HBS.compile(template);
				var html = this.template(this.data);
				if(this.root.length > 0) {
					this.root.html(html);
					this.dom = this.root.find("div").eq(0);
				} else {
					console.log("Couldn't find root '$("+this.root.selector+")' to insert scene '"+this.name+"'");
				}
				this.templateReady.resolveWith(this);
			});
			return this.templateReady.promise();
		}
	}
}
