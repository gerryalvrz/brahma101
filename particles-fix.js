// Simple particles fix - ensure particles work without blocking buttons
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 PARTICLES-FIX: Starting...');
    
    // Detect if we're on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log('🔧 PARTICLES-FIX: Device detection:', isMobile ? 'Mobile' : 'Desktop');
    
    setTimeout(function() {
        console.log('🔧 PARTICLES-FIX: Running after timeout...');
        
        const particlesContainer = document.getElementById('particles-js');
        if (particlesContainer) {
            console.log('🔧 PARTICLES-FIX: Particles container found');
            
            // Keep particles behind content but allow interaction
            particlesContainer.style.zIndex = '-1';
            particlesContainer.style.pointerEvents = 'auto';
            
            console.log('🔧 PARTICLES-FIX: Container styles set:', {
                zIndex: particlesContainer.style.zIndex,
                pointerEvents: particlesContainer.style.pointerEvents
            });
            
            const canvas = particlesContainer.querySelector('canvas');
            if (canvas) {
                console.log('🔧 PARTICLES-FIX: Canvas found');
                canvas.style.pointerEvents = 'auto';
                
                // Mobile-specific optimizations
                if (isMobile) {
                    canvas.style.touchAction = 'none';
                    canvas.style.userSelect = 'none';
                    canvas.style.webkitUserSelect = 'none';
                    
                    console.log('🔧 PARTICLES-FIX: Mobile canvas styles set:', {
                        touchAction: canvas.style.touchAction,
                        userSelect: canvas.style.userSelect,
                        webkitUserSelect: canvas.style.webkitUserSelect
                    });
                }
            } else {
                console.error('🔧 PARTICLES-FIX: Canvas not found');
            }
        } else {
            console.error('🔧 PARTICLES-FIX: Particles container not found');
        }
        
        // Ensure buttons and interactive elements work
        const interactiveElements = document.querySelectorAll('button, a, input, .clickable, .button');
        console.log('🔧 PARTICLES-FIX: Found', interactiveElements.length, 'interactive elements');
        
        interactiveElements.forEach(function(element) {
            element.style.position = 'relative';
            element.style.zIndex = '1';
        });
        
        console.log('🔧 PARTICLES-FIX: Applied to', isMobile ? 'mobile' : 'desktop');
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