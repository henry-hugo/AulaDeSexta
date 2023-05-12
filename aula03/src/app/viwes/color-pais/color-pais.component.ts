import { Component } from '@angular/core';

@Component({
  selector: 'app-color-pais',
  templateUrl: './color-pais.component.html',
  styleUrls: ['./color-pais.component.css']
})
export class ColorPaisComponent {
  gritar (value: string){

    return value.toUpperCase();
   }

  nome = 'pais';
}
