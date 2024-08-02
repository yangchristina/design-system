"use client"
import { styled } from '../stitches.config';

const baseButtonStyles = {
  position: 'relative',
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$5',
  px: '$2',
  // fontFamily: '$untitled',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$gray2',
    boxShadow: 'inset 0 0 0 1px $colors$gray7',
    color: '$gray8',
    pointerEvents: 'none',
  },
} as const

export const buttonStyles = {
  ...baseButtonStyles,
  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        px: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$5',
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6',
      },
      '3': {
        borderRadius: '$2',
        height: '$7',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary3',
        boxShadow: 'inset 0 0 0 1px $colors$primary11',
      },
      gray: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$gray7',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$gray8',
          },
        },
        '&:active': {
          backgroundColor: '$gray2',
          boxShadow: 'inset 0 0 0 1px $colors$gray8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$gray4',
          boxShadow: 'inset 0 0 0 1px $colors$gray8',
        },
      },
      blue: {
        backgroundColor: '$info2',
        boxShadow: 'inset 0 0 0 1px $colors$info7',
        color: '$info11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$info8',
          },
        },
        '&:active': {
          backgroundColor: '$info3',
          boxShadow: 'inset 0 0 0 1px $colors$info8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$info8, 0 0 0 1px $colors$info8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$info4',
          boxShadow: 'inset 0 0 0 1px $colors$info8',
        },
      },
      green: {
        backgroundColor: '$success2',
        boxShadow: 'inset 0 0 0 1px $colors$success7',
        color: '$success11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$success8',
          },
        },
        '&:active': {
          backgroundColor: '$success3',
          boxShadow: 'inset 0 0 0 1px $colors$success8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$success8, 0 0 0 1px $colors$success8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$success4',
          boxShadow: 'inset 0 0 0 1px $colors$success8',
        },
      },
      red: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$gray7',
        color: '$error11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$gray8',
          },
        },
        '&:active': {
          backgroundColor: '$error3',
          boxShadow: 'inset 0 0 0 1px $colors$error8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$error8, 0 0 0 1px $colors$error8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$error4',
          boxShadow: 'inset 0 0 0 1px $colors$error8',
        },
      },
      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: '$loContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,100%,100%,.25)',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },
      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,0%,0%,.25)',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$gray4',
        boxShadow: 'inset 0 0 0 1px $colors$gray8',
        color: '$gray11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$gray5',
            boxShadow: 'inset 0 0 0 1px $colors$gray8',
          },
        },
        '&:active': {
          backgroundColor: '$gray5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8',
        },
      },
      waiting: {
        backgroundColor: '$gray4',
        boxShadow: 'inset 0 0 0 1px $colors$gray8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$gray5',
            boxShadow: 'inset 0 0 0 1px $colors$gray8',
          },
        },
        '&:active': {
          backgroundColor: '$gray5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gray8',
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  } as const,
  compoundVariants: [
    {
      variant: 'gray',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$grayA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$grayA4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$grayA8, 0 0 0 1px $colors$grayA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$grayA4',
          boxShadow: 'none',
        },
      },
    },
    {
      variant: 'blue',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$infoA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$infoA4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$infoA8, 0 0 0 1px $colors$infoA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$infoA4',
          boxShadow: 'none',
        },
      },
    },
    {
      variant: 'green',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$successA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$successA4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$successA8, 0 0 0 1px $colors$successA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$successA4',
          boxShadow: 'none',
        },
      },
    },
    {
      variant: 'red',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$errorA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$errorA4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$errorA8, 0 0 0 1px $colors$errorA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$errorA4',
          boxShadow: 'none',
        },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  } as const,
}

export const Button = styled('button', buttonStyles);