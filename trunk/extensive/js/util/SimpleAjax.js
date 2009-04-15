/**
 * Injects an ErrorHandler to all HttpProxy instances.
 * Just displays the message of the AxisFault to the user.
 *
 * @author schiesser
 */
Ext.Ajax.simpleRequest = function(spec){
    var success = spec.success;
    var parseBoolean = function(value){
        switch (value) {
            case 'true':
                return true;
            case 'false':
                return false;
        }
		return undefined;
    };
    spec.success = function(response){
        var value = Ext.DomQuery.selectValue("return", response.responseXML);
        // type of value is always String so do some nice conversion
        // first boolean
        switch (spec.returnType) {
            case 'int':
                value = parseInt(value, 10);
                break;
            case 'float':
                value = parseFloat(value);
                break;
            case 'boolean':
                value = parseBoolean(value);
                break;
        }
        success(value);
    };
    return Ext.Ajax.request(spec);
};
