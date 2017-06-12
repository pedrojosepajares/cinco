export class Card{
    name: string;
    text: string;
    imgPath: string;

    constructor(name:string, text:string){
        this.name = name;
        this.text = text;
        this.imgPath = "assets/card-images/" + this.name + ".png";
    }

}

export class Deck{
    name: string = "";
    length: number = 0;
    private cards: Card[] = [];
    private currentCardIndex = 0;

    constructor(name: string, cards: Card[]){
        this.name = name;
        this.cards = cards;
        this.length = this.cards.length;
        this.shuffle();
    }

    private shuffle():void{
        for (let i = this.cards.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [this.cards[i - 1], this.cards[j]] = [this.cards[j], this.cards[i - 1]];
        }
    }

    currentCard():Card{
        return this.cards[this.currentCardIndex];
    }

    drawnCards():number{
        return this.currentCardIndex+1;
    }

    nextCard():void{
        this.currentCardIndex++;
    }

    reset():void{
        this.currentCardIndex = 0;
        this.shuffle();
    }
}