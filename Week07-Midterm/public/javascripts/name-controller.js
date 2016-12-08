define(['runQuery'], function(runQuery) {
    'use strict';
    var nameController = function(query, data) {

        var $scope = $('#debug');
        var docs = $('#docs');
        var displayData = JSON.stringify(data, null, 5);
        if (query === '/databaseName') {
            $scope.html(displayData);
        } else {
            docs.html('allDatabases: ' + displayData);
        }
    };
    nameController.databaseName = function($q) {

        return runQuery('/databaseName', $q);
    };
    nameController.allDbs = function($q) {

        return runQuery('/listDb', $q);
    };
    return nameController;
});
