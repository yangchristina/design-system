"use client"
import { styled } from '../../stitches.config';

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    variant: {
      red: {
        color: '$error11',
      },
      blue: {
        color: '$info11',
      },
      green: {
        color: '$success11',
      },
      gray: {
        color: '$gray11',
      },
      contrast: {
        color: '$hiContrast',
      },
      loContrast: {
        color: '$loContrast',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'blue',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $info11, $cyan11)',
      },
    },
    {
      variant: 'green',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $success11, $lime11)',
      },
    },
    {
      variant: 'gray',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $gray11, $gray12)',
      },
    },
    {
      variant: 'contrast',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $hiContrast, $gray12)',
      },
    },
  ],
  defaultVariants: {
    size: '3',
    // variant: 'contrast',
  },
});
