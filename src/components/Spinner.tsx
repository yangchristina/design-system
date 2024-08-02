"use client";
import React, { ComponentProps } from 'react'
import { keyframes, styled } from '../stitches.config'

export const spin = keyframes({
    "0%": { top: "8px", height: "64px" },
    "50%, 100%": { top: "24px", height: "32px" }
});

// const overlayColors = range(1, 12).reduce((acc, i) => {
//     acc[`overlay${i}`] = {
//         '& div': {
//             background: `$overlay${i}`
//         }
//     }
//     return acc
// }, {})
// console.log(overlayColors)

const Outer = styled('div', {
    display: "inline-block",
    position: "relative",
    width: "80px",
    height: "80px",
    '& div': {
        display: "inline-block",
        position: "absolute",
        left: "8px",
        width: "16px",
        animation: `${spin} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite`,
        "&:nth-child(1)": { left: "8px", animationDelay: "-0.24s" },
        "&:nth-child(2)": { left: "32px", animationDelay: "-0.12s" },
        "&:nth-child(3)": { left: "56px", animationDelay: "0" },
    },

    variants: {
        color: {
            monochrome: { '& div': { background: "$gray1" } },
            overlay1: { '& div': { background: '$overlay1' } },
            overlay2: { '& div': { background: '$overlay2' } },
            overlay3: { '& div': { background: '$overlay3' } },
            overlay4: { '& div': { background: '$overlay4' } },
            overlay5: { '& div': { background: '$overlay5' } },
            overlay6: { '& div': { background: '$overlay6' } },
            overlay7: { '& div': { background: '$overlay7' } },
            overlay8: { '& div': { background: '$overlay8' } },
            overlay9: { '& div': { background: '$overlay9' } },
            overlay10: { '& div': { background: '$overlay10' } },
            overlay11: { '& div': { background: '$overlay11' } }
        }
    },
    defaultVariants: {
        color: 'overlay5',
    }
})

type Props = ComponentProps<typeof Outer>
export const Spinner = (props: Props) => {
    return (
        <Outer {...props} ><div></div><div></div><div></div></Outer>
    )
}