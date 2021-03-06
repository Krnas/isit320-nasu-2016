requirejs.config({
    baseUrl: '.',
    paths: {
        'jquery': 'components/jquery/dist/jquery',

        'Three': 'javascripts/three',
        'control': 'javascripts/control',
        'floors': 'javascripts/floors'

    },
    shim: {
        'Three': {
            exports: 'THREE'
        }
    }
});

requirejs(['jquery'], function($) {
    'use strict';
    requirejs(['Three', 'control', 'floors'], function(THREE, Control, floors) {
        $(document).ready(function() {
            var control = new Control(THREE);
        });
    });
});
