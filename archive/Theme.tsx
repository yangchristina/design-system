// "use client"
// import React, { ComponentProps } from 'react'
// // import { Theme as RadixTheme } from '@radix-ui/themes'
// import { useTheme } from 'next-themes'
// import { allThemeConfigs } from '../stitches.config'
// // Theme component must take in secondary and primary, and other stitches variables

// type ThemeProps = Omit<ComponentProps<typeof RadixTheme>, 'grayColor'>
// const themeKeyToRadixConfig = (themeName: string | undefined): ThemeProps | undefined => {
//     if (!themeName) return undefined
//     const config = allThemeConfigs[themeName]
//     let appearance: 'light' | 'dark' = config.isLight ? 'light' : 'dark'
//     let accentColor = themeName in config ? config[themeName] : themeName
//     let grayColor = config.gray
//     return { appearance, accentColor, grayColor } as ThemeProps
// }

// const Theme = ({ accentColor, ...props }: ThemeProps) => {
//     const { theme } = useTheme()

//     const themeConfig = themeKeyToRadixConfig(theme)

//     // primary -> primary color
//     // secondary -> secondary color
//     // info -> info color
//     return (
//         <RadixTheme
//             {...themeConfig}
//             radius="large" scaling="100%"
//             {...props} />
//     )
// }

// export default Theme