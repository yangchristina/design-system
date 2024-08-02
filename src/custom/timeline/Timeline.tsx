'use client'
import React, { forwardRef, ReactNode, useRef, useCallback, useState } from 'react'
import styles from './Timeline.module.css'
import { format } from 'date-fns'
export interface TimelineItem {
    date?: Date;
    header: ReactNode;
    content: ReactNode;
    completed: boolean;
    size?: number;
    id: string | number;
}

export const Timeline = ({ items, offset = 0, grayOutCompleted = false, style }: { items: TimelineItem[], offset?: number, grayOutCompleted?: boolean, style?: Record<string, any> }) => {
    const [progressHeight, setProgressHeight] = useState<string | number>(0)
    const lastCompletedIndex = items.findLastIndex(item => item.completed)
    if (progressHeight !== '100%' && lastCompletedIndex === items.length - 1) {
        setProgressHeight('100%')
    }

    const onRefChange = useCallback(node => {
        if (node === null) {
            // DOM node referenced by ref has been unmounted
        } else {
            setProgressHeight(node.offsetTop + 15)
            // DOM node referenced by ref has changed and exists
        }
    }, []); // adjust deps

    return (
        <ul style={style} className={styles.timelineList}>
            <div className={styles.bar}>
                <div style={{ height: typeof progressHeight === 'string' ? progressHeight : progressHeight + offset }} className={styles.innerBar} />
                {/* <ProgressBar css={{ height: '100%', width: '100%' }} orientation={'vertical'} thickness={3} variant={"blue"} max={100} value={50} /> */}
            </div>
            {
                items.map((item, index) => {
                    const ref = (index - 1 === lastCompletedIndex) ? onRefChange : undefined
                    return <TimelineItem grayOutCompleted={grayOutCompleted} key={item.id} ref={ref} completed={item.completed} size={item.size} date={item.date} title={item.header} >{item.content}</TimelineItem>
                })
            }
        </ul>
    )
}

/**
 *
 * @param size 1-5
 * @returns
 */

interface Props { date?: Date, title: ReactNode, children: ReactNode, completed?: boolean, size?: number, grayOutCompleted: boolean }
const TimelineItem = forwardRef<any, Props>(
    ({ completed = false, children, title, date, size = 2, grayOutCompleted }, forwardedRef) => {
        const fontSize = (size + 2) * 8
        const shouldGray = completed && grayOutCompleted
        return (
            <>
                <dt data-gray={shouldGray} ref={forwardedRef} style={{ fontSize }} className={styles.dt}>
                    <sub className={styles.label} >{date ? format(date, 'MMM d') : 'TBD'}</sub>
                    <div className={styles.circleWrapper}>
                        <div data-completed={completed} className={styles.circle} />
                    </div>
                    {title}
                </dt>
                <dd data-gray={shouldGray} style={{ fontSize: fontSize * 0.8 }} className={styles.dd}>{children}</dd>
            </>
        )
    })
