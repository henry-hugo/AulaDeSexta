import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component {
  cor ='';
  
  mudaCor(){
    this.cor = 'cor';
  }
  voltarCor(){
    this.cor = '';
  }
}
