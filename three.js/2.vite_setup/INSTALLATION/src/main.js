import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;
const geometry = new THREE.BoxGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const Mesh = new THREE.Mesh(geometry, material);
scene.add(Mesh);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
    Mesh.rotation.x += 0.01;
    Mesh.rotation.y += 0.01;
}
animate();