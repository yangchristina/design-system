'use client'
import { useEffect, useState } from "react"

const DEFAULT_SIZES = {
    mobile: { height: 667, width: 375 },
    tablet: { height: 1024, width: 768 },
    desktop: { height: 900, width: 1440 }
}

export const useWindowSize = (handleWindowResize?: (size: { height: number, width: number }) => void, defaultSize?: 'mobile' | 'tablet' | 'desktop') => {
    const [windowSize, setWindowSize] = useState(typeof window === "undefined" ? DEFAULT_SIZES[defaultSize || 'desktop'] : {
        height: window.innerHeight,
        width: window.innerWidth || 0
    });

    useEffect(() => {
        setWindowSize({ height: typeof window === "undefined" ? 0 : window.innerHeight, width: typeof window === "undefined" ? 0 : window.innerWidth || 0 })
    }, [])

    useEffect(() => {
        function handleResize() {
            if (!window) return
            const size = { height: window.innerHeight, width: window.innerWidth }
            setWindowSize(size)
            handleWindowResize?.(size)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const isMobile = windowSize.width <= 768;

    return { windowSize, setWindowSize, isLoading: typeof window === "undefined", isMobile }
}
