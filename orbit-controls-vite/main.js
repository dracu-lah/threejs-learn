import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const canvas = document.getElementById('draw');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00,wireframe:true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.autoRotate=true;
controls.autoRotateSpeed=60;
controls.enableZoom=true;

function animate() {
	requestAnimationFrame(animate);

	controls.update();

	renderer.render(scene, camera);
}

animate();
