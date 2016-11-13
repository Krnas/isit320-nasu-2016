var Control = (function() {
    'use strict';

    function Control() {

        console.log('Control constructor called');
        $('#info').click(info);
    }

    var info = function() {
        $.getJSON('/info', function(result) {
            $('#Username').html(JSON.stringify(result));
            $('#name').html(JSON.stringify(result));
            $('#ID').html(JSON.stringify(result));
        });
        // WRITE AN AJAX OR GET JSON METHOD THAT CALLS THE /info ROUTE AND DISPLAYS THE RESULT
        // THIS SHOULD INCLUDE THE USER INFORMATION SHOWN BELOW IN MY GOOGLE ACCOUNT SCREENSHOT
    };

    return Control;

}());

$(document).ready(function() {
    'use strict';
    var control = new Control();
});
