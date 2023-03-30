import React, {RefObject, useEffect} from "react";


export const useModal = (ref: RefObject<HTMLDivElement>, handler: () => void) => {
    useEffect(() => {
        const reference = ref?.current;

        const listener = (e: MouseEvent) => {
            if (reference === e.target) handler();
        }

        reference?.addEventListener("mousedown", listener)

        return () => reference?.removeEventListener("mousedown", listener)
    }, [ref, handler])
}
