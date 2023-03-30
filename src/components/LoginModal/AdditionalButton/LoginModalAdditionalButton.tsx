import React, {ReactNode} from "react";
import styles from "../LoginModal.module.sass";


type AdditionalButtonProps = {
    handler: () => void,
    children: ReactNode,
}

export const LoginModalAdditionalButton = ({handler, children}: AdditionalButtonProps): JSX.Element => {
    return (
        <button className={styles.modalButtonAdditional} onClick={handler}>{children}</button>
    )
}