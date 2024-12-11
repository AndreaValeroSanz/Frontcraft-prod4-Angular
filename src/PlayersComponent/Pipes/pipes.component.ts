import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class AppPlayersComponentPipes {
  isDropdownVisible = false; // Controla la visibilidad del menú desplegable de filtros
  nameFilter: string = ''; // Almacena el texto del filtro de nombre
  ageFilter: number | null = null; // Almacena el filtro de edad; puede ser un número o nulo

  @Output() filterChange = new EventEmitter<{ name: string, age: number | null }>();

  // Emite eventos cuando se aplican filtros, con un objeto que contiene el nombre y la edad

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
    // Cambia el estado de visibilidad del menú desplegable
  }

  applyFilter() {
    this.filterChange.emit({name: this.nameFilter, age: this.ageFilter});
    const element = document.getElementById('main-section');
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }
  
}
