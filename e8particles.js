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

// Particle Sphere Configuration
const particleCount = 800; // Number of particles
const radius = 200; // Sphere radius

// Geometry for Particles
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = [];
const linePositions = [];

// Generate Particle Positions in a Sphere
for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(2 * Math.random() - 1); // Random polar angle
    const theta = 2 * Math.PI * Math.random(); // Random azimuthal angle

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    particlePositions.push(x, y, z);

    // Connect each particle to a random existing one with a line
    if (i > 0) {
        const randomIndex = Math.floor(Math.random() * i);
        linePositions.push(
            x, y, z, // Current particle
            particlePositions[randomIndex * 3], // Randomly connected particle X
            particlePositions[randomIndex * 3 + 1], // Randomly connected particle Y
            particlePositions[randomIndex * 3 + 2] // Randomly connected particle Z
        );
    }
}

// Set Particle Positions in Geometry
particleGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(particlePositions, 3)
);

// Particle Material
const particleMaterial = new THREE.PointsMaterial({
    color: 0x00ff00, // Neon green
    size: 3, // Particle size
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true // Ensures circular particles
});

// Particle System
const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particleSystem);

// Geometry and Material for Lines
const lineGeometry = new THREE.BufferGeometry();
lineGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(linePositions, 3)
);

const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x00ff00, // Neon green
    transparent: true,
    opacity: 0.9 // Very faint lines
});

// Line System
const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
scene.add(lineSystem);

// Position the camera
camera.position.z = 400;

// Handle mouse movement for sphere rotation
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
});

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate particles and lines
    particleSystem.rotation.y += mouseX * 0.05;
    particleSystem.rotation.x += mouseY * 0.05;

    lineSystem.rotation.y += mouseX * 0.05;
    lineSystem.rotation.x += mouseY * 0.05;

    renderer.render(scene, camera);
}

// Handle Window Resizing
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation
animate();
