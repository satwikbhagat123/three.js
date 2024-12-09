import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from "three/addons/loaders/RGBELoader.js"


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 3;



let textureLoader = new THREE.TextureLoader();
let tex = textureLoader.load("./public/map.jpg")
tex.colorSpace = THREE.SRGBColorSpace;   //to see proper color in the texture

let tex2 = textureLoader.load("./public/clouds.jpg")
tex2.colorSpace = THREE.SRGBColorSpace;   //to see proper color in the texture


const geometry = new THREE.SphereGeometry(1, 250, 250);
const material = new THREE.MeshPhysicalMaterial({ map: tex});
const mesh = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.SphereGeometry(1.01  , 250, 250);
const material2 = new THREE.MeshPhysicalMaterial({ alphaMap: tex2});
material2.transparent = true;

const mesh2 = new THREE.Mesh(geometry2, material2);
scene.add(mesh);
scene.add(mesh2);


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

function animate() {
      window.requestAnimationFrame(animate);
      controls.update();
      mesh2.rotation.y += 0.003;
      mesh.rotation.y += 0.002;
      renderer.render(scene, camera);
}
animate();