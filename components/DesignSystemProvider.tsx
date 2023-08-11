"use client"
import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ThemeProvider } from 'next-themes';
import { themes } from "../stitches.config";

type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
interface DesignSystemProviderProps extends TooltipProviderProps { }

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = (props) => {

  return <ThemeProvider
    attribute="class"
    defaultTheme="teal" // normally leave as system
    value={themes}
  ><TooltipProvider {...props} /></ThemeProvider>;
};


export const DesignSystemTooltipOnlyProvider: React.FC<DesignSystemProviderProps> = (props) => {
  return <TooltipProvider {...props} />
};
