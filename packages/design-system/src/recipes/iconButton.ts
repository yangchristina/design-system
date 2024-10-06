import { defineRecipe } from '@pandacss/dev';

const iconButtonRecipe = defineRecipe({
    className: 'ds-icon-button',
    base: {
        // Reset
        alignItems: 'center',
        appearance: 'none',
        borderWidth: '0',
        boxSizing: 'border-box',
        display: 'inline-flex',
        flexShrink: 0,
        fontFamily: 'inherit',
        fontSize: '14px',
        justifyContent: 'center',
        lineHeight: '1',
        outline: 'none',
        padding: '0',
        textDecoration: 'none',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        color: '$hiContrast',
        '&::before': {
            boxSizing: 'border-box',
        },
        '&::after': {
            boxSizing: 'border-box',
        },
        // _hover: {
        //   '&:hover': {
        //     borderColor: '$gray8',
        //   },
        // },
        '&:active': {
            backgroundColor: '$gray2',
        },
        '&:focus': {
            borderColor: '$gray8',
            boxShadow: '0 0 0 1px {colors.$gray8}',
        },
        '&:disabled': {
            pointerEvents: 'none',
            backgroundColor: 'transparent',
            color: '$gray6',
        },
    },
    variants: {
        size: {
            1: {
                borderRadius: '$1',
                height: '$5',
                width: '$5',
            },
            2: {
                borderRadius: '$2',
                height: '$6',
                width: '$6',
            },
            3: {
                borderRadius: '$2',
                height: '$7',
                width: '$7',
            },
            4: {
                borderRadius: '$3',
                height: '$8',
                width: '$8',
            },
            auto: {
                borderRadius: '$1',
                height: 'auto',
                width: 'auto',
                padding: '$1',
            },
        },
        variant: {
            solid: {
                backgroundColor: '$loContrast',
                border: '1px solid {colors.$gray7}',
                _hover: {
                    '&:hover': {
                        borderColor: '$gray8',
                    },
                },
            },
            ghost: {
                backgroundColor: 'transparent',
                borderWidth: '0',
                _hover: {
                    '&:hover': {
                        backgroundColor: '$grayA3',
                    },
                },
                '&:focus': {
                    boxShadow: 'inset 0 0 0 1px {colors.$grayA8}, 0 0 0 1px {colors.$grayA8}',
                },
                '&:active': {
                    backgroundColor: '$grayA4',
                },
                '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
                    backgroundColor: '$grayA4',
                },
            },
            raised: {
                boxShadow: '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
                _hover: {
                    '&:hover': {
                        boxShadow: '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
                    },
                },
                '&:focus': {
                    borderColor: '$gray8',
                    boxShadow: '0 0 0 1px {colors.$gray8}, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
                },
                '&:active': {
                    backgroundColor: '$gray4',
                },
            },
        },
        state: {
            active: {
                backgroundColor: '$gray4',
                boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
                _hover: {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
                    },
                },
                '&:active': {
                    backgroundColor: '$gray4',
                },
            },
            waiting: {
                backgroundColor: '$gray4',
                boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
                _hover: {
                    '&:hover': {
                        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
                    },
                },
                '&:active': {
                    backgroundColor: '$gray4',
                },
            },
        },
        inverted: {
            true: {
                backgroundColor: '$hiContrast',
                color: '$loContrast',
                _hover: {
                    '&:hover': {
                        backgroundColor: '$grayDarkA3',
                    },
                },
            },
        },
    },
    defaultVariants: {
        size: 1,
        variant: 'ghost',
    },
});

export default iconButtonRecipe;
