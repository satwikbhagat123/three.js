const scene = new THREE.Scene();  
const camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    100
);
camera.position.z = 5;

// ... existing scene and camera setup ...

const geometry = new THREE.BoxGeometry(1, 1, 1);   
const material = new THREE.MeshBasicMaterial({ color: "red" , wireframe:true }); 
const cube = new THREE.Mesh(geometry, material);

// // Position the cube
// cube.position.x = 2;  // Move right by 2 units
// cube.position.y = 1;  // Move up by 1 unit
// cube.position.z = 0;  // No movement in z direction

// cube.scale.x = 2;   //cube x axis me double ho jayega
// cube.scale.y = 2;   //cube y axis me double ho jayega
// cube.scale.z = 2;   //cube z axis me double ho jayega

scene.add(cube);



const canvas=document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({canvas : canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.render( scene, camera );

function animate() {
	renderer.render( scene, camera );
    // cube.rotation.x += 0.01;   // rotation in x axis
    // cube.rotation.y += 0.01;   // rotation in y axis
    // cube.rotation.z += 0.01;   // rotation in z axis

}
renderer.setAnimationLoop( animate );