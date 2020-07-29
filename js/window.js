var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



var sphere = new THREE.SphereGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00,wireframe: true } );
var cube = new THREE.Mesh( sphere, material );

camera.position.z = 50;

scene.add( cube );
const animate = ()=>{

}

renderer.render(scene, camera)
