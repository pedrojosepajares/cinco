import { Injectable } from '@angular/core';

 @Injectable()
 export class PlayerService{
     players: string[] = ["Jugador 1", "Jugador 2"];
     currentPlayer: number = 0;

     nextPlayer():void{
         if (this.players.length > 0)
            this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
     }

     currentPlayerName():string{
         if (this.players.length > 0)
            return this.players[this.currentPlayer];
        else
            return "No players";
     }

     nextPlayerName():string{
         if (this.players.length > 0)
            return this.players[(this.currentPlayer + 1) % this.players.length];
        else
            return "No players";
     }

     reset():void{
         this.currentPlayer = 0;
     }
 }