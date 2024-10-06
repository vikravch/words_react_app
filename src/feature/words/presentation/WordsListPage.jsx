import React, {Component} from 'react';
import ErrorMessage from "./component/ErrorMessage";
import {Word} from "../domain/model/Word";
import * as WordUseCases from "../domain/model/WordUseCases";

class WordsListPage extends Component {
    state = {
        error: '',
        word: '',
        translation: '',
        wordList: [],
        wordToEdit: null
    }
    componentDidMount() {
        console.log('Component did mount');
        this.refreshWordList().then(() => {
            console.log('Word list refreshed');
        });
    }

    validateForm = (word, translation) => {
        return word && translation;
    }
    refreshWordList = async () => {
        const words = WordUseCases.readListOfWords();
        console.log('Words', words);
        this.setState({wordList: words});
    }
    removeWord = async (word) => {
        await WordUseCases.deleteWord(word.id);
        await this.refreshWordList();
    }
    updateWord = async (word) => {
        await WordUseCases.editWord(word);
        await this.refreshWordList();
    }
    handleWordFormSubmit = async (event) => {
        event.preventDefault();
        const word = this.state.word;
        const translation = this.state.translation;
        if (!word || !translation) {
            this.setState({error: 'Word and translation are required'});
            return;
        }
        console.log(word, translation);
        if (this.state.wordToEdit) {
            await this.updateWord({
                ...this.state.wordToEdit,
                word: this.state.word,
                translate: this.state.translation
            });
            this.setState({word: '', translation: '', wordToEdit: null});
        } else {
            await WordUseCases.addWord(new Word(
                word, translation
            ));
        }
        await this.refreshWordList();
        this.setState({word: '', translation: ''});
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.switchPath('login')
                }}>Log out
                </button>
                <h1>Words List Page</h1>
                <form
                    onSubmit={this.handleWordFormSubmit}
                >
                    <input type="text"
                           placeholder="Word"
                           value={this.state.word}
                           onChange={(event
                           ) => {
                               if (this.validateForm(event.target.value, this.state.translation)) {
                                   this.setState({word: event.target.value, error: ''});
                               } else {
                                   this.setState({word: event.target.value});
                               }
                           }}/>
                    <input type="text"
                           placeholder="Translation"
                           value={this.state.translation}
                           onChange={(event) => {
                               if (this.validateForm(this.state.word, event.target.value)) {
                                   this.setState({translation: event.target.value, error: ''});
                               } else {
                                   this.setState({translation: event.target.value});
                               }
                           }}/>
                    <input type="submit" value={
                        (this.state.wordToEdit)?"Edit word":"Add word"}/>
                    {
                        this.state.error && <ErrorMessage error={this.state.error}/>
                    }
                </form>
                <ul>
                    {
                        this.state.wordList.map((word, index) => (
                            <li key={index}>{word.word} - {word.translate}
                                <span onClick={async ()=>{
                                    console.log('Remove word', word)
                                    await this.removeWord(word);
                                }}> X </span>
                                <span onClick={async ()=>{
                                    console.log('Update word', word)
                                    this.setState({
                                        word: word.word,
                                        translation: word.translate,
                                        wordToEdit: word
                                    })
                                }}> [Update] </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default WordsListPage;