function views(router, nano, dbName) {
    'use strict';

    function runTemplateView(templateName, request, response) {
        var templater = require('../Library/Templater');
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(err,
            body) {
            if (!err) {
                console.log(body);

                var result = [];
                body.rows.forEach(function(doc) {
                    result.push(doc.value);
                    console.log(doc.value);
                });
                var html = templater.template.addNames(templateName, result);
                response.send(html);
            } else {
                console.log(err);
                response.send(500, err);
            }
        });
        return runQuery('/viewSessions?designDoc=game&view=elf-sessions', $q);
    }
    router.get('/viewSessions', function(request, response) {
        console.log('/viewSessions called', request.query, dbName);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
            if (!err) {
                console.log(body);
                //var data = body.rows[0].value.map(function(a) {
                //    return a;
                //});
                response.send({
                    'name': 'viewSessions',
                    docs: body
                });
            } else {
                console.log(err);
                response.status(err.statusCode).send(err);
            }
        });
    });
    /**
     * @memberOf CouchViews
     * @name View01 http://localhost:5984/couch_views/_design/states/_view/docBulk
     */
    router.get('/viewBulkTemplate', function(request, response) {
        console.log('viewDocBulk Called: ' + request.query);
        runTemplateView('Templates/Basic.html', request, response);
    });

    /**
     * @memberOf CouchViews
     */
    router.get('/viewStateCapitalTemplate', function(request, response) {
        console.log('viewStateCapital Called: ' + request.query);
        runTemplateView('Templates/StateCapital.html', request, response);
    });

    router.get('/viewBulk', function(request, response) {
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
            if (!err) {
                console.log(body);
                response.send(body);
            } else {
                console.log(err);
        response.status(err.statusCode).send(err);
            }
        });
    });

    router.get('/viewStateCapitalAngular', function(request, response) {
        console.log('viewStateCapitalAngular called.');
        var doc = request.query.designDoc;
        var view = request.query.view;
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(doc, view, function(err, body) {
            if (!err) {
                console.log(body);
                response.send(body);
            } else {
                console.log(err);                
        response.status(err.statusCode).send(err);
            }
        });
    });

    router.get('/viewOneDoc', function(request, response) {
		console.log('View one doc called');
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
            if (!err) {
                console.log(body);
                response.send(body);
            } else {
                console.log(err);
        response.status(err.statusCode).send(err);
            }
        });
    });

}

module.exports = views;
