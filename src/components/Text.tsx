"use client"
import React, { forwardRef } from 'react'
import { text, type TextVariantProps } from '@planda/styled-system/recipes'

export type TextProps = TextVariantProps & {
  children: React.ReactNode, className?: string
} & React.HTMLAttributes<HTMLSpanElement>

export const Text = forwardRef<any, TextProps>(({ children, className, ...props }, forwardedRef) => {
  return (
    <span {...props}
      ref={forwardedRef}
      className={text(props) + ' ' + className}
    >
      {children}
    </span>
  )
})