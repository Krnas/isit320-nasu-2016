define(['utilities'], function (utilities) {
    'use strict';

    return {
        showDebug: function (value) {
            console.log(value);
        },
        getPos: function (number, size) {
            return Math.abs(Math.round(number / size));
        }
    };
});
