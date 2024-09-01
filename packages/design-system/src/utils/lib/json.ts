export function replacer(key: any, value: any) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else if (value instanceof Set) {
        return {
            dataType: 'Set',
            value: [...value], // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}
export function reviver(key: any, value: any) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        } else if (value.dataType === 'Set') {
            return new Set(value.value);
        }
    }
    return value;
}

export function jsonStringify(val: any) {
    return JSON.stringify(val, replacer)
}

export function jsonParse(val: any) {
    return JSON.parse(val, reviver)
}

export function convertParsedJson(val: any) {
    return jsonParse(JSON.stringify(val))
}
