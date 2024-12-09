                                                                understanding lights in three.js


ambient light wha use krte h jha pr hme equally distribited light hahiye hoti h jo ki hmarae nature me hoti h normally

let light =  new THREE.AmbientLight("white", 1);

full code for ambient lights is below


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

let light =  new THREE.AmbientLight("white", 5);
scene.add(light);

// Replace the sphere geometry with a box
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhysicalMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, material);
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


dierectional light is basically hmm torch ki tarah light marte h toh khi pe jyada light hogi toh khi pe shadow

code for that is below



import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;



// Replace the sphere geometry with a box
const geometry = new THREE.BoxGeometry(1, 2, 3);
const material = new THREE.MeshPhysicalMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const amb = new THREE.AmbientLight("white", 0.1);
scene.add(amb);

const Light = new THREE.DirectionalLight("white", 3);
Light.position.set(4, 5, 0);
scene.add(Light);

const helper = new THREE.DirectionalLightHelper(Light, 1);
scene.add(helper);

const parameters = {
    lightX: 4,
    lightY: 5,
    lightIntensity: 3
}

const gui = new GUI();

const lightFolder = gui.addFolder('Directional Light');

lightFolder.add(parameters, 'lightX', -10, 10).onChange(() => {
    Light.position.x = parameters.lightX;
    helper.update();
});

lightFolder.add(parameters, 'lightY', -10, 10).onChange(() => {
    Light.position.y = parameters.lightY;
    helper.update();
});

lightFolder.add(parameters, 'lightIntensity', 0, 10).onChange(() => {
    Light.intensity = parameters.lightIntensity;
});

const cubeFolder = gui.addFolder('Cube Controls');

cubeFolder.add(mesh.position, 'x', -5, 5).name('Position X');
cubeFolder.add(mesh.position, 'y', -5, 5).name('Position Y');
cubeFolder.add(mesh.position, 'z', -5, 5).name('Position Z');

cubeFolder.add(mesh.rotation, 'x', 0, Math.PI * 2).name('Rotation X');
cubeFolder.add(mesh.rotation, 'y', 0, Math.PI * 2).name('Rotation Y'); 
cubeFolder.add(mesh.rotation, 'z', 0, Math.PI * 2).name('Rotation Z');



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


pointlight is basically hmm light jha pr hme light hogi uske baad hmara light jyada hoga toh uske baad hmara light jyada hoga

code for that is below


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;



// Replace the sphere geometry with a box
const geometry = new THREE.BoxGeometry(1, 2, 3);

// Create gold material parameters
const materialParams = {
    color: 0xffd700,     // Gold color
    metalness: 0.9,      // Very metallic but not perfect
    roughness: 0.1,      // Slightly rough for realism
    reflectivity: 0.8,   // High but not perfect reflectivity
    envMapIntensity: 1,  // For environment reflections
    clearcoat: 0.3,      // Light clearcoat for subtle shine
    clearcoatRoughness: 0.2  // Slightly rough clearcoat
}

// Add material parameters to geometry
geometry.computeVertexNormals(); // Ensure proper reflection calculations


const material = new THREE.MeshPhysicalMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const amb = new THREE.AmbientLight("white", 0.1);
scene.add(amb);

const light = new THREE.PointLight( 0xffffff, 30, 100 );
light.position.set( 1, 1, 1 );
scene.add( light );

const pointLightHelper = new THREE.PointLightHelper( light, 0.4 );
scene.add( pointLightHelper );

const parameters = {
    lightX: 1,
    lightY: 1,
    lightZ: 1,
    lightIntensity: 1,
    lightColor: 0xff0000
}

const gui = new GUI();

const lightFolder = gui.addFolder('Point Light');

lightFolder.add(parameters, 'lightX', -10, 10).onChange(() => {
    light.position.x = parameters.lightX;
    pointLightHelper.update();
});

lightFolder.add(parameters, 'lightY', -10, 10).onChange(() => {
    light.position.y = parameters.lightY;
    pointLightHelper.update();
});

lightFolder.add(parameters, 'lightZ', -10, 10).onChange(() => {
    light.position.z = parameters.lightZ;
    pointLightHelper.update();
});

lightFolder.add(parameters, 'lightIntensity', 0, 10).onChange(() => {
    light.intensity = parameters.lightIntensity;
});

lightFolder.addColor(parameters, 'lightColor').onChange(() => {
    light.color.set(parameters.lightColor);
});



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


spotlight is basically hmm light jha pr hme light hogi uske baad hmara light jyada hoga toh uske baad hmara light jyada hoga

code for that is below


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;



// Replace the sphere geometry with a box
const geometry = new THREE.BoxGeometry(1, 2, 3);
const material = new THREE.MeshPhysicalMaterial({color: 'red'});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 1, 3, 1 );
scene.add(spotLight);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);


const parameters = {
    lightX: 1,
    lightY: 3,
    lightZ: 1,
    lightIntensity: 1,
    angle: spotLight.angle,
    penumbra: spotLight.penumbra,
    decay: spotLight.decay
}

const gui = new GUI();
const lightFolder = gui.addFolder('Spotlight Controls');

lightFolder.add(parameters, 'lightX', -10, 10).onChange(() => {
    spotLight.position.x = parameters.lightX;
    spotLightHelper.update();
});

lightFolder.add(parameters, 'lightY', -10, 10).onChange(() => {
    spotLight.position.y = parameters.lightY;
    spotLightHelper.update();
});

lightFolder.add(parameters, 'lightZ', -10, 10).onChange(() => {
    spotLight.position.z = parameters.lightZ;
    spotLightHelper.update();
});

lightFolder.add(parameters, 'lightIntensity', 0, 10).onChange(() => {
    spotLight.intensity = parameters.lightIntensity;
});

lightFolder.add(parameters, 'angle', 0, Math.PI / 2).onChange(() => {
    spotLight.angle = parameters.angle;
    spotLightHelper.update();
});

lightFolder.add(parameters, 'penumbra', 0, 1).onChange(() => {
    spotLight.penumbra = parameters.penumbra;
    spotLightHelper.update();
});

lightFolder.add(parameters, 'decay', 0, 5).onChange(() => {
    spotLight.decay = parameters.decay;
});



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


----------------------------------------------------------------------------------------------------------------------


