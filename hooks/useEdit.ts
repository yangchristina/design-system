import { useEffect, useState } from "react";

export function useEdit<T>(initialState: T
) {
    const [state, setState] = useState<T>(initialState);

    useEffect(() => {
        setState(initialState);
    }, [initialState])

    function revert() {
        setState(initialState);
    }

    return [state, setState, revert] as const
}