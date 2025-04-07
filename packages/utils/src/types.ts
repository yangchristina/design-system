export type DayOfWeekNum = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type MaybePromise<T> = T | Promise<T>;

export type NextJSPageProps<P> = {
    params: Promise<P>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type ValueOf<T> = T[keyof T];
