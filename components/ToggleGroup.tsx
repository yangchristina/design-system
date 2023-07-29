'use client'
import React, { ComponentProps, forwardRef } from 'react'
import { styled } from '../stitches.config';
import * as ToggleGroupPrimative from '@radix-ui/react-toggle-group'
interface ToggleGroupItem {
    value: string,
    label: string,
}


type Props = ComponentProps<typeof ToggleGroupRoot> // Omit<ComponentProps<typeof ToggleGroupRoot>, 'value' | 'onValueChange'>
export const ToggleGroup = forwardRef<HTMLDivElement, { items: ToggleGroupItem[], id?: string, error?: JSX.Element } & Props>(({ items, id, error, ...fields }, ref) => {
    return (
        <Flex>
            <ToggleGroupRoot
                {...fields}
                ref={ref}
                id={id}
            >
                {
                    items.map(item => <ToggleItem key={item.value} value={item.value}>{item.label}</ToggleItem>)
                }
            </ToggleGroupRoot>
            {error}
        </Flex>
    )
})
ToggleGroup.displayName = 'ToggleGroup'

export const MultiToggleGroup = ({ items, id, ...field }: Omit<ToggleGroupPrimative.ToggleGroupMultipleProps, 'type'> & {
    items: ToggleGroupItem[], id?: string
}) => {
    return (
        <ToggleGroupRoot
            {...field}
            id={id}
            type={'multiple'}
        >
            {
                items.map(item => <ToggleItem key={item.value} value={item.value}>{item.label}</ToggleItem>)
            }
        </ToggleGroupRoot>
    )
}


export const ToggleItem = styled(ToggleGroupPrimative.Item, {
    all: 'unset',
    backgroundColor: '$gray1',
    color: '$outline',
    // height: 35,
    // width: 35,
    padding: '0.5rem 0.75rem',
    flex: '1',
    display: 'flex',
    fontSize: 15,
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
    '&:first-child': { marginLeft: 0, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
    '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
    '&:hover': { backgroundColor: '$primary3' }, // '$primary3'
    '&[data-state=on]': { backgroundColor: '$primary5', color: '$primary11' },
    '&:focus': { position: 'relative', boxShadow: `$focus` },
});
export const ToggleGroupRoot = styled(ToggleGroupPrimative.Root, {
    display: 'inline-flex',
    backgroundColor: '$gray6',
    borderRadius: 4,
    boxShadow: `rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px`,
    // boxShadow: '$boxShadow'
    // boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
    // flexBasis: '40%',
    // flex: 1
});

const Flex = styled('div', {
    all: 'unset',
    flexGeneral: 'column'
})