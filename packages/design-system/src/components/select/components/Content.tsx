'use client';
import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select';
import { styled } from '@planda/styled-system/jsx'
import { ChevronUpIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { cva } from '@planda/styled-system/css';

const SelectViewport = styled(SelectPrimitive.Viewport, {
    base: {
        padding: 5
    }
});

const SelectContent = styled(SelectPrimitive.Content, {
    base: {
        overflow: "hidden",
        backgroundColor: "$gray1",
        borderRadius: 6,
        zIndex: 1000,
        boxShadow: "0px 10px 25px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
        border: "1px solid {colors.$overlay3}"
    }
});

const scrollButtonStyles = cva({
    base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
        backgroundColor: '$gray1',
        color: '$primary11',
        cursor: 'default',
    }
});

const SelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles);

const SelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles);


const Content = ({ children, className }: { children: JSX.Element, className?: string }) => {
    return (
        <SelectPrimitive.Portal>
            <SelectContent className={className}>
                <SelectScrollUpButton>
                    <ChevronUpIcon />
                </SelectScrollUpButton>
                <SelectViewport>
                    {children}
                </SelectViewport>
                <SelectScrollDownButton>
                    <ChevronDownIcon />
                </SelectScrollDownButton>
            </SelectContent>
        </SelectPrimitive.Portal>
    )
}

export default Content