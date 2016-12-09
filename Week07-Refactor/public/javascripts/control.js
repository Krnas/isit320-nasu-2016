/**
 * @name Control
 */
define(['nameController', 'queryController'], function(nameController, queryController) {
    function control($routeProvider) {
        'use strict';
        $routeProvider.when('/databaseName', {
            templateUrl: 'templates/DatabaseNames.html',
            controller: nameController,
            resolve: {
                databaseName: nameController.databaseName,
                allDbs: nameController.allDbs
            }
        }).when('/deleteDb', {
            templateUrl: 'templates/QueryView.html',
            controller: queryController,
            resolve: {
                result: queryController.delete
            }
        }).when('/createDb', {
            templateUrl: 'templates/QueryView.html',
            controller: queryController,
            resolve: {
                result: queryController.create
            }
        }).when('/insertNpcsBulk', {
            templateUrl: 'templates/InsertReport.html',
            controller: queryController,
            resolve: {
                result: queryController.insertNpcsBulk
            }
        }).when('/insertNpcsOneDoc', {
            templateUrl: 'templates/InsertReport.html',
            controller: queryController,
            resolve: {
                result: queryController.insertNpcsOneDoc
            }
        }).when('/insertDesignDoc', {
            templateUrl: 'templates/QueryView.html',
            controller: queryController,
            resolve: {
                result: queryController.design
            }
        }).when('/readOne', {
            templateUrl: 'templates/QueryView.html',
            controller: queryController,
            resolve: {
                result: queryController.readOne
            }
        }).when('/viewNpcsBulk', {
            templateUrl: 'templates/QueryView.html',
            controller: queryController,
            resolve: {
                result: queryController.viewBulk
            }
        }).when('/viewNpcsOneDoc', {
            templateUrl: 'templates/QueryView.html',
            controller: queryController,
            resolve: {
                result: queryController.viewOneDoc
            }
        }).otherwise({
            redirectTo: '/'
        });
        $('#designDoc').click(function() {
            showPage('/viewSessions?designDoc=elf-session&view=elf-session-store');
        });
        $('#sessionView').click(function() {
            showPage('/viewSessions?designDoc=elf-session&view=elf-sessions');

        });
        function viewSession() {

        }
        function showPage(pageRoute) {
            $.getJSON(pageRoute, function(data) {
                var info = JSON.stringify(data, null, 4);
                console.log(info);
                $('#display').html(JSON.stringify(data, null, 4))
                    .fail(function(jq, status, error) {
                        $('#displayArea').html('error: ' + jq.responseText);
                        console.log('error: ', status);
                        console.log('error: ', error);
                    });

            });
        }

        function viewPage(pageRoute) {
            $.getJSON(pageRoute, function(data) {
                var info = JSON.stringify(data, null, 4);
                console.log(info);
                $('#display').html(JSON.stringify(data, null, 4))
                    .fail(function(jq, status, error) {
                        $('#displayArea').html('error: ' + jq.responseText);
                        console.log('error: ', status);
                        console.log('error: ', error);
                    });
            });
        }
    };

return findRoutes;

});