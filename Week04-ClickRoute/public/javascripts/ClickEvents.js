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

                var route1 = '/Item01';
                $.getJSON(route1, function (result) {
                    console.log(result);
                    $('#display').html(JSON.stringify(result));
                })
                var route2 = '/Item02';
                $.getJSON(route2, function (result) {
                    console.log(result);
                    $('#display').html(JSON.stringify(result));
                })
                var route3 = '/Item03' ;
                $.getJSON(route3, function (result) {
                    console.log(result);
                    $('#display').html(JSON.stringify(result));
                })

            };

            return ClickEvents;

        }());

    return elf.ClickEvents;

});
