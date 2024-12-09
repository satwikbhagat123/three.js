
                                                                  implementing orbit controls in three js 

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;


const geometry = new THREE.BoxGeometry(1, 2, 3);
const material = new THREE.MeshBasicMaterial({color: "red"});
const mesh = new THREE.Mesh(geometry, material);

mesh.lookAt(new THREE.Vector3(-0.5, 0.1, 0.4));
scene.add(mesh);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));



window.addEventListener("resize", function(e)  {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
})

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;    /// iska mtlb hmara camera smooth move krega rotate krne ke baad thodi der tkk ghumta rhega 
// controls.dampingFactor = 0.05;    /// iska mtlb hmara camera rotate krne ke baad thodi der tkk ghumta rhega 
// controls.enableRotate = false;   /// iska mtlb hmm camera rotate nhi kr skte h
// controls.enableZoom = false;   /// iska mtlb hmm camera zoom nhi kr skte h
// controls.minPolarAngle = Math.PI / 2; 
// controls.minZoom = 1;    // hmm kitna zoom kr skte h 
// controls.maxZoom = 10;   // hmm kitna zoom kr skte h 
// controls.minDistance = 3;  // hmm kitna minimum  distance kr skte h 
// controls.maxDistance = 10;  // hmm kitna maximum distance kr skte h 

function animate() {
      window.requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
}
animate(); 

----------------------------------------------------------------------------------------------------------------------
creating a simple GUI with LIL-GUI in three.js

for that we need to install lil-gui 

npm i lil-gui

this is the code for the lil-gui for installation in terminal

