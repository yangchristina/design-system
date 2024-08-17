import { defineConfig } from '@pandacss/dev';
import { plandaPreset } from './src';

export default defineConfig({
    // Whether to use css reset
    // preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {},
    },
    // The output directory for your css system
    outdir: './packages/styled-system',
    importMap: {
        css: '@planda/styled-system/css',
        recipes: '@planda/styled-system/recipes',
        patterns: '@planda/styled-system/patterns',
        jsx: '@planda/styled-system/jsx',
    },
    // The JSX framework to use
    jsxFramework: 'react',

    // The CSS Syntax to use to use
    syntax: 'object-literal',
    presets: [plandaPreset],
});
