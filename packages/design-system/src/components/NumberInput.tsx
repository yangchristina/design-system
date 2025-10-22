'use client';
import React, { FC, RefObject, useRef } from 'react';
import { useEdit } from '@planda/hooks';
import { isNil } from 'lodash-es';
import { ChangeEvent, useCallback, ComponentProps } from 'react';
import { Input } from './Input';
import { round } from 'lodash-es';
import { useOutsideAlerter } from '@planda/hooks';
import { useDebouncedCallback } from '@planda/hooks';

type OmitOverlap<Type> = Omit<Type, 'type' | 'min' | 'max' | 'onChange' | 'value'>;

interface ValidNumberOptions {
    precision?: number;
    min?: number;
    max?: number;
}

type InputProps = OmitOverlap<ComponentProps<typeof Input>> &
    OmitOverlap<React.InputHTMLAttributes<HTMLInputElement>> &
    ValidNumberOptions & {
        error?: boolean;
        label?: string;
        value?: number;
        integerOnly?: boolean;
        /**
         * number of ms until the input fixes itself if invalid.
         *
         * Default = 500.
         *
         * Since this is an input, you always want to debounce it
         *
         * */
        debounceWait?: number;
        /** if true, will show debug logs */
        debug?: boolean;
    } & (
        | {
              allowUndefined: true;
              /** Needs to be memoized */
              onChange: (value: number | undefined) => void;
          }
        | {
              allowUndefined?: false;
              /** Needs to be memoized */
              onChange: (value: number) => void;
          }
    );

const castNumberString = (s: unknown): string => (typeof s !== 'string' && typeof s !== 'number' ? '' : s.toString());

const calculateChange = (val: string, { allowUndefined, precision, max, min }: { allowUndefined?: boolean } & ValidNumberOptions) => {
    const int = precision !== undefined ? round(parseFloat(val), precision) : parseFloat(val);
    if (allowUndefined && !val) {
        return undefined;
    }
    if (max !== undefined && int > max) {
        return max;
    }
    if (min !== undefined && int < min) {
        return min;
    }
    if (!val || Number.isNaN(int)) {
        return 'revert';
    }
    return int;
};

// export const NumberInputNative = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef) => {
//     <span>
//         <Input
//             ref={forwardedRef}
//             {...props}
//             />
//     </span>
// })
// TODO: allow decimal values, what does size even do??? not in use currently
export const NumberInput: FC<InputProps> = ({
    children,
    label,
    error,
    onChange,
    value,
    id,
    min,
    max,
    precision,
    integerOnly,
    size,
    allowUndefined,
    debounceWait = 500,
    ref: forwardedRef,
    debug,
    ...props
}) => {
    const [state, setState, revert] = useEdit<number | string | undefined>(value ?? '');
    if (integerOnly) {
        precision = 0;
    }

    const applyChange = useCallback(
        (val: string) => {
            const newValue = calculateChange(val, { allowUndefined, precision, max, min });
            if (debug) {
                console.log('NumberInput: applying change', { val, state, newValue });
            }
            if (newValue === 'revert') {
                onChange(revert());
                return;
            }
            setState(newValue);
            // @ts-expect-error
            onChange(newValue);
        },
        [min, max, allowUndefined, precision, onChange]
    );

    const internalRef = useRef(null);
    const ref = (forwardedRef as RefObject<any>) || internalRef;

    const outsideCallback = useCallback(() => applyChange(castNumberString(state)), [applyChange, state]);
    useOutsideAlerter(ref, outsideCallback);

    const debouncedChangeHandler = useDebouncedCallback(applyChange, debounceWait);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (debug) {
            console.log('NumberInput: input onChange called', e.target.value);
        }
        setState(e.target.value);
        debouncedChangeHandler(e.target.value);
    };

    return (
        <span>
            <Input
                label={label}
                ref={ref}
                min={min && min - 10}
                max={max && max + 10}
                onChange={handleChange}
                type="number"
                value={state ?? ''}
                id={id}
                step={!isNil(precision) ? 10 ** (-1 * precision) : 'any'}
                {...props}
            />
        </span>
    );
};
