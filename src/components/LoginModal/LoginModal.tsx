import React, {ReactNode, useRef, useState} from "react";
import styles from "./LoginModal.module.sass";
import cn from "classnames";
import ExitCross from "../../asserts/ExitCross.png";
import {Portal} from "../Portal/Portal";
import {useModal} from "../../hooks/useModalClose";
import {LoginModalInput} from "./Input/LoginModalInput";
import {LoginModalButton} from "./Button/LoginModalButton";
import {LoginModalAdditionalButton} from "./AdditionalButton/LoginModalAdditionalButton";

const cx = cn.bind(styles);

interface ModalProps {
    visible: boolean,
    onClose: () => void,
    onChange: () => void,
}

interface OverlayProps {
    visible: boolean,
    onClose: () => void,
}


export const Overlay = ({visible, onClose}: OverlayProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    useModal(ref, () => onClose());

    return (
        <>
            {visible && <div className={styles.overlay} ref={ref}></div>}
        </>
    )
}

// export const ModalLogin = ({visible, onClose}: ModalProps): JSX.Element => {
//     const [isLoginWindow, setIsLoginWindow] = useState(true);
//     const [isCodeSent, setIsCodeSent] = useState(false);
//
//     const ref = useRef<HTMLDivElement>(null);
//     const imageRef = useRef<HTMLImageElement>(null);
//
//     useModal(ref, () => onClose());
//     useModal(imageRef, () => onClose());
//
//     return (
//         <>
//             {visible && <Portal>
//                 <div className={styles.overlay} ref={ref}></div>
//                 <div className={cx(styles.modal, {
//                     modalLogin: isLoginWindow,
//                     modalRegister: !isLoginWindow
//                 })
//                 }>
//                     <div className={styles.modalHeader}>
//                         {isLoginWindow ? "Вход" : "Вход или регистрация"}
//                         <img src={ExitCross} className={styles.modalHeaderCross} ref={imageRef}/>
//                     </div>
//                     <LoginModalInput placeholder="Телефон" type="text" isFirstInput={true}/>
//                     {isLoginWindow && <LoginModalInput placeholder="Пароль" type="password" isFirstInput={false}/>}
//                     <LoginModalButton theme="PRIMARY">{isLoginWindow ? "Войти" : "Получить код"}</LoginModalButton>
//                     {isLoginWindow && <div className={styles.additionalButtonsDiv}>
//                         <LoginModalAdditionalButton handler={() => setIsLoginWindow(false)}>Войти с помощью
//                             смс</LoginModalAdditionalButton>
//                         <LoginModalAdditionalButton
//                             handler={() => setIsLoginWindow(false)}>Регистрация</LoginModalAdditionalButton>
//                     </div>}
//                     {!isLoginWindow && <div className={styles.additionalButtonsDiv}>
//                         <LoginModalAdditionalButton handler={() => setIsLoginWindow(true)}>Я уже
//                             зарегистрировался(-ась)</LoginModalAdditionalButton>
//                     </div>}
//                     <LoginModalButton theme="SECONDARY">Вход для партнёров</LoginModalButton>
//                 </div>
//             </Portal>}
//         </>
//     );
// }

export const ModalLogin = ({visible, onClose, onChange}: ModalProps): JSX.Element => {
    const imageRef = useRef<HTMLImageElement>(null);

    useModal(imageRef, () => onClose());

    return (
        <>
            {visible &&
                <div className={cn(styles.modal, styles.modalLogin)}>
                    <div className={styles.modalHeader}>
                        Вход
                        <img src={ExitCross} className={styles.modalHeaderCross} ref={imageRef}/>
                    </div>
                    <LoginModalInput placeholder="Телефон" type="text" isFirstInput={true}/>
                    <LoginModalInput placeholder="Пароль" type="password" isFirstInput={false}/>
                    <LoginModalButton theme="PRIMARY">Войти</LoginModalButton>
                    <div className={styles.additionalButtonsDiv}>
                        <LoginModalAdditionalButton handler={() => onChange()}>Войти с помощью
                            смс</LoginModalAdditionalButton>
                        <LoginModalAdditionalButton
                            handler={() => onChange()}>Регистрация</LoginModalAdditionalButton>
                    </div>
                    <LoginModalButton theme="SECONDARY">Вход для партнёров</LoginModalButton>
                </div>
            }
        </>
    );
}

export const ModalRegister = ({visible, onClose, onChange}: ModalProps): JSX.Element => {
    const imageRef = useRef<HTMLImageElement>(null);

    useModal(imageRef, () => onClose());

    return (
        <>
            {visible &&
                <div className={cn(styles.modal, styles.modalRegister)}>
                    <div className={styles.modalHeader}>
                        Вход или регистрация
                        <img src={ExitCross} className={styles.modalHeaderCross} ref={imageRef}/>
                    </div>
                    <LoginModalInput placeholder="Телефон" type="text" isFirstInput={true}/>
                    <LoginModalButton theme="PRIMARY">Получить код</LoginModalButton>
                    <div className={styles.additionalButtonsDiv}>
                        <LoginModalAdditionalButton handler={() => onChange()}>Я уже
                            зарегистрировался(-ась)</LoginModalAdditionalButton>
                    </div>
                    <LoginModalButton theme="SECONDARY">Вход для партнёров</LoginModalButton>
                </div>
            }
        </>
    )
}