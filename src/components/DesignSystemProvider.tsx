"use client"
import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ThemeProvider } from 'next-themes';
import { providerThemes } from "../stitches.config";
// import '@radix-ui/themes/styles.css';
// import Theme from './Theme';

type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
interface DesignSystemProviderProps extends TooltipProviderProps {
  themes?: any;
  defaultTheme?: string;
  enableSystem?: boolean;
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

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({ themes, defaultTheme = 'teal', enableSystem = false, ...props }) => {
  return <ThemeProvider
    attribute="class"
    defaultTheme={defaultTheme} // normally leave as system
    enableSystem={enableSystem}
    value={{ ...providerThemes, ...themes, }}
  ><TooltipProvider {...props} /></ThemeProvider >;
};

export const DesignSystemTooltipOnlyProvider: React.FC<DesignSystemProviderProps> = (props) => {
  return <TooltipProvider {...props} />
};
