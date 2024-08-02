import { forOwn, isEmpty, isPlainObject } from "lodash-es"
import { jsonParse, jsonStringify } from "./json"

export function paramsToQueryString(params = {}) {
    return Object.entries(params)
        .filter(param => param[1] !== undefined)
        .map(param => `${param[0]}=${param[1]}`)
        .join("&")
}
const fixUrl = (url: string) => url.replace(/#/g, '%23')
// url.replaceAll('#', '%23')

export async function fetchGet<ResType>(url: string, params = {}, options?: {
    fallback?: ResType
}): Promise<ResType> {
    if (url.includes("undefined")) console.log(url)
    const { fallback } = options || {}
    const queryString = paramsToQueryString(params)
    const urlWithParams = `${url}${queryString ? (url.includes('?') ? '&' : '?') + queryString : ''}`
    // console.log('fetchGet', urlWithParams)
    return fetch(fixUrl(urlWithParams), { method: 'GET', cache: 'no-store' }).then(async (res) => {
        if (res.ok) {
            return jsonParse(await res.text())
        } else {
            console.error(res.status, res.statusText);
            return fallback;
        }
    })
}

const walk = (node: any) => {
    if (node.value instanceof Set) {
        node.value = [...node.value]
        return
    }
    if (!node.value || !isPlainObject(node.value)) return
    forOwn(node.value, walk)
}

export async function fetcher<T>(url: string, method: string, body = {}, queryParams = {}, fallback?: T): Promise<T> {
    const res = await fetch(fixUrl(`${url}?${paramsToQueryString(queryParams)}`), {
        method,
        headers: { "Content-Type": "application/json" },
        ...(!isEmpty(body) && { body: jsonStringify(body) }),
        cache: 'no-store'
    }).then(async (res) => {
        if (res.ok) {
            const text = await res.text()
            if (text.toLowerCase().startsWith('success')) return fallback
            return jsonParse(text);
        } else {
            // console.error(res.status, res.statusText);
            return fallback;
        }
    }).catch((err) => {
        // console.error(err);
        return fallback;
    })
    return res
}
