import React, {Component, useContext} from 'react';
import {RouterContext, useRouterContext, withRouterContext} from "../context/RouterContext";
import LoginPage from "../../feature/auth/presentation/page/LoginPage";
import RegistrationPage from "../../feature/auth/presentation/page/RegistrationPage";
import WordsListPage from "../../feature/words/presentation/WordsListPage";
import TrainWordPage from "../../feature/words/presentation/TrainWordPage";
import TestPage from "../../feature/test/presentation/TestPage";
import TestLocalStorageHookPage from "../../feature/test/presentation/TestLocalStorageHookPage";
import EmojiPage from "../../feature/test/presentation/EmojiPage";

function AppRouter() {
    const {currentPath} = useRouterContext();
    return (
        <div>
            {currentPath === 'test' && <EmojiPage/>}
            {currentPath === 'login' && <LoginPage/>}
            {currentPath === 'registration' && <RegistrationPage/>}
            {currentPath === 'words' && <WordsListPage/>}
            {currentPath === 'train' && <TrainWordPage/>}
        </div>
    );
}

export default AppRouter;