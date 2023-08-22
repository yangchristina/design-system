"use client"
import { styled, css } from '../stitches.config';

export type DialogBrightness = 'dark' | 'medium' | 'medium-light' | 'light' | 'lighter' | 'none';

export const overlayStyles = css({
  background: 'rgba(0, 0, 0, .15)',
  variants: {
    brightness: {
      'dark': {
        backgroundColor: '$overlay9',
      },
      'medium': {
        backgroundColor: '$overlay8',
      },
      'medium-light': {
        backgroundColor: '$overlay6',
      },
      'light': {
        backgroundColor: '$overlay5',
      },
      'lighter': {
        backgroundColor: '$overlay4',
      },
      'none': {
        backgroundColor: 'transparent',
      }
    }
  }
});

export const Overlay = styled('div', overlayStyles);
