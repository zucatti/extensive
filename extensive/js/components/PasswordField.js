/**
 * @author schiesser
 * This component does not work with IE6
 */
Ext.ns('Extensive.components');

Extensive.components.PasswordField = Ext.extend(Ext.form.TextField, {
    onRender: function(){
		this.inputType = 'password';
        Extensive.components.PasswordField.superclass.onRender.apply(this, arguments);
	//	this.el.dom.type = 'password';
   //     this.getEl().dom.type = 'password';
    },
    onFocus: function(){
        Extensive.components.PasswordField.superclass.onFocus.apply(this, arguments);
        this.getEl().dom.type = 'password';
    },
    onBlur: function(){
        Extensive.components.PasswordField.superclass.onBlur.apply(this, arguments);
        if (this.getValue() === '') {
            this.getEl().dom.type = 'input';
        }
    }
});
Ext.reg('passwordfield', Extensive.components.PasswordField);
