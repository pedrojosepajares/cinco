import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent{

  @Input() public img:string
  @Input() public length:number
  @Input() public current:number
  @Input() public player:string
  @Input() public nextPlayer:string
  @Output() public nextCard = new EventEmitter()
  @Output() public newGame = new EventEmitter()


  constructor() { }


}
