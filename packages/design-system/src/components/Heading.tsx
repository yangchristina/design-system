"use client"
import React from 'react';
import { text, TextVariantProps } from '@planda/styled-system/recipes';
import { cva, cx } from '@planda/styled-system/css';

const DEFAULT_TAG = 'h1';

// type TextSizeVariants = Pick<TextVariants, 'size'>;
type HeadingSizeVariants = '1' | '2' | '3' | '4';
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<TextVariantProps, 'size'>;
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> & HeadingVariants;

// This is the mapping of Heading Variants to Text variants
const textSize = {
  '1': { base: '4', '@bp2': '5' },
  '2': { base: '6', '@bp2': '7' },
  '3': { base: '7', '@bp2': '8' },
  '4': { base: '8', '@bp2': '9' },
} as const;

// This is the mapping of Heading Variants to Text css
const textCss = cva({
  base: {
    fontVariantNumeric: 'proportional-nums',
  },
  variants: {
    size: {
      '1': { fontWeight: 500, lineHeight: '20px', '@bp2': { lineHeight: '23px' } },
      '2': { fontWeight: 500, lineHeight: '25px', '@bp2': { lineHeight: '30px' } },
      '3': { fontWeight: 500, lineHeight: '33px', '@bp2': { lineHeight: '41px' } },
      '4': { fontWeight: 500, lineHeight: '35px', '@bp2': { lineHeight: '55px' } },
    }
  }
});

export const Heading = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, HeadingProps>(
  (props, forwardedRef) => {
    // '2' here is the default heading size variant
    const { size = "1", className, ...textProps } = props;

    return (
      <h1
        {...textProps}
        ref={forwardedRef}
        className={cx(text({ size: textSize[size] }), textCss({
          size,
        }), className)}
      />
    )

    // return (
    //   <Text
    //     as={DEFAULT_TAG}
    //     {...textProps}
    //     ref={forwardedRef}
    //     size={{ '@bp2': 5}}
    //     className={css({
    //       fontVariantNumeric: 'proportional-nums',
    //       ...merge(textCss[size], props.css),
    //     })}
    //   />
    // );
  }
);
