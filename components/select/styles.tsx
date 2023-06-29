'use client';

export const selectColorVariants = {
    color: {
        loContrast: {
            backgroundColor: '$loContrast',
            boxShadow: '$border',
        },
        hiContrast: {
            backgroundColor: '$hiContrast',
            color: '$gray1',
            '&:hover': { backgroundColor: '$gray9' },
            '&:focus': { boxShadow: `$focus` },
            '&[data-placeholder]': { color: '$gray2' },
        },
        outline: {
            backgroundColor: '$loContrast',
            boxShadow: '$borderHiContrast',
        },
        primary: {
            backgroundColor: '$primary2',
        },
        secondary: {
            backgroundColor: '$secondary2',
        },
    },
    error: {
        true: {
            color: '$error11',
            boxShadow: `$error`,
        }
    }
} as const;
