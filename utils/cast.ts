import { fetchGet } from "./fetch"

export const castPromiseToUndefined = (promise: Promise<any>) => promise.then(() => undefined)

export const castPromiseToItself = async (promise: Promise<any>, url: string, fetcher?: (url: string) => any) => {
    return await promise.then(() => fetcher ? fetcher(url) : fetchGet(url))
}