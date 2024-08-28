/**
 * THEME:
 * Error, Success, Warning, Info, Primary, Secondary, Accent, GrayScale, Black White Overlay
 */

export interface ColorBase {
    primary: string;
    secondary: string;
    accent: string;
    gray: string;
    error: string;
    success: string;
    info: string;
    warning: string;
}

export interface ColorTheme extends ColorBase {
    isLight: boolean;
    name?: string;
}
