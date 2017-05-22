import { Component, OnInit } from '@angular/core';

import { DeckService } from '../../services/deck.service';
import { PlayerService } from '../../services/player.service';


@Component({
  selector: 'play-zone',
  templateUrl: './play-zone.component.html',
  styleUrls: ['./play-zone.component.css']
})
export class PlayZoneComponent implements OnInit {

  constructor(private deckService:DeckService, private playerService:PlayerService) { }

  ngOnInit() {
  }

}
