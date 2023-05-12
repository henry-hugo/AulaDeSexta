import { Component } from '@angular/core';

@Component({
  selector: 'app-exif',
  templateUrl: './exif.component.html',
  styleUrls: ['./exif.component.css']
})
export class ExifComponent {
  adivinha = '';
  certo( numero = 1){
    this.adivinha = 'certo';
  }
  errado(numero = 2){
    this.adivinha = 'errado';
  }
  jogaDeNovo(){
    this.adivinha = 'novo';
  }
}
