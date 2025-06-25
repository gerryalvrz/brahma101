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
                value: isMobile ? 50 : 100, // Fewer particles on mobile for better performance
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
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
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
                speed: isMobile ? 1 : 2, // Slower on mobile
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
            detect_on: 'canvas', // Use canvas instead of window for better compatibility
            events: {
                onhover: {
                    enable: !isMobile, // Disable hover on mobile
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                ontouchstart: {
                    enable: isMobile, // Enable touch on mobile
                    mode: 'repulse'
                },
                ontouchmove: {
                    enable: isMobile, // Enable touch on mobile
                    mode: 'repulse'
                },
                ontouchend: {
                    enable: isMobile, // Enable touch on mobile
                    mode: 'repulse'
                },
                resize: true
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
                    distance: isMobile ? 50 : 100 // Shorter distance on mobile
                },
                push: {
                    particles_nb: isMobile ? 2 : 4 // Fewer particles on mobile
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    console.log('Particles initialized with mobile optimization:', isMobile);
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
