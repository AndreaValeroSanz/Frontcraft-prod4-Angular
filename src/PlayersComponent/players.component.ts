import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  setDoc
} from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FullscreenModalComponent } from '../MediaComponent/fullscreen-modal/fullscreen-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppPlayersComponentPipes } from './Pipes/pipes.component';
import { HeroComponent } from './hero/hero.component';
import { DetailComponent } from '../DetailComponent/detail.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-players',
  styleUrls: ['./players.component.css'],
  standalone: true,
  imports: [
    DetailComponent,
    CommonModule,
    FullscreenModalComponent,
    NavBarComponent,
    AppPlayersComponentPipes,
    HeroComponent,
    FormsModule,
    AppPlayersComponentPipes
  ],
  templateUrl: './players.component.html'
})
export class PlayersComponent {

  firestore: Firestore = inject(Firestore);
  players: Observable<any[]>;

  filterTerm: string = ''; // Propiedad para almacenar el término de búsqueda
  filterAge: number | null = null;
  filteredPlayers: any[] = []; // Propiedad para almacenar los jugadores filtrados
  editedPlayer: any; // Variable para almacenar los datos del jugador que se está editando
  isEditing = false; // Estado para controlar si se está editando un jugador

  constructor() {
    const aCollection = collection(this.firestore, '/jugadores');
    this.players = collectionData(aCollection, {idField: 'id'});
  
    // Suscripción para obtener los jugadores y aplicar el filtro inicial
    this.players.subscribe(data => {
      this.filteredPlayers = data;
    });
  }

  // Método para filtrar jugadores por nombre y edad
  filterPlayers() {
    this.players.subscribe(data => {
      this.filteredPlayers = data.filter(player => {
        const matchesName = player.name.toLowerCase().includes(this.filterTerm.toLowerCase());
        const matchesAge = this.filterAge === null || player.age === this.filterAge;
        return matchesName && matchesAge;
      });
    });
  }

  isCardEnlarged = false; // Estado para controlar si la tarjeta está agrandada
  showModal = false; // Estado para controlar la visibilidad del modal
  @ViewChild('card') cardElement!: ElementRef;

  // Método para alternar el tamaño de la tarjeta
  toggleCardSize(id : any) {
    let card = document.getElementById (id);
    card?.classList.toggle('enlarged')
    this.isCardEnlarged = !this.isCardEnlarged;
  }

  // Método para abrir el modal
  openModal() {
    this.showModal = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.showModal = false;
  }

  editPlayer(player: any, event: MouseEvent) {
    event.stopPropagation();
    console.log('Editando jugador:', player); // Verificar si llega al evento
    this.editedPlayer = { ...player };
    this.isEditing = true;
    console.log('isEditing:', this.isEditing); // Verificar el cambio de estado
  }

  async onClickDelete(player: any, event: MouseEvent) {
    event.stopPropagation();
    const confirmation = confirm('¿Estás seguro de que deseas eliminar este jugador?');
    if (!confirmation) return;

    try {
      const playerDocRef = doc(this.firestore, `jugadores/${player.id}`);
      await deleteDoc(playerDocRef);
      console.log(`Jugador "${player.name}" eliminado con éxito`);
    } catch (error) {
      console.error('Error al eliminar jugador:', error);
    }
  }





  saveChanges() {
    if (!this.editedPlayer || !this.editedPlayer.id) {
      console.error('El jugador no tiene un ID válido para actualizar.');
      return;
    }

    const playerDocRef = doc(this.firestore, `jugadores/${this.editedPlayer.id}`);
    updateDoc(playerDocRef, this.editedPlayer).then(() => {
      this.isEditing = false;
      console.log('Jugador actualizado con éxito');
    }).catch((error) => {
      console.error('Error al actualizar el jugador:', error);
    });
  }



  // Definir la función trackByFn para evitar el re-renderizado completo de la lista
  trackByFn(index: number, player: any): string {
    return player.name; // Usamos el nombre del jugador como identificador único
  }
//Agregar jugador
  player = {
    id: '',
    name: '',
    ppg: null,
    rpg: null,
    apg: null,
    height: '',
    weight: '',
    age: null,
    image: null,
  };

  isFormOpen = false;

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }



async addPlayer() {
  const playerId = (document.getElementById('new-name') as HTMLInputElement).value.trim(); // Usamos el nombre como ID
  const playerData = {
    id: playerId,
    name: playerId,
    ppg: +(document.getElementById('new-ppg') as HTMLInputElement).value,
    rpg: +(document.getElementById('new-rpg') as HTMLInputElement).value,
    apg: +(document.getElementById('new-apg') as HTMLInputElement).value,
    height: (document.getElementById('new-height') as HTMLInputElement).value,
    weight: (document.getElementById('new-weight') as HTMLInputElement).value,
    age: +(document.getElementById('new-age') as HTMLInputElement).value,
    image: (document.getElementById('new-image') as HTMLInputElement).value,
  };

  try {
    const docRef = doc(this.firestore, 'jugadores', playerId);
    await setDoc(docRef, playerData); // Crear o sobrescribir el documento con el id especificado
    console.log('Jugador agregado con éxito');
    this.closeForm();
  } catch (error) {
    console.error('Error al agregar jugador:', error);
  }
}




}
