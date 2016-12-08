define(['runQuery'], function(runQuery) {
    var queryController = function(query, result) {
        'use strict';
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
        'use strict';
        return runQuery('/deleteDb', $q);
    };

    queryController.create = function($q) {
        'use strict';
        return runQuery('/createDb', $q);
    };

    queryController.insertNpcsBulk = function($q) {
        'use strict';
        return runQuery('/insertBulk?fileName=Npcs.json', $q);
    };
    queryController.insertNpcsOneDoc = function($q) {
        'use strict';
        return runQuery('/insertFile?fileName=Npcs.json&id=oneDoc',
            $q);
    };

    queryController.design = function($q) {
        'use strict';
        return runQuery('/designDoc', $q);
    };

    queryController.viewBulk = function($q) {
        'use strict';
        return runQuery('/viewBulk?designDoc=states&view=docBulk', $q);
    };

    var nameController = myModule.controller('NameController', function($scope, databaseName, allDbs) {
        'use strict';
        $scope.databaseName = databaseName;
        $scope.allDbs = allDbs;
    });

    nameController.databaseName = function($q) {
        'use strict';
        return runQuery('/databaseName', $q);
    };

    nameController.allDbs = function($q) {
        'use strict';
        return runQuery('/listDb', $q);
    };
    return queryController;

});
