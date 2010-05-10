/**
 * @author schiesser
 */
var saveString = function(string, fileName) {
	out = new java.io.BufferedWriter(new java.io.FileWriter(fileName));
	out.write(string);
	out.close();
};

load('scripts/env.js');
window.location='scripts/empty.html';
document='scripts/empty.html';
load('lib/ext-base.js');
load('lib/ext-all-debug.js');
// load templates
var template = readFile('templates/view.js');
print(template);
var tpl = new Ext.XTemplate("<html>{widgetNameSpace}</html>");
//print(tpl.apply({widgetNameSpace: 'sfsdf'}));
//saveString(template, 'hello.txt');
print('Extensive is loaded.');