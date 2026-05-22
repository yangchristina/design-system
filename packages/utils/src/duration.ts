import { Duration, FormatDistanceToken, Locale, formatDuration, intervalToDuration } from 'date-fns'
import { secondsInDay, secondsInHour, secondsInMonth, secondsInWeek, secondsInYear } from 'date-fns/constants'
import { pick, round } from 'lodash'

type DurationUnit = 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds'

const secondsToUnitUnrounded = (seconds: number, unit: DurationUnit) => {
    seconds = Math.round(seconds)
    switch (unit) {
        case 'years':
            return seconds / secondsInYear
        case 'months':
            return seconds / secondsInMonth
        case 'weeks':
            return seconds / secondsInWeek
        case 'days':
            return seconds / secondsInDay
        case 'hours':
            return seconds / secondsInHour
        case 'minutes':
            return seconds / 60
        case 'seconds':
            return seconds
    }
}

export const durationToUnit = ({ years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0 }: Duration, unit: DurationUnit) => {
    const timeInSeconds = seconds + minutes * 60 + hours * secondsInHour + days * secondsInDay + weeks * secondsInWeek + months * secondsInMonth + years * secondsInYear
    return secondsToUnitUnrounded(timeInSeconds, unit)
}

export const simplifyDuration = (duration: Duration) => {
    const timeInSeconds = durationToUnit(duration, 'seconds')
    const durationSimplified = intervalToDuration({
        start: 0,
        end: timeInSeconds * 1000,
    })
    return durationSimplified
}

const DURATION_UNITS = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'] as const

// precision = 'minutes' as DurationUnit,
export const formatDurationSimplified = (
    duration: Duration,
    {
        precision = 'minutes',
        unitStyle = 'short',
    }: {
        precision?: DurationUnit
        unitStyle?: 'short' | 'long'
    } = {}
) => {
    const index = DURATION_UNITS.findIndex((unit) => unit.slice(0, 2) === precision.slice(0, 2))
    if (index === -1) throw new Error('Invalid precision')

    // how to allow decimals?

    const durationSimplified = simplifyDuration(duration)

    const unusedUnits = DURATION_UNITS.slice(index + 1)

    if (unusedUnits.length > 0) {
        const unusedDuration = pick(durationSimplified, unusedUnits) as Duration

        const smallestUnitUnused = round(durationToUnit(unusedDuration, precision), 2) // round this number
        durationSimplified[precision] = (durationSimplified[precision] || 0) + smallestUnitUnused
    }

    // const formatBeginning = formatDuration(durationSimplified, { format: DURATION_UNITS.slice(0, index) })
    return (
        formatDuration(durationSimplified, {
            format: DURATION_UNITS.slice(0, index + 1),
            locale: unitStyle === 'short' ? getShortLocale('en') : undefined,
        }) || '0'
    )
}

type AppLanguages = 'en'

const formatDistanceLocale: Record<'en', Record<FormatDistanceToken, string>> = {
    en: {
        xSeconds: '{{count}}s',
        xMinutes: '{{count}} min',
        xHours: '{{count}} h',
        xDays: '{{count}} d',
        xWeeks: '{{count}} wk',
        xMonths: '{{count}} mo',
        xYears: '{{count}} yr',
        // lessThanXSeconds: '',
        // halfAMinute: '',
        // lessThanXMinutes: '',
        // aboutXHours: '',
        // aboutXWeeks: '',
        // aboutXMonths: '',
        // aboutXYears: '',
        // overXYears: '',
        // almostXYears: ''
        lessThanXSeconds: '<{{count}}s',
        halfAMinute: '30s',
        lessThanXMinutes: '<{{count}} min',
        aboutXHours: '~{{count}} h',
        aboutXWeeks: '~{{count}} wk',
        aboutXMonths: '~{{count}} mo',
        aboutXYears: '~{{count}} yr',
        overXYears: '>{{count}} yr',
        almostXYears: 'almost {{count}} yr',
    },
    // uk: {
    //     xSeconds: '{{count}} сек',
    //     xMinutes: '{{count}} хв',
    //     xHours: '{{count}} год',
    // },
}

type tokens = keyof typeof formatDistanceLocale.en

export const getShortLocale = (locale: AppLanguages): Pick<Locale, 'formatDistance'> => ({
    formatDistance: (token: tokens, count: number) => {
        return formatDistanceLocale[locale][token].replace('{{count}}', count.toString())
    },
})

// export default (seconds) => {
//     const duration = intervalToDuration({ start: 0, end: seconds * 1000 })
//     return formatDuration(duration, { format: ['hours', 'minutes', 'seconds'], locale: shortEnLocale })
// }
