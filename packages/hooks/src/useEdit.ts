'use client';
import { useCallback, useEffect, useState } from 'react';

const getClone = <T,>(obj: T): T => {
    return JSON.parse(JSON.stringify(obj));
}
export function useEdit<T>(initialState: T) {
    const [state, setState] = useState<T>(getClone(initialState));

    useEffect(() => {
        setState(getClone(initialState));
    }, [initialState]);

    const revert = useCallback(() => {
        const initialClone = getClone(initialState);
        setState(initialClone);
        return initialClone;
    }, [initialState])

    return [state, setState, revert] as const;
}
