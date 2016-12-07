/**
 * @name Control
 */
define(['Route', 'nameController', 'queryController'], function (Route, nameController, queryController) {

    var findRoutes = (function ($routeProvider) {
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
    });

    return findRoutes;

});