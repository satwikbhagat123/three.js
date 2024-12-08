jitna bhi 3-d hmm website me use krenge wo sb webgl me use krenge lekin webgl me 3d ko render krne ke liye three.js use krte h kyuki webgl ka code bht lamba hota h aur three.js uss lambe code ko 1 line me bna deta h 

webgl jo hmara 3d draw krega woh bhayankar level ki computation mangta h aur iske liye ek alag se cheez bni h GPU . gpu jo h cpu jaisa hi hota h but iska processing speed bhi hmara cpu se jyada hota h kyuki gpu parallel processing krta h mtlb parallel me kaam krta h aur cpu serialized tarike se kaam krta h isliye GPU ek perfect candidate h 3d ko render krne ke liye

there are 2 types of GPU
1. dedicated GPU
2. integrated GPU

dedicated GPU is a separate card jo hmara pc me fixed nhi h aur iska processing speed bhi hmara cpu se jyada hota h aur iska price bhi jyada hota h we use this in our pc . jb bhi hmm dedicatesd GPU use krte h toh hmare device ki baterry jyada karch hoti h 

integrated GPU is a chip jo hmara motherboard me fixed hota h aur iska processing speed hmara cpu se jyada kam hota h aur iska price bhi kam hota h it very less powerfull GPU 

const scene = new THREE.Scene();  

 iss THREE ke andar pura three.js h jitna bhi three.js me hota h aur uss three.js ke andar hmara scene h aur scenen ke andar hmm bht kuch add kr sakte h but dikhega whi jo camera ke andar hoga

 new THREE.Scene();  yeh hme pura scene deta h ki hmm iss puri dunia me mtlb scene me jo add krna chahte h woh kr sakte h 

 const camera = new THREE.PerspectiveCamera( 
    75,  
    window.innerWidth / window.innerHeight,  // is the aspect ratio of the camera
    0.1,  // 0.1 is the near clipping plane
    1000  // 1000 is the far clipping plane
);

 const camera = new THREE.PerspectiveCamera() isme perspective camera jo h hmari human eyes hoti h jo ki human eyes ko replace krta h aur hmm utna hi hmari eyes ko FOV dete h ki kitna hmarae eyes ko dekhna h aur kitna width aur kitna height tkk ka dekhna h aur kitna pass aur kitna door tkk ka dekh sakta h woh sb hmm deyte h iske andar


  75 is the field of view of the camera which is also called FOV(field of view) fov is hmm kitna door tkk dekh sakte h aur hmari aankhe dekh sakti h mtlb ki camera hmari aakhe h jitna FOV kmm hoga hmm utna jyada zoomed in honge FOV kmm krne se hmm pointed kisi ek product ko dekhenge aur jaise jaise hmm FOV ko badhayenge toh hmm utna jyada dunia ko dekhte jayenge and normal insan ka view 75 hota h isliye hmmlog normally 75 dete h yha pe

 window.innerWidth / window.innerHeight,  iska kaam h ki hmara camera kitna width aur kitna height ko dekhe uska ratio btana hota h  iss ka mtlb yeh hota h ki kitne ratio me mujhe us scene ko dikhana h 

  0.1,  // 0.1 is the near clipping plane yeh btata h ki kitne pass ki cheeze hmm dekh sakte h agar hmm near ki value 10 kr denge toh koi bhi cheez jo camere se 10 point pehle h woh nhi dikhegi

      1000  this is far means kitne door tkk ki cheeze hmm dekh sakte h mtln jo bhi 1001 points pe hoga woh nhi dikhegi isko hmm use isliye krte h kyuki jitna bhi hmm far ki value badhayenge toh hmm utna jyada dunia ko dekhte jayenge aur hmare computer ko utna process krna padega hmare world ko dikhane me 

jo chiz hmare pass hoti h woh badi dikhti h jo chiz hmare door hoti h woh choti dikhti h 


const geometry = new THREE.BoxGeometry( 2, 2, 2 );   //box ko bada krna h toh box geometry use krte h
const material = new THREE.MeshBasicMaterial( { color: "red" } ); //material is the color of the cube
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const geometry = new THREE.BoxGeometry( 2, 2, 2 ); basically yeh ek dhacha h  isme hmm kiase geometry rakhna chahte h woh likhna hota h jaise yha pe hmne box geometry use kiya h aur hmne yha pe xaxis me 2 diya h aur yaxis me 2 diya h aur zaxis me 2 diya h z axis jo hmari taraf aa rhi h usko kehte h aur y axis jo upper ja rhi h usko kehte h aur x axis jo side me ja rhi h usko kehte h 

const material = new THREE.MeshBasicMaterial( { color: "red" } ); maanlo ki hmare pass ek box h aur hmne usse red color ke paper se wrap kr diya toh usko material kahte h aur material ka kaam h ki hmm usko color de sakte h basically materials iske skin h (khaal) h box ke lekin abhi tkk hmne skin (khaal) pehnaye nhi h uske liye hme next line likhni padegi aur agar hmm color ke baad wireframe:true likh denge toh dhacha dikhne lagega

const cube = new THREE.Mesh( geometry, material ); 

 new THREE.Mesh( geometry, material ); iska mtlb h ki dhache pe yeh khaal pehna do phir hme milega shreer jo ki hoga cube 

scene.add( cube );
iska mtlb hmne shreer ko add kr diya finally aur cube hmare center me aayega mtlb x=0,y=0,z=0 pe aayega aur hmara camera bhi centre pe hi hota h toh hmm kuch bhi nhi dekh payenge cube ko kyuki hmm toh cibe ke andar baithe h hme piche aana padega toh hme bolna padega (niche likha hua h )

camera.position.z = 5;
aur hmm z axis me 5 points piche aayenge toh hmm cube ko dekh sakte h 


const canvas=document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({canvas : canvas});
renderer.setSize( window.innerWidth, window.innerHeight );


const renderer = new THREE.WebGLRenderer();
yha pe hmm renderer bna rhe h toh isse hoga yeh ki ek camera nikal ke aa jayega jo photo leta rhega toh renderer ek camera h 
renderer.setSize( window.innerWidth, window.innerHeight );
aur woh camera kitni badi photo dega toh uska size hmm isme btate h aur isme hmne diya h window ke size ki width aur window ke size ki height 


const canvas=document.querySelector("canvas")
canvas jo h woh hmara canvas tag h jo hmara 3d ko show krega 
const renderer = new THREE.WebGLRenderer({canvas : canvas});
yha pe hmne bola three ke andar camere me canvas canvas mtlb jha pe hme usse show krna h toh hmne bola mki camera jo h canvas me show krega 
renderer.setSize( window.innerWidth, window.innerHeight );




function animate() {
	renderer.render( scene, camera );
    cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
}
renderer.setAnimationLoop( animate );

function animate() {
    aur agar hmm iss box ko rotate krna chahte h toh function animate use krenge aur usually iss function ka naam animate hi rakhte h sb toh phir hmm sbse pehle likhenge

    window.requestAnimationFrame(animate);
    yeh code baar baar chalata rhega toh yeh animate function ko baar baar chalata rahega aur yha pr window isliye h taki hme animation smooth dikhe window ke respect pe 

    cube.rotation.y += 0.01;
iska mtlb ki cube rotate hoga y axis ke respect pe 

    cube.rotation.x += 0.01;
iska mtlb ki cube rotate hoga x axis ke respect pe 

    cube.rotation.z += 0.01;
iska mtlb ki cube rotate hoga z axis ke respect pe 

renderer.render( scene, camera );
hmne bola renderer tumnhe photo leni h hmari dunia ki iss camere se  aur yeh hmm tb use krenge jb hmm cube ko rotate krna chahte h aur photo leni chahte h uski liye hmm function banayenge aur uske andar likhenge yeh line 

renderer.setAnimationLoop( animate );
isse hmm animate naam ke function ko call krenge 

---------------------------------------------------------------------------------------------------------------------
                                                                  our final code will look like this 
script.js

const scene = new THREE.Scene();  
const camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    100
);

const geometry = new THREE.BoxGeometry( 2, 2, 2 );   
const material = new THREE.MeshBasicMaterial( { color: "red", wireframe:true } ); 
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const canvas=document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({canvas : canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.render( scene, camera );
function animate() {
	renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

}
renderer.setAnimationLoop( animate );

index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="world"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js" integrity="sha512-vnmn/Qqn6aG0POAc9mIGzjq0IybrvxJXYDafNvp9JSnDGxeF3pbkSqLvf+YGd5ku63pT7sa/jxHn7/d0mU8+tA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
</body>
</html>

style.css

*{
           box-sizing:border-box;
           margin: 0;
           padding: 0;
}

html,body{
      width: 100%;
      height: 100%;
}

#world{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}




---------------------------------------------------------------------------------------------------------------------
                                                                                      in english




All 3D content we use in websites will use WebGL, but we use Three.js to render 3D in WebGL because WebGL code is very lengthy and Three.js can simplify that long code into just a few lines.

WebGL, which draws our 3D content, requires intense computation, and for this, we have a special component called the GPU. The GPU is similar to a CPU but has higher processing speed because it performs parallel processing, while CPU works in a serialized manner. This makes GPU a perfect candidate for rendering 3D.

There are 2 types of GPU:
1. dedicated GPU
2. integrated GPU

A dedicated GPU is a separate card that isn't fixed to our PC, has higher processing speed than CPU, and is more expensive. We use this in our PC. When we use a dedicated GPU, it consumes more battery power.

An integrated GPU is a chip that's fixed to our motherboard, has lower processing speed than CPU, and is less expensive. It's a much less powerful GPU.

const scene = new THREE.Scene();  

This THREE contains all of Three.js, and inside Three.js we have our scene where we can add many things, but only what's in view of the camera will be visible.

new THREE.Scene(); gives us the entire scene where we can add whatever we want in this 3D world.

const camera = new THREE.PerspectiveCamera( 
    75,  
    window.innerWidth / window.innerHeight,  // is the aspect ratio of the camera
    0.1,  // 0.1 is the near clipping plane
    1000  // 1000 is the far clipping plane
);

PerspectiveCamera replaces human eyes, and we give it FOV similar to human eyes - how much it can see, what width and height it can view, and how near or far it can see.

75 is the field of view (FOV) of the camera. FOV determines how far we can see - the lower the FOV, the more zoomed in we'll be. Lower FOV means we'll focus on a specific product, and as we increase FOV, we'll see more of the world. A normal human's view is 75, which is why we typically use 75 here.

window.innerWidth / window.innerHeight tells the ratio of width to height that our camera should see - it defines in what ratio we want to show the scene.

0.1 (near clipping plane) indicates how close objects we can see. If we set near value to 10, anything closer than 10 points won't be visible.

1000 (far clipping plane) indicates how far we can see - anything beyond 1001 points won't be visible. We use this because the larger the far value, the more of our world we'll see, and our computer will need to process more to display our world.

Objects closer to us appear larger, objects farther away appear smaller.

const geometry = new THREE.BoxGeometry( 2, 2, 2 );   //use BoxGeometry to create a box
const material = new THREE.MeshBasicMaterial( { color: "red" } ); //material is the color of the cube
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const geometry = new THREE.BoxGeometry( 2, 2, 2 ); is basically a structure where we specify what geometry we want to use. Here we've used box geometry and given it dimensions of 2 for x-axis, 2 for y-axis, and 2 for z-axis. The z-axis comes towards us, y-axis goes up, and x-axis goes to the side.

const material = new THREE.MeshBasicMaterial( { color: "red" } ); Think of this like having a box and wrapping it with red colored paper - that's what material is. Materials are like the skin of the box, but we haven't applied the skin yet, which we'll do in the next line. If we add wireframe:true after the color, we'll see the structure/framework.

const cube = new THREE.Mesh( geometry, material ); 

new THREE.Mesh( geometry, material ); means we're putting the skin on the structure, which gives us our final shape - the cube.

scene.add( cube );
This means we've finally added our shape, and the cube will appear at the center (x=0, y=0, z=0). Since our camera is also at the center, we won't be able to see the cube because we're inside it. We need to move back (as written below)

camera.position.z = 5;
We move 5 points back on the z-axis so we can see the cube.

const canvas=document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({canvas : canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

const renderer = new THREE.WebGLRenderer();
Here we're creating a renderer - think of it as a camera that will keep taking photos. The renderer is our camera.
renderer.setSize( window.innerWidth, window.innerHeight );
This determines how large the photo from the camera will be - we're setting it to the window's width and height.

const canvas=document.querySelector("canvas")
Canvas is our canvas tag that will show our 3D content.
const renderer = new THREE.WebGLRenderer({canvas : canvas});
Here we're telling Three.js that our camera should show content in the canvas - specifying where to display it.

function animate() {
	renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
renderer.setAnimationLoop( animate );

function animate() {
If we want to rotate this box, we'll use the animate function - usually everyone names this function 'animate'

window.requestAnimationFrame(animate);
This code will keep running repeatedly, continuously calling the animate function. We use window here to make the animation smooth relative to the window.

cube.rotation.y += 0.01;
This means the cube will rotate with respect to the y-axis

cube.rotation.x += 0.01;
This means the cube will rotate with respect to the x-axis

cube.rotation.z += 0.01;
This means the cube will rotate with respect to the z-axis

renderer.render( scene, camera );
We're telling the renderer to take a photo of our world with this camera. We use this when we want to rotate the cube and take photos of it, which we'll do inside a function.

renderer.setAnimationLoop( animate );
This will call our animate function.

index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <canvas id="world"></canvas>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js" integrity="sha512-vnmn/Qqn6aG0POAc9mIGzjq0IybrvxJXYDafNvp9JSnDGxeF3pbkSqLvf+YGd5ku63pT7sa/jxHn7/d0mU8+tA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
</body>
</html>

style.css
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,body{
    width: 100%;
    height: 100%;
}

#world{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

script.js
const scene = new THREE.Scene();  
const camera = new THREE.PerspectiveCamera( 
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    100
);

const geometry = new THREE.BoxGeometry( 2, 2, 2 );   
const material = new THREE.MeshBasicMaterial( { color: "red", wireframe:true } ); 
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const canvas = document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({canvas : canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.render( scene, camera );
function animate() {
    renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
}
renderer.setAnimationLoop( animate );