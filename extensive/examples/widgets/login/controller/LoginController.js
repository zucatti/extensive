Ext.ns('Extensive.examples.login.controller');

Extensive.examples.login.controller.LoginController = function(widget){
    var that = {};
     
	that.login = function(email, password) {
		if(email==='homer@simpsons.com' && password==='duff') {
			widget.fireEvent('authenticated');
		} else {
           Ext.Msg.alert('Ooops...', 'Your credentials dont look right...');
		}
	};
	
	that.register = function(email) {
		widget.model.app.email = email;
        widget.setView(Extensive.examples.login.view.RegisterView);
	};
	
    return that;
};
