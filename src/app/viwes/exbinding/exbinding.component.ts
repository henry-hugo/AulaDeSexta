import { Component } from '@angular/core';

@Component({
  selector: 'app-exbinding',
  templateUrl: './exbinding.component.html',
  styleUrls: ['./exbinding.component.css']
})
export class ExbindingComponent {
  texto = '';

  teclado(letra = ''){
    this.texto +=letra;
  }
}
