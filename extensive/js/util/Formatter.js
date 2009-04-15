/**
 * @author schiesser
 */
Ext.ns('Extreme.util.Formatter');

Extreme.util.Formatter.eurMoney = function(money){
	return money.toFixed(2).replace('.', ',');
};