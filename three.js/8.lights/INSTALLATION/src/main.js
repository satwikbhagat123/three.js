import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.querySelector('.canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 2, 5);
controls.update();
controls.enableDamping = true;
controls.minDistance = 3;
controls.maxDistance = 10;

// Studio lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 1);
keyLight.position.set(5, 5, 5);
keyLight.castShadow = true;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
fillLight.position.set(-5, 3, 0);
scene.add(fillLight);

const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
backLight.position.set(0, 3, -5);
scene.add(backLight);

// Materials
const boxMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x2194ce,
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1.0,
});

const sphereMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xff4444,
    metalness: 0.1,
    roughness: 0.2,
});

// Geometries
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.x = -1.5;
box.castShadow = true;
scene.add(box);

const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 1.5;
sphere.castShadow = true;
scene.add(sphere);

// Ground plane
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshStandardMaterial({ 
    color: 0x808080,
    roughness: 0.8,
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -1;
ground.receiveShadow = true;
scene.add(ground);

// Responsive handling
function handleResize() {
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

// Initial setup
handleResize();

// Add event listener
window.addEventListener('resize', handleResize);

// Raycaster setup
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let previousIntersected = null;
let orignalColor = null;

function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    
    const intersects = raycaster.intersectObjects([box, sphere]);

    if (intersects.length > 0) {
        if (previousIntersected !== intersects[0].object) {
            if (previousIntersected) {
                previousIntersected.material.color.set(orignalColor);
            }
            previousIntersected = intersects[0].object;
            orignalColor = previousIntersected.material.color.getHex();
            previousIntersected.material.color.set(0x00ff00);
        }
    } else {
        if (previousIntersected) {
            previousIntersected.material.color.set(orignalColor);
            previousIntersected = null;
        }
    }
}

// Add pointer move event listener
window.addEventListener('pointermove', onPointerMove);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    
    sphere.rotation.y += 0.01;
    
    controls.update();
    renderer.render(scene, camera);
}

animate();