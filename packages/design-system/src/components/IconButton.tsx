"use client"
import { styled } from "@planda/styled-system/jsx";
import { iconButton } from "@planda/styled-system/recipes";
// export const IconButton = styled('button', {
//   all: 'unset',
//   fontFamily: 'inherit',
//   borderRadius: '100%',
//   height: 25,
//   width: 25,
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: '$gray11',
//   top: 10,
//   right: 10,

//   '&:hover': { backgroundColor: '$overlay4' },
//   '&:focus': { boxShadow: `0 0 0 2px {colors.$gray7}` },
// });

export const IconButton = styled('button', iconButton);


export const GhostIconButton = styled('button', {
  base: {
    // Reset
    alignItems: 'center',
    appearance: 'none',
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
    '&:disabled': {
      pointerEvents: 'none',
      backgroundColor: 'transparent',
      color: '$gray6',
    },
    borderRadius: '$1',
    height: '$5',
    width: '$5',
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
  variants: {
    size: {
      1: {},
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
    },
    inverted: {
      true: {
        backgroundColor: '$hiContrast',
        color: '$loContrast',
        _hover: {
          '&:hover': {
            '&::before': {
              content: "",
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '$grayDarkA3', /* Change the color and opacity as needed */
            }
          },
        },
      }
    }
  },
});
