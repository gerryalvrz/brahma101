// Particles compatibility fix for Safari and Brave
// This script ensures proper touch and mouse event handling

document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for particles.js to initialize
    setTimeout(function() {
        const particlesContainer = document.getElementById('particles-js');
        if (!particlesContainer) {
            console.warn('Particles container not found');
            return;
        }

        // Get the canvas element created by particles.js
        const canvas = particlesContainer.querySelector('canvas');
        if (!canvas) {
            console.warn('Particles canvas not found');
            return;
        }

        // Ensure canvas has proper touch handling
        canvas.style.touchAction = 'none';
        canvas.style.userSelect = 'none';
        canvas.style.webkitUserSelect = 'none';
        canvas.style.webkitTouchCallout = 'none';

        // Add explicit event listeners for better compatibility
        let isTouching = false;
        let lastTouchX = 0;
        let lastTouchY = 0;

        // Touch events
        canvas.addEventListener('touchstart', function(e) {
            isTouching = true;
            const touch = e.touches[0];
            lastTouchX = touch.clientX;
            lastTouchY = touch.clientY;
            
            // Prevent default to avoid scrolling
            e.preventDefault();
        }, { passive: false });

        canvas.addEventListener('touchmove', function(e) {
            if (!isTouching) return;
            
            const touch = e.touches[0];
            const deltaX = touch.clientX - lastTouchX;
            const deltaY = touch.clientY - lastTouchY;
            
            // Update last position
            lastTouchX = touch.clientX;
            lastTouchY = touch.clientY;
            
            // Prevent default to avoid scrolling
            e.preventDefault();
        }, { passive: false });

        canvas.addEventListener('touchend', function(e) {
            isTouching = false;
            e.preventDefault();
        }, { passive: false });

        // Mouse events for desktop
        canvas.addEventListener('mousedown', function(e) {
            // Ensure mouse events work properly
        });

        canvas.addEventListener('mousemove', function(e) {
            // Ensure hover effects work
        });

        canvas.addEventListener('click', function(e) {
            // Ensure click effects work
        });

        // Force canvas to be interactive
        canvas.style.pointerEvents = 'auto';
        
        // Ensure proper z-index
        particlesContainer.style.zIndex = '1';
        particlesContainer.style.pointerEvents = 'auto';

        console.log('Particles compatibility fix applied');
    }, 1000); // Wait 1 second for particles.js to fully initialize
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
            }
        `;
        document.head.appendChild(style);
    });
} 