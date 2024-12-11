import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { AppPlayersComponentPipes } from './Pipes/pipes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';  // Aquí es donde debes agregar FormsModule

@NgModule({
  imports: [
    CommonModule, 
    PlayersComponent, 
    AppPlayersComponentPipes, 
    NavBarComponent, 
    HeroComponent, 
    FormsModule  // Asegúrate de que FormsModule esté en los imports
  ]
})
export class PlayersModule { }
