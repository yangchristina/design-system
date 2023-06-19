import * as radixScales from '@radix-ui/colors';

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
}

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
}

export function mapColor(color: string, alias: string) {
    const obj: { [key: string]: string } = {}
    for (let i = 1; i <= 12; i++) {
        obj[alias + i] = '$' + color + i
    }
    return obj
}

/**
 * THEME:
 * Error, Success, Warning, Info, Primary, Secondary, Accent, GrayScale, Black White Overlay
 */

export interface ColorTheme {
    primary: string,
    secondary: string,
    accent: string,
    gray: string,
    error: string,
    success: string,
    info: string,
    warning: string,
}
const lightDefaults = {
    ...blackOverlay,
    ...radixScales.whiteA,
    ...radixScales.pink,
    ...mapColor('whiteA', 'overlayB'),
}
const darkDefaults = {
    ...whiteOverlay,
    ...radixScales.blackA,
    ...radixScales.pinkDark,
    ...radixScales.grayDark,
    ...radixScales.mauveDark,
    ...radixScales.slateDark,
    ...radixScales.sageDark,
    ...radixScales.oliveDark,
    ...radixScales.sandDark,
    ...radixScales.tomatoDark,
    ...radixScales.redDark,
    ...radixScales.crimsonDark,
    ...radixScales.pinkDark,
    ...radixScales.plumDark,
    ...radixScales.purpleDark,
    ...radixScales.violetDark,
    ...radixScales.indigoDark,
    ...radixScales.blueDark,
    ...radixScales.skyDark,
    ...radixScales.mintDark,
    ...radixScales.cyanDark,
    ...radixScales.tealDark,
    ...radixScales.greenDark,
    ...radixScales.grassDark,
    ...radixScales.limeDark,
    ...radixScales.yellowDark,
    ...radixScales.amberDark,
    ...radixScales.orangeDark,
    ...radixScales.brownDark,
    ...radixScales.bronzeDark,
    ...radixScales.goldDark,
    ...radixScales.grayDarkA,
    ...radixScales.mauveDarkA,
    ...radixScales.slateDarkA,
    ...radixScales.sageDarkA,
    ...radixScales.oliveDarkA,
    ...radixScales.sandDarkA,
    ...radixScales.tomatoDarkA,
    ...radixScales.redDarkA,
    ...radixScales.crimsonDarkA,
    ...radixScales.pinkDarkA,
    ...radixScales.plumDarkA,
    ...radixScales.purpleDarkA,
    ...radixScales.violetDarkA,
    ...radixScales.indigoDarkA,
    ...radixScales.blueDarkA,
    ...radixScales.skyDarkA,
    ...radixScales.mintDarkA,
    ...radixScales.cyanDarkA,
    ...radixScales.tealDarkA,
    ...radixScales.greenDarkA,
    ...radixScales.grassDarkA,
    ...radixScales.limeDarkA,
    ...radixScales.yellowDarkA,
    ...radixScales.amberDarkA,
    ...radixScales.orangeDarkA,
    ...radixScales.brownDarkA,
    ...radixScales.bronzeDarkA,
    ...radixScales.goldDarkA,

    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',

    ...mapColor('blackA', 'overlayB'),
}
export function createThemeColors(theme: ColorTheme, isLight = true, variables?: Record<string, string>) {
    const {
        primary, secondary, accent, gray, error, success, info, warning,
    } = theme
    const suffix = isLight ? '' : 'Dark'
    return {
        ...mapColor(error, 'error'),
        ...mapColor(success, 'success'),
        ...mapColor(info, 'info'),
        ...mapColor(warning, 'warning'),
        ...mapColor(gray, 'gray'),
        ...mapColor(primary, 'primary'),
        ...mapColor(accent, 'accent'),
        ...mapColor(secondary, 'secondary'),
        ...(isLight ? lightDefaults : darkDefaults),
        // const primary 
        // ...radixScales[(primary + suffix) as keyof typeof radixScales], ...radixScales[gray + suffix], ...radixScales[error + suffix], ...radixScales[success + suffix],
        // ...radixScales[warning + suffix], ...radixScales[info + suffix], ...radixScales[success + suffix],
        // ...(secondary && radixScales[secondary + suffix]),
        ...variables
    }
}