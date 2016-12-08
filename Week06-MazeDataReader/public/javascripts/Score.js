 var score = (function() {
     'use strict';

     function score() {
         $.getJSON('//read?docName=npcObjects', function(data) {
             console.log(JSON.stringify(data.docs, null, 4));
         });
         var mainCharacter = {
             name: 'Robin',
             value: 15
         };

         return score;
     }
 });
