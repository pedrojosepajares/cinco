import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css']
})
export class PlayerInputComponent{
  
  constructor(private playerService: PlayerService) {}

  addPlayer(nameInput:any):void{
    if (nameInput.value != "" && nameInput.value.charAt(0) != " "){
      this.playerService.players.push(nameInput.value);
      nameInput.value = "";
    }
  }
}
