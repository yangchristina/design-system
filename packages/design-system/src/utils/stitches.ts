export const fixStitchesCssNumbers = (css: string, dsCss: string) => {
    const dsMatches = dsCss.match(/--sxs{--sxs:\d+ /g)?.length || 0
    css.match(/--sxs{--sxs:\d+ /g)?.forEach((val, index) => {
        val.replace(/\d+/, (Number(val.match(/\d+/)?.[0]) + dsMatches).toString())
        css = css.replace(val, val.replace(/\d+/, (Number(val.match(/\d+/)) + dsMatches).toString()))
    })
    // "--sxs{--sxs:0 "
    return dsCss + '/* BREAK */' + css
}
