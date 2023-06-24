import React, { ComponentProps, Fragment } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select';
import Trigger from './components/Trigger';
import Item, { ItemButton } from './components/Item';
import { styled } from '../../stitches.config';
import Content from './components/Content';

export interface SelectItem {
    type: 'item',
    label: string,
    value: string,
    colorNum?: number,
}

export interface SelectButton {
    type: 'button',
    label: string,
    handleClick: () => void
}

export interface SelectGroup { type: 'group', label: string, items: (SelectItem | SelectButton)[] }

export type ContentUnit = SelectGroup | SelectItem | SelectButton

const SelectGroupEl = styled(SelectPrimitive.Group, {})
const Separator = styled(SelectPrimitive.Separator, {
    height: 1,
    backgroundColor: '$gray6',
    margin: 5,
});
const GroupLabel = styled(SelectPrimitive.Label, {
    padding: '0 25px',
    fontSize: 12,
    lineHeight: '25px',
    color: '$gray11',
});

function handleType(obj: ContentUnit | ContentUnit[]): JSX.Element {
    if (Array.isArray(obj)) {
        return <>{obj.map(x => handleType(x))}</>
    }
    switch (obj.type) {
        case 'group':
            return (
                <Fragment key={'group_' + obj.label}>
                    <Separator />
                    <SelectGroupEl>
                        <GroupLabel>
                            {obj.label}
                        </GroupLabel>
                        {handleType(obj.items)}
                    </SelectGroupEl>
                </Fragment>
            )
        case 'item':
            return <Item key={obj.value} value={obj.value}>{obj.label}</Item>
        default:
            return <ItemButton key={'button_' + obj.label} handleClick={obj.handleClick}>{obj.label}</ItemButton>
    }
}

type SelectProps = {
    placeholder?: string, data: ContentUnit[],
    error?: boolean,
    allowSelectNone?: boolean
} & { onChange: (value: string) => void; } & ComponentProps<typeof SelectPrimitive.Root>

/**
 * should i nest a form in here?
 * @returns 
 */
export const Select = ({ placeholder = 'Select a category', data, value, onChange, error, allowSelectNone = false, ...props }: SelectProps) => {
    const noCategoryItem: ContentUnit = {
        type: 'item',
        label: placeholder,
        value: '/',
    }
    data = allowSelectNone ? [noCategoryItem, ...data] : [...data]
    return (
        <SelectPrimitive.Root {...props} value={value} onValueChange={onChange}>
            <Trigger error={error} placeholder={placeholder} />
            <Content>
                <>
                    {handleType(data)}
                </>
            </Content>
        </SelectPrimitive.Root>
    )
}