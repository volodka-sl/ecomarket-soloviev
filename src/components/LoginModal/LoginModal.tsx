import React, {useRef, useState} from "react";
import styles from "../AuthorizeModal/LoginModal.module.sass";
import cn from "classnames";
import cnm from "classnames/bind"
import ExitCross from "../../assets/ExitCross.png";
import {useModal} from "../../hooks/useModalClose";
import {LoginModalButton} from "../AuthorizeModal/Button/LoginModalButton";
import {LoginModalAdditionalButton} from "../AuthorizeModal/AdditionalButton/LoginModalAdditionalButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {toggleLoginModal} from "../../store/ModalLoginSlice";


const cx = cnm.bind(styles);

interface ModalProps {
    onClose: () => void,
    onChange: () => void,
}

interface OverlayProps {
    onClose: () => void,
}


export const Overlay = ({onClose}: OverlayProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    useModal(ref, () => onClose());

    return (
        <div className={styles.overlay} ref={ref}></div>
    )
}

export const ModalCode = ({onClose, onChange}: ModalProps): JSX.Element => {
    const [codeRight, isCodeRight] = useState(true);
    const imageRef = useRef<HTMLImageElement>(null);

    useModal(imageRef, () => onClose());

    return (
        <div className={cx(styles.modal, {
            modalCode: codeRight,
            modaleCodeError: !codeRight,
        })}>
            <div className={styles.modalHeader}>
                Ввести код
                <img src={ExitCross} className={styles.modalHeaderCross} ref={imageRef}/>
            </div>
            <div className={styles.modalEnterCode}>
                Введите код отправленный вам на телефон
                <span className={styles.modalPhoneNumber}>+7 (999) 999 99 99</span>
            </div>
            {/*<LoginModalInput placeholder="Код" type="text" isFirstInput={true}/>*/}
            <LoginModalButton theme="PRIMARY" handler={() => null}>Отправить</LoginModalButton>
            <div className={styles.additionalButtonsDiv}>
                <LoginModalAdditionalButton handler={() => onChange()}>Не получила(-а) код</LoginModalAdditionalButton>
            </div>
            <LoginModalButton theme="SECONDARY">Вход для партнёров</LoginModalButton>
        </div>
    )
}

export const ModalLogin = ({onClose, onChange}: ModalProps): JSX.Element => {
    const imageRef = useRef<HTMLImageElement>(null);

    useModal(imageRef, () => onClose());

    return (
        <div className={cn(styles.modal, styles.modalLogin)}>
            <div className={styles.modalHeader}>
                Вход
                <img src={ExitCross} className={styles.modalHeaderCross} ref={imageRef}/>
            </div>
            {/*<LoginModalInput placeholder="Телефон" type="text" isFirstInput={true}/>*/}
            {/*<LoginModalInput placeholder="Пароль" type="password" isFirstInput={false}/>*/}
            <LoginModalButton theme="PRIMARY">Войти</LoginModalButton>
            <div className={styles.additionalButtonsDiv}>
                <LoginModalAdditionalButton handler={() => onChange()}>Войти с помощью
                    смс</LoginModalAdditionalButton>
                <LoginModalAdditionalButton
                    handler={() => onChange()}>Регистрация</LoginModalAdditionalButton>
            </div>
            <LoginModalButton theme="SECONDARY">Вход для партнёров</LoginModalButton>
        </div>

    );
}

export const ModalRegister = ({onClose, onChange}: ModalProps): JSX.Element => {
    const imageRef = useRef<HTMLImageElement>(null);

    useModal(imageRef, () => onClose());

    return (
        <div className={cn(styles.modal, styles.modalRegister)}>
            <div className={styles.modalHeader}>
                Вход или регистрация
                <img src={ExitCross} className={styles.modalHeaderCross} ref={imageRef}/>
            </div>
            {/*<LoginModalInput placeholder="Телефон" type="text" isFirstInput={true}/>*/}
            <LoginModalButton theme="PRIMARY" handler={() => onChange()}>Получить код</LoginModalButton>
            <div className={styles.additionalButtonsDiv}>
                <LoginModalAdditionalButton handler={() => onChange()}>Я уже
                    зарегистрировался(-ась)</LoginModalAdditionalButton>
            </div>
            <LoginModalButton theme="SECONDARY">Вход для партнёров</LoginModalButton>
        </div>
    )
}

export const Modal = ({onClose, onChange}: ModalProps): JSX.Element => {
    const [modalType, setModalType] = useState("LOGIN");
    const {activeModalLogin} = useSelector((state: RootState) => state.activeModal);

    const dispatch = useDispatch();

    switch (activeModalLogin) {
        default:
            return (<></>)
        case "LOGIN":
            return (<ModalLogin onClose={onClose} onChange={() => dispatch(toggleLoginModal("REGISTER"))}/>);
            break
        case "REGISTER":
            return (<ModalRegister onClose={onClose} onChange={() => dispatch(toggleLoginModal("CODESENT"))}/>);
            break
        case "CODESENT":
            return (<ModalCode onClose={onClose} onChange={() => dispatch(toggleLoginModal("LOGIN"))}/>);
            break
    }
}