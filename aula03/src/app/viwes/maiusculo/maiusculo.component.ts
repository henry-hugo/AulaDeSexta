import { Component } from '@angular/core';

@Component({
  selector: 'app-maiusculo',
  templateUrl: './maiusculo.component.html',
  styleUrls: ['./maiusculo.component.css']
})
export class MaiusculoComponent {

  gritar (value: string){

   return value.toUpperCase();
  }
}
