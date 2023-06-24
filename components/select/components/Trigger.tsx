'use client';
import React from 'react'
import { styled } from '../../../stitches.config';
import { SelectTrigger, Value, SelectIcon } from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const Trigger = ({ placeholder = 'Select a category', error = false }: { placeholder?: string, error?: boolean }) => {
    return (
        <StyledTrigger error={error} aria-label="select-trigger">
            <Value placeholder={placeholder} />
            <SelectIcon>
                <ChevronDownIcon />
            </SelectIcon>
        </StyledTrigger>
    )
}

export default Trigger

const StyledTrigger = styled(SelectTrigger, {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 13,
    lineHeight: 1,
    height: 35,
    gap: 5,
    backgroundColor: '$gray1',
    color: '$primary12',
    boxShadow: `0px 0px 3px $colors$gray7`,
    // boxShadow: '$boxShadow',
    '&:hover': { backgroundColor: '$gray3' },
    '&:focus': { boxShadow: `$focus` },
    '&[data-placeholder]': { color: '$gray12' },

    gridArea: 'category',

    variants: {
        color: {
            light: {},
            mid: {
                backgroundColor: '$gray2',
            },
        },
        error: {
            true: {
                color: '$error11',
                boxShadow: `$error`,
            }
        }
    }
});