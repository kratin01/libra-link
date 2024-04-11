export const fadeIn = (direction, delay) => {
    let initialX = 0, initialY = 0;

    switch (direction) {
        case 'up':
            initialY = -40;
            break;
        case 'down':
            initialY = 40;
            break;
        case 'left':
            initialX = -40;
            break;
        case 'right':
            initialX = 40;
            break;
        default:
           
            break;
    }

    return {
        hidden: {
            x: initialX,
            y: initialY,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',//tween, spring, keyframes, inertia, just, ease, custom
                duration: 0.7,
                delay: delay,
                ease: [0.25, 0.75, 0.25, 0.75],
            }
        }
    };
};
