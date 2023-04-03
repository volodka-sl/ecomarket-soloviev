import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {HomePage} from "./pages/HomePage";
import {ContactsPage} from "./pages/Contacts";
import {Provider} from "react-redux";
import {store} from "./store";

export const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/contacts" element={<ContactsPage/>}></Route>
                </Route>
            </Routes>
        </Provider>
    );
}

