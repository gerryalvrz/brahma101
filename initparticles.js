// Initialize particles.js for the element with id 'particles-js'
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if particlesJS is available
    if (typeof particlesJS === 'undefined') {
        console.error('particlesJS not loaded');
        return;
    }

    // Detect if we're on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
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
            detect_on: isMobile ? 'canvas' : 'window', // Use canvas for mobile touch, window for desktop
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

    console.log('Particles initialized:', isMobile ? 'Mobile' : 'Desktop', 'with', isMobile ? '50' : '150', 'particles');
});

// Fallback initialization if DOMContentLoaded already fired
if (document.readyState === 'loading') {
    // Document still loading, wait for DOMContentLoaded
} else {
    // DOM already loaded, initialize immediately
    if (typeof particlesJS !== 'undefined') {
        // Re-run the initialization
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
    }
}
