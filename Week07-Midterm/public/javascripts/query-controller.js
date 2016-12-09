define(['runQuery'], function(runQuery) {
    'use strict';
    var queryController = function(query, result) {

        var debug = $('#debug');
        var docs = $('#docs');

        docs.empty();
        if (result.ok) {
            var text = 'It worked';
            if (result.data) {
                text += '\n' + JSON.stringify(result.data, null, 4);
            }
            debug.html(text);
        } else if (result.requestFailed) {
            debug.html(JSON.stringify(result.requestFailed, null, 4));
        } else if (result.error) {
            debug.html(result.error + ': ' + result.message);
        } else {
            debug.html(result);
        }
        docs.html(JSON.stringify(result.docs, null, 4));
    };

    queryController.delete = function($q) {

        return runQuery('/deleteDb', $q);
    };

    queryController.create = function($q) {

        return runQuery('/createDb', $q);
    };

    queryController.insertNpcsBulk = function($q) {

        return runQuery('/insertBulk?fileName=Npcs.json', $q);
    };
    queryController.insertNpcsOneDoc = function($q) {

        return runQuery('/insertFile?fileName=Npcs.json&id=oneDoc',
            $q);
    };

    queryController.design = function($q) {

        return runQuery('/designDoc', $q);
    };

    queryController.viewBulk = function($q) {

        return runQuery('/viewBulk?designDoc=states&view=docBulk', $q);
    };

    return queryController;

});
