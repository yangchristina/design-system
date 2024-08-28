import React from 'react'
import { styled } from '@planda/styled-system/jsx'

interface Props {
    height?: number,
    direction: "left" | "right",
    fn?: () => void,
    style?: any,
    className?: string,
}

const Triangle = styled('div', {
    base: {
        content: '',
        position: "absolute",

        top: `0rem`,
        width: `100%`,
        height: `100%`,
        backgroundColor: '$gray1',

        boxSizing: 'border-box',
        '&:active': {
            boxShadow: 'inset 0px 0px 5px #c1c1c1',
        },

        '&:hover': {
            backgroundColor: '$gray1Contrast',
        },
    },
    variants: {
        direction: {
            right: {
                left: "0",
                transformOrigin: "top left",
                transform: "rotate(45deg)",
                borderTop: `solid {colors.$outline}`,
                borderRight: `solid {colors.$outline}`,
            },
            left: {
                right: "0",
                transformOrigin: "top right",
                transform: "rotate(-45deg)",
                borderTop: `solid {colors.$outline}`,
                borderLeft: `solid {colors.$outline}`,
            }
        }
    },
})

const Box = styled('div', {
    base: {
        padding: "0",
        margin: '0',
        '&:hover': {
            cursor: 'pointer',
        },

        boxSizing: 'content-box',

        minWidth: 9,
        position: "relative",
        overflow: "hidden",

        borderTop: `solid transparent`,
        borderBottom: `solid transparent`,
    },
    variants: {
        direction: {
            right: {
                borderLeft: `solid {colors.$outline}`,
                gridArea: 'rightnav',
                marginInline: 'auto',
            },
            left: {
                borderRight: `solid {colors.$outline}`,
                gridArea: 'leftnav',
                marginInline: 'auto',
            }
        }
    }
});

export const TriangleNav = ({ height = 0.8, direction, fn, className, style = {} }: Props) => {
    const width = height / Math.sqrt(2)
    // + 0.1 * height
    const borderWidth = `${height / 10}rem`
    const heightStyles = direction === "right" ? {
        borderTopWidth: borderWidth,
        borderRightWidth: borderWidth,
    } : {
        borderTopWidth: borderWidth,
        borderLeftWidth: borderWidth,
    }


    return (
        <Box className={className}
            style={{
                ...style, borderBlockWidth:
                    borderWidth, width: `${width}rem`,
                height: `${height * 1.06}rem`,
                ...(direction === 'right' ? { borderLeftWidth: borderWidth, paddingLeft: height / Math.sqrt(2), } : { borderRightWidth: borderWidth, paddingRight: height / Math.sqrt(2), })
            }}
            onClick={() => fn?.()}
            direction={direction}
        >
            <Triangle
                style={heightStyles}
                direction={direction}
                title="Click to go to next/previous"
            />
        </Box>
    )
}
