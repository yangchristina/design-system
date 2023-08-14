import { createTheme } from "@stitches/react";
import { themes } from "../stitches.config";
import { mod } from "./math";

export default function getNextTheme(theme = '', inc = 1, type?: 'light' | 'dark') {
    let themeNames = Object.keys(themes)
    if (type) themeNames = themeNames.filter(name => type === 'dark' ? name.toLowerCase().includes('dark') : !name.toLowerCase().includes('dark'))

    const index = themeNames.indexOf(theme) + inc

    return themeNames[mod(index, themeNames.length)]
}

export const isDarkTheme = (theme: string | undefined) => {
    return !!theme?.toLowerCase().includes('dark')
}

type ThemeReturn = ReturnType<typeof createTheme>;  // string
type CreatedThemes = Record<string, ThemeReturn>
export const createAllThemes = (themes: Record<string, any>, createTheme: any) => Object.entries(themes).reduce((acc, [key, value]) => {
    acc[key] = createTheme(key.replaceAll(" ", '-'), value)
    return acc
}, {} as CreatedThemes)

export const toProviderThemes = (createdThemes: CreatedThemes) => Object.entries(createdThemes).reduce((acc, [key, value]) => {
    acc[key] = value.className + '-theme'
    return acc
}, {} as Record<string, string>)
