define(['floor', 'PointerLockControls', 'PointerLockSetup', 'Collisions', 'DataReaders'], function(Floor, PointerLockControls, PointerLockSetup, Collisions, DataReaders) {
    'use strict';

    var camera = null;
    var collisions;
    var controls;
    var cubes = [];
    var npcs = [];
    var raycaster = null;
    var renderer = null;
    var THREE = null;
    var scene = null;
    var size = 20;

    var keyMove = {
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false
    };

    var cameraPosition = {
        x: 2,
        y: 0,
        z: 2
    };

    function Control(initThree) {
        THREE = initThree;
        init();
        animate();

    }

    function init() {

        var screenWidth = window.innerWidth / window.innerHeight;
        camera = new THREE.PerspectiveCamera(75, screenWidth, 1, 1000);

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0xffffff, 0, 750);

        addCubes(scene, camera, false);

        doPointerLock();

        addLights();

        var floor = new Floor(THREE);
        floor.drawFloor(scene);
        collisions = new Collisions(THREE);

        raycaster = new THREE.Raycaster(new THREE.Vector3(),
            new THREE.Vector3(0, -1, 0), 0, 10);

        renderer = new THREE.WebGLRenderer({
            antialias: true
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);
    }

    function drawText(position) {
        $('#cameraX').html(position.x);
        $('#cameraZ').html(position.z);
        $('#mazeX').html(Math.round(position.x / size));
        $('#mazeZ').html(Math.round(position.z / size));
        $('#npcs').empty();
        for (var i = 0; i < npcs.length; i++) {
            $('#npcs').append('<li>' + npcs[i] + '</li>');
        }
    }

    function animate() {

        requestAnimationFrame(animate);

        var xAxis = new THREE.Vector3(1, 0, 0);

        controls.isOnObject(false);

        var controlObject = controls.getObject();
        var position = controlObject.position;

        // drawText(controlObject, position);
        drawText(position);
        collisions.collisionDetection(controls, cubes, raycaster);
        var result = collisions . npcDetection ( mainCharacter . x ,
            mainCharacter . z , npcs . npcList );
        if ( result ) {
            npcs . removeNpc ( mainCharacter . x , mainCharacter . z , scene );
        }

        // Move the camera
        controls.update();

        renderer.render(scene, camera);
    }

    function doPointerLock() {
        controls = new PointerLockControls(camera, THREE);
        var yawObject = controls.getObject();
        scene.add(yawObject);

        yawObject.position.x = size;
        yawObject.position.z = size;

        var ps = new PointerLockSetup(controls);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function addSphere(scene, camera, wireFrame, x, z) {
        var geometry = new THREE.SphereGeometry(10, 40, 25);
        var material = new THREE.MeshNormalMaterial({
            wireframe: wireFrame
        });

        var sphere = new THREE.Mesh(geometry, material);
        sphere.overdraw = true;
        sphere.position.set(x, size / 2, z);
        scene.add(sphere);

        return sphere;
    }

    function addCube(camera, wireFrame, x, z, floorTexture) {
        var geometry = new THREE.BoxGeometry(size, size, size);

        //var loader = new THREE.TextureLoader();
        //var floorTexture = loader.load('images/crate.jpg');
        var material = new THREE.MeshLambertMaterial({
            map: floorTexture
        });
        var cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, size / 2, z);
        scene.add(cube);

        cubes.push(cube);

        return cube;
    }

    function addCubes(scene, camera, wireFrame, floorTexture) {
        $.getJSON('grid000.json', function (grid) {
            for (var i = 0; i < grid.length; i++) {
                for (var j = 0; j < grid[i].length; j++) {
                    if (grid[j][i] == 1) {
                        addCube(scene, camera, wireFrame,
                            floorTexture, j * size, -( i * size ));
                    }
                }
            }
        }).done(function () {
            utilities.showDebug('Grid loaded second success');
        }).fail(function (jqxhr, textStatus, error) {
            utilities.showDebug('Grid loaded error: ' +
                jqxhr.status + ' ' + textStatus + ' ' + error);
        }).always(function () {
            utilities.showDebug('Grid loaded complete');
        });

        //addSphere(scene, camera, wireFrame, size, size * -6)
        $.getJSON('npcs000.json', function (grid) {
            for (var i = 0; i < grid.length; i++) {
                console.log(grid[i]);
                for (var j = 0; j < grid.length; j++) {
                    if (grid[j][i] !== 0) {
                        npcs.push([j, i]);
                        addSphere(scene, camera, wireFrame, -i * size, j * size);
                    }
                }
            }
        });

        var dataReaders = new DataReaders();
        dataReaders.readDatabase(function (docs) {
            npcs.readNpcGrid(scene, wireFrame, docs);
        });

        readDataBase();

        function readDataBase() {
            $.getJSON('/read?docName=npcsDoc', function (data) {
                console.log(JSON.stringify(data.docs, null, 4));
            });
        }

        /*define ( function () {
         function FindRoutes($routeProvider) {
         }
         return FindRoutes;
         });*/
    }
    function addLights() {
        var light = new THREE.DirectionalLight(0xffffff, 1.5);
        light.position.set(1, 1, 1);
        scene.add(light);
        light = new THREE.DirectionalLight(0xffffff, 0.75);
        light.position.set(-1, -0.5, -1);
        scene.add(light);
    }

    return Control;
});
