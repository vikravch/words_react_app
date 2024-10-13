import React, {Component} from 'react';
import {RouterContext, withRouterContext} from "../context/RouterContext";
import LoginPage from "../../feature/auth/presentation/page/LoginPage";
import RegistrationPage from "../../feature/auth/presentation/page/RegistrationPage";
import WordsListPage from "../../feature/words/presentation/WordsListPage";
import TrainWordPage from "../../feature/words/presentation/TrainWordPage";

class AppRouter extends Component {
    render() {
        return (
            <div>
                {this.props.currentPage === 'login' && <LoginPage/>}
                {this.props.currentPage === 'registration' && <RegistrationPage/>}
                {this.props.currentPage === 'words' && <WordsListPage/>}
                {this.props.currentPage === 'train' && <TrainWordPage/>}
            </div>
        );
    }
}

export default withRouterContext(AppRouter);