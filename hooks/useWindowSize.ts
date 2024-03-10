'use client'
import { useEffect, useState } from "react"

export const useWindowSize = (handleWindowResize?: (size: { height: number, width: number }) => void) => {
    const [windowSize, setWindowSize] = useState({ height: typeof window === "undefined" ? 0 : window.innerHeight, width: typeof window === "undefined" ? 0 : window.innerWidth || 0 });

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

    return { windowSize, setWindowSize, isLoading: typeof window === "undefined"}
}
