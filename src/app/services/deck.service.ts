import { Injectable } from '@angular/core';

export class Card{
    name: string;
    text: string;
    path: string;

    constructor(name:string, text:string){
        this.name = name;
        this.text = text;
        this.path = "assets/card-images/" + this.name + ".png";
    }

}

@Injectable()
export class DeckService {
    deck: Card[] = [ 
                    new Card("1c","Bebes un trago"),
                    new Card("1d","Bebes un trago"),
                    new Card("1p","Bebes un trago")
                   ];
    currentCardIndex = 0;

    constructor(){
        this.shuffle();
    }

    private shuffle():void{
        for (let i = this.deck.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [this.deck[i - 1], this.deck[j]] = [this.deck[j], this.deck[i - 1]];
        }
    }


    currentCard():Card{
        return this.deck[this.currentCardIndex];
    }

    nextCard():void{
        this.currentCardIndex++;
    }

    reset():void{
        this.currentCardIndex = 0;
        this.shuffle();
    }
}