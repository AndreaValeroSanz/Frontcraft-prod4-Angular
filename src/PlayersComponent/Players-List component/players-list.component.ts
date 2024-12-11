import { Component, OnInit } from "@angular/core";
import Player from "../Interfaces/player.interface";
import { PlayersService } from "../../services/players.service";
import { response } from "express";
import { PlayersComponent } from "../players.component";

@Component({
    selector: 'players - players-list',
    templateUrl: './players-list.component.html',
    styleUrls: ['./players-list.component.css']
})

export class PlayersListComponent implements OnInit {
players: Player[];

constructor(
    private PlayersService: PlayersService
){
    this.players = [{
        name: 'Nombre del jugador',
        ppg: 'Points per game: 00.0',
        rpg: 'Rebounds per game: 0.0',
        apg: 'Assists per game: 0.0',
        age: 23,
        height: '0.00 m',
        weight: '00 Kg',
        image: '',
    }]
}
ngOnInit(): void {
    this.PlayersService.getPlayers().subscribe(players => {
        this.players = players;
      })
    }

async onClickDelete(player:Player){
    const response = await this.PlayersService.deletePlayer(player);
    console.log(response);
}
}
