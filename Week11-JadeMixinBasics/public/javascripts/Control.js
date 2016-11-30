$(document).ready(function() {
    'use strict';
   $('#helpButton').click(function () {
       console.log('Clicked on help');
       $.getJSON('/help', function (result) {
           JSON.stringify(result, null, 4);
       });
   });
    $('#aboutButton').click(function () {
        console.log('Clicked on about');
        $.getJSON('/about', function (result) {
            JSON.stringify(result, null, 4);
        });
    })
});