/**
 * @author schiesser
 */
Ext.ns('Extensive.components');

Extensive.components.ViewNavigation = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var that = this;
        that.addButton('Zurück', function(){
            Extensive.util.ViewHelper.previousView(that.elementToTrack);
        });
        that.addButton('Weiter', function(){
            Extensive.util.ViewHelper.setNextView(that.elementToTrack);
        });
    }
});
