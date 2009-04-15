/**
 * @author schiesser
 */
Ext.ns('efiport.login');

efiport.login.model = function(widget){
    var that = {};
	
    that.authPartner = new Ext.data.Store({
        reader: new Ext.data.XmlReader({
            record: 'return'
        }, ['addressCity', 'addressStreet', 'addressZipCode',
		'email','firstName','lastName','goid'])
    });
	
    return that;
};
