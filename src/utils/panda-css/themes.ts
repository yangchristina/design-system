import { mapObject } from '../utils';
import type { ThemeVariantsMap } from '@pandacss/types';

import * as radixScales from '@radix-ui/colors';
import { stitchesToPandaTokens } from './stitchesConvert';
import { defineThemeContract } from '@pandacss/dev';
import { mapColor } from '../radixColors';
import { merge } from 'lodash';
import { allThemeConfigs } from './colorThemes';
import { ColorBase, ColorTheme } from './types';

export const blackOverlay = {
    overlay1: radixScales.blackA.blackA1,
    overlay2: radixScales.blackA.blackA2,
    overlay3: radixScales.blackA.blackA3,
    overlay4: radixScales.blackA.blackA4,
    overlay5: radixScales.blackA.blackA5,
    overlay6: radixScales.blackA.blackA6,
    overlay7: radixScales.blackA.blackA7,
    overlay8: radixScales.blackA.blackA8,
    overlay9: radixScales.blackA.blackA9,
    overlay10: radixScales.blackA.blackA10,
    overlay11: radixScales.blackA.blackA11,
    overlay12: radixScales.blackA.blackA12,
};

export const whiteOverlay = {
    overlay1: radixScales.whiteA.whiteA1,
    overlay2: radixScales.whiteA.whiteA2,
    overlay3: radixScales.whiteA.whiteA3,
    overlay4: radixScales.whiteA.whiteA4,
    overlay5: radixScales.whiteA.whiteA5,
    overlay6: radixScales.whiteA.whiteA6,
    overlay7: radixScales.whiteA.whiteA7,
    overlay8: radixScales.whiteA.whiteA8,
    overlay9: radixScales.whiteA.whiteA9,
    overlay10: radixScales.whiteA.whiteA10,
    overlay11: radixScales.whiteA.whiteA11,
    overlay12: radixScales.whiteA.whiteA12,
};

export function mapColorPanda(color: string, alias: string) {
    const obj: { [key: string]: string } = {};
    for (let i = 1; i <= 12; i++) {
        obj[alias + i] = `{colors.${color}${i}}`;
    }
    return obj;
}

export function mapColorObj(color: Record<string, string>, originalPrefix: string, alias: string) {
    const obj: { [key: string]: string } = {};
    for (let i = 1; i <= 12; i++) {
        obj[alias + i] = color[originalPrefix + i];
    }
    return obj;
}

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

export const lightDefaults = {
    hiContrast: 'black',
    loContrast: 'white',
    transparentPanel: 'hsl(0 0% 0% / 97%)',
    ...blackOverlay,
    ...radixScales.gray,
    ...radixScales.mauve,
    ...radixScales.slate,
    ...radixScales.sage,
    ...radixScales.olive,
    ...radixScales.sand,
    ...mapColorObj(radixScales.grayDarkA, 'grayA', 'grayDarkA'), // grayDarkA3

    ...radixScales.violet,
    ...radixScales.indigo,
    ...radixScales.blue,

    ...radixScales.grayA,
    ...radixScales.mauveA,
    ...radixScales.slateA,
    ...radixScales.sageA,
    ...radixScales.oliveA,
    ...radixScales.sandA,

    ...radixScales.violetA,
    ...mapColor('whiteA', 'overlayB'),

    canvas: 'hsl(0 0% 93%)',
    panel: '$loContrast',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
};

export const darkDefaults = {
    hiContrast: 'white',
    loContrast: 'black',
    transparentPanel: 'hsl(0 100% 100% / 97%)',

    ...whiteOverlay,
    ...radixScales.grayDark,
    ...radixScales.mauveDark,
    ...radixScales.slateDark,
    ...radixScales.sageDark,
    ...radixScales.oliveDark,
    ...radixScales.sandDark,
    ...mapColorObj(radixScales.grayA, 'grayA', 'grayDarkA'), // grayDarkA3

    ...radixScales.violetDark,
    ...radixScales.indigoDark,
    ...radixScales.blueDark,

    ...radixScales.grayDarkA,
    ...radixScales.mauveDarkA,
    ...radixScales.slateDarkA,
    ...radixScales.sageDarkA,
    ...radixScales.oliveDarkA,
    ...radixScales.sandDarkA,

    ...radixScales.violetDarkA,
    ...mapColor('blackA', 'overlayB'),

    canvas: 'hsl(0 0% 15%)',
    panel: '$gray3',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
} as const;

export function mapColorToContract(alias: string) {
    const obj: { [key: string]: { value: string } } = {};
    for (let i = 1; i <= 12; i++) {
        obj[alias + i] = { value: '' };
    }
    return obj;
}

export function mapColorObjValue(originalPrefix: string, alias: string, { isLight = true, suffix = '' }: { isLight?: boolean; suffix?: string }) {
    const darkLight = isLight ? '' : 'Dark';
    const obj: { [key: string]: { value: string } } = {};
    for (let i = 1; i <= 12; i++) {
        obj['$' + alias + i] = { value: radixScales[originalPrefix + darkLight + suffix][originalPrefix + suffix + i] };
    }
    return obj;
}

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

const themeColorTypes = ['primary', 'secondary', 'accent', 'gray', 'error', 'success', 'info', 'warning'] as const;
export const colorsToContract = () => {
    return themeColorTypes.reduce((acc, key) => {
        return { ...acc, ...mapColorToContract(key), ...mapColorToContract(key + 'A') };
    }, {});
};

const colorsToTheme = ({ isLight, ...theme }: ColorBase & { isLight?: boolean }) => {
    return Object.entries(theme).reduce((acc, [key, val]) => {
        return { ...acc, ...mapColorObjValue(val, key, { isLight }), ...mapColorObjValue(val, key + 'A', { isLight, suffix: 'A' }) };
    }, stitchesToPandaTokens(isLight ? lightDefaults : darkDefaults) as Record<string, { value: string }>);
};

const defineTheme = defineThemeContract({
    tokens: {
        colors: {
            ...colorsToContract(),
        },
    },
});

export const createThemeValue = (config: ColorTheme, variables?: ThemeVariantsMap['tokens']) => {
    return merge(
        {
            tokens: {
                colors: colorsToTheme(config),
            },
        },
        variables
    );
};

export const themes: ThemeVariantsMap = mapObject(allThemeConfigs, (config) => createThemeValue(config));

// console.log(JSON.stringify(themes.tealLight.tokens?.colors?.$gray1, null, 2));
export const allThemeNames = Object.keys(allThemeConfigs);
// console.log("allThemeNames", allThemeNames);
export const presetConditions = Object.fromEntries(allThemeNames.map((key) => [key, `.${key} &, [data-theme=${key}] &`]));
// console.log("presetConditions", presetConditions);
// const defineTheme = defineThemeContract(createThemeValue(allThemeConfigs.avocado));
