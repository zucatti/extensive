Ext.ns('Extensive.examples.login');

Extensive.examples.login.Widget = Ext.extend(Ext.Panel, {

    constructor: function(config){
        Extensive.examples.login.Widget.superclass.constructor.call(this, config);
        var that = this;

	    that.model = {};
	    that.controller = {};
        that.model.app = Extensive.examples.login.model.app(that);
    	that.controller.Login = Extensive.examples.login.controller.LoginController(that);

        Extensive.util.ViewHelper.setViewFactory(that, function(viewClass){
            return viewClass(that);
        });

		that.setView(Extensive.examples.login.view.LoginView);     
    },
	
	setView: function(viewClass) {
        Extensive.util.ViewHelper.setView(this, viewClass);
	},
	
	previousView: function() {
        Extensive.util.ViewHelper.previousView(this);
	}
    
});