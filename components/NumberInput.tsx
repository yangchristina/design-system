'use client'
import React, { MutableRefObject, useRef } from 'react'
import { useEdit } from '../hooks/useEdit'
import { debounce, isNil } from "lodash"
import { ChangeEvent, forwardRef, useCallback, useId } from "react"
import { Input } from './Input'
import { round } from 'lodash'
import { useOutsideAlerter } from '../hooks/useOutsideAlerter'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'min' | 'max' | 'onChange' | 'value'> & {
    error?: boolean, label?: string, max?: number, min?: number,
    value?: number, precision?: number, integerOnly?: boolean,
    debounceWait?: number,
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
export const NumberInput = forwardRef<any, InputProps>(({ children, label, error, onChange, value, id, min, max, precision, integerOnly, size, allowUndefined, debounceWait = 2000, ...props }, forwardedRef) => {
    const [state, setState, revert] = useEdit<number | string>(value ?? '')
    if (integerOnly) {
        precision = 0
    }
    const handleChangeDebounced = (val: string) => {
        const int = precision !== undefined ? round(parseFloat(val), precision) : parseFloat(val)
        if (allowUndefined && !val) {
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
        if (!val || Number.isNaN(int)) {
            revert()
            return
        }
        onChange?.(int)
    }
    const ref = (forwardedRef as MutableRefObject<any>) || useRef(null)

    useOutsideAlerter(ref, () => { value !== state && handleChangeDebounced(state.toString()) })

    const debouncedChangeHandler = useCallback(
        debounce(handleChangeDebounced, debounceWait), [min, max, onChange]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
        debouncedChangeHandler(e.target.value)
    }

    return (
        <span>
            <Input
                label={label}
                ref={ref}
                min={min && min - 10}
                max={max && max + 10} onChange={handleChange}
                type="number"
                value={state ?? ''}
                id={id}
                step={!isNil(precision) ? 10 ** (-1 * precision) : "any"}
                {...props} />
        </span>
    )
})

NumberInput.displayName = 'NumberInput'