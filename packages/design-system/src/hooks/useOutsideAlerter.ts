import { MutableRefObject, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref: MutableRefObject<any>, fn: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        fn()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
