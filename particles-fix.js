// Simple particles fix - ensure particles work without blocking buttons
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            // Ensure particles stay behind content and don't capture events
            particlesContainer.style.zIndex = '-1';
            particlesContainer.style.pointerEvents = 'none';
            
            const canvas = particlesContainer.querySelector('canvas');
            if (canvas) {
                canvas.style.pointerEvents = 'none';
            }
        }
    }, 1000);
});

// Additional fix for Safari's touch handling
if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
    document.addEventListener('DOMContentLoaded', function() {
        // Safari-specific fixes
        const style = document.createElement('style');
        style.textContent = `
            #particles-js canvas {
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                touch-action: none;
                pointer-events: auto; /* Allow interaction on Safari */
            }
            
            #particles-js {
                pointer-events: auto; /* Allow interaction on Safari */
            }
        `;
        document.head.appendChild(style);
    });
} 