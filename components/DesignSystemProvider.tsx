"use client"
import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ThemeProvider } from 'next-themes';
import { providerThemes } from "../stitches.config";

type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
interface DesignSystemProviderProps extends TooltipProviderProps {
  themes?: any;
}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({ themes, ...props }) => {
  console.log("providerThemes", providerThemes)
  console.log("themes", themes)
  return <ThemeProvider
    attribute="class"
    defaultTheme="teal" // normally leave as system
    value={themes || providerThemes}
  ><TooltipProvider {...props} /></ThemeProvider>;
};


export const DesignSystemTooltipOnlyProvider: React.FC<DesignSystemProviderProps> = (props) => {
  return <TooltipProvider {...props} />
};
