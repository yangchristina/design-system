export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
    ? Omit<T, K>
    : never

export type DayOfWeekNum = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};