/**
 * @author schiesser
 */
Ext.ns('Extreme.util');

Extreme.util.TemplateLoader = function(){
	var that = {};
	
	var map = {};
		
	that.getTemplate = function(url){
		if (map[url] === undefined) {
			throw new Error('undefined template: ' + url);
		} else {
			return map[url];
		}
	};

	that.loadTemplate = function(url, callback) {
		if (map[url] === undefined) {
			Ext.Ajax.request({
				url: url,
				success: function(xhr){
					var template = new Ext.XTemplate(xhr.responseText);
					template.compile();
					map[url] = template;
					callback(template);
				}
			});
		} else {
			callback(map[url]);
		}
	};
	
	that.loadTemplates = function(urls, callback) {
		var count = 0;
		urls.forEach(function(url){
			that.loadTemplate(url, function() {
				count++;
				if(count==urls.length) {
					callback();
				}
			});
		});
	};
	
	return that;
}();