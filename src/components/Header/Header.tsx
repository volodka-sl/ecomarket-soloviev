import React, {useRef, useState} from 'react';
import styles from './Header.module.sass';
import HeaderLogo from '../../assets/HeaderLogo.png';
import GeoPin from '../../assets/GeoPin.png';
import LoginLogo from '../../assets/LoginLogo.png';
import {NavLink, Link} from 'react-router-dom';
import cn from 'classnames';
import {useModal} from "../../hooks/useModalClose";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {toggleLoginModal} from "../../store/ModalLoginSlice";
import {AuthorizeModal} from "../AuthorizeModal/AuthorizeModal";

export const Header = (): JSX.Element => {
    const {activeModalLogin, isLoginModalActive} = useSelector((state: RootState) => state.activeModal);
    const dispatch = useDispatch();

    const ref = useRef<HTMLDivElement>(null);
    useModal(ref, () => dispatch(toggleLoginModal("LOGIN")));

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
                <AuthorizeModal/>
            </div>
        </header>
    )
}