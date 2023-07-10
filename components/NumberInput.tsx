'use client'
import React from 'react'
import { useEdit } from '../hooks/useEdit'
import { debounce } from "lodash"
import { ChangeEvent, forwardRef, useCallback, useId } from "react"
import { Input } from './Input'
import { round } from 'lodash'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'min' | 'max' | 'onChange' | 'value'> & {
    error?: boolean, label?: string, max?: number, min?: number, handleChange: (value: number) => void, value?: number, precision?: number, integerOnly?: boolean
}
// TODO: allow decimal values, what does size even do??? not in use currently
export const NumberInput = forwardRef<HTMLInputElement, InputProps>(({ children, label, error, handleChange, value, id, min, max, precision, integerOnly, size, ...props }, forwardedRef) => {
    const [state, setState, revert] = useEdit<number | string>(value ?? '')
    if (integerOnly) {
        precision = 0
    }
    const handleChangeDebounced = (e: ChangeEvent<HTMLInputElement>) => {
        const int = precision !== undefined ? round(parseFloat(e.target.value), precision) : parseFloat(e.target.value)
        if (max !== undefined && int > max) {
            handleChange?.(max)
            return
        }
        if (min !== undefined && int < min) {
            handleChange?.(min)
            return
        }
        if (!e.target.value || Number.isNaN(int)) {
            revert()
            return
        }
        handleChange?.(int)
    }

    const debouncedChangeHandler = useCallback(
        debounce(handleChangeDebounced, 800), [min, max]);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
        debouncedChangeHandler(e)
    }

    return (
        <span>
            <Input
                label={label}
                ref={forwardedRef}
                min={min && min - 10}
                max={max && max + 10} onChange={onChange}
                type="number"
                value={state ?? ''}
                id={id}
                {...props} />
        </span>
    )
})

NumberInput.displayName = 'NumberInput'