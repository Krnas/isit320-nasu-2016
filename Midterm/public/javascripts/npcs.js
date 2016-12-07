var geomety = new THREE.SphereGeometry(10, 40, 25);
var material = new THREE.MeshNormalMaterial({
wireFrame : wireFrame });
Npcs.prototype.readNpcGrid = function (scene, wireFrame, docs) {
    var that = this;
    var docNum = 0;
    $.getJSON('npcs000.json');
}
Npcs.prototype.removeNPC = function(x, z, scene) {
    gridNpc[x][z]= 0;
    var objectName = getName(baseName, x, z);
    var selectedObjets
}