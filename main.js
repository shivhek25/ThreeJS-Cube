
//Scene and Camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Renderer with Anti-Aliasing
var renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Renderer without Anti-Aliasing
var renderer1 = new THREE.WebGLRenderer();
renderer1.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer1.domElement);

//Cube of white color
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({color : 0xffffff});

//Cube 1
var cube1 = new THREE.Mesh(geometry, material);
cube1.position.setX(-1);
scene.add(cube1);

//Cube2
var cube2 = new THREE.Mesh(geometry, material);
cube2.position.setX(1);
scene.add(cube2);

camera.position.z = 3;

function animate(){
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	renderer1.render(scene, camera);
	//Rotating Cube 1
	cube1.rotation.x += 0.02;
	cube1.rotation.y += 0.02;
	//Rotating Cube 2
	cube2.rotation.x += 0.02;
	cube2.rotation.y += 0.02;
}

animate();