import { Injectable } from '@angular/core';

 @Injectable()
 export class PlayerService{
     players: string[] = ["Manuel", "Antonio", "Jose Luis", "Miguel"];
     currentPlayer: number = 0;

     nextPlayer():number{
         if (this.players.length > 0)
            this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
         return this.currentPlayer;   
     }

     currentPlayerName():string{
         if (this.players.length > 0)
            return this.players[this.currentPlayer];
        else
            return "No players";
     }
 }