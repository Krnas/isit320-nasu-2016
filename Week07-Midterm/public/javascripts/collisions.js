define(function() {
    'use strict';
    var THREE;

    function Collisions(threeInit) {
        THREE = threeInit;
    }

    Collisions.prototype.collisionDetection = function(controls, cubes) {

        function bounceBack(position, ray) {
            position.x -= ray.bounceDistance.x;
            position.y -= ray.bounceDistance.y;
            position.z -= ray.bounceDistance.z;
        }

        var rays = [
            //   Time    Degrees      words
            new THREE.Vector3(0, 0, 1), // 0 12:00,   0 degrees,  deep
            new THREE.Vector3(1, 0, 1), // 1  1:30,  45 degrees,  right deep
            new THREE.Vector3(1, 0, 0), // 2  3:00,  90 degress,  right
            new THREE.Vector3(1, 0, -1), // 3  4:30, 135 degrees,  right near
            new THREE.Vector3(0, 0, -1), // 4  6:00  180 degress,  near
            new THREE.Vector3(-1, 0, -1), // 5  7:30  225 degrees,  left near
            new THREE.Vector3(-1, 0, 0), // 6  9:00  270 degrees,  left
            new THREE.Vector3(-1, 0, 1) // 7 11:30  315 degrees,  left deep
        ];

        var position = controls.getObject().position;
        var rayHits = [];
        for (var index = 0; index < rays.length; index += 1) {

            // Set bounce distance for each vector
            var bounceSize = 0.01;
            rays[index].bounceDistance = {
                x: rays[index].x * bounceSize,
                y: rays[index].y * bounceSize,
                z: rays[index].z * bounceSize
            };

            raycaster.set(position, rays[index]);

            var intersections = raycaster.intersectObjects(cubes);

            if (intersections.length > 0 && intersections[0].distance <= 3) {
                controls.isOnObject(true);
                bounceBack(position, rays[index]);
            }
        }

        return false;
    };
    var foundSpot = {
        x : - 1 ,
        z : - 1
    };
    Collisions. prototype . npcDetection = function (x, z, npcList) {
        function getCoords(name) {
            var result = name. split ( '_' );
            return {
                x : parseInt ( result [ 1 ]),z : parseInt ( result [ 2 ])
            };
        }
// Keep a list of your NPCs.
// Create a method that takes the current
// position of the camera in grid coordinates
// Iterate over the list and see if an NPC is at
// the same coordinates as the camera/mainCharacter.
// If there is a collision, tell the user about it.
        for ( var i = 0 ; i < npcList. length ; i ++) {
            var npc = npcList[ i ];
            var coordinates = getCoords( npc . name );
            if ( coordinates . x === x && coordinates . z === z) {
                $( '#npcDescription' ).html( npc . doc . description );
                foundSpot . x = x;
                foundSpot . z = z;
                return true ;
            }
        }
// Check if we moved past the square where we
// found the NPC.
        if ( foundSpot . x !== x || foundSpot . z !== z) {
            $( '#npcDescription' ).html( ' None' );
        }
        return false ;
    };
    return Collisions;
});
