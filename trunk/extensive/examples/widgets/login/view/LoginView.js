Ext.ns('Extensive.examples.login.view');

Extensive.examples.login.view.LoginView = function(widget){
	
    var emailField = new Ext.form.TextField({
        xtype: 'textfield',
        fieldLabel: 'E-Mail',
        emptyText: '(e.g. max@mustermann.de)',
        name: 'first',
        allowBlank: false,
        vtype: 'email',
        blankText: 'Please enter a valid e-mail address',
		anchor: '100%'
    });
    
    var passwordField = new Ext.form.TextField({
        fieldLabel: 'Password',
        inputType: 'password',
        blankText: 'Please enter a password',
        name: 'password',
        allowBlank: false,
		anchor: '100%'
    });
    
    var view = new Ext.form.FormPanel({
        labelAlign: 'top',
        autoHeight: true,
        border: false,
        title: 'Login',
		width: 300,
        
        items: [emailField, passwordField]
		
    });
    
    view.addButton('Register', function(){
		widget.controller.Login.register(emailField.getValue());
    });
    view.addButton('Login', function(){
        if (emailField.isValid() && passwordField.isValid()) {
            widget.controller.Login.login(emailField.getValue(), passwordField.getValue());
        }
    });
	
    return view;
};

