var geomety = new THREE.SphereGeometry(10, 40, 25);
var material = new THREE.MeshNormalMaterial({
wireFrame : wireFrame });
Npcs.prototype.npcList = function (scene, wireFrame, docs) {
    var that = this;
    var docNum = 0;
    $.getJSON('npcs000.json');
}
Npcs.prototype.npcCoordinates = function(x, z, scene) {
    var baseName = 'npc';

    function getName(baseName, x, z) {
        return baseName + '_' + x + '_' + z;
    }
    sphere.name = getName(baseName, x, z);
}