import { Component, Input } from '@angular/core';

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



  constructor() { }


}
