// file: store.ts
import { configureStore } from '@reduxjs/toolkit'
import {logger} from "redux-logger/src";
import authReducer from "../../feature/auth/presentation/redux/AuthSlice";
import wordsReducer from "../../feature/words/presentation/redux/WordsSlice";

const reducer = {
    auth: authReducer,
    words: wordsReducer,
}

const preloadedState = {}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
})
