import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgPokemon = 'assets/pokemon.jpg';

  number1: number = Number(prompt('Digite um valor'));
  number2: number = Number(prompt('Digite um valor'));


  somar(){
    return this.number1 + this.number2 ;
  }
}
