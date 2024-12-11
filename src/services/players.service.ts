import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { PlayersModule } from '../PlayersComponent/players.module';
import { Observable } from 'rxjs';
import Player from '../PlayersComponent/Interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private firestore: Firestore) { }

  addPlayer(player: Player){
    const playerRef = collection(this.firestore, 'jugadores');
    return addDoc(playerRef, player);

  }

  getPlayers(): Observable<Player[]>{
    const playerRef = collection(this.firestore, 'jugadores');
    return collectionData(playerRef, {idField: 'name'}) as Observable<Player[]>;
  }
  deletePlayer(player: Player){
    const playerDocRef = doc(this.firestore, 'jugadores/${player.name}');
    return deleteDoc(playerDocRef);
  }
}
