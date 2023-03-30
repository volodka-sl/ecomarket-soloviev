import React, {useEffect} from "react";
import {makeAutoObservable} from "mobx";

// interface Props {
//     ref: HTMLDivElement,
//     handler: () => void,
// }
//
// export const useModalClose = ({ref, handler}: Props) => {
//     useEffect(() => {
//         const reference = ref.current;
//
//         const listener = e => {
//             if (reference === e.target) handler()
//         }
//
//         reference?.addEventListener("mousedown", listener);
//
//         return () => reference?.removeEventListener("mousedown", listener)
//     }, [ref, handler]);
// }

class ModalStore {
    currentModal = null;

    constructor() {
        this.currentModal = null;
        makeAutoObservable(this);
    };

    setCurrentModal = (modal) => {
        this.currentModal = modal;
    };

    clearCurrentModal = () => {
        this.currentModal = null;
    };
}

