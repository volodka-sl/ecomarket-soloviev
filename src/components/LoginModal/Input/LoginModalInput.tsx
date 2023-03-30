import React from "react";
import styles from "../LoginModal.module.sass";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type LoginProps = {
    placeholder: string,
    type: string,
    isFirstInput: boolean
};

export const LoginModalInput = ({placeholder, type, isFirstInput}: LoginProps): JSX.Element => {
    return (
        <input
            className={cx(styles.modalInput, {
                notFirstInput: !isFirstInput,
            })}
            type={type} placeholder={placeholder}/>
    )
}
