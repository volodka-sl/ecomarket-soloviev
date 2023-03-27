import React, {ReactNode, useState} from 'react';
import styles from './Header.module.sass';
import HeaderLogo from '../../asserts/HeaderLogo.png';
import GeoPin from '../../asserts/GeoPin.png';
import LoginLogo from '../../asserts/LoginLogo.png';
import {NavLink, Link} from 'react-router-dom';
import cn from 'classnames';

export const Header = (): JSX.Element => {
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

                <div className={styles.headerRightLogin}>
                    <img className={styles.headerRightLoginLogo} src={LoginLogo}/>
                    Войти
                </div>
            </div>
        </header>
    )
}