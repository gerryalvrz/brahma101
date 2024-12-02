
// =========================
// Matrix Rain Animation Section
// =========================

// Select the canvas and get its 2D context

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Resize canvas to fit the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const matrix = 'AB0℥1ℌCD亜愛01安EℌFGHIJ以位因01KℑLMN虚居記O♈︎P01QRわをんS10TUVW1♑︎0XY歌会10時思Z12♅34567水火木891♃0@#$%☿^&*()♆*&^%';
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

