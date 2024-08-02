import { format } from "date-fns"

export function getDayStringFormat(date: Date | number) {
    return format(date, 'yyyy-MM-dd')
}

export function dayStringToLocalDate(isoString: string) {
    const [year, month, day] = isoString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 0, 0, 0);
}