import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerInputComponent } from './shared/player-input/player-input.component';
import { PlayZoneComponent } from './shared/play-zone/play-zone.component';

export const router: Routes = [
    {path: 'players', component: PlayerInputComponent},
    {path: 'play', component: PlayZoneComponent},
    {path: '', redirectTo: '/players', pathMatch: 'full'} 
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);