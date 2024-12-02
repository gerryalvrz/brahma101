// =========================
// Terminal Typing Logic
// =========================

// Messages to display in the terminal
const messages = [
    "Wake up, Neo...",
    "Follow the white rabbit...",
    "(R)evolve... you are the voice of the revolution.",
    "Buidl the hidden patterns of reality...",
    "Reality’s structure is not static...",
    "The Universe is Mental.",
];

// HTML element where messages will appear
const terminalOutput = document.getElementById('terminal-output');

// Initialize counters for the typing effect
let currentMessageIndex = 0;
let currentCharacterIndex = 0;

// Typing Effect Logic
function typeMessage() {
    if (currentMessageIndex < messages.length) {
        const currentMessage = messages[currentMessageIndex];

        // Clear old message when starting a new one
        if (currentCharacterIndex === 0) {
            terminalOutput.textContent = ""; // Clear terminal content
        }

        // Add characters one by one
        if (currentCharacterIndex < currentMessage.length) {
            terminalOutput.innerHTML =
                currentMessage.slice(0, currentCharacterIndex + 1) + '<span class="blinking-cursor"></span>';
            currentCharacterIndex++;
            setTimeout(typeMessage, 100); // Adjust typing speed
        } else {
            // Finished typing the current message
            currentCharacterIndex = 0;
            currentMessageIndex++;
            console.log(`Finished typing message ${currentMessageIndex}/${messages.length}`);
            setTimeout(typeMessage, 1500); // Pause before the next message
        }
    } else {
        // Loop back to the first message
        currentMessageIndex = 0;
        console.log("Looping back to the first message...");
        setTimeout(typeMessage, 1500);
    }
}

// Start the typing effect when the page loads
window.onload = typeMessage;
