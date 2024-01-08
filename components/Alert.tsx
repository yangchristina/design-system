"use client"
import { styled } from '../stitches.config';

export const Alert = styled('div', {
  // Reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  border: '1px solid',
  borderRadius: '$2',

  variants: {
    size: {
      '1': {
        p: '$3',
      },
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
        borderColor: '$gray6',
      },
      gray: {
        backgroundColor: '$gray2',
        borderColor: '$gray6',
      },
      blue: {
        backgroundColor: '$info2',
        borderColor: '$info6',
      },
      green: {
        backgroundColor: '$success2',
        borderColor: '$success6',
      },
      red: {
        backgroundColor: '$red2',
        borderColor: '$red6',
      },
    },
  },
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
});
