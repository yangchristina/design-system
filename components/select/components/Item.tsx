'use client';
import React, { forwardRef, ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, PlusIcon } from '@radix-ui/react-icons';
import { styled } from '../../../stitches.config';
import { selectColorVariants } from "../styles";

interface Props {
    children: ReactNode,
    value: string,
}

const itemStyle = {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    color: '$primary12',

    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',
    borderRadius: 3,

    height: 25,
    fontSize: 13,
    lineHeight: 1,

    '&[data-disabled]': {
        color: '$gray8',
        pointerEvents: 'none',
    },
    "&:hover": {
        backgroundColor: '$gray5',
        color: '$primary12',
    },
    '&[data-highlighted]': { // ISSUE: This is not working in sheet has to use :hover instead
        backgroundColor: '$gray5',
        color: '$primary12',
    },

    variants: {
        ...selectColorVariants
    }
}

const SelectItem = styled(SelectPrimitive.Item, {
    ...itemStyle,
});

export const SelectItemButtonIndicator = styled('div', {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const SelectItemButton = styled('button', {
    ...itemStyle,
    width: 'stretch',
});

const Indicator = styled(SelectPrimitive.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const Item = forwardRef<HTMLInputElement, Props>(({ children, ...props }, forwardedRef) => {
    return (
        <SelectItem {...props} ref={forwardedRef}>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
            <Indicator>
                <CheckIcon />
            </Indicator>
        </SelectItem>
    )
});
Item.displayName = 'Item'

export default Item

export const ItemButton = (({ children, handleClick }: { children: ReactNode, handleClick: () => void }) => {
    return (
        <SelectItemButton onClick={handleClick}>
            <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
            <Indicator>
                <CheckIcon />
            </Indicator>
        </SelectItemButton>
    )
});