import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const cubegeo = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
const cubemat = new THREE.MeshBasicMaterial({color: 'red', wireframe: true});
const cube= new THREE.Mesh(cubegeo, cubemat);

scene.add(cube);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

function animate() {
      window.requestAnimationFrame(animate);
      cube.rotation.y += 0.1;
      cube.rotation.x += 0.1;
      cube.rotation.z += 0.1;
      renderer.render(scene, camera);
}
animate();