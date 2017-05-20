import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css']
})
export class PlayerInputComponent{
  constructor(private playerService: PlayerService) {}
}
