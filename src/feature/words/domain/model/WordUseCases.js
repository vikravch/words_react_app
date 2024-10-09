import {wordsDB} from "../../../../App";
import Random from "../../../../general/Random";

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

export async function getNextWordForTraining() {
    const random = new Random();
    const randomWord = random.getRandomArrayElement(
        wordsDB.getWords());
    console.log(randomWord);
    wordsDB.updateWord({
        ...randomWord,
        repeatedTimes: randomWord.repeatedTimes + 1
    });
    return randomWord;
}

export async function saveTrainingResult(translation, word) {
    if (word.translate.toLocaleLowerCase() === translation.toLocaleLowerCase()) {
        wordsDB.updateWord({
            ...word,
            completedTimes: word.completedTimes + 1
        });
    }
}