import React, { useState } from 'react'

export const useDoubleTap = () => {
    const [mylatesttap, setMylatesttap] = useState(0)
    function handleDoubleTap(callback: () => void) {

        var now = new Date().getTime();
        var timesince = now - mylatesttap;
        if ((timesince < 600) && (timesince > 0)) {

            // double tap   
            callback()
        } else {
            // too much time to be a doubletap
        }

        setMylatesttap(new Date().getTime())
    }
    return handleDoubleTap
}
