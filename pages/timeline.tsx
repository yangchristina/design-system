import React from 'react'
import { Timeline, TimelineItem } from '../custom/timeline/Timeline'

const TimelineDemo = () => {
    const defaultItems: TimelineItem[] = [
        {
            completed: true,
            date: new Date(),
            header: "Milestone 0",
            content: "Form a group",
            size: 1,
            id: 0,
        },
        {
            completed: true,
            date: new Date(),
            header: "Milestone 1",
            content: "Project proposal",
            size: 2,
            id: 1,
        },
        {
            completed: false,
            date: new Date(),
            header: "Milestone 2",
            content: "Definition of relations and SQL DDL; normalization complete; proposed queries in English submitted",
            size: 3,
            id: 3,
        },
        {
            completed: false,
            date: new Date(),
            header: "Milestone 3",
            content: "Project check-in",
            size: 1,
            id: 3,
        }
    ]
    return (
        <div style={{ padding: 30, width: '50%' }} >
            <Timeline
                grayOutCompleted
                items={defaultItems}
            />
        </div>
    )
}

export default TimelineDemo