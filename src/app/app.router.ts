import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PlayAreaComponent } from './play-area/play-area.component';

export const router: Routes = [
    { path: '', redirectTo: 'main-menu', pathMatch: 'full' },
    {path: 'main-menu', component: MainMenuComponent},
    {path: 'play-area', component: PlayAreaComponent}, 
 
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);