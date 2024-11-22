
const messages = [
    "Wake up, Neo...",
    "Follow the white rabbit...",
    "(R)evolve... you are the voice of the revolution.",
    "Buidl the hidden patterns of reality...",
    "Reality’s structure is not static; Adapt, weave, and bend it—each innovation a new pathway through the matrix."
];

let currentMessageIndex = 0;
let currentCharacterIndex = 0;

const terminalOutput = document.getElementById('terminal-output');

function typeMessage() {
    if (currentMessageIndex < messages.length) {
        const currentMessage = messages[currentMessageIndex];

        if (currentCharacterIndex === 0) {
            terminalOutput.textContent = ""; // Clear old message
        }

        if (currentCharacterIndex < currentMessage.length) {
            // Add the next character
            terminalOutput.textContent =
                currentMessage.slice(0, currentCharacterIndex + 1);
            currentCharacterIndex++;
            setTimeout(typeMessage, 100); // Delay between characters
        } else {
            // Finished typing current message
            currentCharacterIndex = 0;
            currentMessageIndex++;
            setTimeout(typeMessage, 1500); // Delay between messages
        }
    } else {
        // Loop back to the first message
        currentMessageIndex = 0;
        setTimeout(typeMessage, 1500);
    }
}// Start Typing Effect on Page Load
window.onload = typeMessage;

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Resize canvas to fit the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const matrix = 'AB01CD亜愛01安EFGHIJ以位因01KLMN虚居記OP01QRわをんS10TUVW10XY歌会10時思Z1234567水火木8910@#$%^&*()*&^%';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrixRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Slightly transparent
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0, 255, 0, .6)'; // Neon green with transparency
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrixRain, 33);

particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff00'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000'
            }
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff00',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse' // Try 'grab', 'bubble', or 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push' // Try 'push' or 'bubble'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 4,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
