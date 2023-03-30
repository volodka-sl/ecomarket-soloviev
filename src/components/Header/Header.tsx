import React, {useRef, useState} from 'react';
import styles from './Header.module.sass';
import HeaderLogo from '../../asserts/HeaderLogo.png';
import GeoPin from '../../asserts/GeoPin.png';
import LoginLogo from '../../asserts/LoginLogo.png';
import {NavLink, Link} from 'react-router-dom';
import cn from 'classnames';
import {Overlay, ModalLogin, ModalRegister} from "../LoginModal/LoginModal";
import {useModal} from "../../hooks/useModalClose";
import {Portal} from "../Portal/Portal";

export const Header = (): JSX.Element => {
    const [visible, setVisible] = useState(false);
    const [modalType, setModalType] = useState("LOGIN");

    const ref = useRef<HTMLDivElement>(null);

    useModal(ref, () => setVisible(true));

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <Link
                    to="/"
                >
                    <img className={styles.headerLeftLogo} src={HeaderLogo}/>
                </Link>

                <nav className={styles.headerLeftNav}>
                    <NavLink
                        to="/"
                        className={({isActive}) => cn(styles.link, isActive && styles.activeLink)}
                    >
                        Главная
                    </NavLink>

                    <NavLink
                        to="/contacts"
                        className={({isActive}) => cn(styles.link, isActive && styles.activeLink)}
                    >
                        Пункты сбора
                    </NavLink>

                    <NavLink
                        to="/PATH"
                        className={({isActive}) => cn(styles.link, isActive && styles.activeLink)}
                    >
                        ЭкоМаркет
                    </NavLink>

                    <NavLink
                        to="/PATH"
                        className={({isActive}) => cn(styles.link, isActive && styles.activeLink)}
                    >
                        О сервисе
                    </NavLink>
                </nav>
            </div>

            <div className={styles.headerRight}>
                <div className={styles.headerRightLocation}>
                    <img className={styles.headerRightLocationPin} src={GeoPin}/>
                    Казань
                </div>

                <div className={styles.headerRightLogin} ref={ref}>
                    <img className={styles.headerRightLoginLogo} src={LoginLogo}/>
                    Войти
                </div>
                <Portal>
                    <Overlay visible={visible} onClose={() => setVisible(false)}/>
                    {modalType === "LOGIN" ? <ModalLogin visible={visible} onClose={() => setVisible(false)}
                                                         onChange={() => setModalType("REGISTER")}/> :
                        <ModalRegister visible={visible} onClose={() => setVisible(false)}
                                       onChange={() => setModalType("LOGIN")}/>}
                </Portal>
            </div>
        </header>
    )
}