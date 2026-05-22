//Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
export function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
export function replaceAll(str: string | undefined, match: string, replacement: string) {
    return str?.replace(new RegExp(escapeRegExp(match), 'g'), () => replacement) || '';
}

export function hexHtmlToString(str: string) {
    var REG_HEX = /&#x([a-fA-F0-9]+);/g;
    return str.replace(REG_HEX, function(match, grp){
        var num = parseInt(grp, 16);
        return String.fromCharCode(num);
    });
}

/**
 * Finds the longest common substring between two strings
 * Source: https://www.geeksforgeeks.org/javascript-program-to-find-longest-common-substring-between-two-strings/
 * @param str1
 * @param str2
 * @returns
 */
export function longestCommonSubstring(str1: string, str2: string) {
    let n = str1.length;
    let m = str2.length;

    let lcs: number[][] = [];
    for (let i = 0; i <= n; i++) {
        lcs[i] = [];
        for (let j = 0; j <= m; j++) {
            lcs[i][j] = 0;
        }
    }

    let result = "";
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (str1[i] === str2[j]) {
                lcs[i + 1][j + 1] = lcs[i][j] + 1;
                if (lcs[i + 1][j + 1] > max) {
                    max = lcs[i + 1][j + 1];
                    result = str1.substring(i - max + 1, i + 1);
                }
            }
        }
    }

    return result;
}

export const attachPrefix = (prefix: string, str: string) => {
    return str.startsWith(prefix) ? str : prefix + str
}

export const detachPrefix = (prefix: string, str: string) => {
    return str.startsWith(prefix) ? str.slice(prefix.length) : str
}

type CompStr<T extends string> = T | RegExp;
export type CompOp<T extends string> = { op: "AND"; valid: (CompParam<T>)[]; } | { op: "OR"; valid: (CompParam<T>)[]; };
type CompParam<T extends string> = CompStr<T> | CompOp<T>;
export type ContainsSchema<T extends string> = CompStr<T> | CompOp<T>;
export const recursiveContains = <T extends string,>(x: ContainsSchema<T>, syllabusPart: string): boolean => {
    if (typeof x === 'string') return syllabusPart.toLowerCase().includes(x.toLowerCase());
    if (x instanceof RegExp) return x.test(syllabusPart.toLowerCase());
    if (x.op === 'OR') return x.valid.some(y => recursiveContains(y, syllabusPart));
    return x.valid.every(y => recursiveContains(y, syllabusPart));
};

export const createContainsFn = <T extends string,>(valid: (ContainsSchema<T>)[]): (syllabusPart: string) => boolean => {
    return (syllabusPart: string) => valid.some(x => recursiveContains(x, syllabusPart));
};

export const recursiveMatchArray = <T extends string,>(x: ContainsSchema<T>, values: string[]): boolean => {
    if (typeof x === 'string') return values.includes(x);
    if (x instanceof RegExp) return values.some(y => x.test(y));
    if (x.op === 'OR') return x.valid.some(y => recursiveMatchArray(y, values));
    return x.valid.every(y => recursiveMatchArray(y, values));
}