import React, {Component, useEffect, useState} from 'react';
import ErrorMessage from "./component/ErrorMessage";
import {Word} from "../domain/model/Word";
import * as WordUseCases from "../domain/model/WordUseCases";
import {useRouterContext, withRouterContext} from "../../../general/context/RouterContext";


const WordsListPage = () => {
    const [pageState, setPageState] = useState({
        error: '',
        word: '',
        translation: '',
        wordList: [],
        wordToEdit: null
    });
    const {switchPath} = useRouterContext();

    useEffect(() => {
        console.log('Component did mount');
        refreshWordList()
    }, []);

    const refreshWordList = async () => {
        const words = await WordUseCases.readListOfWords();
        console.log('Words', words);
        setPageState({...pageState, wordList: words});
    }
    const validateForm = (word, translation) => {
        return word && translation;
    }
    const removeWord = async (word) => {
        await WordUseCases.deleteWord(word.id);
        await refreshWordList();
    }
    const updateWord = async (word) => {
        await WordUseCases.editWord(word);
        await refreshWordList();
    }

    const handleWordFormSubmit = async (event) => {
        event.preventDefault();
        const word = pageState.word;
        const translation = pageState.translation;
        if (!word || !translation) {
            setPageState({...pageState, error: 'Word and translation are required'});
            return;
        }
        console.log(word, translation);
        if (pageState.wordToEdit) {
            await updateWord({
                ...pageState.wordToEdit,
                word: pageState.word,
                translate: pageState.translation
            });
            setPageState({...pageState, word: '', translation: '', wordToEdit: null});
        } else {
            await WordUseCases.addWord(new Word(
                word, translation
            ));
        }
        await refreshWordList();
        setPageState({...pageState, word: '', translation: ''});
    }

    return (
        <div>
            <button onClick={() => {
                switchPath('login')
            }}>Log out
            </button>

            <button onClick={() => {
                switchPath('train')
            }}>Switch to train</button>

            <h1>Words List Page</h1>
            <form
                onSubmit={handleWordFormSubmit}
            >
                <input type="text"
                       placeholder="Word"
                       value={pageState.word}
                       onChange={(event
                       ) => {
                           if (validateForm(event.target.value, pageState.translation)) {
                               setPageState({...pageState, word: event.target.value, error: ''});
                           } else {
                               setPageState({...pageState, word: event.target.value});
                           }
                       }}/>
                <input type="text"
                       placeholder="Translation"
                       value={pageState.translation}
                       onChange={(event) => {
                           if (validateForm(pageState.word, event.target.value)) {
                               setPageState({...pageState, translation: event.target.value, error: ''});
                           } else {
                               setPageState({...pageState, translation: event.target.value});
                           }
                       }}/>
                <input type="submit" value={
                    (pageState.wordToEdit)?"Edit word":"Add word"}/>
                {
                    pageState.error && <ErrorMessage error={pageState.error}/>
                }
            </form>
            <ul>
                {
                    pageState.wordList.map((word, index) => (
                        <li key={index}>{word.word} - {word.translate}
                            <span onClick={async ()=>{
                                console.log('Remove word', word)
                                await removeWord(word);
                            }}> X </span>
                            <span onClick={async ()=>{
                                console.log('Update word', word)
                                setPageState({ ...pageState,
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

export default WordsListPage;