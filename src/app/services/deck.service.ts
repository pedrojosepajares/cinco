import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
    deck: Card[] = [];
    currentCardIndex = 0;

    constructor(){

        var cardTexts:string[] = [
        "Bebes 1 trago",
        "Bebes 2 tragos",
        "Mandas 1 trago",
        "Mandas 2 tragos",
        "Qué se hace, Cómo se hace, Dónde se hace",
        "Juega al juego de los Números",
        "Pon una norma o una prohibición",
        "Todos riman",
        "Mandas 3 tragos",
          "Juego del Dedo",
        "Elige tu puta",
        "Bebe un chupito",
        "Todos beben un trago",
        ]

        var cardSuits:string[] = ["c", "p", "t", "d"];

        for (let textType = 0; textType < cardTexts.length; textType++){
            for (let suit = 0; suit < cardSuits.length; suit++){
                this.deck.push(new Card(textType+1 + cardSuits[suit], cardTexts[textType]));
            }
        }
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