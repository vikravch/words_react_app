import React from 'react';
import LoginPage from "../../feature/auth/presentation/page/LoginPage";
import RegistrationPage from "../../feature/auth/presentation/page/RegistrationPage";
import WordsListPage from "../../feature/words/presentation/WordsListPage";
import TrainWordPage from "../../feature/words/presentation/TrainWordPage";
import EmojiPage from "../../feature/test/presentation/EmojiPage";
import {createBrowserRouter} from "react-router-dom";
import {isLoggedIn} from "../../feature/auth/domain/model/UserUseCases";

export const router = createBrowserRouter([
    { path: "/", element: (
        isLoggedIn()?
            <WordsListPage/>:<LoginPage/>
        )},
    { path: "login", element: <LoginPage/>},
    { path: "registration", element: <RegistrationPage/>},
    { path: "words", element: <WordsListPage/>},
    { path: "train", element: <TrainWordPage/>},
    { path: "test", element: <EmojiPage/>}
]);
