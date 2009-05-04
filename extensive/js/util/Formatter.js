/**
 * @author schiesser
 */
Ext.ns('Extensive.util.Formatter');

Extensive.util.Formatter.eurMoney = function(money){
	return money.toFixed(2).replace('.', ',');
};