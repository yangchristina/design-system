'use client'
import React, { forwardRef, ReactNode, useRef, useCallback, useState } from 'react'
import styles from "./Timeline.module.css";

export interface TimelineItem {
    date: Date;
    header: ReactNode;
    content: ReactNode;
    completed: boolean;
    size?: number;
    id: string | number;
}

export const Timeline = ({ items }: { items: TimelineItem[] }) => {
    const [progressHeight, setProgressHeight] = useState(0)
    const lastCompletedIndex = items.findLastIndex(item => item.completed)
    const lastCompletedRef = useRef<any>()

    const onRefChange = useCallback(node => {
        if (node === null) {
            // DOM node referenced by ref has been unmounted
        } else {
            setProgressHeight(node.offsetTop)
            // DOM node referenced by ref has changed and exists
        }
    }, []); // adjust deps

    return (
        <ul className={styles.timelineList}>
            {
                items.map((item, index, arr) => {
                    const isLast = index === arr.length - 1 && lastCompletedIndex === arr.length - 1
                    const ref = (index - 1 === lastCompletedIndex || isLast) ? onRefChange : undefined
                    return <TimelineItem key={item.id} ref={ref} completed={item.completed} size={item.size} date={item.date} title={item.header} >{item.content}</TimelineItem>
                })
            }
            <div className={styles.bar}>
                <div style={{ height: progressHeight }} className={styles.innerBar} />
                {/* <ProgressBar css={{ height: '100%', width: '100%' }} orientation={'vertical'} thickness={3} variant={"blue"} max={100} value={50} /> */}
            </div>
        </ul>
    )
}

/**
 *
 * @param size 1-5
 * @returns
 */

interface Props { date: Date, title: ReactNode, children: ReactNode, completed?: boolean, size?: number }
const TimelineItem = forwardRef<any, Props>(
    ({ completed = false, children, size = 2 }, forwardedRef) => {
        return (
            <>
                <dt ref={forwardedRef} style={{ fontSize: (size + 2) * 8 }} className={styles.dt}>
                    <div className={styles.circleWrapper}>
                        <div data-completed={completed} className={styles.circle} />
                    </div>
                    Beast of Bodmin
                </dt>
                <dd className={styles.dd}>{children}</dd>
            </>
        )
    })

const TimelineItemContent = ({ }: { date: Date, title: ReactNode, children: ReactNode }) => {
    return (
        <li className={styles.content}>
            <ul>
                <li>Task 1</li>
                <li>Assignment 2</li>
            </ul>
        </li>
    )
}
