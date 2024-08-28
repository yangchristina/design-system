import { mapObject } from '../utils';
import { ColorBase, ColorTheme } from './types';

const avocadoVariables = {
    tan2v: '#d2b48c',
    gray1v: '#d1d1d1',
    brown1v: '#917d63',
    brown2v: '#7a6850',
    lightbrownv: '#ab977d',

    // ltan3: '#ede7da',
    // ltan: '#f0e2c5',
    // ltan2: '#faeccf',
    lbrownv: '#c9bea7',
    tanv: '#d6c9b6',
    // text: '$hiContrast',
    // lightgreen: '#edf5e6',
    // green1: '#bdccaf',
    // lightgreen2: '#dfebd5',
    lightgreen3v: '#d2e0c5',
    // darkgreen: '#547556',
};

const crimsonTheme: ColorBase = {
    primary: 'crimson',
    secondary: 'ruby',
    accent: 'crimson',
    gray: 'mauve',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
};

const tealTheme: ColorBase = {
    primary: 'teal',
    secondary: 'mint',
    accent: 'teal',
    gray: 'sage',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
};

const indigoTheme: ColorBase = {
    primary: 'indigo',
    secondary: 'jade',
    accent: 'indigo',
    gray: 'slate',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
};

// (avocadoTheme, true, 'grass', 'olive', 'red', 'green', 'blue', 'yellow', avocadoVariables, 'gold')
const avocadoTheme = {
    primary: 'grass',
    secondary: 'gold',
    accent: 'grass',
    gray: 'olive',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
    isLight: true,
};

const libraryTheme = {
    primary: 'brown',
    secondary: 'lime',
    gray: 'olive',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
    accent: 'yellow', // TODO: random value, dunno what to do
    error: 'red',
    isLight: true,
};

const violetTheme: ColorBase = {
    primary: 'violet',
    secondary: 'plum',
    accent: 'violet',
    gray: 'mauve',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
};

const lavendarBlushTheme: ColorBase = {
    primary: 'pink',
    secondary: 'plum',
    accent: 'pink',
    gray: 'mauve',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
};

const matchaTheme: ColorBase = {
    primary: 'grass',
    secondary: 'bronze',
    accent: 'grass',
    gray: 'olive',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
};

const greyTheme: ColorBase = {
    primary: 'gray',
    secondary: 'jade',
    accent: 'yellow', // TODO: random value, dunno what to do
    gray: 'sand',
    error: 'tomato',
    success: 'grass',
    info: 'blue',
    warning: 'amber',
};

const rubyTealTheme: ColorBase = {
    // bad
    primary: 'teal',
    secondary: 'ruby',
    accent: 'grass',
    gray: 'sage',
    error: 'red',
    success: 'grass',
    info: 'blue',
    warning: 'yellow',
};

const bronzeTealTheme: ColorBase = {
    // bad
    primary: 'teal',
    secondary: 'bronze',
    accent: 'grass',
    gray: 'sage',
    error: 'red',
    success: 'grass',
    info: 'blue',
    warning: 'yellow',
};

const caveTheme = {
    primary: 'slate',
    secondary: 'blue',
    accent: 'grass', // TODO: this is a random value
    gray: 'slate',
    error: 'red',
    success: 'grass',
    info: 'blue',
    warning: 'amber',
    isLight: false,
};

const baseThemes = {
    crimson: crimsonTheme,
    teal: tealTheme,
    violet: violetTheme,
    matcha: matchaTheme,
    blueberry: indigoTheme,
    lavendarBlush: lavendarBlushTheme,
    grey: greyTheme,
    // rubyTeal: rubyTealTheme,
    // bronzeTeal: bronzeTealTheme,
};

const baseConfigs = mapObject(baseThemes, (theme) => ({ ...theme, isLight: true }));

// shouldn't name change be easy? can you make variants of an existing theme from planda?
// export const lightThemeConfigs = mapObject(baseThemes, (theme) => ({ ...theme, isLight: true }));

export const lightThemeConfigs = {
    ...Object.entries(baseConfigs).reduce((acc, [name, config]) => {
        return {
            ...acc,
            [`${name}`]: { ...config, isLight: true },
        };
    }, {} as Record<string, ColorTheme>),
};

const darkThemeConfigs = {
    ...Object.entries(baseConfigs).reduce((acc, [name, config]) => {
        return {
            ...acc,
            [`dark-${name}`]: { ...config, isLight: false },
        };
    }, {} as Record<string, ColorTheme>),
};

export const allThemeConfigs = {
    ...lightThemeConfigs,
    ...darkThemeConfigs,
    cave: caveTheme,
    avocado: avocadoTheme,
    library: libraryTheme,
};
