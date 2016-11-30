$(document).ready(function() {
    'use strict';
   $('#helpButton').click(function () {
       console.log('Clicked on help');
       $.getJSON('/help', function (result) {
           JSON.stringify(result, null, 4);
       });
   });

});