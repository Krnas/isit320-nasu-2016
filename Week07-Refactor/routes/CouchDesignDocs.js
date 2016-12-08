function designDocs(router, nano, dbName) {
    'use strict';

    var firstAndLast = function(doc) {
        if (doc.firstName && doc.lastName) {
            var name = doc.firstName + ' ' + doc.lastName;
            emit(doc._id, name);
        }
    };

    var lastOnly = function(doc) {

        if (doc.firstName && doc.lastName) {
            var name = doc.lastName;
            emit(doc._id, name);
        }
    };

    var docIdDoc = function(doc) {
        emit(doc._id, doc);
    };

    var npcsBulk = function(doc) {
        emit(doc._id, doc.name);
    };

    var npcsOneDoc = function(doc) {
        if (doc._id === 'npcObjects') {
            var data = [];
            doc.docs.forEach(function(npcs) {
                data.push({
                    'npc_id': doc.npc_id,
                    'npc_name': doc.npc_name,
                    'question': doc.question,
                    'answer': doc.answer
                });
            });
            emit(doc.docs[0].abbreviation, data);
        }
        nanoDb.insert(npcs, docName, function(err, body) {
            if (!err) {
                console.log(body);
            } else {
                console.log(err);
            }
        });
    };
    var elfSessions = function(doc) {
        if (doc.collectionName === 'sessions') {
            emit(doc._id, doc);
        }
    };

    function createDesignDocument(designDocument, designName, response) {
        var nanoDb = nano.db.use(dbName);
        nanoDb.insert(designDocument, designName, function(error, body) {
            if (!error) {
                console.log(body);
                response.send(body);
            } else {
                console.log('error: ' + error);
                response.send({
                    'Result': 'The document might already exist. ' + error
                });
            }
        });
    }

    router.get('/designDoc', function(request, response) {
        console.log('Design Doc Called');

        var designName = '_design/game';
        var designDocument = {
            'views': {
                'npcsBulk': {
                    'map': npcsBulk
                },
                'npcsOneDoc': {
                    'map': npcsOneDoc
                },
                'elf-sessions': {
                    'map': elfSessions
                }
            }
        };

        createDesignDocument(designDocument, designName, response);
    });

}

module.exports = designDocs;
