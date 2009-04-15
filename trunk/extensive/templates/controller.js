/**
 * @author schiesser
 */
Ext.ns('efiport.login.controller');

efiport.login.controller.login = function(widget){
    var that = {};
    
    that.login = function(email, password){
		Ext.MessageBox.wait(widget.waitText);
        var conn = new Ext.data.Connection({
            url: '/axis2/services/PartnerService/login',
            exceptionHandler: function(errorText){
                if (errorText === 'Not unique') {
					widget.model.email = email;
					widget.model.password = password;
			        util.ViewHelper.setView(widget.element, efiport.login.view.firstNameBirthDate);
                }
                else {
					Ext.Msg.alert('Fehler', errorText);
                }
            }
        });
        widget.model.authPartner.proxy = new Ext.data.HttpProxy(conn);
        widget.model.authPartner.load({
            params: {
                email: email,
                password: password,
				domain: widget.domain
            },
            callback: that.checkResult('Ihr Passwort ist nicht korrekt oder ihre E-Mail-Adresse ist uns leider nicht bekannt.')
        });
    };
    
    that.loginUnique = function(firstName, birthDate){
		Ext.MessageBox.wait(widget.waitText);
        widget.model.authPartner.proxy = new Ext.data.HttpProxy({
            url: '/axis2/services/PartnerService/loginUnique'
        });
        widget.model.authPartner.load({
            params: {
                email: widget.model.email,
				domain: widget.domain,
                password: widget.model.password,
				firstName: firstName,
				birthDate: birthDate.getElapsed() 
            },
            callback: that.checkResult('Sie sind uns leider nicht bekannt. Bitte überprüfen Sie Ihre Angabe oder melden Sie sich neu mit einer anderen E-Mail Adresse an.')
        });
    };
    
    that.checkResult = function(message){
        return function(records,options,success){
			if (success) {
				Ext.MessageBox.hide();
				var partner = records[0];
				if (partner !== undefined) {
					var id = partner.get('goid');
					if (id !== undefined && id !== '') {
						// call defined callback
						if (widget.callback !== undefined) {
							widget.callback();
						}
						widget.fireEvent('authenticated');
					}
					else {
						Ext.Msg.alert('Fehler', message);
					}
				}
			}
        };
    };
    
    that.register = function(email){
        var view = util.ViewHelper.setView(widget.element, efiport.login.view.register);
        view.emailField.setValue(email);
    };
    
    return that;
};
