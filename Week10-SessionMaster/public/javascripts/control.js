$(document).ready(function() {
    'use strict';

    $('#page01').click(function() {
        showPage('/page01');
    });
    $('#page02').click(function() {
        showPage('/page02');
    });
    $('#page03').click(function() {
        showPage('/page03');
    });

    $('#viewPage01').click(function() {
        viewPage('/views/page01');
    });
    $('#viewPage02').click(function() {
        viewPage('/views/page02');
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

});
