function designDocs(router, nano, dbName) {
<<<<<<< HEAD
    'use strict';
    var elfSessions = function(doc) {
        if (doc.collectionName=== 'sessions') {
            emit(doc._id, doc);
        }
    };
    var npcsBulk = function(doc) {
        if (doc._id !== 'npcsDoc') {
            emit(doc._id, doc);
        }
    };
    var npcsOneDoc = function(doc) {
        if (doc._id === 'npcsDoc') {
            var data = [];
            doc.docs.forEach(function(npc) {
                data.push({
                    'npc_name': npc.npc_name,
                    'description': npc.description,
                    'value': npc.value
                });
            });
            emit(doc._id, data);
        }
    };

    function createDesignDocument(designDocument, designName,
        response) {
        var nanoDb = nano.db.use(dbName);
        nanoDb.insert(designDocument, designName,
            function(error, body) {
                if (!error) {
                    var result = {
                        ok: true,
                        data: body
                    };
                    console.log(result);
                    response.send(result);
                } else {
                    console.log('error: ' + error);
                    response.send(error);
                }
            });
    }
    router.get('/designDoc', function(request, response) {
        console.log('Design Doc Called');
        var designName = '_design/elf-session';
        var designDocument = {
            'views': {
                'elf-sessions': {
=======
    'use strict' ;
    var elfSessions = function(doc) {
        if (doc.type === 'connect-session') {
            emit(doc._id, doc);
        }
    };
    var npcsBulk = function (doc) {
        if (doc._id !== 'npcsDoc' ) {
            emit(doc._id, doc);
        }
    };
    var npcsOneDoc = function (doc) {
        if (doc._id === 'npcsDoc' ) {
            var data = [];
            doc. docs . forEach ( function (npc) {
                data . push ({'npc_name' : npc. npc_name ,
                    'description' : npc. description ,
                    'value' : npc. value
                });
            });
            emit(doc._id, data );
        }
    };
    function createDesignDocument(designDocument, designName,
                                  response) {
        var nanoDb = nano.db.use(dbName);
        nanoDb .insert(designDocument, designName,
            function (error, body) {
                if (!error) {
                    var result = {
                        ok : true ,
                        data : body
                    };
                    console . log ( result );
                    response. send ( result );
                } else {
                    console . log ( 'error: ' + error);
                    response. send (error);
                }
            });
    }
    router.get( '/designDoc' , function (request, response) {
        console . log ( 'Design Doc Called' );
        var designName = '_design/game' ;
        var designDocument = {
            'views' : {
                'elfSession': {
>>>>>>> 15079e2e587a290bbb722e8a35bef7a7acdc666e
                    'map': elfSessions
                }
            }
        };
<<<<<<< HEAD
        createDesignDocument(designDocument, designName, response);
    });
}
module.exports = designDocs;
=======
        createDesignDocument( designDocument , designName , response);});
}
module. exports = designDocs;
>>>>>>> 15079e2e587a290bbb722e8a35bef7a7acdc666e
