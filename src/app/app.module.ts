import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DeckService } from './services/deck.service';
import { PlayerService } from './services/player.service';

import { PlayerInputComponent } from './shared/player-input/player-input.component';
import { PlayZoneComponent } from './shared/play-zone/play-zone.component';
import { DeckComponent } from './shared/deck-zone/deck.component';
import { ProofComponent } from './shared/proof-zone/proof.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    PlayerInputComponent,
    PlayZoneComponent,
    DeckComponent,
    ProofComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    DeckService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
