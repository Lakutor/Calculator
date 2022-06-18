import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  pantalla = 0;

  sumar(): void {
    this.pantalla++;
    console.log(this.pantalla);
  }

  restar(): void {}

  multiplicar(): void {}

  dividir(): void {}

  reiniciar(): void {
    this.pantalla = 0;
  }

  // Eventos del teclado
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.key == 'Enter') {
      console.log('Es un enter');
    }
    if (event.key == 'Escape') {
      this.reiniciar();
    }
    if (event.key == 'Backspace') {
      console.log('Es un backspace');
      this.pantalla = parseInt(this.pantalla.toString().slice(0, -1));
      if (isNaN(this.pantalla)) this.pantalla = 0;
    }
    if (event.key == 'Delete') {
      this.reiniciar();
    }
    if (event.key.match(/^[0-9]$/)) {
      this.pantalla = this.pantalla * 10 + parseInt(event.key);
    }
  }
}
