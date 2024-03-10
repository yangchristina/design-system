import { format } from "date-fns"

export function getDayStringFormat(date: Date | number) {
    return format(date, 'yyyy-MM-dd')
}