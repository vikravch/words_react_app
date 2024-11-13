import {createSlice} from "@reduxjs/toolkit";

const WordsSlice = createSlice({
    name: 'words',
    initialState: {
        error: '',
        word: '',
        translation: '',
        wordList: [],
        wordToEdit: null,
    },
    reducers: {
        refreshWordList: (state, action) => {

        },
        removeWord: (state, action) => {

        },
        updateWord: (state, action) => {

        },
        addWord: (state, action) => {

        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setWord: (state, action) => {
            state.word = action.payload;
        },
        setTranslate: (state, action) => {
            state.translation = action.payload;
        }
    }
});

export const {
    refreshWordList,
    removeWord,
    updateWord,
    addWord,
    setError,
    setWord,
    setTranslate
} = WordsSlice.actions;
export default WordsSlice.reducer;
