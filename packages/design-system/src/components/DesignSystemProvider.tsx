"use client"
import React from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
// import '@radix-ui/themes/styles.css';
// import Theme from './Theme';

type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>;
interface DesignSystemProviderProps extends TooltipProviderProps {
  themes?: any;
  defaultTheme?: string;
  enableSystem?: boolean;
}

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({ themes, defaultTheme = 'teal', enableSystem, ...props }) => {
  return <TooltipProvider {...props} />
};

export const DesignSystemTooltipOnlyProvider: React.FC<DesignSystemProviderProps> = (props) => {
  return <TooltipProvider {...props} />
};
