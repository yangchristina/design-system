'use client'
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import React, { ReactNode, ComponentProps } from 'react'
import { styled } from '../../stitches.config'
import { TriangleNav } from './TriangleNav'

export interface DirectionNavProps {
    height?: number,
    direction: "left" | "right",
    fn?: () => void,
    css?: any
}

const Container = styled('div', {
    left: 0, right: 0, position: 'relative', display: 'flex', alignItems: 'center', gap: 15,
    variants: {
        layout: {
            compact: {
                justifyContent: 'center',
            },
            expanded: {
                width: '100%',
                justifyContent: 'space-between'
            }
        }
    }
})
const Flex = styled('div', { display: 'flex', alignItems: 'center' })
export const DirectionNav = ({ children, type = 'triangle', navCSS, layout = "expanded", ...props }: {
    children: ReactNode, handleLeft?: () => void, handleRight?: () => void, type?: 'caret' | 'triangle', height?: number,
    containerCSS?: any, navCSS?: any, layout?: 'compact' | 'expanded'
}) => {
    const Nav = type === 'caret' ? CaretNav : TriangleNav
    return (
        <Container layout={layout} css={props.containerCSS}>
            <Nav css={navCSS} height={props.height} direction="left" fn={props.handleLeft} />
            <Flex>
                {children}
            </Flex>
            <Nav css={navCSS} height={props.height} direction="right" fn={props.handleRight} />
        </Container>
    )
}

const caretNavStyles = {
    width: 30, height: 30, zIndex: 10
}
const CaretLeft = styled(CaretLeftIcon, caretNavStyles)
const CaretRight = styled(CaretRightIcon, caretNavStyles)

const CaretNav = ({ css = {}, height, fn, direction }: DirectionNavProps) => {
    const Icon = direction === 'left' ? CaretLeft : CaretRight
    return <Icon css={{ ...css, ...(height !== undefined && { height }) }} onClick={fn} />
}