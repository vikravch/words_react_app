import './App.css';
import LoginPage from "./feature/auth/presentation/page/LoginPage";
import React, {Component} from 'react';
import RegistrationPage from "./feature/auth/presentation/page/RegistrationPage";
import WordsListPage from "./feature/words/presentation/WordsListPage";
import TrainWordPage from "./feature/words/presentation/TrainWordPage";
import {WordsDB} from "./feature/words/data/WordsDB";
import {RouterContext, RouterContextWrapper} from "./general/context/RouterContext";
import AppRouter from "./general/router/AppRouter";

export const wordsDB = new WordsDB();

class App extends Component {
    render() {
        return (
            <RouterContextWrapper>
                <AppRouter/>
            </RouterContextWrapper>
        );
    }
}

export default App;
