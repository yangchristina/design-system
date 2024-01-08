"use client"
import { styled } from '../stitches.config';

export const Banner = styled('div', {
  // Reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',

  variants: {
    size: {
      '1': {
        py: '$1',
        px: '$4',
      },
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
      },
      gray: {
        backgroundColor: '$gray3',
      },
      blue: {
        backgroundColor: '$info3',
      },
      green: {
        backgroundColor: '$green3',
      },
      red: {
        backgroundColor: '$red3',
      },
    },
    rounded: {
      true: {
        borderRadius: '$pill',
      },
    },
    border: {
      true: {
        borderRadius: '$pill',
      },
    },
  },
  compoundVariants: [
    {
      border: 'true',
      variant: 'gray',
      css: {
        borderColor: '$gray6',
      },
    },
    {
      border: 'true',
      variant: 'blue',
      css: {
        borderColor: '$info11',
      },
    },
    {
      border: 'true',
      variant: 'loContrast',
      css: {
        borderColor: '$gray6',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
});
