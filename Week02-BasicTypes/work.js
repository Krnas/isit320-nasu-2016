var fs = require('fs');

fs.readFile('./index.json', 'utf8', function(err, rawJson) {
    'use strict';
    if (err) {
        throw err;
    }
    var json = JSON.parse(rawJson);
    console.log(json);
    for (var aProperty in json) {

        console.log(aProperty, typeof json[aProperty]);
    }
});
