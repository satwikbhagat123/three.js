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
