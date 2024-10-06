import {LocalStorageManager} from "./LocalStorageManager";

export class WordsDB{
    #database;
    #storage = new LocalStorageManager();

    constructor() {
        this.#database = this.#storage.getWordsDB();
        console.log('constructor - ',this.#database)
    }

    addWord(...words){
        this.#database =
            [...words, ...this.#database];
        this.#storage.saveWordsDB(this.#database);
    }

    getWords(){
        return [...this.#database];
    }

    updateWord(word){
        this.#database = this.#database.map(
            (wordItem)=>
                wordItem.id === word.id? word : wordItem
        )
        this.#storage.saveWordsDB(this.#database);
    }
    deleteWord(wordId){
        this.#database = this.#database.filter(
            (word) => word.id !== +wordId
        )
        this.#storage.saveWordsDB(this.#database);
    }
}

//const word = new Word();
//const {id} = word;