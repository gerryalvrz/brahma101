// Initialize particles.js for the element with id 'particles-js'
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== PARTICLES INITIALIZATION START ===');
    console.log('DOM Content Loaded event fired');
    
    // Check if particlesJS is available
    if (typeof particlesJS === 'undefined') {
        console.error('❌ particlesJS not loaded');
        return;
    }
    console.log('✅ particlesJS is available');

    // Detect if we're on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log('📱 Device detection:', isMobile ? 'Mobile' : 'Desktop');
    console.log('🌐 User Agent:', navigator.userAgent);
    
    // Check if particles container exists
    const particlesContainer = document.getElementById('particles-js');
    if (!particlesContainer) {
        console.error('❌ Particles container not found');
        return;
    }
    console.log('✅ Particles container found');
    
    console.log('🚀 Initializing particles with config...');
    particlesJS('particles-js', {
        particles: {
            number: {
                value: isMobile ? 100 : 200, // More particles on desktop, fewer on mobile
                density: {
                    enable: true,
                    value_area: 800 // Area covered by particles
                }
            },
            color: {
                value: '#00ff00' // Color of particles (neon green for Matrix theme)
            },
            shape: {
                type: 'circle', // Shape of particles
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true, // Makes opacity of particles slightly varied
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true, // Makes particles of slightly different sizes
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150, // Distance between linked particles
                color: '#00ff00', // Link color
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: isMobile ? 1 : 3, // Slower on mobile, faster on desktop
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false
                }
            }
        },
        interactivity: {
            detect_on: 'window', // Use window for better compatibility
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse' // Behavior of particles on hover
                },
                onclick: {
                    enable: true,
                    mode: 'push' // Adds more particles on click
                },
                ontouchstart: {
                    enable: true,
                    mode: 'repulse'
                },
                ontouchmove: {
                    enable: true,
                    mode: 'repulse'
                },
                ontouchend: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true // Adjusts particles to canvas size
            },
            modes: {
                grab: {
                    distance: 400,
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
                    distance: isMobile ? 100 : 150 // Shorter distance on mobile
                },
                push: {
                    particles_nb: isMobile ? 2 : 6 // Fewer particles on mobile, more on desktop
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true // Ensures particles look sharp on high-DPI screens
    });

    console.log('✅ Particles initialized:', isMobile ? 'Mobile' : 'Desktop', 'with', isMobile ? '100' : '200', 'particles');
    
    // Create spawnParticles function that works with all events
    window.spawnParticles = function(event) {
        console.log('🎯 spawnParticles called with event:', event.type);
        console.log('📍 Event details:', {
            type: event.type,
            clientX: event.clientX,
            clientY: event.clientY,
            touches: event.touches ? event.touches.length : 0,
            target: event.target.tagName
        });
        
        // Get the particles container
        const particlesContainer = document.getElementById('particles-js');
        if (!particlesContainer) {
            console.error('❌ Particles container not found in spawnParticles');
            return;
        }
        
        // Get the canvas
        const canvas = particlesContainer.querySelector('canvas');
        if (!canvas) {
            console.error('❌ Particles canvas not found in spawnParticles');
            return;
        }
        
        // Get coordinates from the event
        let clientX, clientY;
        
        if (event.type === 'touchstart' || event.type === 'touchmove' || event.type === 'touchend') {
            // Touch event
            if (event.touches && event.touches.length > 0) {
                clientX = event.touches[0].clientX;
                clientY = event.touches[0].clientY;
                console.log('📱 Touch coordinates:', clientX, clientY);
            } else if (event.changedTouches && event.changedTouches.length > 0) {
                clientX = event.changedTouches[0].clientX;
                clientY = event.changedTouches[0].clientY;
                console.log('📱 Changed touch coordinates:', clientX, clientY);
            }
        } else {
            // Mouse or pointer event
            clientX = event.clientX;
            clientY = event.clientY;
            console.log('🖱️ Mouse coordinates:', clientX, clientY);
        }
        
        if (clientX !== undefined && clientY !== undefined) {
            console.log('🎯 Spawning particles at:', clientX, clientY);
            
            // Create a mouse event to trigger particle interaction
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: clientX,
                clientY: clientY,
                bubbles: true,
                cancelable: true
            });
            
            console.log('📤 Dispatching mouse event to canvas and window');
            // Dispatch the event on the canvas
            canvas.dispatchEvent(mouseEvent);
            
            // Also try dispatching on the window
            window.dispatchEvent(mouseEvent);
        } else {
            console.warn('⚠️ No coordinates found in event');
        }
    };
    
    // Add event listeners for all types of events
    setTimeout(function() {
        console.log('⏰ Setting up event listeners...');
        const particlesContainer = document.getElementById('particles-js');
        const canvas = particlesContainer.querySelector('canvas');
        
        if (canvas) {
            console.log('✅ Canvas found, adding event listeners');
            
            // Add event listeners for all interaction types
            canvas.addEventListener('click', window.spawnParticles);
            canvas.addEventListener('touchstart', window.spawnParticles);
            canvas.addEventListener('pointerdown', window.spawnParticles);
            
            // Also add to the container
            particlesContainer.addEventListener('click', window.spawnParticles);
            particlesContainer.addEventListener('touchstart', window.spawnParticles);
            particlesContainer.addEventListener('pointerdown', window.spawnParticles);
            
            console.log('✅ Event listeners added for spawnParticles function');
            console.log('🎯 Canvas style properties:', {
                pointerEvents: canvas.style.pointerEvents,
                touchAction: canvas.style.touchAction,
                zIndex: canvas.style.zIndex
            });
        } else {
            console.error('❌ Canvas not found for event listeners');
        }
        
        console.log('=== PARTICLES INITIALIZATION COMPLETE ===');
    }, 1000);
});

// Fallback initialization if DOMContentLoaded already fired
if (document.readyState === 'loading') {
    console.log('📄 Document still loading, waiting for DOMContentLoaded');
    // Document still loading, wait for DOMContentLoaded
} else {
    console.log('📄 Document already loaded, checking particlesJS');
    // DOM already loaded, initialize immediately
    if (typeof particlesJS !== 'undefined') {
        console.log('🔄 DOM already loaded, re-running initialization');
        // Re-run the initialization
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    } else {
        console.error('❌ particlesJS not available in fallback');
    }
}
