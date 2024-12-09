                                             introduction to materials in three.js

mesh normal material


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const geometry = new THREE.SphereGeometry(1, 70, 70);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = 1;
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



mesh basic material


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const geometry = new THREE.SphereGeometry(1, 20, 20);
const material = new THREE.MeshBasicMaterial({wireframe:true});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = 1;
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


mesh standard material

isme hme kuch nhi dikhega jb tkk hmm light add nhi krenge toh lights add krne ke liye hmm likhenge

let light = new THREE.DirectionalLight("white",2);  ///light color and intensity set krne ke liye
light.position.set(1, 1, 1);   ///light position set krne ke liye
scene.add(light);  ///light add krne ke liye


full code is below



import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

let light = new THREE.DirectionalLight("white",2);  ///light color and intensity set krne ke liye
light.position.set(1, 1, 1);   ///light position set krne ke liye
scene.add(light);  ///light add krne ke liye

const geometry = new THREE.SphereGeometry(1, 20, 20);
const material = new THREE.MeshStandardMaterial({ color: "white"});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = 1;
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


if we want to see where the light is so there is a thing called light helpers we can add that the code for that is below


const lightHelper = new THREE.DirectionalLightHelper(light, 0.8);
scene.add(lightHelper);

now we can see the light is coming from which direction

here is the full code


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const light = new THREE.DirectionalLight("white",2);  ///light color and intensity set krne ke liye
light.position.set(1, 1, 1);   ///light position set krne ke liye
scene.add(light);  ///light add krne ke liye

const lightHelper = new THREE.DirectionalLightHelper(light, 0.8);
scene.add(lightHelper);

const geometry = new THREE.SphereGeometry(1, 20, 20);
const material = new THREE.MeshStandardMaterial({ color: "white"});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = 1;
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


----------------------------------------------------------------------------------------------------------------------
                                                         understanding MeshPhysicalMaterial in three.js

we can use this agar hme glass materials bnnane h toh
we can play with the roughness and metalness and reflectivity and refraction ratio and all these things in threejs website serch materials and see MeshPhysicalMaterial and play with controls there

and oviously isme me lights ki jarurat padti h 



import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const light = new THREE.DirectionalLight("white",2);  ///light color and intensity set krne ke liye
light.position.set(1, 1, 1);   ///light position set krne ke liye
scene.add(light);  ///light add krne ke liye


const light2 = new THREE.DirectionalLight("red",2);  ///light color and intensity set krne ke liye
light2.position.set(-1, -1, -1);   ///light position set krne ke liye
scene.add(light2);  ///light add krne ke liye


const geometry = new THREE.SphereGeometry(1, 20, 20);
const material = new THREE.MeshPhysicalMaterial({ color: "white"});

material.metalness = 0.5;
material.roughness = 0.5;
material.clearcoat = 1;
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = 1;
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


