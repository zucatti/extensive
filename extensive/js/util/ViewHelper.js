/**
 * Each view needs to have to properties
 * panel (an Ext panel) & viewName a String that contains the name of the view
 *
 * @author schiesser
 */
Ext.ns('Extensive.util.ViewHelper');

Extensive.util.ViewHelper = function(){
	// private helpers
	var getViewObject = function(element, objectName) {
		if(element[objectName] === undefined) {
			element[objectName] = [];
		}
		if(!element[objectName] instanceof Array) {
			throw new Error('To use ViewHelper ' + objectName + ' needs to be undefined');
		}
		return element[objectName];
	};
	
	var getViewStack = function(element) {
		return getViewObject(element, '_viewStack');
	};

	var getViewClasses = function(element) {
		return getViewObject(element, '_viewClasses');
	};
	
	var getLastView = function(element) {
		var viewStack = getViewStack(element);
		return viewStack[viewStack.length-1];
	};
	
	var createView = function(element, viewClass) {
		var view = element._viewFactory(viewClass);
		view._viewClass = viewClass;
		return view;
	};
	
	var observable = new Ext.util.Observable();
	observable.addEvents('change');
	
	var getPanel = function(view) {
		if (view.panel !== undefined) {
			return view.panel;
		}
		else {
			return view;
		}
	};
	
	return Ext.apply(observable, {
	
		setView: function(element, viewClass){
			var view = createView(element, viewClass);
			this.renderNewView(element, view);
			return view;
		},
		
		setNextView: function(element) {
			// get actual view class
			var viewClass = getLastView(element)._viewClass;
			// retrieve next view class
			var nextViewClassIndex = getViewClasses(element).indexOf(viewClass)+1;
			var nextViewClass = getViewClasses(element)[nextViewClassIndex];
			this.setView(element, nextViewClass);
		},
		
		setViewClasses: function(element, viewClasses) {
			element._viewClasses = viewClasses;
		},
		
		setViewFactory: function(element, viewFactory) {
			element._viewFactory = viewFactory;
		},
		
		renderNewView: function(element, view){
			// hide old view if exists
			var lastView = getLastView(element);
			if (lastView !== undefined) {
				getPanel(lastView).hide();
				getPanel(lastView).fireEvent('deactivate');
			}
			// store view in viewStack
			getViewStack(element).push(view);
			// render view
			if (element instanceof Ext.Container) {
				element.add(getPanel(view));
				element.doLayout();
			}
			else {
				getPanel(view).render(element);
			}
			getPanel(view).fireEvent('activate');
			this.fireEvent('change');
		},
		
		previousView: function(element){
			var view = getViewStack(element).pop();
			// remove from container if element is one
			if (element instanceof Ext.Container) {
				element.remove(getPanel(view));
			}
			getPanel(view).destroy();
			var lastView = getLastView(element);
			if (lastView !== undefined) {
				getPanel(lastView).show();
				getPanel(lastView).fireEvent('activate');
			}
			this.fireEvent('change');
		},
		
		getViewNames: function(element){
			var result = [];
			getViewStack(element).forEach(function(view){
				result.push(view.viewName);
			});
			return result;
		}
	});
	
}();


