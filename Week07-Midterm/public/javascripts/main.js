requirejs.config({
    baseUrl: '.',
    paths: {
        'jquery': 'components/jquery/dist/jquery',

        'Three': 'javascripts/three',
        'control': 'javascripts/control',
        'Collisions': 'javascripts/collisions',
        'Npcs': 'javascripts/npcs',
        'floor': 'javascripts/floors',
        'PointerLockControls': 'javascripts/pointer-lock-controls',
        'PointerLockSetup': 'javascripts/pointer-lock-setup',
        'DataReaders': 'javascripts/data-reader',
        'utilities': 'javascripts/utilities'

    },
    shim: {
        'Three': {
            exports: 'THREE'
        }
    }
});

requirejs(['jquery'], function($) {
    'use strict';
    requirejs(['Three', 'control'], function(THREE, Control) {
        //window.THREE = THREE;
        $(document).ready(function() {
            var control = new Control(THREE);
        });
    });
});
