/**
 * Assign a value to an object from a path
 * Ex. assignValueFromPath({a: {b: {c: "old"}}}, ["a", "b", "c"], "new") => {a: {b: {c: "new"}}}
 * @param obj
 * @param path
 * @param value
 * @param options
 * @returns
 */
export const assignValueFromPath = (obj: any, path: (string | number)[], value: any, options?: { setIfNotExists?: boolean }) => {
    let cur = obj;
    for (let i = 0; i < path.length; i++) {
        const key = path[i];
        if (i === path.length - 1) {
            if (options?.setIfNotExists) {
                if (cur[key] === undefined) {
                    cur[key] = value;
                }
                return obj;
            }
            cur[key] = value;
            return obj;
        }
        if (typeof cur[key] !== 'object') {
            // TODO: in future can auto-assign instead of throw error
            throw new Error('Path does not exist');
        }
        cur = cur[key];
    }
    return cur;
};

export function insertBetweenEveryArrayItem<T, S>(array: T[], insert: S) {
    return array.reduce((acc, cur, i) => {
        if (i !== 0) acc.push(insert);
        acc.push(cur);
        return acc;
    }, [] as (T | S)[]);
}

/**
 * Returns all ranges where every element satisfies the predicate
 * @param array
 * @param predicate
 */
export function rangesWhereEvery<T>(array: T[], predicate: (x: T) => boolean, minRangeSize = 3): { ranges: T[][]; array: T[]; indexesInRange: Set<number> } {
    const ranges: { el: T; index: number }[][] = [[]];

    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            ranges.at(-1)!.push({ el: array[i], index: i });
        } else {
            ranges.push([]);
        }
    }

    const indexes = new Set<number>();
    const els = ranges
        .filter((x) => {
            if (x.length < minRangeSize) return false;
            x.forEach((y) => indexes.add(y.index));
            return true;
        })
        .map((x) => x.map((y) => y.el));

    const newArray = array.filter((_, i) => !indexes.has(i));

    return { ranges: els, array: newArray, indexesInRange: indexes };
}
