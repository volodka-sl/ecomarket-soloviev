import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type AuthorizeState = {
    activeModalLogin: string,
    isLoginModalActive: boolean
}

const initialState: AuthorizeState = {
    activeModalLogin: "",
    isLoginModalActive: false,
};

export const activeModalTypeSlice = createSlice({
    name: "activeModal",
    initialState,
    reducers: {
        toggleLoginModal: (state, action: PayloadAction<string>) => {
            state.activeModalLogin = action.payload;
            state.isLoginModalActive = !!action.payload;
        }
    }
})

export const {toggleLoginModal} = activeModalTypeSlice.actions;