import useForageItem from "./useForageItem"

/**
 * each item in the array gets its own key
 * @param groupKey
 * @param isValid
 * @returns
 */
export default function useForageArray<T>(
    groupKey: string,
    isValid: (x: unknown) => boolean,
    defaultValue: T[] = []
) {
    const { isLoading, item: array, set: setArray} = useForageItem<T[]>(groupKey, (arr: unknown)=>Array.isArray(arr) && arr.every(isValid), defaultValue)

    async function clear() {
        await setArray([])
    }

    async function set(index: number, value: T) {
        if (!isValid(value)) throw new Error("invalid set value")
        await setArray(array.map((x, i) => i === index ? value : x))
    }

    async function setEntire(value: T[]) {
        await setArray(value)
    }

    async function add(value: T) {
        if (!isValid(value)) {
            console.log("invalid value", "key", groupKey)
            console.log(value)
            throw new Error("invalid set value")
        }
        await setArray([...array, value])
    }

    async function remove(index: number) {
        await setArray(array.filter((_, i) => i !== index))
    }

    return {
        isLoading,
        set,
        clear,
        add, 
        remove,
        items: array,
        setEntire
    }
}