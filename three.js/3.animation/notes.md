                                                                           starting animation in three.js

setTimeout(function(){
      console.log('hello');
}, 2000); // 2000ms = 2s  2000 is in miliseconds

here the above code will print hello after 2 seconds this is used to delay the execution of a function but yeh sirf ek hi baar chal ke ruk jaata hai

to run the function continuously we use setInterval we use it as give below

setInterval(function(){
      console.log('hello');
}, 2000); // 2000ms = 2s  2000 is in miliseconds

here the above code will print hello after every 2 seconds this is used to run the function continuously

but by doing this we are not using the browser's rendering engine to animate the scene so we use requestAnimationFrame

set interval ho ya set timeout ho yeh bht slow run krta h aur hme animation bht fast chahiye hota h isliye hmm window.requestAnimationFrame(animate); code use krte h toh computer jitne bhi frames per seconds support krta h utne frames me chalega mtlb agar computer 60 fps support krta h toh 60 frames per second me chalega mtlb 60 baar chalega ek second me aur hme animation bhi b ht smooth milega to check this we can use below code

function animate() {
  window.requestAnimationFrame(animate);
        console.log('hello');
}
animate();

here the above code will print hello 60 times in a second because the computer is supporting 60 fps and we can clearly see how fast it is so definately the animation will be smooth also and above code is to check or trial purpose actual code is below


function animate() {
      window.requestAnimationFrame(animate);
      cube.rotation.y += 0.1;
      renderer.render(scene, camera);
}
animate();

here the above code will rotate the cube 60 times in a second because the computer is supporting 60 fps and we can clearly see how fast it is so definately the animation will be smooth also and the cube is rotating continuously

agar hmara computer 60 fps support krta h toh upper wale code me hmne bola cube.rotation.y += 0.1; 
toh 0.1x60 = 6 degree per second me rotate hoga cube
agar hmara computer 120 fps support krta h toh upper wale code me hmne bola cube.rotation.y += 0.1; 
toh 0.1x120 = 12 degree per second me rotate hoga cube

toh isse hoga yeh ki hmara code ka animation kisi computer me fast chalega obviously 120 fps wale me fast chalega aur kisi me slow chalega and we don't want ki ahsa ho toh hmare pass ek tarika available h jo h 

let clock = new THREE.Clock();
console.log(clock.getElapsedTime());

yeh code btata h ki kitna time guzar gya h ab woh hrr kisi ke laptop pe same hi time guzra hoga website ko visit krne pe 
let clock = new THREE.Clock(); aur yeh wala line hmesa animate ke upper bnegi kyuki agar niche rakhenge toh clock baar baar bnega 

here is the full code below

let clock = new THREE.Clock();

function animate() {
      window.requestAnimationFrame(animate);
      console.log(clock.getElapsedTime());
      renderer.render(scene, camera);
      cube.rotation.y = clock.getElapsedTime();
}
animate();

here is the actual code which we write in main.js file

let clock = new THREE.Clock();

function animate() {
      window.requestAnimationFrame(animate);
      cube.rotation.y = clock.getElapsedTime();
      renderer.render(scene, camera);
}
animate(); 

and if we want the animation to be faster then we can mutliply it by 2 or 3 or 4 etc
which is given below code

cube.rotation.y = clock.getElapsedTime() * 2;

full code is given below


let clock = new THREE.Clock();

function animate() {
      window.requestAnimationFrame(animate);
      cube.rotation.y = clock.getElapsedTime() * 2;
      renderer.render(scene, camera);
}
animate();

hmm yha pe cube.rotation += 0.01;  isliye use nhi krenge kyuki hrr computer ka alg ho jayega aur clock.getElapsedTime() * 2; isliye use krenge kyuki hrr computer ka time same ho jayega




the final code for this chapter is given below

main.js file

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const cubegeo = new THREE.BoxGeometry(1, 1, 1);
const cubemat = new THREE.MeshBasicMaterial({color: 'red'});
const cube= new THREE.Mesh(cubegeo, cubemat);

scene.add(cube);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);



let clock = new THREE.Clock();

function animate() {
      window.requestAnimationFrame(animate);
      cube.rotation.y = clock.getElapsedTime() * 2;
      renderer.render(scene, camera);
}
animate();

index.html file

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./src/style.css">
</head>
<body>
  <!-- <h1 class="bg-purple-500">hey</h1> -->
   <canvas class="absolute top-0 left-0 w-full h-screen"></canvas>
   <script type="module" src="./src/main.js"></script>
</body>
</html>


----------------------------------------------------------------------------------------------------------------------

                                                                                      next chapter 
                                                                     understanding geometry in three.js

box geometry

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const cubegeo = new THREE.BoxGeometry( 1, 1, 1 );
const cubemat = new THREE.MeshBasicMaterial({color: 'red', wireframe: true});
const cube= new THREE.Mesh(cubegeo, cubemat);

scene.add(cube);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

function animate() {
      window.requestAnimationFrame(animate);
      cube.rotation.y += 0.1;
      cube.rotation.x += 0.1;
      cube.rotation.z += 0.1;
      renderer.render(scene, camera);
}
animate();

and try all the geometries as much as we can from three.js org>>documentation then search geometry and below we can see all the geometries try those 

https://threejs.org/docs/index.html?q=geometry#api/en/geometries/

here is the link to see all the geometries


chapter ends here
----------------------------------------------------------------------------------------------------------------------

                                                                 exploring buffer geometry in three.js


every box is made up of traingle
<svg id="svg" xmlns="http://www.w3.org/2000/svg" viewbox="-10,-10,20,20" style="height:20"></svg>  
<!-- #endregion -->
like in that svg file we can see a plane is made up of 2 triangles first traingle is 1,2,3 and second traingle is 1.4.3 so like that a cube is also made up of traingles the name of svg file is box traingle.svg

to open svg file in vs code go to svg file and open preview the image will open in new tab but first we have to downlod the extention name SVG Previewer by vitaliymaz then only we can see the svg file

and to draw the diagram we have to download the extention name draw note by zhaouv


even a circle is made up of traingleswe can see in below svg file named circle traingle.svg
![](Aa9nPWtRMGRYWLXDrstMTTKvPMvQAYhM.svg)

the point is that every thing is made up of traingle 

buffer geometry me hme khud se pints ki value deke koi bhi shape bna skte h by giving x,y,z ki value


const geometry = new THREE.BufferGeometry();

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	-1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2

	 1.0,  1.0,  1.0, // v3
	-1.0,  1.0,  1.0, // v4
	-1.0, -1.0,  1.0  // v5
] );

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material );

scene.add(mesh); 

as we can see above code is a box shape hmne box bnaya h buffer geometry me xyz ki value deke  4 vetices ki value deke 

full code is given below


import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const geometry = new THREE.BufferGeometry();

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	-1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2

	 1.0,  1.0,  1.0, // v3
	-1.0,  1.0,  1.0, // v4
	-1.0, -1.0,  1.0  // v5
] );

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 'red' } );
const mesh = new THREE.Mesh( geometry, material );

scene.add(mesh);
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

function animate() {
      window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
}
animate();


lets try to make something with our own 


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 2;

const geometry = new THREE.BufferGeometry();
let vertices = new Float32Array(3000);

for (let i = 0; i < 3000; i++) {
      vertices[i] = (Math.random() - 0.5) *2;     the more we mulity the utna hi hmm diagram ke andar jate jayengenge lets say we multiply it by 5 tb hmm aur bhi andar chale jayenge apne diagram ke 
}

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 'red' , wireframe: true } );
const mesh = new THREE.Mesh( geometry, material );

scene.add(mesh);



const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls( camera, renderer.domElement );   // isse hmm andar bahar ghum sakte h apne diagram me orbit controls lgaya hua h ab hmm scroll krke apne diagram ke andar bahar travel kr sakte h and mouse se move bhi kr sakte h 

controls.enableDamping = true; 
controls.dampingFactor = 0.05;

function animate() {
      window.requestAnimationFrame(animate);
      mesh.rotation.y += 0.01;
      camera.position.z += 0.01;  //isse hmm ek animation type ka create kr sakte h bhar aate hue aur agar + ki jagah - minus ka sign lga de toh hmm diagram ke andar jate jayenge
      controls.update();
      renderer.render(scene, camera);
}
animate();
