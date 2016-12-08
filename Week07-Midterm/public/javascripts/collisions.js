define(function() {
    'use strict';
    var THREE;

    function Collisions(threeInit) {
        THREE = threeInit;
    }

    Collisions.prototype.collisionDetection = function(controls, cubes, raycaster) {

        function bounceBack(position, ray) {
            position.x -= ray.bounceDistance.x;
            position.y -= ray.bounceDistance.y;
            position.z -= ray.bounceDistance.z;
        }

        var rays = [

            new THREE.Vector3(0, 0, 1),
            new THREE.Vector3(1, 0, 1),
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(1, 0, -1),
            new THREE.Vector3(0, 0, -1),
            new THREE.Vector3(-1, 0, -1),
            new THREE.Vector3(-1, 0, 0),
            new THREE.Vector3(-1, 0, 1)
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
        x: -1,
        z: -1
    };
    Collisions.prototype.npcDetection = function(x, z, npcList) {
        function getCoords(name) {
            var result = name.split('_');
            return {
                x: parseInt(result[1]),
                z: parseInt(result[2])
            };
        }

        for (var i = 0; i < npcList.length; i++) {
            var npc = npcList[i];
            var coordinates = getCoords(npc.name);
            if (coordinates.x === x && coordinates.z === z) {
                $('#npcDescription').html(npc.doc.description);
                foundSpot.x = x;
                foundSpot.z = z;
                return true;
            }
        }

        if (foundSpot.x !== x || foundSpot.z !== z) {
            $('#npcDescription').html(' None');
        }
        return false;
    };
    return Collisions;
});
