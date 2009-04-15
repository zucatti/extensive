/**
 * @author schiesser
 */
Ext.ns('efiport.login.view');

efiport.login.view.login = function(widget){
    var that = {};
    
    var emailField = Ext.ComponentMgr.create({
        xtype: 'textfield',
        fieldLabel: 'E-Mail-Adresse',
        emptyText: 'Ihre E-Mail-Adresse (z.b. max@mustermann.de)',
        name: 'first',
        allowBlank: false,
        //	value: 'b@c.de',
        vtype: 'email',
        blankText: 'Bitte eine E-Mail-Adresse angeben',
        width: '60%'
    });
    
    var passwordField = Ext.ComponentMgr.create({
        fieldLabel: 'Ihr Passwort',
        xtype: 'textfield',
        inputType: 'password',
        blankText: 'Bitte ein Passwort angeben',
        //    value: 'c',
        name: 'password',
        allowBlank: false,
        width: '60%'
    });
    
    var passwordPanel = new Ext.Panel({
        labelAlign: 'top',
        frame: false,
        hidden: true,
        layout: 'form',
        border: false,
        hideLabels: false,
        items: [passwordField, comp.createStaticLink('Passwort vergessen?', 'http://campus.efiport.de/clicnetclm/sendUserData.do')]
    });
    
    var isNoCustomerRadio = new Ext.form.Radio({
        boxLabel: widget.newCustomerText,
        hideLabel: true,
        
        name: 'customer',
        checked: true
    });
    
    var isCustomerRadio = new Ext.form.Radio({
        boxLabel: widget.customerText,
        hideLabel: true,
        name: 'customer',
        listeners: {
            check: function(){
                passwordPanel.setVisible(this.checked);
            }
        }
    });
    
    var commit = function(){
        if (emailField.isValid()) {
            if (isCustomerRadio.checked) {
                if (passwordField.isValid()) {
                    widget.clogin.login(emailField.getValue(), passwordField.getValue());
                }
            }
            else {
                widget.clogin.register(emailField.getValue());
            }
        }
    };
    
    that.panel = new Ext.form.FormPanel({
        hideLabels: true,
        autoHeight: true,
        border: false,
        header: false,
        title: 'Login',
        width: 500,
        keys: {
            key: Ext.EventObject.ENTER,
            fn: commit
        },
        
        items: [{
            border: false,
            html: widget.loginText
        }, new Ext.form.RadioGroup({
            hideLabel: true,
            columns: 1,
            items: [isNoCustomerRadio, isCustomerRadio]
        }), emailField, passwordPanel]
    
    });
//	that.panel.on('activate', function() {
//		isCustomerRadio.focus(true, 100);
//	});
    
    that.panel.addButton('Weiter', commit);
    
    return that;
};

