                                 making your three.js scene responsive: handling resizes

responsive bnane ke lie hmm yeh likhenge 

window.addEventListener("resize", function(e)  {    iska mtlb screen jb bhi resize hogi camera apna aspect ratio badal rha h 
    camera.aspect = window.innerWidth / window.innerHeight;   yeh btayega ki hme photo leni h kitni width aur kitni height me leni h 
    renderer.setSize(window.innerWidth, window.innerHeight);    iska kaam h resize hote waqt jo bhi uri height aur width h usme set ho jaye
    camera.updateProjectionMatrix();     iska kaam h camera ko update krna h 
})


here is the full code for the responsive 



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

window.addEventListener("resize", function(e)  {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
})

function animate() {
      window.requestAnimationFrame(animate);
      controls.update();
      mesh.lookAt(new THREE.Vector3(mouse.x - 0.5 , -mouse.y + 0.5 , 1));
      renderer.render(scene, camera);
}
animate(); 




----------------------------------------------------------------------------------------------------------------------
                                                                     understanding device pixel ratio  

pixel color krna and draw krna pixel par three js uses GPU
device pixel rtio woh hota h ki hmara device ek pixel pe kitne pixels ko promote kr rha h ya support kr rha h 
hrr device ka apna apna hota h
to check your own device pixel ratio hm yeh likhenge console me 

window.devicePixelRatio
aur hme answer mil jayega
aur hmm kabhi bhi device pixel ratio ko 2 se bada nhi rakhenge aur agar bada hua toh woh 2 lega ahsa hme code me likhna hoga  
toh code setup krte h 

how to setup this in three js 


---------------------------------------------------------------------------------------------------------------------
                                                                    setting up device pixel ratio in three js 


we will this for that 
renderer.setPixelRatio(window.devicePixelRatio);

ahsa kabhi bhi  nhi likhna h kyuki agar kisi ka DPR 3 hua toh woh 3 maan ke chalega aur battery bht use hogi aur high computation krna padega computer ko aur kuch jyada farak bhi nhi dikhega 

uski jagah hmm yeh use krenge 

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

iska mtlb hua ki jo  hi value agar 1 se kmm h toh whi same value le aur agar 2 se jyada h toh 2 lega 
