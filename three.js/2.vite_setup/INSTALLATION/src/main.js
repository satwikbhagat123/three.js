import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const cubegeo = new THREE.BoxGeometry(1, 1, 1);
const cubemat = new THREE.MeshBasicMaterial({color: 'red'});
const cube= new THREE.Mesh(cubegeo, cubemat);

cube.position.x = -1;

const spheregeo = new THREE.SphereGeometry(1, 10, 10);
const spheremat = new THREE.MeshBasicMaterial({color: 'red'});
const sphere= new THREE.Mesh(spheregeo, spheremat);

sphere.position.x = 1;

const group = new THREE.Group();
group.add(cube);
group.add(sphere);

group.position.x = 2;

scene.add(group);


const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// function animate() {
//   window.requestAnimationFrame(animate);
//     Mesh.rotation.x += 0.01;
//     Mesh.rotation.y += 0.01;
// }
// animate();