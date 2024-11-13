import React, {useEffect} from 'react';
import ErrorMessage from "./component/ErrorMessage";
import {Word} from "../domain/model/Word";
import * as WordUseCases from "../domain/model/WordUseCases";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../auth/presentation/redux/AuthSlice";
import * as WordsActions from "./redux/WordsSlice";

const WordsListPage = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const {
        error,
        word,
        translation,
        wordList,
        wordToEdit
    } = useSelector(state => state.words);

    useEffect(() => {
        console.log('Component did mount');
        refreshWordList()
    }, []);

    // refreshWordList() action
    const refreshWordList = async () => {
        /*const words = await WordUseCases.readListOfWords();
        console.log('Words', words);
        setPageState({...pageState, wordList: words});*/
    }
    const validateForm = (word, translation) => {
        return word && translation;
    }
    // removeWord() action

    // updateWord() action
    const updateWord = async (word) => {
        await WordUseCases.editWord(word);
        await refreshWordList();
    }

    const handleWordFormSubmit = async (event) => {
        event.preventDefault();
        const wordLocal = word;
        const translationLocal = translation;
        if (!wordLocal || !translationLocal) {
            dispatch(WordsActions.setError('Word and translation are required'));
            return;
        }
        console.log(wordLocal, translationLocal);
        /*if (wordToEdit) {

            await updateWord({
                ...pageState.wordToEdit,
                word: pageState.word,
                translate: pageState.translation
            });
            setPageState({...pageState, word: '', translation: '', wordToEdit: null});
        } else {
            // addWord() action
            await WordUseCases.addWord(new Word(
                word, translation
            ));
        }
        await refreshWordList();*/
        //setPageState({...pageState, word: '', translation: ''});
    }

    const onWordInputChange = (event) => {
        dispatch(WordsActions.setWord(event.target.value));
    }
    const onTranslateInputChange = (event) => {
        dispatch(WordsActions.setTranslate(event.target.value));
    }
    const onUpdateClick = async (word) => {
        /*console.log('Update word', word)
        setPageState({
            ...pageState,
            word: word.word,
            translation: word.translate,
            wordToEdit: word
        });*/
    }

    return (
        <div>
            <button onClick={() => {
                dispatch(logout());
                navigate('/login')
            }}>Log out
            </button>

            <button onClick={() => {
                navigate('/train')
            }}>Switch to train
            </button>

            <h1>Words List Page</h1>
            <form
                onSubmit={handleWordFormSubmit}
            >
                <input type="text"
                       placeholder="Word"
                       value={word}
                       onChange={onWordInputChange}/>
                <input type="text"
                       placeholder="Translation"
                       value={translation}
                       onChange={onTranslateInputChange}/>
                <input type="submit" value={
                    (wordToEdit) ? "Edit word" : "Add word"}/>
                {
                    error && <ErrorMessage error={error}/>
                }
            </form>
            <ul>
                {
                    wordList.map((word, index) => (
                        <li key={index}>{word.word} - {word.translate}
                            <span onClick={async () => {
                                console.log('Remove word', word)
                                await removeWord(word);
                            }}> X </span>
                            <span onClick={onUpdateClick}> [Update] </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default WordsListPage;
