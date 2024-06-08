<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
  
  let canvas;
  let width = 300;
  let height = 300;

  onMount(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(width, height);
    renderer.setClearColor(0xbbddff);
    //document.body.appendChild(renderer.domElement);
    var controls = new OrbitControls(camera, renderer.domElement);
    var ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);
    var loader = new FBXLoader();
    loader.load(
      'car.fbx',
      function (object) {
        console.log(object);
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.log(error);
      }
    );
    camera.position.set(200, 150, 500);
    function animate() {
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 1000 / 30);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });
</script>

<style>
  canvas { display: block; width: 300px; height: 300px;}
</style>
<b>3D</b>
<canvas bind:this={canvas}></canvas>