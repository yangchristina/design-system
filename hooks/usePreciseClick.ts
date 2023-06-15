import { useRef } from "react";

export const usePreciseClick = (onSingleClick: () => void, onDoubleClick?: () => void) => {
    const timer = useRef<any>()

    const onClickHandler = (event: any) => {
        clearTimeout(timer.current);

        if (event.detail === 1) {
            timer.current = setTimeout(onSingleClick, 200)
        } else if (event.detail === 2) {
            onDoubleClick && onDoubleClick()
        }
    }

    return { onClickHandler }
}
