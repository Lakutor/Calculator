import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Calculator';
  result = 0;;

  sum() {
    this.result++
    console.log(this.result)
  }

  reset(){
    this.result = 0;
  }
}
