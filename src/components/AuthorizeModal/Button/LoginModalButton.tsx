import React, {ReactNode} from "react";
import styles from "../LoginModal.module.sass";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type ButtonProps = {
    theme: string,
    handler?: () => void,
    children: ReactNode,
}

export const LoginModalButton = ({theme, handler, children}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cx(styles.modalButton, {
                primaryButton: theme === "PRIMARY",
                secondaryButton: theme === "SECONDARY",
            })}
            onClick={handler}
        >
            {children}
        </button>
    )
}