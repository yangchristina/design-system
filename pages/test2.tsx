import React from 'react'
import { Toolbar, ToolbarOld } from '../custom/Toolbar'

const Test2 = () => {
    return (
        <div>
            <Toolbar orientation="vertical" />
            <ToolbarOld />
            <Toolbar orientation="horizontal" />
        </div>
    )
}

export default Test2