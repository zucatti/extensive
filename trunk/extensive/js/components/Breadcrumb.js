/**
 * @author schiesser
 */
Ext.ns('Extreme.components');

Extreme.components.Breadcrumb = Ext.extend(Ext.form.Label, {
    initComponent: function(){
        var that = this;
        Extreme.util.ViewHelper.on('change', function(){
            var viewNames = Extreme.util.ViewHelper.getViewNames(that.elementToTrack);
            viewNames = viewNames.filter(function(element){
                return element !== undefined;
            });
            that.setText(viewNames.join(' » '));
        });
    }
});
