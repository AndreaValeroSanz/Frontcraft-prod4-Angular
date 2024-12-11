import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Importa el decorador Component desde Angular core
@Component({
  selector: 'app-hero',                            // Selector para usar el componente como <app-hero> en HTML
  standalone: true,                                // Permite que el componente funcione de forma independiente, sin necesidad de un módulo
  templateUrl: './hero.component.html',            // Ubicación de la plantilla HTML del componente
  imports: [
    RouterLink                                    // Importa RouterLink para permitir la navegación entre rutas
  ],
  styleUrls: ['./hero.component.css']              // Ubicación de los estilos CSS específicos del componente
})

// Define y exporta la clase HeroComponent que controla la lógica del componente
export class HeroComponent {

  // Método para desplazarse suavemente a la sección "main-section" al explorar el equipo
  exploreTeam() {
    window.scrollBy(0, 1000); // Desplazarse 100px hacia abajo en el eje Y
  }


  // Método para hacer scroll hacia abajo 100px
  scrollToPlayers() {
    window.scrollBy(0, 1000); // Desplazarse 100px hacia abajo en el eje Y
  }
}
