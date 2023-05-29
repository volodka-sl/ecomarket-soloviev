import React, {useRef} from "react";
import styles from "./LoginModal.module.sass";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {toggleLoginModal} from "../../store/ModalLoginSlice";
import cnm from "classnames/bind";
import ExitCross from "../../assets/ExitCross.png";
import * as yup from 'yup';
import {LoginModalButton} from "./Button/LoginModalButton";
import {LoginModalAdditionalButton} from "./AdditionalButton/LoginModalAdditionalButton";
import {useModal} from "../../hooks/useModalClose";
import {Form, Field, Formik} from "formik";
import {yupRuLocale} from './yuplocales'
import {CSSTransition} from "react-transition-group";
import {AnimatePresence, motion} from "framer-motion";

yupRuLocale()

const cx = cnm.bind(styles);

const validationSchema = yup.object({
    phone: yup.string().required(),
    password: yup.string().required()
})


export const AuthorizeModal = () => {
    const {isLoginModalActive} = useSelector((state: RootState) => state.activeModal);
    const dispatch = useDispatch();

    const ref = useRef<HTMLImageElement>(null);
    useModal(ref, () => dispatch(toggleLoginModal("")));

    const divRef = useRef<HTMLDivElement>(null);
    useModal(divRef, () => dispatch(toggleLoginModal("")));

    return (
        <AnimatePresence>
            {isLoginModalActive && <>
                <div className={styles.overlay} ref={divRef}></div>
                <Formik initialValues={{
                    phone: "",
                    password: "",
                }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values)
                        }}>
                    {({errors}) => (
                        <Form method="POST">
                            <motion.div className={cx(styles.modal, styles.modalLogin, {
                                modalLoginSingleError: (errors.phone || errors.password) && !(errors.phone && errors.password),
                                modalLoginDoubleError: errors.phone && errors.password,
                            })}
                                        key="modal"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 100}}
                                        exit={{opacity: 0}}
                                        transition={{ease: "easeIn", duration: 0.4}}
                            >
                                <div className={styles.modalHeader}>
                                    Вход
                                    <img src={ExitCross} className={styles.modalHeaderCross}
                                         ref={ref}/>
                                </div>
                                <label htmlFor="phone"></label>
                                <Field id="phone" name="phone" placeholder="Телефон" type="text"
                                       className={cx(styles.modalInput, {
                                           inputError: errors.phone
                                       })}></Field>
                                {errors.phone &&
                                    <div className={styles.fieldError}>{errors.phone}</div>}
                                <label htmlFor="password"></label>
                                <Field id="password" name="password" placeholder="Пароль" type="password"
                                       className={cx(styles.modalInput, styles.notFirstInput, {
                                           inputError: errors.password
                                       })}></Field>
                                {errors.password &&
                                    <div className={styles.fieldError}>{errors.password}</div>}
                                <LoginModalButton theme="PRIMARY">Войти</LoginModalButton>
                                <div className={styles.additionalButtonsDiv}>
                                    <LoginModalAdditionalButton
                                        handler={() => dispatch(toggleLoginModal("REGISTER"))}>Войти
                                        с помощью
                                        смс</LoginModalAdditionalButton>
                                    <LoginModalAdditionalButton
                                        handler={() => dispatch(toggleLoginModal("REGISTER"))}>Регистрация</LoginModalAdditionalButton>
                                </div>
                                <LoginModalButton theme="SECONDARY">Вход для партнёров</LoginModalButton>
                            </motion.div>
                        </Form>
                    )}
                </Formik>
            </>}
        </AnimatePresence>
    )
}
