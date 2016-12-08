$(document).ready(function() { 'use strict';
    $('#feetToMiles').click(function () {
        console.log('Click on feet to miles');
        var miles = $('#milesInput').val();
        var input = {miles: miles};
        $.getJSON('/feetToMiles', input, function (result) {
            var output = JSON.stringify(result, null, 4);
            console.log(output);
            $('#debug').html(output);
        })
    });
});