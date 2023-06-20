"use client"
import localforage from "localforage"
import { useEffect, useState } from "react"

export function useForageItem<T>(
    key: string,
    isValid: (x: unknown) => boolean,
    defaultValue: T
) {
    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState(defaultValue)

    useEffect(() => {
        async function init() {
            const item = await localforage.getItem(key)
            if (isValid(item)) setItem(item as T)
            setIsLoading(false)
        }
        init()
    }, [])

    function set(value: T | ((x: T) => T)) {
        let v = (typeof value === 'function') ? value = (value as Function)(item) : value
        if (!isValid(v)) throw new Error("invalid set value")
        localforage.setItem(key, v)
        setItem(v)
    }

    return {
        isLoading,
        item,
        set
    }
}

export async function getForageItem<T>(
    key: string, isValid: (x: unknown) => x is T, defaultValue: T) {
    let item = await localforage.getItem(key);
    if (!isValid(item)) {
        localforage.setItem(key, defaultValue)
        item = defaultValue
    }
    return item as T;
}