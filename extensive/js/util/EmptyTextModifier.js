/**
 * @author schiesser
 */
Ext.form.BasicForm.prototype._getValues = Ext.form.BasicForm.prototype.getValues;
Ext.form.BasicForm.prototype.getValues = function(asString){
    var removeEmptyText = function(item){
        if (item.emptyText !== undefined && item.el.getValue() == item.emptyText) {
            item.el.dom.value = '';
        }
        if (item.items !== undefined) {
            item.items.each(removeEmptyText);
        }
    };
    removeEmptyText(this);
    var ret = Ext.form.BasicForm.prototype._getValues.call(this, asString);
    var resetEmptyText = function(item){
        if (item.emptyText !== undefined && item.el.getValue() === '') {
            item.el.dom.value = item.emptyText;
        }
        if (item.items !== undefined) {
            item.items.each(resetEmptyText);
        }
    };
	resetEmptyText(this);
    return ret;
};
