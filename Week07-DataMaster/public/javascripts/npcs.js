/*var geomety = new THREE.SphereGeometry(10, 40, 25);
var material = new THREE.MeshNormalMaterial({
    wireFrame : wireFrame });*/
Npcs.prototype.NpcsList = function (scene, wireFrame, docs) {
    var that = this;
    var docNum = 0;
    $.getJSON('npcs000.json');
}
Npcs.prototype.npcCoordinates = [];

var baseName = 'npc';

function getName(baseName, x, z) {
    return baseName + '_' + x + '_' + z;
}