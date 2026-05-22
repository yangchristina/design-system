import { addDays, addWeeks, endOfDay, nextDay, previousDay } from 'date-fns';
import { parseDate } from 'chrono-node';
import { DAYS_OF_WEEK } from './constants';
import { castDayOfWeek } from './date';

/**
 * Natural-language date parsing.
 *
 * Kept in its own module so that `chrono-node` is only pulled into bundles
 * that actually use `parseFromDateString`. Importing other date utilities
 * (e.g. `changeTime`, `toDayStringFormat`) must NOT reach `chrono-node`.
 */

const testStart = (input: string, prefix: string) => input.toLowerCase().startsWith(prefix);

export const parseFromDateString = (input: string) => {
    if (testStart(input, 'tod')) {
        return endOfDay(new Date());
    }
    if (testStart(input, 'tom')) {
        return endOfDay(addDays(new Date(), 1));
    }
    if (testStart(input, 'yes')) {
        return endOfDay(addDays(new Date(), -1));
    }
    if (testStart(input, 'next week')) {
        return endOfDay(addWeeks(new Date(), 1));
    }
    if (testStart(input, 'last week')) {
        return endOfDay(addWeeks(new Date(), -1));
    }
    for (let i = 0; i < DAYS_OF_WEEK.length; i++) {
        if (testStart(input, 'next ' + DAYS_OF_WEEK[i].slice(0, 3).toLowerCase())) {
            return endOfDay(nextDay(new Date(), castDayOfWeek(i % 7)));
        }
    }
    for (let i = 0; i < DAYS_OF_WEEK.length; i++) {
        if (testStart(input, 'last ' + DAYS_OF_WEEK[i].slice(0, 3).toLowerCase())) {
            return endOfDay(previousDay(new Date(), castDayOfWeek(i % 7)));
        }
    }

    return parseDate(input);
};
