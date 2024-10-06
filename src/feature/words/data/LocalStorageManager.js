export class LocalStorageManager {
    getWordsDB(){
        const stringDB = localStorage.getItem('words_db') || '[]';
        return JSON.parse(stringDB);
    }
    saveWordsDB(wordsDB){
        localStorage.setItem('words_db',JSON.stringify(wordsDB));
    }
}