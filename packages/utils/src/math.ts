export function convertRemToPixels(rem: number) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function mod(n: number, m: number) { //mod that always gives positive result
    return ((n % m) + m) % m;
}