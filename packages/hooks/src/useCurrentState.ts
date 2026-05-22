'use client'
import { useRef, useState } from 'react'

export const useCurrentState = <T>(initLayout: T) => {
    const [layoutState, setLayoutState] = useState(initLayout);
    const layoutRef = useRef(initLayout);
    // @ts-ignore
    layoutRef.current = layoutState;
    return [layoutState, setLayoutState, layoutRef] as const;
}
