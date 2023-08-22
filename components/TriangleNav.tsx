'use client'
import React from 'react'
import { styled } from '../stitches.shared'
import { DirectionNavProps } from './DirectionNav';

export const TriangleNav = ({ height = 0.8, direction, fn = () => console.log("left clicked"), css = {} }: DirectionNavProps) => {
    const width = height / Math.sqrt(2)
    // + 0.1 * height

    const Box = styled('div', {
        padding: "0",
        margin: '0',

        boxSizing: 'content-box',

        // base styles
        minWidth: 9,
        width: `${width}rem`,
        height: `${height * 1.06}rem`,
        position: "relative",
        overflow: "hidden",

        borderTop: `${height / 10}rem solid transparent`,
        borderBottom: `${height / 10}rem solid transparent`,

        variants: {
            direction: {
                right: {
                    borderLeft: `${height / 10}rem solid $outline`,
                    paddingLeft: height / Math.sqrt(2),
                    gridArea: 'rightnav',
                    // marginInline: 'auto',
                },
                left: {
                    borderRight: `${height / 10}rem solid $outline`,
                    paddingRight: height / Math.sqrt(2),
                    gridArea: 'leftnav',
                    // marginInline: 'auto',
                }
            }
        }

    });

    const Triangle = styled('div', {
        content: '',
        position: "absolute",

        // boxSizing: 'content-box',

        top: `0rem`,
        width: `100%`,
        height: `100%`,
        // width: `${diagonal}rem`,
        // height: `${diagonal}rem`,
        backgroundColor: '$gray1',

        boxSizing: 'border-box',
        // border: `${height/10}rem solid black`,

        variants: {
            direction: {
                right: {
                    left: "0",
                    transformOrigin: "top left",
                    transform: "rotate(45deg)",
                    borderTop: `${height / 10}rem solid $outline`,
                    borderRight: `${height / 10}rem solid $outline`,
                },
                left: {
                    right: "0",
                    transformOrigin: "top right",
                    transform: "rotate(-45deg)",
                    borderTop: `${height / 10}rem solid $outline`,
                    borderLeft: `${height / 10}rem solid $outline`,
                }
            }
        },

        '&:active': {
            "-webkit-box-shadow": 'inset 0px 0px 5px #c1c1c1',
            "-m oz-box-shadow": 'inset 0px 0px 5px #c1c1c1',
            boxShadow: 'inset 0px 0px 5px #c1c1c1',
        },

        '&:hover': {
            backgroundColor: '$gray1Contrast',
        },
    })

    return (
        <Box css={{ ...css }} direction={direction}>
            <Triangle
                direction={direction}
                onClick={() => fn()}
                title="Click to go to next/previous"
            />
        </Box>
    )
}
