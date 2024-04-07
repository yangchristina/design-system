import { createTheme } from "@stitches/react";

type ThemeReturn = ReturnType<typeof createTheme>;  // string
type CreatedThemes = Record<string, ThemeReturn>
export const createAllThemes = (themes: Record<string, any>, createTheme: any) => Object.entries(themes).reduce((acc, [key, value]) => {
    const themeName = toThemeKey(key)
    acc[key] = createTheme(themeName, value)
    return acc
}, {} as CreatedThemes)

export const toProviderThemes = (createdThemes: CreatedThemes) => Object.entries(createdThemes).reduce((acc, [key, value]) => {
    acc[key] = value.className
    return acc
}, {} as Record<string, string>)

export const toThemeKey = (key: string) => key.replace(/ /g, '-').toLowerCase() + '-theme'
// key.replaceAll(" ", '-') + '-theme'
