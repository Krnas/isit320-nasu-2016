$(document).ready(function () {
    'use strict';
    $('#aboutButton').click(function () {
        console.log('Clicked on about');
        $.getJSON('/about', function (result) {
            JSON.stringify(result, null, 4);
        });
    });
});