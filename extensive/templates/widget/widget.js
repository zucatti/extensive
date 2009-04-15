/**
 * @author schiesser
 */
Ext.onReady(function(){
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    Ext.QuickTips.init();
    // turn on validation errors beside the field globally
    Ext.form.Field.prototype.msgTarget = 'side';
    Ext.form.VTypes.emailText = "Bei Ihre Eingabe handelt es sich keine E-Mail-Adresse im Format 'benutzer@domain.de'";
});

// register default view of widget
Ext.ns('efiport');

efiport.Login = function(config){
    Ext.apply(this, config);
    // create instances
    this.model = efiport.login.model(this);
    this.clogin = efiport.login.controller.login(this);
    this.cregister = efiport.login.controller.register(this);
	
	var that = this;
	util.ViewHelper.setViewFactory(this.element, function(viewClass){
		return viewClass(that);	
	});

    this.addEvents("authenticated");
    efiport.Login.superclass.constructor.call(this);

    if (!this.forceLogin) {
        this.checkSession();
    }
    else {
        if (!this.doNotRender) {
            this.render();
        }
    }
};

Ext.extend(efiport.Login, Ext.util.Observable, {

	domain: 'campus.efiport.de',
    loginText: 'Um weiterzufahren, müssen Sie sich hier einloggen:',
    newUserText: 'Ja, ich möchte mich als neuer Benutzer anmelden.',
	commitText : 'Bitte überprüfen Sie Ihre Buchung.',
	firstNameText: 'Leider konnten wir Ihre E-Mail-Adresse nicht eindeutig zuordnen, daher benötigen wir noch ein paar zusätzliche Angaben von Ihnen, um Sie zu authentifizieren.',
    newCustomerText: 'Ich bin ein neuer Kunde bei efiport',
	customerText: 'Ich bin bereits Kunde bei efiport',
	waitText: 'Bitte warten... wir überprüfen Ihre Daten.',
	newPartnerOrganisation: '00000039155491~',
	
    render: function(){
		util.ViewHelper.setView(this.element, efiport.login.view.login);
    },
    
    checkSession: function(){
        var that = this;
        Ext.Ajax.simpleRequest({
            url: '/axis2/services/PartnerService/checkSession',
			returnType: 'boolean',
            success: function(sessionValid){
                if (sessionValid) {
					that.fireEvent('authenticated');
					if (that.callback !== undefined) {
						that.callback();
					}
                }
                else {
                    if (!that.doNotRender) {
                        that.render();
                    }
                }
            }
        });
    }
    
});
