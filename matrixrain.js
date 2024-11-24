
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

