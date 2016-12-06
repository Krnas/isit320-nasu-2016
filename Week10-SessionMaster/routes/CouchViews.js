function views(router, nano, dbName) {
    'use strict';
    router.get('/viewSessions', function(request, response) {
        console.log('/viewSessions called', request.query);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
            if (!err) {
                console.log(body);

                response.send ({
                    'name': 'viewSession',
                    docs: body
                });
            } else {
                console.log(err);
                response.status(err.statusCode).send(err);
            }
        });
    });
    router.get('/elfSessions', function(request, response) {
        console.log('/elfSessions called', request.query);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
            if (!err) {
                console.log(body);
                var result = {
                    docs: []
                };
                body.rows.forEach(function(doc) {
                    result.docs.push(doc.value);
                });
                response.send(result);
            } else {
                console.log(err);
                response.send(500, err);
            }
        });
    });
    router.get('/elfSessionStore', function(request, response) {
        console.log('/elfSessionStore called', request.query);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc,
            request.query.view,
            function(err, body) {
                if (!err) {
                    var data = body.rows[0].value.map(function(a) {
                        return a;
                    });
                    response.send({
                        'name': 'elfSessionStore',
                        docs: data
                    });
                } else {
                    console.log(err);
                    response.status(err.statusCode).send(err);
                }
            });
    });
}
module.exports = views;
