// Initialize particles.js for the element with id 'particles-js'
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, // Number of particles
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
            speed: 2, // Movement speed of particles
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
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse' // Behavior of particles on hover
            },
            onclick: {
                enable: true,
                mode: 'push' // Adds more particles on click
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
                distance: 100
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true // Ensures particles look sharp on high-DPI screens
});
