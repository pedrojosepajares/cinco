import { Component, OnInit } from '@angular/core';

import { DeckService } from '../../services/deck.service';
import { PlayerService } from '../../services/player.service';

import { Router } from '@angular/router';

@Component({
  selector: 'play-zone',
  templateUrl: './play-zone.component.html',
  styleUrls: ['./play-zone.component.css']
})
export class PlayZoneComponent implements OnInit {

  constructor(private deckService:DeckService, private playerService:PlayerService,
              private router:Router) { }

  ngOnInit() {
    if (this.playerService.players.length == 0)
      this.router.navigate(['']);
  }

  nextTurn():void{
    this.deckService.nextCard();
    this.playerService.nextPlayer();
  }

  resetGame():void{
    this.deckService.reset();
    this.playerService.reset();
  }

}
