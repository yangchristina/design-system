import React from 'react'
import { Timeline, TimelineItem } from '../custom/timeline/Timeline'

const TimelineDemo = () => {
    const defaultItems: TimelineItem[] = [
        {
            completed: true,
            date: new Date(),
            header: "Byy",
            content: "HDFOISJFOISJDFOI sdfnsldfjsl sdfoisajgoa afjioas OSEJFSO",
            size: 1,
            id: 0,
        },
        {
            completed: true,
            date: new Date(),
            header: "Byy",
            content: "HDFOISJFOISJDFOI sdfnsldfjsl sdfoisajgoa afjioas OSEJFSO",
            size: 2,
            id: 1,
        },
        {
            completed: false,
            date: new Date(),
            header: "Byy",
            content: "HDFOISJFOISJDFOI sdfnsldfjsl sdfoisajgoa afjioas OSEJFSO",
            size: 3,
            id: 3,
        }
    ]
    return (
        <div style={{ padding: 30, width: '50%' }} >
            <Timeline
                items={defaultItems}
            />
        </div>
    )
}

export default TimelineDemo