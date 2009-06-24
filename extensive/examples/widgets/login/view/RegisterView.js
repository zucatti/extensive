/**
 * @author schiesser
 */
Ext.ns('Extensive.examples.login.view.');

Extensive.examples.login.view.RegisterView = function(widget){

    var view = new Ext.form.FormPanel({
        hideLabels: false,
        labelAlign: 'top',
		title: 'Register',
        border: false,
        width: 300,
        defaults: {
            anchor: '100%',
            xtype: 'textfield',
            allowBlank: false
        },
        
        items: [{
            fieldLabel: 'Name',
            emptyText: 'Your name',
            blankText: 'Please enter your name'
        }, {
            fieldLabel: 'E-Mail',
            emptyText: 'Your e-mail address',
			value: widget.model.app.email,
            vtype: 'email',
            blankText: 'Please enter a valid e-mail address'
        }, {
            inputType: 'password',
            fieldLabel: 'Password',
            blankText: 'Please enter a password'
        }]
    
    });
	view.on('afterlayout', function() {
		view.getForm().clearInvalid();
	});
    
    view.addButton('Back', function(){
		widget.previousView();
    });
    
    return view;
};

