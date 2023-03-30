import React from "react";
import styles from "../LoginModal.module.sass";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type LoginProps = {
    placeholder: string,
    isFirstInput: boolean
};

export const LoginModalInput = ({placeholder, isFirstInput}: LoginProps): JSX.Element => {
    return (
        <input
            className={cx(styles.modalInput, {
                notFirstInput: !isFirstInput,
            })}
            type="text" placeholder={placeholder}/>
    )
}
