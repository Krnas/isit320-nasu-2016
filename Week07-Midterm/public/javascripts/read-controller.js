define([ 'runQuery' ], function (runQuery) {
    'use strict';
    var gameDocs ;
    var index = 0 ;
    function init() {
        $( '#forward' ). click ( function () {
            if ( index < gameDocs . length - 1 ) {
                index ++;
            }
            displayGameCode( gameDocs [ index ]);
        });
        $( '#backward' ). click ( function () {
            if ( index > 0 ) {
                index --;
            }
            displayGameCode( gameDocs [ index ]);
        });
    }
    var displayGameCode = function (gameDoc) {
        $( '#npcId' ).val(gameDoc.npc_id);
        $( '#npcName' ).val(gameDoc. npc_name );
        $( '#npcDescription' ).val(gameDoc. description );
        $( '#npcQuestion' ).val(gameDoc.question);
    };
    var readController = function (query, result) {
        'use strict' ;
        gameDocs = result. docs ;
        var docElement = $( '#docs' );
        docElement . empty ();
        displayGameCode( gameDocs [ index ]);
        docElement .html( JSON . stringify ( gameDocs , null , 4 ));
    };
    readController. readOne = function ($q) {
        'use strict' ;
        return runQuery( '/read?docName=npcsDoc' , $q);
    };
    init();
    return readController;
});