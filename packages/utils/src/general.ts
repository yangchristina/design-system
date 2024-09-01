// not in use (might not work)
export function getValuesRecursively<T>(obj?: Record<string, any>): T[] | undefined {
    if (!obj) return obj
    let arr: T[] = []
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            const res = getValuesRecursively<any>(obj[key])
            if (!res) continue
            arr = arr.concat(res)
        } else {
            arr.push(obj[key])
        }
    }
    return arr
}

export const removeUndefinedOrNull = <T>(obj: T) => {
    // @ts-expect-error
    const newObj: T = {}

    // pick(obj, Object.keys(obj).filter(k=>obj[k] !== undefined && obj[k]))
    for (let key in obj) {
        const val = obj[key]
        if (obj[key] === undefined || obj[key] === null) continue
        newObj[key] = val
    }
    return newObj
}