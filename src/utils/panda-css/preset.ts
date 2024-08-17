import { definePreset } from '@pandacss/dev';
import { stitchesToPandaTokens } from './stitchesConvert';
import { crimsonA } from '@radix-ui/colors';
import { allThemeNames, presetConditions, themes } from './themes';
import { textRecipe } from '../../components/recipes/text';

export const plandaPreset = definePreset({
    name: 'planda',
    staticCss: {
        extend: {
            themes: allThemeNames,
        },
    },
    theme: {
        extend: {
            breakpoints: {
                // bp1: '(min-width: 520px)',
                // bp2: '(min-width: 900px)',
                // bp3: '(min-width: 1200px)',
                // bp4: '(min-width: 1800px)',
                '@bp1': '520px',
                '@bp2': '900px',
                '@bp3': '1200px',
                '@bp4': '1800px',
            },
            tokens: {
                colors: {
                    ...stitchesToPandaTokens({
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
                    }),
                },
                fonts: stitchesToPandaTokens({
                    untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
                    mono: 'Söhne Mono, menlo, monospace',
                }),
                spacing: stitchesToPandaTokens({
                    1: '5px',
                    2: '10px',
                    3: '15px',
                    4: '20px',
                    5: '25px',
                    6: '35px',
                    7: '45px',
                    8: '65px',
                    9: '80px',
                }),
                sizes: stitchesToPandaTokens({
                    1: '5px',
                    2: '10px',
                    3: '15px',
                    4: '20px',
                    5: '25px',
                    6: '35px',
                    7: '45px',
                    8: '65px',
                    9: '80px',
                }),
                borderWidths: stitchesToPandaTokens({
                    thin: '1px',
                    medium: '2px',
                    thick: '3px',
                }),
                shadows: stitchesToPandaTokens({
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
                }),
                fontSizes: stitchesToPandaTokens({
                    1: '12px',
                    2: '13px',
                    3: '15px',
                    4: '17px',
                    5: '19px',
                    6: '21px',
                    7: '27px',
                    8: '35px',
                    9: '59px',
                }),
                radii: stitchesToPandaTokens({
                    1: '4px',
                    2: '6px',
                    3: '8px',
                    4: '12px',
                    round: '50%',
                    pill: '9999px',
                }),
                zIndex: stitchesToPandaTokens({
                    1: '100',
                    2: '200',
                    3: '300',
                    4: '400',
                    5: '500',
                    max: '999',
                }),
            },
            semanticTokens: {},
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeOut: {
                    from: { opacity: '1' },
                    to: { opacity: '0' },
                },
            },
            recipes: { text: textRecipe },
        },
    },
    themes,
    utilities: {
        extend: {
            size: {
                className: 'size',
                values: 'sizes',
                transform(value) {
                    return {
                        width: value,
                        height: value,
                    };
                },
            },
            userSelect: {
                className: 'userSelect',
                values: 'userSelect', // TODO: not sure if this works
                transform(value) {
                    return {
                        WebkitUserSelect: value,
                        userSelect: value,
                    };
                },
            },
        },
    },
    conditions: presetConditions,
    presets: ['@pandacss/preset-panda'],
});
