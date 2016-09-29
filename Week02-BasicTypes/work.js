var fs = require('fs');

fs.readFile('./index.json', 'utf8', function(err, rawJson) {
	if (err) {
		throw err;
	}
	var json = JSON.parse(rawJson);
	console.log(json);
	for (aProperty in json) {
		console.log(aProperty, typeof json[aProperty]);
	}
});
