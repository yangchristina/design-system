import React, { useMemo } from 'react'
import { Sheet, SheetContent, SheetTrigger, } from '../components/Sheet';
import { AlertSheet, AlertSheetContent, AlertSheetTrigger, } from '../components/AlertSheet';
import { MixIcon, RocketIcon } from '@radix-ui/react-icons';

const DayPanel = () => {

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <RocketIcon />
                </SheetTrigger>
                <SheetContent dialogBrightness={'none'} css={{
                    height: '100%',
                    padding: '$5',
                    gap: '$3',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // width: 'max-content',
                    // width: 5000,
                }}
                    style={{ minWidth: 'max-content', width: 350 }}
                    side="right">
                    <div>HI THERE</div>
                </SheetContent>
            </Sheet>
            <AlertSheet>
                <AlertSheetTrigger asChild>
                    <MixIcon />
                </AlertSheetTrigger>
                <AlertSheetContent dialogBrightness={'none'} css={{
                    height: '100%',
                    padding: '$5',
                    gap: '$3',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                    style={{ minWidth: 'max-content', width: 350 }}
                    side="right">
                    <div>HI THERE</div>
                </AlertSheetContent>
            </AlertSheet>
        </div>
    )
}

export default DayPanel