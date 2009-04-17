Ext.ns('{widgetNameSpace}');

{widgetNameSpace}.{widgetClass} = Ext.extend({parentClass}, {

    constructor: function(config){
        {widgetNameSpace}.{widgetClass}.superclass.constructor.call(this, config);
        var that = this;

	    that.model = {};
	    that.controller = {};
        that.model.app = {widgetNameSpace}.model.app(that);
    	that.controller.app = {widgetNameSpace}.controller.app(that);

        Extreme.util.ViewHelper.setViewFactory(that, function(viewClass){
            return viewClass(that);
        });
		// TODO add view classes here
        Extreme.util.ViewHelper.setViewClasses(that, []);
        
		// TODO set initial view here
        Extreme.util.ViewHelper.setView(that, undefined);
    }
    
});