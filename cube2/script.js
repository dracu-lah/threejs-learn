// Important things to know
// 1. Scene, Camera, Renderer
// 2. Geometry, Material, Mesh
// 3. Renderer
// 4. Request Animation Frame

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.z = 5;
// No need to add camera to the scene, it's not a visible object

const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(box, material);
mesh.rotation.y=Math.PI/4
scene.add(mesh);

const canvas = document.getElementById('draw'); // Use getElementById to match the HTML
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

let clock=new THREE.Clock();
function animate(){
    requestAnimationFrame(animate)
    mesh.rotation.y=clock.getElapsedTime()*2

    renderer.render(scene,camera)
}
animate()






