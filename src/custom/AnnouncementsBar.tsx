'use client'
import React from 'react'
import { Cross1Icon } from '@radix-ui/react-icons';
import { IconButton } from '../components/IconButton';
import { styled } from '../stitches.config';

const Container = styled('div', {
    position: 'absolute',
    display: 'flex',
    top: 0,
    flexDirection: 'column',
    gap: 1,
    backgroundColor: '$primary8',
    alignItems: 'stretch',
    border: '1px solid $primary8',
    height: 'max-content',
    width: '100%',
})

const Banner = styled('div', {
    // Reset
    boxSizing: 'border-box',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$3',

    variants: {
        size: {
            '1': {
                py: '$1',
                px: '$4',
            },
        },
        variant: {
            loContrast: {
                backgroundColor: '$loContrast',
            },
            gray: {
                backgroundColor: '$gray3',
            },
            blue: {
                backgroundColor: '$info3',
            },
            green: {
                backgroundColor: '$success3',
            },
            red: {
                backgroundColor: '$error3',
            },
            primary: {
                backgroundColor: '$primary5',
            },
        },
        rounded: {
            true: {
                borderRadius: '$pill',
            },
        },
        border: {
            true: {
                borderRadius: '$pill',
            },
        },
    },
    compoundVariants: [
        {
            border: 'true',
            variant: 'gray',
            css: {
                borderColor: '$gray6',
            },
        },
        {
            border: 'true',
            variant: 'blue',
            css: {
                borderColor: '$info11',
            },
        },
        {
            border: 'true',
            variant: 'loContrast',
            css: {
                borderColor: '$gray6',
            },
        },
    ],
    defaultVariants: {
        size: '1',
        variant: 'primary',
    },
});

const IconContainer = styled(IconButton, {
    position: 'absolute',
    right: '$1',
})

export interface Announcement {
    id: string | number,
    message: string,
    allowClose: boolean,
    onClose?: () => void
}

export type AnnouncementProps = {
    announcements: Announcement[],
    setAnnouncements: (value: React.SetStateAction<Announcement[]>) => void
}

export const AnnouncementsBar = ({ announcements, setAnnouncements }: AnnouncementProps) => {
    if (announcements.length === 0) return <></>

    const handleClose = (id: string | number) => {
        setAnnouncements(announcements.filter((announcement) => announcement.id !== id))
    }

    return (
        <Container>
            {
                announcements.map((announcement) => {
                    return (
                        <Banner key={announcement.id} >{announcement.message}
                            {announcement.allowClose && <IconContainer onClick={() => {
                                announcement.onClose && announcement.onClose()
                                handleClose(announcement.id)
                            }}>
                                <Cross1Icon />
                            </IconContainer>}
                        </Banner>
                    )
                })
            }
        </Container>
    )
}
