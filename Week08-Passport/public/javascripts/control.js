define(function() {
    'use strict';

    function Control() {
        console.log('Control constructor called');
        $('#info').click(info);
    }

    var info = function() {
        $.ajax({
            url: '/info'
        }).done(function(serverInfo) {
            $('#report').html(JSON.stringify(serverInfo));
        }).fail(function(err) {
            $('#debug').html(err);
        });
    };
    return Control;

    $('#status').click(status);
    function status() {
        $.getJSON('/status', function(data) {
            console.log(data);
            $('#report').html(JSON.stringify(data, null, 4));
        });
    }

});