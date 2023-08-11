"use client"
import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ThemeProvider } from 'next-themes';
import { providerThemes, themes as myThemes } from "../stitches.config";

type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
interface DesignSystemProviderProps extends TooltipProviderProps {
  themes?: any;
}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({ themes, ...props }) => {

  return <ThemeProvider
    attribute="class"
    defaultTheme="teal" // normally leave as system
    value={themes || providerThemes(myThemes)}
  ><TooltipProvider {...props} /></ThemeProvider>;
};


export const DesignSystemTooltipOnlyProvider: React.FC<DesignSystemProviderProps> = (props) => {
  return <TooltipProvider {...props} />
};
