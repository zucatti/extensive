/**
 * @author schiesser
 * This component does not work with IE6
 */
Ext.ns('Extreme.components');

Extreme.components.PasswordField = Ext.extend(Ext.form.TextField, {
    onRender: function(){
		this.inputType = 'password';
        Extreme.components.PasswordField.superclass.onRender.apply(this, arguments);
	//	this.el.dom.type = 'password';
   //     this.getEl().dom.type = 'password';
    },
    onFocus: function(){
        Extreme.components.PasswordField.superclass.onFocus.apply(this, arguments);
        this.getEl().dom.type = 'password';
    },
    onBlur: function(){
        Extreme.components.PasswordField.superclass.onBlur.apply(this, arguments);
        if (this.getValue() === '') {
            this.getEl().dom.type = 'input';
        }
    }
});
Ext.reg('passwordfield', Extreme.components.PasswordField);
