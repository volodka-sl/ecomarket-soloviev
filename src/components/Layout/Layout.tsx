import React, {useState} from "react";
import {Header} from "../Header/Header";
import {Outlet} from 'react-router-dom'

export const Layout = (): JSX.Element => {
    return(
        <div>
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
}