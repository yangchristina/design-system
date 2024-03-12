import { createStitches, PropertyValue } from '@stitches/react';
import { ColorTheme, ColorBase, createThemeValue, mapColor } from './utils/radixColors';
// TODO createStitches prevent style ejection
import {
  // gray,
  // mauve,
  // slate,
  // sage,
  // olive,
  // sand,
  // tomato,
  // red,
  // crimson,
  // pink,
  // plum,
  // purple,
  // violet,
  // indigo,
  // blue,
  // sky,
  // mint,
  // cyan,
  // teal,
  // green,
  // grass,
  // lime,
  // yellow,
  // amber,
  // orange,
  // brown,
  // bronze,
  // gold,
  // grayA,
  // mauveA,
  // slateA,
  // sageA,
  // oliveA,
  // sandA,
  // tomatoA,
  // redA,
  crimsonA,
  // pinkA,
  // plumA,
  // purpleA,
  // violetA,
  // indigoA,
  // blueA,
  // skyA,
  // mintA,
  // cyanA,
  // tealA,
  // greenA,
  // grassA,
  // limeA,
  // yellowA,
  // amberA,
  // orangeA,
  // brownA,
  // bronzeA,
  // goldA,
  // whiteA,
  // blackA,
  // grayDark,
  // mauveDark,
  // slateDark,
  // sageDark,
  // oliveDark,
  // sandDark,
  // tomatoDark,
  // redDark,
  // crimsonDark,
  // pinkDark,
  // plumDark,
  // purpleDark,
  // violetDark,
  // indigoDark,
  // blueDark,
  // skyDark,
  // mintDark,
  // cyanDark,
  // tealDark,
  // greenDark,
  // grassDark,
  // limeDark,
  // yellowDark,
  // amberDark,
  // orangeDark,
  // brownDark,
  // bronzeDark,
  // goldDark,
  // grayDarkA,
  // mauveDarkA,
  // slateDarkA,
  // sageDarkA,
  // oliveDarkA,
  // sandDarkA,
  // tomatoDarkA,
  // redDarkA,
  // crimsonDarkA,
  // pinkDarkA,
  // plumDarkA,
  // purpleDarkA,
  // violetDarkA,
  // indigoDarkA,
  // blueDarkA,
  // skyDarkA,
  // mintDarkA,
  // cyanDarkA,
  // tealDarkA,
  // greenDarkA,
  // grassDarkA,
  // limeDarkA,
  // yellowDarkA,
  // amberDarkA,
  // orangeDarkA,
  // brownDarkA,
  // bronzeDarkA,
  // goldDarkA,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createAllThemes, toProviderThemes, toThemeKey } from './utils/createTheme';
import { mapObject } from './utils/utils';
export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config: rawConfig,
  reset,
} = createStitches({
  prefix: 'design-system',
  theme: {
    colors: {
      ...crimsonA,
      text: '$primary12',
      outline: '$primary12',
      outlineHover: '$gray12',

      unimportant: '$gray11',
      important: '$primary11',
      highlight: '$warning9',

      canvas: 'hsl(0 0% 93%)',
      panel: '$loContrast',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',

      border: '$borderWidths$medium solid $primary12',
      borderThin: '$borderWidths$thin solid $primary12',
      borderThick: '$borderWidths$thick solid $primary12',
      borderFocus: `0 0 0 2px $colors$focus`,
    },
    fonts: {
      untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    borderWidths: {
      thin: '1px',
      medium: '2px',
      thick: '3px',
    },
    shadows: {
      borderHiContrast: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay12',
      success: `0px 0px 3px $colors$success11`,
      // Should focus be info or secondary?
      // focus: `0 0 0 2px $colors$info7`, // or if want gray focus: `0 0 0 2px $colors$gray7`
      // focusBottom: `0 2px 0px 0px $colors$info7`,
      focusPrimary: `0 0 0 2px $colors$primary7`,
      // light: '0 0 0 2px $colors$gray1',
      // strong: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

      border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay2',
      common: `0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15)`,
      boxShadow: `$border, $common`,
      error: `0px 0px 3px $colors$error11`,
      focus: `0 0 0 2px $colors$hiContrast`, // or if want gray focus: `0 0 0 2px $colors$gray7`
      focusBottom: `0 2px 0px 0px $colors$primary7`,
      // light: '0 0 0 2px $colors$gray1',
      medium: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      strong: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    // space: {
    //   1: '4px',
    //   2: '8px',
    //   3: '16px',
    //   4: '20px',
    //   5: '24px',
    //   6: '32px',
    //   7: '48px',
    //   8: '64px',
    //   9: '80px',
    // },
    // sizes: {
    //   1: '4px',
    //   2: '8px',
    //   3: '16px',
    //   4: '20px',
    //   5: '24px',
    //   6: '32px',
    //   7: '48px',
    //   8: '64px',
    //   9: '80px',
    // },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    // fontSizes: {
    //   1: '11px',
    //   2: '12px',
    //   3: '15px',
    //   4: '17px',
    //   5: '20px',
    //   6: '22px',
    //   7: '28px',
    //   8: '36px',
    //   9: '60px',
    // },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

const { prefix, ...rest } = rawConfig
export const config = rest

export type CSS = Stitches.CSS<typeof config>;


// #region color themes
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
}

const indigoTheme: ColorBase = {
  primary: 'indigo',
  secondary: 'jade',
  accent: 'indigo',
  gray: 'slate',
  error: 'red',
  success: 'green',
  info: 'blue',
  warning: 'yellow',
}

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
}

const libraryTheme = {
  primary: 'brown',
  secondary: 'lime',
  gray: 'olive',
  success: 'green',
  info: 'blue',
  warning: 'yellow',
  accent: '',
  error: 'red',
  isLight: true,
}

const violetTheme: ColorBase = {
  primary: 'violet',
  secondary: 'plum',
  accent: 'violet',
  gray: 'mauve',
  error: 'red',
  success: 'green',
  info: 'blue',
  warning: 'yellow',
}

const lavendarBlushTheme: ColorBase = {
  primary: 'pink',
  secondary: 'plum',
  accent: 'pink',
  gray: 'mauve',
  error: 'red',
  success: 'green',
  info: 'blue',
  warning: 'yellow',
}

const matchaTheme: ColorBase = {
  primary: 'grass',
  secondary: 'bronze',
  accent: 'grass',
  gray: 'olive',
  error: 'red',
  success: 'green',
  info: 'blue',
  warning: 'yellow',
}

const greyTheme: ColorBase = {
  primary: 'gray',
  secondary: 'jade',
  accent: '',
  gray: 'sand',
  error: 'tomato',
  success: 'grass',
  info: 'blue',
  warning: 'amber',
}

const rubyTealTheme: ColorBase = { // bad
  primary: 'teal',
  secondary: 'ruby',
  accent: 'grass',
  gray: 'sage',
  error: 'red',
  success: 'grass',
  info: 'blue',
  warning: 'yellow',
}

const bronzeTealTheme: ColorBase = { // bad
  primary: 'teal',
  secondary: 'bronze',
  accent: 'grass',
  gray: 'sage',
  error: 'red',
  success: 'grass',
  info: 'blue',
  warning: 'yellow',
}

const caveTheme = {
  primary: 'slate',
  secondary: 'blue',
  accent: '',
  gray: 'slate',
  error: 'red',
  success: 'grass',
  info: 'blue',
  warning: 'amber',
  isLight: false,
}

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
}

// shouldn't name change be easy? can you make variants of an existing theme from planda?
const lightThemeConfigs = mapObject(baseThemes, (theme) => ({ ...theme, isLight: true }))

const darkThemeConfigs = {
  ...Object.entries(lightThemeConfigs).reduce((acc, [name, config]) => {
    return {
      ...acc,
      [`${name}Dark`]: { ...config, isLight: false },
    }
  }, {} as Record<string, ColorTheme>),
}

export const allThemeConfigs = {
  ...lightThemeConfigs,
  ...darkThemeConfigs,
  cave: caveTheme,
  avocado: avocadoTheme,
  library: libraryTheme,
}

export const themes: Record<string, any> = mapObject(allThemeConfigs, (config) => createThemeValue(config))

export const themeKeyToName = Object.keys(themes).reduce((acc, name) => {
  const key = toThemeKey(name)
  acc[key] = name
  return acc
}, {} as Record<string, string>)

const createdThemes = createAllThemes(themes, createTheme)

export const providerThemes = toProviderThemes(createdThemes)
// #endregion

export const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
  },
  html: {
    margin: 0,
    minHeight: '100%',
  },
  ':root': {
    margin: 0,
    fontFamily: '$system',
    height: "100%",
    color: "$primary12",
    boxSizing: "border-box",
    '-moz-box-sizing': "border-box",
    '-webkit-box-sizing': "border-box",
    scrollBehavior: 'smooth',
    scrollbarColor: 'auto transparent',
    background: '$primary1',
    fontSize: "1em",
  },
  body: {
    minHeight: "100vh",
    minWidth: "100vw",
    fontSize: '1em',
    margin: 0,
    padding: 0,
    background: '$primary1',
    // display: 'flex',
    // alignItems: 'stretch',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$primary11',
    margin: 0,
    display: "block",
    fontWeight: "bold"
  },
  main: { // TODO: delete this when done testing
    backgroundColor: '$primary1',
    width: '100vw'
  },
  sub: {
    verticalAlign: 'bottom',
    position: 'relative',
    bottom: '-0.5em',
    color: '$unimportant',
    fontSize: '0.65em',
  },
  textarea: {
    fontFamily: '$system',
    padding: 5,
    letterSpacing: 0.8,
    boxSizing: 'border-box',
    background: '$overlayB11',
    '&:focus': {
      // border: '$focus',
      outline: 'none !important',
      // border: '1px solid red',. .
      boxShadow: '$focus'
    }
  },
  a: {
    textDecoration: 'none'
  },
  '.gap': {
    display: 'flex',
    gap: 15
  },
  '.center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  li: {
    marginInline: 40
  }
}