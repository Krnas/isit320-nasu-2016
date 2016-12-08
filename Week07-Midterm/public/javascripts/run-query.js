define(function(require) {
    'use strict';

    function runQuery(query, $q) {

        var controller = $q.getController();
        $.getJSON(query, function(json) {
            controller(query, json);
        }).fail(function(jqxhr, textStatus, error) {
            var response = {
                error: 'Unknown. Is program running?'
            };
            if (jqxhr.responseText) {
                response = JSON.parse(jqxhr.responseText);
                response.genericError = error;
                response.statusText = textStatus;
            }
            queryController({
                'requestFailed': response
            });
        });
    }

    return runQuery;
});
