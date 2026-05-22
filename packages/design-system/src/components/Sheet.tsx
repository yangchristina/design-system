"use client"
import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import { DialogBrightness, overlayStyles } from './Overlay';
import { IconButton } from './IconButton';
import { styled } from '@planda/styled-system/jsx';
import { RecipeVariantProps } from '@planda/styled-system/types';
import { cva } from '@planda/styled-system/css';

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  defaultProps: {
    dialog: true
  }
});

const styledContent = cva({
  base: {
    backgroundColor: '$panel',
    boxShadow: '{colors.$shadowLight} 0 0 38px -10px, {colors.$shadowDark} 0 0 35px -15px',
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: 250,
    zIndex: '$3',

    // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
    // Affects animated and non-animated dialogs alike.
    willChange: 'transform',

    // '&:focus': {
    //   outline: 'none',
    // },

    '&[data-state="open"]': {
      animation: `slideIn 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },

    '&[data-state="closed"]': {
      animation: `slideOut 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
  },

  variants: {
    side: {
      top: {
        '--transformValue': 'translate3d(0,-100%,0)',
        width: '100%',
        height: 300,
        bottom: 'auto',
      },
      right: {
        '--transformValue': 'translate3d(100%,0,0)',
        right: 0,
      },
      bottom: {
        '--transformValue': 'translate3d(0,100%,0)',
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto',
      },
      left: {
        '--transformValue': 'translate3d(-100%,0,0)',
        left: 0,
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
})

const StyledContent = styled(DialogPrimitive.Content, styledContent);

const StyledCloseButton = styled(DialogPrimitive.Close, {
  base: {
    position: 'absolute',
    top: '$2',
    right: '$2',
  }
});

type SheetContentVariants = RecipeVariantProps<typeof styledContent>;
type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type SheetContentProps = DialogContentPrimitiveProps & SheetContentVariants & { dialogBrightness?: DialogBrightness };

const SheetContent = React.forwardRef<React.ElementRef<typeof StyledContent>, SheetContentProps>(
  ({ children, dialogBrightness, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <StyledOverlay brightness={dialogBrightness} />
      <StyledContent {...props} ref={forwardedRef}>
        {children}
        <StyledCloseButton asChild>
          <IconButton variant="ghost">
            <Cross1Icon />
          </IconButton>
        </StyledCloseButton>
      </StyledContent>
    </DialogPrimitive.Portal>
  )
);

const SheetClose = DialogPrimitive.Close;
const SheetTitle = DialogPrimitive.Title;
const SheetDescription = DialogPrimitive.Description;

export { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle, SheetDescription };
