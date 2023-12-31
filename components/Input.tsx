"use client"
import { styled } from '../stitches.config';
import React, { ComponentProps, forwardRef, useId } from "react";
import { Label } from './Label';

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

export const InputWrapper = styled('span', {
    display: 'inline-flex',
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
        valid: {
            true: {
                boxShadow: '$success',
            }
        },
        design: {
            invisible: {
                boxShadow: 'none',
                backgroundColor: 'inherit',
            },
            solid: {
                backgroundColor: '$loContrast',
            },
            native: {
                all: 'revert',
                // margin: '5px',
                padding: 3,
                '&:focus': { boxShadow: 'initial', scale: 'initial' },
            }
        }
    }
});

const Col = styled('span', {
    position: 'relative',
    padding: 0,
    margin: 0,
    display: 'inline-flex',
    flexDirection: 'column',
})

type InputProps = ComponentProps<typeof InputField> & { outerCSS?: Record<string, any>, error?: boolean, valid?: boolean, label?: string, labelSize?: number }
export const Input = forwardRef<HTMLInputElement, InputProps>(({ outerCSS, children, label, type = 'text', error, labelSize = 5, valid = false, ...props }, forwardedRef) => {
    const id = useId()
    return (
        <InputWrapper css={outerCSS} >
            {label && <Label size={labelSize} htmlFor={id}>{label}</Label>}
            <Col css={outerCSS} >
                <InputField error={error} valid={valid} id={props.id ?? id} type={type} ref={forwardedRef} {...props} />
                {children}
            </Col>
        </InputWrapper>
    )
})
Input.displayName = 'Input'
