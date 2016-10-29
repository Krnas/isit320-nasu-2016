define(["jquery"], function(jquery) {'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = ( function() {
            var listItem = $(".listItem");
            var intro = $("#intro");

            function ClickEvents() {
                $(intro).html("ClickEvents is loaded. Click the three items seen below.");
                $(intro).addClass('blue');
                $(listItem).click(listClick);                
            }

            var listClick = function(event) {
                var clickText = event.target.innerHTML;
                var prompt = "You clicked: ";
                $(intro).html(prompt + clickText);

                   var theRoute = '/Item01';
                $.getJSON(theRoute, function (result) {
                    $('#message').html(JSON.stringify(sum));
                   });
                
            };

            return ClickEvents;

        }());

    return elf.ClickEvents;

});
