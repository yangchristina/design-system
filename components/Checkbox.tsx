import React, { ReactNode, useId } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '../stitches.config';
import { CheckIcon } from '@radix-ui/react-icons';
import InputLabel from './InputLabel';
import { VariantProps } from '@stitches/react';

// ex. checked={displayOptions.hideCompleted}
// onCheckedChange={(checked) => editOptions('hideCompleted', !!checked)}

type CheckboxProps = VariantProps<typeof CheckboxRoot> & VariantProps<typeof CheckboxIndicator> & {
    checked?: boolean, onCheckedChange: (checked: boolean) => void, id?: string, children?: ReactNode,
    css?: any,
    defaultChecked?: boolean,
    colorNum?: number | string
}

export const Checkbox = ({ defaultChecked, checked, onCheckedChange, id, css = {}, children, colorNum, size, ...props }:
    CheckboxProps) => {
    const defaultId = useId()
    return (
        <Fieldset>
            <CheckboxRoot
                {...props}
                size={size}
                css={{
                    ...css,
                    ...(colorNum !== undefined && { categoryColor: colorNum })
                }} checked={checked}
                defaultChecked={defaultChecked}
                onCheckedChange={onCheckedChange}
                id={id || defaultId}>
                <CheckboxIndicator css={{ ...(colorNum !== undefined && { categoryColor: colorNum }) }} >
                    <Checkmark size={size} />
                </CheckboxIndicator>
            </CheckboxRoot>
            {children && <InputLabel htmlFor={id || defaultId}>{children}</InputLabel>}
        </Fieldset>
    )
}

export const Checkmark = styled(CheckIcon, {
    variants: {
        size: {
            small: {
                size: 14,
            }
        }
    }
})

export const Fieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    gap: 2,
    marginBlock: '3px',
    alignItems: 'center',
});

export const CheckboxRoot = styled(CheckboxPrimitive.Root, {
    all: 'unset',
    boxSizing: 'border-box',
    backgroundColor: '$loContrast',
    size: '1.25rem',
    borderRadius: '0.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // !!! SOMEONE PLS HELP ME CHOOSE BETWEEN THE THREE BOXSHADOWS BELOW, or whether any of the other on this link work better: https://getcssscan.com/css-box-shadow-examples
    boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
    // boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`,
    // boxShadow: `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px`,
    marginRight: '0.5rem',
    '&:hover': { boxShadow: `0 0 0 0.5px` },
    '&:focus': { boxShadow: `0 0 0 1px` },
    variants: {
        icon: {
            circle: {
                backgroundColor: 'transparent',
                borderRadius: '50%',
                border: '$borderThin',
                boxShadow: 'none',
                size: '1rem',
                maxHeight: '1rem',
                maxWidth: '1rem',
                [`&${Checkmark}`]: {
                    height: 55,
                    width: 35
                },
                [`&${InputLabel}`]: {
                    fontSize: '$3'
                },
                // size: 'auto'
            },
            clear: {
                backgroundColor: 'inherit',
                // boxShadow: '$boxShadow',
                boxShadow: 'none',
                borderRadius: '0',
                border: '$borderThin',
                width: '0.7rem',
                height: '0.7rem',
            }
        },
        fillOnChecked: {
            true: {
                '&[data-state="checked"]': {
                    color: '$text',
                    backgroundColor: '$text'
                },
            }
        },
        size: {
            small: {
                size: '0.95rem',
                // width: '0.25rem',
                // height: '0.25rem',
            }
        }
    }
});

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
    color: '$primary11',
    variants: {
        fillOnChecked: {
            true: {
                '&[data-state="checked"]': {
                    color: '$outline',
                    backgroundColor: '$outline'
                },
            }
        }
    }
});