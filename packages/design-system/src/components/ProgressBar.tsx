"use client"
import React from 'react';
import { styled } from '@planda/styled-system/jsx'
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, RecipeVariantProps } from '@planda/styled-system/css';

const progressBar = cva({
  variants: {
    variant: {
      gray: {
        background: "$gray8"
      },
      blue: {
        backgroundColor: "$info9"
      },
      gradient: {
        backgroundImage: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      }
    },
    thickness: {
      1: {},
      2: {},
      3: {}
    },
    orientation: {
      horizontal: {
        width: "100%",
        height: "$1"
      },
      vertical: {
        height: "100%",
        width: "$1"
      }
    }
  },
  defaultVariants: {
    variant: "gray",
    orientation: "horizontal"
  },
  compoundVariants: [
    {
      thickness: 1,
      orientation: "horizontal",
      css: {
        height: "$1"
      }
    },
    {
      thickness: 2,
      orientation: "horizontal",
      css: {
        height: "$2"
      }
    },
    {
      thickness: 3,
      orientation: "horizontal",
      css: {
        height: "$3"
      }
    },
    {
      thickness: 1,
      orientation: "vertical",
      css: {
        width: "$1"
      }
    },
    {
      thickness: 2,
      orientation: "vertical",
      css: {
        width: "$2"
      }
    },
    {
      thickness: 3,
      orientation: "vertical",
      css: {
        width: "$3"
      }
    }
  ],
  base: {
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    borderRadius: "$pill",
    transform: "translateZ(0)",
    "&[data-state=\"indeterminate\"]": {
      backgroundColor: "$gray4",
      _after: {
        animationName: "indeterminateProgress",
        animationDuration: "1500ms",
        animationIterationCount: "infinite",
        animationTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
        backgroundColor: "$gray7",
        boxSizing: "border-box",
        borderRadius: "$pill",
        content: "\"\"",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: "5%"
      }
    }
  }
})

const StyledProgressBar = styled(ProgressPrimitive.Root, progressBar);

const ProgressBarIndicator = styled(ProgressPrimitive.Indicator, {
  variants: {
    orientation: {
      horizontal: {
        width: "100%"
      },
      vertical: {
        height: "100%"
      }
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  },
  base: {
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "$gray4",
    transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)"
  }
});

type ProgressBarVariants = RecipeVariantProps<typeof progressBar>;
type ProgressBarPrimitiveProps = React.ComponentProps<typeof ProgressPrimitive.Root>;
type ProgressBarProps = ProgressBarPrimitiveProps & ProgressBarVariants;

export const ProgressBar = React.forwardRef<
  React.ElementRef<typeof StyledProgressBar>,
  ProgressBarProps
>(({ value, max = 100, ...props }, forwardedRef) => {
  const percentage = value != null ? Math.round((value / max) * 100) : null;

  return (
    <StyledProgressBar {...props} ref={forwardedRef} value={value} max={max}>
      <ProgressBarIndicator style={{ transform: props.orientation === 'vertical' ? `translateY(${percentage}%)` : `translateX(${percentage}%)` }} />
    </StyledProgressBar>
  );
});
