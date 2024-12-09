lookat belongs to object 3d class isme hmm jo bhi points denge uske hisab se yeh uss taraf dekhne lagega aur iska code hmm likh sakte h kuch ahse

mesh.lookAt(-1 , 1, 0 );


full code is below


import * as THREE from 'three';
// ... existing code ...
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// ... existing code ...

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;


const geometry = new THREE.BoxGeometry(1, 2, 3);
const material = new THREE.MeshBasicMaterial({color: "red"});
const mesh = new THREE.Mesh(geometry, material);

mesh.lookAt(-1, 1, 0);

scene.add(mesh);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);  

function animate() {
      window.requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
}
animate();


but ahse points dena shi tarika nhi h hme kuch ahse dena chahiye points ko 

mesh.lookAt(new THREE.Vector3(-1, 1, 0));


full code is below



import * as THREE from 'three';
// ... existing code ...
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// ... existing code ...

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

const controls = new OrbitControls(camera, renderer.domElement);  

function animate() {
      window.requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
}
animate();


![](U9wnqN4NIkvYOTtP4pHO9OdpcNGnBd57.svg)
thats why here we wrote x=0 and y=0 in the code below

const mouse = {
      x: 0,
      y: 0,
}

iska diagram mouse.svg me h smjhaya hua 

import * as THREE from 'three';
// ... existing code ...
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// ... existing code ...

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

const controls = new OrbitControls(camera, renderer.domElement);  
const mouse = {
      x: 0,
      y: 0,
}

window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
});
function animate() {
      window.requestAnimationFrame(animate);
      controls.update();
      mesh.lookAt(new THREE.Vector3(mouse.x - 0.5 , -mouse.y + 0.5 , 1));
      renderer.render(scene, camera);
}
animate();        


this is the basic structure of a gun how it will move and look 
now the code for basic gun  for trial is below



import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from "three/addons/loaders/RGBELoader.js"


// Add texture loader
const textureLoader = new THREE.TextureLoader();

// Load your textures
const metalTexture = textureLoader.load('/public/guntex.avif');
metalTexture.colorSpace = THREE.SRGBColorSpace;   //to see proper color in the texture

const gripTexture = textureLoader.load('/public/guntex.avif');
gripTexture.colorSpace = THREE.SRGBColorSpace;   //to see proper color in the texture

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 2;

// Create gun group
const gunGroup = new THREE.Group();

// Create materials with textures
const bodyMaterial = new THREE.MeshStandardMaterial({ 
    map: metalTexture,
    metalness: 0.7,
    roughness: 0.3
});

const handleMaterial = new THREE.MeshStandardMaterial({ 
    map: gripTexture,
    roughness: 0.8
});

// Main body of the gun
const bodyGeometry = new THREE.BoxGeometry(1, 0.3, 0.3);
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);

// Gun barrel
const barrelGeometry = new THREE.BoxGeometry(0.4, 0.2, 0.2);
const barrel = new THREE.Mesh(barrelGeometry, bodyMaterial); // Using same material as body
barrel.position.x = 0.7;

// Gun handle/grip
const handleGeometry = new THREE.BoxGeometry(0.25, 0.8, 0.2);
const handle = new THREE.Mesh(handleGeometry, handleMaterial); // Using grip material
handle.position.y = -0.5;

// Add all parts to the gun group
gunGroup.add(body);
gunGroup.add(barrel);
gunGroup.add(handle);

// Add lighting (needed for MeshStandardMaterial)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

scene.add(gunGroup);

// ... rest of the code remains the same ...

let hdri = new RGBELoader();
hdri.load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/buikslotermeerplein_2k.hdr", function(hdritexture){
      hdritexture.mapping = THREE.EquirectangularReflectionMapping;
      // scene.background = hdritexture;
      scene.environment = hdritexture;
})


const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);  
const mouse = {
    x: 0,
    y: 0,
}

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = e.clientY / window.innerHeight;
});

function animate() {
    window.requestAnimationFrame(animate);
    controls.update();
    gunGroup.lookAt(new THREE.Vector3(mouse.x - 0.5 , -mouse.y + 0.5 , 1));
    renderer.render(scene, camera);
}

animate();
