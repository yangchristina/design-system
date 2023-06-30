import React, { useState } from 'react'
import { AppBar } from '../components/AppBar'
import { Banner } from '../components/Banner'
import { Announcement, AnnouncementsBar } from '../custom/AnnouncementsBar'

const BannerDemo = () => {
    const [announcements, setAnnouncements] = useState<Announcement[]>([
        {
            message: "HELLO i'm first",
            id: 0,
            allowClose: true,
        },
        {
            message: 'This is a test message',
            id: '1',
            allowClose: true,
            onClose: console.log
        },
        {
            message: 'This is a test 2',
            id: '2',
            allowClose: false,
        }
    ])
    return (
        <div>
            <AnnouncementsBar announcements={announcements} setAnnouncements={setAnnouncements} />
            <AppBar>App bar</AppBar>
            <Banner>Banner</Banner>
        </div>
    )
}

export default BannerDemo