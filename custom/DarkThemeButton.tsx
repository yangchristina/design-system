import React from 'react';
import { Button } from '../components/Button';
import { useTheme } from 'next-themes';
import getNextTheme, { isDarkTheme } from '../utils/getNextTheme';

export function DarkThemeButton() {
  // const [theme, setTheme] = React.useState('theme-default');
  const { theme, setTheme } = useTheme();

  return (
    <Button
      style={{ position: 'fixed', zIndex: 999, right: 15, top: 15 }}
      onClick={() => getNextTheme(theme, undefined, isDarkTheme(theme) ? 'light' : 'dark')}
    >
      Toggle theme
    </Button>
  );
}
