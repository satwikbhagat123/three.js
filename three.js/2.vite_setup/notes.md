make sure that node.js is downloaded in your system to check whether the node.js is downloaded in your sysytem or not open CMD and type node -v if it shows the version of the node.js then it is already installed in ur system if something else is comming then go and download node.js from google then go to google and serch for vite >>get started then we will coppy 
npm create vite@latest
this from that page then we will open CMD and type cd Desktop enter then type npm create vite@latest and enter then we will give the name of the project and then we will select the framework and we will selelct vanilla and click on that then click on javascript

phie hmare desktop pe ek folder bnn chuka hoga jiska naam hoga jo hmne project name me diya hoga ushi namm ka folder bnn gya hoga desktop pe 

now run 
cd project name
npm install 

now open that folder in vs code 
clear index.html file and write the boilerplate code of html
the clear main.js
delete counter.js file
delete javascript.svg file
style .css clear all and write reset code 

installing tailwind css in vite 
go to tailwing website and click on get started then go to framework guides then vite 
then copy this command in terminal 
npm install -D tailwindcss postcss autoprefixer
press enter

npx tailwindcss init -p
press enter

now open the tailwind.config.js file and clear all and write this code 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

create index.css file and copy this code in index.css file 
@tailwind base;
@tailwind components;
@tailwind utilities;


now in terminal type 
npm install tailwindcss postcss-cli autoprefixer
press enter

open package.json file and search for scripts and below dev type this code
    "watch": "postcss ./src/index.css -o ./src/style.css --watch",
press enter
 make sure that index.css and style.css will be in src folder

and to run the above code type in terminal 
npm run watch
press enter
then we will see that style.css file me bht kuch likha hua add ho jayega

now in another terminal go to that folder firder in which ur project is present and type 
# Initialize a new npm project
npm init -y

# Install Vite as a development dependency
npm install vite --save-dev
press enter

and then type 
npm run dev
press enter

now we will see that our project is running on localhost


till now aur vite app setup is completed with tailwind css
---------------------------------------------------------------------------------------------------------------------

now we will start with three.js installation
type in terminal 
npm install three
press enter

now go to index.html file and write this code 

   <canvas class="absolute top-0 left-0 w-full h-screen"></canvas>
   <script type="module" src="./src/main.js"></script>
   jb tkk hmm type module nhi likhenge tb tkk hmm import aur baki sb word use nhi kr sakte 

open main.js file and write this code 

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;
const geometry = new THREE.BoxGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const Mesh = new THREE.Mesh(geometry, material);
scene.add(Mesh);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
    Mesh.rotation.x += 0.01;
    Mesh.rotation.y += 0.01;
}
animate();


---------------------------------------------------------------------------------------------------------------------

till now three.js is installed in our vite app

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;
const geometry = new THREE.BoxGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({color: 'red'});
const Mesh = new THREE.Mesh(geometry, material);

Mesh.rotation.z = 1.57;    

scene.add(Mesh);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// function animate() {
//   window.requestAnimationFrame(animate);
//     Mesh.rotation.x += 0.01;
//     Mesh.rotation.y += 0.01;
// }
// animate();

so in above code expalins here

Mesh.rotation.z = 1.57;    // 1.57 is 90 degree so the cube is rotated 90 degree     
90 degree = 1.57  
180 degree = 3.14
 270 degree = 4.71
360 degree = 6.28

but we have to write it like this 
for 90 degree = pi/2
for 180 degree = pi
for 270 degree = 3*pi/2
for 360 degree = 2*pi


if we want we can add more than one objects in our scene for that below is the code

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const cubegeo = new THREE.BoxGeometry(1, 1, 1);
const cubemat = new THREE.MeshBasicMaterial({color: 'red'});
const cube= new THREE.Mesh(cubegeo, cubemat);

cube.position.x = -1;

const spheregeo = new THREE.SphereGeometry(1, 10, 10);
const spheremat = new THREE.MeshBasicMaterial({color: 'red'});
const sphere= new THREE.Mesh(spheregeo, spheremat);

sphere.position.x = 1;
scene.add(cube);
scene.add(sphere);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// function animate() {
//   window.requestAnimationFrame(animate);
//     Mesh.rotation.x += 0.01;
//     Mesh.rotation.y += 0.01;
// }
// animate();

but in above code if we move sphere in x axis only sphere is moving in x axis and cube is not moving in x axis so to make both cube and sphere move in x axis we have to write this code 

const group = new THREE.Group();
group.add(cube);
group.add(sphere);

group.position.x = 2;

scene.add(group);

this will amke sure that both cube and sphere are moving in x axis


here is the final code for above code 


main.js
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;

const cubegeo = new THREE.BoxGeometry(1, 1, 1);
const cubemat = new THREE.MeshBasicMaterial({color: 'red'});
const cube= new THREE.Mesh(cubegeo, cubemat);

cube.position.x = -1;

const spheregeo = new THREE.SphereGeometry(1, 10, 10);
const spheremat = new THREE.MeshBasicMaterial({color: 'red'});
const sphere= new THREE.Mesh(spheregeo, spheremat);

sphere.position.x = 1;

const group = new THREE.Group();
group.add(cube);
group.add(sphere);

group.position.x = 2;

scene.add(group);


const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// function animate() {
//   window.requestAnimationFrame(animate);
//     Mesh.rotation.x += 0.01;
//     Mesh.rotation.y += 0.01;
// }
// animate();

index.html

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