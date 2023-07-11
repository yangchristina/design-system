'use client'
import { Tooltip } from '../components/Tooltip'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import React from 'react'

export const Info = ({ text, style }: { text: string, style?: any }) => {
    return (
        <Tooltip content={text}>
            <InfoCircledIcon style={{ transformOrigin: 'center', width: 'max-content', display: 'flex-inline', justifyContent: 'center', alignItems: 'center', verticalAlign: 'middle', ...style }} />
        </Tooltip>
    )
}
