define(['utilities'], function (utilities) {
    'use strict';

var baseName = 'npc';
var size = 20;
var gridNpc;
var THREE;

function Npcs(initThree) {
    THREE = initThree;
}

function getName(baseName, x, z) {
    return baseName + '_' + x + '_' + z;
}

Npcs.prototype.createNpc = function(scene, wireFrame, x, z, xPos, zPos, doc) {
    var geometry = new THREE.SphereGeometry(10, 40, 25);
    var material = new THREE.MeshNormalMaterial({
        wireframe: wireFrame
    });

    var sphere = new THREE.Mesh(geometry, material);
    sphere.overdraw = true;
    sphere.name = getName(baseName, xPos, zPos);
    sphere.position.set(x, size / 2, z);
    sphere.doc = doc;
    scene.add(sphere);
    this.npcList.push(sphere);
    return sphere;
};
Npcs.prototype.readNpcGrid = function(scene, wireFrame, docs) {
    'use strict';
    var that = this;
    var docNum = 0;
    $.getJSON('npc000.json', function(grid) {
        gridNpc = grid;
        for (var i = 0; i < grid.length; i++) {
            //console.log(grid[i]);
            for (var j = 0; j < grid[i].length; j++) {
                if (grid[j][i] !== 0) {
                    var x = j * size;
                    var z = size * -i;
                    that.createNpc(scene, wireFrame, x, z, j, i, docs[docNum++]);
                    that.npcCoordinates.push([i, j]);
                }
            }
        }
    }).done(function() {
        utilities.showDebug('npc loaded second success');
    }).fail(function(jqxhr, textStatus, error) {
        utilities.showDebug('npc loaded error: ' + jqxhr.status + ' ' + textStatus + ' ' + error);
    }).always(function() {
        utilities.showDebug('npc loaded complete');
    });
};
});