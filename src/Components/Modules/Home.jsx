import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
 import Stats from 'three/examples/jsm/libs/stats.module';
 import '../css/Home.css';
 import { GUI } from 'dat.gui'
 import Home2 from './Home2';
 import Navbar from './navbar';
function Home() {
    useEffect(()=>{
        const stats = new Stats();
        const nbObjects = 1000;
        var conf, scene, camera, cameraCtrl, light, renderer;
        var whw, whh;

        var objects;
        var cubeGeometry, cubeMaterial,circleGeometry;
        var destination = new THREE.Vector3();

        var mouse = new THREE.Vector2();
        var mouseOver = false;
        var mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        var mousePosition = new THREE.Vector3();
        var raycaster = new THREE.Raycaster();

        function init() {
        conf = {
            move: true,
            followMouse: true,
            attraction: 0.01,
            velocityLimit: 2.0,
            lightColor: 0x1b6cff,
            lightIntensity: 1,
            shuffle: shuffle
        };

        scene = new THREE.Scene();
        const canvas = document.getElementById('first');
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraCtrl = new OrbitControls(camera, renderer.domElement);

        


        

        initScene();

        
        // document.body.appendChild(stats.dom);
        
        function animate() {
            requestAnimationFrame(animate);
    
            cameraCtrl.update();
    
            light.color.set(conf.lightColor);
            light.intensity = conf.lightIntensity;
    
            if (conf.move) {
                for (var i = 0; i < objects.length; i++) {
                objects[i].move();
                }
            }
    
            renderer.render(scene, camera);
    
            stats.update();
            };

        // const gui = new GUI();
        // GUI.toggleHide();
        // gui.add(conf, 'move');
        // gui.add(conf, 'followMouse');
        // gui.add(conf, 'attraction', 0.01, 0.01);
        // gui.add(conf, 'velocityLimit', 0.2, 2);
        // gui.addColor(conf, 'lightColor');
        // gui.add(conf, 'lightIntensity', 0.1, 2);
        // gui.add(conf, 'shuffle');
       
        // gui.close();

        onWindowResize();
        window.addEventListener('resize', onWindowResize, false);

        document.addEventListener('mousemove', onMouseMove, false);
        // document.addEventListener('mouseover', function () { mouseOver = true; }, false);
        document.addEventListener('mouseout', onMouseOut, false);

        animate();
        };

        function initScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        scene.add(new THREE.AmbientLight(0x808080));

        var plight = new THREE.PointLight(0xffffff, 0.5, 1000);
        plight.position.set(0, 0, 0);
        scene.add(plight);

        light = new THREE.PointLight(conf.lightColor, conf.lightIntensity, 500);
        light.position.set(0, 0, 0);
        scene.add(light);

        camera.position.z = 150;

        cubeGeometry = new THREE.BoxGeometry(12, 12, 12);
        cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.9 });
        // circleGeometry=new THREE.CircleGeometry(5,35);


        objects = [];
        for (var i = 0; i < nbObjects; i++) {
            var b = new Truc();
            objects.push(b);
            scene.add(b.o3d);
        }

        shuffle();
        }


        function shuffle() {
        for (var i = 0; i < objects.length; i++) {
            objects[i].shuffle();
        }
        }

        function Truc() {
        this.velocity = new THREE.Vector3(rnd(1, true), rnd(1, true), rnd(1, true));
        this.destination = destination;

        this.init();
        }

        Truc.prototype.init = function (bconf) {
        this.o3d = new THREE.Object3D();
        this.o3d.add(new THREE.Mesh(cubeGeometry, cubeMaterial));
        // this.o3d.add(new THREE.Mesh(circleGeometry, cubeMaterial));
        };

        Truc.prototype.move = function () {
        var destination;
        if (mouseOver && conf.followMouse) {
            destination = mousePosition;
        } else {
            destination = this.destination;
        }

        var dv = destination.clone().sub(this.o3d.position).normalize();
        this.velocity.x += conf.attraction * dv.x;
        this.velocity.y += conf.attraction * dv.y;
        this.velocity.z += conf.attraction * dv.z;
        this.limitVelocity();

        this.o3d.lookAt(this.o3d.position.clone().add(this.velocity));
        this.o3d.position.add(this.velocity);
        };

        Truc.prototype.limitVelocity = function (y) {
        this.velocity.x = limit(this.velocity.x, -conf.velocityLimit, conf.velocityLimit);
        this.velocity.y = limit(this.velocity.y, -conf.velocityLimit, conf.velocityLimit);
        this.velocity.z = limit(this.velocity.z, -conf.velocityLimit, conf.velocityLimit);
        };

        Truc.prototype.shuffle = function () {
        this.velocity = new THREE.Vector3(rnd(1, true), rnd(1, true), rnd(1, true));
        var p = new THREE.Vector3(rnd(1, true), rnd(1, true), rnd(1, true)).normalize().multiplyScalar(100);
        this.o3d.position.set(p.x, p.y, p.z);
        var scale = rnd(0.4) + 0.1;
        this.o3d.scale.set(scale, scale, scale);
        };

        function limit(number, min, max) {
        return Math.min(Math.max(number, min), max);
        }

        function rnd(max, negative) {
        return negative ? Math.random() * 2 * max - max : Math.random() * max;
        }

        function onWindowResize() {
        whw = window.innerWidth / 2;
        whh = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onMouseMove(event) {
        var v = new THREE.Vector3();
        camera.getWorldDirection(v);
        v.normalize();
        mousePlane.normal = v;

        mouseOver = true;
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(mousePlane, mousePosition);

        light.position.set(mousePosition.x, mousePosition.y, mousePosition.z);
        }

        function onMouseOut(event) {
        mouseOver = false;
        light.position.set(destination.x, destination.y, destination.z);
        }

        init();
    })
  return (
    <div id='home'>
        {/* <h1 id='head' style={{"text-align":"center"}}> mayank</h1> */}
        <Navbar/>
        <Home2/>
        <canvas id='first'/>
    </div>
  )
}
export default Home;
