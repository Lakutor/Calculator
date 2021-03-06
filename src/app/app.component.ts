import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  pantalla = 0;
  memoria = 0;
  operacion = '';

  sumar(): void {
    if(this.operacion !== '') {
      this.igual()
    }
    this.memoria = this.pantalla; // Copio la variable de pantalla hacia la memoria
    this.operacion = 'sumar'; // Guardo la palabra clave para la operación
    this.pantalla = 0; // Borro lo que está en pantalla
  }

  restar(): void {
    if(this.operacion !== ''){
      this.igual()
    }
    this.memoria = this.pantalla; // Copio la variable de pantalla hacia la memoria
    this.operacion = 'restar'; // Guardo la palabra clave para la operaciòn
    this.pantalla = 0; // Borro lo que esta en pantalla
  }



  multiplicar(): void {
    if(this.operacion !== ''){
      this.igual()
    }
    this.memoria = this.pantalla; // Copio la variable de la pantalla hacia la memoria
    this.operacion = 'multiplicar' ; // Guardo la palabra clave para la operacion
    this.pantalla = 0; // Borro lo que esta en pantalla
  }

  dividir(): void {
    if(this.operacion !== ''){
      this.igual()
    }1
    this.memoria = this.pantalla; // Copio la variable de la pantalla hacia la memoria
    this.operacion = 'dividir' ; // Guardo la palabra clave para la operacion
    this.pantalla = 0; // Borro lo que esta en pantalla
  }

  signo(): void {
    this.pantalla = this.pantalla * -1
    }



  igual(): void {
    if (this.operacion === 'sumar') {
      this.pantalla = this.memoria + this.pantalla;
      this.operacion = ''
    }
    if (this.operacion === 'restar') {
      this.pantalla = this.memoria - this.pantalla;
      this.operacion = ''
    }
    if (this.operacion === 'multiplicar') {
      this.pantalla = this.memoria * this.pantalla;
      this.operacion = ''
    }
    if (this.operacion === 'dividir') {
      this.operacion = ''
      this.pantalla = this.memoria / this.pantalla;
    }
  }

  reiniciar(): void {
    this.pantalla = 0;
    this.memoria = 0;
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
