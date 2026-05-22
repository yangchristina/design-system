"use client"
import { cva } from '@planda/styled-system/css';
import { styled } from '@planda/styled-system/jsx';

export type DialogBrightness = 'dark' | 'medium' | 'medium-light' | 'light' | 'lighter' | 'none';

export const overlayStyles = cva({
  base: { background: 'rgba(0, 0, 0, .15)', },
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
    },
    dialog: {
      true: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: '$2',

        '&[data-state="open"]': {
          animation: `fadeIn 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
        },

        '&[data-state="closed"]': {
          animation: `fadeOut 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
        },
      }
    }
  }
});

export const Overlay = styled('div', overlayStyles);
