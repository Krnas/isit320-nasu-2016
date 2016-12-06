
requirejs.config({
    baseUrl: '.',
    paths: {
        'jquery': '/components/jquery/dist/jquery',
        'bootstrap': '/components/bootstrap/dist/js/bootstrap.min',
        'control': '/javascripts/control'
    }
});

requirejs(['jquery'], function($) {
    'use strict';

    requirejs(['control', 'bootstrap'], function(Control) {
        $(document).ready(function() {
            new Control();
        });
    });
});
