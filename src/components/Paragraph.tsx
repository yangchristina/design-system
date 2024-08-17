"use client"
import React from 'react';
import { Text } from './Text';
import { VariantProps, CSS } from '../stitches.config';
import { text, TextVariantProps } from '@planda/styled-system/recipes';
import { cva, cx } from '@planda/styled-system/css';

const DEFAULT_TAG = 'p';

type TextSizeVariants = Pick<TextVariantProps, 'size'>;
type ParagraphSizeVariants = '1' | '2';
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<VariantProps<typeof Text>, 'size'>;
type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> &
  ParagraphVariants;

const paragraphRecipe = cva({
  variants: {
    size: {
      '1': { lineHeight: '25px', '@bp2': { lineHeight: '27px' } },
      '2': { color: '$gray11', lineHeight: '27px', '@bp2': { lineHeight: '30px' } },
    }
  }
})

const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
  '1': { base: '3', '@bp2': '4' },
  '2': { base: '5', '@bp2': '6' },
};

export const Paragraph = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, ParagraphProps>(
  (props, forwardedRef) => {
    // '2' here is the default Paragraph size variant
    const { size = '1', ...textProps } = props;

    // This is the mapping of Paragraph Variants to Text variants

    return (
      <p
        {...textProps}
        ref={forwardedRef}
        className={cx(text({ size: textSize[size] }), paragraphRecipe({ size }))}
      />
    );
  }
);
