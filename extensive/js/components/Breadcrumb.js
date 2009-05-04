/**
 * @author schiesser
 */
Ext.ns('Extensive.components');

Extensive.components.Breadcrumb = Ext.extend(Ext.form.Label, {
    initComponent: function(){
        var that = this;
        Extensive.util.ViewHelper.on('change', function(){
            var viewNames = Extensive.util.ViewHelper.getViewNames(that.elementToTrack);
            viewNames = viewNames.filter(function(element){
                return element !== undefined;
            });
			var result = "";
			viewNames.forEach(function(viewName, index) {
				if (index < viewNames.length-1) {
					result += viewName + ' » ';
				} else {
					result += '<span class="extensive-viewHighlight">' + viewName + '</span>';
				}
			});
			that.setText(result, false);
        });
    }
});
