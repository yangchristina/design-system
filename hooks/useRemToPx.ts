'use client'
import { useEffect, useState } from "react";

const useRemToPx = (multiplier: number): number => {
  const [itemSize, setItemSize] = useState(0)

  useEffect(() => {
    setItemSize(multiplier * parseFloat(getComputedStyle(document.documentElement).fontSize))
  }, [multiplier])

  return itemSize;
}

export default useRemToPx

export const remToPx = (multiplier: number): number => {
  if (typeof document === 'undefined' || typeof getComputedStyle === 'undefined') return 16 * multiplier
  if (!document || !getComputedStyle) return 16 * multiplier
  return multiplier * parseFloat(getComputedStyle(document.documentElement).fontSize)
}