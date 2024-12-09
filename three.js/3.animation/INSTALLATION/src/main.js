import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 2;

const geometry = new THREE.BufferGeometry();
let vertices = new Float32Array(3000);

for (let i = 0; i < 3000; i++) {
      vertices[i] = (Math.random() - 0.5) *2;
}

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 'red' , wireframe: true } );
const mesh = new THREE.Mesh( geometry, material );

scene.add(mesh);


const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;   
controls.dampingFactor = 0.05;  

function animate() {
      window.requestAnimationFrame(animate);
      mesh.rotation.y += 0.01;
      camera.position.z += 0.01;
      controls.update();
      renderer.render(scene, camera);
}
animate();