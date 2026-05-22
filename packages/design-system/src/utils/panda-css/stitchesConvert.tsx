export const stitchesToPandaTokens = <H extends string, T>(stitches: Record<H, T>) => {
    return Object.fromEntries(Object.entries(stitches).map(([key, val]) => {
        return ['$' + key, { value: val }]
    })) as Record<H, { value: T }>;
}

export const lightDarkToPandaTokens = (light: Record<string, string>, dark: Record<string, string>) => {
    const tokens = {} as Record<string, { value: { base: string, _dark: string } }>;
    for (const key in light) {
        tokens[key] = { value: { base: light[key], _dark: dark[key] } };
    }
    return tokens
}
