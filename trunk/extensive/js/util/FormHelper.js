Ext.ns('Extensive.util');

Extensive.util.FormHelper = function(){

    that = {
        getChildren: function(root){
			var result = [];
			var index = 0;
			while (root.getComponent(index)) {
				result.push(root.getComponent(index++));
			}
			return result;
        },
        getValues: function(root, traverseCollapsedChildren){
            var result = {};
            var children = that.getChildren(root);
            children.forEach(function(child){
                if (child.xtype === 'fieldset') {
                    if (!child.collapsed || traverseCollapsedChildren) {
                        Ext.apply(result, that.getValues(child, traverseCollapsedChildren));
                    }
                }
                else {
                    var name = child.getName();
                    if (name.substring(0, 4) !== 'ext-') {
                        var value = child.getValue();
                    }
                    result[name] = value;
                }
            });
            return result;
        }
    };
    
    return that;
    
}();


