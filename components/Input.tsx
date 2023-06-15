import { styled } from '../stitches.config';
import React, { ComponentProps, forwardRef, useId } from "react";
import InputLabel from "./InputLabel";

export const inputLayoutStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 8,
    lineHeight: 1,
    minWidth: 0,
}

export const inputCSSVarStyle = {
    backgroundColor: 'var(--colors-overlayB11)',
    borderColor: 'transparent',
    boxShadow: 'var(--shadows-boxShadow)',
    color: 'var(--colors-primary12)',
    '&:focus-within': { boxShadow: `var(--shadows-focus)`, scale: 1.02, borderColor: 'transparent' }
}

export const InputWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    position: 'relative',
    background: 'inherit',
    gridArea: 'input',
})

export const InputField = styled('input', {
    all: 'unset',
    ...inputLayoutStyle,
    boxShadow: '$boxShadow',
    backgroundColor: '$overlayB11',
    color: '$primary12',
    '&:focus': { boxShadow: `$focus`, scale: 1.02, },

    variants: {
        size: {
            'small': {
                fontSize: '0.85em',
                padding: 6,
            },
        },
        error: {
            true: {
                boxShadow: '$error',
            }
        },
        design: {
            invisible: {
                boxShadow: 'none',
                backgroundColor: 'inherit',
            }
        }
    }
});

const Col = styled('div', {
    position: 'relative',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
})

type InputProps = ComponentProps<typeof InputField> & { error?: boolean, label?: string }
export const Input = forwardRef<HTMLInputElement, InputProps>(({ children, label, type = 'text', error, ...props }, forwardedRef) => {
    const id = useId()
    return (
        <InputWrapper>
            {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
            <Col>
                <InputField error={error} id={id} type={type} ref={forwardedRef} {...props} />
                {children}
            </Col>
        </InputWrapper>
    )
})
Input.displayName = 'Input'