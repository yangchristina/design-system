"use client"
import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ThemeProvider } from 'next-themes';
import { providerThemes } from "../stitches.config";

type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
interface DesignSystemProviderProps extends TooltipProviderProps {
  themes?: any;
  defaultTheme?: string;
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

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({ themes, defaultTheme = 'teal', ...props }) => {
  return <ThemeProvider
    attribute="class"
    defaultTheme={defaultTheme} // normally leave as system
    value={{ ...providerThemes, ...themes, }}
  > <TooltipProvider {...props} /></ThemeProvider >;
};

export const DesignSystemTooltipOnlyProvider: React.FC<DesignSystemProviderProps> = (props) => {
  return <TooltipProvider {...props} />
};
