import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {HomePage} from "./pages/HomePage";
import {ContactsPage} from "./pages/Contacts";

export const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/contacts" element={<ContactsPage/>}></Route>
            </Route>
        </Routes>
    );
}

