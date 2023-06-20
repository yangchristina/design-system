import localforage from "localforage"
import { useEffect, useState } from "react"
import { isStringArray } from "../utils/utils"

const getRandomKey = () => Math.random().toString(36).substring(2, 11)
/**
 * each item in the array gets its own key
 * @param groupKey
 * @param isValid
 * @returns
 */
export function useForageSortedArray<T>(
    groupKey: string,
    isValid: (x: unknown) => boolean,
    defaultArray: T[] = [],
    keyBy?: (x: T) => string,
) {
    const [isLoading, setIsLoading] = useState(true)
    const [order, setOrder] = useState<string[]>([])
    const [itemMap, setItemMap] = useState<Record<string, T>>({})

    async function reset() {
        const curOrder = [...order]
        setOrder([])
        setItemMap({})
        const promises = curOrder.map(x => localforage.removeItem(groupKey + '-' + x))
        promises.push(localforage.removeItem(groupKey + '-order'))
        await Promise.all(promises)
        await Promise.all(defaultArray.map(x => add(x))) // needs to wait for previous await to finish
        return curOrder
    }

    async function init() {
        let order: string[] | null = await localforage.getItem(groupKey + '-order')
        if (!isStringArray(order)) {
            // order should be [] here, since default
            order = await reset();
        } else { // TODO remove else here i think
            setOrder(order)
        }
        for (const key of order) {
            const item = await localforage.getItem(groupKey + '-' + key)
            if (!isValid(item)) {
                console.log(item)
                remove(key)
                // throw new Error("invalid item")
            }
            setItemMap(prev => ({ ...prev, [key]: item as T }))
        }
        setIsLoading(false)
    }

    useEffect(() => {
        init()
    }, [])

    async function reorder(newOrder: string[]) {
        if (!newOrder.every(x => typeof x === 'string'))
            throw new Error("invalid order")
        setOrder(newOrder)
        await localforage.setItem(groupKey + '-order', newOrder)
    }

    async function set(key: string, value: T) {
        if (!isValid(value)) {
            console.log("INVALID VALUE:", value)
            throw new Error("invalid set value")
        }
        setItemMap(p => ({ ...p, [key]: value }))
        await localforage.setItem(groupKey + '-' + key, value)
    }

    async function add(val: T, key?: string) {
        key = key || (keyBy ? keyBy(val) : getRandomKey())
        if (order.includes(key)) throw new Error("key already exists")
        await Promise.all([set(key, val), reorder([...order, key])])
    }

    async function batchAddRemove(valuesToAdd: T[], keysToRemove: string[]) {
        valuesToAdd.forEach(x=>{
            if (!isValid(x)) {
                console.log("INVALID VALUE:", x)
                throw new Error("invalid valuesToAdd")
            }
        })

        const keysToAdd = valuesToAdd.map((val) => {
            const key = keyBy ? keyBy(val) : getRandomKey()
            if (order.includes(key)) throw new Error("key already exists")
            return key
        })
        const promise1 = await Promise.all(valuesToAdd.map((val, i) => set(keysToAdd[i], val)))
        const filteredOrder = order.filter(x => !keysToRemove.includes(x))
        const promise2 = reorder([...filteredOrder, ...keysToAdd])
        await Promise.all([promise1, promise2])
    }

    async function batchAdd(values: T[]) {
        if (!values.every(isValid)) {
            console.log("INVALID VALUES: ", values)
            throw new Error("invalid values")
        }
        // filter out invalid values
        if (keyBy) values = values.filter(x=>!order.includes(keyBy(x))) // NOTE: this line only implemented for batchAdd so far
        const keys = values.map((val) => {
            const key = keyBy ? keyBy(val) : getRandomKey()
            if (order.includes(key)) throw new Error("key already exists")
            return key
        })
        const promise1 = await Promise.all(values.map((val, i) => set(keys[i], val)))
        const promise2 = reorder([...order, ...keys])
        await Promise.all([promise1, promise2])
    }

    async function remove(key: string) {
        setItemMap(p => {
            const { [key]: _, ...rest } = p
            return rest
        })
        reorder(order.filter(x => x !== key))
        await localforage.removeItem(groupKey + '-' + key)
    }

    async function batchRemove(keys: string[]) {
        setItemMap(p => {
            for (const key of keys) {
                delete p[key]
            }
            return { ...p }
        })
        reorder(order.filter(x => !keys.includes(x)))
        await Promise.all(keys.map(key => localforage.removeItem(groupKey + '-' + key)))
    }

    return {
        isLoading,
        keysInSortedOrder: order,
        itemMap,
        set,
        reorder,
        reset,
        add,
        remove,
        items: isLoading ? [] : order?.map(x => itemMap[x]) || [],
        init,
        batchRemove,
        batchAdd,
        batchAddRemove,
    }
}

