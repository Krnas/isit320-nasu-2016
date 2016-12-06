define(function() {
    'use strict';
    function DataReaders() {}
    DataReaders.prototype.readDatabase=function (callback) {
        $.getJSON('/read?docName=npcObjects', function (data) {
            callback(data.docs);
            console.log(JSON.stringify(data, docs, null, 4));
        });
    }
    return DataReaders;
});