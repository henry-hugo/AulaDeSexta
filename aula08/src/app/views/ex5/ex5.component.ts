import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component {
number1 =0;
number2 =0;
resultado =0;

caucular(op: string){
  if(op == '+'){
    this.resultado = this.number1 + this.number2;
  } else if(op == '-'){
    this.resultado = this.number1 - this.number2;
  } else if(op == '*'){
    this.resultado = this.number1 * this.number2;
  }else
  this.resultado = this.number1 / this.number2;
}
}


