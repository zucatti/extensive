/**
 * @author schiesser
 */
Ext.ns('Extensive.components');

Extensive.components.ViewName = Ext.extend(Ext.form.Label, {
    initComponent: function(){
        var that = this;
        Extensive.util.ViewHelper.on('change', function(){
            var viewNames = Extensive.util.ViewHelper.getViewNames(that.elementToTrack);
			var viewName = viewNames.pop();
			if (viewName !== undefined) {
				that.setText(viewName);
			}
        });
    }
});
