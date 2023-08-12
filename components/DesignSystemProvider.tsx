"use client"
import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ThemeProvider } from 'next-themes';
import { providerThemes } from "../stitches.config";

type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
interface DesignSystemProviderProps extends TooltipProviderProps {
  themes?: any;
}

const mergeThemes = (themes1: Record<string, string>, themes2: Record<string, string>) => {
  const mergedThemes = { ...themes1 };
  Object.entries(themes2).forEach(([key, val]) => {
    if (mergedThemes[key]) {
      mergedThemes[key] = `${mergedThemes[key]} ${val}`;
    } else {
      mergedThemes[key] = val;
    }
  });
  return mergedThemes;
}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({ themes, ...props }) => {
  return <ThemeProvider
    attribute="class"
    defaultTheme="teal" // normally leave as system
    value={mergeThemes(providerThemes, themes)}
  ><TooltipProvider {...props} /></ThemeProvider>;
};


export const DesignSystemTooltipOnlyProvider: React.FC<DesignSystemProviderProps> = (props) => {
  return <TooltipProvider {...props} />
};
