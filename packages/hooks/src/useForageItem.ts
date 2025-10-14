"use client"
import localforage from "localforage"
import { useEffect, useState } from "react"
import useDebouncedCallback from "./useDebouncedCallback"

type SetValueArgs<T> = T | ((x: T) => T)

export function useForageItem<T>(
    key: string,
    isValid: (x: unknown) => boolean,
    defaultValue: T,
    { onLoad, debounceDelay = 0 }: { onLoad?: (x: T) => void, debounceDelay?: number } = {}
) {
    const [isLoading, setIsLoading] = useState(true)
    const [item, setItem] = useState(defaultValue)

    async function init() {
        const item = await localforage.getItem(key)
        if (isValid(item)) setItem(item as T)
        setIsLoading(false)
        onLoad?.(item as T)
        return item
    }

    useEffect(() => {
        init()
    }, []);

    const debouncedSet = useDebouncedCallback((value: T) => {
        localforage.setItem(key, value)
    }, debounceDelay)

    function set(value: SetValueArgs<T>) {
        let v = (typeof value === 'function') ? (value  as (prev: T) => T)(item) : value
        if (!isValid(v)) throw new Error("invalid set value")
        debouncedSet(v)
        setItem(v)
    }

    return {
        isLoading,
        item,
        set,
        resync: init
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