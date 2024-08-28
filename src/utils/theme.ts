import { mod } from './math';
import { allThemeNames } from './panda-css';

export default function getNextTheme(theme = '', inc = 1, type?: 'light' | 'dark') {
    let themeNames = allThemeNames;
    if (type) themeNames = themeNames.filter((name) => (type === 'dark' ? name.toLowerCase().includes('dark') : !name.toLowerCase().includes('dark')));

    const index = themeNames.indexOf(theme) + inc;

    return themeNames[mod(index, themeNames.length)];
}

export const isDarkTheme = (theme: string | undefined) => {
    return !!theme?.toLowerCase().includes('dark');
};
