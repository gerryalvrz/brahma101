// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // Field of View
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near Clipping Plane
    1000 // Far Clipping Plane
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('particle-sphere').appendChild(renderer.domElement);

// Create a particle geometry
const particleCount = 800; // Number of particles
const geometry = new THREE.BufferGeometry();
const vertices = [];
const radius = 200; // Sphere radius

// Distribute particles in a sphere using spherical coordinates
for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(2 * Math.random() - 1); // Random polar angle
    const theta = 2 * Math.PI * Math.random(); // Random azimuthal angle

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    vertices.push(x, y, z);
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

// Particle material
const material = new THREE.PointsMaterial({
    color: 0x00ff00, // Neon Green
    size: 3, // Particle size
    transparent: true,
    opacity: 0.8
});

// Create particle system and add to scene
const particleSystem = new THREE.Points(geometry, material);
scene.add(particleSystem);

// Position the camera
camera.position.z = 400;

// Add mouse movement interaction
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the sphere based on mouse movement
    particleSystem.rotation.y += mouseX * 0.01;
    particleSystem.rotation.x += mouseY * 0.01;

    renderer.render(scene, camera);
}

// Handle resizing of the window
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation loop
animate();
