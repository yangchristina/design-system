import { useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

/**
 * A custom hook to create a debounced function.
 *
 * @param callback - The function to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @param dependencies - Dependency array to control when the debounced function should be recreated.
 *
 * @returns The debounced version of the callback function.
 */
function useDebouncedCallback<T extends (...args: any[]) => any>(callback: T, delay: number, dependencies?: React.DependencyList): (...args: Parameters<T>) => void {
    const debounced = useMemo(
        () => debounce(callback, delay),
        // Include the dependencies passed to the hook
        [callback, delay, ...(dependencies || [])]
    );

    useEffect(() => {
        // Cleanup the debounce instance on unmount
        return () => {
            debounced.cancel();
        };
    }, [debounced]);

    return debounced;
}

export default useDebouncedCallback;
