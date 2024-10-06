export class Word {
    id;
    word;
    translate;
    repeatedTimes;
    completedTimes;
    addedTime;
    lastLearnedTime;

    static lastId = 1;

    constructor(
        word = '',
        translate= 'no translate'
    ) {
        this.id = Word.lastId;
        this.word = word;
        this.translate = translate;
        this.repeatedTimes = 0;
        this.completedTimes = 0;
        this.addedTime = new Date().getTime();
        this.lastLearnedTime = new Date().getTime();
        Word.lastId++;
    }
}