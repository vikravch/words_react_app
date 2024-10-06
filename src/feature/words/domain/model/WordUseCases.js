import {wordsDB} from "../../../../App";

export async function readListOfWords() {
    return wordsDB.getWords();
}

export async function addWord( word ) {
    return wordsDB.addWord( word );
}

export async function editWord( word ) {
    return wordsDB.updateWord( word );
}

export async function deleteWord( wordId ) {
    return wordsDB.deleteWord( wordId );
}