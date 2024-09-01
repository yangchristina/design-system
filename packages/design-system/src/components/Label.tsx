"use client"
import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { TextProps } from './Text';
import { text } from '@planda/styled-system/recipes';
import { css, cx } from '@planda/styled-system/css';

type Props = React.ComponentProps<typeof LabelPrimitive.Root>;
export const Label = ({ children, ...props }: TextProps & Props) => {
  return (
    <LabelPrimitive.Root {...props} className={cx(text(props), css({
      display: 'inline-block',
      verticalAlign: 'middle',
      cursor: 'default',
    }))}
    >
      {children}
    </LabelPrimitive.Root>
  );
};
