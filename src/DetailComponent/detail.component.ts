// detail.component.ts
import { Component, Input } from '@angular/core';
import { PlayersComponent } from '../PlayersComponent/players.component';
import { CommonModule } from '@angular/common'; 

@Component({
 
  selector: 'app-detail',
  styleUrls: ['./detail.component.css'],
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  standalone:true
})
export class DetailComponent {
  @Input() players: any[] = []; // Recibe el array completo de jugadores
  @Input() selectedPlayerIndex: number = 0; // Índice del jugador seleccionado

  get selectedPlayer() {
    return this.players[this.selectedPlayerIndex]; // Obtiene el jugador seleccionado por índice
  }
  editarDatos(){
    
  }
  constructor() { }
}