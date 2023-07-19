'use client'
import React from 'react'
import { useEdit } from '../hooks/useEdit'
import { debounce } from "lodash"
import { ChangeEvent, forwardRef, useCallback, useId } from "react"
import { Input } from './Input'
import { round } from 'lodash'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'min' | 'max' | 'onChange' | 'value'> & {
    error?: boolean, label?: string, max?: number, min?: number,
    value?: number, precision?: number, integerOnly?: boolean,
} & ({
    allowUndefined: true,
    onChange: (value: number | undefined) => void
} | {
    allowUndefined?: false,
    onChange: (value: number) => void
})

// export const NumberInputNative = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
//     <span>
//         <Input
//             ref={forwardedRef}
//             {...props}
//             />
//     </span>
// })
// TODO: allow decimal values, what does size even do??? not in use currently
export const NumberInput = forwardRef<HTMLInputElement, InputProps>(({ children, label, error, onChange, value, id, min, max, precision, integerOnly, size, allowUndefined, ...props }, forwardedRef) => {
    const [state, setState, revert] = useEdit<number | string>(value ?? '')
    if (integerOnly) {
        precision = 0
    }
    const handleChangeDebounced = (e: ChangeEvent<HTMLInputElement>) => {
        const int = precision !== undefined ? round(parseFloat(e.target.value), precision) : parseFloat(e.target.value)
        if (allowUndefined && !e.target.value) {
            // @ts-expect-error
            onChange(undefined)
            return
        }
        if (max !== undefined && int > max) {
            onChange?.(max)
            return
        }
        if (min !== undefined && int < min) {
            onChange?.(min)
            return
        }
        if (!e.target.value || Number.isNaN(int)) {
            revert()
            return
        }
        onChange?.(int)
    }

    const debouncedChangeHandler = useCallback(
        debounce(handleChangeDebounced, 800), [min, max, onChange]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
        debouncedChangeHandler(e)
    }

    return (
        <span>
            <Input
                label={label}
                ref={forwardedRef}
                min={min && min - 10}
                max={max && max + 10} onChange={handleChange}
                type="number"
                value={state ?? ''}
                id={id}
                step={precision ? 10 ** (-1 * precision) : "any"}
                {...props} />
        </span>
    )
})

NumberInput.displayName = 'NumberInput'