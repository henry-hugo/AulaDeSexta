import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent {
  bichos = ['girafa', 'elefante', 'camaleão', 'macaco'];
  novoAnimal = '';

  add(){
    this.bichos.push(this.novoAnimal);
  }
}
