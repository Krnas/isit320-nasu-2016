define([ 'runQuery' ], function (runQuery) {
    var nameController = function (query, data) {
        'use strict' ;
        var $scope = $( '#debug' );
        var docs = $( '#docs' );
        var displayData = JSON . stringify (data, null , 5 );
        if (query === '/databaseName' ) {
            $scope .html( displayData );
        } else {
            docs .html( 'allDatabases: ' + displayData );
        }
    };
    nameController. databaseName = function ($q) {
        'use strict' ;
        return runQuery( '/databaseName' , $q);
    };
    nameController. allDbs = function ($q) {
        'use strict' ;
        return runQuery( '/listDb' , $q);
    };
    return nameController;
});