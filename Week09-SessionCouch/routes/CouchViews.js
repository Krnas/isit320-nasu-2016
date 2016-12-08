function views(router, nano, dbName) {
    'use strict';
<<<<<<< HEAD

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
    router.get('/viewNpcsBulk', function(request, response) {
        console.log('/viewNpcsBulk called', request.query);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function(err, body) {
=======
    router.get('/viewNpcsBulk', function (request, response) {
        console.log('/viewNpcsBulk called', request.query);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc, request.query.view, function (err, body) {
>>>>>>> 15079e2e587a290bbb722e8a35bef7a7acdc666e
            if (!err) {
                console.log(body);
                var result = {
                    docs: []
                };
<<<<<<< HEAD
                body.rows.forEach(function(doc) {
=======
                body.rows.forEach(function (doc) {
>>>>>>> 15079e2e587a290bbb722e8a35bef7a7acdc666e
                    result.docs.push(doc.value);
                });
                response.send(result);
            } else {
                console.log(err);
                response.send(500, err);
            }
        });
    });
<<<<<<< HEAD
    router.get('/viewNpcsOneDoc', function(request, response) {
        console.log('/viewNpcsOneDoc called', request.query);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc,
            request.query.view,
            function(err, body) {
                if (!err) {
                    var data = body.rows[0].value.map(function(a) {
=======
    router.get('/viewNpcsOneDoc', function (request, response) {
        console.log('/viewNpcsOneDoc called', request.query);
        var nanoDb = nano.db.use(dbName);
        nanoDb.view(request.query.designDoc,
            request.query.view, function (err, body) {
                if (!err) {
                    var data = body.rows[0].value.map(function (a) {
>>>>>>> 15079e2e587a290bbb722e8a35bef7a7acdc666e
                        return a;
                    });
                    response.send({
                        'name': 'viewNpcsOneDoc',
                        docs: data
                    });
                } else {
                    console.log(err);
                    response.status(err.statusCode).send(err);
                }
            });
    });
}
<<<<<<< HEAD
module.exports = views;
=======
module.exports = views;
>>>>>>> 15079e2e587a290bbb722e8a35bef7a7acdc666e
