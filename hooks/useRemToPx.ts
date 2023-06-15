import { useEffect, useState } from "react";

const useRemToPx = (multiplier: number) : number => { 
    const [itemSize, setItemSize] = useState(0)

    useEffect(() => {
      setItemSize(multiplier * parseFloat(getComputedStyle(document.documentElement).fontSize))
    }, [multiplier])
    
    return itemSize;
}

export default useRemToPx