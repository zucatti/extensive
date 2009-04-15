/**
 * @author schiesser
 */
var saveString = function(string, fileName) {
	out = new java.io.BufferedWriter(new java.io.FileWriter(fileName));
	out.write(string);
	out.close();
};

saveString('Hello', 'hello.txt');
print('Extreme is loaded.');
