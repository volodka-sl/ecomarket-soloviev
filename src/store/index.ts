import {activeModalTypeSlice} from "./ModalLoginSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [activeModalTypeSlice.name]: activeModalTypeSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
