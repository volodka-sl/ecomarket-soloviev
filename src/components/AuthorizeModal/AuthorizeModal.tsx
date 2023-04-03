import React, {useRef} from "react";
import ReactModal from "react-modal";
import Modal from 'react-modal';
import styles from "./LoginModal.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {toggleLoginModal} from "../../store/ModalLoginSlice";
import cn from "classnames";
import ExitCross from "../../assets/ExitCross.png";
import {LoginModalInput} from "./Input/LoginModalInput";
import {LoginModalButton} from "./Button/LoginModalButton";
import {LoginModalAdditionalButton} from "./AdditionalButton/LoginModalAdditionalButton";
import {useModal} from "../../hooks/useModalClose";

Modal.setAppElement("#root");
export const AuthorizeModal = () => {
    const {isLoginModalActive} = useSelector((state: RootState) => state.activeModal);
    const dispatch = useDispatch();

    const ref = useRef<HTMLImageElement>(null);
    useModal(ref, () => dispatch(toggleLoginModal("")));

    return (
        <>
            <ReactModal
                isOpen={isLoginModalActive}

                onRequestClose={() => dispatch(toggleLoginModal(""))}

                portalClassName={
                    "AuthorizeModal__Portal"
                }

                overlayClassName={
                    styles.overlay
                }

                className={
                    cn(styles.modal, styles.modalLogin)
                }

                shouldCloseOnEsc={true}

                contentElement={
                    () =>
                        <div className={cn(styles.modal, styles.modalLogin)}>
                            <div className={styles.modalHeader}>
                                Вход
                                <img src={ExitCross} className={styles.modalHeaderCross}
                                     ref={ref}/>
                            </div>
                            <LoginModalInput placeholder="Телефон" type="text" isFirstInput={true}/>
                            <LoginModalInput placeholder="Пароль" type="password" isFirstInput={false}/>
                            <LoginModalButton theme="PRIMARY">Войти</LoginModalButton>
                            <div className={styles.additionalButtonsDiv}>
                                <LoginModalAdditionalButton handler={() => dispatch(toggleLoginModal("REGISTER"))}>Войти
                                    с помощью
                                    смс</LoginModalAdditionalButton>
                                <LoginModalAdditionalButton
                                    handler={() => dispatch(toggleLoginModal("REGISTER"))}>Регистрация</LoginModalAdditionalButton>
                            </div>
                            <LoginModalButton theme="SECONDARY">Вход для партнёров</LoginModalButton>
                        </div>
                }
            />
        </>
    )
}
