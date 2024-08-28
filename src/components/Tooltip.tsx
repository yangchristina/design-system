"use client"
import React from 'react';
import { styled } from '../stitches.config';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { Box } from './Box';
import { Text } from '../../pending/components/Text';
import { token } from '@planda/styled-system/tokens';

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipProps = TooltipPrimitiveProps &
  React.ComponentProps<typeof TooltipPrimitive.Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
  };

const StyledContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$transparentPanel',
  borderRadius: '$1',
  padding: '$1 $2',
  zIndex: 9999,

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
});

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  multiline,
  ...props
}: TooltipProps) {
  const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };
  return (
    <TooltipPrimitive.Root {...rootProps}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        {/* @ts-expect-error */}
        <StyledContent side="top" align="center" sideOffset={5} {...props} multiline={multiline}>
          <Text
            size="1"
            variant={'loContrast'}
            style={{
              color: token(`colors.$loContrast`),
              lineHeight: multiline ? '20px' : (undefined as any),
            }}
          >
            {content}
          </Text>
          <Box css={{ color: '$transparentExtreme' }}>
            <TooltipPrimitive.Arrow width={11} height={5} style={{ fill: 'currentColor' }} />
          </Box>
        </StyledContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
