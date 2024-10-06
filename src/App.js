import logo from './logo.svg';
import './App.css';
import LoginPage from "./feature/auth/presentation/page/LoginPage";
import React, {Component} from 'react';
import RegistrationPage from "./feature/auth/presentation/page/RegistrationPage";
import WordsListPage from "./feature/words/presentation/WordsListPage";
import TrainWordPage from "./feature/words/presentation/TrainWordPage";
import {WordsDB} from "./feature/words/data/WordsDB";

export const wordsDB = new WordsDB();

class App extends Component {

  state = {
    currentPage: 'login'
  }
  switchPath = (path) => {
    this.setState({currentPage: path})
  }

  render() {
    return (
        <div>
          {
            this.state.currentPage === 'login' && <LoginPage
                  switchPath={
                    this.switchPath
                  }/>
          }
          {  this.state.currentPage === 'registration' && <RegistrationPage
                  switchPath={
                    this.switchPath
                  }/>
          }
          {
            this.state.currentPage === 'words' && <WordsListPage
                  switchPath={
                    this.switchPath
                  }
              />
          }
          {
            this.state.currentPage === 'train' && <TrainWordPage
                  switchPath={
                    this.switchPath
                  }
              />
          }
        </div>
    );
  }
}

export default App;
