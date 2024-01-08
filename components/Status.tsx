"use client"
import { styled } from '../stitches.config';

export const Status = styled('div', {
  borderRadius: '50%',
  flexShrink: 0,

  variants: {
    size: {
      '1': {
        width: 5,
        height: 5,
      },
      '2': {
        width: 9,
        height: 9,
      },
    },
    variant: {
      gray: {
        backgroundColor: '$gray7',
      },
      blue: {
        backgroundColor: '$info9',
      },
      green: {
        backgroundColor: '$green9',
      },
      yellow: {
        backgroundColor: '$yellow9',
      },
      red: {
        backgroundColor: '$red9',
      },
    },
  },
  defaultVariants: {
    size: '2',
    variant: 'gray',
  },
});
