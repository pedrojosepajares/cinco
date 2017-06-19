import { Injectable } from '@angular/core';
import { Deck, Card} from '../shared/deck/deck';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DeckService {
    deck: Card[] = [];
    currentCardIndex = 0;
    apiUrl = "http://172.31.29.201:3000/decks";

    constructor(private http: Http){}

    getDeck(): Observable<Deck>{
        return this.http.get(this.apiUrl).map(this.extractDeck);
    }

    private extractDeck(response: Response){
        let body = response.json();
        return new Deck(body[0].name,
                        body[0].cards.map(function(obj){
                            return new Card(obj.name, obj.text);
                        }));
    }    
}