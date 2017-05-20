import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DeckService } from './services/deck.service';
import { PlayerService } from './services/player.service';
import { PlayerInputComponent } from './shared/player-input/player-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DeckService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
