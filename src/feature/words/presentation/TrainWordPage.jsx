import React, {Component} from 'react';
import {getNextWordForTraining, saveTrainingResult} from "../domain/model/WordUseCases";
import {withRouterContext} from "../../../general/context/RouterContext";

class TrainWordPage extends Component {
    state = {
        word: null,
        translation: ''
    }
    getNextWord = async () => {
        const nextWord = await getNextWordForTraining();
        console.log('Next word', nextWord);
        this.setState({word: nextWord, translation: ''});
    }
    handleTrainWordSubmit = async (event) =>{
        event.preventDefault();
        console.log('Check', this.state.word.translate, this.state.translation)
        if (this.state.word.translate.toLocaleLowerCase() ===
            this.state.translation.toLocaleLowerCase()) {
            console.log('Correct');
        } else {
            console.log('Incorrect');
        }
        await saveTrainingResult(this.state.translation, this.state.word);
        await this.getNextWord();
    }
    componentDidMount() {
        this.getNextWord().then(() => {
            console.log('Word loaded');
        }).catch((error) => {
            console.error('Error loading word', error);
        });
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.switchPath('login')
                }}>Log out</button>
                <button onClick={() => {
                    this.props.switchPath('words')
                }}>Words list</button>
                <h1>Train Word Page</h1>
                <form onSubmit={this.handleTrainWordSubmit}>
                    <h2>Word: {this.state.word?.word || 'loading...'}</h2>
                    <button onClick={this.getNextWord}>Next word</button>
                    <input type="text"
                           value={this.state.translation}
                           onChange={(event) => {
                               this.setState({translation: event.target.value})
                           }}
                           placeholder="Translation"/>
                    <input type="submit">Check</input>
                </form>
            </div>
        );
    }
}

export default withRouterContext(TrainWordPage);