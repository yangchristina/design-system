"use client"
import React from 'react'
import { keyframes, styled } from '../stitches.config'

export const Spinner = () => {
    return (
        <Outer><div></div><div></div><div></div></Outer>
    )
}

export const spin = keyframes({
    "0%": { top: "8px", height: "64px" },
    "50%, 100%": { top: "24px", height: "32px" }
});

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
        background: "#fff",
        animation: `${spin} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite`,
        "&:nth-child(1)": { left: "8px", animationDelay: "-0.24s" },
        "&:nth-child(2)": { left: "32px", animationDelay: "-0.12s" },
        "&:nth-child(3)": { left: "56px", animationDelay: "0" },
    },
})