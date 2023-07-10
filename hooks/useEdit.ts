"use client"
import { useEffect, useState } from "react";

export function useEdit<T>(initialState: T
) {
    const initialClone = JSON.parse(JSON.stringify(initialState));
    const [state, setState] = useState<T>(initialClone);

    useEffect(() => {
        setState(initialClone);
    }, [initialState])

    function revert() {
        setState(initialClone);
    }

    return [state, setState, revert] as const
}