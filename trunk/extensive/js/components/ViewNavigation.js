/**
 * @author schiesser
 */
Ext.ns('Extreme.components');

Extreme.components.ViewNavigation = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var that = this;
        that.addButton('Zurück', function(){
            Extreme.util.ViewHelper.previousView(that.elementToTrack);
        });
        that.addButton('Weiter', function(){
            Extreme.util.ViewHelper.setNextView(that.elementToTrack);
        });
    }
});
