import { differenceInCalendarDays, differenceInCalendarWeeks, differenceInMonths, differenceInYears, endOfDay, format, Interval, isSameDay, isSameYear, NearestMinutes, startOfDay } from 'date-fns';
import { DAYS_OF_WEEK, MS_PER_HOUR } from './constants';
import { getTimezoneOffset } from 'date-fns-tz';
import { DayOfWeekNum } from './types';

export const millisecondsInHour = 60 * 60 * 1000;
export const millisecondsInMinute = 60 * 1000;

export const castDayOfWeek = (day: number) => (day % 7) as DayOfWeekNum;
export const castNearestMinutes = (minutes: number) => {
    return Math.round(minutes % 30) as NearestMinutes;
};

export function toDayStringFormat(date: Date | number) {
    return format(date, 'yyyy-MM-dd');
}

export function isSameTime(first: Date, second: Date) {
    return first.getHours() === second.getHours() && first.getMinutes() === second.getMinutes();
}

// make d1 match time of d2
export function changeTime(d1: Date | number, d2: Date | number) {
    const date = new Date(d1);
    const time = new Date(d2);
    date.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), 0);
    return date;
}

/**
 * make d1 match day of d2
 * @param d1
 * @param d2
 * @returns
 */
export function changeDay(d1: Date | number, d2: Date | number) {
    return changeTime(d2, d1);
}

export const formatTime = (date: Date | number | string) => {
    const TIME_FORMAT = `h:mmaaa`;
    return format(date, TIME_FORMAT);
};

export function formatDay(date: Date | number) {
    return format(date, 'yyyy-MM-dd');
}

export function formatDate(date: Date | number) {
    return format(date, 'yyyy-MM-dd h:mmaaa');
}

export function dayStringToLocalDate(isoString: string) {
    const [year, month, day] = isoString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), 0, 0, 0);
}

// TODO: fix/improve this function
export const formatDateRange = ({ start, end }: Interval) => {
    const TIME_FORMAT = 'h:mmaaa';
    if (isSameDay(start, end)) {
        const day = format(start, 'MMM. d, y');

        //if (isSameDayPeriod(start, end)) {
        //    return day + format(start, 'h' + (getMinutes(start) === 0 ? ':00' : ':mm')) + ' - ' + format(end, 'h' + (getMinutes(end) === 0 ? ':00' : ':mm') + ' aaa')
        //}
        return `${day}, ${formatTime(start)}-${formatTime(end)}`; //+ ', ' + formatTime(start) + ' - ' + formatTime(end)
    }
    // else if (isSameMonth(start, end)) {
    //     return format(start, 'MMM. d, h:mmaaa') + ' - ' + format(end, 'd, h:mmaaa, y')
    // }
    if (isSameYear(start, end)) {
        return format(start, `${TIME_FORMAT} MMM. d`) + ' - ' + format(end, `${TIME_FORMAT} MMM. d, y`);
    }
    return format(start, 'PPPp') + ' - ' + format(end, 'PPPp');
};

// TODO: days of week, ex. NEXT MONDAY
export function distanceFromNow(date: Date | number) {
    const years = differenceInYears(date, Date.now());
    if (years) {
        if (years < 0) {
            return years === -1 ? 'last year' : `${years} years ago`;
        }
        return years === 1 ? 'next year' : `in ${years} years`;
    }

    const months = differenceInMonths(date, Date.now());
    if (months) {
        if (months < 0) {
            return months === -1 ? 'last month' : `${months} months ago`;
        }
        return months === 1 ? 'next month' : `in ${months} months`;
    }

    const weeks = differenceInCalendarWeeks(date, Date.now());
    if (weeks) {
        if (weeks < 0) {
            return weeks === -1 ? 'last week' : `${weeks} weeks ago`;
        }
        return weeks === 1 ? 'next week' : `in ${weeks} weeks`;
    }

    const days = differenceInCalendarDays(date, Date.now());
    if (days) {
        if (days < 0) {
            return days === -1 ? 'yesterday' : `${days} days ago`;
        }
        return days === 1 ? 'tomorrow' : `in ${days} days`;
    }
    return 'today';
}

export function parseTime(timeString: string) {
    if (timeString == '') return null;

    // support 0800h 0930h format
    const numMatches = timeString.match(/^\d{4}h/);
    if (numMatches) {
        const numMatch = numMatches[0];
        timeString = numMatch.slice(0, 2) + ':' + numMatch.slice(2, 4);
    }

    const d = new Date();
    const time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
    if (!time) return null;
    d.setHours(parseInt(time[1], 10) + (parseInt(time[1], 10) < 12 && time[4] ? 12 : 0));
    d.setMinutes(parseInt(time[3], 10) || 0);
    d.setSeconds(0, 0);
    return d;
}

/**
 * 1-7 or SUN-SAT
 * @param day
 */
export const dayOfWeekStringToAWSNumber = (day: string) => {
    const shorthand = day.trim().slice(0, 2).toLowerCase();
    return DAYS_OF_WEEK.findIndex((x) => x.toLowerCase().startsWith(shorthand)) + 1;
};

export function prettyDate(date: Date | number) {
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

export const eraseOverlapInIntervals = (intervals: [number, number][]) => {
    let res: [number, number][] = [];
    intervals.sort((a, b) => a[1] - b[1]); // sort by end
    let prev_end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (prev_end > intervals[i][0]) {
            // overlap
            if (intervals[i][1] - prev_end > 0) res.push([prev_end, intervals[i][1]]);
        } else {
            // no overlap
            res.push(intervals[i]);
        }
        prev_end = intervals[i][1];
    }

    return res;
};

/**
 *
 * @param date
 * @param timezone
 * @returns
 */
export const startOfDayInTimezone = (timezone: string, year: number, monthIndex: number, date?: number | undefined) => {
    const utcDate = Date.UTC(year, monthIndex, date, 0, 0, 0);
    return new Date(utcDate - getTimezoneOffset(timezone, utcDate));
};

/**
 *
 * @param date
 * @param timezone
 * @returns
 */
export const endOfDayInTimezone = (timezone: string, year: number, monthIndex: number, date?: number | undefined) => {
    const utcDate = Date.UTC(year, monthIndex, date, 23, 59, 59, 999);
    return new Date(Date.UTC(year, monthIndex, date, 23, 59, 59, 999) - getTimezoneOffset(timezone, utcDate));
};

export const isAlmostStartOfDay = (date: Date | number, ref?: Date | number, tol = MS_PER_HOUR) => Math.abs(new Date(date).getTime() - startOfDay(ref || date).getTime()) <= tol;
export const isAlmostEndOfDay = (date: Date | number, ref?: Date | number, tol = MS_PER_HOUR) => Math.abs(new Date(date).getTime() - endOfDay(ref || date).getTime()) <= tol;

export const isAlmostFullDay = (start: Date | number, end: Date | number, ref?: Date | number, tol = MS_PER_HOUR) => isAlmostStartOfDay(start, ref, tol) && isAlmostEndOfDay(end, ref || start, tol);
