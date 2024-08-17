export const stitchesToPandaTokens = <H extends string, T extends string>(stitches: Record<H, T>) => {
    return Object.fromEntries(Object.entries(stitches).map(([key, val]) => {
        return ['$' + key, { value: val }]
    })) as Record<H, { value: T }>;
}