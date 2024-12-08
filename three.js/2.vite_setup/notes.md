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
