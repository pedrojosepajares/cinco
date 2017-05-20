import { Injectable } from '@angular/core';

interface Card{
    name: string;
    text: string;
}

@Injectable()
export class DeckService {
    deck: Card[] =[ {name: "1c", text: "Bebes un trago"} ];
}