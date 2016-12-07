define(['runQuery'], function(runQuery){
    function queryController() {
        'use strict';
        var $scope = $('#debug');
        var docs = $('#docs');
        docs.empty();
        if (result.ok) {
            $scope.result = "It worked";
            $scope.stateList = result.data;
        } else if (result.requestFailed) {
            $scope.result = JSON.stringify(result.requestFailed, null, 4);
        } else if (result.error) {
            $scope.result = result.error + ': ' + result.message;
        } else if (result.docs) {
            $scope.stateList = result.docs;
        } else if (result.rows) {
            $scope.stateList = result.rows;
        } else {
            $scope.result = result;
        }

        $scope.docs = JSON.stringify(result.docs, null, 4);
    }

    queryController.delete = function ($q) {
        'use strict';
        return runQuery('/deleteDb', $q);
    };

    queryController.create = function ($q) {
        'use strict';
        return runQuery('/createDb', $q);
    };

    queryController.insertNpcsBulk = function ($q) {
        'use strict';
        return runQuery('/insertBulk?fileName=Npcs.json', $q);
    };

    queryController.insertNpcsOneDoc = function ($q) {
        'use strict';
        return runQuery('/insertFile?fileName=Npcs.json&id=oneDoc', $q);
    };

    queryController.design = function ($q) {
        'use strict';
        return runQuery('/designDoc', $q);
    };

    queryController.readOne = function ($q) {
        'use strict';
        return runQuery('/read?docName=npcsDoc', $q);
    };

    queryController.viewBulk = function ($q) {
        'use strict';
        return runQuery('/viewNpcsBulk?designDoc=game&view=npcsBulk', $q);
    };

    queryController.viewOneDoc = function ($q) {
        'use strict';
        return runQuery('/viewNpcsOneDoc?designDoc=game&view=npcsOneDoc', $q);
    };

    return queryController;
});
