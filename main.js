
var scene, camera, renderer, renderer1, cube1, cube2;

function init(){
	//Scene and Camera
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	//Renderer with Anti-Aliasing
	renderer = new THREE.WebGLRenderer({antialias : true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	//Renderer without Anti-Aliasing
	renderer1 = new THREE.WebGLRenderer();
	renderer1.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer1.domElement);
	
	//Cube of white color
	var geometry = new THREE.BoxGeometry();
	var material = new THREE.MeshBasicMaterial({color : 0xffffff});
	
	//Cube 1
	cube1 = new THREE.Mesh(geometry, material);
	cube1.position.setX(-1);
	scene.add(cube1);
	
	//Cube2
	cube2 = new THREE.Mesh(geometry, material);
	cube2.position.setX(1);
	scene.add(cube2);
	
	camera.position.z = 3;
}


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

function onWindowReSize(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer1.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowReSize);

init();
animate();














