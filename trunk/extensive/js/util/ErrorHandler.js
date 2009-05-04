/**
 * Injects an ErrorHandler to all HttpProxy instances.
 * Just displays the message of the AxisFault to the user.
 * 
 * @author schiesser
 */
Ext.ns('Extensive.util');

Ext.data.Connection.prototype._handleFailure = Ext.data.Connection.prototype.handleFailure;

Extensive.util.ErrorHandler = function() {
	var that = {};
	
	that.getServerFault = function(response) {
		return Ext.DomQuery.selectValue("Reason/Text", response.responseXML, "Unbekannter Fehler");
	};
	
	that.createUnhandledConnection = function(config) {
		var conn = new Ext.data.Connection(config);
		conn.handleFailure = Ext.data.Connection.prototype._handleFailure;
		return conn;
	};
	
	return that;
}();

Ext.data.Connection.prototype.exceptionHandler = function(errorText) {
	Ext.Msg.alert('Fehler', errorText);
};

Ext.data.Connection.prototype.handleFailure = function(response, e) {
	var errorText = Extensive.util.ErrorHandler.getServerFault(response);
	this.exceptionHandler(errorText);
	Ext.data.Connection.prototype._handleFailure.call(this, response, e);
};

