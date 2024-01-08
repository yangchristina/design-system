"use client"
import { styled } from '../stitches.config';
import { Text } from './Text';

export const Link = styled('a', {
  alignItems: 'center',
  gap: '$1',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$gray4',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },
  [`& ${Text}`]: {
    color: 'inherit',
  },
  variants: {
    variant: {
      blue: {
        color: '$blue11',
        textDecorationColor: '$blue4',
        '&:focus': {
          outlineColor: '$blue8',
        },
      },
      subtle: {
        color: '$gray11',
        textDecorationColor: '$gray4',
        '&:focus': {
          outlineColor: '$gray8',
        },
      },
      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$gray4',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$gray7',
          },
        },
        '&:focus': {
          outlineColor: '$gray8',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
});
