'use client'
import React, { MutableRefObject, useRef } from 'react'
import { useEdit } from '../hooks/useEdit'
import { debounce, isNil } from "lodash-es"
import { ChangeEvent, forwardRef, useCallback, useId, ComponentProps } from "react"
import { Input } from './Input'
import { round } from 'lodash-es'
import { useOutsideAlerter } from '../hooks/useOutsideAlerter'


type OmitOverlap<Type> = Omit<Type, 'type' | 'min' | 'max' | 'onChange' | 'value'>

type InputProps = OmitOverlap<ComponentProps<typeof Input>> & OmitOverlap<React.InputHTMLAttributes<HTMLInputElement>> & {
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

const castNumberString = (s: unknown): string => (typeof s !== 'string' && typeof s !== 'number') ? '' : s.toString()

// export const NumberInputNative = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
//     <span>
//         <Input
//             ref={forwardedRef}
//             {...props}
//             />
//     </span>
// })
// TODO: allow decimal values, what does size even do??? not in use currently
export const NumberInput = forwardRef<any, InputProps>(({ children, label, error, onChange, value, id, min, max, precision, integerOnly, size, allowUndefined, debounceWait = 5000, ...props }, forwardedRef) => {
    const [state, setState, revert] = useEdit<number | string | undefined>(value ?? '')
    if (integerOnly) {
        precision = 0
    }

    const calculateChange = (val: string) => {
        const int = precision !== undefined ? round(parseFloat(val), precision) : parseFloat(val)
        if (allowUndefined && !val) {
            return undefined
        }
        if (max !== undefined && int > max) {
            return max
        }
        if (min !== undefined && int < min) {
            return min
        }
        if (!val || Number.isNaN(int)) {
            return 'revert'
        }
        return int
    }
    const handleChangeDebounced = (val: string) => {
        const newValue = calculateChange(val)
        if (newValue === 'revert') {
            revert()
            return
        }
        setState(newValue)
        // @ts-expect-error
        onChange(newValue)
    }

    const ref = (forwardedRef as MutableRefObject<any>) || useRef(null)

    const outsideCallback = useCallback(() => handleChangeDebounced(castNumberString(state)), [min, max, onChange, state]);
    useOutsideAlerter(ref, outsideCallback)

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