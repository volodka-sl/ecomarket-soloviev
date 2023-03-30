import React, {useEffect, useRef, useState} from "react";
import styles from "./LoginModal.module.sass";
import ExitCross from "../../asserts/ExitCross.png";
import {Portal} from "../Portal/Portal";
import {useModal} from "../../hooks/useModalClose";
import {LoginModalInput} from "./LoginModalInput/LoginModalInput";
import {LoginModalButton} from "./LoginModalButton/LoginModalButton";

interface Props {
    visible: boolean,
    onClose: () => void,
}

export const ModalLogin = ({visible, onClose}: Props): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useModal(ref, () => onClose());
    useModal(imageRef, () => onClose());

    return (
        <>
            {visible && <Portal>
                <div className={styles.overlay} ref={ref}></div>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        Вход
                        <img src={ExitCross} className={styles.modalHeaderCross} ref={imageRef}/>
                    </div>
                    <LoginModalInput placeholder="Телефон" isFirstInput={true}/>
                    <LoginModalInput placeholder="Пароль" isFirstInput={false}/>
                    <LoginModalButton theme="PRIMARY">Войти</LoginModalButton>
                </div>
            </Portal>}
        </>
    );
}