define(function() {
    'use strict';
    return {
        showDebug: function(value) {
            console.log(value);
        },
        getPos: function(number, size) {
            return Math.abs(Math.round(number / size));
        }
    };
});
define(['utilities'], function(utilities) {
    'use strict';

    function DataReaders() {}
    DataReaders.prototype.readDatabase = function(callback) {
        var query = '/read?docName=npcsDoc';
        $.getJSON(query, function(json) {
            callback(json.docs);
            console.log('Success: ' + JSON.stringify(json, null, 4));
        }).done(function() {
            utilities.showDebug('Database loaded second success');
        }).fail(function(jqxhr, textStatus, error) {
            var response = JSON.parse(jqxhr.responseText);
            response.genericError = error;
            response.statusText = textStatus;
            console.log({
                'databaseLoadFailed': response
            });
        }).always(function() {
            utilities.showDebug('Database loaded complete');
        });
    };
    return DataReaders;
});
