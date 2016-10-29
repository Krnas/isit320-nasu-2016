/**
 * @author Charlie Calvert
 */

require.config({
    baseUrl: '.',
    paths: {
        'jquery': 'components/jquery/dist/jquery.min',
        'ClickEvents': 'javascripts/ClickEvents'
    }
});

require(['jquery', 'ClickEvents'], function(jquery, ClickEvents) {
    'use strict';

    console.log('Main called');
    $(document).ready(function() {
        var clickEvents = new ClickEvents();
    });
});
