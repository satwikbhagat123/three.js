import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

// Create parameters object
const parameters = {
    width: 1,
    height: 2,
    depth: 3,
    color: '#ff0000'
}

const geometry = new THREE.BoxGeometry(
    parameters.width,
    parameters.height,
    parameters.depth
);
const material = new THREE.MeshBasicMaterial({ color: parameters.color });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Create GUI
const gui = new GUI();

gui.add(parameters, 'width', 0.1, 5).onChange(() => {
    mesh.geometry.dispose()
    mesh.geometry = new THREE.BoxGeometry(
        parameters.width,
        parameters.height,
        parameters.depth
    )
})

gui.add(parameters, 'height', 0.1, 5).onChange(() => {
    mesh.geometry.dispose()
    mesh.geometry = new THREE.BoxGeometry(
        parameters.width,
        parameters.height,
        parameters.depth
    )
})

gui.add(parameters, 'depth', 0.1, 5).onChange(() => {
    mesh.geometry.dispose()
    mesh.geometry = new THREE.BoxGeometry(
        parameters.width,
        parameters.height,
        parameters.depth
    )
})

gui.addColor(parameters, 'color').onChange(() => {
    mesh.material.color.set(parameters.color)
})

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("resize", function(e)  {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
})

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;    /// iska mtlb hmara camera smooth move krega rotate krne ke baad thodi der tkk ghumta rhega 
// controls.dampingFactor = 0.05;    /// iska mtlb hmara camera rotate krne ke baad thodi der tkk ghumta rhega 
// controls.enableRotate = false;   /// iska mtlb hmm camera rotate nhi kr skte h
// controls.enableZoom = false;   /// iska mtlb hmm camera zoom nhi kr skte h
// controls.minPolarAngle = Math.PI / 2; 
// controls.minZoom = 1;    // hmm kitna zoom kr skte h 
controls.maxZoom = 10;   // hmm kitna zoom kr skte h 
controls.minDistance = 3;  // hmm kitna minimum  distance kr skte h 

function animate() {
    window.requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();