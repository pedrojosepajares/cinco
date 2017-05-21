import { Component, OnInit } from '@angular/core';

import { DeckService } from '../../services/deck.service';


@Component({
  selector: 'play-zone',
  templateUrl: './play-zone.component.html',
  styleUrls: ['./play-zone.component.css']
})
export class PlayZoneComponent implements OnInit {

  constructor(private deckService:DeckService) { }

  ngOnInit() {
  }

}
