"use client"
import { styled, css } from '../../stitches.config';

export type DialogBrightness = 'dark' | 'medium' | 'medium-light' | 'light' | 'lighter' | 'none';

export const overlayStyles = css({
  background: 'rgba(0, 0, 0, .15)',
  variants: {
    brightness: {
      'dark': {
        backgroundColor: '$overlay5',
      },
      'medium': {
        backgroundColor: '$overlay4',
      },
      'medium-light': {
        backgroundColor: '$overlay3',
      },
      'light': {
        backgroundColor: '$overlay2',
      },
      'lighter': {
        backgroundColor: '$overlay1',
      },
      'none': {
        backgroundColor: 'transparent',
      }
    }
  }
});

export const Overlay = styled('div', overlayStyles);
