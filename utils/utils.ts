export const crossProduct = <T>(arrs: T[][]): T[][] => {
    const valid = arrs.filter(x => x.length > 0)
    if (valid.length === 0) return []
    if (valid.length === 1) return valid[0].map(x => [x])
    return valid.reduce((a, b) => a.flatMap(x => b.map(y => [...x, y])), [[]] as T[][]);
};

export function arrayDiffrence<T>(arr1: T[], arr2: T[]) {
    return arr1
        .filter(x => !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
}

export function arrayDuplicates<T>(arry: T[]) {
    return arry.filter((item, index, arr) => arr.indexOf(item) !== index)
}

export function deepValue(obj: any, pathv: string) {
    // does not support empty space key
    if (!pathv) return obj;
    const path = pathv.split('.').filter(Boolean);
    for (let i = 0, len = path.length; i < len; i++) {
        if (strIsInt(path[i]))
            obj = obj[parseInt(path[i])];
        else obj = obj[path[i]];
    };
    return obj;
};

export function strIsInt(str: string) {
    if (typeof str != "string") return false // we only process strings!
    // @ts-expect-error type coercion
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseInt(str)) // ...and ensure strings of whitespace fail
}

export function isInt(x: unknown): x is number {
    return typeof x === "number" && Number.isInteger(x)
}

export const isBooleanArray = (arr: unknown): arr is boolean[] => Array.isArray(arr) && arr.every(el => typeof el === 'boolean')

export function pickOneFromEachAll<T>(arr: T[][], result: T[][]) {

    let res: T[] = []
    // Number of arrays
    let n = arr.length;

    // To keep track of next element in
    // each of the n arrays
    let indices = new Array(n);

    // Initialize with first element's index
    for (let i = 0; i < n; i++)
        indices[i] = 0;

    while (true) {
        // Print current combination
        for (let i = 0; i < n; i++)
            res = [...res, arr[i][indices[i]]]
        result.push(res)
        res = []

        // Find the rightmost array that has more
        // elements left after the current element
        // in that array
        let next = n - 1;
        while (next >= 0 && (indices[next] + 1 >=
            arr[next].length))
            next--;

        // No such array is found so no more
        // combinations left
        if (next < 0)
            return;

        // If found move to next element in that
        // array
        indices[next]++;

        // For all arrays to the right of this
        // array current index again points to
        // first element
        for (let i = next + 1; i < n; i++)
            indices[i] = 0;
    }
}

export function nCrAll(n: number, r: number) {
    const arr: number[][] = []

    combinationUtil(arr, [], 0, n - 1, 0, r);

    return arr
}

function combinationUtil(arr: number[][], data: number[], start: number, end: number, index: number, r: number) {
    if (index == r) {
        arr.push([...data])
        return
    }

    for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
        data[index] = i;
        combinationUtil(arr, data, i + 1, end, index + 1, r);
    }
}

// @ts-expect-error
if (import.meta.vitest) {
    // @ts-expect-error
    const { it, expect } = import.meta.vitest
    it('nCrAll', () => {
        //   expect(add()).toBe(0)
        expect(nCrAll(5, 2)).toHaveLength(10)
        expect(nCrAll(5, 1)).toHaveLength(5)
        expect(nCrAll(2, 1)).toHaveLength(2)
        expect(nCrAll(2, 1)).toStrictEqual([[0], [1]])
    })
}


export function makeMatrix<T>(w: number, h: number, val: T): T[][] {
    return Array.from({ length: h }, () => Array.from({ length: w }, () => val));
}

export function makeScheduleMatrix<T>(val: T) {
    return makeMatrix(7, 48, val) // 28
}

export function roundToTenths(num: number) {
    return Math.round(num * 10) / 10
}

export function isString(x: unknown): x is string {
    return typeof x === 'string'
}

export function isString2DArray(x: unknown): x is string[][] {
    if (!Array.isArray(x)) return false
    return x.every((y) => isStringArray(y))
}

export function isNumber2DArray(x: unknown): x is number[][] {
    if (!Array.isArray(x)) return false
    return x.every((y) => isNumberArray(y))
}
export function isStringArray(x: unknown): x is string[] {
    return Array.isArray(x) && x.every((y) => typeof y === 'string')
}

export function isNumberArray(x: unknown): x is number[] {
    return Array.isArray(x) && x.every((y) => typeof y === 'number')
}

export function cloneDeep<T>(val: T) {
    return JSON.parse(JSON.stringify(val)) as T
}

export function sum(arr: number[]) {
    return arr.reduce((a, b) => a + b, 0)
}

export function uniqBy<T>(a: T[], by: (x: T) => any) {
    return a.filter((value, index, array) => array.findIndex((x) => by(value) === by(x)) === index)
}
export function uniq<T>(a: T[]) {
    return uniqBy(a, (x) => x)
}

export function groupBy<T>(arr: T[], key: keyof T | ((x: T) => string | number)) {
    return arr.reduce(function (r, a) {
        const innerKey = typeof key === 'function' ? key(a) : a[key]
        r[innerKey] = r[innerKey] || [];
        r[innerKey].push(a);
        return r;
    }, Object.create(null)) as Record<string, T[]>;
}

interface Interval {
    start: number,
    end: number
}
export function isOverlappingInterval(i1: Interval, i2: Interval) { // 13 13
    return (i1.start <= i2.start && i2.start < i1.end) || (i2.start <= i1.start && i1.start < i2.end)
        || (i2.start <= i1.start && i1.end <= i2.end) || (i1.start <= i2.start && i1.end >= i2.end)
}

export function isInInterval(time: number, i: Interval) {
    return i.start <= time && time < i.end
}

export function arraysEqual<T>(a: T[], b: T[]) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export function setDifference<T>(a: Set<T> | Array<T>, b: Set<T> | Array<T>) {
    let b2 = Array.isArray(b) ? new Set(b) : b
    return new Set([...a].filter(x => !b2.has(x)))
}

export function pick<T>(obj: Record<string, T>, arr: string[]) {
    return arr
        .filter(key => key in obj) // line can be removed to make it inclusive
        .reduce((obj2, key) => (obj2[key] = obj[key], obj2), {} as Record<string, T>);
}

export const mapObject = <T, R>(object: Record<string, T>, fn: (value: T, key: string, i: number) => R) => Object.entries(object)
    .reduce((result, [key, val], i) => {
        result[key] = fn(val, key, i)
        return result
    }, {} as Record<string, R>)