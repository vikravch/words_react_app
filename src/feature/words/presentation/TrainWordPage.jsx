import React, {Component, useEffect, useState} from 'react';
import {getNextWordForTraining, saveTrainingResult} from "../domain/model/WordUseCases";
import {useNavigate} from "react-router-dom";

const TrainWordPage = () => {
    const navigate = useNavigate();
    const [word, setWord] = useState(null);
    const [translation, setTranslation] = useState('');

    useEffect(() => {
        getNextWord().then(() => {
            console.log('Word loaded');
        }).catch((error) => {
            console.error('Error loading word', error);
        });
    }, []);

    const getNextWord = async () => {
        const nextWord = await getNextWordForTraining();
        console.log('Next word', nextWord);
        setWord(nextWord);
        setTranslation('');
    }
    const handleTrainWordSubmit = async (event) =>{
        event.preventDefault();
        console.log('Check', word.translate, translation)
        if (word.translate.toLocaleLowerCase() ===
            translation.toLocaleLowerCase()) {
            console.log('Correct');
        } else {
            console.log('Incorrect');
        }
        await saveTrainingResult(translation, word);
        await getNextWord();
    }

    return (
        <div>
            <button onClick={() => {
                navigate('/login')
            }}>Log out</button>
            <button onClick={() => {
                navigate('/words')
            }}>Words list</button>
            <h1>Train Word Page</h1>
            <form onSubmit={handleTrainWordSubmit}>
                <h2>Word: {word?.word || 'loading...'}</h2>
                <button onClick={getNextWord}>Next word</button>
                <input type="text"
                       value={translation}
                       onChange={(event) => {
                           setTranslation(event.target.value);
                       }}
                       placeholder="Translation"/>
                <input type="submit" value="Check"/>
            </form>
        </div>
    );
}

export default TrainWordPage;