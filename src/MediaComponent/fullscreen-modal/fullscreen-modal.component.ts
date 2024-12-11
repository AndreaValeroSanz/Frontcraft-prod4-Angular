import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// Importa el decorador Component desde Angular core
@Component({
  selector: 'app-fullscreen-modal',                     // Selector para usar el componente como <app-fullscreen-modal> en HTML
  templateUrl: './fullscreen-modal.component.html',     // Ubicación de la plantilla HTML del componente
  styleUrls: ['./fullscreen-modal.component.css'],      // Ubicación de los estilos CSS específicos del componente
  standalone: true                                      // Permite que el componente funcione de forma independiente, sin necesidad de un módulo
})

// Define y exporta la clase FullscreenModalComponent que controla la lógica de la ventana modal
export class FullscreenModalComponent {
  isModalOpen = false;   // Variable que controla si la ventana modal está abierta o cerrada
  youtubeUrl: string = 'https://www.youtube.com/watch?v=c017g0hynbQ'; // URL del video de YouTube a mostrar en la modal

  // Constructor que recibe el servicio DomSanitizer para sanitizar URLs antes de usarlas en el HTML
  constructor(public sanitizer: DomSanitizer) {}

  // Evento personalizado que se emite cuando se hace clic en el botón dentro de la modal
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter();

  // Método que emite el evento 'buttonClicked' al hacer clic en el botón
  onButtonClick() {
    this.buttonClicked.emit();
  }
}
