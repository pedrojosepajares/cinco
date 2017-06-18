import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../services/deck.service';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Deck, Card} from '../deck/deck';

@Component({
  selector: 'play-zone',
  templateUrl: './play-zone.component.html',
  styleUrls: ['./play-zone.component.css']
})

export class PlayZoneComponent implements OnInit {

  deck: Deck;

  constructor(private deckService:DeckService, private playerService:PlayerService,
              private router:Router) {
    this.deck = new Deck("", []);            
  }

  ngOnInit() {
    debugger;
    if (this.playerService.players.length == 0)
      this.router.navigate(['']);

    this.deckService.getDeck().subscribe(response => this.deck = response);
  }

  nextTurn():void{
    this.deck.nextCard();
    this.playerService.nextPlayer();
  }

  resetGame():void{
    this.deck.reset();
    this.playerService.reset();
  }

}
