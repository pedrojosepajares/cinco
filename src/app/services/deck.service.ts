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
    deck: Card[] =[ new Card("1c","Bebes un trago") ];
    private currentCardIndex = 0;

    currentCard():Card{
        return this.deck[this.currentCardIndex];
    }
}