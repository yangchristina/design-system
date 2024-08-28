import { defineKeyframes } from '@pandacss/dev';

export const keyframes = defineKeyframes({
    fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
    },
    fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
    },
    slideIn: {
        from: { transform: '$$transformValue' },
        to: { transform: 'translate3d(0,0,0)' },
    },
    slideOut: {
        from: { transform: 'translate3d(0,0,0)' },
        to: { transform: '$$transformValue' },
    },
    indeterminateProgress: {
        '0%': {
            transform: 'scaleX(1) translateX(-100%)',
            transformOrigin: 'left',
        },
        '50%': {
            transform: 'scaleX(1) translateX(1000%)',
            transformOrigin: 'left',
        },
        '100%': {
            transform: 'scaleX(1) translateX(2000%)',
            transformOrigin: 'left',
        },
    },
    spin: {
        '0%': { top: '8px', height: '64px' },
        '50%, 100%': { top: '24px', height: '32px' },
    },
});
