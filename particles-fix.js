// Simple particles fix - ensure particles work without blocking buttons
document.addEventListener('DOMContentLoaded', function() {
    // Detect if we're on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    setTimeout(function() {
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            // Keep particles behind content but allow interaction
            particlesContainer.style.zIndex = '-1';
            particlesContainer.style.pointerEvents = 'auto';
            
            const canvas = particlesContainer.querySelector('canvas');
            if (canvas) {
                canvas.style.pointerEvents = 'auto';
                
                // Mobile-specific optimizations
                if (isMobile) {
                    canvas.style.touchAction = 'none';
                    canvas.style.userSelect = 'none';
                    canvas.style.webkitUserSelect = 'none';
                }
            }
        }
        
        // Ensure buttons and interactive elements work
        const interactiveElements = document.querySelectorAll('button, a, input, .clickable, .button');
        interactiveElements.forEach(function(element) {
            element.style.position = 'relative';
            element.style.zIndex = '1';
        });
        
        console.log('Particles fix applied for:', isMobile ? 'mobile' : 'desktop');
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